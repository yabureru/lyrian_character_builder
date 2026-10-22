// Lyrian Chronicles Character Planner - Proficiency Data
// Sources: rulebook section "Items & equipment" (weapon group list) and the proficiency lines
// in classes.js / races.js / breakthroughs.js (all page-checked, site v0.13.2, 2026-10-21).
//
// HOW IT WORKS
//  - LC.weaponGroups / LC.armorGroups: every proficiency the planner knows about.
//  - LC.profSets: named lists used by "choose" entries (e.g. COMMON = any common weapon group).
//  - LC.profGrants: who gives what. Each entry:
//      source  - "class:<id>" / "race:<id>" / "clan:<code>" / "bt:<breakthrough id>"
//      ability - (classes only) the ability that gives it; it counts once that step is bought
//      step    - (classes only) or the step number that gives it (when it isn't an ability)
//      fixed   - proficiencies you just get
//      choose  - picks: { n: how many, from: a profSets name or a list, label: shown text }
//      note    - anything the planner can't track
//  To add a new one, copy a line and change it.

window.LC = window.LC || {};

LC.weaponGroups = [
  // kind: common-melee / common-ranged / specialized / channeling / artisan / other
  // twoHanded: has a two-handed melee version (used by "any two-handed melee weapon" requirements)
  { name: "Small Weapons",           kind: "common-melee" },
  { name: "Polearms",                kind: "common-melee", twoHanded: true },
  { name: "Light Swords",            kind: "common-melee" },
  { name: "Longswords",              kind: "common-melee", twoHanded: true },
  { name: "Dueling Weapons",         kind: "common-melee" },
  { name: "Axes",                    kind: "common-melee", twoHanded: true },
  { name: "Bludgeoning Weapons",     kind: "common-melee", twoHanded: true },
  { name: "Katanas",                 kind: "common-melee", twoHanded: true },
  { name: "Heavy Blades",            kind: "common-melee", twoHanded: true },
  { name: "Twinblades",              kind: "common-melee", twoHanded: true },
  { name: "Thrown Weapons",          kind: "common-ranged" },
  { name: "Sets of Missiles",        kind: "common-ranged" },
  { name: "Bows",                    kind: "common-ranged" },
  { name: "Crossbows",               kind: "common-ranged" },
  { name: "Muskets",                 kind: "common-ranged" },
  { name: "Slings",                  kind: "common-ranged" },
  { name: "Pistols",                 kind: "specialized" },
  { name: "Shotguns",                kind: "specialized" },
  { name: "Sniper Rifles",           kind: "specialized" },
  { name: "Saboteur Thread Daggers", kind: "specialized" },
  { name: "Lances",                  kind: "specialized" },
  { name: "Whips",                   kind: "specialized" },
  { name: "Gauntlets",               kind: "specialized" },
  { name: "Wands",                   kind: "channeling" },
  { name: "Staves",                  kind: "channeling", twoHanded: true },
  { name: "Scythes",                 kind: "artisan", twoHanded: true },
  { name: "Giant Scissors",          kind: "artisan", twoHanded: true },
  { name: "Pickaxes",                kind: "artisan" },
  { name: "Sickles",                 kind: "artisan" },
  { name: "Hori",                    kind: "artisan" },
  { name: "Smith's Hammers",         kind: "artisan" },
  { name: "Cannons",                 kind: "other", twoHanded: true },
  { name: "Artifice Chainsaws",      kind: "other", twoHanded: true },
  { name: "Unarmed",                 kind: "other" }
];

LC.armorGroups = ["Light Armor", "Medium Armor", "Heavy Armor", "Shields", "Greatshields"];

