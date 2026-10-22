// Lyrian Chronicles Character Planner - Race Data
// Source: https://lyrian.splatpass.net/races/ (Static edition of Lyrian Chronicles 0.13.2)
// Built from scratch. Every record is page-checked against the official race page.
// Records are kept in alphabetical order. Anything that did not load is marked "MISSING".
//
// HOW TO READ A RECORD
//  - kind: "primary" = main race (Human, Chimera, Demon, Fae, Youkai).
//          "subrace" = picked under a main race; it uses the main race's creation benefits
//          (stats, skills, languages) and adds its own abilities. "parent" names the main race.
//  - Numbers, costs, ranges, keywords, stat bonuses and skill lists are exact from the page.
//  - "summary" fields are plain-English descriptions written for this tool, NOT the official
//    rules wording. For exact wording, open the race "url". Open questions live in ISSUES.md.
//  - skills.pick: the pages say "+5 skill points in either A, B, C..." - it is not clear if all
//    5 go into one skill or can be split (see ISSUES.md). Stored as pick: "UNCLEAR".
//  - Hybrid races (Fae+Chimera, Human+Chimera) are breakthroughs - see LC.raceHybrids at the end.

window.LC = window.LC || {};
LC.races = LC.races || {};

function RC(id, rec){
  rec.id = id;
  LC.races[id] = rec;
}

// ---------------------------------------------------------------------------
// ANCIENT MARIONETTE  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("ancient-marionette", {
  name: "Ancient Marionette", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/ancient-marionette/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "thermal-vision": {
      name: "Thermal Vision", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "See and detect heat sources perfectly up to 120ft, including stealthed creatures. Not things hidden by magic, and not targets at freezing temperature." ]
    },
    "mana-eater": {
      name: "Mana Eater", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You can't eat biological food; you consume the same money's worth of Magical Fuel instead. You don't need to breathe." ]
    },
    "adaptive-defense": {
      name: "Adaptive Defense", cost: "1 RP, 2 MP", range: "Self", keywords: ["Rapid"], requires: null,
      usage: "Only one instance at a time.",
      summary: [ "Take the Block action, then gain Adaptive Defense 4 (Type): Damage Reduction 4 against that damage type until the end of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ANUBIS  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("anubis", {
  name: "Anubis", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/anubis/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "last-rites": {
      name: "Last Rites", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+1 damage against undead creatures (+2 on Heavy attacks)." ]
    },
    "weighing-the-heart": {
      name: "Weighing the Heart", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+5 Expertise bonus to Insight checks to tell whether someone is lying to you." ]
    },
    "speak-with-dead": {
      name: "Speak with Dead", cost: "1 MP", range: "-", keywords: [], requires: "Special",
      summary: [ "One-hour ritual beside the corpse or where the person died. You must know who they were and have a tool such as an ouija board. A hostile spirit doesn't have to answer and may answer cryptically." ]
    }
  }
});

// ---------------------------------------------------------------------------
// BEARFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("bearfolk", {
  name: "Bearfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/bearfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "hibernate": {
      name: "Hibernate", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Temporary HP from the rest IP action is doubled. Resting at night as a rest action gives extra HP based on Toughness (amount unclear - see ISSUES.md)." ]
    },
    "bear-shock": {
      name: "Bear Shock", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+20 to Deception checks to disguise yourself as something other than a bearfolk." ]
    },
    "bear-maul": {
      name: "Bear Maul", cost: "2 AP, 1 MP", range: "5ft", keywords: ["Unarmed Strike"], requires: null,
      summary: [ "Heavy attack that deals maximum damage; if the target Dodges it automatically misses. You count as proficient in unarmed attacks for it." ]
    }
  }
});

