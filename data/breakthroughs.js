// Lyrian Chronicles Character Planner - Breakthrough Data
// Source: https://lyrian.splatpass.net/breakthroughs/ (Static edition of Lyrian Chronicles 0.13.2)
// Built from scratch. Every record is page-checked against its own breakthrough page.
// Records are kept in alphabetical order. Anything that did not load is marked "MISSING".
//
// HOW TO READ A RECORD
//  - cost: EXP price exactly as shown (number). costNote explains any scaling on repeat purchases.
//  - Breakthroughs are bought with EXP only (no IP, no class tree). Characters get 300 EXP at
//    creation that can ONLY be spent here (not added to Spirit Core; unspent is lost).
//  - Each can be taken once unless "repeatable" says otherwise.
//  - race: list of race ids that may take it (null = anyone). A main-race id (e.g. "fae") means
//    any sub-race of that race qualifies; a sub-race id (e.g. "pixie") means only that sub-race.
//  - creationOnly: true = must be taken at character creation.
//  - requires: prerequisites exactly as the page states them (null = none listed).
//  - grants: machine-friendly effects for the planner (stats, mana, proficiencies, class unlocks...).
//  - "summary" is plain English written for this tool, NOT the official wording. Open questions
//    live in ISSUES.md.

window.LC = window.LC || {};
LC.breakthroughs = LC.breakthroughs || {};

function BT(id, rec){
  rec.id = id;
  LC.breakthroughs[id] = rec;
}

BT("8-eyes-spiderfolk", {
  name: "8 Eyes (Spiderfolk)", url: "https://lyrian.splatpass.net/breakthroughs/8-eyes--spiderfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["spiderfolk"], creationOnly: false, repeatable: false,
  requires: "Must be a spiderfolk.",
  grants: { mysticEyeSlots: 8 },
  summary: [ "You can have up to 8 Mystic Eyes instead of the normal 2." ]
});

BT("angelblooded-human-restricted", {
  name: "Angelblooded (Human) (Restricted)", url: "https://lyrian.splatpass.net/breakthroughs/angelblooded--human---restricted-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: ["human"], creationOnly: false, repeatable: false, restricted: true,
  requires: "Must be a human and only a human. Requires GM Approval",
  grants: { classAccess: "angelblooded" },
  summary: [ "You have angel blood: you may buy the Angelblooded class. GM approval needed." ]
});

BT("arachne-spiderfolk", {
  name: "Arachne (Spiderfolk)", url: "https://lyrian.splatpass.net/breakthroughs/arachne--spiderfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: ["spiderfolk"], creationOnly: true, repeatable: false,
  requires: "Must be a spiderfolk. Can only be taken at character creation.",
  grants: { size: "Large", burden: 2, losesAbility: "extra-arms" },
  summary: [
    "Lose Extra Arms. You become Large: max Burden +2, 5ft-wide spaces are difficult terrain, many humanoid buildings are hard to enter, -10 to swimming checks.",
    "Spider Climb works at full speed instead of half. You count as mounted for abilities that need it (but can't be a mount for others)."
  ]
});

BT("become-fire-salamander", {
  name: "Become Fire (Salamander)", url: "https://lyrian.splatpass.net/breakthroughs/become-fire--salamander-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["salamander"], creationOnly: false, repeatable: false,
  requires: "Must be a Salamander.",
  summary: [ "Consume Fire costs 0 RP." ]
});

BT("become-ice-yuki-onna", {
  name: "Become Ice (Yuki-Onna)", url: "https://lyrian.splatpass.net/breakthroughs/become-ice--yuki-onna-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["yuki-onna"], creationOnly: false, repeatable: false,
  requires: "Must be a Yuki-Onna.",
  summary: [ "Absorb Ice costs 0 RP the first time you use it each round; this resets when your turn comes." ]
});

BT("become-lightning-raijin", {
  name: "Become Lightning (Raijin)", url: "https://lyrian.splatpass.net/breakthroughs/become-lightning--raijin-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["raijin"], creationOnly: false, repeatable: false,
  requires: "Must be a Raijin Youkai.",
  summary: [ "Consume Lightning costs 0 RP the first time you use it each round; resets when your turn comes. Its Power bonus doesn't stack with itself." ]
});

BT("become-wind-sylph", {
  name: "Become Wind (Sylph)", url: "https://lyrian.splatpass.net/breakthroughs/become-wind--sylph-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["sylph"], creationOnly: false, repeatable: false,
  requires: "Must be a Sylph Fae.",
  summary: [ "Consume Wind costs 0 RP the first time you use it each round; resets when your turn comes." ]
});

BT("blend-in-slimefolk", {
  name: "Blend In (Slimefolk)", url: "https://lyrian.splatpass.net/breakthroughs/blend-in--slimefolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["slimefolk"], creationOnly: false, repeatable: false,
  requires: "Must be a Slimefolk.",
  summary: [
    "Magically look like one other race, chosen when you take this (can't change later or at will). +30 to hide the magic from detection.",
    "The first Slime Body you use while disguised costs 0 RP instead of 1 but reveals your race. No discount if the attacker already knows you're Slimefolk."
  ]
});