// Which item weapon "group" text means which proficiency (items.js wording -> group name above).
LC.itemGroupMap = {
  "Axes": "Axes", "Bludgeoning": "Bludgeoning Weapons", "Bow": "Bows", "Cannon": "Cannons",
  "Chainsaw": "Artifice Chainsaws", "Crossbow": "Crossbows", "Dueling Weapons": "Dueling Weapons",
  "Gauntlets": "Gauntlets", "Giant Scissors": "Giant Scissors", "Heavy Blades": "Heavy Blades",
  "Katanas": "Katanas", "Light Swords": "Light Swords", "Longswords": "Longswords", "Muskets": "Muskets",
  "Pistols": "Pistols", "Polearms": "Polearms", "Saboteur Thread Daggers": "Saboteur Thread Daggers",
  "Scythes": "Scythes", "Shotguns": "Shotguns", "Small Weapons": "Small Weapons", "Sniper Rifles": "Sniper Rifles",
  "Slings": "Slings", "Staves": "Staves", "Thrown Weapons": "Thrown Weapons", "Thrown (Missiles)": "Sets of Missiles", "Twinblades": "Twinblades", "Wands": "Wands", "Whips": "Whips"
};
// Some items are their own proficiency (by item id).
LC.itemProfById = {
  "lance-one-handed": "Lances", "pickaxe-one-handed": "Pickaxes", "sickle": "Sickles", "hori": "Hori",
  "smiths-hammer-one-handed": "Smith's Hammers", "armor-light": "Light Armor", "armor-medium": "Medium Armor",
  "armor-heavy": "Heavy Armor", "shield": "Shields",
  "shield-great": "Greatshields", "pickaxe-two-handed": "Pickaxes", "smiths-hammer-two-handed": "Smith's Hammers"
};

(function(){
  function names(kinds){ return LC.weaponGroups.filter(function(g){ return kinds.indexOf(g.kind) >= 0; }).map(function(g){ return g.name; }); }
  LC.profSets = {
    COMMON:            names(["common-melee", "common-ranged"]),
    COMMON_MELEE:      names(["common-melee"]),
    COMMON_RANGED:     names(["common-ranged"]),
    SPECIAL:           names(["specialized"]),
    COMMON_OR_SPECIAL: names(["common-melee", "common-ranged", "specialized"]),
    COMMON_OR_CHANNEL: names(["common-melee", "common-ranged", "channeling"]),
    NOT_SPECIAL:       names(["common-melee", "common-ranged", "channeling", "artisan"]),
    ANY_WEAPON:        names(["common-melee", "common-ranged", "specialized", "channeling", "artisan"]),
    // weapons crafted with Blacksmithing / Carpentry (from items.js crafting disciplines)
    SMITHING: ["Small Weapons", "Polearms", "Light Swords", "Longswords", "Dueling Weapons", "Axes", "Bludgeoning Weapons",
               "Katanas", "Heavy Blades", "Twinblades", "Sets of Missiles", "Saboteur Thread Daggers", "Lances", "Gauntlets",
               "Scythes", "Giant Scissors", "Pickaxes", "Sickles", "Hori", "Smith's Hammers"],
    CARPENTRY: ["Bows", "Crossbows", "Staves", "Wands", "Slings", "Whips"],
    ARMOR_OR_SHIELD: ["Light Armor", "Medium Armor", "Heavy Armor", "Shields", "Greatshields"]
  };
})();

