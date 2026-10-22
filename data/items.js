// Lyrian Chronicles Character Planner - Item Data
// Sources: https://lyrian.splatpass.net/items/ (unofficial static copy of Lyrian Chronicles 0.13.2), and
//          https://rpg.angelssword.com/game/0.13.2/items (official site) for the 51 items added 2026-10-22.
// Built from scratch. Every record is page-checked against its own item page.
// Records are kept in alphabetical order. Anything that did not load is marked "MISSING".
//
// HOW TO READ A RECORD
//  - category: the site's item type (Equipment, Alchemy, Artifice, Adventuring Essentials,
//    Crafting, Mount, Talisman, Divine Arms, Astra Relic). tag: the smaller label (Weapon,
//    Armor, Potion, Kit, Tool, ...).
//  - cost: Clim price as shown (number, or text like "Varies" / "Original Weapon + 3000").
//  - burden: combat Burden value (limit 10, see rules). null = not listed.
//  - weapon / armor / mount blocks hold the numbers the planner needs.
//  - crafting: points needed, discipline, materials - for crafters.
//  - "summary" is plain English written for this tool, NOT the official wording.
//  - Weapon group rules (Nimble, Keen, Wild Swing...) are in RULES_REFERENCE.md section 10.

window.LC = window.LC || {};
LC.items = LC.items || {};

function IT(id, rec){
  rec.id = id;
  LC.items[id] = rec;
}

IT("adjustable-lens-refractor-gun", {
  name: "Adjustable Lens Refractor Gun", url: "https://lyrian.splatpass.net/items/adjustable-lens-refractor-gun/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: "Original Weapon + 3000", burden: "Original Weapon",
  weapon: { variants: ["Musket", "Sniper Rifle"], range: "120ft / 720ft", damageType: "Arcane" },
  fuel: { shell: "M", usage: "1 shell per encounter" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Elemental Lens", points: 10, summary: "Deal a chosen element instead of Arcane." } ], B: [], note: "Also accepts normal musket and sniper rifle mods." },
  summary: [ "A musket or sniper rifle that fires arcane blasts (Arcane damage). Spend 1 AP per lens to adjust up to 3 lenses; each adjusted lens counts your Power as 1 higher and Focus as 1 lower for weapon attacks." ]
});

IT("advanced-surgery-kit", {
  name: "Advanced Surgery Kit", url: "https://lyrian.splatpass.net/items/advanced-surgery-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 1500, burden: 2,
  summary: [
    "Rest Action: minor surgery on an ally or yourself (needs 5+ points in Medicine or a Medicine expertise). Medicine DC 15: negate one injury from this campaign until the campaign ends (it must still be treated afterwards). Each injury can be negated once; one negated injury per person at a time.",
    "Advanced: can handle two injuries on one person, at DC 30."
  ]
});

IT("adventurers-kit", {
  name: "Adventurer's Kit", url: "https://lyrian.splatpass.net/items/adventurers-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 100, burden: 1,
  summary: [
    "Backpack, flint and steel, rope, notebook, pen, compass, bedroll, torches, hand mirror - usable for their normal purposes.",
    "Holds up to 5 Burden of Adventuring Essentials, a Northi Lantern, or the kit's own items combat-ready at 0 Burden (not kits or other burden reducers). Torch/lantern holster for hands-free light."
  ]
});

IT("aerial-staff-custom-model", {
  name: "Aerial Staff (Custom Model)", url: "https://lyrian.splatpass.net/items/aerial-staff-custom-model/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Airship",
  cost: "No fixed cost (built from parts)", burden: 3,
  rules: "Changing parts needs a level 8 artificer to spend 1 EP in town (any number of changes on one staff). Parts are crafted like normal artifices and can't be modified unless stated. C mods can reduce burden.",
  parts: {
    models: [
      { name: "Falcon",  cost: 5000, slots: "Main x1, Sub x2, Utility x2, Engine x1" },
      { name: "Egret",   cost: 5000, slots: "Main x1, Sub x1, Utility x3, Engine x1" },
      { name: "Kestrel", cost: 3000, slots: "Main x2, Sub x1, Engine x1" } ],
    main: [
      { name: "Sorthern Arc Buster Cannon", cost: 1000, summary: "Fixed, 0 RP, 60ft, Strafe 50, Ammo 2 (1 shell each). Heavy Arcane attack with Shieldbreaker." },
      { name: "Napalm Bomb", cost: 750, summary: "Fixed, 0 RP, 90ft, Strafe 25, Ammo 2. Light Fire attack on all units in 15x15ft; on damage Burning 5." } ],
    sub: [
      { name: "Magic Rocket Pods", cost: 500, summary: "Turret, 0 RP, 30ft, Ammo 2. Precise Arcane attack with Lock On, no Pinpoint." },
      { name: "Blaze Rifle", cost: 1000, summary: "Gimballed, 120ft, Strafe 10. Rapid: Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack." },
      { name: "Northi Gattling Rifle", cost: 500, summary: "Fixed, 30ft, Strafe 50. 1 AP: Light attack on the target and everything 10ft directly behind it." },
      { name: "Sorthen Smoke Pod", cost: 1250, summary: "Turret, 0 RP, 30ft, Ammo 1. 15x15ft smoke sphere blocking line of sight (like Glittershards) until the start of your next turn." } ],
    utility: [
      { name: "Sorthen Shield Projector", cost: 1250, summary: "25 HP shield; hits on the shield don't cause altitude loss." },
      { name: "Sorthen Ejection System", cost: 1000, summary: "0 RP, Ammo 1: instant wind bubble for you and the artifice." },
      { name: "Medivac Rig", cost: 500, summary: "Carry a downed ally underneath; speed halved." },
      { name: "Afterburner", cost: 1250, summary: "Ammo 1: double speed for the next full movement action." } ],
    engines: [
      { name: "Budget Model", cost: 250, summary: "20ft air speed, no line movement. 1 Medium shell per day." },
      { name: "Wing Model", cost: 1000, summary: "50ft air speed, 30ft turn. 1 Medium shell per day." },
      { name: "Stock Model", cost: 750, summary: "65ft air speed, 10ft turn. 1 Medium shell per day." },
      { name: "Arlan Custom", cost: 1500, summary: "35ft air speed, no line movement. 1 Medium shell per day." } ]
  },
  summary: [ "Build-your-own single-rider airship (Aerial Mage). Pick a model, then fill its Main/Sub/Utility/Engine slots with parts." ]
});

IT("aerial-staff-sparrow-model", {
  name: "Aerial Staff (Sparrow Model)", url: "https://lyrian.splatpass.net/items/aerial-staff-sparrow-model/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Airship",
  cost: 3500, burden: 3, activation: "0 AP",
  fuel: { shell: "M", usage: "1 shell per hour" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: {
    A: [ { name: "Jury-Rigged Cannon", points: 10, summary: "Front arcane cannon: Heavy attack damage, 2 AP, 120ft." },
         { name: "Medivac Rig", points: 20, summary: "Haul a downed ally underneath; speed -10ft while hauling." },
         { name: "Jury-Rigged Shield", points: 35, summary: "15 HP shield, can be toggled; refilled only by changing the fuel cell." } ],
    B: [ { name: "Sorthen Shield Generator", points: 50, summary: "Needs Jury-Rigged Shield: shield +15 HP." },
         { name: "Upgraded Airship Engine", points: 80, summary: "Speed 50ft, gains Line Movement (straight lines only)." } ] },
  summary: [ "Entry-level, fuel-efficient Aerial Staff often used for training: fly at 20ft, needs 1 hand while flying. No built-in shield or weapons." ]
});

IT("aetherie-sensory-station", {
  name: "Aetherie Sensory Station", url: "https://lyrian.splatpass.net/items/aetherie-sensory-station/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 100000, burden: null,
  fuel: { shell: "Medium", usage: "1 shell per day" },
  crafting: { points: "MISSING (page shows 'lol')", discipline: "Artificing" },
  summary: [ "Large stationary chair an Aetherie connects to: Mind Connection range +250 miles while connected." ]
});

IT("alchemists-alembic", {
  name: "Alchemist's Alembic", url: "https://lyrian.splatpass.net/items/alchemists-alembic/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Tool",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Blacksmithing" },
  summary: [ "Core crafting tool needed to craft as an alchemist." ]
});

IT("alchemy-materials", {
  name: "Alchemy Materials", url: "https://lyrian.splatpass.net/items/alchemy-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: null, burden: null,
  herbs: {
    columns: ["Fire", "Water", "Earth", "Wind", "Arcane"],
    Common:  [60, 50, 55, 55, 65],
    Rare:    [300, 250, 275, 275, 325],
    Mystic:  [600, 500, 550, 550, 650],
    Supreme: [1200, 1000, 1100, 1100, 1300]
  },
  mixing: [ { mix: "Small", extra: "2x", dice: 1 }, { mix: "Medium", extra: "4x", dice: 2 }, { mix: "Large", extra: "8x", dice: 3 }, { mix: "Supreme", extra: "14x", dice: 4 } ],
  summary: [ "Herb prices by rarity and element (Clim). Herb Mixing: add extra alchemy units plus the same herbs the recipe needs (2x/4x/8x/14x the recipe's cost) for +1/+2/+3/+4 crafting dice." ]
});

IT("alchemy-rig", {
  name: "Alchemy Rig", url: "https://lyrian.splatpass.net/items/alchemy-rig/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Storage",
  cost: 50, burden: 1, capacity: 2,
  summary: [ "Quick-access holder: up to 2 Burden of Elixirs, Flasks, Potions and Salves (description also mentions Poisons). Only one alchemy rig equipped at a time." ]
});

IT("alchemy-rig-deluxe", {
  name: "Alchemy Rig (Deluxe)", url: "https://lyrian.splatpass.net/items/alchemy-rig-deluxe/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Storage",
  cost: 300, burden: 2, capacity: 5,
  summary: [ "Quick-access holder: up to 5 Burden of Elixirs, Flasks, Potions and Salves (description also mentions Poisons). Only one alchemy rig equipped at a time." ]
});

IT("anti-air-weapon-sight", {
  name: "Anti-Air Weapon Sight", url: "https://lyrian.splatpass.net/items/anti-air-weapon-sight/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 2000, burden: 1, activation: "0 AP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: {
    A: [ { name: "Holographic Optic", points: 10, summary: "+1 more accuracy vs flying targets." } ],
    B: [ { name: "Wide Targeting", points: 25, summary: "Bonus is 2 lower but applies to all targets." },
         { name: "Aerial Targeting Mode", points: 50, summary: "Lasts until the encounter ends or you turn it off (2 AP); -4 vs non-flying targets." },
         { name: "Wing Outlining", points: 80, summary: "First attack after activating applies the Downburst effect." } ] },
  summary: [ "Attaches to ranged weapons (4 AP to attach/detach). Activate: +4 accuracy on ranged weapon attacks vs flying targets until the start of your next turn." ]
});

IT("antidote-shot-potion", {
  name: "Antidote Shot Potion", url: "https://lyrian.splatpass.net/items/antidote-shot-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 1000, burden: 1, activation: "1 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "1400 Alchemy units, 1x Mystic Earth, 1x Rare Water" },
  summary: [ "Immediately remove one common poison effect from yourself and become immune to that poison for 1 hour." ]
});

IT("armor-clothing", {
  name: "Armor (Clothing)", url: "https://lyrian.splatpass.net/items/armor-clothing/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 500, burden: 0,
  armor: { type: "Clothing", guard: 0, block: 0, evasion: 0, initiative: 0 },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: {
    A: [ { name: "Mage Robes", points: 20, summary: "+1 max mana; -1 guard and -2 block." } ],
    B: [ { name: "Cloud Robes", points: 50, summary: "+5ft movement speed." },
         { name: "Battle Casting", points: 80, summary: "Your first spell each turn doesn't provoke attacks of opportunity." } ],
    Frame: [ { name: "Reinforced Clothing", points: 0, summary: "Can benefit from material bonuses; Burden +1." } ] },
  summary: [ "No bonuses on its own. Armorsmith-crafted clothing can take Flamellon mods. Can't be worn with regular armor." ]
});

IT("armor-heavy", {
  name: "Armor (Heavy)", url: "https://lyrian.splatpass.net/items/armor-heavy/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 2000, burden: 3,
  armor: { type: "Heavy", guard: 3, block: 12, evasion: -6, dodge: -6, initiative: -3, proficiency: "Heavy Armor" },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: {
    A: [ { name: "Beacon Armor", points: 35, summary: "Unarmored allies within 40ft get +1 Guard (armor plates don't count as armor here)." } ],
    B: [ { name: "Deflecting Armor", points: 25, summary: "A natural 1 accuracy roll against you always misses." },
         { name: "Weighted Greaves", points: 50, summary: "You're Immovable while on the ground." },
         { name: "Titan Armor", points: 50, summary: "Count as one size larger (max Large)." } ],
    Frame: [ { name: "Berserker Armor II", points: 10, summary: "RP -3, but no Evasion/Dodge penalty." },
             { name: "Fortress", points: 20, summary: "Initiative penalty -1 smaller, Evasion/Dodge penalty -2 smaller; speed -5ft." } ] },
  summary: [ "+3 Guard, +12 Block; -3 Initiative, -6 Evasion and Dodge." ]
});

IT("armor-light", {
  name: "Armor (Light)", url: "https://lyrian.splatpass.net/items/armor-light/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 500, burden: 1,
  armor: { type: "Light", guard: 1, block: 4, evasion: -2, dodge: -2, initiative: -1, proficiency: "Light Armor" },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: {
    A: [ { name: "Agile Weave", points: 35, summary: "Remove the penalties and the Guard/Block bonus; +1 Evasion (no extra Dodge). Uses the Frame slot." },
         { name: "Acrobat's Harness", points: 10, summary: "+10 Athletics while worn." },
         { name: "Camo", points: 10, summary: "Pick a colour theme (green, yellow, white, dark, blue; GM may add): +5 Stealth when hiding in matching places, -5 elsewhere." },
         { name: "Porcupine Hide", points: 10, summary: "Grapplers take 1d6 Full Pierce; escaping a grapple deals 1d6 Full Pierce to the grappler." } ],
    B: [ { name: "Sleek", points: 25, summary: "If you spend RP to Dodge an attack of opportunity, you dodge other AoOs from the same action for free." },
         { name: "Padded", points: 25, summary: "+1 Guard against Light attacks only." },
         { name: "Mistweave", points: 50, summary: "You no longer provoke attacks of opportunity, but attacks against you gain Half Pierce." } ] },
  summary: [ "+1 Guard, +4 Block; -1 Initiative, -2 Evasion and Dodge." ]
});

IT("armor-medium", {
  name: "Armor (Medium)", url: "https://lyrian.splatpass.net/items/armor-medium/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 1000, burden: 2,
  armor: { type: "Medium", guard: 2, block: 8, evasion: -4, dodge: -4, initiative: -2, proficiency: "Medium Armor" },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: {
    A: [ { name: "Weak Point Protection", points: 20, summary: "Pinpoint attacks against you ignore 1 less Guard." } ],
    B: [ { name: "Chain Links", points: 25, summary: "Block from this armor +4." },
         { name: "Flexible Armor", points: 50, summary: "After you Dodge, your next Block gets +8; after you Block, your next Dodge gets +4 (until the start of your next turn; bonuses don't stack)." } ],
    Frame: [ { name: "Berserker Armor", points: 10, summary: "RP -2, but no Evasion/Dodge penalty." } ] },
  summary: [ "+2 Guard, +8 Block; -2 Initiative, -4 Evasion and Dodge." ]
});

IT("armor-plates", {
  name: "Armor Plates", url: "https://lyrian.splatpass.net/items/armor-plates/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 500, burden: 3,
  armor: { type: "Plates (attachment)", guard: 1, block: 2 },
  crafting: { points: 50, discipline: "Armorsmithing", note: "Can't be modified during crafting." },
  summary: [ "Attach to armor (10 minutes to attach/remove): +1 Guard, +2 Block, Burden +3. Works with other armor mods. Can go on clothing but only works if you have the armor proficiency. Multiple sets don't stack." ]
});

IT("armorsmithing-materials", {
  name: "Armorsmithing Materials", url: "https://lyrian.splatpass.net/items/armorsmithing-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: null, burden: null,
  metals: [
    { name: "Iron",       clim: 300,   units: 500,   bonus: "None", note: "Uses 1 ingot (shield/plates), 2 (medium/greatshield), 4 (heavy)" },
    { name: "Tamahagane", clim: 1050,  units: 2000,  bonus: "+1" },
    { name: "Mithril",    clim: 4050,  units: 8000,  bonus: "+1/+1" },
    { name: "Orichalcum", clim: 8050,  units: 16000, bonus: "+2/+1" },
    { name: "Escudo",     clim: 11550, units: 23000, bonus: "+2/+2" } ],
  metalExtraIron: "Better metals also need extra Iron: +1 (medium/greatshield) or +3 (heavy).",
  leathers: [
    { name: "Animal Hide", clim: 300,   units: 500,   bonus: "None" },
    { name: "Direhide",    clim: 1050,  units: 2000,  bonus: "+1" },
    { name: "Primehide",   clim: 4050,  units: 8000,  bonus: "+1/+1" },
    { name: "Dragonscale", clim: 8050,  units: 16000, bonus: "+2/+1" },
    { name: "Astrahide",   clim: 11550, units: 23000, bonus: "+2/+2" } ],
  bonusMeaning: "Armor: each bonus = +1 Evasion and Dodge OR +1 Guard and +2 Block. Shield: each bonus = +1 Gear to Dodge OR +3 Gear to Block. Clothing only gets material bonuses with Reinforced Clothing.",
  special: [
    { name: "Spidersilk",  clim: 500,  points: 15, summary: "Light armor only: penalties become -1 Initiative, -2 Evasion/Dodge; take double Fire damage." },
    { name: "Electrum",    clim: 3050, points: 30, summary: "+1 Guard, +4 Block vs Divines, Summons, Otherworlders." },
    { name: "Silver",      clim: 1050, points: 30, summary: "Melee/contact hits strip a Fiend's regeneration until its next turn." },
    { name: "Mycelite",    clim: 1550, points: 20, summary: "-1 Burden (min 1)." },
    { name: "Adamantite",  clim: 2050, points: 20, summary: "Can't be damaged/destroyed by Sunder etc. from non-Adamantite sources." },
    { name: "Luxaeterna",  clim: 1550, points: 30, summary: "5 DR vs Holy." },
    { name: "Corvuskite",  clim: 1550, points: 30, summary: "5 DR vs Dark." },
    { name: "Arcanium",    clim: 1550, points: 30, summary: "5 DR vs Arcane." },
    { name: "Vivinthal",   clim: 1550, points: 30, summary: "5 DR vs Water." },
    { name: "Glacite",     clim: 1550, points: 30, summary: "5 DR vs Frost." },
    { name: "Salachar",    clim: 1550, points: 30, summary: "5 DR vs Fire." },
    { name: "Sylphsteel",  clim: 1550, points: 30, summary: "5 DR vs Wind." },
    { name: "Fulgarite",   clim: 1550, points: 30, summary: "5 DR vs Lightning." },
    { name: "Ghimslag",    clim: 1550, points: 30, summary: "5 DR vs Earth." },
    { name: "Crystal Core", clim: 3500, points: 35, summary: "1 Mana, 0 RP: absorb an elemental attack; your next weapon attack gets bonus damage = attacker's Power and takes that element." },
    { name: "Nullite",     clim: 2050, points: 20, summary: "Vs spells: +2 Guard, +2 Evasion, +2 saves; friendly spells can't target you." },
    { name: "Runesteel",   clim: 1050, points: 10, summary: "Friendly spells targeting you get +20ft range." },
    { name: "Sunsteel",    clim: 1550, points: 15, summary: "Immune to negative effects of sun exposure." },
    { name: "Perfect Shell", clim: 2000, points: "MISSING", summary: "Light armor or plates; needs a Master Armorer. Light armor: +1 Guard, +4 Block, one medium armor property, no other special material/frame mods. Plates: +2 Block (+1 Guard, +4 Block total)." } ],
  cloakMaterials: [
    { name: "(no special material)", summary: "Gear bonus to Dodge or Block; Direhide/Primehide/Dragonscale/Astrahide give +1/+2/+3/+4 Dodge or +3/+6/+9/+12 Block." },
    { name: "Night Wolf Pelt", clim: 550, points: 5, summary: "+5 Stealth at night/unlit (+10/+15 with Direhide/Primehide)." },
    { name: "Fae Wolf Pelt", clim: 1050, points: 10, summary: "4 AP: hide in plain sight until you act or speak (3 AP with Primehide)." },
    { name: "Astral Tiger Pelt", clim: 1050, points: 10, summary: "After an attack on you misses or is dodged, 1 RP: teleport up to 20ft." },
    { name: "Wonderland Rabbit Hide", clim: 1550, points: 15, summary: "RP-costing movement +5ft (+10ft with Primehide); doesn't stack with Compact Ergonomics." } ],
  summary: [ "Armor and shield crafting materials: base metals/leathers give stat bonuses; special materials add properties." ]
});

IT("artifice-limb", {
  name: "Artifice Limb", url: "https://rpg.angelssword.com/game/0.13.2/items/artifice-limb",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 4000, burden: 0,
  fuel: { shell: "S", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Grapple Launcher (arm)", points: 10, summary: "Install a grappling hook artifice in the arm (hook bought separately; an artificer installs it as an errand). Still costs its Burden and 1 AP to use, but no AP to draw." },
               { name: "Zoom In (eye)", points: 20, summary: "1 AP: +10 Perception until the start of your next turn." },
               { name: "Weapon Slot (arm)", points: 20, summary: "Install a weapon in the arm (artificer errand). It costs Burden as normal; draw or sheathe it for 0 AP once per turn." },
               { name: "Movement Burst (leg)", points: 20, summary: "0 AP: +20ft movement until the start of your next turn; afterwards your speed is halved until you put a new shell in the leg." } ],
          B: [ { name: "Blast Knuckle (arm or leg)", points: 25, summary: "After a Heavy unarmed attack with the limb, 0 RP: Light attack against every enemy in a 15ft by 15ft cone behind the target. Needs a new shell before it works again (a leg without a shell halves your speed)." },
               { name: "Rocket Punch (arm)", points: 50, summary: "Once per round, make a basic unarmed Heavy attack with this limb at a target within 60ft." },
               { name: "Thermal Fusion Sight (eye)", points: 80, summary: "Thermal vision to 120ft. Can't see things hidden by magic, and can't tell temperatures apart once they're below freezing." } ] },
  summary: [ "Replaces a lost limb or body part; made to measure for one person. Works like a normal limb." ]
});

