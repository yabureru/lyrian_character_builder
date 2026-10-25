// Lyrian Chronicles Character Planner - Bonus Data
// Things that change the numbers on your sheet. Checked against each race/class/breakthrough page
// (unofficial static copy, v0.13.2, 2026-10-22).
//
// Class key-ability bonuses that are always on (Fighter +5 HP, Arcanist +2 Mana, skill points,
// element masteries...) are already stored in classes.js as each ability's "grants", so they are
// NOT repeated here. This file holds:
//   - race bonuses that are always on
//   - "toggle" bonuses: only while a stance/aura/transformation/condition is active.
//     The planner shows these as checkboxes so you can see your numbers with them on or off.
//   - "note" bonuses: situational (e.g. +2 to saves vs spells). Shown as text, not added to totals.
//
// FIELDS
//   source  - "race:<id>", "class:<id>" or "bt:<id>"
//   ability - the ability that gives it (classes: counts once that step is bought)
//   type    - "always", "toggle" or "note"
//   mods    - numbers to add: hp, mana, ap, rp, guard, block, evasion, dodge, init, speed, burden,
//             Power, Focus, Agility, Toughness, Fitness, Cunning, Reason, Awareness, Presence
//   replaces - "<source>/<ability>" of another bonus this one takes the place of (it is hidden while this applies)
//   set     - numbers that are REPLACED, not added (e.g. { guard: 0 } = Guard becomes 0)
//   baseSpeed / walkSpeed - replaces the normal 20ft base speed
//   expertise - flat expertise bonus { skill, name, amount }
//   text    - what to show (own words)

window.LC = window.LC || {};

