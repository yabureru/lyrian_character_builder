// Lyrian Chronicles Character Planner - what item MODS do to your numbers.
// The mod names, crafting points and rules text live in items.js (each item's "mods", plus the four
// "Universal ... Mods" records). This file only says which mods change a number on your sheet,
// so the planner can add them up. Mods not listed here are rules text only (shown as notes).
//
// Numbers apply while the item is equipped/wielded (Burden always applies).
// FIELDS
//   burden   - change to the item's Burden (always applies)
//   guard, block, evasion, dodge, init, speed, mana, rp - flat changes while equipped
//   cut      - make the ARMOR's own penalties smaller: { init: n, evade: n } (never turns them into bonuses)
//   noEvadePenalty - the armor's Evasion/Dodge penalty is removed
//   noPenalties    - all the armor's penalties are removed
//   noGuard / noBlock - the armor gives no passive Guard / no Block bonus
//   frame    - this mod uses the armor's Frame slot (only one frame per armor)
//   meld     - Artifice Melding step (Burden -1 if another artifice in your Burden has the same mod)
//   needs    - another mod this one requires on the same item
//   note     - shown under the item; not added to the numbers (situational effects)

window.LC = window.LC || {};

// Which Universal mod lists fit which items
LC.universalMods = [
  { id: "universal-weapon-mods",   label: "Universal weapon mods",   fits: function(it){ return !!it.weapon; } },
  { id: "universal-armor-mods",    label: "Universal armor mods",    fits: function(it){ return !!it.armor && !/shield/i.test(it.armor.type || "") && it.tag !== "Shield"; } },
  { id: "universal-artifice-mods", label: "Universal artifice mods", fits: function(it){ return it.category === "Artifice"; } },
  { id: "universal-crafting-mods", label: "Universal crafting mods", fits: function(it){ return it.tag === "Tool" || it.tag === "Artisan Weapon"; } }
];

LC.modEffects = {
  // ---- Armor items' own mods ----
  "Mage Robes":            { mana: 1, guard: -1, block: -2 },
  "Cloud Robes":           { speed: 5 },
  "Reinforced Clothing":   { burden: 1, frame: true },
  "Agile Weave":           { noPenalties: true, noGuard: true, noBlock: true, evasion: 1, frame: true, note: "+1 Evasion only (no extra Dodge)." },
  "Padded":                { note: "+1 Guard against Light attacks only." },
  "Chain Links":           { block: 4 },
  "Flexible Armor":        { note: "After you Dodge, next Block +8; after you Block, next Dodge +4 (until your next turn)." },
  "Berserker Armor":       { rp: -2, noEvadePenalty: true, frame: true },
  "Berserker Armor II":    { rp: -3, noEvadePenalty: true, frame: true },
  "Fortress":              { cut: { init: 1, evade: 2 }, speed: -5, frame: true },
  "Beacon Armor":          { note: "Unarmored allies within 40ft get +1 Guard." },

  // ---- Shields ----
  "Tower Shield":          { burden: 1, note: "Counts as Low cover for you against ranged attacks." },
  "Shield Formation":      { note: "+1 Guard while next to an ally with a shield or greatshield." },
  "Photon Greatshield":    { burden: 1, guard: 1, block: 4, init: -1, evasion: -2, dodge: -2,
                             note: "The Photon Shield becomes a Greatshield: +1 Guard, Shield bonus 8 while Blocking, -1 Initiative, -2 Evasion/Dodge." },

  // ---- Weapons' own mods (while wielded) ----
  "Winged Lugs":           { guard: 1, block: 2, evasion: -1, dodge: -1 },
  "Lange Messer":          { guard: 1, burden: 1 },
  "Extended Quillons":     { note: "+1 Guard when you're out of RP." },
  "Heavy Crossguard":      { note: "Keep the Block bonus two-handed; Block +4 more one-handed with the other hand empty." },
  "Brown Gauntlets":       { block: 4, note: "Shield bonus: stacks with Shielding Fist but not other shields." },
  "Parrying Dagger":       { note: "If you don't attack with it on your turn: +4 to Block until your next turn." },
  "Justice Lance":         { note: "While in your Burden your speed is capped at 25ft." },
  "Lightweight":           { burden: -1 },

  // ---- Universal weapon mods ----
  "Versatile":             { burden: 1, note: "Usable one- or two-handed (declare at the start of your turn)." },

  // ---- Universal armor mods ----
  "Barrier":                       { noGuard: true, cut: { init: 2, evade: 4 }, frame: true, note: "Still gives its normal Block bonus." },
  "Protective Coating":            { noBlock: true, cut: { init: 1, evade: 2 }, frame: true },
  "Manaweave":                     { cut: { init: 1, evade: 2 }, mana: -3, frame: true },
  "Fire Armor (600 Salachar)":            { cut: { init: 1, evade: 2 }, frame: true, note: "Double damage from Water." },
  "Turbulent Air Layer (600 Sylphsteel)": { cut: { init: 1, evade: 2 }, frame: true, note: "The armor's bonuses only apply against ranged attacks." },
  "Lightning Armor (600 Fulgarite)":      { cut: { init: 1, evade: 2 }, frame: true, note: "Double damage from Earth." },
  "Shadow Buoyancy (600 Corvuskite)":     { frame: true, note: "Initiative penalty 1 and Evasion/Dodge penalty 2 smaller at night only." },
  "Condensation Layer (600 Vivinthal)":   { cut: { init: 1, evade: 2 }, frame: true, note: "Double damage from Lightning; permanently Soaked." },
  "Ice Armor (600 Glacite)":              { cut: { init: 1, evade: 2 }, frame: true, note: "Double damage from Fire." },
  "Ki Concealment":                { needs: "Manaweave" },
  "Mana Barrier":                  { needs: "Manaweave", note: "Mana and max mana become 0 while worn; +7 temporary HP per mana lost." },
  "Quick Channel Layer (B, 2000 Arcanium)": { mana: 1 },
  "Fog Plates (B, 4000 Vivinthal)":         { dodge: 4 },
  "Rock Plates (B, 4000 Ghimslag)":         { block: 8 },
  "Wind's Blessing (B, 1250 Sylphsteel)":   { note: "After you Dodge, +10ft speed until the end of your next turn." },
  "Tengu Armor (A, 1000 Aetherplume)":      { note: "+5ft speed while hovering or flying." },
  "Hive Mind (A, 1000 Insectoid)":          { note: "+1 Initiative per ally (including you) wearing this mod, max +3." },
  "Anti-Terror Field (B, 2500 Gravity)":    { note: "+4 Evasion against ranged attacks; your ranged attacks automatically miss." },
  "Ceremonial Armor":                       { note: "+10 Negotiation and Intimidation; automatically fail Stealth." },

  // ---- Universal artifice mods ----
  "Triple Barrel":      { needs: "Double Barrel" },
  "Quadruple Barrel":   { needs: "Triple Barrel" },
  "Quintuple Barrel":   { needs: "Quadruple Barrel" },
  "Advanced Melding":   { meld: "Advanced Melding" },
  "Superior Melding":   { meld: "Superior Melding", needs: "Advanced Melding" },
  "Perfect Melding":    { meld: "Perfect Melding", needs: "Superior Melding" },

  // ---- Other item mods with a prerequisite ----
  "Sorthen Shield Generator": { needs: "Jury-Rigged Shield" }
};
