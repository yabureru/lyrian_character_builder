# Builds planner-all-in-one.html (the phone version) from planner.html + the data folder.
# Run from the repo folder:  python tools/build_all_in_one.py
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
page = (root / "planner.html").read_text(encoding="utf-8")
def inline(m):
    js = (root / m.group(1)).read_text(encoding="utf-8").replace("</script", "<\\/script")
    return "<script>\n/* ---- " + m.group(1) + " (built in) ---- */\n" + js + "\n</script>"
out = re.sub(r'<script src="(data/[a-z]+\.js)"></script>', inline, page)
out = out.replace("<!-- Game data (edit these files, not this page, when the game updates) -->",
                  "<!-- ALL-IN-ONE VERSION: the data files are copied inside this page so it works on phones. -->")
(root / "planner-all-in-one.html").write_text(out, encoding="utf-8")
print("Wrote planner-all-in-one.html")