IT("artifice-water-purifier", {
  name: "Artifice Water Purifier", url: "https://lyrian.splatpass.net/items/artifice-water-purifier/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 500, burden: 1, activation: "0 AP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Filter", points: 10, summary: "4 liters per minute." } ],
          B: [ { name: "Natural Use", points: 25, summary: "During a rest action with a camping kit set up, provides half the food for a basic rest (20u)." } ] },
  summary: [ "Makes water safe to drink: up to 2 liters per minute." ]
});

IT("artificer-materials", {
  name: "Artificer Materials", url: "https://lyrian.splatpass.net/items/artificer-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: null, burden: null,
  artificeParts: [
    { material: "Iron", multiplier: 1, cModSlots: 1 }, { material: "Tamahagane", multiplier: 1, cModSlots: 2 },
    { material: "Mithril", multiplier: 2, cModSlots: 3 }, { material: "Orichalcum", multiplier: 2, cModSlots: 4 },
    { material: "Escudo", multiplier: 3, cModSlots: 5 } ],
  partsRule: "Parts needed = multiplier x base Clim cost. Real weapons/guns also need extra Artifice Parts = weapon cost - 500.",
  weaponIngots: [
    { name: "Iron", clim: 300, units: 500, bonus: "None" }, { name: "Tamahagane", clim: 1050, units: 2000, bonus: "+1" },
    { name: "Mithril", clim: 4050, units: 8000, bonus: "+1/+1" }, { name: "Orichalcum", clim: 8050, units: 16000, bonus: "+2/+1" },
    { name: "Escudo", clim: 11550, units: 23000, bonus: "+2/+2" } ],
  bonusMeaning: "Weapon bonuses go to Focus and Power; for +1 or +2/+1 the crafter picks which stat gets the extra point.",
  special: [
    { name: "Dark Iron", clim: 550, points: 15, summary: "Struck target can't teleport until the end of its next turn." },
    { name: "Silver", clim: 1050, points: 30, summary: "Disables Fiend regeneration until the start of your next turn." },
    { name: "Electrum", clim: 3050, points: 30, summary: "+2 Electrum Power vs Divines, Summons, Otherworlders." },
    { name: "Mycelite", clim: 1550, points: 20, summary: "-1 Burden (min 1)." },
    { name: "Obsidian Steel", clim: 550, points: "MISSING", summary: "Immune to magical effects targeting it." },
    { name: "Adamantite", clim: 2050, points: 20, summary: "Can't be destroyed by non-Adamantite tools/weapons." },
    { name: "Luxaeterna", clim: 1550, points: 15, summary: "Physical damage becomes Holy." },
    { name: "Corvuskite", clim: 1550, points: 15, summary: "Physical damage becomes Dark." },
    { name: "Arcanium", clim: 1550, points: 15, summary: "Physical damage becomes Arcane." },
    { name: "Fulgarite", clim: 1550, points: 15, summary: "Physical damage becomes Lightning." },
    { name: "Vivinthal", clim: 1550, points: 15, summary: "Physical damage becomes Water." },
    { name: "Glacite", clim: 1550, points: 10, summary: "Physical damage becomes Frost." },
    { name: "Salachar", clim: 1550, points: 15, summary: "Physical damage becomes Fire." },
    { name: "Sylphsteel", clim: 1550, points: 15, summary: "Physical damage becomes Wind." },
    { name: "Ghimslag", clim: 1550, points: 15, summary: "Physical damage becomes Earth." },
    { name: "Nullite", clim: 2050, points: 30, summary: "All attacks gain Shieldbreaker." },
    { name: "Runesteel", clim: 1050, points: 10, summary: "Can channel spells (counts as a channeling weapon)." },
    { name: "Sepsium", clim: 2050, points: 30, summary: "Target can't recover HP (except regeneration) until the start of your next turn." },
    { name: "Sunsteel", clim: 1550, points: 15, summary: "Full Pierce vs creatures weak to light/sunlight." } ],
  summary: [ "Artifice parts and weapon ingots for artificers, with special materials." ]
});

IT("artificers-kit", {
  name: "Artificer's Kit", url: "https://lyrian.splatpass.net/items/artificers-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2,
  summary: [ "Rest Action, choose one: patch a broken non-airship Artifice (not Aerial Staves) so it works until the scenario ends (still broken afterwards; can't be patched again until fully repaired), or make an Artifice Shell by paying its cost in Magical Fuel." ]
});

IT("artificers-multitool", {
  name: "Artificer's Multitool", url: "https://lyrian.splatpass.net/items/artificers-multitool/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Tool",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Blacksmithing" },
  summary: [ "Core crafting tool needed to craft as an artificer." ]
});

IT("astra-guidance-beacon", {
  name: "Astra Guidance Beacon", url: "https://lyrian.splatpass.net/items/astra-guidance-beacon/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 1000, burden: 1, activation: "0 AP",
  fuel: { shell: "M", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Increased Effect", points: 20, summary: "+1000 instead of +500." } ],
          B: [ { name: "Exousiai Protection", points: 80, summary: "You and affected allies ignore 1 level of astra corruption increase from Exousiai-type fiends." } ] },
  summary: [ "While active, allies within 300ft with a lower Spirit Core than yours count their Spirit Core as 500 higher for astra corruption risk. Doesn't stack with similar effects." ]
});

var AXE_MODS = {
    A: [ { name: "Reinforced Langet", points: 10, summary: "Can't be disarmed." },
         { name: "Bearded Extension", points: 20, summary: "Wild Swing ignores Guard but deals 2 (Light) / 4 (Heavy)." },
         { name: "Rotational Stability", points: 35, summary: "If a target moves away when you attack it with this weapon, your next attack this turn that's a throw of this weapon at that target gains Lock On." } ],
    B: [ { name: "Boomerang Wing", points: 25, summary: "After throwing it, return it to your hand for 0 RP." },
         { name: "Lancebreaker", points: 80, summary: "+2 Lancebreaker Power vs enemies wielding polearms or lances." } ] };

IT("axe-one-handed", {
  name: "Axe (One-Handed)", url: "https://lyrian.splatpass.net/items/axe-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Axes", hands: 1, range: "5ft", property: "Wild Swing" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: AXE_MODS,
  summary: [ "Wild Swing: a miss still deals 4 (Light) or 8 (Heavy/Precise) damage, reduced by Guard (min 1); no on-damage effects." ]
});

IT("axe-two-handed", {
  name: "Axe (Two-Handed)", url: "https://lyrian.splatpass.net/items/axe-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Axes", hands: 2, range: "5ft", property: "Wild Swing" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: AXE_MODS,
  summary: [ "Wild Swing: a miss still deals 4 (Light) or 8 (Heavy/Precise) damage, reduced by Guard (min 1); no on-damage effects. Two-handed melee Heavy = 5d6 + 2x Power." ]
});

IT("axolotl-elixir", {
  name: "Axolotl Elixir", url: "https://lyrian.splatpass.net/items/axolotl-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 500, burden: 1, activation: "0 AP, 2 Mana",
  crafting: { points: 50, discipline: "Alchemy", materials: "870 Alchemy units, 1x Rare Water, 1x Common Arcane" },
  summary: [ "Take true damage = 5x Toughness. Until the encounter ends, regain HP = Toughness at the start of each of your turns. Ends at once if that drinking damage drops you to 0 HP or less (other drops to 0 don't end it)." ]
});

IT("backpack", {
  name: "Backpack", url: "https://lyrian.splatpass.net/items/backpack/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Storage",
  cost: 50, burden: null,
  summary: [ "Worn or put on a pack animal; holds non-combat items (retrieving one in combat costs 4 AP per the rulebook)." ]
});

IT("bear-elixir", {
  name: "Bear Elixir", url: "https://lyrian.splatpass.net/items/bear-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 400, burden: 1, activation: "1 AP",
  crafting: { points: 40, discipline: "Alchemy", materials: "650 Alchemy units, 1x Rare Earth" },
  summary: [ "Take 11 true damage, then gain 1 RP now and +1 max RP until the encounter ends. A second Bear Elixir has no effect while one is active." ]
});

IT("binoculars", {
  name: "Binoculars", url: "https://lyrian.splatpass.net/items/binoculars/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Focus Dial", points: 20, summary: "Close-range penalty becomes -5." },
               { name: "Night Mode", points: 20, summary: "Nightvision up to 120ft while looking through." } ],
          B: [ { name: "Range Finder", points: 25, summary: "Tell how far away objects are." },
               { name: "Anti-Illusion Lens", points: 50, summary: "+10 to tell whether something is an Illusion." } ] },
  summary: [ "Looking through: +10 Perception for things more than 60ft away, -10 within 60ft." ]
});

IT("blacksmithing-materials", {
  name: "Blacksmithing Materials", url: "https://lyrian.splatpass.net/items/blacksmithing-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: "Varies", burden: 0,
  ingots: [
    { name: "Iron", clim: 300, units: 500, bonus: "None" }, { name: "Tamahagane", clim: 1050, units: 2000, bonus: "+1" },
    { name: "Mithril", clim: 4050, units: 8000, bonus: "+1/+1" }, { name: "Orichalcum", clim: 8050, units: 16000, bonus: "+2/+1" },
    { name: "Escudo", clim: 11550, units: 23000, bonus: "+2/+2" } ],
  ingotRule: "Iron: 1 ingot for a one-handed weapon/tool, 2 for a longsword or two-handed. Better metals: 1 ingot, plus 1 extra Iron ingot for two-handed. Weapon bonuses go to Focus/Power (see Artificer Materials).",
  special: [
    { name: "Dark Iron", clim: 550, points: 15, summary: "Struck target can't teleport until the end of its next turn." },
    { name: "Silver", clim: 1050, points: 30, summary: "Disables Fiend regeneration until the start of your next turn." },
    { name: "Electrum", clim: 3050, points: 30, summary: "+2 Electrum Power vs Divines, Summons, Otherworlders." },
    { name: "Mycelite", clim: 1550, points: 20, summary: "-1 Burden (min 1)." },
    { name: "Obsidian Steel", clim: 550, points: "MISSING", summary: "Can't be targeted by magical effects." },
    { name: "Adamantite", clim: 2050, points: 20, summary: "Can't be destroyed by non-Adamantite tools/weapons." },
    { name: "Luxaeterna", clim: 1550, points: 10, summary: "Physical damage becomes Holy." },
    { name: "Corvuskite", clim: 1550, points: 10, summary: "Physical damage becomes Dark." },
    { name: "Arcanium", clim: 1550, points: 10, summary: "Physical damage becomes Arcane." },
    { name: "Fulgarite", clim: 1550, points: 10, summary: "Physical damage becomes Lightning." },
    { name: "Vivinthal", clim: 1550, points: 10, summary: "Physical damage becomes Water." },
    { name: "Glacite", clim: 1550, points: 10, summary: "Physical damage becomes Frost." },
    { name: "Salachar", clim: 1550, points: 10, summary: "Physical damage becomes Fire." },
    { name: "Sylphsteel", clim: 1550, points: 10, summary: "Physical damage becomes Wind." },
    { name: "Ghimslag", clim: 1550, points: 10, summary: "Physical damage becomes Earth." },
    { name: "Nullite", clim: 2050, points: 30, summary: "All attacks gain Shieldbreaker." },
    { name: "Runesteel", clim: 1050, points: 10, summary: "Can channel spells as a channeling weapon." },
    { name: "Sepsium", clim: 2050, points: 30, summary: "Target can't recover HP (except regeneration) until the start of your next turn." },
    { name: "Sunsteel", clim: 1550, points: 15, summary: "Full Pierce vs creatures weak to light/sunlight." } ],
  summary: [ "Weapon/tool metals for blacksmiths. Special materials in a crafting tool give +1 to crafting checks." ]
});

IT("blaster-weapon", {
  name: "Blaster Weapon", url: "https://lyrian.splatpass.net/items/blaster-weapon/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 1000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Swap", points: 20, summary: "Activation costs 0 AP." } ],
          B: [ { name: "Lightweight", points: 25, summary: "Burden -1." },
               { name: "Sniper Mode", points: 50, summary: "Ranged mode range 240ft." },
               { name: "Channeling Blasts", points: 80, summary: "Ranged mode counts as a channeling weapon for spells." } ] },
  summary: [ "Melee weapon attachment (4 AP to attach/detach). 1 AP: switch to ranged mode firing elemental blasts up to 80ft (element set when made). Switching back uses up the shell." ]
});

IT("blood-elixir", {
  name: "Blood Elixir", url: "https://lyrian.splatpass.net/items/blood-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 750, burden: 1, activation: "0 AP",
  crafting: { points: 53, discipline: "Alchemy", materials: "1350 Alchemy units, 3x Common Water, 1x Rare Fire" },
  summary: [ "Undispellable debuff: current and max HP -15 until the end of your next rest. If it lowered your max HP, gain 3 mana at once (up to max)." ]
});

var BLUDGEON_MODS = {
  A: [ { name: "Flexible Handle", points: 10, summary: "Minimum damage dealt is always 2 (not for effects that would deal 0)." },
       { name: "Chain Flail", points: 35, summary: "Can't be defended against with 0 RP actions; its attacks don't count as using your 0 RP action." } ],
  B: [ { name: "Weighted Poll Upsetting", points: 25, summary: "The 3rd of 3 separate attacks on a target knocks it back 10ft on damage." },
       { name: "Flanged Head", points: 50, summary: "Crits stay maximised against Blocking targets." } ] };

IT("bludgeoning-weapon-one-handed", {
  name: "Bludgeoning Weapon (One-Handed)", url: "https://lyrian.splatpass.net/items/bludgeoning-weapon-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Bludgeoning", hands: 1, range: "5ft", property: "Hollow Blow" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: BLUDGEON_MODS,
  summary: [ "Hollow Blow: on a hit against a Blocking target, +2 damage (Light/Precise) or +4 (Heavy)." ]
});

IT("bludgeoning-weapon-two-handed", {
  name: "Bludgeoning Weapon (Two-Handed)", url: "https://lyrian.splatpass.net/items/bludgeoning-weapon-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Bludgeoning", hands: 2, range: "5ft", property: "Hollow Blow" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: BLUDGEON_MODS,
  summary: [ "Hollow Blow: on a hit against a Blocking target, +2 damage (Light/Precise) or +4 (Heavy). Two-handed melee Heavy = 5d6 + 2x Power." ]
});

IT("boar", {
  name: "Boar", url: "https://lyrian.splatpass.net/items/boar/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Item",
  cost: 1500, burden: 0,
  mount: { size: "Medium", hp: 45, Focus: 2, Power: 4, Agility: 2, Toughness: 4, speed: 30, lineMovement: true },
  summary: [ "Combat-trained boar. Boar Charge: its Trample can hit enemies of its own size (Medium) and deals +Power damage. Line Movement (straight lines only). Rulebook: Boar is a Small-rider mount." ]
});

IT("botany-bag", {
  name: "Botany Bag", url: "https://lyrian.splatpass.net/items/botany-bag/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Materials",
  cost: 500, burden: 1,
  crafting: { points: 50, discipline: "Armorsmithing" },
  mods: { B: [ { name: "One item container", points: 50, summary: "Doubles the extra capacity, but for one material type only." } ] },
  summary: [ "Carry 2000 more units of each Lumber material and Alchemy units (0 Burden while empty). Made from Direhide/Primehide/Dragonscale/Astrahide: +1000/+3000/+6000/+10000 more." ]
});

IT("bow-two-handed", {
  name: "Bow (Two-Handed)", url: "https://lyrian.splatpass.net/items/bow-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Bow", hands: 2, range: "240ft", ranged: true, property: "High Ground" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Recurve", points: 20, summary: "Range +60ft." } ],
          B: [ { name: "Shortbow", points: 25, summary: "Range 120ft; once per turn after a basic Light attack, a second Light attack for 0 AP (counts as your dual-wield attack)." },
               { name: "Bodkin Arrows", points: 25, summary: "Gain Hollow Blow (+2/+4 vs Blocking targets)." },
               { name: "Broadhead Arrows", points: 50, summary: "+1 damage vs light-armored or unarmored targets." },
               { name: "Blunthead Arrows", points: 80, summary: "First basic Heavy attack each round Dazes on damage." } ] },
  summary: [ "High Ground: against a target at least 10ft below you, the shot can count as coming from the sky (low cover calculated from above)." ]
});

IT("breaching-flask", {
  name: "Breaching Flask", url: "https://lyrian.splatpass.net/items/breaching-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 400, burden: 1, activation: "1 AP",
  crafting: { points: 40, discipline: "Alchemy", materials: "600 Alchemy units, 1x Rare Fire" },
  summary: [ "Throw at a locked door/window/medium entryway (Roguecraft DC 20 or less) to blast it open; anyone within 5ft behind it is knocked prone. Always loud. Thrown at creatures: they avoid it for 0 RP or are knocked back 30ft." ]
});

IT("bull-potion", {
  name: "Bull Potion", url: "https://lyrian.splatpass.net/items/bull-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 300, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Rare Fire" },
  summary: [ "Counts as eating food (your one food buff for the day) and restores 2 mana. No effect if you've already had a food benefit today." ]
});

IT("buster-weapon", {
  name: "Buster Weapon", url: "https://lyrian.splatpass.net/items/buster-weapon/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 3000, burden: 1, activation: "0 RP, Instant",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Powerful Explosion", points: 10, summary: "+1 more damage." },
               { name: "Optimized Explosion", points: 20, summary: "+1 more accuracy." } ],
          B: [ { name: "Angel Type", points: 25, summary: "Enhanced attack knocks the target back 5ft on damage." },
               { name: "Launch Step", points: 50, summary: "Move 10ft before the enhanced attack." },
               { name: "Shieldbreaker", points: 80, summary: "Enhanced attack gains Shieldbreaker." } ] },
  summary: [ "Melee weapon attachment (4 AP to attach; removing it costs 1 EP in town). Use on a melee attack: +3 accuracy and +3 damage." ]
});

IT("calibretto-device", {
  name: "Calibretto Device", url: "https://lyrian.splatpass.net/items/calibretto-device/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 1000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Bag Clip", points: 10, summary: "Clip to a belt/bag, no need to hold it." } ],
          B: [ { name: "Item Checker", points: 25, summary: "Check objects for astra corruption." },
               { name: "Increased Capacity", points: 50, summary: "Stays active for a week on one shell." },
               { name: "Radar", points: 80, summary: "Points to the strongest non-ambient astra source within 1 mile." } ] },
  summary: [ "Handheld device showing the astra level where you are." ]
});

IT("camping-kit", {
  name: "Camping Kit", url: "https://lyrian.splatpass.net/items/camping-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2,
  summary: [ "Tent, 5 bedrolls, tinder, flint and steel, camping mat. Rest action: set up a comfortable camp - the whole party gets comfortable rest (2x Toughness), even in poor conditions." ]
});

IT("cannon-two-handed", {
  name: "Cannon (Two-Handed)", url: "https://lyrian.splatpass.net/items/cannon-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Specialized Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Cannon", hands: 2, range: "240ft (60ft if you moved before firing)", ranged: true, specialized: true },
  crafting: { points: 30, discipline: "Artificing" },
  mods: {
    A: [ { name: "IFF Off", points: 0, summary: "Splash hits everyone in range, not just enemies." },
         { name: "Pie Launcher", points: 10, summary: "Fire Pie Toss through it for the longer range (no damage change)." },
         { name: "Big Boom", points: 20, summary: "Splash radius 10ft." },
         { name: "Incendiary Shell", points: 20, summary: "Splash deals Fire and ignites flammables." },
         { name: "Mobile Artillery", points: 35, summary: "Range after moving is 120ft." } ],
    B: [ { name: "Reinforced Frame", points: 25, summary: "Usable in melee: Physical (Bludgeoning), 4d6 Heavy." },
         { name: "Side Barrel", points: 50, summary: "A second attack per round, but it must be Light." },
         { name: "Snipe", points: 80, summary: "+1d4 accuracy if you didn't move this turn or last turn." },
         { name: "Bigger Pies", points: 80, summary: "Pies fired through it deal 1 Sure Hit Full Pierce damage to everything else within 5ft of the target." } ] },
  summary: [ "All basic attacks gain Artillery. Only 1 ranged attack with it per round. A basic Heavy attack also makes a Blanketing Light attack on all other enemies within 5ft of the target." ]
});