BT("blend-in-ii-slimefolk", {
  name: "Blend In II (Slimefolk)", url: "https://lyrian.splatpass.net/breakthroughs/blend-in-ii--slimefolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 25, race: ["slimefolk"], creationOnly: false, repeatable: true,
  costNote: "25 EXP each time; page doesn't say the cost rises.",
  requires: "Must have Blend In.",
  summary: [ "Blend In can also disguise you as one more race. Each purchase adds a new race." ]
});

BT("blessed-by-kari-human", {
  name: "Blessed by Kari (Human)", url: "https://lyrian.splatpass.net/breakthroughs/blessed-by-kari--human-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["human"], creationOnly: false, repeatable: false,
  requires: "Must be a Human.",
  summary: [ "After using Divine Providence, you can use it a second time before resting, for 1 RP. The second use must pick a different option." ]
});

BT("bully", {
  name: "Bully", url: "https://lyrian.splatpass.net/breakthroughs/bully/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 50, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "+5 to Intimidation checks against targets with less Fitness than you." ]
});

BT("celestial-dragon-ryujin", {
  name: "Celestial Dragon (Ryujin)", url: "https://lyrian.splatpass.net/breakthroughs/celestial-dragon--ryujin-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: ["ryujin"], creationOnly: true, repeatable: false,
  requires: "Must be a Ryujin. Can only be taken at character creation.",
  grants: { ability: "Flight", masteryChoicesAdd: ["Holy", "Dark"] },
  summary: [ "Ryujin's Mastery can also be Holy or Dark. You gain the Flight ability (same as Harpy/Tengu Flight)." ]
});

BT("combat-doggy-cu-sith", {
  name: "Combat Doggy (Cu Sith)", url: "https://lyrian.splatpass.net/breakthroughs/combat-doggy--cu-sith-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["cu-sith"], creationOnly: false, repeatable: false,
  requires: "Must be a Cu Sith.",
  summary: [ "In Dog Form you can use your abilities and one-handed weapons (abilities needing specific armor or other physical requirements still can't be used). Dog Form no longer ends when you take damage." ]
});

BT("combat-kitty-cait-sith", {
  name: "Combat Kitty (Cait Sith)", url: "https://lyrian.splatpass.net/breakthroughs/combat-kitty--cait-sith-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["cait-sith"], creationOnly: false, repeatable: false,
  requires: "Must be a Cait Sith.",
  summary: [ "In Cat Form you can use your abilities and one-handed weapons (abilities needing specific armor or other physical requirements still can't be used). Cat Form no longer ends when you take damage." ]
});

BT("curse-of-vampirism", {
  name: "Curse of Vampirism", url: "https://lyrian.splatpass.net/breakthroughs/curse-of-vampirism/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: false, repeatable: false,
  timing: "At character creation, or after being killed by a vampire's bite.",
  requires: "Must be taken at character creation or after being killed by a vampire's bite.",
  grants: { classUnlocked: "vampire", darkvision: 60 },
  summary: [
    "Your race becomes Vampire (you keep your old race's benefits). You gain the Vampire class and its key ability at once. You stop aging; pale skin and fangs; you still eat, drink and breathe.",
    "Food (incl. potions) and resting no longer restore mana, and you can't use Draw Mana; mana still fully refills at the start of a new arc.",
    "Each round in sunlight without protection: 10 true damage and max HP -10 until you rest. A parasol or similar held in one hand protects you, even in combat.",
    "You only get Wounds if the damage that drops you to 0 HP is fire, holy or true damage. 60ft Darkvision."
  ]
});

BT("deep-connection", {
  name: "Deep Connection", url: "https://lyrian.splatpass.net/breakthroughs/deep-connection/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 50, race: null, creationOnly: false, repeatable: false,
  requires: "Cavalier mastered.",
  summary: [ "Command your mount to move and attack even when you're not riding it, paying AP, Mana etc. as if mounted." ]
});

BT("deus-ex-machina", {
  name: "Deus Ex Machina", url: "https://lyrian.splatpass.net/breakthroughs/deus-ex-machina/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 600, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "The first time you'd die from a mortal wound at Encounter Conclusion, the mortal wound becomes a normal injury instead. Then the benefit is used up and you can't take this breakthrough again." ]
});

BT("divine-luck-i", {
  name: "Divine Luck I", url: "https://lyrian.splatpass.net/breakthroughs/divine-luck-i/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "Once per rest, roll an extra die on a check and keep the higher result." ]
});

BT("divine-luck-ii", {
  name: "Divine Luck II", url: "https://lyrian.splatpass.net/breakthroughs/divine-luck-ii/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 600, race: null, creationOnly: false, repeatable: false,
  requires: "Must have purchased Divine Luck I.",
  summary: [ "Once per arc, automatically succeed on a check (if success is possible)." ]
});

BT("divine-s-chosen", {
  name: "Divine's Chosen", url: "https://lyrian.splatpass.net/breakthroughs/divine-s-chosen/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: null,
  options: { label: "Divine (choose one - see LC.divines)", list: "LC.divines" },
  summary: [
    "Choose one divine to worship (changing later needs GM approval after a significant change).",
    "Abilities with the Divine keyword deal your divine's damage type instead of their listed type. Also an entry route for Acolyte (\"Divine's Chosen breakthrough\")."
  ]
});

BT("drag-along-lamia", {
  name: "Drag along (Lamia)", url: "https://lyrian.splatpass.net/breakthroughs/drag-along--lamia-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["lamiafolk"], creationOnly: false, repeatable: false,
  requires: "Must be a Lamia.",
  summary: [ "While Just a hug is active you can move at half speed despite the root (still Rooted for everything else), dragging the hugged target along (it stays Rooted where it ends up). Grapple power +1." ]
});

