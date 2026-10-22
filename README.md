# Lyrian Chronicles Character Planner

An offline character planner for the tabletop RPG **Lyrian Chronicles**, in the spirit of Mids' Hero Builder:
plan and min/max a long-term build first, then make the character.

Community tool. No monetization.

## How to use it

- **On a PC:** download the repo (green **Code** button → **Download ZIP**), unzip it, and double-click `planner.html`.
  Keep `planner.html` next to the `data` folder.
- **On a phone:** use `planner-all-in-one.html`. It has all the data built in, because phone browsers
  won't load the separate data files.

Your build saves automatically in the browser. Use **Save** to download a `.json` copy and **Load** to open one.

## What's in here

| File | What it is |
|---|---|
| `planner.html` | The planner page (PC version, reads the `data` folder) |
| `planner-all-in-one.html` | Phone version with the data built in (rebuild with `tools/build_all_in_one.py`) |
| `data/classes.js` | All classes: tiers, roles, requirements, 8-step progressions, abilities |
| `data/races.js` | Main races and sub-races |
| `data/breakthroughs.js` | Breakthroughs |
| `data/requirements.js` | Class unlock rules, in a form the planner can check |
| `data/items.js` | Items: weapons, armor, alchemy, artifice, mounts, materials |
| `data/keywords.js` | Keyword definitions (shown when you tap a keyword tag) |
| `data/proficiencies.js` | Weapon/armor proficiencies and who grants them |
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