IT("carpenter-materials", {
  name: "Carpenter Materials", url: "https://lyrian.splatpass.net/items/carpenter-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: null, burden: null,
  woods: [
    { name: "Pine", clim: 300, units: 500, bonus: "None", note: "1 block (1H weapon or cart), 2 (2H weapon)" },
    { name: "Maple", clim: 1050, units: 2000, bonus: "+1" }, { name: "Ash", clim: 4050, units: 8000, bonus: "+1/+1" },
    { name: "Yew", clim: 8050, units: 16000, bonus: "+2/+1" }, { name: "Yggdrasil", clim: 11550, units: 23000, bonus: "+2/+2" } ],
  woodRule: "Better woods: 1 block plus 1 Pine block for 2H weapons. Bonuses go to Focus/Power (crafter picks the extra point).",
  special: [
    { name: "Yugusbane Block", clim: 550, points: 15, summary: "Target can't teleport until the end of its next turn." },
    { name: "Silver Oil", clim: 1050, points: 30, summary: "Disables Fiend regeneration until the start of your next turn." },
    { name: "Electrum Oil", clim: 3050, points: 30, summary: "+2 Electrum Power vs Divines, Summons, Otherworlders." },
    { name: "Mycelite Block", clim: 1550, points: 20, summary: "-1 Burden (min 1)." },
    { name: "Ebony Wood Block", clim: 550, points: "MISSING", summary: "Can't be targeted by magical effects." },
    { name: "Lignum Vitae", clim: 2050, points: 20, summary: "Can't be destroyed by non-Lignum Vitae tools/weapons." },
    { name: "Luxaeterna Oil", clim: 1550, points: 10, summary: "Physical damage becomes Holy." },
    { name: "Corvuskite Oil", clim: 1550, points: 10, summary: "Physical damage becomes Dark." },
    { name: "Arcanium Oil", clim: 1550, points: 10, summary: "Physical damage becomes Arcane." },
    { name: "Vivinthal Oil", clim: 1550, points: 10, summary: "Physical damage becomes Water." },
    { name: "Glacite Oil", clim: 1550, points: 10, summary: "Physical damage becomes Frost." },
    { name: "Salachar Oil", clim: 1550, points: 10, summary: "Physical damage becomes Fire." },
    { name: "Sylphsteel Oil", clim: 1550, points: 10, summary: "Physical damage becomes Wind." },
    { name: "Fulgarite Oil", clim: 1550, points: 10, summary: "Physical damage becomes Lightning." },
    { name: "Ghimslag Oil", clim: 1550, points: 10, summary: "Physical damage becomes Earth." },
    { name: "Nullite Oil", clim: 2050, points: 30, summary: "All attacks gain Shieldbreaker." },
    { name: "Runesteel Oil", clim: 1050, points: 10, summary: "Weapon can channel spells." },
    { name: "Sepsium Oil", clim: 2050, points: 30, summary: "Damaged creatures can't recover HP (except regeneration) until the start of your next turn." } ],
  summary: [ "Woods and oils for carpenters (bows, crossbows, staves, wands, slings, whips, carts, buildings)." ]
});

IT("carpenters-chisel", {
  name: "Carpenter's Chisel", url: "https://lyrian.splatpass.net/items/carpenters-chisel/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Tool",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Blacksmithing" },
  summary: [ "Core crafting tool needed to craft as a carpenter." ]
});

IT("cart", {
  name: "Cart", url: "https://lyrian.splatpass.net/items/cart/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: null,
  cost: 500, burden: 0,
  crafting: { points: 50, discipline: "Carpentry", materials: "1 Wood Block" },
  summary: [ "Storage cart: +2000 units of every material (Maple/Ash/Yew/Yggdrasil construction: +1000/+3000/+6000/+10000 units). Must be pulled by a Large creature or travel speed is halved." ]
});

IT("cartographers-kit", {
  name: "Cartographer's Kit", url: "https://lyrian.splatpass.net/items/cartographers-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 300, burden: 1,
  summary: [ "Make maps to trade, mark things accurately on a map, and perfectly copy a map with Art (Cartography) DC 15." ]
});

IT("cat-elixir", {
  name: "Cat Elixir", url: "https://lyrian.splatpass.net/items/cat-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 200, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "380 Alchemy units, 2x Common Wind" },
  summary: [ "Take 11 true damage; +1 Agility until the end of combat." ]
});

IT("chainsaw-artifice-two-handed-weapon", {
  name: "Chainsaw Artifice (Two-Handed Weapon)", url: "https://lyrian.splatpass.net/items/chainsaw-artifice-two-handed-weapon/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: 3000, burden: 2, activation: "0 AP",
  weapon: { group: "Chainsaw", hands: 2, range: "5ft" },
  fuel: { shell: "S", usage: "1 per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Multi Gear Chaindrive", points: 20, summary: "While activated, Heavy attacks give 2 stacks instead of 1." },
               { name: "Turbo Engine", points: 10, summary: "If your first attack is Heavy, it gives its stack immediately." } ],
          B: [ { name: "Efficient Gathering", points: 25, summary: "+10 to Gather Parts after a combat you used it in." },
               { name: "Redline Engine", points: 80, summary: "Activation starts at +2 stacks, but can't be empowered again until the arc ends." } ] },
  summary: [ "Let it rip: after an attack with it, later attacks with it deal +1 damage. Spend 1 shell to empower it until the end of your turn - the bonus then stacks with each attack." ]
});

IT("cleansing-potion", {
  name: "Cleansing Potion", url: "https://lyrian.splatpass.net/items/cleansing-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 500, burden: 1, activation: "0 AP, 1 Mana",
  crafting: { points: 50, discipline: "Alchemy", materials: "900 Alchemy units, 1x Rare Arcane" },
  summary: [ "Remove one full stack of a single debuff from yourself." ]
});

IT("cloak", {
  name: "Cloak", url: "https://lyrian.splatpass.net/items/cloak/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Armor",
  cost: 500, burden: 0,
  crafting: { points: 50, discipline: "Armorsmithing", materials: "Animal hides" },
  summary: [ "Protects against cold weather; no other benefit on its own. Cloak materials (Armorsmithing Materials) can add Dodge/Block or special pelts." ]
});

IT("corrosive-flask", {
  name: "Corrosive Flask", url: "https://lyrian.splatpass.net/items/corrosive-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 350, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 35, discipline: "Alchemy", materials: "450 Alchemy units, 1x Rare Fire" },
  summary: [ "Throw up to 40ft: 1 damage, and the target's armor value is -3 (min 0) until it spends 2 AP to wipe it off." ]
});

IT("counter-magic-shackles", {
  name: "Counter-Magic Shackles", url: "https://lyrian.splatpass.net/items/counter-magic-shackles/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 4000, burden: 1, activation: "2 AP",
  fuel: { shell: "S", usage: "1 shell per day" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Anti-Teleport", points: 10, summary: "Wearer can't teleport, even for free." } ],
          B: [ { name: "Zero Suppression", points: 50, summary: "Wearer's visible aura reads 0 (harder to find magically)." } ] },
  summary: [ "Restraints that stop the wearer using any magic or mana abilities. Can only be put on unconscious targets." ]
});

var CROSSBOW_MODS = {
  A: [ { name: "Wrist-mounted", points: 35, summary: "One-handed only: range 30ft, always drawn, and you can hold a weapon in that hand." },
       { name: "Windlass Arbalest", points: 35, summary: "Two-handed only: basic attacks gain Full Pierce (and Augment) within 30ft; reload 2 AP or 1 RP after every shot." } ],
  B: [ { name: "Extended Draw", points: 50, summary: "Armor Pierce (and Arbalest Full Pierce) range 60ft. With Wrist-mounted: weapon range 60ft, Armor Pierce stays 30ft." },
       { name: "Repeater", points: 80, summary: "After 3 attacks with it in one turn, make 1 extra Light attack." } ] };

IT("crossbow-one-handed", {
  name: "Crossbow (One-Handed)", url: "https://lyrian.splatpass.net/items/crossbow-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Crossbow", hands: 1, range: "60ft", ranged: true, property: "Armor Pierce" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: CROSSBOW_MODS,
  summary: [ "Armor Pierce: target's Guard counts as 1 lower within 30ft." ]
});

IT("crossbow-two-handed", {
  name: "Crossbow (Two-Handed)", url: "https://lyrian.splatpass.net/items/crossbow-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Crossbow", hands: 2, range: "120ft", ranged: true, property: "Armor Pierce" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: CROSSBOW_MODS,
  summary: [ "Armor Pierce: target's Guard counts as 2 lower within 30ft." ]
});

IT("culinarian-ingredients", {
  name: "Culinarian Ingredients", url: "https://lyrian.splatpass.net/items/culinarian-ingredients/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: null, burden: null,
  stocks: { cost: 250, list: ["Box of Fresh Mushrooms", "Box of Fresh Meat", "Box of Fresh Fish", "Box of Fresh Vegetables", "Bundle of Spicy Peppers", "Bundle of Fresh Cooking Herbs"] },
  special: [ { name: "King Chungus Fungus", clim: 1250, points: 30, summary: "Very rare: +1 Mana Regeneration to a Stock when food made with it is eaten." } ],
  summary: [ "Food Units (u) are the base for cooking (e.g. Flour 100u, Fish 50u, Noodles 100u). Stock boxes/bundles cost 250 each." ]
});

IT("culinary-kit", {
  name: "Culinary Kit", url: "https://lyrian.splatpass.net/items/culinary-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2,
  summary: [ "Knives, pot, pan (drawable as a weapon) and preserved food. Rest Action: cook for the party at 40 food units (20 Clim) per person, giving the food benefit (2 mana) for the rest." ]
});

IT("demonblood-potion", {
  name: "Demonblood Potion", url: "https://lyrian.splatpass.net/items/demonblood-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 500, burden: 1, activation: "0 AP",
  crafting: { points: 50, discipline: "Alchemy", materials: "250 Alchemy units, 1x Rare Arcane, 1x Rare Fire" },
  summary: [ "Ignore the penalties of one injury until the encounter ends." ]
});

IT("diamondize-potion", {
  name: "Diamondize Potion", url: "https://lyrian.splatpass.net/items/diamondize-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 3000, burden: 1, activation: "1 AP",
  crafting: { points: 75, discipline: "Alchemy", materials: "4400 Alchemy units, 1x Supreme Earth, 1x Mystic Arcane, 1x Mystic Water" },
  summary: [ "Become a crystal shell for 10 minutes: no actions, all damage (even true damage) reduced by 200. Usable while downed." ]
});

IT("displacement-potion", {
  name: "Displacement Potion", url: "https://lyrian.splatpass.net/items/displacement-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 300, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Rare Wind" },
  summary: [ "Teleport 40ft in a random direction (1d8: 1 = north, 5 = south, etc.). If the spot is inside a wall/occupied, it fails and is wasted." ]
});

IT("dueling-weapon-one-handed", {
  name: "Dueling Weapon (One-Handed)", url: "https://lyrian.splatpass.net/items/dueling-weapon-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Dueling Weapons", hands: 1, range: "5ft", property: "Dueling" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Spade Lunga", points: 10, summary: "After moving 40ft+ toward an enemy, your next attack with it gets +5ft range." },
               { name: "Ornate Blade", points: 35, summary: "First time each turn you enter the target's threatened zone counts as 1 attack toward Dueling." } ],
          B: [ { name: "Paired Duelers", points: 25, summary: "With two dueling weapons, your off-hand extra attack counts toward the main-hand Dueling bonus." },
               { name: "Passato Sotto", points: 80, summary: "You may make 1 Heavy attack and still get Dueling." },
               { name: "Ferrobri Grip", points: 80, summary: "Replaces Dueling with Aggressive Dueling: after 3 attacks on one enemy in a turn, your next basic attack with it that turn costs 1 AP less (once per round)." } ] },
  summary: [ "Dueling: attack one enemy 3+ times in a turn with it and your next Dodge/Block against that enemy costs 0 RP until your next turn. Lost if you target another enemy that turn or spend AP on a Heavy attack against it." ]
});

IT("eagle-potion", {
  name: "Eagle Potion", url: "https://lyrian.splatpass.net/items/eagle-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 250, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "520 Alchemy units, 1x Common Wind, 1x Common Fire" },
  summary: [ "Assess one enemy's status until the end of combat, like Status Assessment II." ]
});

IT("elemental-grease", {
  name: "Elemental Grease", url: "https://lyrian.splatpass.net/items/elemental-grease/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 301, burden: 1, activation: "1 AP",
  variants: ["Arcane", "Fire", "Water", "Frost", "Lightning", "Wind", "Earth", "Holy", "Dark"],
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Rare herb of the matching element (Arcane for Holy/Dark, Wind for Lightning, Water for Frost)" },
  summary: [ "Coat your weapon: its damage becomes the grease's element until the encounter ends." ]
});

IT("elemental-immunity-elixir", {
  name: "Elemental Immunity Elixir", url: "https://lyrian.splatpass.net/items/elemental-immunity-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 1000, burden: 1, activation: "1 AP",
  variants: ["Arcane", "Fire", "Water", "Frost", "Lightning", "Wind", "Earth", "Holy", "Dark"],
  crafting: { points: 55, discipline: "Alchemy", materials: "1250 Alchemy units, 3x Rare herbs of the matching element (Arcane for Holy/Dark, Wind for Lightning, Water for Frost)" },
  summary: [ "Take 11 true damage, then 10 damage reduction against the elixir's element until the encounter ends." ]
});

IT("elemental-mixture-flask", {
  name: "Elemental Mixture Flask", url: "https://lyrian.splatpass.net/items/elemental-mixture-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 200, burden: 1, activation: "1 AP", range: "40ft",
  variants: ["Arcane", "Fire", "Water", "Frost", "Wind", "Lightning", "Earth", "Holy", "Dark"],
  crafting: { points: 35, discipline: "Alchemy", materials: "0 Alchemy units, 1x Rare herb of the element (Arcane for Holy/Dark, Wind for Lightning, Water for Frost)" },
  summary: [ "Throw up to 40ft: explodes in a 15x15ft area; you may make a Light attack (of the flask's element) against each creature in it." ]
});

IT("elemental-resistance-elixir", {
  name: "Elemental Resistance Elixir", url: "https://lyrian.splatpass.net/items/elemental-resistance-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 300, burden: 1, activation: "1 AP",
  variants: ["Arcane", "Fire", "Water", "Frost", "Lightning", "Wind", "Earth", "Holy", "Dark"],
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Rare herb of the matching element (Arcane for Holy/Dark, Wind for Lightning, Water for Frost)" },
  summary: [ "Take 11 true damage, then 5 damage reduction against the elixir's element until the encounter ends." ]
});

IT("elemental-weapon-artifice", {
  name: "Elemental Weapon Artifice", url: "https://lyrian.splatpass.net/items/elemental-weapon-artifice/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 1000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Early Deactivation", points: 10, summary: "Turn it off for 0 RP." },
               { name: "Quick Activation", points: 20, summary: "Activation 0 AP." } ],
          B: [ { name: "Secondary Element", points: 50, summary: "Two set elements; pick one on activation." },
               { name: "Ranged Mode", points: 50, summary: "Can also attach to ranged weapons." },
               { name: "Elemental Burst", points: 80, summary: "While active, spend the shell and 1 AP for a Heavy attack with the weapon." },
               { name: "Elemental Mastery", points: 80, summary: "On activation, switch to any element you have mastered (base element still allowed)." } ] },
  summary: [ "Melee weapon attachment (4 AP to attach/detach). For 1 minute, the weapon's damage becomes the artifice's fixed element." ]
});

IT("equipment-patching-kit", {
  name: "Equipment Patching Kit", url: "https://lyrian.splatpass.net/items/equipment-patching-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2,
  summary: [ "Rest Action: patch one broken piece of equipment or adventuring essential so it works until the scenario ends (still broken afterwards; can't be patched again until fully repaired)." ]
});

IT("eye-lens", {
  name: "Eye Lens", url: "https://lyrian.splatpass.net/items/eye-lens/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Accessory",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Artificing", note: "Crafted like an artifice weapon; no alloys, universal mods or burden reducers." },
  mods: { A: [ { name: "Zoom In", points: 20, summary: "Works like binoculars." } ],
          B: [ { name: "Focused Lens", points: 25, summary: "After dealing damage with a Mystic Eye ability, make a Light attack against one target you damaged (counts as your dual-wield attack)." },
               { name: "Silver Lens", points: 80, summary: "Mystic Eye attacks count as silver." } ] },
  summary: [ "Cosmetic on its own. Made from Tamahagane/Mithril/Orichalcum/Escudo it gives that material's weapon bonus to Mystic Eye attacks." ]
});

// Facilities: level costs. mult = how many times the Level 1 materials each level needs (checked against the page's printed numbers).

IT("facilities", {
  name: "Facilities", url: "https://lyrian.splatpass.net/items/facilities/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  facilities: [
    { name: "Blacksmithing Workshop", labor: [450, 900, 1350], mult: [1, 2, 3], materials: { Iron: 10800, Lumber: 7200, Alchemy: 3600, "Magical Fuel": 2400 } },
    { name: "Alchemy Atelier", labor: [450, 900, 1350], mult: [1, 2, 3], materials: { Alchemy: 12000, Iron: 6000, "Magical Fuel": 3600, Lumber: 2400 } },
    { name: "Carpentry Workshop", labor: [450, 900, 1350], mult: [1, 2, 3], materials: { Lumber: 15600, Iron: 4800, Alchemy: 2400, Calligraphy: 1200 } },
    { name: "Professional Kitchen", labor: [450, 900, 1350], mult: [1, 2, 3], materials: { Iron: 9600, Food: 6000, Lumber: 4800, Alchemy: 2400, "Magical Fuel": 1200 } },
    { name: "Artificer's Atelier", labor: [450, 900, 1350], mult: [1, 2, 3], materials: { "Magical Fuel": 9600, Alchemy: 7200, Iron: 3600, Calligraphy: 2400, Lumber: 1200 } },
    { name: "Infirmary", labor: [180, 180, 360], mult: [1, 1, 2], materials: { Lumber: 2688, Alchemy: 1920, Iron: 1920, Medical: 1920, Junk: 1152 } },
    { name: "Greenhouse", labor: [150, 150, 150], mult: [1, 1, 1], materials: { Lumber: 3200, Alchemy: 1600, Food: 1200, Iron: 800, "Magical Fuel": 800, Calligraphy: 400 } },
    { name: "Dojo", labor: [150, 150, 300], mult: [1, 1, 2], materials: { Lumber: 4000, Iron: 2000, Calligraphy: 1200, Alchemy: 800 } },
    { name: "Shrine", labor: [570, 570, 1140], mult: [1, 1, 2], materials: { Lumber: 12160, Alchemy: 9120, Calligraphy: 6080, "Magical Fuel": 3040 } },
    { name: "Sauna", labor: [570, 570, 1140], mult: [1, 1, 2], materials: { Lumber: 15200, Alchemy: 7600, "Magical Fuel": 4560, Iron: 3040 } },
    { name: "Appraiser's Workshop", labor: [120, 360, 600], mult: [1, 3, 5], materials: { Alchemy: 2560, Calligraphy: 1600, Artifice: 1280, Iron: 640, Lumber: 320 } },
    { name: "Shop", labor: [150, 150, 300], mult: [1, 1, 2], materials: { Lumber: 2800, Calligraphy: 2400, Iron: 1600, Alchemy: 800, Food: 400 } },
    { name: "Stable", labor: [120, 120, 120], mult: [1, 1, 1], materials: { Lumber: 3840, Iron: 1280, Alchemy: 640, Food: 640 } }
  ],
  // Effects come from the rulebook's Housing > Facilities section (static copy, read 2026-10-22).
  effects: {
    "Crafting Workshop/Atelier": { uses: [2, 3, 4], effect: "+2 / +4 / +6 facility bonus to the matching crafting skill." },
    "Infirmary": { uses: [2, 4, 6], effect: "You can treat your own injury as an errand action." },
    "Dojo": { uses: [1, 1, 1], effect: "Mentor 1 / 2 / 4 extra people at the same time." },
    "Shrine (Meditation Garden)": { uses: [5, 10, 20], effect: "Temporary mana from the Rest action is doubled." },
    "Sauna (Artifice Heatstone Tub)": { uses: [5, 10, 20], effect: "Temporary HP from the Rest action is doubled." },
    "Appraiser's Workshop": { uses: [2, 4, 6], effect: "+10 / +20 / +30 facility bonus to the Appraise interlude action in town; one use appraises a single item for 1 EP." },
    "Shop": { uses: [1, 2, 4], effect: "Use the Open Shop IP action without spending IP." },
    "Stable": { slots: [2, 4, 6], effect: "Slots for animals: 1 large animal per slot, or 2 medium / 4 small of the same kind sharing a slot." },
    "Greenhouse (Serene Garden)": { effect: "MISSING - rulebook lists a Facility Bonus but no per-level details." }
  },
  summary: [ "Labor and material units needed to build each facility level (1/2/3). Level N materials = Level 1 materials x mult[N].",
             "The item page gives no effects; the effects above come from the rulebook's Facilities section." ]
});