BT("dual-personality", {
  name: "Dual Personality", url: "https://lyrian.splatpass.net/breakthroughs/dual-personality/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "While under Charm, Illusion or another mind-influencing effect, spend 1 AP to switch to another personality inside you and act normally. Once per encounter." ]
});

BT("early-ascension", {
  name: "Early Ascension", url: "https://lyrian.splatpass.net/breakthroughs/early-ascension/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: true, repeatable: false,
  requires: "Must be taken at character creation.",
  grants: { countsAsMasteredClasses: 1, onlyFor: "Tier 2 'Any class mastered' requirements" },
  summary: [ "Counts as one mastered class for tier 2 classes that need 'Any class mastered' (or similar). Doesn't satisfy a specific named class or other requirements like weapon proficiency." ]
});

BT("elemental-affinity", {
  name: "Elemental Affinity", url: "https://lyrian.splatpass.net/breakthroughs/elemental-affinity/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 150, race: null, creationOnly: false, repeatable: true,
  costNote: "150 EXP each time; different element each time.",
  requires: null,
  grants: { mastery: "CHOICE" },
  summary: [ "Gain Elemental Mastery in an element of your choice. Can be taken again for a different element." ]
});

BT("elemental-breath-ryujin", {
  name: "Elemental Breath (Ryujin)", url: "https://lyrian.splatpass.net/breakthroughs/elemental-breath--ryujin-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["ryujin"], creationOnly: false, repeatable: false,
  requires: "Must be a Ryujin.",
  summary: [ "Dragon's Breath can deal the damage of any element you have mastered." ]
});

BT("elixir-addict", {
  name: "Elixir Addict", url: "https://lyrian.splatpass.net/breakthroughs/elixir-addict/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false, drawback: true,
  requires: "Must have used at least 3 elixirs in the same encounter.",
  removal: "Spend 1 IP during an interlude phase.",
  summary: [ "Drawback-style breakthrough. At the end of your combat turn, if no Elixir is active, take 6 true damage. Drinking elixirs costs 11 less HP." ]
});

BT("expert-summoner", {
  name: "Expert Summoner", url: "https://lyrian.splatpass.net/breakthroughs/expert-summoner/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: "At least 1 of Summoner, Mogul, Animal Summoner or Necromancer maxed. 3000+ Spirit Core",
  summary: [
    "When you summon in round 1 or 2 of an encounter, you may move main-stat points (Focus, Power, Agility, Toughness) from yourself into the summon. Total pool = your total main stats - 18; no stat below 3.",
    "Your related maxes drop (Mana, HP, RP); lowering Agility/Toughness also costs that much RP/HP now. Lasts until the encounter ends or the summon dies/leaves; lost HP/Mana isn't refunded.",
    "Heroic summons can take any amount and get HP/RP etc. at the normal rate. Grunt summons take up to half the normal max and stay capped at 1 RP."
  ]
});

BT("fae-flash-acrobat-fae", {
  name: "Fae Flash Acrobat (Fae)", url: "https://lyrian.splatpass.net/breakthroughs/fae-flash-acrobat--fae-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 50, race: ["fae"], creationOnly: false, repeatable: false,
  requires: "Must be a Fae.",
  summary: [ "During Fae Flash you can stop partway and teleport again from there, several times, all within your max teleport distance and with no other actions in between." ]
});

BT("faerie-flash-master-fae", {
  name: "Faerie Flash Master (Fae)", url: "https://lyrian.splatpass.net/breakthroughs/faerie-flash-master--fae-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["fae"], creationOnly: false, repeatable: false,
  requires: "Must be a Fae.",
  summary: [ "When using Faerie Flash, spend X extra mana to add X times your movement speed to the teleport distance." ]
});

BT("faerie-chimera-hybrid-race", {
  name: "Faerie-Chimera Hybrid (Race)", url: "https://lyrian.splatpass.net/breakthroughs/faerie-chimera-hybrid--race-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["fae", "chimera"], creationOnly: true, repeatable: false,
  requires: "Must be chosen at character creation. Must choose Faerie or Chimera race.",
  grants: { hybrid: "faerie-chimera-hybrid" },
  summary: [
    "Rare (under 1%) hybrid. Chimera may pick a Fae sub-race; Fae may pick a Chimera sub-race. You keep only your main race's base traits, and gain the other race's language (dialect wording unclear on the page).",
    "Picking High Fae gives Fae Flash instead of Fae Flash II. Full details in LC.raceHybrids (races.js)."
  ]
});

BT("fast-metabolism", {
  name: "Fast Metabolism", url: "https://lyrian.splatpass.net/breakthroughs/fast-metabolism/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 150, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "Once per arc, eat food and get its benefits even if you already got food benefits that day." ]
});

BT("fast-movement-centaur", {
  name: "Fast Movement (Centaur)", url: "https://lyrian.splatpass.net/breakthroughs/fast-movement--centaur-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["centaur", "spiderfolk"], creationOnly: false, repeatable: false,
  requires: "Must be Centaur or Arachne Spiderfolk",
  requiresBreakthrough: "arachne-spiderfolk (if Spiderfolk)",
  grants: { speedBonus: 5 },
  summary: [ "Base movement speed +5ft." ]
});