// ---------------------------------------------------------------------------
// BULLFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("bullfolk", {
  name: "Bullfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/bullfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  restriction: "Male only.",
  usesParentCreation: true,
  abilities: {
    "thick-skull": {
      name: "Thick Skull", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "When you would become Dazed you may make a Save against it, even if it normally allows none. No second Save if you already had to save to avoid it." ]
    },
    "goring-charge": {
      name: "Goring Charge", cost: "Variable AP", range: null, keywords: [], requires: null,
      summary: [
        "Charge X times your speed in a straight line. After at least 15ft, Heavy attack the first creature in your path; it may Sidestep for 1 RP, and you keep charging to max distance or until you hit an object. Each new creature hit triggers another Heavy attack.",
        "Creatures that sidestepped don't get attacks of opportunity. GM may call for a Heavy attack against destroyable objects you hit. These are proficient unarmed attacks; gauntlet bonuses don't apply. (X and AP cost aren't defined.)"
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CAIT SITH  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("cait-sith", {
  name: "Cait Sith", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/cait-sith/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "cat-form": {
      name: "Cat Form", cost: "1 RP", range: null, keywords: ["Transformation"], requires: null,
      summary: [ "Become a cat: Guard 0, Evasion +3, Dodge +6, size Tiny (can share a square with an ally); your only attack is a Light Melee Attack. Taking damage changes you back; dispel for 0 AP or 1 RP." ]
    },
    "soul-strike": {
      name: "Soul Strike", cost: "0 AP", range: "60ft", keywords: ["Killing Blow", "Overcharge"], requires: "You landed a killing blow.",
      usage: "Once on that target.",
      summary: [ "If the target is still at 0 HP or less it dies instantly, and you hit a second target with the released orb (Light Dark-damage attack). Usable in Cat Form. Overcharge: +1 AP to make it Heavy or Precise." ]
    },
    "nightvision": {
      name: "Nightvision", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "With any weak light (even a weak moon), no darkness vision penalties up to 120ft." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CATFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("catfolk", {
  name: "Catfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/catfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "nightvision": {
      name: "Nightvision", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "With any weak light (even a weak moon), no darkness vision penalties up to 120ft." ]
    },
    "fast-runner": {
      name: "Fast Runner", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { speed: 25 },
      summary: [ "Base movement speed is 25ft instead of 20ft." ]
    },
    "graceful-landing": {
      name: "Graceful Landing", cost: "0 RP", range: "Self", keywords: [], requires: null,
      summary: [ "Until the start of your next turn, treat all fall distance as 50ft shorter." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CENTAUR  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("centaur", {
  name: "Centaur", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/centaur/", checked: "2026-10-21", version: "0.13.2",
  size: "Large",
  usesParentCreation: true,
  abilities: {
    "charge": {
      name: "Charge", cost: "2 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Spend 2 or 4 AP and move as if spent on movement. Then you may spend half that (1 or 2 AP) on a basic Light, Heavy or Precise Melee Attack." ]
    },
    "horse-body": {
      name: "Horse Body", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { burden: 2 },
      summary: [
        "Carry an ally on your back with no speed loss (picking them up costs 1 AP; carried allies can't take AP actions; either may spend 1 AP to dismount). Max Burden +2.",
        "You're Large: 5ft-wide spaces are difficult terrain and many humanoid buildings are hard to fit in. -10 on most finesse Athletics checks and on climbing and swimming checks."
      ]
    },
    "own-mount": {
      name: "Own Mount", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You count as mounted for abilities that need it. You can't act as a mount for others because of this." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CHIMERA  (primary race - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("chimera", {
  name: "Chimera", kind: "primary", parent: null,
  url: "https://lyrian.splatpass.net/races/chimera/", checked: "2026-10-21", version: "0.13.2",
  size: null,
  stats: { Toughness: 1, Awareness: 1 },
  skills: { points: 5, pick: "UNCLEAR", options: ["Magic", "Survival", "Animal Husbandry", "Perception", "Insight", "Linguistics", "Artifice"] },
  languages: ["Common", "Your sub-race's special dialect"],
  proficiencies: [],
  subraces: ["bearfolk", "bullfolk", "catfolk", "centaur", "cowfolk", "dogfolk", "harpy", "horse-folk", "lamiafolk", "lizardfolk", "mothfolk", "phoenix", "pigfolk", "rabbitfolk", "ratfolk", "red-pandafolk", "sheepfolk", "slimefolk", "spiderfolk", "wolf-folk"],
  note: "Lore mentions 'kanolith' (few animal traits, most common) and 'zoalith' (strong traits) - descriptive only, not a choice.",
  abilities: {
    "fight-or-flight": {
      name: "Fight or Flight", cost: "0 RP", range: "Self", keywords: ["Rage"], requires: null,
      usage: "Regain use after the Encounter Conclusion phase.",
      summary: [
        "Fight: gain 2 AP now (basic abilities only), lose 1 RP.",
        "Flight: gain 1 RP now, but recover 2 less AP on your next turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// COWFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("cowfolk", {
  name: "Cowfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/cowfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  restriction: "Female only.",
  usesParentCreation: true,
  abilities: {
    "provide-milk": {
      name: "Provide Milk", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Spend 1 EP to produce 400u of milk." ]
    },
    "dense-frame": {
      name: "Dense Frame", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "When an effect pushes you back, you're shoved 5ft less." ]
    },
    "ruminant-metabolism": {
      name: "Ruminant Metabolism", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You can go 1 day without eating before starvation applies." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CU SITH  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("cu-sith", {
  name: "Cu Sith", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/cu-sith/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "dog-form": {
      name: "Dog Form", cost: "1 RP", range: "Self", keywords: ["Transformation"], requires: null,
      summary: [ "Become a medium dog: -2 guard, -4 block, +1 Size bonus to Evasion and Dodge. Only melee unarmed attacks (you're proficient). Taking damage changes you back; dispel for 0 AP or 1 RP." ]
    },
    "haunting-bark": {
      name: "Haunting Bark", cost: "1 AP", range: "60ft", keywords: ["Mind Affecting", "Fear", "Shaken", "Full Pierce", "Sound"], requires: "Must be in Dog Form.",
      summary: [ "An enemy saves or is Shaken until the end of its next turn. On the third use against the same target in one combat, a failed save also deals Light Full Pierce Lightning damage." ]
    },
    "scent": {
      name: "Scent", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+5 Expertise bonus to Perception (Smell)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DEMON  (primary race - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("demon", {
  name: "Demon", kind: "primary", parent: null,
  url: "https://lyrian.splatpass.net/races/demon/", checked: "2026-10-21", version: "0.13.2",
  size: null,
  stats: { Power: 1, Reason: 1 },
  skills: { points: 5, pick: "UNCLEAR", options: ["Common Knowledge", "Magic", "Religion", "History", "Flight", "Artifice"] },
  languages: ["Common", "Sorthen"],
  proficiencies: [ "CHOICE: proficiency in one common weapon, OR +5 skill points in a skill tied to your demon clan" ],
  subraces: [],
  breakthroughs: [ { name: "Mixed House (Demon)", cost: "100 EXP", summary: "Gain the benefit of one additional house (clan).", url: "https://lyrian.splatpass.net/breakthroughs/mixed-house--demon-/" } ],
  options: {
    label: "Clan (choose one)",
    choices: [
      { code: "Wi",   name: "Saboteurs",                      ability: "presence-concealment", extras: ["Proficiency with Saboteur Thread Daggers", "Saboteur class unlocked at level 1"] },
      { code: "Lir",  name: "Oracles",                        ability: "predict" },
      { code: "D'",   name: "Soldiers",                       ability: "mana-burst" },
      { code: "Ar",   name: "Tacticians",                     ability: "minds-eye" },
      { code: "Lu",   name: "Mages",                          ability: "dense-mana" },
      { code: "Ni",   name: "Engineers and Airship staff",    ability: "emergency-maneuvers" },
      { code: "Un",   name: "Maids and Butlers",              ability: "graceful-service", extras: ["Maid class unlocked at level 1"] },
      { code: "Vi",   name: "Medical and Healers",            ability: "first-response", extras: ["Medic class unlocked at level 1"] },
      { code: "None", name: "Those without family skills",    ability: "instinct" }
    ]
  },
  abilities: {
    "divine-release": {
      name: "Divine Release", cost: "0 AP", range: "Self", keywords: ["Transformation", "Rage"], requires: null,
      usage: "Once, until you finish an interlude rest phase. Upkeep: 11 HP.",
      summary: [
        "Transform and take 11 true damage; end it any time for 0 RP. While active: Block gives +5 extra guard; +5 movement speed and flight; +1 AP at the start of your turn.",
        "At 0 HP you aren't downed (you gain Wounded instead); Upkeep rises to 16 HP while at or below 0 HP. Ending the form at or below 0 HP downs you. At or below negative max HP you're incapacitated and the form ends."
      ]
    },
    "demonblood-regeneration": {
      name: "Demonblood Regeneration", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Grit heals 6 HP instead. Second Wind heals 3 extra HP." ]
    },
    "presence-concealment": {
      name: "Presence Concealment", cost: "4 AP", range: "Self", keywords: ["Presence Concealment", "Stealth"], requires: null, clan: "Wi",
      summary: [ "Gain Presence Concealment: no mana-cost or aura abilities while in it. End it for 0 RP, but the restriction lasts until the end of your next turn. (Same ability as Adventurer/Saboteur.)" ]
    },
    "predict": {
      name: "Predict", cost: "1 RP, 1 MP", range: "Self", keywords: [], requires: "You are the target of an attack.", clan: "Lir",
      summary: [ "Take the Dodge action and remove Lock On from the attack." ]
    },
    "mana-burst": {
      name: "Mana Burst", cost: "1 RP, 1 MP", range: "Self", keywords: ["Augment"], requires: null, clan: "D'",
      summary: [ "Your next attack gets +3 accuracy and +3 bonus damage on hit. The page says you 'may use AP for this attack instead' (unclear which cost - see ISSUES.md)." ]
    },
    "minds-eye": {
      name: "Mind's Eye", cost: "0 AP, 2 MP", range: "Self", keywords: [], requires: null, clan: "Ar",
      summary: [ "Ask the GM for the rough best course of action in an encounter; the answer is truthful but not detailed." ]
    },
    "dense-mana": {
      name: "Dense Mana", cost: "0 RP, 1 MP", range: "Self", keywords: ["Augment"], requires: null, clan: "Lu",
      summary: [ "Your next ability gets +2 Potency." ]
    },
    "emergency-maneuvers": {
      name: "Emergency Maneuvers", cost: "0 RP, 1 MP", range: "Self", keywords: [], requires: null, clan: "Ni",
      summary: [ "When you fail an airship operation check, reroll it once and take the new result." ]
    },
    "graceful-service": {
      name: "Graceful Service", cost: "No listed cost", range: null, keywords: [], requires: null, clan: "Un",
      summary: [ "Use up your encounter conclusion action to give a character one extra encounter conclusion action." ]
    },
    "first-response": {
      name: "First Response", cost: "No listed cost", range: null, keywords: [], requires: "Must have a Medical Kit.", clan: "Vi",
      summary: [ "Use your encounter conclusion to give someone else the Second Wind effect; it heals an extra 1d6 (+3 more if you have Demonblood Regeneration)." ]
    },
    "instinct": {
      name: "Instinct", cost: "No listed cost", range: null, keywords: [], requires: null, clan: "None",
      summary: [
        "The first Stealth attack against you each encounter doesn't get Trick Attack.",
        "If attacked while surprised you can still react; 'unaware' bonuses such as Killshot's don't apply. Before an action that could cause grave harm or death, the DM may give you a premonition."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// DOGFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("dogfolk", {
  name: "Dogfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/dogfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "loyalty": {
      name: "Loyalty", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "While within 5ft of a heroic ally: +1 Guard and +2 Block." ]
    },
    "guard-dog": {
      name: "Guard Dog", cost: "1 RP, 1 MP", range: "5ft", keywords: [], requires: "An ally within range is the target of an attack.",
      summary: [ "Redirect the attack to yourself and Block it for 0 RP. Usable even if you're also a target - both attacks then resolve against you and your Block covers both." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DRYAD  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("dryad", {
  name: "Dryad", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/dryad/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "forest-walker": {
      name: "Forest Walker", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Ignore difficult terrain made by vines, foliage and similar natural things." ]
    },
    "natures-grasp": {
      name: "Nature's Grasp", cost: "1 AP, 1 MP", range: "30ft", keywords: ["Root", "Earth"], requires: null,
      summary: [ "Light attack that deals only 1 Earth damage; on damage the target is Rooted until the start of your next turn or until it spends 2 AP to cut free with a slashing or fire attack. Against Grunts it costs 0 Mana and gains Sure Hit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DULLAHAN  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("dullahan", {
  name: "Dullahan", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/dullahan/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "headless": {
      name: "Headless", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Critical hits against you don't gain Half Pierce and don't automatically deal maximum damage." ]
    },
    "dullahans-mount": {
      name: "Dullahan's Mount", cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [
        "Conjure a black horse that's part of you and mount it at once; dismount for 0 AP (it vanishes). Mounted: +30ft speed, count as Large, straight-line movement only; 5ft-wide spaces are difficult terrain; -10 on most finesse Athletics, climbing and swimming checks.",
        "Attacks on the horse count as attacks on you; displacement or teleport moves it with you."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// FAE  (primary race - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("fae", {
  name: "Fae", kind: "primary", parent: null,
  url: "https://lyrian.splatpass.net/races/fae/", checked: "2026-10-21", version: "0.13.2",
  size: null,
  stats: { Agility: 1, Cunning: 1 },
  skills: { points: 5, pick: "UNCLEAR", options: ["Magic", "Medicine", "Negotiation", "Intimidation", "Insight"] },
  languages: ["Sylvan", "Common"],
  proficiencies: [],
  subraces: ["anubis", "cait-sith", "cu-sith", "dryad", "dullahan", "gnome", "high-fae", "pixie", "salamander", "selkie", "sylph", "unseelie", "willo-wisp"],
  abilities: {
    "faerie-flash": {
      name: "Faerie Flash", cost: "1 AP, 1 MP", range: "-", keywords: ["Teleport", "Rage"], requires: null,
      usage: "Once per encounter.",
      summary: [ "Teleport up to twice your Speed to an unoccupied space you can see." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GNOME  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("gnome", {
  name: "Gnome", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/gnome/", checked: "2026-10-21", version: "0.13.2",
  size: "Small",
  usesParentCreation: true,
  abilities: {
    "mining-expertise": {
      name: "Mining Expertise", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { classUnlocked: "miner" },
      summary: [ "You start with the Miner class unlocked at level 1." ]
    },
    "gnome-claws": {
      name: "Gnome Claws", cost: "1 AP, 3 MP", range: "Self", keywords: [], requires: null,
      summary: [ "Burrow into natural earth and move underground at normal speed. While not attacking, +10/+20 dodge bonus (except vs burrowed creatures). Any action other than moving or basic defenses ends it; ending it with a melee attack gives that attack +2 accuracy." ]
    },
    "destroy-ground": {
      name: "Destroy Ground", cost: "2 AP, 1 MP", range: "5ft", keywords: [], requires: null,
      summary: [ "Make a hole up to 10x10x10ft in most natural earth. Creatures in it may spend 1 RP to Sidestep 5ft out; the rest fall 10ft (normal falling damage). Needs natural ground underneath - may work on a house's ground floor, not higher floors or some dungeons." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HARPY  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("harpy", {
  name: "Harpy", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/harpy/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "flight": {
      name: "Flight", cost: "0 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [
        "Controlled flight up to your speed. Taking damage while flying drops you 20ft (not if the attacker was flying); if that reaches the ground you're Rooted and can't fly until the end of your next turn.",
        "Ending any movement within 5ft of the ground ends Flight (Rooted if damage caused it)."
      ]
    },
    "swallow-acrobatics": {
      name: "Swallow Acrobatics", cost: "0 AP", range: "Self", keywords: [], requires: "After you make a melee attack while flying.",
      summary: [ "Your next movement before the end of your turn doesn't provoke attacks of opportunity." ]
    },
    "downburst": {
      name: "Downburst", cost: "2 AP, 1 MP", range: "720ft", keywords: ["Lock On", "Spell", "Wind"], requires: "Target must be flying.",
      summary: [ "Heavy attack dealing Wind damage. On damage the target plummets to the ground and takes falling damage that can't be negated." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HIGH FAE  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("high-fae", {
  name: "High Fae", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/high-fae/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "lucid-sleep": {
      name: "Lucid Sleep", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You stay aware of your surroundings while asleep and can't be Surprised because you were asleep." ]
    },
    "faerie-flash-ii": {
      name: "Faerie Flash II", cost: "1 AP, 1 MP", range: "-", keywords: ["Teleport"], requires: null,
      summary: [ "Teleport up to twice your Speed to an unoccupied space you can see. If an effect would let you regain Faerie Flash and you use Faerie Flash II that turn, its mana cost is 1 lower (min 0)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HORSE-FOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("horse-folk", {
  name: "Horse-Folk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/horse-folk/", checked: "2026-10-21", version: "0.13.2",
  size: "MISSING - not listed on the page",
  usesParentCreation: true,
  abilities: {
    "horse-step-acceleration": {
      name: "Horse Step Acceleration", cost: "0 AP", range: "Self", keywords: ["Opener"], requires: null,
      summary: [ "Until the start of your next turn: +30 movement speed, but all movement must be in straight lines." ]
    },
    "explosive-advance": {
      name: "Explosive Advance", cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [ "Activate Horse Step Acceleration for the whole first round of combat, then immediately take up to 1 AP of movement." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HUMAN  (primary race - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("human", {
  name: "Human", kind: "primary", parent: null,
  url: "https://lyrian.splatpass.net/races/human/", checked: "2026-10-21", version: "0.13.2",
  size: null,
  stats: { choice: "+1 to a main stat of your choice and +1 to a substat of your choice" },
  skills: { points: 5, pick: "UNCLEAR", options: "ANY_NON_CRAFTING_NON_GATHERING" },
  languages: ["Common", "One language of your choice"],
  proficiencies: [ "One common weapon group" ],
  extras: [ "Ambition: start with an extra 100 EXP (also added to your spirit core)." ],
  subraces: [],
  abilities: {
    "divine-providence": {
      name: "Divine Providence", cost: "0 RP", range: "Self", keywords: ["Rage", "Daze"], requires: null,
      usage: "Once, then not again until after a rest.",
      summary: [
        "Choose one: Divine Protection - 100 damage reduction against the next damage you take. Fortune - becomes Instant; reroll your last d20 and take the new result.",
        "Health - heal yourself or a creature you're touching for 15 HP. Light - bright light at your position out to 30ft; detonate it for 0 AP to Daze all enemies in its range."
      ]
    },
    "human-adaptability": {
      name: "Human Adaptability", cost: "No listed cost", range: null, keywords: ["Errand"], requires: null,
      summary: [
        "As an errand action, refund one ability and learn another. The new one can't break any prerequisites, and must cost the same or you pay the EXP difference.",
        "Swapping a class: pay IP for the new class (IP spent on the old one isn't refunded). Refunded stat/skill points must go back to the same places if you relevel the class. Doesn't work on breakthroughs."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// JIANGSHI  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("jiangshi", {
  name: "Jiangshi", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/jiangshi/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "tireless-undead": {
      name: "Tireless Undead", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Always count as rested, even in the harshest conditions. You don't need to sleep." ]
    },
    "hopping-zombie": {
      name: "Hopping Zombie", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+20 to any checks that involve jumping." ]
    },
    "consume-enemy": {
      name: "Consume Enemy", cost: "No listed cost", range: "One dead enemy", keywords: ["Encounter Conclusion"], requires: null,
      summary: [ "Eat a dead enemy's body: heal Toughness x 2, regain 1 mana, and prevent one injury." ]
    }
  }
});

// ---------------------------------------------------------------------------
// KITSUNE  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("kitsune", {
  name: "Kitsune", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/kitsune/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "nightvision": {
      name: "Nightvision", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "With any weak light (even a weak moon), no darkness vision penalties up to 120ft." ]
    },
    "fading-counter": {
      name: "Fading Counter", cost: "2 RP", range: "Self", keywords: ["Counter", "Illusion"], requires: null,
      summary: [ "The attack hits an illusory clone and misses you. Then make a basic Light Melee Attack against the enemy and move up to 5ft without provoking attacks of opportunity." ]
    }
  }
});

// ---------------------------------------------------------------------------
// LAMIAFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("lamiafolk", {
  name: "Lamiafolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/lamiafolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Large",
  usesParentCreation: true,
  abilities: {
    "warm-together": {
      name: "Warm Together", cost: "No listed cost", range: null, keywords: [], requires: "When you have 'Just A Hug' active.",
      summary: [ "You and the hugged target resist cold from environmental effects." ]
    },
    "just-a-hug": {
      name: "Just a hug", cost: "2 AP", range: "5ft", keywords: ["Grapple"], requires: null,
      summary: [
        "Coil around a non-heroic enemy no larger than you (or a willing ally): both of you are Rooted, it can't attack, and you automatically guard it as if Blocking.",
        "It escapes by spending 1 AP or 1 RP per attempt, adding escape power equal to its Power; it gets free at 8. No upkeep, unlike normal grapples; you can end it for 0 RP."
      ]
    },
    "hug-tight": {
      name: "Hug tight", cost: "1 AP", range: "10ft", keywords: ["Full Pierce", "Sure Hit", "Rapid"], requires: "Target is affected by 'Just A Hug'.",
      summary: [ "Deal Light Damage to the target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// LIZARDFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("lizardfolk", {
  name: "Lizardfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/lizardfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "amphibious": {
      name: "Amphibious", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Swim up to your speed and hold your breath underwater for up to 1 hour." ]
    },
    "prehensile-tail": {
      name: "Prehensile Tail", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Carry things with your tail so you can interact with objects even with both hands full (not tasks needing strength). Can't wield weapons with it." ]
    },
    "regrowing-limbs": {
      name: "Regrowing Limbs", cost: "No listed cost", range: null, keywords: [], requires: "Costs 1 Interlude Point.",
      summary: [ "Regrow a lost limb to full use." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MOTHFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("mothfolk", {
  name: "Mothfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/mothfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Small",
  usesParentCreation: true,
  abilities: {
    "nightvision": {
      name: "Nightvision", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "With any weak light (even a weak moon), no darkness vision penalties up to 120ft." ]
    },
    "antennae": {
      name: "Antennae", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Sense air vibrations to detect creatures (only creatures) within 40ft: +10 expertise bonus to Perception (Vibration Sense)." ]
    },
    "blinding-dust": {
      name: "Blinding Dust", cost: "1 RP, 2 MP", range: "5ft", keywords: ["Sidestep", "Blinded", "Circuit"], requires: "You are the target of an attack.",
      summary: [ "Blow wing dust in the attacker's eyes: Blinded 6 until the end of its attack. If the attack misses, you may Sidestep 5ft." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NEKOMATA  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("nekomata", {
  name: "Nekomata", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/nekomata/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "corpse-puppetry": {
      name: "Corpse Puppetry", cost: "4 AP", range: "60ft", keywords: [], requires: "Target must be dead.",
      summary: [ "Control a corpse less than a week old within 30ft to do simple things like move or talk. It has no combat stats and can't attack. (Range 60ft vs 'within 30ft' - see ISSUES.md.)" ]
    },
    "feign-death": {
      name: "Feign Death", cost: "No listed cost", range: null, keywords: [], requires: null,
      usage: "The first time you become Downed in an encounter.",
      summary: [ "Use Play Dead as a reaction for 0 RP, with +10 to playing dead." ]
    },
    "grudge": {
      name: "Grudge", cost: "0 RP, 1 MP", range: "Sight", keywords: ["Safe"], requires: "An enemy hits you with an attack.",
      summary: [ "Curse the attacker: Light attack dealing Dark (Curse) damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NIO  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("nio", {
  name: "Nio", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/nio/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "stoneskin": {
      name: "Stoneskin", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+1 guard and +4 block, but -2 evasion and dodge." ]
    },
    "eternal-vigil": {
      name: "Eternal Vigil", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "While sleeping in statue mode, make Perception checks as if awake." ]
    },
    "statue-form": {
      name: "Statue Form", cost: "4 AP", range: "Self", keywords: ["Transformation"], requires: null,
      summary: [ "Petrify yourself and your items: +5 guard, Block is your only action; leave for 0 AP. You can rest normally and don't need to eat. +10 Deception to pass as just a statue." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ONI  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("oni", {
  name: "Oni", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/oni/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "spirited-bravado": {
      name: "Spirited Bravado", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "While Tipsy, you have Spirited Bravado: +1 Power." ]
    },
    "drink-to-battle": {
      name: "Drink to Battle", cost: "2 AP or Encounter Start action", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [ "Drink alcohol to prepare for battle: gain 1 stack of Tipsy." ]
    },
    "gravitational-ki": {
      name: "Gravitational Ki", cost: "1 RP", range: "10ft", keywords: [], requires: null,
      summary: [ "Push one unit 5ft away or pull it 5ft closer. Not on creatures/objects larger than 5ft; automatically fails on enemy heroic creatures." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PHOENIX  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("phoenix", {
  name: "Phoenix", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/phoenix/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "elemental-mastery-fire": {
      name: "Elemental Mastery: Fire", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Fire" },
      summary: [ "Gain Elemental Mastery: Fire." ]
    },
    "phoenix-tears": {
      name: "Phoenix Tears", cost: "No listed cost", range: "Touch", keywords: ["Encounter Conclusion"], requires: null,
      usage: "Uses your Encounter Conclusion action.",
      summary: [ "Heal one target other than yourself for your Power and prevent one injury on them." ]
    },
    "fiery-rebirth": {
      name: "Fiery Rebirth", cost: "0 RP, 5 MP", range: "Self", keywords: ["Downed", "Blanketing"], requires: "You have suffered a mortal wound.",
      usage: "Once per arc.",
      summary: [ "Return to 1 HP and stand up; Light full pierce Fire damage to enemies within 5ft; remove all your buffs and debuffs and the mortal wound." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PIGFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("pigfolk", {
  name: "Pigfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/pigfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "mercantile": {
      name: "Mercantile", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { classUnlocked: "merchant" },
      summary: [ "You start with the Merchant class unlocked at level 1." ]
    },
    "eat-anything": {
      name: "Eat Anything", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You can eat Junk units as food (restores mana as usual). Not with stocks." ]
    },
    "break-piggy-bank": {
      name: "Break Piggy Bank", cost: "0 RP", range: "Self", keywords: ["Miracle"], requires: "Costs 500 Clim to use.",
      summary: [ "Gain Haste: 2 AP for the rest of this turn. A target can only be Hasted once per turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PIXIE  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("pixie", {
  name: "Pixie", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/pixie/", checked: "2026-10-21", version: "0.13.2",
  size: "Tiny",
  usesParentCreation: true,
  abilities: {
    "tiny-pixie": {
      name: "Tiny Pixie", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { Toughness: -2, Agility: 2, walkSpeed: 5 },
      summary: [ "Tiny size: you can share a square with allies or enemies. Toughness -2, Agility +2. Walking (not hovering or flying) speed is 5ft." ]
    },
    "hover": {
      name: "Hover", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Passively hover up to 5ft above the ground. While hovering you can't be targeted by abilities that need a flying/airborne target unless you meet those conditions normally." ]
    },
    "flight": {
      name: "Flight", cost: "0 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [
        "Controlled flight up to your Speed. Taking damage while flying drops you 20ft (not if the attacker was flying); if that reaches the ground you're Rooted and can't fly until the end of your next turn.",
        "Ending movement within 5ft of the ground ends Flight (Rooted if damage caused it)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// RABBITFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("rabbitfolk", {
  name: "Rabbitfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/rabbitfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  note: "Rabbitfolk can enter the Thief class (Thief requirement: 'Be a rabbitfolk or ...').",
  abilities: {
    "fast-runner": {
      name: "Fast Runner", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { speed: 25 },
      summary: [ "Base movement speed is 25ft instead of 20ft." ]
    },
    "instinct": {
      name: "Instinct", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "The first Stealth attack against you each encounter doesn't get Trick Attack.",
        "If attacked while surprised you can still react; 'unaware' bonuses such as Killshot's don't apply. Before an action that could cause grave harm or death, the DM may give you a premonition."
      ]
    },
    "escape-artist": {
      name: "Escape Artist", cost: "1 AP or 1 RP", range: "Self", keywords: [], requires: "You are grappled.",
      summary: [ "Immediately escape the grapple." ]
    }
  }
});

// ---------------------------------------------------------------------------
// RAIJIN  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("raijin", {
  name: "Raijin", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/raijin/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "consume-lightning": {
      name: "Consume Lightning", cost: "1 RP", range: "Self", keywords: ["Rapid"], requires: "You're about to take Lightning damage.",
      summary: [
        "Damage Reduction 100 Lightning against that damage. If it reduces damage from a source that isn't you or your own effect, gain Lightning Boost: your next Lightning elemental attack gets bonus damage equal to the attacker's Power (doubled on Heavy).",
        "On-hit effects don't apply if the damage was reduced to 0."
      ]
    },
    "lightning-weapon-expert": {
      name: "Lightning Weapon Expert", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { classUnlocked: "flash-star-blade-style" },
      summary: [ "You start with the Flash Star Blade Style class unlocked at level 1." ]
    },
    "elemental-mastery-lightning": {
      name: "Elemental Mastery: Lightning", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Lightning" },
      summary: [ "Gain Elemental Mastery: Lightning." ]
    }
  }
});

// ---------------------------------------------------------------------------
// RATFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("ratfolk", {
  name: "Ratfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/ratfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Small",
  usesParentCreation: true,
  abilities: {
    "prehensile-tail": {
      name: "Prehensile Tail", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Carry things with your tail so you can interact with objects even with both hands full (not tasks needing strength). Can't wield weapons with it." ]
    },
    "plaguebringer": {
      name: "Plaguebringer", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "While you're diseased or poisoned, damaging an enemy with a melee attack passes the disease/poison on (it saves as normal if the original allowed a save)." ]
    },
    "scurry-away": {
      name: "Scurry Away", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "After Disengage or Feint, +10ft movement speed until the end of your turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// RED PANDAFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("red-pandafolk", {
  name: "Red Pandafolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/red-pandafolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "panda-stance": {
      name: "Panda Stance", cost: "1 AP or 1 RP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [ "Tail-balance stance: when knocked back or knocked prone, you may end the stance to cancel that effect. Otherwise lasts until you enter another stance." ]
    },
    "panda-roll": {
      name: "Panda Roll", cost: "2 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Your next Dodge before the start of your next turn costs 0 RP; if it avoids the attack, you may Sidestep 5ft." ]
    }
  }
});

// ---------------------------------------------------------------------------
// RYUJIN  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("ryujin", {
  name: "Ryujin", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/ryujin/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  options: { label: "Ryujin's Mastery (choose one element)", choices: ["Fire", "Water", "Ice", "Wind", "Lightning", "Earth"] },
  abilities: {
    "draconic-presence": {
      name: "Draconic Presence", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "+10 to Negotiation and Intimidation checks against Grunts, and against Heroics with a lower Spirit Core than yours." ]
    },
    "ryujins-mastery": {
      name: "Ryujin's Mastery", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "CHOICE: Fire, Water, Ice, Wind, Lightning or Earth" },
      summary: [ "Gain one Elemental Mastery of your choice: Fire, Water, Ice, Wind, Lightning or Earth." ]
    },
    "dragons-breath": {
      name: "Dragon's Breath", cost: "2 AP", range: "Self", keywords: ["Water", "Lightning", "Fire", "Arcane", "Wind", "Frost", "Scatter", "Safe"], requires: null,
      summary: [ "Ranged Light attack on everything in a 30ft, 60-degree cone, dealing the damage type of your Ryujin's Mastery element." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SALAMANDER  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("salamander", {
  name: "Salamander", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/salamander/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "fireball": {
      name: "Fireball", cost: "2 AP", range: "60ft", keywords: ["Fire", "Spell", "Scatter"], requires: null,
      summary: [ "Light Fire attack against every unit in a 15x15ft area. (Same ability as Pyromancer's Fireball.)" ]
    },
    "enduring-warmth": {
      name: "Enduring Warmth", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Give off comforting heat within 30ft that counters most cold-weather effects; toggle it on or off every 1 second." ]
    },
    "consume-fire": {
      name: "Consume Fire", cost: "1 RP", range: "Self", keywords: ["Fire"], requires: "You're about to take Fire damage.",
      summary: [ "Damage Reduction 100 Fire against that damage. If the source isn't you or your own effect, you may spend 2 Mana to heal the original damage amount (max 100 HP). On-hit effects don't apply if the damage was reduced to 0." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SELKIE  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("selkie", {
  name: "Selkie", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/selkie/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "aquatic-fae": {
      name: "Aquatic Fae", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Base speed while swimming is 30. Aqua Drill costs 0 mana when used as an RP ability in natural water." ]
    },
    "seal-cloak": {
      name: "Seal Cloak", cost: "4 AP", range: "Self", keywords: ["Transformation"], requires: null,
      summary: [ "Put on your seal cloak for Seal Form: swim speed 80ft, basic actions only, proficient in unarmed melee, hold breath up to 2 hours, land speed 5. Remove the cloak for 0 AP." ]
    },
    "blue-soul": {
      name: "Blue Soul", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { classUnlocked: "hydromancer", classLevel: 2 },
      summary: [ "You start with the Hydromancer class unlocked, at level 2." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHEEPFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("sheepfolk", {
  name: "Sheepfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/sheepfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "sweet-dreams": {
      name: "Sweet Dreams", cost: "No listed cost", range: null, keywords: [], requires: null,
      usage: "Rest action.",
      summary: [ "After an ally's rest finishes, pick that ally (not yourself) to heal 5 + Toughness. Doesn't stack with Medical Kit." ]
    },
    "highly-sensitive-to-magic": {
      name: "Highly Sensitive to Magic", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { classAccess: "aetherie", expDiscount: 100 },
      summary: [ "You can enter the Aetherie class without meeting its requirements, and it costs 100 EXP less." ]
    },
    "mind-connection": {
      name: "Mind Connection", cost: "4 AP, 1 MP", range: "Touch", keywords: [], requires: null,
      summary: [
        "Telepathically link up to five willing people you touch; all linked creatures can talk to each other. Max mana -1 while active. 500ft max range (out of range just pauses the signal). Lasts until cancelled.",
        "For 1 AP, see through a linked person's eyes; while doing so you're Blinded 5 for attacks not made through Conduit."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SLIMEFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("slimefolk", {
  name: "Slimefolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/slimefolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "store-consume-item": {
      name: "Store/Consume Item", cost: "0 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Store one consumable item inside your body (still counts for weight). You can consume it without equipping it to get its effect." ]
    },
    "slime-body": {
      name: "Slime Body", cost: "1 RP", range: "Self", keywords: [], requires: null,
      summary: [ "Gain Slime Body: Damage Reduction 100 against physical damage from the next attack." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SPIDERFOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("spiderfolk", {
  name: "Spiderfolk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/spiderfolk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "spider-climb": {
      name: "Spider Climb", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "Ignore movement penalties from webs (natural, magical or from items). Climb walls at half speed with no tools or checks and stay attached.",
        "Doing anything but moving/climbing leaves you vulnerable to being knocked off until the start of your next turn. Taking damage slides you down 20ft; on a ceiling you fall prone and take normal fall damage."
      ]
    },
    "extra-arms": {
      name: "Extra Arms", cost: "0 AP", range: "Self", keywords: ["Quick"], requires: null,
      summary: [ "Your next interact-with-object action costs 1 less AP." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SURYAN  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("suryan", {
  name: "Suryan", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/suryan/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "solar-radiance": {
      name: "Solar Radiance", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "You always give off sunlight-like light in a 60ft radius (can be reduced to 5ft, never off). Its negative effects on creatures are halved; it counts as bright light for creatures weak to light." ]
    },
    "elemental-mastery-holy": {
      name: "Elemental Mastery: Holy", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Holy" },
      summary: [ "Gain Elemental Mastery: Holy." ]
    },
    "revealing-light": {
      name: "Revealing Light", cost: "2 AP, 2 MP", range: "Self", keywords: [], requires: null,
      summary: [ "40ft-radius pulse of solar light: creatures in it are revealed (stealth, invisibility and similar hiding are cancelled) and glow until the start of your next turn with -20 to Stealth checks." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SYLPH  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("sylph", {
  name: "Sylph", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/sylph/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "elemental-mastery-wind": {
      name: "Elemental Mastery: Wind", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Wind" },
      summary: [ "Gain Elemental Mastery: Wind." ]
    },
    "fly": {
      name: "Fly", cost: "1 AP, 2 MP", range: "Touch", keywords: ["Spell", "Concentration"], requires: null,
      summary: [ "You or a touched creature gains controlled flight and hover with doubled speed while flying, until the encounter ends. Damage while flying (not hovering) drops it 20ft; reaching the ground Roots it until the end of its next turn. No drop if the attacker was flying. (Same as Windbringer's Fly.)" ]
    },
    "consume-wind": {
      name: "Consume Wind", cost: "1 RP", range: "Self", keywords: ["Rapid"], requires: "You're about to take Wind damage.",
      summary: [ "Damage Reduction 100 Wind against that damage. If it reduces damage from a source that isn't you or your effect, gain Wind Boost: next turn's movement speed + the damage reduced (rounded down to a multiple of 5). On-hit effects don't apply if you took 0 damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TENGU  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("tengu", {
  name: "Tengu", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/tengu/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "tengu-mask": {
      name: "Tengu Mask", cost: "1 AP", range: "Self", keywords: ["Presence Concealment"], requires: null,
      summary: [ "Summon a mask of your design and gain Presence Concealment (no mana or Aura abilities while concealed). Spend 1 AP or 1 RP to take it off or push it up off your face." ]
    },
    "flight": {
      name: "Flight", cost: "0 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [
        "Controlled flight up to your speed. Taking damage while flying drops you 20ft (not if the attacker was flying); if that reaches the ground you're Rooted until the end of your next turn.",
        "Ending movement within 5ft of the ground ends Flight (Rooted if damage caused it)."
      ]
    },
    "tengu-aura-weapon": {
      name: "Tengu Aura Weapon", cost: "No listed cost", range: null, keywords: ["Aura"], requires: null,
      summary: [ "Your weapons count as silver for harming fiends; hitting a fiend with a silver weapon disables its regeneration." ]
    }
  }
});

// ---------------------------------------------------------------------------
// UNSEELIE  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("unseelie", {
  name: "Unseelie", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/unseelie/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "darkvision": {
      name: "Darkvision (passive)", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { darkvision: 60 },
      summary: [ "60ft darkvision: see perfectly in darkness without light." ]
    },
    "elemental-mastery-dark": {
      name: "Elemental Mastery: Dark", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Dark" },
      summary: [ "Gain Elemental Mastery: Dark." ]
    },
    "torture-techniques": {
      name: "Torture Techniques", cost: "0 RP", range: "Melee Weapon Range", keywords: ["Slow", "Unbalanced", "Bleeding"],
      requires: "You landed a critical hit on the enemy and it wasn't blocked or dodged.",
      summary: [ "Inflict Slowed, Unbalanced or Bleeding (your choice) until the end of the target's next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// WILLO WISP  (sub-race of Fae - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("willo-wisp", {
  name: "Willo Wisp", kind: "subrace", parent: "fae",
  url: "https://lyrian.splatpass.net/races/willo-wisp/", checked: "2026-10-21", version: "0.13.2",
  size: "Small",
  usesParentCreation: true,
  abilities: {
    "hearthlight": {
      name: "Hearthlight", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Glow with comforting light within 30ft; toggle it on or off once every 1 second." ]
    },
    "hover": {
      name: "Hover", cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Passively hover up to 5ft above the ground. While hovering you can't be targeted by abilities that need a flying/airborne target unless you meet those conditions normally." ]
    },
    "faerie-eyes-calling": {
      name: "Faerie Eyes: Calling", cost: "1 AP, 1 MP", range: "30ft", keywords: ["Charm", "Illusion"], requires: null,
      summary: [ "If your Focus is higher than the target's, it moves up to its Speed toward you, stopping if more movement would hurt it. Against Grunts: always works regardless of Focus, costs 0 mana, and it keeps moving even into damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// WOLF-FOLK  (sub-race of Chimera - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("wolf-folk", {
  name: "Wolf-folk", kind: "subrace", parent: "chimera",
  url: "https://lyrian.splatpass.net/races/wolf-folk/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  abilities: {
    "hunting-wolf": {
      name: "Hunting Wolf", cost: "Variable AP", range: "Self", keywords: [], requires: "Target enemy is below half HP.",
      summary: [ "Move toward the target as if you'd spent X AP on movement, at double speed." ]
    },
    "pack-tactics": {
      name: "Pack Tactics", cost: "0 AP", range: "Sight", keywords: ["Quick"], requires: null,
      summary: [ "Pick a target. Until the end of your turn, while an ally is within 5ft of it, +2 accuracy on your melee attacks against it." ]
    },
    "scent-of-blood": {
      name: "Scent of Blood", cost: "0 AP", range: "120ft", keywords: ["Quick"], requires: null,
      summary: [ "Learn which targets within 120ft are below half their max HP (not their exact HP %)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// YOUKAI  (primary race - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("youkai", {
  name: "Youkai", kind: "primary", parent: null,
  url: "https://lyrian.splatpass.net/races/youkai/", checked: "2026-10-21", version: "0.13.2",
  size: null,
  stats: { Focus: 1, Presence: 1 },
  skills: { points: 5, pick: "UNCLEAR", options: ["Insight", "Intimidation", "Magic", "Medicine", "Negotiation"] },
  languages: ["Kiraran", "Common"],
  proficiencies: [],
  subraces: ["ancient-marionette", "jiangshi", "kitsune", "nekomata", "nio", "oni", "raijin", "ryujin", "suryan", "tengu", "yuki-onna"],
  abilities: {
    "spiritual-sync": {
      name: "Spiritual Sync", cost: "0 AP, Variable MP", range: "Self", keywords: ["Rage"], requires: null,
      usage: "Not again until after an encounter conclusion phase.",
      summary: [
        "Pay mana: gain 8 temporary HP per mana (X = mana paid). Temporary HP left after the encounter conclusion phase turns back into mana at 8 HP : 1 mana.",
        "Or pay HP: gain 1 temporary mana per 8 HP spent (not more HP than you have); temporary mana is lost at the encounter conclusion phase. Max 3 mana or 24 HP."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// YUKI-ONNA  (sub-race of Youkai - checked 2026-10-21, site v0.13.2)
// ---------------------------------------------------------------------------
RC("yuki-onna", {
  name: "Yuki-Onna", kind: "subrace", parent: "youkai",
  url: "https://lyrian.splatpass.net/races/yuki-onna/", checked: "2026-10-21", version: "0.13.2",
  size: "Medium",
  usesParentCreation: true,
  note: "Lore describes Yuki-Onna as female only, but no rule restriction is stated.",
  abilities: {
    "chilling-cold": {
      name: "Chilling Cold", cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { mastery: "Frost" },
      summary: [ "Give off a cooling wind within 30ft that counters most hot weather; toggle once every 1 second. Also grants Elemental Mastery: Frost." ]
    },
    "absorb-ice": {
      name: "Absorb Ice", cost: "1 RP", range: "Self", keywords: ["Rapid"], requires: "You're about to take Frost damage.",
      summary: [ "Damage Reduction 100 Frost against that damage. If the source is you, an ally, or your/their effect, gain temporary HP equal to the damage reduced until the encounter ends. On-hit effects don't apply if all damage was reduced to 0." ]
    },
    "icicle-nail": {
      name: "Icicle Nail", cost: "1 AP, 1 MP", range: "60ft", keywords: ["Frost", "Slow", "Spell"], requires: null,
      summary: [ "Light attack dealing Frost damage; on hit the target is Slowed until the end of its next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HYBRID RACES  (breakthroughs - https://lyrian.splatpass.net/races/hybrids/ - checked 2026-10-21)
// Both are character-creation-only breakthroughs costing 200 EXP each.
// ---------------------------------------------------------------------------
LC.raceHybrids = [
  { id: "faerie-chimera-hybrid", name: "Faerie-Chimera Hybrid (Race)", cost: "200 EXP", creationOnly: true,
    url: "https://lyrian.splatpass.net/races/hybrids/",
    configs: [
      { primary: "fae", subraceFrom: "chimera",
        summary: "Keep all Fae base benefits (incl. Faerie Flash) plus the chosen Chimera sub-race's dialect and all its listed traits. No Chimera base traits." },
      { primary: "chimera", subraceFrom: "fae",
        summary: "Keep all Chimera base benefits (incl. Fight or Flight), gain Sylvan and all the chosen Fae sub-race's listed traits. No Fae base traits. Picking High Fae gives Faerie Flash instead of Faerie Flash II." }
    ],
    note: "Page wording about the language/dialect is garbled; it also says 'Fae Flash' where abilities say 'Faerie Flash'." },
  { id: "human-chimera-hybrid", name: "Human-Chimera Hybrid (Race)", cost: "200 EXP", creationOnly: true,
    url: "https://lyrian.splatpass.net/races/hybrids/",
    configs: [
      { primary: "human", subraceFrom: "chimera",
        summary: "Keep Human base traits incl. Divine Providence, and gain all the chosen Chimera sub-race's features. No Chimera base traits. You LOSE Human Adaptability and the bonus 100 EXP." }
    ] }
];