IT("falcon-elixir", {
  name: "Falcon Elixir", url: "https://lyrian.splatpass.net/items/falcon-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 1000, burden: 1, activation: "1 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "1250 Alchemy units, 1x Mystic Wind, 1x Rare Arcane" },
  summary: [ "Take 11 true damage; fly at your normal speed for 10 rounds." ]
});

IT("farming-materials", {
  name: "Farming Materials", url: "https://lyrian.splatpass.net/items/farming-materials/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  materials: {
    seeds: [
      { name: "Food Units", cost: 5, difficulty: 5, yield: "150 Food units", growingTime: 1 },
      { name: "Alchemy Units", cost: 5, difficulty: 5, yield: "150 Alchemy units", growingTime: 1 },
      { name: "Alchemy Herbs", cost: 10, difficulty: 5, yield: "1 common herb of the seed's element", growingTime: 1 }
    ],
    specialSeeds: [
      { name: "Moon-Phase Seeds", cost: 25, difficulty: 15, yield: "1 rare herb of the seed's element", growingTime: 1, special: "Left to grow another season, yields a Mystic herb of the same element instead." }
    ],
    fertilizer: [
      { grade: "Average", cost: 250, effect: "+1 crafting die" },
      { grade: "Good", cost: 500, effect: "+2 crafting dice" },
      { grade: "Excellent", cost: 1000, effect: "+3 crafting dice" },
      { grade: "Supreme", cost: 2000, effect: "+4 crafting dice" }
    ]
  },
  summary: [ "Difficulty = crafting points needed to gather the yield when harvesting. Growing time = harvests needed before it yields (1 = ready as soon as you can use Harvest).",
             "Seeds with growing time over 1 still cost their difficulty to tend at each harvest. Special seeds aren't normally sold in stores.",
             "Fertilizer is applied while harvesting; only one at a time." ]
});

IT("fire-robe", {
  name: "Fire Robe", url: "https://lyrian.splatpass.net/items/fire-robe/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "1 AP", slot: "Cloak",
  fuel: { shell: "S", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Activation", points: 20, summary: "Activation 0 AP." } ],
          B: [ { name: "Fireproof", points: 25, summary: "Immune to Burning while active." },
               { name: "Increased Protection", points: 80, summary: "Damage reduction becomes 10." } ] },
  summary: [ "Counts as a cloak (takes the cloak slot). Keeps the wearer cool in extreme heat.",
             "Activated: 5 damage reduction against fire until the encounter ends; the shell is then used up." ]
});

IT("flame-oil-flask", {
  name: "Flame Oil Flask", url: "https://lyrian.splatpass.net/items/flame-oil-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 150, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 35, discipline: "Alchemy", materials: "330 Alchemy units, 1x Common Fire" },
  summary: [ "Creates a 15x15ft area of fire until the start of your next turn. A creature ending its turn in it takes 20 full pierce fire damage." ]
});

IT("flamellon", {
  name: "Flamellon", url: "https://lyrian.splatpass.net/items/flamellon/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "Materials",
  cost: "2 units per 1 Clim",
  summary: [ "General term for items attuned to a Flamelic Polarity. Worth 1 Clim per 2 units (e.g. 500 Undead-polarity corpse dust = 250 Clim)." ]
});

IT("flashbang-flask", {
  name: "Flashbang Flask", url: "https://lyrian.splatpass.net/items/flashbang-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 250, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 35, discipline: "Alchemy", materials: "420 Alchemy units, 3x Common Wind" },
  summary: [ "Bursts in a 25x25ft area; every target in it becomes Dazed." ]
});

IT("food-bag", {
  name: "Food Bag", url: "https://lyrian.splatpass.net/items/food-bag/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Materials",
  cost: 500, burden: 1,
  crafting: { points: 50, discipline: "Armorsmithing", materials: "Direhide, Primehide, Dragonscale or Astrahide" },
  mods: { B: [ { name: "One Item Container", points: 50, summary: "Doubles the extra capacity, but only for one Food material type." } ] },
  summary: [ "Carry an extra 2000 units of each Food material. 0 burden while empty.",
             "Crafted from Direhide / Primehide / Dragonscale / Astrahide it holds an extra 1000 / 3000 / 6000 / 10000 units of each Food material (page gives both the 2000 base and this table)." ]
});

IT("frying-pan", {
  name: "Frying Pan", url: "https://lyrian.splatpass.net/items/frying-pan/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Tool",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Blacksmithing" },
  summary: [ "Core crafting tool: lets you craft as a Culinarian." ]
});

IT("fuel-cartridge-pack", {
  name: "Fuel Cartridge Pack", url: "https://lyrian.splatpass.net/items/fuel-cartridge-pack/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Storage",
  cost: 50, burden: 1,
  summary: [ "Holds up to 20 burden of Fuel Shells; stored shells count as 0 burden. Only one can be equipped at a time." ]
});

IT("gauntlets-one-handed", {
  name: "Gauntlets (One-Handed)", url: "https://lyrian.splatpass.net/items/gauntlets-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Gauntlets", hands: 1, range: "5ft", property: "Unarmed Combat" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Simple Design", points: 10, summary: "You count as proficient with it even if you normally wouldn't be." },
               { name: "Red Gauntlets", points: 20, summary: "Each AP spent on basic movement gives your next attack with it +2 damage (max +4)." },
               { name: "Grip Design", points: 20, summary: "You can wield a Two-Handed weapon with this hand; you can't do free-hand actions (like grabbing a potion) with it." },
               { name: "Martial Mastery", points: 35, summary: "Attacks may deal elemental damage based on a mastered class: Bajiquan Fire, Monk Water, Sky Talon Wind, Still Stone Earth, Transcendent Lightning Lightning, Five Harmonies Holy, Black Oath Dark." } ],
          B: [ { name: "Brown Gauntlets", points: 25, summary: "+4 Shield bonus to Block while worn; stacks with Still Stone Style's Shielding Fist but not other shields." },
               { name: "Wrist Claw", points: 50, summary: "You can hold an item in that hand as if it were empty." },
               { name: "Katar", points: 50, summary: "Gains Nimble: after a Light attack on your turn you may move 5ft; only provokes if it takes you out of the target's melee range." },
               { name: "Black Gauntlets", points: 80, summary: "When dealing damage with it, take true damage equal to a die's size to maximize that die." } ] },
  summary: [ "Unarmed Combat: attacks count as unarmed for Unarmed Strike. Proficient automatically if proficient with unarmed attacks, otherwise never proficient." ]
});

IT("ghost-elixir", {
  name: "Ghost Elixir", url: "https://lyrian.splatpass.net/items/ghost-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 500, burden: 1, activation: "0 AP", range: "40ft",
  crafting: { points: 50, discipline: "Alchemy", materials: "300 Alchemy units, 1x Rare Arcane, 1x Rare Wind" },
  summary: [ "Drink: gain Phase Through for 1 minute (move through solid objects and creatures).",
             "Throw (40ft) at a creature with Phase Through and/or Incorporeal: it loses those traits for 1 minute." ]
});

IT("ghostblade", {
  name: "Ghostblade", url: "https://lyrian.splatpass.net/items/ghostblade/",
  checked: "2026-10-21", version: "0.13.2", category: "Divine Arms", tag: "Main",
  range: "Melee Weapon Range", wielder: "Unknown",
  levels: {
    1: "First 20ft of movement each turn you are Ethereal: no attacks of opportunity, can move through solid objects.",
    2: "Once per arc, may use Soul Pierce."
  },
  abilities: {
    "Soul Pierce": { cost: "2 AP", keywords: ["Sure Hit", "Full Pierce"], range: "Melee Weapon Range", requirement: "None",
      summary: "Precise attack dealing maximum Heavy damage and reducing the target's mana by 5; if it is then at 0 or less mana, it takes another maximum Heavy damage." }
  },
  summary: [ "Divine Arm that mimics ghostly movement and attacks." ]
});

IT("giant-dragonfly", {
  name: "Giant Dragonfly", url: "https://lyrian.splatpass.net/items/giant-dragonfly/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 1500, burden: 0,
  mount: { size: "Small", hp: 18, Focus: 3, Power: 2, Agility: 6, Toughness: 1, speed: "30ft", lineMovement: "MISSING (not listed)" },
  summary: [ "Tiny Flying Mount: can fly; only 5ft speed moving on the ground. The rider can use Cavalier's Rider & Mount As One to redirect attacks away from it while flying, but damage the rider takes then makes the mount lose altitude as if it took the damage.",
             "Spectral Trample: trample works on any size, but gains no Sure Hit and doesn't displace or knock Prone; the trample movement isn't cancelled if the target dodges or blocks." ]
});

IT("giant-scissors-two-handed", {
  name: "Giant Scissors (Two-Handed)", url: "https://lyrian.splatpass.net/items/giant-scissors-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 1250, burden: 2,
  weapon: { group: "Giant Scissors", hands: 2, range: "5ft", property: "Shearing" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Elegant Executioner", points: 35, summary: "Vivisect costs 1 AP less." },
               { name: "Diamond Tip", points: 35, summary: "Shearing's +1 damage applies regardless of armor." } ],
          B: [ { name: "Executioner's Blade", points: 50, summary: "Heavy basic attacks also hit an adjacent target in range with a Light attack, once per round." },
               { name: "Separation", points: 80, summary: "0 AP (Quick): split into two pieces to dual wield (again to rejoin). Passive becomes Shearing Flurry: +1 accuracy against unarmored targets." } ] },
  summary: [ "Shearing: +1 damage against unarmored targets.", "Forager tool: with proficiency it's a 2h weapon that also works as a foraging tool." ]
});

IT("gourmet-cooking-stock", {
  name: "Gourmet Cooking Stock", url: "https://lyrian.splatpass.net/items/gourmet-cooking-stock/",
  checked: "2026-10-21", version: "0.13.2", category: "Crafting", tag: "MISSING (not stated)",
  cost: 500,
  crafting: { points: 35, discipline: "Culinary", materials: "500u of any mix of food; makes 10 (usually sold in packs of 10)" },
  flavors: { Mushroom: "+Focus", Meaty: "+Power", Fish: "+Toughness", Vegetable: "+Agility", Spicy: "+Crafting", Herbal: "+Gathering" },
  summary: [ "Add to meals cooked from fresh food with a Culinary Kit or Kitchen to make gourmet meals with non-stacking buffs (+1 mana, plus the flavor's attribute).",
             "One stock per meal (or per serving for big meals); not enough stock = no effect. Culinarians can make multi-flavor stocks.",
             "Example on page: Meaty Mushroom stock gives +1 Focus and +1 Power for 24 hours." ]
});

IT("grapeshot-flask", {
  name: "Grapeshot Flask", url: "https://lyrian.splatpass.net/items/grapeshot-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 100, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 35, discipline: "Alchemy", materials: "180 Alchemy units, 1x Common Fire" },
  summary: [ "Bursts in a 15x15ft area: every target takes 5 full pierce physical damage." ]
});

IT("grappling-hook-artifice", {
  name: "Grappling Hook Artifice", url: "https://lyrian.splatpass.net/items/grappling-hook-artifice/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 2000, burden: 1, activation: "1 AP", range: "40ft rope",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Drive By Model", points: 10, summary: "Can't carry allies; instead you may attack at any point while reeling in (if you have actions). This movement doesn't provoke." },
               { name: "Scorpion Tip", points: 20, summary: "Range 20ft. The hook can make a Light attack for 1 full pierce damage; on hit pulls the target up to 20ft toward you." },
               { name: "Swing Engine", points: 35, summary: "Swing from the pin instead of being pulled straight; rope +20ft; pin auto-detaches and reels in at your destination." } ],
          B: [ { name: "Emergency Escape Reel", points: 25, summary: "Can also fire it for 1 RP." },
               { name: "Heavy Tow Line", points: 25, summary: "Carry one more ally." },
               { name: "Belt Attachment", points: 50, summary: "Belt-mounted with an arm switch: both hands stay free." },
               { name: "Safety Hook", points: 80, summary: "Movement with it (you and allies) counts as a sidestep." } ] },
  summary: [ "Fires a pin on a 40ft rope that sticks to any non-living surface and holds up to 4 people (GM may call for an accuracy check on hard targets).",
             "Once attached, reel yourself to it for 0 AP. Allies within 5ft can grab on for 0 RP (up to 3)." ]
});

IT("greater-healing-potion", {
  name: "Greater Healing Potion", url: "https://lyrian.splatpass.net/items/greater-healing-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 600, burden: 1, activation: "0 AP, 4 Mana",
  crafting: { points: 51, discipline: "Alchemy", materials: "970 Alchemy units, 1x Rare Water, 3x Common Earth" },
  summary: [ "Heal 30 HP." ]
});

IT("greater-shielding-potion", {
  name: "Greater Shielding Potion", url: "https://lyrian.splatpass.net/items/greater-shielding-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 1000, burden: 1, activation: "0 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "1800 Alchemy units, 1x Rare Earth, 1x Rare Arcane" },
  summary: [ "Gain 30 temporary HP until the start of your next turn." ]
});

IT("greater-speed-potion", {
  name: "Greater Speed Potion", url: "https://lyrian.splatpass.net/items/greater-speed-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 750, burden: 1, activation: "0 AP",
  crafting: { points: 53, discipline: "Alchemy", materials: "1150 Alchemy units, 1x Mystic Wind" },
  summary: [ "+50ft movement speed until the end of your turn." ]
});

IT("growth-potion", {
  name: "Growth Potion", url: "https://lyrian.splatpass.net/items/growth-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 1100, burden: 1, activation: "MISSING (not listed)",
  crafting: { points: 80, discipline: "Alchemy", materials: "2000 Alchemy units, 1x Mystic Arcane" },
  summary: [ "Given to animals, makes them reach maturity much faster. See the rulebook's animal raising section." ]
});

IT("healing-potion", {
  name: "Healing Potion", url: "https://lyrian.splatpass.net/items/healing-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 150, burden: 1, activation: "0 AP, 2 Mana",
  crafting: { points: 35, discipline: "Alchemy", materials: "450 Alchemy units (no herbs)" },
  summary: [ "Heal 15 HP." ]
});

IT("heavy-blade-two-handed", {
  name: "Heavy Blade (Two-Handed)", url: "https://lyrian.splatpass.net/items/heavy-blade-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Heavy Blades", hands: 2, range: "5ft", property: "Overpower" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Overwhelming Edge", points: 20, summary: "The target can't disarm or parry you." },
               { name: "Wide Blade", points: 35, summary: "Two-handed and not attacking with it on your turn: give yourself or an adjacent ally low cover vs ranged attacks for 0 RP until your next turn, once per round." } ],
          B: [ { name: "Quakemaker", points: 25, summary: "Crits knock the target Prone, hit or not." },
               { name: "Gutsy Blade", points: 50, summary: "Crit threshold lowered by 5, but crits no longer maximize dice or grant full pierce." },
               { name: "Executioner's Blade", points: 50, summary: "Heavy basic attacks also hit an adjacent target in range with a Light attack, once per round." },
               { name: "Unreasonable Mass", points: 80, summary: "Heavy attacks get +1 damage die (5d6 → 6d6); all attacks -1 accuracy." } ] },
  summary: [ "Overpower: crits deal extra damage (1d4 on Light/Precise, 1d12 on Heavy). The extra isn't maximized and still applies if the crit is blocked." ]
});

IT("hori", {
  name: "Hori", url: "https://lyrian.splatpass.net/items/hori/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Small Weapons (counts as small weapon with proficiency)", hands: 1, range: "5ft", property: "Hidden Weapon" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Aerodynamic Design", points: 10, summary: "No Boomerang/Return effects. For 1 RP throw it as a Light ranged attack; on damage the target is Slowed until the end of its next turn." },
               { name: "Compact Ergonomics", points: 20, summary: "Other hand free: movement actions that cost RP get +5ft." },
               { name: "Parrying Dagger", points: 20, summary: "Don't attack with it on your turn: +4 to Block until your next turn. +4 damage when using Parry." },
               { name: "Flat Pommel", points: 35, summary: "Other hand free: melee Heavy attack damage becomes 5d6 (push wording on page is garbled)." } ],
          B: [ { name: "Poisoner Weapon", points: 25, summary: "Applying poison to it costs 1 less AP (min 0)." },
               { name: "Butterfly Knife", points: 50, summary: "First Light attack each round with it gains Trick Attack; it can't make Heavy attacks." },
               { name: "Ring Pommel", points: 50, summary: "If the target defends against your Heavy attack, you don't provoke attacks of opportunity from it until your next turn." } ] },
  summary: [ "Forager's tool: with proficiency it counts as a small weapon and a foraging tool.",
             "Hidden Weapon: draw for 0 AP; once per combat your next basic Light/Heavy attack with it that round gains Trick Attack." ]
});

IT("horse", {
  name: "Horse", url: "https://lyrian.splatpass.net/items/horse/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 2000, burden: 0,
  mount: { size: "Large", hp: 30, Focus: 3, Power: 3, Agility: 3, Toughness: 3, speed: "50ft", lineMovement: true },
  summary: [ "Combat-trained horse. Line Movement: may only move in a straight line when taking a movement action." ]
});

IT("horse-elixir", {
  name: "Horse Elixir", url: "https://lyrian.splatpass.net/items/horse-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 600, burden: 1, activation: "1 AP",
  crafting: { points: 51, discipline: "Alchemy", materials: "750 Alchemy units, 500u Carrots, 1x Rare Wind" },
  summary: [ "Take 11 true damage; until combat ends your speed becomes 50ft and you gain Line Movement." ]
});

IT("ice-flask", {
  name: "Ice Flask", url: "https://lyrian.splatpass.net/items/ice-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 450, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 45, discipline: "Alchemy", materials: "300 Alchemy units, 1x Rare Water, 1x Rare Wind" },
  summary: [ "Explodes in a 5ft radius applying frost: the target and everyone within 5ft are Slowed until the start of your next turn." ]
});

IT("immunity-elixir", {
  name: "Immunity Elixir", url: "https://lyrian.splatpass.net/items/immunity-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 1000, burden: 1, activation: "1 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "1400 Alchemy units, 1x Mystic Earth, 1x Rare Water" },
  summary: [ "Take 11 true damage. The next 3 negative effects that would affect you are negated (not ones from Secret Art or Climax Art level effects). Lasts until the encounter ends." ]
});

IT("inky-oil-flask", {
  name: "Inky Oil Flask", url: "https://lyrian.splatpass.net/items/inky-oil-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 500, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 50, discipline: "Alchemy", materials: "1000 Alchemy units, 1x Rare Water" },
  summary: [ "Target takes 1 damage; if damaged, it is Blinded 2 until it spends 2 AP to wipe it off." ]
});

IT("isona-poison", {
  name: "Isona Poison", url: "https://lyrian.splatpass.net/items/isona-poison/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 700, burden: 1, activation: "1 (unit not stated on page)",
  crafting: { points: 52, discipline: "Alchemy", materials: "1430 Alchemy units, 100u silver, 1x Common Fire, 1x Common Water, 1x Common Earth, 1x Common Wind, 1x Common Arcane" },
  summary: [ "Contact poison applied to a weapon; lasts 2 minutes (12 rounds).", "When an attack with it damages a fiend, the target counts as silvered until the start of your next turn." ]
});

var KATANA_MODS = {
  A: [ { name: "Mastercrafted Saya", points: 20, summary: "Your first single-target attack with it each combat also draws it; that attack's crit threshold is lowered by 1." },
       { name: "Sori Curve", points: 20, summary: "On an accuracy roll of 1 you may reroll. Targets may make an opportunity attack against you (even with ranged weapons) that doesn't trigger other opportunity attacks." },
       { name: "Beneri Special", points: 35, summary: "+1/+1 (doesn't stack with material bonuses). On an accuracy roll of 1 the weapon shatters, broken beyond repair." } ],
  B: [ { name: "Equilibrium Forging", points: 25, summary: "Damage isn't rolled: fixed 6 on Light, 15 one-handed, 19 two-handed. Crits still deal maximum." },
       { name: "Hamon Line", points: 50, summary: "Keen becomes Keen II: crit threshold lowered by 2." },
       { name: "Swallow's Edge", points: 80, summary: "Crit threshold drops by 1 for each attack with a Swallow's Edge weapon this turn; resets on a crit. With it on both hands, applies to both." } ]
};

IT("katana-one-handed", {
  name: "Katana (One-Handed)", url: "https://lyrian.splatpass.net/items/katana-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Katanas", hands: 1, range: "5ft", property: "Keen" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: KATANA_MODS,
  summary: [ "Keen: critical hit on 19 or 20." ]
});

