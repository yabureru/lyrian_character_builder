// Lyrian Chronicles Character Planner - Class Entry Requirements & Unlock Routes
// Built from the "Requirements" line on each class page (already page-checked in classes.js,
// site v0.13.2, 2026-10-21). This file turns each line into rules the planner can check.
//
// HOW TO READ A RECORD
//  REQ("class-id", { text: "...exact requirement line...", routes: [ ROUTE, ROUTE, ... ] })
//  - The class can be unlocked if ANY ONE route is fully met.
//  - A ROUTE is a list of conditions that must ALL be met.
//  - Condition types:
//      { mastered: "class-id" }            that class is mastered
//      { masteredAny: N }                  any N classes mastered ("Any class mastered" = 1)
//      { masteredTier: T, count: N }       N classes of tier T (or higher) mastered
//      { race: "race-id" }                 your race or sub-race (main-race id = any of its sub-races)
//      { breakthrough: "breakthrough-id" } you own that breakthrough
//      { mastery: "Element" }              you have that Elemental Mastery ("ANY" = any element)
//      { proficiency: [ ... ] }            proficient in at least one of these
//      { skill: "Skill", points: N }       at least N skill points in that skill
//      { expertise: [ ... ], points: N }   at least N points in one of these expertises
//      { ability: "class-id/ability-id" }  you have learned that ability
//      { hasSpell: true, damaging: bool }  you know at least one ability with the Spell keyword
//      { classLearned: "class-id" }        you have unlocked that class (any points in it)
//      { mysticEyeSlot: 1 }                at least one open mystic eye slot
//  - "unclear" notes mark lines whose AND/OR reading is ambiguous on the site (see ISSUES.md).
//  - Breakthrough "Early Ascension" counts as 1 mastered class for tier 2 "masteredAny" checks only.
//  - Breakthrough "The Unknown Paladin" satisfies { race: "human" } for the three Paladin classes.
//
//  At the bottom, LC.buildLeadsTo() makes the reverse list ("this class helps unlock ...").

window.LC = window.LC || {};
LC.requirements = LC.requirements || {};

function REQ(id, rec){
  rec.id = id;
  LC.requirements[id] = rec;
}

// ----- Tier 1 classes with no requirements -----
["adventurer","alchemist","armorsmith","artificer","blacksmith","carpenter","cavalier","culinarian",
 "cultivator","farmer","fighter","forager","idol","mage","maid","manifestor","martial-artist","medic",
 "merchant","mime","miner","pierrot","ranger","rogue","sorcerer","transmuter"].forEach(function(id){
  REQ(id, { text: null, routes: [ [] ] });
});

REQ("abjurer", { text: "Arcane Barrier learned, and at least 1 spell that deals damage.",
  routes: [ [ { ability: "mage/arcane-barrier" }, { hasSpell: true, damaging: true } ] ] });
REQ("acolyte", { text: "Divine's Chosen breakthrough, OR being Human.",
  routes: [ [ { breakthrough: "divine-s-chosen" } ], [ { race: "human" } ] ] });
REQ("aerial-mage", { text: "Mage, Artificer or Aeromancer mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "artificer" } ], [ { mastered: "aeromancer" } ] ] });
REQ("aeromancer", { text: "Any class mastered or Wind mastered.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Wind" } ] ] });
REQ("aeromaster", { text: "Aeromancer mastered.", routes: [ [ { mastered: "aeromancer" } ] ] });
REQ("aetherie", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ],
  note: "Sheepfolk (Highly Sensitive to Magic) may enter without meeting this, for 100 EXP less." });
REQ("agrarian", { text: "Farmer mastered.", routes: [ [ { mastered: "farmer" } ] ] });
REQ("alchemeister", { text: "Alchemist mastered.", routes: [ [ { mastered: "alchemist" } ] ] });
REQ("alkahest", { text: "Transmuter mastered.", routes: [ [ { mastered: "transmuter" } ] ] });
REQ("amanita", { text: "Mycomancer mastered.", routes: [ [ { mastered: "mycomancer" } ] ] });
REQ("angelblooded", { text: "Must have the Angelblooded breakthrough.",
  routes: [ [ { breakthrough: "angelblooded-human-restricted" } ] ] });