BT("fearless", {
  name: "Fearless", url: "https://lyrian.splatpass.net/breakthroughs/fearless/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "Whenever you get a Fear-type condition, you may spend 1 RP or 0 AP to remove it." ]
});

BT("fight-and-flight-chimera", {
  name: "Fight and Flight (Chimera)", url: "https://lyrian.splatpass.net/breakthroughs/fight-and-flight--chimera-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["chimera"], creationOnly: false, repeatable: false,
  requires: "Must be a Chimera.",
  summary: [ "Fight or Flight no longer has its drawback (Fight: no RP loss; Flight: no AP recovery loss)." ]
});

BT("flesheater-jiangshi", {
  name: "Flesheater (Jiangshi)", url: "https://lyrian.splatpass.net/breakthroughs/flesheater--jiangshi-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["jiangshi"], creationOnly: false, repeatable: false,
  requires: "Must be a Jiangshi.",
  summary: [ "Consume Enemy can count as your food for the day, restoring mana like a normal ration. Not if you already got mana from food that day, and afterwards no food mana until you rest." ]
});

BT("flying-counter-kitsune", {
  name: "Flying Counter (Kitsune)", url: "https://lyrian.splatpass.net/breakthroughs/flying-counter--kitsune-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["kitsune"], creationOnly: false, repeatable: false,
  requires: "Must be a Kitsune.",
  summary: [ "Fading Counter lets you move up to your movement speed instead of 5ft, with Flight, without provoking attacks of opportunity." ]
});

BT("four-paw-sprint-catfolk", {
  name: "Four Paw Sprint (Catfolk)", url: "https://lyrian.splatpass.net/breakthroughs/four-paw-sprint--catfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["catfolk"], creationOnly: false, repeatable: false,
  requires: "Must be a Catfolk.",
  summary: [ "When you spend at least 3 AP on movement, your base speed is 40ft instead of 25ft." ]
});

BT("greatshield-training", {
  name: "Greatshield Training", url: "https://lyrian.splatpass.net/breakthroughs/greatshield-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: "You must be proficient with shields.",
  grants: { proficiency: "Greatshields" },
  summary: [ "Gain Greatshield proficiency." ]
});

BT("heavy-armor-training", {
  name: "Heavy Armor Training", url: "https://lyrian.splatpass.net/breakthroughs/heavy-armor-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: "You must be proficient with Light and Medium armor.",
  grants: { proficiency: "Heavy Armor" },
  summary: [ "Gain Heavy Armor proficiency." ]
});

BT("hide-behind-ally-pixie", {
  name: "Hide Behind Ally (Pixie)", url: "https://lyrian.splatpass.net/breakthroughs/hide-behind-ally--pixie-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: ["pixie"], creationOnly: false, repeatable: false,
  requires: "Must be a Pixie.",
  summary: [
    "While sharing a space with a conscious ally at least one size bigger, you may become untargetable by single-target attacks: when one targets you, redirect it to a willing ally in your space (they can react normally). After the first redirect, all others you could redirect are redirected automatically until the start of your next turn.",
    "While sharing a space with a conscious ally, 'failed to target you' effects like Challenge don't trigger. Doesn't work against Attacks of Opportunity."
  ]
});

BT("human-chimera-hybrid-race", {
  name: "Human-Chimera Hybrid (Race)", url: "https://lyrian.splatpass.net/breakthroughs/human-chimera-hybrid--race-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["human"], creationOnly: true, repeatable: false,
  requires: "Must be chosen at character creation. Must choose Human race.",
  grants: { hybrid: "human-chimera-hybrid" },
  summary: [ "Choose one Chimera sub-race and gain all its features. Keep Human base traits (incl. Divine Providence), not Chimera's. You lose the Human bonus 100 EXP and Human Adaptability." ]
});

BT("improved-demonic-divine-release-demon", {
  name: "Improved Demonic Divine Release (Demon)", url: "https://lyrian.splatpass.net/breakthroughs/improved-demonic-divine-release--demon-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: ["demon"], creationOnly: false, repeatable: false,
  requires: "Must be a Demon",
  summary: [ "When you activate Divine Release you may lower your max HP by 22 instead; then activating costs no HP and the HP Upkeep is 0 while you're above 0 HP. Below 0 HP the increased Upkeep applies as normal." ]
});

BT("in-sync-youkai", {
  name: "In Sync (Youkai)", url: "https://lyrian.splatpass.net/breakthroughs/in-sync--youkai-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["youkai"], creationOnly: false, repeatable: false,
  requires: "Must be a Youkai.",
  summary: [ "After using Spiritual Sync you may cancel it any time for 0 RP: either regain mana as Spiritual Sync describes, or regain 8 HP per leftover temporary mana. The max mana/HP you can spend on Spiritual Sync is doubled (to 6 mana / 48 HP)." ]
});

BT("kit-expert", {
  name: "Kit Expert", url: "https://lyrian.splatpass.net/breakthroughs/kit-expert/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "Reduce the Burden cost of one kit in your inventory by 2." ]
});

BT("language-training", {
  name: "Language Training", url: "https://lyrian.splatpass.net/breakthroughs/language-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: true,
  costNote: "100 EXP each time; different language each time.",
  requires: null,
  grants: { language: "CHOICE" },
  summary: [ "Learn one language of your choice (rare/dead languages may be off-limits - GM decides). Repeatable for different languages." ]
});