IT("katana-two-handed", {
  name: "Katana (Two-Handed)", url: "https://lyrian.splatpass.net/items/katana-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Katanas", hands: 2, range: "5ft", property: "Keen" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: KATANA_MODS,
  summary: [ "Keen: critical hit on 19 or 20." ]
});

IT("lance-one-handed", {
  name: "Lance (One-Handed)", url: "https://lyrian.splatpass.net/items/lance-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 750, burden: 1,
  weapon: { group: "Polearms (counts as polearm, all its properties)", hands: 1, range: "10ft", property: "Charger Weapon", specialized: true },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Crown Tip", points: 10, summary: "If your first basic attack each round comes right after moving 50ft+, it dismounts mounted targets it damages." },
               { name: "Demi-Lance", points: 20, summary: "Usable dismounted as a normal spear, but loses the max-damage bonus unless mounted." } ],
          B: [ { name: "Justice Lance", points: 50, summary: "While in your burden your speed is capped at 25ft; the weapon gains +5ft range and a 15ft threaten range." },
               { name: "Shield Lance", points: 80, summary: "Spend 3+ AP moving in a turn: your next basic defense before your next turn costs 1 less RP." } ] },
  summary: [ "Charger Weapon: only usable while mounted. First attack with it after moving 20ft+ in a turn deals maximum damage." ]
});

IT("lesser-diamondize-potion", {
  name: "Lesser Diamondize Potion", url: "https://lyrian.splatpass.net/items/lesser-diamondize-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 1500, burden: 1, activation: "3 AP",
  crafting: { points: 60, discipline: "Alchemy", materials: "2100 Alchemy units, 1x Mystic Earth, 1x Mystic Arcane" },
  summary: [ "Encased in crystal until the start of your next turn: you can't act, but all damage you take (including true damage) is reduced by 200." ]
});

IT("light-sword-one-handed", {
  name: "Light Sword (One-Handed)", url: "https://lyrian.splatpass.net/items/light-sword-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Light Swords", hands: 1, range: "5ft", property: "Nimble" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Single Edge", points: 20, summary: "Nimble becomes Nimble Rotation: after attacking you can't move away, but can sidestep to any square adjacent to the enemy (most direct path). Not if the attack drops the target to 0 HP." },
               { name: "Heroic Emblem", points: 20, summary: "+1 Power or +1 Focus bonus (from hype); the weapon can't get base material bonuses." },
               { name: "Fullering Groves", points: 35, summary: "Nimble II: move 10ft after a Light attack (same provoke rule)." } ],
          B: [ { name: "Extended Quillons", points: 25, summary: "+1 Guard when out of RP." },
               { name: "Weighted Edge", points: 25, summary: "Nimble (or its variant) also works after Heavy or Precise attacks." },
               { name: "Gladius Edge", points: 50, summary: "If a crit hits you and you don't defend, make a 0 RP opportunity attack before it lands (1 RP to make it Heavy)." },
               { name: "Axebreaker", points: 80, summary: "+2 Axebreaker Power bonus against enemies wielding axes." } ] },
  summary: [ "Nimble: after a Light attack on your turn you may move 5ft; only provokes if it takes you out of melee range." ]
});

IT("lightning-rod", {
  name: "Lightning Rod", url: "https://lyrian.splatpass.net/items/lightning-rod/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "2 AP", range: "25x25ft zone centered on the rod",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Telescopic Pole", points: 20, summary: "Zone becomes 30x30ft." },
               { name: "Quick Activation", points: 35, summary: "Activation costs 1 less." } ],
          B: [ { name: "Shockproof", points: 25, summary: "Everyone in the zone is also immune to Static." },
               { name: "Increased Protection", points: 80, summary: "Damage reduction becomes 10." } ] },
  summary: [ "Plant and activate: everyone in a 25x25ft zone gets 5 damage reduction against Lightning until the encounter ends." ]
});

IT("lizard-elixir", {
  name: "Lizard Elixir", url: "https://lyrian.splatpass.net/items/lizard-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 1000, burden: 1, activation: "1 AP, 3 Mana",
  crafting: { points: 55, discipline: "Alchemy", materials: "1400 Alchemy units, 1x Mystic Water, 1x Rare Earth" },
  summary: [ "Drink within 5 minutes of losing a limb while holding the limb in place: it re-attaches. You are Stunned for a minute while it finishes." ]
});

IT("locking-seal", {
  name: "Locking Seal", url: "https://lyrian.splatpass.net/items/locking-seal/",
  checked: "2026-10-21", version: "0.13.2", category: "Talisman", tag: "Talisman",
  cost: 500, burden: 1, activation: "4 AP",
  summary: [ "Placed on a door, chest or similar, nobody can open it. The placer can remove it safely; for anyone else it acts as a tier 1 bounded field.",
             "Can't be destroyed by normal physical force, but breaks if the object it's on is damaged enough." ]
});

IT("long-distance-communications-array", {
  name: "Long Distance Communications Array", url: "https://lyrian.splatpass.net/items/long-distance-communications-array/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 200000, burden: 5, activation: "4 AP", range: "Unlimited",
  fuel: { shell: "L", usage: "1 shell per hour" },
  crafting: { points: "No (as written on page)", discipline: "Artificing" },
  summary: [ "Boxes, microphones and earplugs. Link to another device by entering its unique code; anything spoken is broadcast to every linked artifice, unlimited range." ]
});

IT("longsword-one-handed-two-handed", {
  name: "Longsword (One-Handed/Two-Handed)", url: "https://lyrian.splatpass.net/items/longsword-one-handed-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 750, burden: 1,
  weapon: { group: "Longswords", hands: "1 or 2", range: "5ft", property: "Versatile" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Catch Pommel", points: 10, summary: "One-handed: once per round extend an attack's range by 5ft." },
               { name: "War Sword", points: 20, summary: "First basic attack after moving 20ft+ maximizes one damage die of your choice." },
               { name: "Bastard Sword", points: 35, summary: "+1 Armorbreaker Power bonus against targets in Heavy armor or higher." } ],
          B: [ { name: "Extended Quillons", points: 25, summary: "+1 Guard when out of RP." },
               { name: "Heavy Crossguard", points: 25, summary: "Keep the Block bonus two-handed; Block +4 more when used one-handed with nothing in the other hand." },
               { name: "Lange Messer", points: 50, summary: "+1 Guard, but +1 burden." },
               { name: "Axebreaker", points: 80, summary: "+2 Axebreaker Power bonus against targets wielding axes." } ] },
  summary: [ "Versatile: at the start of your turn choose one- or two-handed. One-handed with no other weapon or shield, it also counts as a shield. Two-handed, crits deal +1d4 (not maximized, kept even if the crit is blocked)." ]
});

IT("mages-blood", {
  name: "Mage's Blood", url: "https://lyrian.splatpass.net/items/mages-blood/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 600, burden: 1, activation: "1 AP",
  crafting: { points: 51, discipline: "Alchemy", materials: "1800 Alchemy units, 3x vial of Heartwood Poison Water" },
  summary: [ "Contact poison on a weapon; lasts 1 hit or 1 minute (6 rounds).",
             "When it damages an enemy, the enemy gets Circuit Crash: the next time it uses mana before the encounter ends, it takes 4d6+8 damage.", "Credited: discovered by Beetle Swallower." ]
});

IT("mana-vision-goggles", {
  name: "Mana Vision Goggles", url: "https://lyrian.splatpass.net/items/mana-vision-goggles/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "MISSING (not listed; active while worn)",
  fuel: { shell: "S", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Mana Sight", points: 20, summary: "Looking at a target within 30ft reveals its mana percentage." } ],
          B: [ { name: "Quick Removal", points: 50, summary: "Remove for 3 AP instead of 1 minute." },
               { name: "Decipher Magic", points: 80, summary: "Try to understand a magic effect you see as Decipher Magic with +15, regardless of Reason or Magic skill." } ] },
  summary: [ "See mana fluctuations: reveals magic and mana-based effects (traps, barriers) and detects creatures with mana not behind total cover (doesn't grant vision for attacks). Can't detect living creatures without mana.",
             "Removal takes 1 minute; removing faster blinds you for a minute." ]
});

IT("marlone-jelly-poison", {
  name: "Marlone Jelly Poison", url: "https://lyrian.splatpass.net/items/marlone-jelly-poison/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 400, burden: 1, activation: "1 AP",
  crafting: { points: 50, discipline: "Alchemy", materials: "700 Alchemy units, 1x Rare Water" },
  summary: [ "Contact poison on a weapon; lasts 1 hit or 1 minute (6 rounds).",
             "When it damages a grunt-type enemy, the target is Stunned until the end of its next turn. Once per enemy per combat." ]
});

IT("medical-kit", {
  name: "Medical Kit", url: "https://lyrian.splatpass.net/items/medical-kit/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2, activation: "Rest action",
  summary: [ "Rest action: heal yourself or an ally for their Toughness + 5. A character can benefit only once per rest." ]
});

IT("medium-shell", {
  name: "Medium Shell", url: "https://lyrian.splatpass.net/items/medium-shell/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Fuel",
  cost: 200, burden: 2, shellSize: "M",
  summary: [ "Medium cylinder of magical fuel for artifices. Most weapon artifices eject spent shells automatically." ]
});

IT("memory-bubble", {
  name: "Memory Bubble", url: "https://lyrian.splatpass.net/items/memory-bubble/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: "2000 / 4000 / 10000 (1 / 2 / 5 minute versions)", burden: 1,
  fuel: { shell: "S", usage: "1 shell per use, including recording" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Infinite Replays", points: 35, summary: "Viewing costs 1 mana instead of a shell." } ],
          B: [ { name: "Redacted", points: 25, summary: "Mute or censor parts while recording; an Artifice check DC 20 reveals the tampering." } ] },
  summary: [ "Records 1, 2 or 5 minutes of memory (by version). Once recorded, nothing more can be added. Others can view it from the recorder's point of view." ]
});

IT("military-ration", {
  name: "Military Ration", url: "https://lyrian.splatpass.net/items/military-ration/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Basic",
  cost: 40, burden: "MISSING (not listed)", activation: "Rest: eat for food effects (page says 'for 2 mana'); in an encounter: Setup action, 8 AP",
  summary: [ "Gives the effects of food for a rest without cooking." ]
});

IT("mimic-potion", {
  name: "Mimic Potion", url: "https://lyrian.splatpass.net/items/mimic-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 200, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "360 Alchemy units, 1x Common Arcane, 1x Common Earth" },
  summary: [ "You look like an average-sized chest for up to a minute, or until someone tries to interact with you." ]
});

IT("mining-bag", {
  name: "Mining Bag", url: "https://lyrian.splatpass.net/items/mining-bag/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Materials",
  cost: 500, burden: 1,
  crafting: { points: 50, discipline: "Armorsmithing", materials: "Direhide, Primehide, Dragonscale or Astrahide" },
  mods: { B: [ { name: "One Item Container", points: 50, summary: "Doubles the extra capacity, but only for one material type." } ] },
  summary: [ "Carry an extra 2000 units of each mining material. 0 burden while empty.",
             "Direhide / Primehide / Dragonscale / Astrahide versions hold an extra 1000 / 3000 / 6000 / 10000 units per mining material (page gives both the 2000 base and this table)." ]
});

IT("minor-item", {
  name: "Minor Item", url: "https://lyrian.splatpass.net/items/minor-item/",
  checked: "2026-10-21", version: "0.13.2", category: "Adventuring Essentials", tag: "Basic",
  cost: 25, burden: 1,
  summary: [ "Catch-all for small adventuring or daily-life items not listed separately (GM's call): shovel, rope, ink, bedroll, sack, piton, etc." ]
});

IT("mule", {
  name: "Mule", url: "https://lyrian.splatpass.net/items/mule/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 1000, burden: 0,
  mount: { size: "Large", hp: 20, Focus: 3, Power: 3, Agility: 3, Toughness: 3, speed: "20ft", lineMovement: false },
  summary: [ "Can't be used as a mount in combat (Trample and similar don't work on it).", "Stores an extra 1000 units of every material." ]
});

IT("musket-two-handed", {
  name: "Musket (Two-Handed)", url: "https://lyrian.splatpass.net/items/musket-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Muskets", hands: 2, range: "120ft", ranged: true, property: "Superior Armor Pierce" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Range Finder", points: 20, summary: "No extra range; through the lens +10 Perception against targets over 60ft away and you can judge their distance." },
               { name: "Bayonet", points: 35, summary: "Melee attacks deal Physical (Piercing) damage without provoking; they don't use two-handed melee damage." } ],
          B: [ { name: "Long Barrel", points: 25, summary: "Range 240ft, but no Armor Pierce beyond 120ft." } ] },
  summary: [ "Superior Armor Pierce: treat the enemy's Guard as 1 lower." ]
});

IT("netting-flask", {
  name: "Netting Flask", url: "https://lyrian.splatpass.net/items/netting-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 1200, burden: 1, activation: "1 AP", range: "40ft",
  crafting: { points: 57, discipline: "Alchemy", materials: "1950 Alchemy units, 1x Mystic Wind, 1x Rare Earth" },
  summary: [ "Bursts in a 5ft radius around the target: it and everyone within 5ft are Rooted until the start of your next turn or until they spend 2 AP to remove the net." ]
});

IT("night-vision-goggles", {
  name: "Night Vision Goggles", url: "https://rpg.angelssword.com/game/0.13.2/items/night-vision-goggles",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 2000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per day" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Anti-Flash Shutter", points: 20, summary: "While worn and active, sudden flashes of light can't daze or blind you." },
               { name: "Increased Range", points: 20, summary: "+60ft range." } ],
          B: [ { name: "Darkvision Goggles", points: 50, summary: "Darkvision instead of night vision." },
               { name: "Thermal Fusion Sight", points: 80, summary: "Thermal vision to 120ft. Can't see things hidden by magic, and can't tell temperatures apart once they're below freezing." } ] },
  summary: [ "Night vision up to 120ft; also protects your eyes from weather and impacts." ]
});

IT("northi-lantern", {
  name: "Northi Lantern", url: "https://lyrian.splatpass.net/items/northi-lantern/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 500, burden: 1, activation: "0 AP", range: "30ft light",
  fuel: { shell: "S", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Light Control", points: 10, summary: "Set the light distance, up to its max." },
               { name: "Directional Light", points: 20, summary: "Light shines forward instead of all around." } ],
          B: [ { name: "Lumen Sphere", points: 25, summary: "Light reaches 60ft." },
               { name: "Bag Clip", points: 25, summary: "Clip it to a belt or bag; no need to hold it." } ] },
  summary: [ "Switch-operated magical lantern giving clear white light out to 30ft." ]
});

IT("parrot-elixir", {
  name: "Parrot Elixir", url: "https://lyrian.splatpass.net/items/parrot-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 500, burden: 1, activation: "0 AP",
  crafting: { points: 50, discipline: "Alchemy", materials: "560 Alchemy units, 1x Rare Wind, 3x Common Arcane" },
  summary: [ "You look like a random average person of your gender and race for 24 hours; drinking another before it ends adds 24 hours." ]
});

IT("pegasus", {
  name: "Pegasus", url: "https://lyrian.splatpass.net/items/pegasus/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 5000, burden: 0,
  mount: { size: "Large", hp: 45, Focus: 4, Power: 4, Agility: 5, Toughness: 4, speed: "60ft (20ft on ground only)", lineMovement: "While flying" },
  summary: [ "Flying Mount: can fly, but only in straight lines while flying. Ground-only movement is 20ft with no straight-line limit.",
             "In Flight Vulnerability: taking damage while flying drops it 20ft; reaching the ground Roots it and it can't fly until the end of your next turn. No altitude loss if the attack came from another flying creature." ]
});

IT("personal-camouflage-field", {
  name: "Personal Camouflage Field", url: "https://lyrian.splatpass.net/items/personal-camouflage-field/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per minute" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Vanishing Act", points: 20, summary: "Activating it in combat lets you Hide immediately for 2 AP less (min 0)." },
               { name: "Group Veil", points: 35, summary: "While stationary, extends to all Medium or smaller creatures within 5ft." } ],
          B: [ { name: "Decoy", points: 50, summary: "The first attack against you while stealthed with it active is automatically dodged." },
               { name: "Thermal Mask", points: 80, summary: "Thermal vision and heat-based detection don't automatically detect you." } ] },
  summary: [ "Blends you into surroundings: hide without cover; +10 Stealth vs creatures that were unaware of you (+5 in combat or vs active searchers). Attacking turns it off until the start of your next turn." ]
});

IT("photon-shield", {
  name: "Photon Shield", url: "https://rpg.angelssword.com/game/0.13.2/items/photon-shield",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "1 AP",
  armor: { type: "Shield (projected)", block: "+4 (Shield bonus)", note: "Works as a normal shield while active; leaves your hand free." },
  fuel: { shell: "S", usage: "1 shell per encounter" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Activation", points: 20, summary: "Activation costs 0 AP." },
               { name: "Photon Dome", points: 20, summary: "Instead, a 5ft dome around you gives allies the shield effect against ranged attacks only. Doesn't stack with equipped shields or other Photon mods. You can still use the normal effect." },
               { name: "Photon Wall", points: 20, summary: "Instead, a stationary one-way high-cover wall of light in front of you (20 HP); only ranged attacks from your side pass through. Moving destroys it; when it's destroyed the shell is used up. You can still use the normal effect." } ],
          B: [ { name: "Photon Greatshield", points: 25, summary: "Burden becomes 2 and it acts as a Greatshield (with the Greatshield Evasion penalty). Turning it off for 0 RP ejects the shell and ends it." } ] },
  summary: [ "A bracelet that projects a shield of light on your arm: it works as a shield but leaves the hand free for a weapon. Doesn't stack with other shields; counts as a shield for requirements while active." ]
});

var PICK_SICKLE_MODS = {
  A: [ { name: "Reinforced Langet", points: 10, summary: "Can't be disarmed." },
       { name: "Bearded Extension", points: 20, summary: "Wild Swing ignores Guard, but deals only 2 (Light) / 4 (Heavy)." },
       { name: "Rotational Stability", points: 35, summary: "If a target moves away from you during your attack with it, and your next attack this turn is a throw of it at that target, the throw gains Lock On." } ],
  B: [ { name: "Boomerang Wing", points: 25, summary: "After a throwing attack with it, return it to your hand for 0 RP." },
       { name: "Lancebreaker", points: 80, summary: "+2 Lancebreaker Power bonus against enemies wielding polearms or lances." } ]
};

IT("pickaxe-one-handed", {
  name: "Pickaxe (One-Handed)", url: "https://lyrian.splatpass.net/items/pickaxe-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 750, burden: 1,
  weapon: { group: "Axes (counts as a One-Handed axe with proficiency)", hands: 1, range: "5ft", property: "Wild Swing (as axe)" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: PICK_SICKLE_MODS,
  summary: [ "Miner's tool: with proficiency it counts as a One-Handed axe that is also a mining tool." ]
});

IT("pickaxe-two-handed", {
  name: "Pickaxe (Two-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/pickaxe--two-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 1250, burden: 2,
  weapon: { group: "Axes (counts as a Two-Handed axe with proficiency)", hands: 2, range: "5ft", property: "Wild Swing (as axe)" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: PICK_SICKLE_MODS,
  summary: [ "Miner's tool: with proficiency it counts as a Two-Handed axe that is also a mining tool." ]
});

IT("pistol-one-handed", {
  name: "Pistol (One-Handed)", url: "https://lyrian.splatpass.net/items/pistol-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 1000, burden: 1,
  weapon: { group: "Pistols", hands: 1, range: "60ft", ranged: true, property: "Two-Handed Grip", specialized: true },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Blast Diverter", points: 10, summary: "Once per turn, a hit limits the target to Heavy attacks of opportunity against you for the rest of your turn." },
               { name: "Double Action", points: 35, summary: "-3 accuracy. Each attack (hit or miss) gives the target -1 ranged accuracy, stacking, until your next turn. Not on bosses." } ],
          B: [ { name: "Match Barrel", points: 50, summary: "+60ft range." },
               { name: "Beavertail Grip", points: 50, summary: "On a Light attack, move 10ft straight toward the target." } ] },
  summary: [ "Two-Handed Grip: draw or sheath once per turn for 0 AP. Attacking two-handed gives +1 accuracy on Light/Heavy and +2 on Precise." ]
});

IT("polaris-pair", {
  name: "Polaris Pair", url: "https://rpg.angelssword.com/game/0.13.2/items/polaris-pair",
  checked: "2026-10-22", version: "0.13.2", category: "Astra Relic", tag: "Weapon",
  cost: null, burden: 1,
  weapon: { group: "Light Swords", hands: 1, range: "5ft" },
  summary: [ "A pair of blue shortswords (both count as Light Swords). While holding one, summon the other to your hand for free from any distance.",
             "Your dual-wield offhand attack gains Lock-on if it targets someone your main-hand attack already attacked. (No price listed - a relic.)" ]
});