LC.bonuses = [
  // ---------------- Races: always on ----------------
  { source: "race:nio", ability: "stoneskin", type: "always", mods: { guard: 1, block: 4, evasion: -2, dodge: -2 },
    text: "Stoneskin: +1 Guard, +4 Block, -2 Evasion and Dodge." },
  { source: "race:pixie", ability: "tiny-pixie", type: "always", mods: { Toughness: -2, Agility: 2 }, walkSpeed: 5,
    text: "Tiny Pixie: Toughness -2, Agility +2, Tiny size; walking speed 5ft (flying/hovering uses normal speed)." },
  { source: "race:catfolk", ability: "fast-runner", type: "always", baseSpeed: 25, text: "Fast Runner: base speed 25ft." },
  { source: "race:rabbitfolk", ability: "fast-runner", type: "always", baseSpeed: 25, text: "Fast Runner: base speed 25ft." },
  { source: "race:centaur", ability: "horse-body", type: "always", mods: { burden: 2 }, text: "Horse Body: max Burden +2; Large." },
  { source: "race:anubis", ability: "weighing-the-heart", type: "always", expertise: { skill: "Insight", name: "Lie detection", amount: 5 },
    text: "Weighing the Heart: +5 Expertise bonus to Insight to tell if someone is lying." },
  { source: "race:cu-sith", ability: "scent", type: "always", expertise: { skill: "Perception", name: "Smell", amount: 5 },
    text: "Scent: +5 Expertise bonus to Perception (Smell)." },
  { source: "race:mothfolk", ability: "antennae", type: "always", expertise: { skill: "Perception", name: "Vibration Sense", amount: 10 },
    text: "Antennae: +10 expertise to Perception (Vibration Sense), creatures within 40ft." },

  // ---------------- Races: toggles ----------------
  { source: "race:dogfolk", ability: "loyalty", type: "toggle", mods: { guard: 1, block: 2 },
    text: "Loyalty (within 5ft of a heroic ally): +1 Guard, +2 Block." },
  { source: "race:oni", ability: "spirited-bravado", type: "toggle", mods: { Power: 1 },
    text: "Spirited Bravado (while Tipsy): +1 Power." },
  { source: "race:horse-folk", ability: "horse-step-acceleration", type: "toggle", mods: { speed: 30 },
    text: "Horse Step Acceleration: +30 speed until your next turn; straight-line movement only." },
  { source: "race:dullahan", ability: "dullahans-mount", type: "toggle", mods: { speed: 30 },
    text: "Dullahan's Mount (mounted): +30ft speed, Large, straight-line movement only." },
  { source: "race:demon", ability: "divine-release", type: "toggle", mods: { speed: 5, ap: 1, blockGuard: 5 },
    text: "Divine Release: +5 speed and flight, +1 AP at the start of your turn, Block gives +5 more Guard. Upkeep 11 HP (16 at or below 0 HP)." },
  { source: "race:nio", ability: "statue-form", type: "toggle", mods: { guard: 5 },
    text: "Statue Form: +5 Guard; Block is your only action." },
  { source: "race:cait-sith", ability: "cat-form", type: "toggle", mods: { evasion: 3, dodge: 6 }, set: { guard: 0 },
    text: "Cat Form: Guard becomes 0, +3 Evasion, +6 Dodge, size Tiny; only Light Melee Attacks." },
  { source: "race:cu-sith", ability: "dog-form", type: "toggle", mods: { guard: -2, block: -4, evasion: 1, dodge: 1 },
    text: "Dog Form: -2 Guard, -4 Block, +1 Size bonus to Evasion and Dodge; melee unarmed attacks only." },

  // ---------------- Breakthroughs: always on ----------------
  { source: "bt:mystic-eyes-of-faerie-light-fae", ability: "", type: "always", expertise: { skill: "Perception", name: "Spot illusions", amount: 10 },
    text: "Mystic Eyes of Faerie Light: +10 to Perception checks to tell if something is an illusion (not immune)." },
  { source: "bt:bully", ability: "", type: "note", text: "Bully: +5 to Intimidation checks against targets with lower Fitness than you." },

  // ---------------- Breakthroughs: toggles ----------------
  { source: "bt:small-doggy-cu-sith", ability: "dog-form", type: "toggle", replaces: "race:cu-sith/dog-form",
    mods: { guard: -4, block: -8, evasion: 2, dodge: 2 },
    text: "Dog Form with Small Doggy: -4 Guard, -8 Block, +2 Size bonus to Evasion and Dodge (replaces the normal Dog Form numbers)." },

  // ---------------- Classes: toggles ----------------
  { source: "class:adventurer", ability: "steel-aura", type: "toggle", mods: { guard: 3 },
    text: "Steel Aura: +3 Guard until the start of your next turn; only Block or Rage RP actions." },
  { source: "class:angelblooded", ability: "true-divine-release", type: "toggle", mods: { speed: 5 },
    text: "True Divine Release: controlled flight and +5 movement speed. Upkeep 2 Mana." },
  { source: "class:berserker", ability: "rage-stance", type: "toggle", mods: { guard: 1, ap: 2 },
    text: "Rage Stance: +2 AP each turn (melee attacks only), +1 Guard, +5 to Fitness checks; only Rage RP actions/spells." },
  { source: "class:death-knight", ability: "bone-armor", type: "toggle", mods: { guard: 2 },
    text: "Bone Armor: +2 Guard until the encounter ends or you take 2+ damage from one attack." },
  { source: "class:death-knight", ability: "secret-art-unholy-strength", type: "toggle", mods: { Power: 2, Focus: 2 },
    text: "Unholy Strength: +2 Power and +2 Focus; melee weapon physical damage becomes Dark. Upkeep 1 Mana." },
  { source: "class:flowing-wind-style", ability: "plume-treading-art", type: "toggle", mods: { speed: 30 },
    text: "Plume-Treading Art at 6 Windflow stacks: +30 speed (+5 per stack)." },
  { source: "class:monk", ability: "serene-water-stance", type: "toggle", mods: { evasion: 3 },
    text: "Serene Water Stance: +3 Evasion; move 5ft each time an attack misses you." },
  { source: "class:still-stone-style", ability: "shielding-fist", type: "toggle", mods: { block: 4 },
    text: "Shielding Fist (1+ hand empty, no shield): +4 Shield bonus to Block." },
  { source: "class:still-stone-style", ability: "steadfast-earth-stance", type: "toggle", mods: { guard: 2, block: 6 },
    text: "Steadfast Earth Stance (no armor): +2 Guard, +6 Block." },
  { source: "class:still-stone-style", ability: "hardening-fist", type: "toggle", mods: { guard: 2, block: 8, evasion: -4, dodge: -4 },
    text: "Hardening Fist: +2 Guard, +8 Block, -4 Evasion (including Dodge) until your next turn." },

  // ---------------- Notes (situational, not added to totals) ----------------
  { source: "class:anti-mage", ability: "magic-resistance", type: "note", text: "+2 Anti-Mage bonus to saves against Spells." },
  { source: "class:scout", ability: "independent-actor", type: "note", text: "+10 Perception, Insight, Survival and Stealth when alone (no known allies within 300ft) for 15+ minutes." },
  { source: "class:priest", ability: "studied-healer", type: "note", text: "+5 Negotiation bonus with followers of your religion." },
  { source: "class:great-berserker", ability: "giant-strength", type: "note", text: "In Rage Stance: count as one size larger and +5 to Fitness checks." },
  { source: "class:magitechnician", ability: "advanced-artificing-key", type: "note", text: "The +1 Burden must be spent on an artifice." }
];

// ---------------- Mystic Eyes ----------------
// You normally have 2 Mystic Eye slots (the 8 Eyes breakthrough raises it to 8). Each Mystic Eye replaces one
// of your real eyes and uses a slot. These classes' key ability is the eye; any other class counts once you
// own an ability with the "Mystic Eye" keyword (ruling from the user, 2026-10-24).
LC.mysticEyes = {
  baseSlots: 2,
  classes: ["evil-eye", "faerie-light-eyes", "mystic-eyes-of-destruction", "mystic-eyes-of-domination",
            "mystic-eyes-of-petrification", "shinigami-eyes", "wave-palm-style"]
};

// ---------------- Element mastery gained when you MASTER a class ----------------
// (Key-ability masteries like Mage's Arcane are in classes.js grants.)
LC.masteryOnMastery = {
  "acolyte":  { text: "Elemental Mastery in your Divine's element (Holy if you follow only a human deity).",
                options: ["Holy", "Astra", "Arcane", "Water", "Fire", "Physical", "Lightning", "Earth"] },
  "sorcerer": { text: "Master one more element of your choice.",
                options: ["Fire", "Water", "Earth", "Wind", "Lightning", "Frost", "Arcane", "Holy", "Dark"] }
};