BT("large-specimen-nio-bullfolk-or-bearfolk", {
  name: "Large Specimen (Nio, Bullfolk or Bearfolk)", url: "https://lyrian.splatpass.net/breakthroughs/large-specimen--nio--bullfolk-or-bearfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["nio", "bullfolk", "bearfolk"], creationOnly: false, repeatable: false,
  requires: "Must be a Nio, Bullfolk or Bearfolk.",
  grants: { size: "Large" },
  summary: [ "Your size becomes Large." ]
});

BT("light-armor-training", {
  name: "Light Armor Training", url: "https://lyrian.splatpass.net/breakthroughs/light-armor-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 25, race: null, creationOnly: false, repeatable: false,
  requires: null,
  grants: { proficiency: ["Light Armor", "Shields"] },
  summary: [ "Gain Light Armor and shield proficiency." ]
});

BT("light-sleeper", {
  name: "Light Sleeper", url: "https://lyrian.splatpass.net/breakthroughs/light-sleeper/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 75, race: null, creationOnly: false, repeatable: false,
  requires: null,
  summary: [ "While asleep you can make Perception rolls as if awake." ]
});

BT("mark-of-conflict", {
  name: "Mark of Conflict", url: "https://lyrian.splatpass.net/breakthroughs/mark-of-conflict/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: "Must be an Unknown Paladin that follows Eisen. Must have the Mark of Justice ability.",
  summary: [ "Replaces Mark of Justice's effect (same range and AP cost): a marked enemy that moves away from you without moving toward another ally takes Full Pierce physical damage equal to your Power per 20ft moved away." ]
});

BT("medium-armor-training", {
  name: "Medium Armor Training", url: "https://lyrian.splatpass.net/breakthroughs/medium-armor-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 50, race: null, creationOnly: false, repeatable: false,
  requires: "You must be proficient with Light Armor",
  grants: { proficiency: "Medium Armor" },
  summary: [ "Gain Medium Armor proficiency." ]
});

BT("mental-torture-unseelie", {
  name: "Mental Torture (Unseelie)", url: "https://lyrian.splatpass.net/breakthroughs/mental-torture--unseelie-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["unseelie"], creationOnly: false, repeatable: false,
  requires: "Must be an Unseelie.",
  summary: [ "On a natural 20 accuracy roll you can apply Torture Techniques even if the enemy Dodges or Blocks." ]
});

BT("mixed-house-demon", {
  name: "Mixed House (Demon)", url: "https://lyrian.splatpass.net/breakthroughs/mixed-house--demon-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["demon"], creationOnly: false, repeatable: false,
  requires: "Must be a Demon.",
  grants: { extraDemonClan: 1 },
  summary: [ "Gain the benefit of one more Demon house (clan) of your choice." ]
});

BT("mystic-eyes-of-faerie-light-fae", {
  name: "Mystic Eyes of Faerie Light (Fae)", url: "https://lyrian.splatpass.net/breakthroughs/mystic-eyes-of-faerie-light--fae-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["fae"], creationOnly: false, repeatable: false,
  requires: "Must be a Fae.",
  grants: { classAccess: "faerie-light-eyes" },
  summary: [ "You may buy the Faerie Light Eyes class. +10 to Perception checks to tell if something is an illusion (you're still not immune to illusions)." ]
});

BT("natural-immunity-ratfolk", {
  name: "Natural Immunity (Ratfolk)", url: "https://lyrian.splatpass.net/breakthroughs/natural-immunity--ratfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["ratfolk"], creationOnly: false, repeatable: false,
  requires: "Must be Ratfolk",
  summary: [ "When you resist or are immune to a disease or poison, you may choose to carry it anyway with no effects on you, for its normal duration or until the encounter ends (whichever is shorter). Pairs with Plaguebringer." ]
});

BT("on-the-draw", {
  name: "On the draw", url: "https://lyrian.splatpass.net/breakthroughs/on-the-draw/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: null,
  grants: { initiative: 1 },
  summary: [ "+1 Initiative." ]
});

BT("organized-inventory", {
  name: "Organized Inventory", url: "https://lyrian.splatpass.net/breakthroughs/organized-inventory/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: null,
  grants: { burden: 1 },
  summary: [ "In-combat Burden capacity +1." ]
});

BT("organized-inventory-ii", {
  name: "Organized Inventory II", url: "https://lyrian.splatpass.net/breakthroughs/organized-inventory-ii/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: "Must have the Organized Inventory breakthrough",
  grants: { burden: 1 },
  summary: [ "In-combat Burden capacity +1 more." ]
});

BT("organized-inventory-iii", {
  name: "Organized Inventory III", url: "https://lyrian.splatpass.net/breakthroughs/organized-inventory-iii/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: false, repeatable: false,
  requires: "Must have the Organized Inventory II breakthrough",
  grants: { burden: 1 },
  summary: [ "In-combat Burden capacity +1 more." ]
});

BT("overrun-centaur", {
  name: "Overrun (Centaur)", url: "https://lyrian.splatpass.net/breakthroughs/overrun--centaur-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["centaur"], creationOnly: false, repeatable: false,
  requires: "Must be a Centaur.",
  summary: [ "While using Charge or Spear Charge, movement speed +5ft. If a Charge attack deals damage, the target is knocked Prone." ]
});