var POLEARM_MODS = { A: [ { name: "Heavy Broadhead", points: 10, summary: "+2 thrown Power, but boomerang/returning effects stop working." },
               { name: "Shepherd's Lanza", points: 20, summary: "While wielding, fall damage reduced by 60ft." },
               { name: "Halberd", points: 35, summary: "Gains the axe passive Wild Swing." } ],
          B: [ { name: "Winged Lugs", points: 25, summary: "While wielding: +1 Guard, +2 Block, -1 Evasion." },
               { name: "Fullpike", points: 25, summary: "Polearm becomes +10ft range and 5-15ft threatened range; carrying it gives -1 max RP." },
               { name: "Yari Point Taper", points: 50, summary: "After a basic Heavy attack, make an immediate Light attack on a target directly behind the first." },
               { name: "Swordbreaker", points: 80, summary: "+2 Swordbreaker Power against targets wielding light or heavy blades." } ] };

IT("polearm-one-handed", {
  name: "Polearm (One-Handed)", url: "https://lyrian.splatpass.net/items/polearm-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Polearms", hands: 1, range: "10ft", property: "Polearm" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: POLEARM_MODS,
  summary: [ "Polearm: weapon attacks get +5ft range; threatened range becomes 5-10ft." ]
});

IT("polearm-two-handed", {
  name: "Polearm (Two-Handed)", url: "https://lyrian.splatpass.net/items/polearm-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Polearms", hands: 2, range: "10ft", property: "Polearm" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: POLEARM_MODS,
  summary: [ "Polearm: weapon attacks get +5ft range; threatened range becomes 5-10ft." ]
});

IT("portable-vacuum", {
  name: "Portable Vacuum", url: "https://rpg.angelssword.com/game/0.13.2/items/portable-vacuum",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 2500, burden: 2, activation: "1 AP",
  fuel: { shell: "M", usage: "1 shell per minute" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Powerful Fan", points: 10, summary: "+10ft range." },
               { name: "Fuel Optimization", points: 10, summary: "One shell lasts until the end of the encounter." } ],
          B: [ { name: "Airflow Optimization", points: 25, summary: "+10ft range." },
               { name: "Backpack Vacuum", points: 80, summary: "Carry it on your back and switch it on without drawing it; it moves with you." } ] },
  summary: [ "Sucks in all mist or gas within 20ft of where it's switched on, removing its effects (magical too, except mists/gases from a Secret Art or Climax Art)." ]
});

IT("portable-wall", {
  name: "Portable Wall", url: "https://rpg.angelssword.com/game/0.13.2/items/portable-wall",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 1000, burden: 1, activation: "1 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "600 Alchemy units, 1x Mystic Earth, 1x Mystic Arcane" },
  summary: [ "Throw the stones up to 40ft: a magic wall forms between them (10ft high, 5ft long, 100 HP, lasts 2 turns). It doesn't form if a living creature is between the stones. One use." ]
});

IT("power-gauntlets", {
  name: "Power Gauntlets", url: "https://rpg.angelssword.com/game/0.13.2/items/power-gauntlets",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: 1500, burden: 1, activation: "0 AP",
  weapon: { group: "Unarmed (artifice)", hands: 2, range: "5ft", property: "Counts as Two-Handed but doesn't get 5d6 Heavy damage" },
  fuel: { shell: "S", usage: "1 shell per hour" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Fine Size", points: 10, summary: "Removes the -10 finesse penalty." },
               { name: "Vault Breaker", points: 20, summary: "Double damage against objects." },
               { name: "Artificer's Gloves", points: 35, summary: "Hold and use artifices normally while wearing them." } ],
          B: [ { name: "Finesse Grip", points: 25, summary: "Hold and use items and weapons normally while wearing them." },
               { name: "Heavy Punches", points: 50, summary: "Unarmed attacks with them deal 5d6 instead of 4d6." } ] },
  summary: [ "While active, your unarmed attacks deal normal weapon damage (if you already have that, +1 Power to unarmed attacks instead). -10 to finesse hand checks even when off; both hands are used up, so you can't hold other items.",
             "Putting them on after drawing them takes 2 AP (or just always wear them); taking them off takes 2 AP." ]
});

IT("private-communications-device", {
  name: "Private Communications Device", url: "https://rpg.angelssword.com/game/0.13.2/items/private-communications-device",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 1500, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per hour" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Extra Earplugs", points: 10, summary: "3 more earplugs." } ],
          B: [ { name: "Extra Range", points: 25, summary: "Range 3 miles instead of 1." },
               { name: "Hidden Device", points: 80, summary: "Disguised as an ordinary object (a close look or Perception may still reveal it)." } ] },
  summary: [ "A box with two earplugs that links to another device within 1 mile by its code. Speech into the box is heard at normal volume by anyone wearing an earplug." ]
});

IT("projected-recorder-orb", {
  name: "Projected Recorder Orb", url: "https://rpg.angelssword.com/game/0.13.2/items/projected-recorder-orb",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 1000, burden: 1, activation: "0 AP",
  fuel: { shell: "S", usage: "Special (built-in shell)" },
  crafting: { points: 30, discipline: "Artificing" },
  summary: [ "A crystal ball that records up to 1 minute of sound and images within 10ft (once only). Using it again plays the recording back as a slightly distorted, obviously fake illusion; playback works for up to a year." ]
});

IT("rabbit-elixir", {
  name: "Rabbit Elixir", url: "https://lyrian.splatpass.net/items/rabbit-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 200, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "490 Alchemy units, 1x Common Wind" },
  summary: [ "Take 11 true damage; +10ft speed for the rest of the encounter." ]
});

IT("reaper-elixir", {
  name: "Reaper Elixir", url: "https://rpg.angelssword.com/game/0.13.2/items/reaper-elixir",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 200, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Common Fire, 1x Common Arcane" },
  summary: [ "Take 11 true damage; +1 Power until the end of combat." ]
});

IT("refractor-gun", {
  name: "Refractor Gun", url: "https://rpg.angelssword.com/game/0.13.2/items/refractor-gun",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: "Original Weapon + 1000", burden: "Original Weapon",
  weapon: { variants: ["Musket", "Pistol", "Shotgun", "Sniper Rifle"], damageType: "Arcane" },
  fuel: { shell: "S", usage: "1 shell per encounter" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Elemental Lens", points: 10, summary: "Deal a chosen element instead of Arcane." } ], B: [],
          note: "Also accepts normal pistol, shotgun, musket and sniper rifle mods." },
  summary: [ "A gun that fires arcane blasts through lenses instead of bullets: its attacks deal Arcane damage. Comes as a Musket, Pistol, Shotgun or Sniper Rifle." ]
});

IT("research-kit", {
  name: "Research Kit", url: "https://rpg.angelssword.com/game/0.13.2/items/research-kit",
  checked: "2026-10-22", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 100, burden: 1,
  summary: [ "Enough bottles, vials and containers to store research samples for one expedition. Used up at the end of the expedition if used." ]
});

IT("return-stone", {
  name: "Return Stone", url: "https://rpg.angelssword.com/game/0.13.2/items/return-stone",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Basic",
  cost: 500, burden: 1, activation: "3 AP",
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Shortened Activator", points: 20, summary: "Costs 1 AP less to activate." } ],
          B: [ { name: "Ranged Circuit", points: 25, summary: "+20ft range when used on a downed ally." },
               { name: "Re-usable", points: 50, summary: "Can be used more than once, but needs repair between uses. Takes 2 C slots." },
               { name: "Group Escape", points: 80, summary: "Up to 3 allies within 10ft may escape with you. Costs 2 more AP (may give it the Setup keyword)." },
               { name: "Re-usable+", points: 80, summary: "Can be used more than once. Takes 3 C slots." } ] },
  summary: [ "Emergency dungeon escape: whoever activates it is teleported out of the dungeon at once. Can be used on a downed ally instead." ]
});

IT("saboteur-thread-daggers-one-handed", {
  name: "Saboteur Thread Daggers (One-Handed)", url: "https://lyrian.splatpass.net/items/saboteur-thread-daggers-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 1000, burden: 1,
  weapon: { group: "Saboteur Thread Daggers (counts as small weapon)", hands: 1, range: "30ft", ranged: true, property: "Wired Weapon", specialized: true },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Compact Ergonomics", points: 20, summary: "Other hand free: movement actions that cost RP get +5ft." },
               { name: "Parrying Dagger", points: 20, summary: "Don't attack with it on your turn: +4 Shield bonus to Block until your next turn. +4 damage when using Parry." },
               { name: "Flat Pommel", points: 35, summary: "Other hand free: push the target into another target; melee Heavy attack damage becomes 5d6." } ],
          B: [ { name: "Poisoner Weapon", points: 25, summary: "Applying poison to it costs 1 less AP (min 0)." },
               { name: "Butterfly Knife", points: 50, summary: "First Light attack each round with it gains Trick Attack; it can't make Heavy attacks." },
               { name: "Ring Pommel", points: 50, summary: "If a target defends against your Heavy attack, it doesn't get attacks of opportunity against you until your next turn." },
               { name: "Rappel", points: 80, summary: "After a thrown attack with it deals damage, move up to 30ft toward the target, once per round." } ] },
  summary: [ "Wired Weapon: draw or sheath once per turn for 0 AP. Throw up to 30ft and recall for 0 AP. Counts as a small weapon for abilities." ]
});

IT("scythe-two-handed", {
  name: "Scythe (Two-Handed)", url: "https://lyrian.splatpass.net/items/scythe-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 1250, burden: 2,
  weapon: { group: "Scythes", hands: 2, range: "5ft", property: "Sweeping Arc" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Spinning Dance", points: 20, summary: "Move 5ft between the Heavy attack and the Sweeping Arc attack." },
               { name: "Long Haft", points: 35, summary: "+5ft attack range; threatened range becomes 10ft." } ],
          B: [ { name: "Rapid Spins", points: 50, summary: "Sweeping Arc twice per round." },
               { name: "Focused Spin", points: 50, summary: "Sweeping Arc targets the same creature as the Heavy attack." },
               { name: "Full Spin", points: 80, summary: "Sweeping Arc can target all creatures in range." } ] },
  summary: [ "Sweeping Arc: once per round, when you make a Heavy attack, also make a Light attack against a different enemy in range." ]
});

IT("set-of-missiles-one-handed", {
  name: "Set of Missiles (One-Handed)", url: "https://lyrian.splatpass.net/items/set-of-missiles-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Thrown (Missiles)", hands: 1, range: "30ft", ranged: true, property: "Stealthy Throwing" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Featherflight", points: 35, summary: "Range 60ft, but stealth is only kept when attacking within 30ft." } ],
          B: [ { name: "Poison Container", points: 25, summary: "Pre-apply poison to the sealed container; it counts as applied (limits and duration start) once the lid is opened and a missile drawn." } ] },
  summary: [ "Stealthy Throwing: draw one missile per attack (rest stay on you). Attacking while stealthed with it doesn't break stealth." ]
});

IT("shark-elixir", {
  name: "Shark Elixir", url: "https://lyrian.splatpass.net/items/shark-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 150, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "350 Alchemy units, 1x Common Water" },
  summary: [ "Take 11 true damage; breathe underwater and swim easily at your speed for up to one day." ]
});

IT("shell-converter", {
  name: "Shell Converter", url: "https://rpg.angelssword.com/game/0.13.2/items/shell-converter",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Kit",
  cost: 500, burden: 1,
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Medium Capacity", points: 20, summary: "Can also make Medium shells (they cost more fuel)." } ],
          B: [ { name: "Increased Production", points: 25, summary: "Make two shells instead of one (still pay the fuel for each)." },
               { name: "Lightweight Design", points: 80, summary: "No longer counts as a kit, so it can go in non-combat inventory." } ] },
  summary: [ "Turns Magical Fuel into shells. Lighter than an artificer's kit but can't repair artifices. Counts as a kit for Burden (the page lists it as Basic; tagged Kit here for that reason).",
             "Rest action: make one small Artifice Shell, paying its cost in Magical Fuel." ]
});

IT("shepherds-sling-one-handed", {
  name: "Shepherd's Sling (One-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/shepherd-s-sling--one-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 200, burden: 1,
  weapon: { group: "Slings", hands: 1, range: "60ft", ranged: true, property: "Giant Killer" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [], note: "A mods: the page says \"Soon\" (none yet).",
          B: [ { name: "Anti-Goliath", points: 50, summary: "+1 Size Power bonus on attacks against Large or bigger creatures." },
               { name: "Explosive Rock", points: 80, summary: "When you overcharge, the extra damage also hits everything within 5ft of the target - as a Light damage roll for them instead of the flat 9." } ] },
  summary: [ "Giant Killer: can't be dual-wielded with another sling. Overcharge a basic Heavy attack for 1 AP to deal 9 extra damage." ]
});

IT("shield", {
  name: "Shield", url: "https://lyrian.splatpass.net/items/shield/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Shield",
  cost: 500, burden: 1,
  armor: { type: "Shield", block: "+4 (Shield bonus)" },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: { A: [ { name: "Spiked Shield", points: 20, summary: "Use it as a One-Handed weapon and keep the shield bonus." },
               { name: "Mirror Shield", points: 35, summary: "Targeted by a Mystic Eye ability: 1 RP to negate it on you and reflect it at the user." } ],
          B: [ { name: "Throwing Shield", points: 50, summary: "Ranged attack by throwing it at an enemy within 30ft; it returns to your hand." },
               { name: "Shield Formation", points: 80, summary: "+1 Guard while next to an ally with a shield or greatshield." } ] },
  summary: [ "+4 Shield bonus to Block." ]
});

IT("shield-great", {
  name: "Shield (Great)", url: "https://rpg.angelssword.com/game/0.13.2/items/shield--great-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Shield",
  cost: 1000, burden: 2,
  armor: { type: "Greatshield", guard: 1, block: "+8 (Shield bonus)", initiative: -1, evasion: -2, dodge: -2 },
  crafting: { points: 30, discipline: "Armorsmithing" },
  mods: { A: [ { name: "Spiked Shield", points: 20, summary: "Use it as a One-Handed weapon and keep the shield bonus." },
               { name: "Mirror Shield", points: 35, summary: "Targeted by a Mystic Eye ability: 1 RP to negate it on you and reflect it at the user." } ],
          B: [ { name: "Tower Shield", points: 50, summary: "+1 Burden, but it counts as Low cover for you against ranged attacks." },
               { name: "Shield Formation", points: 80, summary: "+1 Guard while next to an ally with a shield or greatshield (real shields only)." } ] },
  summary: [ "+1 Shield bonus to Guard, -1 Initiative, -2 Evasion and Dodge. While Blocking the Shield bonus is 8 instead." ]
});

IT("shielding-potion", {
  name: "Shielding Potion", url: "https://lyrian.splatpass.net/items/shielding-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 200, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "270 Alchemy units, 3x Common Earth" },
  summary: [ "Gain 15 temporary HP until the start of your next turn." ]
});

IT("shock-stick", {
  name: "Shock Stick", url: "https://rpg.angelssword.com/game/0.13.2/items/shock-stick",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: 1500, burden: 1, activation: "0 AP",
  weapon: { group: "Any melee proficiency", hands: 1, range: "5ft", damageType: "Lightning" },
  fuel: { shell: "S", usage: "1 shell per encounter" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Heavy Baton", points: 20, summary: "Counts as a Two-Handed weapon." },
               { name: "Long Stick", points: 35, summary: "+5ft weapon range; you threaten 10ft." } ],
          B: [ { name: "Capture Model", points: 80, summary: "Heavy attack damage on a Grunt stuns it until the start of your next turn, even above 0 HP." } ] },
  summary: [ "Anyone proficient with any melee weapon can use it. Improvised weapon until switched on, then a light weapon dealing Lightning damage. Dropping an enemy to 0 HP or less stuns them instead of killing (until the encounter ends plus a minute)." ]
});

IT("short-range-communications-device", {
  name: "Short Range Communications Device", url: "https://rpg.angelssword.com/game/0.13.2/items/short-range-communications-device",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 1000, burden: 1, activation: "0 AP",
  fuel: { shell: "S", usage: "1 shell per day" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Directional Ping", points: 35, summary: "While in range, you know which direction the paired device is." } ],
          B: [ { name: "Extra Range", points: 25, summary: "Range 2 miles instead of 1." } ] },
  summary: [ "Two linked boxes: press the button and all audio from one is sent to the other (both must be active). Range 1 mile." ]
});

IT("shotgun-one-handed", {
  name: "Shotgun (One-Handed)", url: "https://lyrian.splatpass.net/items/shotgun-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 750, burden: 1,
  weapon: { group: "Shotguns", hands: 1, range: "15ft", ranged: true, property: "Point Blank", specialized: true },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Dragon's Breath", points: 10, summary: "First basic attack each round inflicts Burning 5, hit or miss (can apply to an Open Choke attack too)." },
               { name: "Proof Load", points: 20, summary: "On a Heavy attack you may knock yourself back 5ft." },
               { name: "Point Blank", points: 20, summary: "Make attacks of opportunity as if it were a melee weapon with 5ft threaten range." } ],
          B: [ { name: "Slugs", points: 50, summary: "Double range." },
               { name: "Open Choke", points: 80, summary: "First basic Light attack each round also makes a Light attack against all enemies in a 45-degree cone out to range." } ] },
  summary: [ "Point Blank: fire while in melee range without provoking. (No Double Barrel mod on the one-handed version.)" ]
});

IT("shotgun-two-handed", {
  name: "Shotgun (Two-Handed)", url: "https://lyrian.splatpass.net/items/shotgun-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 1500, burden: 2,
  weapon: { group: "Shotguns", hands: 2, range: "30ft", ranged: true, property: "Point Blank", specialized: true },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Dragon's Breath", points: 10, summary: "First basic attack each round inflicts Burning 5, hit or miss." },
               { name: "Proof Load", points: 20, summary: "On a Heavy attack you may knock yourself back 5ft." },
               { name: "Point Blank", points: 20, summary: "Make attacks of opportunity as if it were a melee weapon with 5ft threaten range." } ],
          B: [ { name: "Slugs", points: 50, summary: "Double range." },
               { name: "Double Barrel", points: 50, summary: "Two-handed only: first single-target Heavy attack each round also makes a Light attack on the same target (counts as your dual-wield attack)." },
               { name: "Open Choke", points: 80, summary: "First basic Light attack each round also makes a Light attack against all enemies in a 45-degree cone out to range." } ] },
  summary: [ "Point Blank: fire while in melee range without provoking." ]
});

IT("sickle", {
  name: "Sickle", url: "https://lyrian.splatpass.net/items/sickle/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Axes (counts as a One-Handed axe with proficiency)", hands: 1, range: "5ft", property: "Wild Swing (as axe)" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: PICK_SICKLE_MODS,
  summary: [ "Farmer's tool: with proficiency it counts as a One-Handed axe that is also a farming tool." ]
});

IT("silencer", {
  name: "Silencer", url: "https://rpg.angelssword.com/game/0.13.2/items/silencer",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 1500, burden: 0,
  crafting: { points: 30, discipline: "Artificing" },
  summary: [ "Fits Muskets, Pistols, Shotguns and Sniper Rifles; the gun no longer makes a loud bang. (An unsilenced shot alerts every enemy within 120ft.) Attaching or removing it costs 4 AP." ]
});

IT("small-shell", {
  name: "Small Shell", url: "https://lyrian.splatpass.net/items/small-shell/",
  checked: "2026-10-21", version: "0.13.2", category: "Artifice", tag: "Fuel",
  cost: 50, burden: 1, shellSize: "S",
  summary: [ "Small cylinder of magical fuel for artifices. Most weapon artifices eject spent shells automatically." ]
});

IT("small-weapons-one-handed", {
  name: "Small Weapons (One-Handed)", url: "https://lyrian.splatpass.net/items/small-weapons-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Small Weapons", hands: 1, range: "5ft", property: "Hidden Weapon" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Aerodynamic Design", points: 10, summary: "No Boomerang/Return effects. For 1 RP throw it as a Light ranged attack; on damage the target is Slowed until the end of its next turn." },
               { name: "Spring-loaded", points: 20, summary: "Worn, no need to draw; attack with it once per round. If your first attack with it in a fight is basic, Hidden Weapon triggers (still once per combat). Can't be thrown or drawn normally. (Designed by Nya.)" },
               { name: "Compact Ergonomics", points: 20, summary: "Other hand free: movement actions that cost RP get +5ft." },
               { name: "Parrying Dagger", points: 20, summary: "Don't attack with it on your turn: +4 Shield bonus to Block until your next turn. +4 damage when using Parry." },
               { name: "Flat Pommel", points: 35, summary: "Other hand free: melee Heavy attack damage becomes 5d6." } ],
          B: [ { name: "Poisoner Weapon", points: 25, summary: "Applying poison to it costs 1 less AP (min 0)." },
               { name: "Butterfly Knife", points: 50, summary: "First Light attack each round with it gains Trick Attack; it can't make Heavy attacks." },
               { name: "Ring Pommel", points: 50, summary: "If the target defends against your Heavy attack, it can't make attacks of opportunity against you until your next turn." } ] },
  summary: [ "Hidden Weapon: draw for 0 AP. Once per combat, if your next attack that round with it is a basic Light or Heavy attack, it gains Trick Attack (not again that combat, even with another Hidden Weapon)." ]
});