REQ("animal-summoner", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("anti-mage", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("arcanist", { text: "Mage or Sorcerer mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ] ] });
REQ("archer", { text: "Ranger mastered.", routes: [ [ { mastered: "ranger" } ] ] });
REQ("archsage", { text: "Sage mastered.", routes: [ [ { mastered: "sage" } ] ] });
REQ("armiger", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("assassin", { text: "Rogue or Culinarian mastered, and any tier 2 class mastered.",
  routes: [ [ { mastered: "rogue" }, { masteredTier: 2, count: 1 } ],
            [ { mastered: "culinarian" }, { masteredTier: 2, count: 1 } ] ] });
REQ("aurora-blade-style", { text: "Any class mastered. Proficiency in at least one of light swords, longsword, katana or dueling weapon.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["Light Swords", "Longsword", "Katana", "Dueling Weapons"] } ] ] });
REQ("bajiquan-style", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("bard", { text: "Idol mastered, OR at least 5 points in Art (Singing) expertise, Art (Idol) expertise, or an Art expertise for an instrument.",
  routes: [ [ { mastered: "idol" } ],
            [ { expertise: ["Art (Singing)", "Art (Idol)", "Art (any instrument)"], points: 5 } ] ] });
REQ("battle-mage", { text: "Have at least 1 spell, and be proficient in at least 1 melee weapon.",
  routes: [ [ { hasSpell: true }, { proficiency: ["ANY_MELEE"] } ] ] });
REQ("battlemaster", { text: "Adventurer or Fighter mastered.",
  routes: [ [ { mastered: "adventurer" } ], [ { mastered: "fighter" } ] ] });
REQ("berserker", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("biochemist", { text: "Alchemist mastered or Transmuter mastered.",
  routes: [ [ { mastered: "alchemist" } ], [ { mastered: "transmuter" } ] ] });
REQ("black-oath-style", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("bloodbinder", { text: "At least 1 class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("bodyguard", { text: "Fighter, Maid or Armorsmith mastered.",
  routes: [ [ { mastered: "fighter" } ], [ { mastered: "maid" } ], [ { mastered: "armorsmith" } ] ] });
REQ("botanist", { text: "Forager mastered.", routes: [ [ { mastered: "forager" } ] ] });
REQ("brawler", { text: "Martial Artist mastered.", routes: [ [ { mastered: "martial-artist" } ] ] });
REQ("cannoneer", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("chronofighter", { text: "Any class mastered, proficient in any melee weapon.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["ANY_MELEE"] } ] ] });
REQ("chronomancer", { text: "Mage or Sorcerer mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ] ] });
REQ("colossus", { text: "Any tier 2 class mastered. Adventurer or Fighter mastered.",
  routes: [ [ { masteredTier: 2, count: 1 }, { mastered: "adventurer" } ],
            [ { masteredTier: 2, count: 1 }, { mastered: "fighter" } ] ] });
REQ("cryomancer", { text: "Any class mastered or Frost mastery.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Frost" } ] ] });
REQ("curse-knight", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("cutthroat", { text: "Culinarian or Rogue mastered.",
  routes: [ [ { mastered: "culinarian" } ], [ { mastered: "rogue" } ] ] });
REQ("daionmyoji", { text: "Onmyoji mastered.", routes: [ [ { mastered: "onmyoji" } ] ] });
REQ("dark-priest", { text: "Acolyte, Mage, Sorcerer or Eremancer mastered.",
  routes: [ [ { mastered: "acolyte" } ], [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ], [ { mastered: "eremancer" } ] ] });
REQ("deadeye", { text: "Marksman, Gunslinger, Scout, Harrier or Archer mastered.",
  routes: [ [ { mastered: "marksman" } ], [ { mastered: "gunslinger" } ], [ { mastered: "scout" } ], [ { mastered: "harrier" } ], [ { mastered: "archer" } ] ] });
REQ("death-knight", { text: "Armorsmith or Fighter mastered and any tier 2 class mastered.",
  routes: [ [ { mastered: "armorsmith" }, { masteredTier: 2, count: 1 } ],
            [ { mastered: "fighter" }, { masteredTier: 2, count: 1 } ] ] });
REQ("dragoon", { text: "Lancer mastered. 10 points in the Athletics (Jumping) expertise skill, OR be a Jiangshi.",
  routes: [ [ { mastered: "lancer" }, { expertise: ["Athletics (Jumping)"], points: 10 } ],
            [ { mastered: "lancer" }, { race: "jiangshi" } ] ],
  unclear: "Read as: Lancer mastered AND (10 Athletics (Jumping) expertise OR Jiangshi). Could also mean Jiangshi alone is enough." });
REQ("duelist", { text: "Fencer mastered.", routes: [ [ { mastered: "fencer" } ] ] });
REQ("earthcleaving-style", { text: "Any class mastered. Proficiency in any two-handed melee weapon.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["ANY_TWO_HANDED_MELEE"] } ] ] });
REQ("electromancer", { text: "Any class mastered or have Lightning element mastered.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Lightning" } ] ] });
REQ("electromaster", { text: "Electromancer mastered.", routes: [ [ { mastered: "electromancer" } ] ] });
REQ("elementalist", { text: "Mage or Sorcerer mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ] ] });
REQ("eremancer", { text: "Any class mastered or Dark Mastery.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Dark" } ] ] });
REQ("evil-eye", { text: "Any class mastered. Must have at least 1 mystic eye slot open.",
  routes: [ [ { masteredAny: 1 }, { mysticEyeSlot: 1 } ] ] });
REQ("exalted-blade", { text: "Sword Paladin mastered.", routes: [ [ { mastered: "sword-paladin" } ] ] });
REQ("exalted-shield", { text: "Shield Paladin mastered.", routes: [ [ { mastered: "shield-paladin" } ] ] });
REQ("excavator", { text: "Miner mastered.", routes: [ [ { mastered: "miner" } ] ] });
REQ("executor", { text: "Any mastered class + any points in Acolyte.",
  routes: [ [ { masteredAny: 1 }, { classLearned: "acolyte" } ] ],
  unclear: "'Any points in Acolyte' read as: you have unlocked the Acolyte class. Could mean Acolyte must be a DIFFERENT class from the mastered one." });
REQ("fae-knight", { text: "Fae only. Any class mastered.",
  routes: [ [ { race: "fae" }, { masteredAny: 1 } ] ] });
REQ("fae-knight-willow-style", { text: "Fae Knight mastered.", routes: [ [ { mastered: "fae-knight" } ] ] });
REQ("faerie-light-eyes", { text: "Must have the 'Mystic Eyes of Faerie Light' breakthrough. Must have at least 1 mystic eye slot open.",
  routes: [ [ { breakthrough: "mystic-eyes-of-faerie-light-fae" }, { mysticEyeSlot: 1 } ] ] });
REQ("fencer", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("five-harmonies-style", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("flame-sentinel", { text: "Mage mastered or Fire mastery.",
  routes: [ [ { mastered: "mage" } ], [ { mastery: "Fire" } ] ] });
REQ("flash-star-blade-style", { text: "Any class mastered. Proficiency in one of light swords, longsword, katana or dueling weapon.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["Light Swords", "Longsword", "Katana", "Dueling Weapons"] } ] ],
  note: "Raijin start with this class unlocked at level 1 (Lightning Weapon Expert)." });
REQ("flowing-wind-style", { text: "Forager, Fighter, Rogue, Martial Artist, Cultivator or Adventurer mastered.",
  routes: [ [ { mastered: "forager" } ], [ { mastered: "fighter" } ], [ { mastered: "rogue" } ], [ { mastered: "martial-artist" } ], [ { mastered: "cultivator" } ], [ { mastered: "adventurer" } ] ] });
REQ("forgemaster", { text: "Blacksmith mastered.", routes: [ [ { mastered: "blacksmith" } ] ] });
REQ("fusilier", { text: "Ranger mastered.", routes: [ [ { mastered: "ranger" } ] ] });
REQ("geomancer", { text: "Any class mastered or Earth mastered.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Earth" } ] ] });
REQ("geomaster", { text: "Geomancer mastered.", routes: [ [ { mastered: "geomancer" } ] ] });
REQ("grandmaster", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("granite-warden", { text: "Mage mastered or Earth mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastery: "Earth" } ] ] });
REQ("gravitect", { text: "Mage mastered and one tier 2 class mastered.",
  routes: [ [ { mastered: "mage" }, { masteredTier: 2, count: 1 } ] ] });
REQ("graviturge", { text: "Mage or Sorcerer mastered and one tier 2 class mastered.",
  routes: [ [ { mastered: "mage" }, { masteredTier: 2, count: 1 } ], [ { mastered: "sorcerer" }, { masteredTier: 2, count: 1 } ] ] });
REQ("great-berserker", { text: "Berserker mastered.", routes: [ [ { mastered: "berserker" } ] ] });
REQ("great-knight", { text: "Cavalier mastered.", routes: [ [ { mastered: "cavalier" } ] ] });
REQ("guardian", { text: "Fighter or Armorsmith mastered.",
  routes: [ [ { mastered: "fighter" } ], [ { mastered: "armorsmith" } ] ] });
REQ("gun-paladin", { text: "Human. Ranger mastered.",
  routes: [ [ { race: "human" }, { mastered: "ranger" } ], [ { breakthrough: "the-unknown-paladin" }, { mastered: "ranger" } ] ] });
REQ("gunfu", { text: "Cultivator or Martial Artist mastered. Gunslinger mastered.",
  routes: [ [ { mastered: "cultivator" }, { mastered: "gunslinger" } ], [ { mastered: "martial-artist" }, { mastered: "gunslinger" } ] ] });
REQ("gunslinger", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("harrier", { text: "Ranger mastered.", routes: [ [ { mastered: "ranger" } ] ] });
REQ("high-priest", { text: "Priest mastered.", routes: [ [ { mastered: "priest" } ] ] });
REQ("highlander", { text: "Adventurer, Fighter, Farmer, Blacksmith or Miner mastered.",
  routes: [ [ { mastered: "adventurer" } ], [ { mastered: "fighter" } ], [ { mastered: "farmer" } ], [ { mastered: "blacksmith" } ], [ { mastered: "miner" } ] ] });
REQ("hoarfrost", { text: "Cryomancer mastered.", routes: [ [ { mastered: "cryomancer" } ] ] });
REQ("hussar", { text: "Cavalier mastered.", routes: [ [ { mastered: "cavalier" } ] ] });
REQ("hydromancer", { text: "Any class mastered or Water mastered.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Water" } ] ],
  note: "Selkie start with Hydromancer unlocked at level 2 (Blue Soul)." });
REQ("iai-style", { text: "Any class mastered. Proficient with Katana.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["Katana"] } ] ] });
REQ("jewel-idol", { text: "Idol mastered.", routes: [ [ { mastered: "idol" } ] ] });
REQ("jonin", { text: "Ninja mastered.", routes: [ [ { mastered: "ninja" } ] ] });
REQ("knight-paramount", { text: "Great Knight mastered.", routes: [ [ { mastered: "great-knight" } ] ] });
REQ("lancer", { text: "Cavalier, Adventurer or Fighter mastered. Proficient in polearms or lances.",
  routes: [ [ { mastered: "cavalier" }, { proficiency: ["Polearms", "Lance"] } ],
            [ { mastered: "adventurer" }, { proficiency: ["Polearms", "Lance"] } ],
            [ { mastered: "fighter" }, { proficiency: ["Polearms", "Lance"] } ] ] });
REQ("mage-knight", { text: "Cavalier mastered.", routes: [ [ { mastered: "cavalier" } ] ] });
REQ("magitechnician", { text: "Artificer mastered.", routes: [ [ { mastered: "artificer" } ] ] });
REQ("marksman", { text: "Ranger mastered.", routes: [ [ { mastered: "ranger" } ] ] });
REQ("master-armorer", { text: "Armorsmith mastered.", routes: [ [ { mastered: "armorsmith" } ] ] });
REQ("mist-veil-elegy", { text: "Idol or Bard mastered, OR 10 points in Art (Flute) expertise and any class mastered.",
  routes: [ [ { mastered: "idol" } ], [ { mastered: "bard" } ],
            [ { expertise: ["Art (Flute)"], points: 10 }, { masteredAny: 1 } ] ] });
REQ("mogul", { text: "Merchant mastered.", routes: [ [ { mastered: "merchant" } ] ] });
REQ("monk", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("mycomancer", { text: "Mage mastered or Earth Mastery.",
  routes: [ [ { mastered: "mage" } ], [ { mastery: "Earth" } ] ] });
REQ("mystic-eyes-of-destruction", { text: "Evil Eye mastered, OR Oni plus any tier 2 mastered. At least 1 mystic eye slot open.",
  routes: [ [ { mastered: "evil-eye" }, { mysticEyeSlot: 1 } ], [ { race: "oni" }, { masteredTier: 2, count: 1 }, { mysticEyeSlot: 1 } ] ] });
REQ("mystic-eyes-of-domination", { text: "Evil Eye mastered, OR Demon plus any tier 2 mastered. At least 1 mystic eye slot open.",
  routes: [ [ { mastered: "evil-eye" }, { mysticEyeSlot: 1 } ], [ { race: "demon" }, { masteredTier: 2, count: 1 }, { mysticEyeSlot: 1 } ] ] });
REQ("mystic-eyes-of-petrification", { text: "Evil Eye mastered, OR Lamiafolk plus any tier 2 mastered. At least 1 mystic eye slot open.",
  routes: [ [ { mastered: "evil-eye" }, { mysticEyeSlot: 1 } ], [ { race: "lamiafolk" }, { masteredTier: 2, count: 1 }, { mysticEyeSlot: 1 } ] ] });
REQ("naturalist", { text: "Medic, Acolyte, Sorcerer, Mage, Ranger, Farmer, Forager or Mycomancer mastered.",
  routes: [ [ { mastered: "medic" } ], [ { mastered: "acolyte" } ], [ { mastered: "sorcerer" } ], [ { mastered: "mage" } ], [ { mastered: "ranger" } ], [ { mastered: "farmer" } ], [ { mastered: "forager" } ], [ { mastered: "mycomancer" } ] ] });
REQ("necromancer", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("necromaster", { text: "Necromancer mastered.", routes: [ [ { mastered: "necromancer" } ] ] });
REQ("ninja", { text: "Rogue mastered.", routes: [ [ { mastered: "rogue" } ] ] });
REQ("nomad", { text: "Cavalier mastered.", routes: [ [ { mastered: "cavalier" } ] ] });
REQ("onmyoji", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("oracle", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("peltast", { text: "Any class mastered. Proficiency in throwing weapons.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["Thrown"] } ] ] });
REQ("phantom-thief", { text: "Thief mastered and mage mastered.",
  routes: [ [ { mastered: "thief" }, { mastered: "mage" } ] ] });
REQ("phosphomancer", { text: "Any class mastered or Holy mastery.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Holy" } ] ] });
REQ("priest", { text: "Acolyte mastered.", routes: [ [ { mastered: "acolyte" } ] ] });
REQ("protector", { text: "Guardian mastered.", routes: [ [ { mastered: "guardian" } ] ] });
REQ("pyromancer", { text: "Any class mastered or Fire mastery.",
  routes: [ [ { masteredAny: 1 } ], [ { mastery: "Fire" } ] ] });
REQ("pyromaster", { text: "Pyromancer mastered.", routes: [ [ { mastered: "pyromancer" } ] ] });
REQ("reaver", { text: "Highlander mastered.", routes: [ [ { mastered: "highlander" } ] ] });
REQ("saboteur", { text: "Rogue mastered.", routes: [ [ { mastered: "rogue" } ] ],
  note: "Demon clan Wi starts with Saboteur unlocked at level 1." });
REQ("sage", { text: "Mage, Sorcerer or Mage Knight mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ], [ { mastered: "mage-knight" } ] ] });
REQ("sanctioner", { text: "Medic, Acolyte, Mage, Mage Knight or Sorcerer mastered.",
  routes: [ [ { mastered: "medic" } ], [ { mastered: "acolyte" } ], [ { mastered: "mage" } ], [ { mastered: "mage-knight" } ], [ { mastered: "sorcerer" } ] ] });
REQ("scout", { text: "Rogue or Ranger mastered.",
  routes: [ [ { mastered: "rogue" } ], [ { mastered: "ranger" } ] ] });
REQ("searing-lotus-style", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("seven-sorrows-sword-style", { text: "Any class mastered. Proficiency in at least one of Katanas, Scythes, Heavy Blades or Small weapons.",
  routes: [ [ { masteredAny: 1 }, { proficiency: ["Katana", "Scythe", "Heavy Blades", "Small Weapons"] } ] ] });
REQ("shadow-thief", { text: "Rogue mastered or Dark mastery.",
  routes: [ [ { mastered: "rogue" } ], [ { mastery: "Dark" } ] ] });
REQ("shadowbringer", { text: "Shadow Thief mastered.", routes: [ [ { mastered: "shadow-thief" } ] ] });
REQ("shield-paladin", { text: "Human, proficient with shields and medium or heavy armor.",
  routes: [ [ { race: "human" }, { proficiency: ["Shields"] }, { proficiency: ["Medium Armor", "Heavy Armor"] } ],
            [ { breakthrough: "the-unknown-paladin" }, { proficiency: ["Shields"] }, { proficiency: ["Medium Armor", "Heavy Armor"] } ] ] });
REQ("shield-saint", { text: "Bodyguard mastered.", routes: [ [ { mastered: "bodyguard" } ] ] });
REQ("shieldwarden", { text: "Acolyte, Mage or Mage Knight mastered.",
  routes: [ [ { mastered: "acolyte" } ], [ { mastered: "mage" } ], [ { mastered: "mage-knight" } ] ] });
REQ("shinigami-eyes", { text: "Any class mastered, must have the Touched by Death breakthrough. Must have at least 1 mystic eye slot open.",
  routes: [ [ { masteredAny: 1 }, { breakthrough: "touched-by-death" }, { mysticEyeSlot: 1 } ] ] });
REQ("sky-knight", { text: "Cavalier mastered.", routes: [ [ { mastered: "cavalier" } ] ] });
REQ("sky-talon-style", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("sniper", { text: "Marksman or Scout mastered.",
  routes: [ [ { mastered: "marksman" } ], [ { mastered: "scout" } ] ] });
REQ("spearmaster", { text: "Lancer mastered.", routes: [ [ { mastered: "lancer" } ] ] });
REQ("spell-blademaster", { text: "Spellblade mastered.", routes: [ [ { mastered: "spellblade" } ] ] });
REQ("spellblade", { text: "Have at least 1 spell, Have one element mastered, Be proficient in 1 weapon.",
  routes: [ [ { hasSpell: true }, { mastery: "ANY" }, { proficiency: ["ANY_WEAPON"] } ] ] });
REQ("starcaller", { text: "Mage or Sorcerer mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastered: "sorcerer" } ] ] });
REQ("still-stone-style", { text: "Cultivator or Martial Artist mastered.",
  routes: [ [ { mastered: "cultivator" } ], [ { mastered: "martial-artist" } ] ] });
REQ("still-stone-testament", { text: "Still Stone Style mastered.", routes: [ [ { mastered: "still-stone-style" } ] ] });
REQ("strategist", { text: "Tactician mastered", routes: [ [ { mastered: "tactician" } ] ] });
REQ("summoner", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("swashbuckler", { text: "Fighter, Rogue, Ranger, Cultivator, Adventurer, Maid or Forager mastered. Proficient in Light Swords.",
  routes: ["fighter","rogue","ranger","cultivator","adventurer","maid","forager"].map(function(c){
    return [ { mastered: c }, { proficiency: ["Light Swords"] } ]; }) });
REQ("sword-paladin", { text: "Human.",
  routes: [ [ { race: "human" } ], [ { breakthrough: "the-unknown-paladin" } ] ] });
REQ("sword-saint", { text: "Iaido style mastered.", routes: [ [ { mastered: "iai-style" } ] ],
  note: "Page says 'Iaido style'; the class is 'Iai Style' (site typo)." });
REQ("tactician", { text: "Any class mastered, 5 skill points in the history skill.",
  routes: [ [ { masteredAny: 1 }, { skill: "History", points: 5 } ] ] });
REQ("tavern-brawler", { text: "Any class mastered.", routes: [ [ { masteredAny: 1 } ] ] });
REQ("temporal-trickster", { text: "Time Thief mastered.", routes: [ [ { mastered: "time-thief" } ] ] });
REQ("thief", { text: "Be a rabbitfolk or have Rogue mastered and possess the Decipher Magic ability.",
  routes: [ [ { race: "rabbitfolk" } ], [ { mastered: "rogue" }, { ability: "mage/decipher-magic" } ] ],
  unclear: "Read as: Rabbitfolk, OR (Rogue mastered AND Decipher Magic). Could also mean (Rabbitfolk or Rogue) AND Decipher Magic." });
REQ("timberwright", { text: "Carpenter mastered.", routes: [ [ { mastered: "carpenter" } ] ] });
REQ("time-thief", { text: "Rogue mastered.", routes: [ [ { mastered: "rogue" } ] ] });
REQ("transcendent-lightning-style", { text: "Cultivator or Martial Artist mastered, any tier 2 mastered.",
  routes: [ [ { mastered: "cultivator" }, { masteredTier: 2, count: 1 } ], [ { mastered: "martial-artist" }, { masteredTier: 2, count: 1 } ] ] });
REQ("trapper", { text: "Ranger mastered", routes: [ [ { mastered: "ranger" } ] ] });
REQ("trickster", { text: "Two classes mastered, of which 1 must be a tier 2 class.",
  routes: [ [ { masteredAny: 2 }, { masteredTier: 2, count: 1 } ] ] });
REQ("true-shinigami-eyes", { text: "Shinigami Eyes mastered.", routes: [ [ { mastered: "shinigami-eyes" } ] ] });
REQ("vampire", { text: "Must have the Curse of Vampirism breakthrough.",
  routes: [ [ { breakthrough: "curse-of-vampirism" } ] ] });
REQ("vampire-lord", { text: "Vampire mastered.", routes: [ [ { mastered: "vampire" } ] ] });
REQ("veilguard", { text: "Shieldwarden mastered.", routes: [ [ { mastered: "shieldwarden" } ] ] });
var VENOM_ROUTES = ["alchemist","culinarian","cultivator","farmer","forager","maid","pierrot","rogue","ranger","medic","mycomancer"]
  .map(function(c){ return [ { mastered: c } ]; });
REQ("venomancer", { text: "Alchemist, Culinarian, Cultivator, Farmer, Forager, Maid, Pierrot, Rogue, Ranger, Medic or Mycomancer mastered.",
  routes: VENOM_ROUTES });
REQ("venomblade", { text: "Alchemist, Culinarian, Cultivator, Farmer, Forager, Maid, Pierrot, Rogue, Ranger, Medic or Mycomancer mastered.",
  routes: VENOM_ROUTES });
REQ("warding-mage", { text: "Mage mastered.", routes: [ [ { mastered: "mage" } ] ] });
REQ("wave-palm-style", { text: "Cultivator or Martial Artist mastered. Must have at least 1 mystic eye slot open.",
  routes: [ [ { mastered: "cultivator" }, { mysticEyeSlot: 1 } ], [ { mastered: "martial-artist" }, { mysticEyeSlot: 1 } ] ] });
REQ("wildheart", { text: "Animal summoner mastered.", routes: [ [ { mastered: "animal-summoner" } ] ] });
REQ("windbringer", { text: "Mage mastered or Wind mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastery: "Wind" } ] ] });
REQ("zen-warrior", { text: "Monk mastered.", routes: [ [ { mastered: "monk" } ] ] });
REQ("zephyr-warder", { text: "Mage mastered or Wind mastered.",
  routes: [ [ { mastered: "mage" } ], [ { mastery: "Wind" } ] ] });

// ---------------------------------------------------------------------------
// Classes that start unlocked from a race or clan (not a requirement route,
// but the planner should show them as free unlocks).
// ---------------------------------------------------------------------------
LC.raceClassUnlocks = [
  { source: "race:gnome",       classId: "miner",                  level: 1, via: "Mining Expertise" },
  { source: "race:pigfolk",     classId: "merchant",               level: 1, via: "Mercantile" },
  { source: "race:raijin",      classId: "flash-star-blade-style", level: 1, via: "Lightning Weapon Expert" },
  { source: "race:selkie",      classId: "hydromancer",            level: 2, via: "Blue Soul" },
  { source: "clan:Wi",          classId: "saboteur",               level: 1, via: "Demon clan Wi" },
  { source: "clan:Un",          classId: "maid",                   level: 1, via: "Demon clan Un" },
  { source: "clan:Vi",          classId: "medic",                  level: 1, via: "Demon clan Vi" },
  { source: "race:sheepfolk",   classId: "aetherie",               level: 0, via: "Highly Sensitive to Magic (ignore requirements, -100 EXP)" }
];

// ---------------------------------------------------------------------------
// Reverse index: which classes does mastering class X help unlock?
// Only named-class routes are listed. Generic routes ("any class mastered",
// elements, spells, proficiencies) apply to almost everything, so the planner
// checks those live instead.
// ---------------------------------------------------------------------------
LC.buildLeadsTo = function(){
  var out = {};
  Object.keys(LC.requirements).forEach(function(target){
    LC.requirements[target].routes.forEach(function(route){
      var others = route.filter(function(c){ return !c.mastered; });
      route.forEach(function(c){
        if (!c.mastered) return;
        (out[c.mastered] = out[c.mastered] || []).push({ classId: target, alsoNeeds: others });
      });
    });
  });
  return out;
};
LC.leadsTo = LC.buildLeadsTo();
