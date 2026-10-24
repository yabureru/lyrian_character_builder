# Lyrian Chronicles Character Planner

An offline character planner for the tabletop RPG **Lyrian Chronicles**, in the spirit of Mids' Hero Builder:
plan and min/max a long-term build first, then make the character.

Community tool. No monetization.

> **Unofficial fan tool.** Not affiliated with or endorsed by Angel's Sword Studios.
> Lyrian Chronicles and its content belong to Angel's Sword Studios.

## How to use it

- **On a PC:** download the repo (green **Code** button → **Download ZIP**), unzip it, and double-click `planner.html`.
  Keep `planner.html` next to the `data` folder.
- **On a phone:** use `planner-all-in-one.html`. It has all the data built in, because phone browsers
  won't load the separate data files.

Your build saves automatically in the browser. Use **Save** to keep a `.json` copy (it asks for a file name, starting from the character's name, so saves don't overwrite each other) and **Load** to open one.
**Share** gives you a text summary (for Discord or your GM) and a one-line build code anyone can paste into their planner.
**Share → Character data** gives the whole character with every number worked out (HP, Mana, AP, RP, rolls, skills, abilities), as a code or a `.json` file, for use in other tools.
**Compare** puts two builds side by side: press *Pin current build*, try some changes, then open Compare again to see exactly what went up or down. You can also compare against a saved file or a build code.
**Item mods**: press *Mods* on anything in your inventory to tick its mods (its own, plus the Universal weapon/armor/artifice/crafting mods that fit). Mods that change numbers (Guard, Block, Dodge, Burden, Mana, armor penalties, Melding...) are added in; the rest show as notes, with crafting points totalled.
**Undo / Redo** (or Ctrl+Z / Ctrl+Y) step back through your changes, including Reset and Load.
**Print sheet** fills your build into the **official fillable character sheet** (Character Sheet 1.2) and downloads it, ready to print. It prints the character **as of now** (only what your earned EXP/IP reaches) or, if you choose, the whole plan. **Full-size pages** (on by default) replace the official boxed ability pages: abilities, breakthroughs and gear in the same style, every box as tall as its text, so nothing is cut off. It can also add your **Backstory** (written in Identity) and your **Build roadmap** (every planned purchase in order, with EXP and IP needed) as the last pages.
The official PDF isn't included here (it belongs to Angel's Sword Studios). Get it free from the [Lyrian Chronicles Discord](https://discord.gg/EFg2EbDnTa), channel **#how-to-play** ([Character Sheet 1.2 post](https://discord.com/channels/909435736351207424/1293704039543996488/1346225007940079656)), then load it once and the planner remembers it in that browser. The Print sheet window shows this link until a sheet is loaded.

### Features
- Race, sub-race, stats, classes (all 8 steps), skills and expertise, proficiencies, breakthroughs and items
- Requirement checking for every class, including proficiencies and element masteries
- Combat numbers with always-on bonuses; tap any number to see where it comes from
- Toggles for situational bonuses (stances, auras, transformations)
- **Build roadmap**: every purchase in order with the EXP/IP needed to reach it; turn on *Plan ahead* to plan past your current EXP
- **What can I unlock next?**: classes available now, one step away (grouped by what you need, with the EXP cost) and two steps away
- Details window for any class, race, breakthrough or item, and keyword pop-ups

## What's in here

| File | What it is |
|---|---|
| `planner.html` | The planner page (PC version, reads the `data` folder) |
| `planner-all-in-one.html` | Phone version with the data built in (rebuild with `tools/build_all_in_one.py`) |
| `data/classes.js` | All classes: tiers, roles, requirements, 8-step progressions, abilities |
| `data/races.js` | Main races and sub-races |
| `data/breakthroughs.js` | Breakthroughs |
| `data/mods.js` | Which item mods change your numbers (Guard, Block, Burden...) and which Universal mod lists fit which items |
| `data/requirements.js` | Class unlock rules, in a form the planner can check |
| `data/items.js` | Items: weapons, armor, alchemy, artifice, mounts, materials |
| `data/keywords.js` | Keyword definitions (shown when you tap a keyword tag) |
| `data/proficiencies.js` | Weapon/armor proficiencies and who grants them |
| `data/sheet.js` | Field map of the official Character Sheet 1.2 (positions only, no artwork) |
| `data/bonuses.js` | Race bonuses, situational (stance/aura/transformation) bonuses and notes |
| `RULES_REFERENCE.md` | Condensed rules used for the planner's formulas |
| `ISSUES.md` | Known gaps, unclear rules and things to check |

## About the data

- Official site: https://rpg.angelssword.com/
- The data was checked page by page against an **unofficial static copy** of the rules
  (https://lyrian.splatpass.net/), game version **0.13.2**. Spot-check anything important against the official site.
- Ability and item descriptions are plain-English summaries written for this tool, not the official wording.
  Numbers, costs, ranges and keywords are exact.
- Anything that couldn't be found is marked `MISSING` and listed in `ISSUES.md`.

## Updating

Each data file is plain JavaScript you can edit in Notepad. Records are alphabetical, one block per entry;
copy an existing block and change it. After editing data, rebuild the phone version:

```
python tools/build_all_in_one.py
```

If Angel's Sword Studios releases a new character sheet, rebuild the field map from it:

```
python tools/make_sheet_map.py "path/to/Character_Sheet.pdf"
```
(The planner field names are mapped in `sheetValues()` in planner.html; check them if the new sheet renames fields.)

## License

The planner code, data layout and plain-English summaries are released under the [MIT License](LICENSE).
This does not cover Lyrian Chronicles itself: the game, its names and its rules belong to Angel's Sword Studios.