BT("panda-martial-arts-red-panda", {
  name: "Panda Martial Arts (Red Panda)", url: "https://lyrian.splatpass.net/breakthroughs/panda-martial-arts--red-panda-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["red-pandafolk"], creationOnly: false, repeatable: false,
  requires: "Must be Red Panda",
  summary: [ "Panda Stance can be held together with one other stance without either ending. Other stance-breaking rules still apply (e.g. entering two non-Panda stances)." ]
});

BT("photosynthesis-dryad", {
  name: "Photosynthesis (Dryad)", url: "https://lyrian.splatpass.net/breakthroughs/photosynthesis--dryad-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["dryad"], creationOnly: false, repeatable: false,
  requires: "Must be Dryad.",
  summary: [ "After at least 1 hour in direct sunlight you count as having eaten, and need no food or drink for 24 hours." ]
});

BT("power-saving-mode-ancient-marionette", {
  name: "Power Saving Mode (Ancient Marionette)", url: "https://lyrian.splatpass.net/breakthroughs/power-saving-mode--ancient-marionette-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["ancient-marionette"], creationOnly: false, repeatable: false,
  requires: "Must be an Ancient Marionette",
  summary: [ "If you're at max mana at mealtime, you only need half the normal amount to be well fed." ]
});

BT("powerful-ki-oni", {
  name: "Powerful Ki (Oni)", url: "https://lyrian.splatpass.net/breakthroughs/powerful-ki--oni-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: ["oni"], creationOnly: false, repeatable: false,
  requires: "Must be an Oni.",
  summary: [ "Gravitational Ki: +30ft range, push/pull distance up to 10ft further, and you may pay 1 AP instead of 1 RP." ]
});

BT("primary-stat-training", {
  name: "Primary Stat Training", url: "https://lyrian.splatpass.net/breakthroughs/primary-stat-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 400, race: null, creationOnly: false, repeatable: true,
  costScale: [400, 500, 600, 700], costNote: "Cost rises by 100 each time you take it, up to a max of 700 (400, 500, 600, then 700 every time after).",
  requires: null,
  grants: { statChoice: ["Focus", "Power", "Agility", "Toughness"], amount: 1 },
  summary: [ "+1 to Focus, Power, Agility or Toughness. Repeatable; effects stack." ]
});

BT("racial-flight", {
  name: "Racial Flight", url: "https://lyrian.splatpass.net/breakthroughs/racial-flight/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: ["phoenix", "mothfolk", "lizardfolk", "sylph", "willo-wisp"], creationOnly: false, repeatable: false,
  requires: "Must be Phoenix, Mothfolk, Lizardfolk, Sylph or Willowisp race.",
  grants: { ability: "Flight" },
  summary: [ "You can use Flight (same as Harpy/Tengu Flight)." ]
});

BT("rapid-flash-high-fae", {
  name: "Rapid Flash (High Fae)", url: "https://lyrian.splatpass.net/breakthroughs/rapid-flash--high-fae-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["high-fae"], creationOnly: false, repeatable: false,
  requires: "Must be a High Fae and have Fae Flash II.",
  summary: [ "Your Fae Flash gains the Rapid keyword (usable more than once per turn)." ]
});

BT("rich-parents", {
  name: "Rich Parents", url: "https://lyrian.splatpass.net/breakthroughs/rich-parents/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: true, repeatable: false,
  requires: "Must be taken at character creation.",
  grants: { clim: 3000 },
  summary: [ "Start with an extra 3,000 Clim." ]
});