IT("smiths-hammer-one-handed", {
  name: "Smith's Hammer (One-Handed)", url: "https://lyrian.splatpass.net/items/smiths-hammer-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Bludgeoning (per rulebook)", hands: 1, range: "5ft", property: "MISSING (not listed on page)" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Flexible Handle", points: 10, summary: "Minimum damage dealt is always 2 (doesn't trigger on effects that would deal 0)." },
               { name: "Chain Flail", points: 35, summary: "Can't be defended against with 0 RP actions; its attacks don't count as consuming 0 RP actions." } ],
          B: [ { name: "Weighted Poll Upsetting", points: 25, summary: "Your third separate attack on a target with it knocks the target back 10ft on damage." },
               { name: "Flanged Head", points: 50, summary: "Crits stay maximized even against blocking targets." } ] },
  summary: [ "Core crafting tool: lets you craft as a Blacksmith or Armorsmith." ]
});

IT("smiths-hammer-two-handed", {
  name: "Smith's Hammer (Two-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/smith-s-hammer--two-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Artisan Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Bludgeoning (per rulebook)", hands: 2, range: "5ft", property: "MISSING (not listed on page)" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Flexible Handle", points: 10, summary: "Minimum damage dealt is always 2 (doesn't trigger on effects that would deal 0)." },
               { name: "Chain Flail", points: 35, summary: "Can't be defended against with 0 RP actions; your attacks with it don't count as consuming 0 RP actions." } ],
          B: [ { name: "Weighted Poll Upsetting", points: 25, summary: "Your third separate attack against a target knocks it back 10ft on damage." },
               { name: "Flanged Head", points: 50, summary: "Crits are still maximized against blocking targets." } ] },
  summary: [ "Core crafting tool: lets you craft as a Blacksmith or Armorsmith." ]
});

IT("smoke-flask", {
  name: "Smoke Flask", url: "https://lyrian.splatpass.net/items/smoke-flask/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 250, burden: 1, activation: "1 AP", range: "20ft",
  crafting: { points: 35, discipline: "Alchemy", materials: "200 Alchemy units, 1x Rare Wind" },
  summary: [ "Fills a 15x15ft area with smoke that blocks line of sight (works like Glittershards) until the start of your next turn." ]
});

IT("sniper-rifle-two-handed", {
  name: "Sniper Rifle (Two-Handed)", url: "https://lyrian.splatpass.net/items/sniper-rifle-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 2000, burden: 2,
  weapon: { group: "Sniper Rifles", hands: 2, range: "720ft", ranged: true, property: "Snipe", specialized: true },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Semi-Automatic", points: 20, summary: "After missing a basic Heavy attack, follow with a Light attack on the same target (counts as your dual-wield attack)." },
               { name: "Hollow Point Boat Tail Rounds", points: 35, summary: "+1 accuracy on basic Heavy or Precise attacks." },
               { name: "Armor Piercing Rounds", points: 35, summary: "First attack each round treats the enemy's Guard as 4 lower." } ],
          B: [ { name: "Bipod", points: 50, summary: "All attacks gain the Prone keyword; while Prone you have low cover vs ranged attacks." },
               { name: "Snipe", points: 80, summary: "If you didn't move this turn or last turn, +1d4 accuracy with a Sniper Rifle (flat 4 if you have the Sniper's Snipe ability)." } ] },
  summary: [ "Snipe (weapon effect): through the scope, +10 Perception looking at things over 60ft away." ]
});

IT("snow-cloak", {
  name: "Snow Cloak", url: "https://rpg.angelssword.com/game/0.13.2/items/snow-cloak",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 3000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per arc" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Activation", points: 20, summary: "Activation costs 0 AP." } ],
          B: [ { name: "Snowproof", points: 25, summary: "While active, immune to Slowing from Frost damage." },
               { name: "Increased Protection", points: 80, summary: "Damage reduction becomes 10." } ] },
  summary: [ "The Fire Robe's cold-weather counterpart; keeps you warm in any cold. Takes the cloak slot.",
             "Activate: 5 damage reduction against Frost until the encounter ends. Then the shell is used up and must be replaced for the warmth effect to work." ]
});

IT("soul-lamp", {
  name: "Soul Lamp", url: "https://rpg.angelssword.com/game/0.13.2/items/soul-lamp",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 1500, burden: 0,
  fuel: { shell: "S", usage: "1 shell at attunement" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Vivre Flame", points: 10, summary: "The person must be there when it's made (a bit of their blood or magic goes in). The flame's strength shows their health: bright at full HP, a dim flicker when downed." } ],
          B: [ { name: "Damage Sensor", points: 25, summary: "The flame flickers a different color when they take damage." },
               { name: "Directional Flame", points: 80, summary: "The flame points toward the attuned person." } ] },
  summary: [ "Attuned to one person's soul: glows while they live; if they die the light fades and the lamp shatters." ]
});

IT("souleater-elixir", {
  name: "Souleater Elixir", url: "https://rpg.angelssword.com/game/0.13.2/items/souleater-elixir",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 600, burden: 1, activation: "1 AP",
  crafting: { points: 51, discipline: "Alchemy", materials: "1100 Alchemy units, 1x Rare Fire, 1x Common Water" },
  summary: [ "Take 11 true damage. Until the encounter ends, see invisible (not hidden) creatures and +10 to Perception checks to detect creatures." ]
});

IT("space-time-anchor", {
  name: "Space Time Anchor", url: "https://rpg.angelssword.com/game/0.13.2/items/space-time-anchor",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 4000, burden: 3, activation: "2 AP",
  fuel: { shell: "M", usage: "1 shell per minute" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quickened Activation", points: 20, summary: "Costs 1 AP less to activate." } ],
          B: [ { name: "Increased Range", points: 25, summary: "+10ft radius." },
               { name: "Anchor Backpack", points: 50, summary: "Carry it instead of setting it down; -10ft speed while it's active and carried." },
               { name: "Make Exception", points: 80, summary: "Allies can still teleport inside the area." } ] },
  summary: [ "Set it down and activate: nobody within 40ft can teleport, and anyone teleporting in from outside lands at the nearest edge." ]
});

IT("speed-potion", {
  name: "Speed Potion", url: "https://lyrian.splatpass.net/items/speed-potion/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 200, burden: 1, activation: "0 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "270 Alchemy units, 3x Common Wind" },
  summary: [ "+20ft movement speed until the end of your turn." ]
});

IT("spider-shoes", {
  name: "Spider Shoes", url: "https://rpg.angelssword.com/game/0.13.2/items/spider-shoes",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 2000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per minute" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Web Resistance", points: 10, summary: "No penalties for walking across natural, magical or item-made webs." },
               { name: "Quick Activation", points: 20, summary: "Costs 1 AP less to activate (minimum 0)." },
               { name: "Ceiling Drop", points: 20, summary: "Cancel for 0 RP; if you were on a ceiling or wall, treat the fall as 100ft shorter." } ],
          B: [ { name: "Sticky Footing", points: 50, summary: "+5 to saves against being knocked prone or knocked back." },
               { name: "Skitter Away", points: 80, summary: "Moving from flat ground up a vertical surface: your first move of the round doesn't provoke attacks of opportunity." } ] },
  summary: [ "Adjustable shoes: while active you can walk on any angled surface as if it were flat ground." ]
});

IT("staff-one-handed", {
  name: "Staff (One-Handed)", url: "https://lyrian.splatpass.net/items/staff-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Channeling Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Staves", hands: 1, range: "5ft", property: "Push (1 Mana)" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Elemental Staff", points: 35, summary: "0 AP: change an attack's damage type to an element you've mastered or one built into the staff." },
               { name: "Powerful Push", points: 35, summary: "Knockback becomes 10ft." } ],
          B: [ { name: "Efficiency", points: 50, summary: "First basic attack each round can knock back without spending Mana." },
               { name: "Unstoppable Force", points: 80, summary: "Knockback triggers on hit instead of on damage." } ] },
  summary: [ "On damage with it, spend 1 Mana to push the target 5ft." ]
});

IT("staff-two-handed", {
  name: "Staff (Two-Handed)", url: "https://lyrian.splatpass.net/items/staff-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Channeling Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Staves", hands: 2, range: "5ft", property: "Push (1 Mana)" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Elemental Staff", points: 35, summary: "0 AP: change an attack's damage type to an element you've mastered or one built into the staff." },
               { name: "Powerful Push", points: 35, summary: "Knockback becomes 10ft." } ],
          B: [ { name: "Efficiency", points: 50, summary: "First basic attack each round can knock back without spending Mana." },
               { name: "Unstoppable Force", points: 80, summary: "Knockback triggers on hit instead of on damage." } ] },
  summary: [ "On damage with it, spend 1 Mana to push the target 5ft." ]
});

IT("sticky-glue-flask", {
  name: "Sticky Glue Flask", url: "https://rpg.angelssword.com/game/0.13.2/items/sticky-glue-flask",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 350, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "500 Alchemy units, 1x Rare Earth" },
  summary: [ "Throw up to 40ft: the target takes 1 damage, and if damaged has -3 Evasion until it spends 2 AP wiping the glue off." ]
});

IT("stone-serpents-kiss", {
  name: "Stone Serpent's Kiss", url: "https://rpg.angelssword.com/game/0.13.2/items/stone-serpent-s-kiss",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 1000, burden: 1, activation: "1 AP",
  crafting: { points: 55, discipline: "Alchemy", materials: "900 Alchemy units, 1x Rare Wind, 1x Rare Arcane, 1x Mystic Earth" },
  summary: [ "Contact venom for a cutting or thrusting weapon, arrow, bolt or bullet; lasts 1 hit or 1 minute (6 rounds).",
             "On damage: Heroic/Boss targets are Rooted and Unbalanced for 1 minute (each turn they may spend 2 AP, or make a free end-of-turn save vs Potency 13, to end it). Grunts are fully incapacitated (0 AP, 0 RP) for 1 hour." ]
});

IT("stun-gun", {
  name: "Stun Gun", url: "https://rpg.angelssword.com/game/0.13.2/items/stun-gun",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon",
  cost: 2000, burden: 1,
  weapon: { group: "Muskets, Pistols, Shotguns or Sniper Rifles (any)", hands: 1, range: "60ft", ranged: true, damageType: "Lightning" },
  fuel: { shell: "S", usage: "1 shell per encounter" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Training Stock", points: 10, summary: "Usable without any firearm proficiency." },
               { name: "Long Range", points: 35, summary: "Range 120ft." } ],
          B: [ { name: "Capture Model", points: 80, summary: "Heavy attack damage on a Grunt stuns it until the start of your next turn, even above 0 HP." } ] },
  summary: [ "A light gun anyone proficient with Muskets, Pistols, Shotguns or Sniper Rifles can use; 60ft, Lightning damage. Dropping an enemy to 0 HP or less stuns them instead of killing (until the encounter ends plus a minute)." ]
});

IT("suppression-potion", {
  name: "Suppression Potion", url: "https://rpg.angelssword.com/game/0.13.2/items/suppression-potion",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 600, burden: 1, activation: "0 AP",
  crafting: { points: 51, discipline: "Alchemy", materials: "600 Alchemy units, 1x Rare Water, 1x Rare Earth" },
  summary: [ "Suppresses a natural poison, disease or other natural affliction for 24 hours. Doesn't work on magical poisons, diseases, curses and the like." ]
});

IT("surgery-kit", {
  name: "Surgery Kit", url: "https://rpg.angelssword.com/game/0.13.2/items/surgery-kit",
  checked: "2026-10-22", version: "0.13.2", category: "Adventuring Essentials", tag: "Kit",
  cost: 500, burden: 2,
  summary: [ "Rest action (needs 5+ Medicine points or a relevant Medicine expertise): minor surgery on yourself or an ally, Medicine check DC 15. On success, one injury from this campaign has no effect until the campaign ends.",
             "Each injury can only be negated once this way, and a person can have only one negated injury at a time. The injury still has to be dealt with after the campaign." ]
});

var THROWN_MODS = {
  A: [ { name: "Skirmisher", points: 35, summary: "After a ranged attack with it, move 5ft as with the light sword passive (Nimble)." },
       { name: "Spinning Axe", points: 35, summary: "Also gains the axe passive (Wild Swing), even when thrown." } ],
  B: [ { name: "Throwing Hammer", points: 50, summary: "Attacks with it gain the Artillery keyword within 30ft." },
       { name: "Ricocheting", points: 50, summary: "Once per round, when a Heavy attack with it deals damage, make a Light attack against a different target within 20ft." } ]
};

IT("thrown-one-handed", {
  name: "Thrown (One-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/thrown--one-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Thrown Weapons", hands: 1, range: "30ft", ranged: true, property: "Switch Hit" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: THROWN_MODS,
  summary: [ "Switch Hit: works as a melee weapon with no penalty; after a ranged attack it returns to your hand. Range 30ft." ]
});

IT("thrown-two-handed", {
  name: "Thrown (Two-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/thrown--two-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Thrown Weapons", hands: 2, range: "60ft", ranged: true, property: "Switch Hit" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: THROWN_MODS,
  summary: [ "Switch Hit: works as a melee weapon with no penalty; after a ranged attack it returns to your hand. Range 60ft." ]
});

IT("timeworn-katana", {
  name: "Timeworn Katana", url: "https://rpg.angelssword.com/game/0.13.2/items/timeworn-katana",
  checked: "2026-10-22", version: "0.13.2", category: "Astra Relic", tag: "Main",
  cost: null, burden: 1,
  weapon: { group: "Katanas", hands: 1, range: "5ft" },
  summary: [ "A rusty, dull katana. Its hits deal no damage at once: the damage is stored per target, and when you sheathe it each target takes their stored damage as true damage.",
             "Stored hits last until the end of the encounter or 1 minute, whichever is longer. (A relic: no price; the page doesn't say one- or two-handed - treated as a one-handed Katana.)" ]
});

IT("torch", {
  name: "Torch", url: "https://rpg.angelssword.com/game/0.13.2/items/torch",
  checked: "2026-10-22", version: "0.13.2", category: "Adventuring Essentials", tag: "Basic",
  cost: 10, burden: 1, activation: "2 AP",
  summary: [ "Lit, it sheds light within 30ft for up to two hours (built-in striker works on most rock and metal). Can be used as an improvised weapon that deals Fire damage." ]
});

IT("transforming-weapon", {
  name: "Transforming Weapon", url: "https://rpg.angelssword.com/game/0.13.2/items/transforming-weapon",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Weapon Attachment",
  cost: 1000, burden: 1, activation: "0 AP",
  fuel: { shell: "S", usage: "1 shell per switch" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Smooth Operations", points: 20, summary: "The first switch each encounter uses no shell." } ],
          B: [ { name: "Triple Form", points: 50, summary: "Attach 3 weapons instead of 2." },
               { name: "Quick Swap", points: 80, summary: "Activate for 0 RP instead of 0 AP." } ] },
  summary: [ "Joins two weapons (melee or ranged); press the button to use a shell and switch the active weapon to the other one. Holds up to 5 shells. Attaching or removing a weapon costs 4 AP each." ]
});

IT("tunnel-elixir", {
  name: "Tunnel Elixir", url: "https://rpg.angelssword.com/game/0.13.2/items/tunnel-elixir",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 200, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "380 Alchemy units, 2x Common Earth" },
  summary: [ "Take 11 true damage; +1 Focus until the end of combat." ]
});

IT("turtle-elixir", {
  name: "Turtle Elixir", url: "https://lyrian.splatpass.net/items/turtle-elixir/",
  checked: "2026-10-21", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 200, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "490 Alchemy units, 1x Common Earth" },
  summary: [ "Take 11 true damage; +1 Toughness until the end of combat." ]
});

IT("twinblade-two-handed", {
  name: "Twinblade (Two-Handed)", url: "https://lyrian.splatpass.net/items/twinblade-two-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Twinblades", hands: 2, range: "5ft", property: "Twin Strike" },
  crafting: { points: 30, discipline: "Blacksmithing" },
  mods: { A: [ { name: "Haladie Blade", points: 20, summary: "-1 Power, but 2 off-hand attacks per turn with this weapon instead of one." } ],
          B: [ { name: "Shadow-Type Saber", points: 80, summary: "Engaged in melee, after you Block or Dodge, a later melee attack from a different enemy can be blocked/dodged for 0 RP, once per turn." } ] },
  summary: [ "Twin Strike: make dual-wield attacks as if wielding two weapons." ]
});

IT("universal-armor-mods", {
  name: "Universal Armor Mods", url: "https://rpg.angelssword.com/game/0.13.2/items/universal-armor-mods",
  checked: "2026-10-22", version: "0.13.2", category: "Crafting", tag: "Mods", reference: true,
  cost: null, burden: null,
  mods: {
    A: [ { name: "Ceremonial Armor", points: 10, summary: "+10 Negotiation and Intimidation, but you automatically fail Stealth checks." },
         { name: "Cast Off Design", points: 10, summary: "After Blocking, 0 RP: cast the armor off (unequipped and Broken until repaired)." },
         { name: "Hidden Armor", points: 10, summary: "Looks like ordinary clothing." },
         { name: "Ki Concealment", points: 20, summary: "Needs the Manaweave frame. Presence concealment while worn; spending mana ends it until you rest for the day." } ],
    B: [ { name: "Mana Barrier", points: 25, summary: "Needs the Manaweave frame. Putting it on sets your mana and max mana to 0; gain 7 temp HP per mana lost, which regenerates when you'd regain mana/HP from resting (up to the arc's starting amount)." },
         { name: "Sensory Suit", points: 50, summary: "Mind Connection and Scry range x10; Psychometry costs 1 less mana." } ],
    Frame: [ { name: "Barrier", points: 20, summary: "No passive Guard, but Initiative penalty -2 smaller and Evasion/Dodge penalty -4 smaller; still gives its normal Block bonus." },
             { name: "Protective Coating", points: 20, summary: "Initiative penalty 1 smaller, Evasion/Dodge penalty 2 smaller; passive Guard only, no extra Guard when Blocking (Toughness etc. still apply)." },
             { name: "Manaweave", points: 20, summary: "Initiative penalty 1 smaller, Evasion/Dodge penalty 2 smaller, but -3 current and max mana (can't wear it if that would go below 0)." },
             { name: "Fire Armor (600 Salachar)", points: 20, summary: "Initiative -1/Evasion-Dodge -2 smaller penalties, but double damage from Water." },
             { name: "Turbulent Air Layer (600 Sylphsteel)", points: 20, summary: "Smaller penalties (1/2), but the armor's bonuses only apply against ranged attacks." },
             { name: "Lightning Armor (600 Fulgarite)", points: 20, summary: "Smaller penalties (1/2), but double damage from Earth." },
             { name: "Shadow Buoyancy (600 Corvuskite)", points: 20, summary: "Smaller penalties (1/2) at night." },
             { name: "Condensation Layer (600 Vivinthal)", points: 20, summary: "Smaller penalties (1/2), but double damage from Lightning and permanently Soaked." },
             { name: "Ice Armor (600 Glacite)", points: 20, summary: "Smaller penalties (1/2), but double damage from Fire." } ],
    Flamellon: [ { name: "Quick Channel Layer (B, 2000 Arcanium)", points: 40, summary: "+1 max mana while worn." },
                 { name: "Refractory Plates (A, 1000 Salachar)", points: 35, summary: "Immune to Burning and natural heat." },
                 { name: "Sunfire Infusion (B, 4000 Salachar)", points: 80, summary: "Creatures ending their turn next to you take Light Fire damage." },
                 { name: "Wind's Blessing (B, 1250 Sylphsteel)", points: 25, summary: "After you Dodge, +10ft speed until the end of your next turn." },
                 { name: "Cloud Pillow (B, 1250 Sylphsteel)", points: 25, summary: "Falling/pushback damage: treat the fall as 30ft shorter." },
                 { name: "Aerolevitation Effect (B, 4000 Sylphsteel)", points: 80, summary: "You can Hover." },
                 { name: "Static Armor (B, 1250 Fulgarite)", points: 25, summary: "Anyone ending their turn next to you gets Static 12 (triggers at the end of their next turn)." },
                 { name: "Franklin Badge (B, 2500 Fulgarite)", points: 50, summary: "Lightning attacks targeting an ally within 30ft (not you) get -5 accuracy." },
                 { name: "Lightning Reprisal (B, 4000 Fulgarite)", points: 80, summary: "First melee Heavy hit that damages you each round: make a Light attack against the attacker." },
                 { name: "Light Absorbing Layer (A, 300 Corvuskite)", points: 10, summary: "+5 Stealth at night (doesn't stack with a cloak)." },
                 { name: "Bubble Flow Armor (B, 1250 Vivinthal)", points: 25, summary: "20ft swim speed; hold your breath twice as long." },
                 { name: "Galilean Latticing (B, 1250 Vivinthal)", points: 25, summary: "Walk on water." },
                 { name: "Fog Plates (B, 4000 Vivinthal)", points: 80, summary: "+4 Dodge." },
                 { name: "Permafrost Mantle (B, 2500 Glacite)", points: 50, summary: "Enemies within 5ft of you are Slowed (including when they move through)." },
                 { name: "Seismographic Reflex Layer (B, 2500 Ghimslag)", points: 50, summary: "20ft Tremorsense." },
                 { name: "Rock Plates (B, 4000 Ghimslag)", points: 80, summary: "+8 to Block." },
                 { name: "Luxflow Coating (A, 600 Luxaeterna)", points: 20, summary: "Bright light to 60ft." },
                 { name: "Triboluminescent Plates (B, 4000 Luxaeterna)", points: 80, summary: "Undead that damage you take Light Holy damage." },
                 { name: "Tengu Armor (A, 1000 Aetherplume)", points: 35, summary: "+5ft speed while hovering or flying." },
                 { name: "Aerodynamic Glider (A, 1000 Aetherplume)", points: 35, summary: "1 RP: glide (as the Aeromancer ability)." },
                 { name: "Trauma Heat (B, 4000 Phoenix)", points: 80, summary: "Once per round, dropping from above 0 to 0 HP or less: revive at 1 HP (still take the injury)." },
                 { name: "Repulsive Sheeting (A, 1000 Gravity)", points: 35, summary: "Your pushes and pulls go 5ft further." },
                 { name: "Anti-Terror Field (B, 2500 Gravity)", points: 50, summary: "+4 Evasion against ranged attacks, but your own ranged attacks automatically miss." },
                 { name: "Dryad Bark (A, 1000 Plant)", points: 35, summary: "Natural difficult terrain costs no extra movement." },
                 { name: "Resinosis (B, 2500 Plant)", points: 50, summary: "Heal 3 HP when you Block an enemy attack." },
                 { name: "Ionic Field (B, 1250 Silver)", points: 25, summary: "+1 astra corruption resistance." },
                 { name: "Hive Mind (A, 1000 Insectoid)", points: 35, summary: "+1 Initiative per ally (including you) wearing armor with this mod (max +3)." },
                 { name: "Bee Armor (B, 2000 Insectoid)", points: 50, summary: "First time each combat an attack damages you, the attacker is Dazed." },
                 { name: "Living Armor (B, 4000 Insectoid)", points: 80, summary: "First melee damage each combat releases a 5ft insect swarm where you are; others ending their turn in it take 6 full-pierce damage." },
                 { name: "Reanimated Bone (B, 1250 Undead)", points: 25, summary: "While downed, attacks against you don't gain Full Pierce." },
                 { name: "Hands of Ptah (B, 1250 Undead)", points: 25, summary: "While downed, regain 2 HP per turn." },
                 { name: "False Bone Layer (B, 4000 Undead)", points: 80, summary: "Crits against you don't gain Full Pierce (still max damage)." },
                 { name: "Slippery (B, 1250 Spidersilk)", points: 25, summary: "Automatically escape the first grapple against you each encounter." },
                 { name: "Sticky (B, 2500 Spidersilk)", points: 50, summary: "Spider Climb while worn (as the Spiderfolk racial)." },
                 { name: "Poison Inlay (B, 1250 Poison)", points: 25, summary: "Rest action: load a poison; when a melee attack hits you it triggers on the attacker as if you'd damaged them." },
                 { name: "Poison Resistance (B, 2500 Poison)", points: 50, summary: "5 DR against Poison damage." } ] },
  summary: [ "Mods any armor (not shields) can take. Frame mods change the armor's Guard/penalty trade-off; Flamellon mods need enough items of that Flamelic Polarity (an alloy layering gives polarity equal to the ingot's units, e.g. a Salachar ingot = 3000)." ]
});