LC.profGrants = [
  // ---------------- Races ----------------
  { source: "race:human", choose: [{ n: 1, from: "COMMON", label: "One common weapon group" }] },
  { source: "race:demon", choose: [{ n: 1, from: "COMMON", label: "One common weapon (or skip it and take +5 clan skill points instead)" }] },
  { source: "clan:Wi", fixed: ["Saboteur Thread Daggers"] },

  // ---------------- Classes (count once that ability's step is bought) ----------------
  { source: "class:acolyte", ability: "acolytes-journey", fixed: ["Light Armor", "Shields"],
    choose: [{ n: 1, from: "COMMON_OR_CHANNEL", label: "One common weapon group (may include one Channeling weapon)" }] },
  { source: "class:adventurer", ability: "adventurer-essentials",
    choose: [{ n: 1, from: "COMMON", label: "One common weapon group" },
             { n: 1, from: "COMMON_OR_SPECIAL", label: "One more common or specialized weapon group" },
             { n: 1, from: "ARMOR_OR_SHIELD", label: "One armor category, OR Shields, OR Greatshields" }] },
  { source: "class:alchemist", ability: "the-alchemist", choose: [{ n: 1, from: "COMMON", label: "1 basic weapon" }] },
  { source: "class:armorsmith", ability: "armorsmith-basics", fixed: ["Light Armor", "Medium Armor", "Shields", "Smith's Hammers"],
    choose: [{ n: 1, from: "COMMON_MELEE", label: "One basic melee weapon" }] },
  { source: "class:armorsmith", step: 5, choose: [{ n: 1, from: ["Heavy Armor", "Greatshields"], label: "Heavy Armor OR Greatshields (Level 5 Heart step)" }] },
  { source: "class:artificer", ability: "artificer-basics", fixed: ["Muskets"], note: "Also the Artificer's Multitool." },
  { source: "class:battlemaster", ability: "arms-mastery", note: "Counts as proficient with every melee weapon you wield, but NOT for class requirements." },
  { source: "class:blacksmith", ability: "craft-weapons", fixed: ["Smith's Hammers"], choose: [{ n: 1, from: "SMITHING", label: "1 smithing weapon" }] },
  { source: "class:botanist", ability: "botany-study", fixed: ["Artifice Chainsaws"] },
  { source: "class:cannoneer", ability: "cannon-expert", fixed: ["Cannons"] },
  { source: "class:carpenter", ability: "carpenter-basics", fixed: ["Axes"], choose: [{ n: 1, from: ["Bows", "Crossbows"], label: "Bows OR Crossbows" }] },
  { source: "class:cavalier", ability: "mounted-basics", fixed: ["Polearms", "Lances", "Light Armor", "Shields"],
    choose: [{ n: 1, from: "COMMON", label: "One other common weapon group" }] },
  { source: "class:culinarian", ability: "culinary-basics", fixed: ["Small Weapons"], note: "Frying Pan counts as a Light Bludgeoning weapon you're proficient with." },
  { source: "class:cultivator", ability: "cultivators-journey", fixed: ["Unarmed", "Light Armor", "Light Swords"],
    choose: [{ n: 1, from: "ANY_WEAPON", label: "One additional weapon of your choice" }] },
  { source: "class:farmer", ability: "farming-basics", fixed: ["Scythes", "Sickles"] },
  { source: "class:fencer", ability: "fancy-footwork", fixed: ["Dueling Weapons"] },
  { source: "class:fighter", ability: "fighters-journey", fixed: ["Light Armor", "Medium Armor", "Shields"],
    choose: [{ n: 5, from: "COMMON", label: "5 common weapon groups" }] },
  { source: "class:forager", ability: "foragers-path", fixed: ["Giant Scissors"], choose: [{ n: 1, from: ["Axes", "Hori"], label: "Axes OR Hori" }] },
  { source: "class:forgemaster", ability: "expertise-study-blacksmithing", choose: [{ n: 1, from: "SMITHING", label: "One smithing melee weapon (can be specialized)" }] },
  { source: "class:fusilier", ability: "recoil-control", choose: [{ n: 1, from: ["Pistols", "Muskets", "Crossbows"], label: "Pistols, Muskets OR Crossbows" }] },
  { source: "class:great-knight", ability: "heavy-cavalry", fixed: ["Medium Armor", "Heavy Armor"] },
  { source: "class:guardian", ability: "controlled-opportunities", fixed: ["Heavy Armor"] },
  { source: "class:gunslinger", ability: "gunslingers-agility", fixed: ["Pistols"] },
  { source: "class:idol", ability: "idols-journey", fixed: ["Wands", "Small Weapons", "Light Armor"] },
  { source: "class:mage", ability: "mages-journey", fixed: ["Wands", "Staves"], note: "Channeling weapons + Arcane Mastery." },
  { source: "class:magitechnician", ability: "expertise-study-artificing", choose: [{ n: 1, from: "COMMON_OR_SPECIAL", label: "One basic or specialized weapon" }] },
  { source: "class:maid", ability: "maid-training", fixed: ["Staves", "Small Weapons", "Sets of Missiles", "Light Armor"] },
  { source: "class:manifestor", ability: "manifestors-journey", fixed: ["Light Armor", "Shields"], choose: [{ n: 1, from: "COMMON_MELEE", label: "1 common melee weapon" }] },
  { source: "class:martial-artist", ability: "martial-artists-journey", fixed: ["Unarmed"] },
  { source: "class:master-armorer", ability: "expertise-study-armorsmithing", choose: [{ n: 1, from: ["Heavy Armor", "Greatshields"], label: "Heavy Armor OR Greatshields" }] },
  { source: "class:medic", ability: "medics-journey", fixed: ["Small Weapons", "Sets of Missiles", "Light Armor"] },
  { source: "class:merchant", ability: "peddler-of-wares", choose: [{ n: 1, from: "COMMON", label: "1 common weapon group" }] },
  { source: "class:mime", ability: "mimes-journey", choose: [{ n: 1, from: "COMMON", label: "1 common weapon" }, { n: 1, from: "SPECIAL", label: "1 specialized weapon" }] },
  { source: "class:miner", ability: "rock-and-stone", fixed: ["Pickaxes"], choose: [{ n: 1, from: ["Light Armor", "Medium Armor", "Heavy Armor", "Shields"], label: "One armor type or the shield" }] },
  { source: "class:mogul", ability: "merchant-lord", fixed: ["Pistols"] },
  { source: "class:ninja", ability: "ninja-style", fixed: ["Small Weapons", "Sets of Missiles"] },
  { source: "class:pierrot", ability: "pierrots-journey", fixed: ["Small Weapons", "Bludgeoning Weapons", "Light Armor"] },
  { source: "class:protector", ability: "greatshield-master", fixed: ["Greatshields"] },
  { source: "class:ranger", ability: "rangers-journey", fixed: ["Light Armor", "Medium Armor"],
    choose: [{ n: 1, from: "COMMON_RANGED", label: "One common ranged weapon group" }, { n: 1, from: "COMMON_MELEE", label: "One common melee weapon group" }] },
  { source: "class:rogue", ability: "rogues-journey", fixed: ["Light Armor"],
    choose: [{ n: 1, from: ["Small Weapons", "Light Swords", "Dueling Weapons", "Sets of Missiles"], label: "Small weapons, Light swords, Dueling weapons OR Set of missiles" }] },
  { source: "class:saboteur", ability: "saboteur-key", fixed: ["Saboteur Thread Daggers"] },
  { source: "class:sniper", ability: "snipe", fixed: ["Sniper Rifles"] },
  { source: "class:sorcerer", ability: "sorcerers-journey", fixed: ["Wands", "Staves", "Light Armor"] },
  { source: "class:tactician", ability: "scholar-of-tactics", fixed: ["Pistols"] },
  { source: "class:timberwright", ability: "expertise-study-carpentry",
    choose: [{ n: 1, from: ["Bows", "Crossbows", "Staves", "Wands", "Slings", "Whips", "Artifice Chainsaws"], label: "One carpentry weapon (incl. specialized) or artifice chainsaws" }] },
  { source: "class:transmuter", ability: "transmutation-basics-key", choose: [{ n: 1, from: "COMMON", label: "1 basic weapon type" }], note: "Also the Alchemist's Alembic." },
  { source: "class:vampire", ability: "vampiric-strength", fixed: ["Unarmed"] },

  // ---------------- Breakthroughs ----------------
  { source: "bt:greatshield-training", fixed: ["Greatshields"] },
  { source: "bt:heavy-armor-training", fixed: ["Heavy Armor"] },
  { source: "bt:light-armor-training", fixed: ["Light Armor", "Shields"] },
  { source: "bt:medium-armor-training", fixed: ["Medium Armor"] },
  { source: "bt:speciality-weapon-training", choose: [{ n: 1, from: "SPECIAL", label: "One specialized weapon group" }] },
  { source: "bt:weapon-training", choose: [{ n: 1, from: "NOT_SPECIAL", label: "One weapon group (not specialized)" }] }
];