BT("secondary-stat-training", {
  name: "Secondary Stat Training", url: "https://lyrian.splatpass.net/breakthroughs/secondary-stat-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: true,
  costNote: "200 EXP; page doesn't say repeats cost more (Primary Stat Training does scale).",
  requires: null,
  grants: { statChoice: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"], amount: 1 },
  summary: [ "+1 to Fitness, Cunning, Reason, Awareness or Presence. Repeatable; effects stack." ]
});

BT("skill-training", {
  name: "Skill Training", url: "https://lyrian.splatpass.net/breakthroughs/skill-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 25, race: null, creationOnly: false, repeatable: true,
  costNote: "25 EXP each time; no scaling stated.",
  requires: null,
  grants: { skillPoints: 1, orExpertisePoints: 2, excludes: "crafting skills" },
  summary: [ "Gain 1 skill point or 2 expertise points for a skill (not crafting skills). Repeatable; effects stack." ]
});

BT("skilled-flier", {
  name: "Skilled Flier", url: "https://lyrian.splatpass.net/breakthroughs/skilled-flier/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: "Must have Flight racial ability or Racial Flight breakthrough",
  summary: [ "When Flight would make you lose height from damage, spend 3 Mana to ignore that height loss until the start of your next turn. Height loss from other sources (e.g. Downburst) still applies." ]
});

BT("slime-summoner", {
  name: "Slime Summoner", url: "https://lyrian.splatpass.net/breakthroughs/slime-summoner/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: false,
  requires: "Must be a mastered Animal Summoner.",
  summary: [ "Summon Animal may summon a slime instead, rolled at random: Slime, Fire Slime, Earth Slime, Water Slime, Wind Slime or Mana Slime. Wildheart's choose-your-animal option can only pick the regular Slime." ]
});

BT("slow-starter", {
  name: "Slow Starter", url: "https://lyrian.splatpass.net/breakthroughs/slow-starter/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 300, race: null, creationOnly: true, repeatable: false,
  requires: "Must be taken at character creation.",
  grants: { startingClassExp: -200, expMultiplierAfterCreation: 2, untilReceivedExp: 500 },
  summary: [ "Start with 200 less EXP for classes/abilities. After creation all EXP you gain is doubled until you've received 500 EXP (1,000 after doubling)." ]
});

BT("small-doggy-cu-sith", {
  name: "Small Doggy (Cu Sith)", url: "https://lyrian.splatpass.net/breakthroughs/small-doggy--cu-sith-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: ["cu-sith"], creationOnly: false, repeatable: false,
  requires: "Must be a Cu Sith.",
  summary: [ "Dog Form makes you a small dog instead: lose 4 Guard and 8 Block (instead of 2 and 4), and gain +2 Size bonus to Evasion and Dodge (instead of +1)." ]
});

BT("small-specimen-cowfolk", {
  name: "Small Specimen (Cowfolk)", url: "https://lyrian.splatpass.net/breakthroughs/small-specimen--cowfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 25, race: ["cowfolk"], creationOnly: true, repeatable: false,
  requires: "Cowfolk only. Must be taken at character creation.",
  grants: { size: "Small" },
  summary: [ "Your size is Small instead of Medium." ]
});

BT("speciality-weapon-training", {
  name: "Speciality Weapon Training", url: "https://lyrian.splatpass.net/breakthroughs/speciality-weapon-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: null, creationOnly: false, repeatable: true,
  costNote: "100 EXP each time; different group each time.",
  requires: null,
  grants: { proficiency: "CHOICE: one Speciality (specialized) weapon group" },
  summary: [ "Gain proficiency with one Speciality weapon group (rulebook's specialized weapons: Pistol, Shotgun, Sniper Rifle, Saboteur Thread Daggers, Lance, Whip, Gauntlets, channeling and artisan weapons). Repeatable for a different group each time." ]
});

BT("summon-contract-fortuna-lady-luck", {
  name: "Summon Contract: Fortuna, Lady Luck", url: "https://lyrian.splatpass.net/breakthroughs/summon-contract--fortuna--lady-luck/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: "Must be a summoner and have visited the eidolon.",
  eidolon: { name: "Fortuna", lesser: "Jack of Hearts", channel: "Channel Eidolon: Draw Luck",
             pact: "You can never roll a natural 20 again - every 20 becomes 19.",
             attunement: "None",
             resummon: "Roll a natural 20 (before the pact reduces it) on an attack or skill check that has consequences for failure (GM decides).",
             stats: "MISSING - listed under Monsters" },
  summary: [ "Contract with the eidolon Fortuna (loves gambling on impossible odds). Attuning gives Channel Eidolon: Draw Luck; Lesser Eidolon is the Jack of Hearts." ]
});

BT("summon-contract-ixilune-the-swarm", {
  name: "Summon Contract: Ixilune, The Swarm", url: "https://lyrian.splatpass.net/breakthroughs/summon-contract--ixilune--the-swarm/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: "Must be a summoner and have visited the eidolon.",
  eidolon: { name: "Ixilune", lesser: "Devouring Swarm", channel: "Channel Eidolon: Distracting Swarm",
             pact: "You must eat 1.5x as much food to be fed.",
             attunement: "None",
             resummon: "Eat the flesh of a creature of the same main race.",
             stats: "MISSING - listed under Monsters" },
  summary: [ "Contract with the eidolon Ixilune (wants to consume everything). Attuning gives Channel Eidolon: Distracting Swarm; Lesser Eidolon is the Devouring Swarm." ]
});

BT("summon-contract-pipoltr-the-gardener", {
  name: "Summon Contract: Pipoltr, The Gardener", url: "https://lyrian.splatpass.net/breakthroughs/summon-contract--pipoltr--the-gardener/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 0, race: null, creationOnly: false, repeatable: false,
  requires: "Must be a summoner and have visited the eidolon.",
  eidolon: { name: "Pipoltr", lesser: "Rhinoceros Beetle", channel: "Channel Eidolon: Vine Wall Cover",
             pact: "1 Maximum Mana.",
             attunement: "None",
             resummon: "Spend 1 EP on one day of gardening work.",
             stats: "MISSING - listed under Monsters" },
  grants: { maxMana: -1 },
  summary: [ "Contract with the eidolon Pipoltr, a giant scarab who cares for nature. Attuning gives Channel Eidolon: Vine Wall Cover; Lesser Eidolon is the Rhinoceros Beetle. Pact costs 1 max mana." ]
});

BT("superior-escapist-rabbitfolk", {
  name: "Superior Escapist (Rabbitfolk)", url: "https://lyrian.splatpass.net/breakthroughs/superior-escapist--rabbitfolk-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["rabbitfolk"], creationOnly: false, repeatable: false,
  requires: "Must be a Rabbitfolk.",
  summary: [ "Escape Artist can also remove Rooted, not just grapples." ]
});

BT("tengu-defensive-aura-tengu", {
  name: "Tengu Defensive Aura (Tengu)", url: "https://lyrian.splatpass.net/breakthroughs/tengu-defensive-aura--tengu-/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 100, race: ["tengu"], creationOnly: false, repeatable: false,
  requires: "Must be a Tengu.",
  summary: [ "Astra corruption resistance +1 (your Spirit Core counts as 500 higher for corruption checks). No negative effects when your astra level is raised artificially (e.g. by Exousiai's ability)." ]
});

BT("the-unknown-paladin", {
  name: "The Unknown Paladin", url: "https://lyrian.splatpass.net/breakthroughs/the-unknown-paladin/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: "Must have the Divine's Chosen breakthrough.",
  grants: { meetsRequirement: "Human (Paladin classes)" },
  summary: [ "Non-humans meet the Human requirement for the Paladin classes (Sword, Shield, Gun Paladin). Smite and the Paladin holy-weapon key ability deal your chosen divine's damage type." ]
});

BT("third-eye", {
  name: "Third Eye", url: "https://lyrian.splatpass.net/breakthroughs/third-eye/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: null,
  grants: { mysticEyeSlots: 3 },
  summary: [ "You can have up to 3 Mystic Eyes instead of the normal 2." ]
});

BT("touched-by-death", {
  name: "Touched by Death", url: "https://lyrian.splatpass.net/breakthroughs/touched-by-death/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  timing: "At character creation, or after your HP has dropped below 0 in an encounter.",
  requires: "Must be taken at character creation or after your HP has dropped below 0 in an encounter.",
  grants: { classAccess: "shinigami-eyes" },
  summary: [ "You may buy the Shinigami Eyes class. For 1 AP you can see the HP % and any weak spots of all creatures for 1 turn." ]
});

BT("universal-training", {
  name: "Universal Training", url: "https://lyrian.splatpass.net/breakthroughs/universal-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 700, race: null, creationOnly: false, repeatable: true,
  costNote: "700 EXP; page doesn't say repeats cost more.",
  requires: null,
  grants: { mainStatChoice: 1, subStatChoice: 1, skillPoints: 5, excludes: "crafting and gathering skills" },
  summary: [ "+1 to any main stat, +1 to any sub stat, and 5 skill points for normal skills (not crafting or gathering). Repeatable; effects stack." ]
});

BT("weapon-training", {
  name: "Weapon Training", url: "https://lyrian.splatpass.net/breakthroughs/weapon-training/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 25, race: null, creationOnly: false, repeatable: true,
  costNote: "25 EXP each time; different group each time.",
  requires: null,
  grants: { proficiency: "CHOICE: one weapon group (not Speciality weapons)" },
  summary: [ "Gain proficiency with one weapon group (not Speciality weapons). Repeatable for a different group each time." ]
});

BT("wide-circuits-i", {
  name: "Wide Circuits I", url: "https://lyrian.splatpass.net/breakthroughs/wide-circuits-i/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 150, race: null, creationOnly: false, repeatable: false,
  requires: null,
  grants: { maxMana: 1 },
  summary: [ "Max mana +1." ]
});

BT("wide-circuits-ii", {
  name: "Wide Circuits II", url: "https://lyrian.splatpass.net/breakthroughs/wide-circuits-ii/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 175, race: null, creationOnly: false, repeatable: false,
  requires: "Must have the Wide Circuits breakthrough.",
  grants: { maxMana: 1 },
  summary: [ "Max mana +1 more." ]
});

BT("wide-circuits-iii", {
  name: "Wide Circuits III", url: "https://lyrian.splatpass.net/breakthroughs/wide-circuits-iii/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 200, race: null, creationOnly: false, repeatable: false,
  requires: "Must have the Wide Circuits II breakthrough.",
  grants: { maxMana: 1 },
  summary: [ "Max mana +1 more." ]
});

BT("wide-circuits-iv", {
  name: "Wide Circuits IV", url: "https://lyrian.splatpass.net/breakthroughs/wide-circuits-iv/",
  checked: "2026-10-21", version: "0.13.2",
  cost: 250, race: null, creationOnly: false, repeatable: true,
  costNote: "250 EXP; page doesn't say repeats cost more.",
  requires: "Must have the Wide Circuits III breakthrough",
  grants: { maxMana: 1 },
  summary: [ "Max mana +1 more. Repeatable; effects stack." ]
});

// ---------------------------------------------------------------------------
// DIVINES  (from Divine's Chosen - used by Divine-keyword abilities, The Unknown Paladin)
// ---------------------------------------------------------------------------
LC.divines = [
  { name: "Kari",         damage: "Holy",      domain: "Light",              note: "Most prominent deity; only serious religion with support outside Kirara." },
  { name: "Heira",        damage: "Astra",     domain: "Evil",               note: "Mostly cultists." },
  { name: "Pandora",      damage: "Arcane",    domain: "Magic",              note: "Few followers, a few broken-down shrines." },
  { name: "Makai",        damage: "Water",     domain: "Ocean",              note: "Mostly Houkaina and Kirara; main temple in Houkaina (Northi); merfolk." },
  { name: "Ayuzi Kirara", damage: "Fire",      domain: "Artisans",           note: "Most popular divine in Kirara." },
  { name: "Eisen",        damage: "Physical",  domain: "War",                note: "Mostly goblins and orcs in Eisenstadt; seen as 'old ways'." },
  { name: "Athena",       damage: "Lightning", domain: "Wind and Lightning", note: "Around Marlone Bay; sailors' gesture." },
  { name: "Clio",         damage: "Arcane",    domain: "Storytelling",       note: "Not officially followed; power from stories." },
  { name: "Yggdrasil",    damage: "Earth",     domain: "The world itself",   note: "Mostly Fae in Easter; not sentient; four undying thaumaturges." }
];