IT("universal-artifice-mods", {
  name: "Universal Artifice Mods", url: "https://rpg.angelssword.com/game/0.13.2/items/universal-artifice-mods",
  checked: "2026-10-22", version: "0.13.2", category: "Crafting", tag: "Mods", reference: true,
  cost: null, burden: null,
  mods: { A: [], B: [],
    C: [ { name: "Double Barrel", points: 10, summary: "Holds up to 2 shells (still reload one at a time)." },
         { name: "Triple Barrel", points: 10, summary: "Holds up to 3 shells. Needs Double Barrel." },
         { name: "Quadruple Barrel", points: 10, summary: "Holds up to 4 shells. Needs Triple Barrel." },
         { name: "Quintuple Barrel", points: 10, summary: "Holds up to 5 shells. Needs Quadruple Barrel." },
         { name: "Advanced Melding", points: 10, summary: "-1 Burden (min 0) if at least one other artifice in your combat Burden also has this mod (applies once). Not for artifices that are their own weapon (e.g. Power Gauntlets)." },
         { name: "Superior Melding", points: 10, summary: "Another -1 Burden on the same terms. Needs Advanced Melding." },
         { name: "Perfect Melding", points: 10, summary: "Another -1 Burden on the same terms. Needs Superior Melding." } ] },
  summary: [ "Mods any artifice can take (the page lists A and B mods as empty; all are C mods)." ]
});

IT("universal-crafting-mods", {
  name: "Universal Crafting Mods", url: "https://rpg.angelssword.com/game/0.13.2/items/universal-crafting-mods",
  checked: "2026-10-22", version: "0.13.2", category: "Crafting", tag: "Mods", reference: true,
  cost: null, burden: null,
  mods: { A: [ { name: "Westrian Style Tool", points: 10, summary: "Don't roll: take 5 on every d10 crafting roll." },
               { name: "Sylvan Style Tool", points: 20, summary: "+1 to crafting rolls while the crafting points are 30 or less." },
               { name: "Cross Peen Hammer", points: 30, summary: "Crafting two identical one-handed weapons (same mods and materials): use double materials and one crafting attempt for the pair." },
               { name: "Kiraran Style Tool", points: 30, summary: "Reroll any one die right after seeing the crafting result." } ],
          B: [ { name: "Expertise", points: 80, summary: "+1 to crafting checks for one armor group, weapon group (or tools) or other valid expertise." } ] },
  summary: [ "Mods for crafting tools." ]
});

IT("universal-translator", {
  name: "Universal Translator", url: "https://rpg.angelssword.com/game/0.13.2/items/universal-translator",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 1500, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per day" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Parley Mode", points: 20, summary: "Translates everything spoken near it, for two-way conversation." } ],
          B: [ { name: "Voice Amplification", points: 50, summary: "Also amplifies the speaker so they're heard at long range, as if shouting." } ] },
  summary: [ "Speak into the box while it's on and everyone who hears you understands, whatever the language. Doesn't work for creatures without a real language (e.g. animals)." ]
});

IT("universal-weapon-mods", {
  name: "Universal Weapon Mods", url: "https://rpg.angelssword.com/game/0.13.2/items/universal-weapon-mods",
  checked: "2026-10-22", version: "0.13.2", category: "Crafting", tag: "Mods", reference: true,
  cost: null, burden: null,
  mods: {
    A: [ { name: "Ninja Weapon", points: 10, summary: "Counts as a weapon usable for Ninjutsu." },
         { name: "Quickdraw", points: 10, summary: "Draw it for 0 AP." },
         { name: "Versatile", points: 10, summary: "One-handed weapon from a group with a two-handed version (e.g. Axe, not Small Weapons): +1 Burden, usable one- or two-handed; declare at the start of your turn before attacking." },
         { name: "Perfect Balance", points: 20, summary: "When dual wielding, you can still make the dual-wield attack with your other weapon after a Heavy or Precise attack with this one." },
         { name: "Gathering", points: 35, summary: "+1 to gathering rolls it's used in (only if it's a gathering tool)." },
         { name: "Surprise Weapon", points: 35, summary: "Looks like a mundane object. Once per combat, the first basic Light/Heavy attack with it after drawing it that round gains Trick Attack (not again that combat, even with another Surprise or Hidden weapon)." } ],
    B: [ { name: "Perfect Edge", points: 25, summary: "A natural 20 on accuracy gains Sure Hit (if you use this, the attack loses any Full Pierce)." },
         { name: "Momentum", points: 25, summary: "After downing or killing an enemy, Sidestep up to your speed toward another enemy as part of that action." },
         { name: "Gathering II", points: 80, summary: "Another +1 to gathering rolls (stacks with Gathering)." } ],
    Alloy: [ { name: "Barrier Weaving (Arcanium, A)", points: 20, summary: "Shields you apply count the stat they scale from as 1 higher." },
             { name: "Burning Weapon (Salachar, B)", points: 50, summary: "First basic attack each round inflicts Burning 18 on damage until the start of your next turn." },
             { name: "Slowing Weapon (Ghimslag or Glacite, B)", points: 50, summary: "First basic attack each round Slows on damage until the start of your next turn." },
             { name: "Thundering Weapon (Fulgorite, B)", points: 25, summary: "First basic attack each round inflicts Static 18 on damage." },
             { name: "Conductor (Fulgorite, B)", points: 50, summary: "Lightning damage against a Soaked target gains Half Pierce." },
             { name: "Shining Weapon (Luxaeterna, A)", points: 10, summary: "Bright light in a 60ft radius; toggle for 1 AP." },
             { name: "Healer Weapon (Luxaeterna, A)", points: 20, summary: "Your heals count the stat they scale from as 1 higher." },
             { name: "Undead Slayer (Luxaeterna, B)", points: 50, summary: "Holy damage from it is always Full Pierce against undead (unless they resist Holy)." },
             { name: "Shielding Healer (Luxaeterna, B)", points: 50, summary: "Healing spells that cost mana also give the targets temporary HP = your Toughness until the start of your next turn." },
             { name: "Pushing Weapon (Sylphsteel, B)", points: 25, summary: "First basic attack each round pushes the target 10ft on damage." },
             { name: "Stealth Weapon (Corvuskite, B)", points: 25, summary: "Your first attack of an encounter with it doesn't break stealth." },
             { name: "Darkness Weapon (Corvuskite, B)", points: 80, summary: "If your first basic attack on your turn with it deals damage, hide from that target at once, even without cover." },
             { name: "Soaking Weapon (Vivanthal, B)", points: 50, summary: "First basic attack each round applies Soaked 6 on damage, until the target takes Lightning damage." } ],
    Flamellon: [ { name: "Aerial Supremacy (A, 1500 Aetherplume)", points: 30, summary: "+1 accuracy against flying creatures." },
                 { name: "Aerial Takedown (B, 2500 Aetherplume)", points: 50, summary: "Altitude a flying creature loses from your damage is doubled." },
                 { name: "Dazing Strike (B, 6000 Insect)", points: 80, summary: "If your first basic attack of a round deals damage, the target is Dazed." },
                 { name: "Distracting Strike (B, 4000 Insect)", points: 80, summary: "If your first basic attack of a round deals damage, the target loses any concentration effect." },
                 { name: "Vine Grab (B, 4000 Plant)", points: 80, summary: "If your first basic attack of a round damages a Slowed enemy, it's Rooted until the start of your next turn." },
                 { name: "Poison Weapon (A, 2000 Poison)", points: 10, summary: "Deals Poison damage." },
                 { name: "Venom Drip (A, 1500 Poison)", points: 30, summary: "+1 Full Pierce Earth (Poison) damage on hit (doesn't trigger on-damage effects)." },
                 { name: "Poisoned Sheath (B, 1250 Poison)", points: 25, summary: "Put a poison in the sheath; drawing the weapon applies it automatically." },
                 { name: "Gravity Disruption (B, 4000 Gravity)", points: 80, summary: "Melee only: damaging a target within 10ft gives it -4 on ranged attacks until the start of your next turn." },
                 { name: "Sticky Weapon (B, 2000 Spidersilk)", points: 50, summary: "Melee only: once per turn on a basic-attack hit, stick to the target and move with it (they can spend 2 AP to remove it); can't attack with it while stuck." } ] },
  summary: [ "Mods any weapon can take (crafting points after each name). Alloy mods need that alloy in the weapon; Flamellon mods need enough items of that Flamelic Polarity (shown in brackets).",
             "Gathering mods only matter if the weapon is a gathering tool." ]
});

IT("wand-one-handed", {
  name: "Wand (One-Handed)", url: "https://lyrian.splatpass.net/items/wand-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Channeling Weapon",
  cost: 500, burden: 1,
  weapon: { group: "Wands", hands: 1, range: "60ft", ranged: true, property: "Magic Blast" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Ornamental", points: 10, summary: "Also usable as a minor item (instrument, parasol, etc.)." },
               { name: "Echo Blast", points: 20, summary: "Basic Heavy attack: split the damage between two targets in range with one accuracy check." },
               { name: "Warding Wand", points: 35, summary: "1 AP: 5 temporary HP until the start of your next turn." } ],
          B: [ { name: "Dedicated Focus", points: 50, summary: "+1 accuracy, but only fires one chosen element; spells through it get the bonus only if they deal that element." },
               { name: "Mana Core", points: 80, summary: "When an attack or spell through it deals maximum damage to an enemy, your next spell this turn costs 1 less mana (min 0)." } ] },
  summary: [ "Magic Blast: 0 AP, change an attack's damage type to an element you've mastered or one built into the wand (every wand has at least one)." ]
});

IT("wand-two-handed", {
  name: "Wand (Two-Handed)", url: "https://rpg.angelssword.com/game/0.13.2/items/wand--two-handed-",
  checked: "2026-10-22", version: "0.13.2", category: "Equipment", tag: "Channeling Weapon",
  cost: 1000, burden: 2,
  weapon: { group: "Wands", hands: 2, range: "120ft", ranged: true, property: "Magic Blast" },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Ornamental", points: 10, summary: "Can also be used as one minor item, like an instrument or parasol." },
               { name: "Echo Blast", points: 20, summary: "Basic Heavy attack: split the damage between two targets in range with one accuracy check." },
               { name: "Warding Wand", points: 35, summary: "1 AP: 5 temporary HP until the start of your next turn." } ],
          B: [ { name: "Mana Surge", points: 25, summary: "Once per round after casting a spell, a Light attack for 0 AP (two-handed wand only; counts as your dual-wield attack)." },
               { name: "Dedicated Focus", points: 50, summary: "+1 accuracy, but it fires only one element; spells through it get the bonus only if they deal that element." },
               { name: "Mana Core", points: 80, summary: "Max damage with it (or a spell through it) against an enemy: your next spell this turn costs 1 less mana (min 0)." } ] },
  summary: [ "Magic Blast: for 0 AP, change an attack's damage type to an element you've mastered or one built into the wand (every wand has at least one). Range 120ft." ]
});

IT("water-balloon", {
  name: "Water Balloon", url: "https://rpg.angelssword.com/game/0.13.2/items/water-balloon",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 100, burden: 1, activation: "1 AP",
  crafting: { points: 25, discipline: "Alchemy", materials: "200 Alchemy units, 1x Common Water" },
  summary: [ "Throw up to 40ft: bursts in a 5ft radius and gives Soaked 5 to everyone in it." ]
});

IT("weak-spider-poison", {
  name: "Weak Spider Poison", url: "https://rpg.angelssword.com/game/0.13.2/items/weak-spider-poison",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 150, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "300 Alchemy units, 150 units of Spidersilk" },
  summary: [ "Contact poison for a weapon; lasts 2 hits or 1 minute (6 rounds). On damage the enemy is Dazed; if already Dazed they take 8 full-pierce Poison damage instead. Affects one enemy at most twice per round." ]
});

IT("weak-wyvern-poison", {
  name: "Weak Wyvern Poison", url: "https://rpg.angelssword.com/game/0.13.2/items/weak-wyvern-poison",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Poison",
  cost: 150, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "230 Alchemy units, 2x Common Earth" },
  summary: [ "Contact poison for a weapon; lasts 1 hit or 1 minute (6 rounds). On damage the enemy is poisoned: the next time they move their full distance in one action, they take 3d6 full-pierce Poison damage." ]
});

IT("web-flask", {
  name: "Web Flask", url: "https://rpg.angelssword.com/game/0.13.2/items/web-flask",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Flask",
  cost: 500, burden: 1, activation: "1 AP",
  crafting: { points: 35, discipline: "Alchemy", materials: "400 Alchemy units, 1x Rare Wind, 1x Rare Earth" },
  summary: [ "Throw up to 40ft: a 20ft x 20ft area of sticky web until the start of your next turn. Walking through it Slows; ending a turn in it Roots until the start of that creature's next turn." ]
});

IT("whip-one-handed", {
  name: "Whip (One-Handed)", url: "https://lyrian.splatpass.net/items/whip-one-handed/",
  checked: "2026-10-21", version: "0.13.2", category: "Equipment", tag: "Specialized Weapon",
  cost: 750, burden: 1,
  weapon: { group: "Whips", hands: 1, range: "10ft", property: "Whip Crack", specialized: true },
  crafting: { points: 30, discipline: "Carpentry" },
  mods: { A: [ { name: "Barbed Wire", points: 10, summary: "Crits apply Bleeding." },
               { name: "Fluttering Ribbon", points: 35, summary: "At the start of your turn you may set your threatened range to 5-10ft until your next turn." } ],
          B: [ { name: "Binding Flow", points: 50, summary: "When a Heavy attack deals damage, you may deal none and set the creature's speed to 0 until your next turn or until you move. Not on bosses or creatures larger than you." },
               { name: "Hooked Coil", points: 80, summary: "When an attack of opportunity damages an enemy leaving your range, pull it back 5ft, once per turn." } ] },
  summary: [ "Whip Crack: +5ft range on weapon attacks; attacks at max range (10ft base) deal +1 damage. Threatened range stays 5ft." ]
});

IT("wind-bubble", {
  name: "Wind Bubble", url: "https://rpg.angelssword.com/game/0.13.2/items/wind-bubble",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 1000, burden: 1, activation: "1 AP or 1 RP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Activation", points: 20, summary: "Costs 1 AP or 1 RP less (minimum 0)." } ],
          B: [ { name: "Slow Fall", points: 25, summary: "Fall at 20ft per round." },
               { name: "Underwater Mode", points: 50, summary: "Underwater, the bubble gives you air as you slowly float up." } ] },
  summary: [ "Worn or held. A bubble of wind slows your fall to 40ft per round; land inside it and you take no fall damage." ]
});

IT("winged-backpack", {
  name: "Winged Backpack", url: "https://rpg.angelssword.com/game/0.13.2/items/winged-backpack",
  checked: "2026-10-22", version: "0.13.2", category: "Artifice", tag: "Assist",
  cost: 2000, burden: 1, activation: "1 AP",
  fuel: { shell: "S", usage: "1 shell per use" },
  crafting: { points: 30, discipline: "Artificing" },
  mods: { A: [ { name: "Quick Activation", points: 20, summary: "Costs 1 AP less (minimum 0)." } ],
          B: [ { name: "Hover Mode", points: 80, summary: "Fly at half speed up to 40ft high (glide down to 40ft if higher). Works like the Flight ability for taking damage while flying." } ] },
  summary: [ "Holds as much as a normal backpack. Activate: wings fold out, you fall only 15ft per round and can move sideways normally; no fall damage if you land with them out. Lasts 5 minutes or until you land." ]
});

IT("wolf", {
  name: "Wolf", url: "https://lyrian.splatpass.net/items/wolf/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 3000, burden: 0,
  mount: { size: "Large", hp: 25, Focus: 4, Power: 4, Agility: 3, Toughness: 3, speed: "25ft", lineMovement: false },
  summary: [ "Topple Prey: 2 AP, the wolf makes a Light attack (using its stats); on damage the target is knocked Prone. +2 to hit per ally (other than you) within 5ft of the target." ]
});

IT("wolverine-elixir", {
  name: "Wolverine Elixir", url: "https://rpg.angelssword.com/game/0.13.2/items/wolverine-elixir",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Elixir",
  cost: 1250, burden: 1, activation: "1 AP",
  crafting: { points: 58, discipline: "Alchemy", materials: "2050 Alchemy units, 1x Mystic Earth, 1x Rare Fire" },
  summary: [ "Take 11 true damage. Until the encounter ends you suffer no injuries except a Mortal Wound (you still lose HP and are still downed at 0 HP)." ]
});

IT("wyvern", {
  name: "Wyvern", url: "https://lyrian.splatpass.net/items/wyvern/",
  checked: "2026-10-21", version: "0.13.2", category: "Mount", tag: "Mount",
  cost: 10000, burden: 0,
  mount: { size: "Large", hp: 75, Focus: 4, Power: 6, Agility: 3, Toughness: 6, speed: "40ft (20ft on ground only)", lineMovement: "While flying" },
  summary: [ "Flying Mount: flies, straight-line movement only while flying; 20ft on the ground with no straight-line limit.",
             "In-Flight Vulnerability: taking damage while flying drops it 20ft; reaching the ground Roots it and it can't fly until the end of your next turn.",
             "Breath Weapon: 1 AP, Light attack against all enemies in a 30ft cone using the mount's stats; damage type by wyrm type." ]
});

IT("xl-healing-potion", {
  name: "XL Healing Potion", url: "https://rpg.angelssword.com/game/0.13.2/items/xl-healing-potion",
  checked: "2026-10-22", version: "0.13.2", category: "Alchemy", tag: "Potion",
  cost: 1000, burden: 1, activation: "0 AP, 6 Mana",
  crafting: { points: 55, discipline: "Alchemy", materials: "1800 Alchemy units, 1x Mystic Fire" },
  summary: [ "Heal 45 HP." ]
});
