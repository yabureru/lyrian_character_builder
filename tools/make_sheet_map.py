# Builds data/sheet.js from the official fillable character sheet PDF.
# The planner uses this map to fill YOUR copy of the sheet; the PDF itself is not copied into the repo.
# Run from the repo folder:  python tools/make_sheet_map.py "path/to/Character_Sheet_1.2.pdf"
import sys, io, json, os, re, pathlib
from pypdf import PdfReader
from pypdf.generic import DictionaryObject, NameObject

pdf_path = sys.argv[1]
root = pathlib.Path(__file__).resolve().parent.parent
raw = open(pdf_path, "rb").read()
r = PdfReader(pdf_path)

def ser(obj):
    s = io.BytesIO(); obj.write_to_stream(s); return s.getvalue().decode("latin-1")

m = re.search(rb"startxref\s+(\d+)\s+%%EOF\s*$", raw)
startxref = int(m.group(1))
tr = r.trailer
ids = tr.get("/ID")
acro = tr["/Root"].get_object()["/AcroForm"].get_object()

fonts = {}
for fname, ref in acro["/DR"]["/Font"].items():
    fo = ref.get_object()
    entry = {"ref": "%d 0 R" % ref.idnum}
    if "/Widths" in fo:
        entry["first"] = int(fo.get("/FirstChar", 0))
        entry["widths"] = [int(round(float(w))) for w in fo["/Widths"]]
    fonts[fname[1:]] = entry

# page number of each widget
page_of = {}
for pi, page in enumerate(r.pages):
    for a in page.get("/Annots") or []:
        page_of[a.idnum] = pi + 1

fields = {}
for ref in acro["/Fields"]:
    fo = ref.get_object()
    name = str(fo["/T"])
    kids = fo.get("/Kids")
    widgets = []
    if kids:
        for k in kids:
            ko = k.get_object()
            kd = DictionaryObject({kk: vv for kk, vv in ko.items() if kk not in ("/AP", "/V")})
            widgets.append({"obj": k.idnum, "dict": ser(kd), "rect": [round(float(x), 2) for x in ko["/Rect"]],
                            "page": page_of.get(k.idnum)})
        pd = DictionaryObject({kk: vv for kk, vv in fo.items() if kk not in ("/V", "/AP")})
        parent = {"obj": ref.idnum, "dict": ser(pd)}
    else:
        wd = DictionaryObject({kk: vv for kk, vv in fo.items() if kk not in ("/AP", "/V")})
        widgets.append({"obj": ref.idnum, "dict": ser(wd), "rect": [round(float(x), 2) for x in fo["/Rect"]],
                        "page": page_of.get(ref.idnum)})
        parent = None
    da = str(fo.get("/DA", acro.get("/DA", "/Helv 0 Tf 0 g")))
    dm = re.search(r"/(\S+)\s+([\d.]+)\s+Tf", da)
    fields[name] = {"parent": parent, "widgets": widgets, "font": dm.group(1) if dm else "Helv",
                    "size": float(dm.group(2)) if dm else 0, "ff": int(fo.get("/Ff", 0)),
                    "value": str(fo["/V"]) if "/V" in fo else None}

# The page list, and the blank "Abilities" page (page 3) whose background picture the planner reuses
# for its extra Backstory / Roadmap pages.
pages_ref = r.pages[0].get_object().raw_get("/Parent")
pages_obj = pages_ref.get_object()
p3 = r.pages[2].get_object()
res3 = DictionaryObject({k: v for k, v in p3["/Resources"].items()})
extra = {
    "pages": {"obj": pages_ref.idnum, "kids": [k.idnum for k in pages_obj["/Kids"]], "count": int(pages_obj["/Count"])},
    "blank": {"contents": "%d 0 R" % p3.raw_get("/Contents").idnum, "resources": ser(res3)},
}

out = {
    "sheet": "Character Sheet 1.2",
    "fileSize": len(raw),
    "startxref": startxref,
    "size": int(tr["/Size"]),
    "root": "%d 0 R" % tr.raw_get("/Root").idnum,
    "info": ("%d 0 R" % tr.raw_get("/Info").idnum) if "/Info" in tr else None,
    "id": [bytes(x.original_bytes if hasattr(x, "original_bytes") else x).hex() for x in ids] if ids else None,
    "fonts": fonts,
    "fields": fields,
    "pages": extra["pages"],
    "blank": extra["blank"],
}
js = ("// Field map for the official Lyrian Chronicles fillable character sheet (" + out["sheet"] + ").\n"
      "// Made by tools/make_sheet_map.py from the official PDF. It only describes where each form field is;\n"
      "// the sheet itself (artwork, fonts) is NOT included - the planner fills the copy you load.\n"
      "window.LC = window.LC || {};\nLC.sheetMap = " + json.dumps(out, separators=(",", ":")) + ";\n")
(root / "data" / "sheet.js").write_text(js, encoding="utf-8")
print("Wrote data/sheet.js:", len(fields), "fields,", len(js), "bytes")
