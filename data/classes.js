// Lyrian Chronicles Character Planner - Class Data
// Source: https://lyrian.splatpass.net/classes/ (Static edition of Lyrian Chronicles 0.13.2)
// Rebuilt from scratch. Every record is page-checked against the official class page.
// Records are kept in alphabetical order. Anything that did not load is marked "MISSING".
//
// HOW TO READ A RECORD
//  - Numbers, costs, ranges, keywords, roles, tiers and skill/stat choices are exact from the page.
//  - "summary" fields are plain-English descriptions written for this tool, NOT the official
//    rules wording. For exact wording, open the class "url". Open questions live in ISSUES.md.

window.LC = window.LC || {};
LC.classes = LC.classes || {};

function CL(id, rec){
  rec.id = id;
  LC.classes[id] = rec;
}

// ---------------------------------------------------------------------------
// ABJURER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("abjurer", {
  name: "Abjurer",
  url: "https://lyrian.splatpass.net/classes/abjurer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Defender",
  secondary: null,
  requires: "Arcane Barrier learned, and at least 1 spell that deals damage.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "spell-challenge" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "abjurers-blast" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mana-shield" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "arcane-barrier-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "arcane-pull" }
  ],
  abilities: {
    "spell-challenge": {
      name: "Spell Challenge", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Hitting or targeting an enemy with a spell can put Challenge on them until the end of your next turn.",
        "Benefit 2: If an enemy you've Challenged provokes an attack of opportunity, you can use Abjurer's Blast instead. Light version costs 0 RP; Heavy or Precise costs 1 RP."
      ]
    },
    "abjurers-blast": {
      name: "Abjurer's Blast", kind: "ability",
      cost: "1 AP", range: "10ft", keywords: ["Rapid", "Spell", "Safe"], requires: null,
      summary: [
        "Arcane-damage attack: Light (1 AP), Heavy (2 AP) or Precise (2 AP)."
      ]
    },
    "mana-shield": {
      name: "Mana Shield", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start", "Shield"], requires: null,
      summary: [
        "Encounter Start: gain Temporary HP equal to the higher of Toughness + 3 or Focus + 3.",
        "Armor cuts it: Light armor to 2/3, Medium to 1/3, Heavy to 0.",
        "While active, casting spells doesn't provoke attacks of opportunity from enemies you've Challenged.",
        "Each turn start (rest of encounter): pay 1 Mana to refill it to max (armor reduction still applies).",
        "If not used at Encounter Start, can be activated for 1 AP + 1 Mana."
      ]
    },
    "arcane-barrier-ii": {
      name: "Arcane Barrier II", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Shield", "Spell", "Safe"],
      requires: "You're about to take damage.",
      summary: [
        "Barrier with HP = 15 + Focus and Guard = 0 + your Guard. Damage hits the barrier first; overflow goes to you.",
        "Lasts until your next turn starts, or until you take any action other than Block. Blocking while it's up also raises its Guard.",
        "Doesn't provoke attacks of opportunity. Doesn't stop true damage."
      ]
    },
    "arcane-pull": {
      name: "Arcane Pull", kind: "ultimate",
      cost: "1 RP", range: "40ft", keywords: ["Spell"],
      requires: "Target is challenged by you and attacking someone other than you.",
      summary: [
        "Pull the target to an empty square next to you; the move doesn't provoke.",
        "Your next Block or Dodge against that target before your next turn costs 0 RP.",
        "Doesn't provoke attacks of opportunity."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ACOLYTE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("acolyte", {
  name: "Acolyte",
  url: "https://lyrian.splatpass.net/classes/acolyte/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 3,
  role: "Healer",
  secondary: "Support",
  requires: "Divine's Chosen breakthrough, OR being Human.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "acolytes-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cure-touch" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Religion", "Magic", "History", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "lights-care" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "angels-embrace" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "miracle-sanctuary" }
  ],
  abilities: {
    "acolytes-journey": {
      name: "Acolyte's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { skill: "Religion", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency with Light Armor, Shields, and one common weapon group (that group may include one Channeling Weapon).",
        "Benefit 2: +5 Religion skill points; any point can be traded for 2 expertise points in Religion.",
        "Benefit 3: Establishments of your religion take you in and help with lodging, advice, food and sometimes equipment.",
        "Benefit 4: On mastering the class, gain Elemental Mastery in your Divine's element (Holy if you follow only a human deity)."
      ]
    },
    "cure-touch": {
      name: "Cure Touch", kind: "ability",
      cost: "2 AP, 3 MP", range: "Touch", keywords: ["Healing", "Spell"], requires: null,
      summary: [
        "Heal the target for 11 + (2 x Power)."
      ]
    },
    "lights-care": {
      name: "Light's Care", kind: "ability",
      cost: "1 MP", range: "Touch", keywords: ["Encounter Conclusion", "Healing"], requires: null,
      summary: [
        "Encounter Conclusion action: heal one target for 11 + (2 x Power) and give them First Aid.",
        "First Aid: the target can spend an Encounter Conclusion action to prevent one injury to themselves."
      ]
    },
    "angels-embrace": {
      name: "Angel's Embrace", kind: "ability",
      cost: "1 RP", range: "15ft", keywords: ["Shield", "Spell", "Aid", "Safe"],
      requires: "A creature other than you is attacked.",
      summary: [
        "Give the ally a Shield against the triggering attack that blocks 5 + (2 x Toughness) damage."
      ]
    },
    "miracle-sanctuary": {
      name: "Miracle: Sanctuary", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "5ft radius centered on self",
      keywords: ["Concentration", "Miracle", "Spell", "Upkeep", "Safe"], requires: null,
      summary: [
        "Create an immobile sphere around you that nothing can move into or out of. Sphere HP = 20 + (8 x Toughness).",
        "Attacks and magical effects can't cross it, and it blocks line of sight.",
        "Lasts until your next turn starts unless you pay 1 Mana Upkeep; ends early if its HP hits 0."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ADVENTURER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("adventurer", {
  name: "Adventurer",
  url: "https://lyrian.splatpass.net/classes/adventurer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Utility",
  secondary: "Striker",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "adventurer-essentials" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "power-jump" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING",
      summary: "+5 skill points in any non-crafting skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mana-razor" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "steel-aura" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-efficient-spirit-control" }
  ],
  abilities: {
    "adventurer-essentials": {
      name: "Adventurer Essentials", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "presence-concealment",
      refund: { overlapsWith: ["Saboteur (class)", "Demon - WI clan (race)"], amount: "half EXP",
                note: "Only if you already know the shared ability; apply lineage cost reduction first. Shared proficiencies alone don't count." },
      summary: [
        "Benefit 1: Proficiency in one common weapon group, plus one more common or specialized weapon group.",
        "Benefit 2: Proficiency in one armor category of your choice, OR Shields, OR Greatshields.",
        "Benefit 3: You can use Presence Concealment."
      ]
    },
    "presence-concealment": {
      name: "Presence Concealment", kind: "granted", grantedBy: "adventurer-essentials",
      cost: "4 AP", range: "Self", keywords: ["Presence Concealment", "Stealth"], requires: null,
      summary: [
        "Suppress your mana output to gain Presence Concealment.",
        "While concealed you can't use abilities that cost mana or have the Aura keyword.",
        "You can end it for 0 RP, but the no-mana/no-Aura restriction lasts until the end of your next turn."
      ]
    },
    "power-jump": {
      name: "Power Jump", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Jump", "Circuit"], requires: null,
      summary: [
        "Jump up to 60ft straight up, then up to 5ft horizontally.",
        "Unless flying, you drop straight down at the end of your turn. The fall doesn't provoke attacks of opportunity and deals no fall damage.",
        "Landing in an occupied square shunts you 5ft to an empty square (your original square if possible).",
        "While airborne you can't make non-teleport movement unless flying, but can still act (e.g. attack)."
      ]
    },
    "mana-razor": {
      name: "Mana Razor", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Overcharge", "Quick"], requires: null,
      summary: [
        "Until end of turn, your basic melee attacks gain +30ft range (+45ft with a Two-Handed melee weapon) and count as ranged attacks.",
        "Overcharge: spend 1 Mana to also apply it to basic ranged attacks; this removes the Quick keyword from them."
      ]
    },
    "steel-aura": {
      name: "Steel Aura", kind: "ability",
      cost: "0 RP, 2 MP", range: "Self", keywords: ["Aura", "Rage", "Circuit"], requires: null,
      summary: [
        "Gain +3 Guard.",
        "While active, the only RP actions you can use are Block and actions with the Rage keyword.",
        "End it any time for 0 RP; it also ends at the start of your next turn."
      ]
    },
    "secret-art-efficient-spirit-control": {
      name: "Secret Art: Efficient Spirit Control", kind: "ultimate",
      cost: "0 RP", range: "Self", keywords: ["Secret Art"], requires: null,
      summary: [
        "Your next non-healing keyword action costs 2 less Mana (minimum 0).",
        "Also resets your Circuits, so Circuit abilities can be used again at their reduced mana cost."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AERIAL MAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("aerial-mage", {
  name: "Aerial Mage",
  url: "https://lyrian.splatpass.net/classes/aerial-mage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 4,
  role: "Specialist",
  secondary: null,
  requires: "Mage, Artificer or Aeromancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "aerial-mage" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "take-off" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "airheart-gravity-turn" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "barrel-roll" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-arlan-heavens-fall-dive" }
  ],
  abilities: {
    "aerial-mage": {
      name: "Aerial Mage", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "aerial-mode-switch",
      summary: [
        "Benefit 1: You can use Aerial Mode Switch.",
        "Benefit 2: While grounded and riding an Aerial Stave, the Reload Artifice basic action reloads 2 shells instead of 1, even with full hands, drawing both shells in 1 action."
      ]
    },
    "aerial-mode-switch": {
      name: "Aerial Mode Switch", kind: "granted", grantedBy: "aerial-mage",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Rapid", "Aerial Mage"],
      requires: "Riding Aerial Staff.",
      summary: [
        "Switch between Hover mode and Aerial mode.",
        "Hover mode: you can make normal attacks one-handed, but your movement speed drops to 10ft.",
        "Aerial mode: you can only use airship weapons or actions with the Aerial Mage keyword."
      ]
    },
    "take-off": {
      name: "Take Off", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"],
      requires: "Aerial Stave in Combat Inventory",
      summary: [
        "Encounter Start: mount up and launch, rising a distance equal to double your movement.",
        "Can't be used if you're targeted by an attack during the Encounter Start round."
      ]
    },
    "airheart-gravity-turn": {
      name: "Airheart Gravity Turn", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Aerial Mage"],
      requires: "At least 30ft in the sky, on an aerial staff, in Aerial mode.",
      summary: [
        "Drop 25ft of altitude to instantly change direction. Usable mid-move; leftover movement continues in the new direction."
      ]
    },
    "barrel-roll": {
      name: "Barrel Roll", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Aerial Mage"],
      requires: "On an aerial staff and in Aerial mode.",
      summary: [
        "Take the Dodge action and strip Lock On from the incoming attack.",
        "Spend 1 more RP to make the attack automatically miss, even if it has Sure Hit."
      ]
    },
    "secret-art-arlan-heavens-fall-dive": {
      name: "Secret Art: Arlan Heaven's Fall Dive", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Self", keywords: ["Secret Art", "Sure Hit", "Full Pierce", "Strafe", "Aerial Mage"],
      requires: "Have 100 or more Strafe and have just lost 100ft of altitude. On an aerial staff in Aerial mode.",
      summary: [
        "Your next Airship shot gains Sure Hit and Full Pierce."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AEROMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("aeromancer", {
  name: "Aeromancer",
  url: "https://lyrian.splatpass.net/classes/aeromancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: "Controller",
  requires: "Any class mastered or Wind mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "wind-master" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "wind-blast" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "downburst" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "wind-scatter" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "wind-buffet" }
  ],
  abilities: {
    "wind-master": {
      name: "Wind Master", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "glide",
      grants: { mastery: "Wind" },
      refund: { overlapsWith: ["Windbringer", "Zephyr Warder"], amount: "full",
                note: "Page says a refund is possible and that Windbringer and Zephyr Warder also grant this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: You gain Wind Mastery.",
        "Benefit 2: You can use Glide."
      ]
    },
    "glide": {
      name: "Glide", kind: "granted", grantedBy: "wind-master",
      cost: "1 RP", range: "Self", keywords: ["Spell"], requires: null,
      summary: [
        "Your fall slows to 15ft per round and you can move horizontally as normal.",
        "Hitting the ground while gliding deals no fall damage and ends Glide."
      ]
    },
    "wind-blast": {
      name: "Wind Blast", kind: "ability",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Spell", "Wind"], requires: null,
      summary: [
        "Light Attack dealing Wind damage. On damage, push the target back 20ft.",
        "If pushed into a character or object, the target takes fall damage equal to the distance it didn't get to travel."
      ]
    },
    "downburst": {
      name: "Downburst", kind: "ability",
      cost: "2 AP, 1 MP", range: "720ft", keywords: ["Lock On", "Spell", "Wind"],
      requires: "Target must be Flying.",
      summary: [
        "Heavy Attack dealing Wind damage. On damage, the target plummets to the ground and takes fall damage.",
        "Abilities that normally negate fall damage can't negate this."
      ]
    },
    "wind-scatter": {
      name: "Wind Scatter", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Spell", "Wind"], requires: null,
      summary: [
        "Pick a point in range. Everything in a 15x15 area saves vs your Potency or is pushed 15ft away from that point.",
        "If pushed into a character or object, the target takes fall damage equal to the distance it didn't get to travel."
      ]
    },
    "wind-buffet": {
      name: "Wind Buffet", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "30ft cone", keywords: ["Spell", "Wind"], requires: null,
      summary: [
        "30ft cone, 60-degree spread. Each creature saves vs your Potency or is blown to the end of the cone and knocked Prone.",
        "Targets smaller than you roll with a 1d4 penalty; larger targets roll with a 1d4 bonus.",
        "If pushed into a character or object, the target takes fall damage equal to the distance it didn't get to travel."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AEROMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("aeromaster", {
  name: "Aeromaster",
  url: "https://lyrian.splatpass.net/classes/aeromaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: "Controller",
  requires: "Aeromancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "controlled-wind" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "wind-blast-ii" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "cyclone" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "downburst-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-razor-hurricane" }
  ],
  abilities: {
    "controlled-wind": {
      name: "Controlled Wind", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: When a Wind Spell pushes a target back or up, you choose whether to push the full maximum distance (instead of it always being the full distance)."
      ]
    },
    "wind-blast-ii": {
      name: "Wind Blast II", kind: "ability",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Spell", "Wind"], requires: null,
      summary: [
        "Light (1 AP), Precise (2 AP) or Heavy (2 AP) Attack dealing Wind damage. On damage, push the target back 20ft."
      ]
    },
    "cyclone": {
      name: "Cyclone", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Spell", "Wind"], requires: null,
      summary: [
        "Everything in a 15x15ft area saves vs your Potency. On a fail, it's knocked 10ft airborne and lands Prone."
      ]
    },
    "downburst-ii": {
      name: "Downburst II", kind: "ability",
      cost: "1 RP, 1 MP", range: "720ft", keywords: ["Lock On", "Spell", "Wind"],
      requires: "Target is knocked airborne or is Flying.",
      summary: [
        "Heavy Attack dealing Wind damage. On damage, the target plummets to the ground and takes fall damage.",
        "Abilities that normally negate fall damage can't negate this."
      ]
    },
    "secret-art-razor-hurricane": {
      name: "Secret Art: Razor Hurricane", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "30ft", keywords: ["Concentration", "Full Pierce", "Secret Art", "Spell", "Wind", "Scatter"],
      requires: null,
      summary: [
        "Create a spinning hurricane 15x15ft wide and 50ft tall at the target spot. Creatures inside take Wind Light Damage and are pushed out.",
        "Anything entering takes Wind Light Damage and saves vs your Potency or is pushed back 20ft. Leaving is free (no damage, no save).",
        "Upkeep: at the start of each turn pay 1 Mana + 2 AP or it ends. When you pay, you can move it up to 20ft; creatures it touches are treated as entering."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AETHERIE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("aetherie", {
  name: "Aetherie",
  url: "https://lyrian.splatpass.net/classes/aetherie/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Utility",
  secondary: "Support",
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mission-control" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "psychometry" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Magic", "Artifice", "Perception", "Insight", "Stealth", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "conduit" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "tap-cracker" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "spirit-circuit-crash" }
  ],
  abilities: {
    "mission-control": {
      name: "Mission Control", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "mind-connection",
      refund: { overlapsWith: ["Sheepfolk (race)"], amount: "half EXP",
                note: "Features aren't identical. Only if you already know the shared ability; apply lineage cost reduction first. Proficiency overlap alone doesn't count." },
      summary: [
        "Benefit 1: Proficiency with the Aetherie Sensory Station.",
        "Benefit 2: You can use Mind Connection."
      ]
    },
    "mind-connection": {
      name: "Mind Connection", kind: "granted", grantedBy: "mission-control",
      cost: "4 AP, 1 MP", range: "Touch", keywords: [], requires: null,
      summary: [
        "Link up to 5 willing people by touch. Linked creatures (and you) can talk telepathically.",
        "Lasts until you cancel it, but lowers your max Mana by 1 while active. Max range 500ft; going out of range pauses the link without ending it.",
        "While linked, spend 1 AP to see through one linked person's eyes. While doing so you're Blinded 5 for attacks not made through Conduit."
      ]
    },
    "psychometry": {
      name: "Psychometry", kind: "ability",
      cost: "4 AP, 1 MP", range: "Touch", keywords: ["Aura"], requires: null,
      summary: [
        "Touch a room's door to learn its layout and objects as if you could see in. Creatures inside show as blobs of light (brighter = more powerful).",
        "Also works on containers (backpacks, chests). Unlimited range if a Mind Connection-linked creature touches the door/container."
      ]
    },
    "conduit": {
      name: "Conduit", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "While Mind Connection is active, you can use some abilities through a linked creature; they become the origin point for range. You still pay the costs.",
        "Not usable with abilities needing a physical object (e.g. Mystic Eye powers, specific weapons, Snatch), physical attacks (e.g. Double Punch), or Self-range abilities.",
        "Non-Aetherie abilities used through Conduit cost +1 AP (or RP)."
      ]
    },
    "tap-cracker": {
      name: "Tap Cracker", kind: "ability",
      cost: "1 AP", range: "45ft", keywords: ["Overcharge"],
      requires: "Object is in a room affected by Psychometry",
      summary: [
        "Remotely open a door or interact with an object, including through a Mind Connection-linked creature.",
        "Overcharge: pay 1 Mana to magically unlock most doors/objects. The DM can rule an object too complex, requiring a Skill Check."
      ]
    },
    "spirit-circuit-crash": {
      name: "Spirit Circuit Crash", kind: "ultimate",
      cost: "2 AP", range: "45ft", keywords: ["Block Crush"], requires: null,
      summary: [
        "Jam the target's Spirit Circuits: no Secret Arts or mana abilities until the end of their next turn. No roll or save.",
        "The target can cancel it by taking damage equal to your heavy attack damage. Can be cast through a Mind Connection-linked creature. No effect on enemies without mana."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AGRARIAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("agrarian", {
  name: "Agrarian",
  url: "https://lyrian.splatpass.net/classes/agrarian/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Controller",
  requires: "Farmer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "expert-farmer" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "separate-wheat-from-chaff" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Farming"],
      summary: "+5 skill points in Farming. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "terracing" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "four-field-system" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "harvest-moon" }
  ],
  abilities: {
    "expert-farmer": {
      name: "Expert Farmer", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "expert-farmer-crafting",
      summary: [
        "Benefit 1: You can use the Agrarian core crafting abilities (Expert Farmer)."
      ]
    },
    "expert-farmer-crafting": {
      name: "Expert Farmer (crafting abilities)", kind: "granted", grantedBy: "expert-farmer",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Greater Infuse Qi", keywords: ["Rapid"],
          summary: "Upgrade one planted herb from rare to mystic; +20 to its difficulty." },
        { name: "Bountiful Harvest II", keywords: ["Rapid"],
          summary: "Bless one planted seed that yields Food units or Alchemy materials: it yields 4x as much; +10 to its difficulty. Doesn't stack." }
      ],
      summary: [ "Two crafting abilities: Greater Infuse Qi and Bountiful Harvest II (see subAbilities)." ]
    },
    "separate-wheat-from-chaff": {
      name: "Separate wheat from chaff", kind: "ability",
      cost: "3 AP, 1 MP", range: "10ft", keywords: ["Killing Blow", "Fear", "Mind Affecting", "Scatter"],
      requires: "Scythe only",
      summary: [
        "Light attack against every enemy in range. On damage, push each one back 5ft.",
        "If you land a Killing Blow, everything that took damage also becomes Shaken."
      ]
    },
    "terracing": {
      name: "Terracing", kind: "ability",
      cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [
        "Raise natural ground in a 25x25ft square centered on you by 10ft (not ground that's already raised).",
        "Overcharge (1 AP + 1 Mana): raise it another 10ft."
      ]
    },
    "four-field-system": {
      name: "Four Field System", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be in a crafting session; costs 1 crafting dice.",
      summary: [
        "Make a crafting check. After that, each crafting ability you use for the first time this session gives +2 crafting points."
      ]
    },
    "harvest-moon": {
      name: "Harvest Moon", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Self", keywords: ["Slow", "Healing", "Killing Blow", "Concentration", "Upkeep"],
      requires: null,
      summary: [
        "60ft radius around you. Allies inside can pay 2 Mana at the start of their turn to heal 15 HP.",
        "Enemies starting their turn inside save vs your Potency or are Slowed.",
        "End it early with a 0 AP Scythe heavy attack on a Slowed enemy; a Killing Blow with it restores 1 Mana.",
        "Upkeep: 1 Mana at the start of your turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ALCHEMEISTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("alchemeister", {
  name: "Alchemeister",
  url: "https://lyrian.splatpass.net/classes/alchemeister/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Healer",
  requires: "Alchemist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "expert-alchemist" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "combat-chemistry" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Alchemy"],
      summary: "+5 skill points in Alchemy. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "counter-potion" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "detailed-finish" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-all-of-creation" }
  ],
  abilities: {
    "expert-alchemist": {
      name: "Expert Alchemist", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "alchemeister-core-crafting",
      summary: [
        "Benefit 1: You gain the Alchemeister Core Crafting abilities.",
        "Benefit 2: When using Throw Potion, spend X of your own Mana to reduce the Mana the target pays for the potion by X (minimum 0)."
      ]
    },
    "alchemeister-core-crafting": {
      name: "Alchemeister Core Crafting", kind: "granted", grantedBy: "expert-alchemist",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Masterful Dilution", cost: "40 Crafting Points",
          summary: "On crafting success, gain 1 extra Elixir, Potion, Flask or Salve. Stacks with Efficient Dilution." },
        { name: "Distillation", cost: "40 Crafting Points",
          summary: "Give a Potion with a heal or shielding effect Healing +8." },
        { name: "Explosive Lining", cost: "10 Crafting Points",
          summary: "A Flask with an area of effect gets +5ft area (e.g. 10ft radius becomes 15ft)." },
        { name: "Purify Elixir", cost: "40 Crafting Points",
          summary: "Lower a detoxified Elixir's toxicity while keeping its effect; damage from taking it is reduced by an extra 5." }
      ],
      summary: [ "Four crafting abilities (see subAbilities)." ]
    },
    "combat-chemistry": {
      name: "Combat Chemistry", kind: "ability",
      cost: "0 RP", range: "Self", keywords: [], requires: null,
      summary: [
        "Once per encounter: jury-rig an item with the effect of an Elixir, Poison, Flask or Potion worth 300c or less (base version, no mods).",
        "It adds no burden, only you can use it, and it's lost if not used before the start of your next turn."
      ]
    },
    "counter-potion": {
      name: "Counter-Potion", kind: "ability",
      cost: "Variable RP", range: "Self", keywords: [], requires: null,
      summary: [
        "Immediately use a Potion, Elixir, Salve, Poison or Flask in your hand. X = the AP cost of that action."
      ]
    },
    "detailed-finish": {
      name: "Detailed Finish", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "This is your last crafting dice. Costs 1 Crafting Dice.",
      summary: [
        "Make a crafting check with the dice upgraded to 2d8."
      ]
    },
    "secret-art-all-of-creation": {
      name: "Secret Art: All of Creation", kind: "ultimate",
      cost: "0 RP", range: null, keywords: ["Secret Art"], requires: null,
      summary: [
        "Change the target attack's damage type to any type except True. Free apart from using your one Secret Art per encounter."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ALCHEMIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("alchemist", {
  name: "Alchemist",
  url: "https://lyrian.splatpass.net/classes/alchemist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Healer",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "the-alchemist" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "throw-potion" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Alchemy": 5 },
      options: ["Medicine", "Magic", "Common Knowledge"],
      summary: "+5 skill points in Alchemy, PLUS +5 skill points among Medicine, Magic or Common Knowledge. Any point can be traded for 2 expertise points, spent in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "doctor-jekyll" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "light-work" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "quickdraw-alchemy" }
  ],
  abilities: {
    "the-alchemist": {
      name: "The Alchemist", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "alchemist-core-crafting",
      summary: [
        "Benefit 1: Gain the Alchemist Core Crafting abilities and proficiency in 1 basic weapon.",
        "Benefit 2: Craft with non-advanced and base materials. You can spend 1 IP to perform an EP action tied to this key ability, up to 4 times.",
        "Benefit 3: Use an Alchemist's Alembic as your alchemy crafting tool.",
        "Benefit 4: When spending 1 interlude point, craft 3 of the same Elixir, Potion, Flask, Poison or Salve instead of 1, paying the cost only once."
      ]
    },
    "alchemist-core-crafting": {
      name: "Alchemist Core Crafting", kind: "granted", grantedBy: "the-alchemist",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Efficient Dilution", cost: "10 Crafting Points",
          summary: "On crafting success, gain 1 extra Elixir, Potion, Flask, Poison or Salve." },
        { name: "Stone Grinding", cost: "10 Crafting Points",
          summary: "Give a Potion with a heal or shielding effect Healing +5." },
        { name: "Pressurization", cost: "10 Crafting Points",
          summary: "A Flask with an area of effect gets +5ft area (e.g. 10ft radius becomes 15ft)." },
        { name: "Volatile Flask", cost: "10 Crafting Points",
          summary: "A Flask gets +5 damage on its damaging effects." },
        { name: "Detoxify Elixir", cost: "10 Crafting Points",
          summary: "Damage from taking an Elixir is reduced by 3 while keeping its effect." },
        { name: "Create Oil Coating", cost: "Errand",
          summary: "Make an Oil Coating from Carpenter materials (see Items: Carpenter Materials)." }
      ],
      summary: [ "Six crafting abilities (see subAbilities)." ]
    },
    "throw-potion": {
      name: "Throw Potion", kind: "ability",
      cost: "1 AP", range: "30ft", keywords: [], requires: null,
      summary: [
        "Throw a Potion you're holding to a willing ally within 30ft. They can pay its Mana cost (if any) to get its effect."
      ]
    },
    "doctor-jekyll": {
      name: "Doctor Jekyll", kind: "ability",
      cost: "No listed cost", range: "30ft", keywords: ["Encounter Start"], requires: null,
      summary: [
        "Encounter Start: draw and drink a Potion or Elixir, or throw one to a willing ally within 30ft who drinks it immediately."
      ]
    },
    "light-work": {
      name: "Light Work", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Costs 1 Crafting Dice.",
      summary: [
        "Only as your first crafting action: all material costs and all items produced are doubled.",
        "For the rest of the craft you can only use basic crafting actions. Then make a crafting attempt."
      ]
    },
    "quickdraw-alchemy": {
      name: "Quickdraw Alchemy", kind: "ultimate",
      cost: "0 RP", range: "Self", keywords: ["Stealth"], requires: null,
      summary: [
        "Draw an Alchemy item from your combat inventory."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ALKAHEST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("alkahest", {
  name: "Alkahest",
  url: "https://lyrian.splatpass.net/classes/alkahest/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Utility",
  requires: "Transmuter mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "transmutation-tricks" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "transmute-effective-implement" },
    { level: 3, type: "special",  label: "Skills (Transmuter points)", points: 10, expertiseTrade: null,
      options: "ANY_CRAFTING_DISCIPLINE",
      summary: "10 Transmuter points tied to one crafting discipline you pick (e.g. Blacksmithing, Alchemy); add them as a bonus to Transmuter abilities used in that discipline. Must differ from your Transmuter discipline, which gets an extra 5 points." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "alchemical-detonation" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "siphon-material" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-transmute-proto-armatae" }
  ],
  abilities: {
    "transmutation-tricks": {
      name: "Transmutation Tricks", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "transmuter-tricks",
      summary: [
        "Benefit 1: For 1 AP, make small comfort items (cup, chair, figurine) with no real gameplay use. Items to sell or give away need commodities (type/amount set by the GM).",
        "Benefit 2: Use Transmuter abilities a second time during a craft or co-craft.",
        "Benefit 3: You can use the Transmuter Tricks abilities."
      ]
    },
    "transmuter-tricks": {
      name: "Transmuter Tricks", kind: "granted", grantedBy: "transmutation-tricks",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Stabilize Matter", cost: "Co-Craft",
          summary: "Your next crafting d10 can't roll lower than 6." },
        { name: "A Small Bit of Creation", cost: "One harvested herb of higher than common rarity",
          summary: "Lower that herb's rarity by one step and change its element to one of your choice." }
      ],
      summary: [ "Two abilities (see subAbilities)." ]
    },
    "transmute-effective-implement": {
      name: "Transmute Effective Implement", kind: "ability",
      cost: "1 AP, 1 MP", range: "5ft", keywords: ["Overcharge"], requires: null,
      summary: [
        "Create an Effective Implement giving +5 to one skill. Explain how it helps; the GM decides if it's valid. Not for crafting or gathering skills. Lasts until you attempt that check.",
        "Can pay 1 RP instead of 1 AP.",
        "Overcharge: +1 Mana to make the bonus +10."
      ]
    },
    "alchemical-detonation": {
      name: "Alchemical Detonation", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: ["Rapid"], requires: null,
      summary: [
        "Destroy a wall (5x5ft segment), door or container you touch. Works on common building materials (wood, clay, stone, iron, etc.) and any wall made by player abilities; GM has final say.",
        "Then you may take a movement action to move 5ft into the destroyed space."
      ]
    },
    "siphon-material": {
      name: "Siphon Material", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude", "Errand"], requires: null,
      summary: [
        "Extract the alloyed material from an item, removing its effects. The item keeps its form; you get the special material back in raw units.",
        "If the effect can't be removed, the skill check fails."
      ]
    },
    "secret-art-transmute-proto-armatae": {
      name: "Secret Art: Transmute Proto Armatae", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "Self", keywords: ["Secret Art"], requires: null,
      usage: "Once; regained when you gain an Interlude Point.",
      summary: [
        "Transmute a 15ft-tall Large mech (15x15ft space) and seal yourself in its cockpit. Nearby creatures/movable objects are pushed out of its zone in a burst of steam.",
        "It gets a 20 HP temporary shield until the start of your next turn. Can pay 1 RP instead of the AP cost.",
        "Mech HP = 15 + (5 x Focus). Stats: Evasion 9/19, Guard 4/14. Uses your AP and RP; you can channel Transmuter abilities through it, and Transmute Weapon can make it a giant weapon.",
        "Eject: 1 AP (mech stops working). Re-entering: close the hatch for 1 AP before it works again.",
        "Right Arm - Mini Transmutation Cannon: 0 AP, 40ft. Light attack of deconstructive energy; doesn't provoke attacks of opportunity.",
        "Left Arm - Humanoid Gripper: makes all basic attacks with physical damage, proficient with any transmuted weapon it holds (weapon category benefits apply)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AMANITA  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("amanita", {
  name: "Amanita",
  url: "https://lyrian.splatpass.net/classes/amanita/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Healer",
  secondary: "Striker",
  requires: "Mycomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fungal-metabolite" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "vital-drain" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Survival"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "hyphal-force" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "spore-burst" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-mushroomize" }
  ],
  abilities: {
    "fungal-metabolite": {
      name: "Fungal Metabolite", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "resist-poison",
      summary: [
        "Benefit 1: You resist all commonly known (\"book\") poisons and can use Resist Poison.",
        "Benefit 2: Surviving an exotic poison or disease adds it to your resistances. Any poison/disease you resist can be used with Amoxicillin.",
        "Benefit 3: Against a poison you resist, Resist Poison can cost 0 RP + 1 Mana instead of 1 RP."
      ]
    },
    "resist-poison": {
      name: "Resist Poison", kind: "granted", grantedBy: "fungal-metabolite",
      cost: "1 RP", range: "Self", keywords: ["Rapid"],
      requires: "You're about to take Poison damage or become afflicted with a Poison.",
      summary: [
        "Gain Damage Reduction 100 against the triggering damage and resist the poison's application, negating it."
      ]
    },
    "vital-drain": {
      name: "Vital Drain", kind: "ability",
      cost: "1 AP, 1 MP", range: "20ft", keywords: ["Earth", "Full Pierce", "Healing", "Spell"], requires: null,
      summary: [
        "Precise Attack dealing Earth damage equal to the target's Toughness, with Full Pierce.",
        "Your Spore Symbiote's current host heals for the damage dealt. Can be cast from the host's location."
      ]
    },
    "hyphal-force": {
      name: "Hyphal Force", kind: "ability",
      cost: "1 RP", range: "Sight", keywords: ["Earth", "Spell", "Augment"],
      requires: "The host of your Spore Symbiote is making a melee attack.",
      summary: [
        "The host's melee attack deals extra Earth damage equal to your Light Attack Damage. Doesn't provoke attacks of opportunity."
      ]
    },
    "spore-burst": {
      name: "Spore Burst", kind: "ability",
      cost: "2 AP", range: "5ft", keywords: ["Earth", "Spell"], requires: null,
      summary: [
        "Heavy Attack dealing Poison damage, then knock the target back 5ft and yourself back 5ft. Doesn't provoke attacks of opportunity."
      ]
    },
    "secret-art-mushroomize": {
      name: "Secret Art: Mushroomize", kind: "ultimate",
      cost: "2 AP", range: "Sight", keywords: ["Healing", "Spell", "Upkeep", "Concentration"],
      requires: "Must be used on your Spore Symbiote target that is in the Downed state.",
      summary: [
        "Can pay 1 RP instead of 2 AP. Remove Downed from the target; it can't become Downed again while this lasts.",
        "Removing Spore Symbiote from the target cancels it. Ends at your next turn start unless you pay 1 Mana Upkeep.",
        "On Upkeep, if the target is below 0 HP, heal it for Power + 3. Also ends if the target's HP drops to negative its max HP."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ANGELBLOODED  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("angelblooded", {
  name: "Angelblooded",
  url: "https://lyrian.splatpass.net/classes/angelblooded/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 1,
  role: "Utility",
  secondary: null,
  requires: "Must have the Angelblooded breakthrough.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "angelic-presence" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "true-divine-release" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "divine-guard" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "divine-might" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "gods-blessing" }
  ],
  abilities: {
    "angelic-presence": {
      name: "Angelic Presence", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { stat: "Presence", amount: 1 },
      summary: [
        "Benefit 1: +1 Presence."
      ]
    },
    "true-divine-release": {
      name: "True Divine Release", kind: "ability",
      cost: "4 AP", range: "Self", keywords: ["Transformation", "Upkeep"],
      requires: "Not already transformed",
      summary: [
        "Transform into a semi-divine being for up to 1 hour: controlled flight and +5 movement speed.",
        "Upkeep: 2 Mana. Once used, can't be used again until the interlude rest phase."
      ]
    },
    "divine-guard": {
      name: "Divine Guard", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [],
      requires: "Must be transformed by Divine Release and targeted by an attack.",
      summary: [
        "Immediately Block the triggering attack with +5 Guard."
      ]
    },
    "divine-might": {
      name: "Divine Might", kind: "ability",
      cost: "0 AP", range: "Melee Weapon Range", keywords: [],
      requires: "Must be transformed by Divine Release.",
      summary: [
        "Make a Light Attack against the target."
      ]
    },
    "gods-blessing": {
      name: "God's Blessing", kind: "ultimate",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "True Divine Release costs 4 less AP and its Mana Upkeep drops to 0."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ANIMAL SUMMONER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("animal-summoner", {
  name: "Animal Summoner",
  url: "https://lyrian.splatpass.net/classes/animal-summoner/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "summon-animal-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "emergency-recall" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Animal Husbandry"],
      summary: "+5 skill points in Animal Husbandry. Any point can be traded for 2 expertise points in that skill." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "half-restore" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "independent-action" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "bestial-command" }
  ],
  abilities: {
    "summon-animal-key": {
      name: "Summon Animal (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "summon-animal",
      summary: [ "Benefit 1: You can use Summon Animal." ]
    },
    "summon-animal": {
      name: "Summon Animal", kind: "granted", grantedBy: "summon-animal-key",
      cost: "1 AP", range: "40ft", keywords: ["Summon"], requires: null,
      summary: [
        "Summon a random animal (Wolf, Boar or Giant Spider) to a spot you can see within 40ft.",
        "It doesn't act on its own: you spend your AP to make it act, at basic action costs (e.g. 2 AP for a Heavy attack). Its attacks use its own stats.",
        "It can use its creature's normal abilities, but you pay their costs. You can dismiss it for 0 AP.",
        "If it dies, you can't use this again until the end of the encounter."
      ]
    },
    "emergency-recall": {
      name: "Emergency Recall", kind: "ability",
      cost: "1 RP", range: "Sight", keywords: [],
      requires: "Your summon from Summon Animal is the target of an attack.",
      summary: [
        "Your summon gets 100 Damage Reduction against that attack; if it survives, it's immediately unsummoned."
      ]
    },
    "half-restore": {
      name: "Half Restore", kind: "ability",
      cost: "2 AP, 2 MP", range: "5ft", keywords: ["Healing"],
      requires: "Can only target your summoned animal.",
      summary: [
        "Heal your summon for 11 + (Power x 2) and remove 1 negative effect. Healing over its max HP becomes temporary HP."
      ]
    },
    "independent-action": {
      name: "Independent Action", kind: "ability",
      cost: "0 RP", range: "Sight", keywords: [],
      requires: "Can only target your summoned animal.",
      summary: [
        "Your summon acts on its own turn at initiative 0 (you still choose its actions), starting with 2 AP and 1 RP. Mana costs still come from you.",
        "While active you can't command it with your own AP.",
        "It takes up 2 slots of your summon limit; can't be used if that would exceed your limit."
      ]
    },
    "bestial-command": {
      name: "Bestial Command", kind: "ultimate",
      cost: "0 AP, 2 MP", range: "Sight", keywords: [],
      requires: "Can only target your summoned animal.",
      summary: [
        "Your summon can take basic actions as if it had 2 AP.",
        "If it's under Independent Action, it keeps Bestial Command until the encounter ends, it dies, or you cancel it (0 AP).",
        "While active: summon's max AP and AP recovery +2; your AP recovery -2."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ANTI-MAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("anti-mage", {
  name: "Anti-Mage",
  url: "https://lyrian.splatpass.net/classes/anti-mage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "magic-resistance" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "dispel-magic" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "anti-shield" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "anti-magic-shield" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "counterspell" }
  ],
  abilities: {
    "magic-resistance": {
      name: "Magic Resistance", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: +2 Anti-Mage bonus to saves against Spells." ]
    },
    "dispel-magic": {
      name: "Dispel Magic", kind: "ability",
      cost: "2 AP, 3 MP", range: "60ft", keywords: ["Arcane", "Dispel", "Spell"], requires: null,
      summary: [
        "Remove temporary magic from an area or target: every non-permanent effect in range from a Spell or Enchantment ability.",
        "Doesn't affect spells with no time limit or permanent results (e.g. a Geomancer's fissure). Can't remove Bounded Fields or Secret Arts."
      ]
    },
    "anti-shield": {
      name: "Anti-Shield", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Arcane", "Spell"], requires: null,
      summary: [
        "Until the start of your next turn, the target can't be targeted by abilities with the Shield keyword."
      ]
    },
    "anti-magic-shield": {
      name: "Anti-Magic Shield", kind: "ability",
      cost: "1 RP", range: "60ft", keywords: ["Aid", "Arcane", "Shield", "Spell"],
      requires: "The ally must be the target of a damage-dealing Spell.",
      summary: [
        "The ally gains 1 RP, which they must spend on a basic Dodge or Block against the triggering attack.",
        "That attack's damage to the ally is reduced by your Focus."
      ]
    },
    "counterspell": {
      name: "Counterspell", kind: "ultimate",
      cost: "1 or 2 RP", range: "60ft", keywords: ["Arcane", "Counter", "Spell"],
      requires: "An enemy casts a spell within range.",
      summary: [
        "Cancel the spell by paying RP equal to half its AP cost (rounded up), or equal to the RP it cost. Can't counter it if its AP cost is higher than your RP.",
        "Vs a non-Grunt: also pay 1 Mana per point of Focus the caster has above yours (min 0).",
        "The caster's AP isn't refunded. Doesn't provoke attacks of opportunity. Can't counter spells that cost 0 AP and 0 RP."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARCANIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("arcanist", {
  name: "Arcanist",
  url: "https://lyrian.splatpass.net/classes/arcanist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Mage or Sorcerer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "expanded-circuits" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "arcane-buster" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "arcane-explosion" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "arcane-power" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "magic-missile-ii" }
  ],
  abilities: {
    "expanded-circuits": {
      name: "Expanded Circuits", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { maxMana: 2 },
      summary: [ "Benefit 1: +2 maximum Mana." ]
    },
    "arcane-buster": {
      name: "Arcane Buster", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Arcane", "Spell", "Shieldbreaker"], requires: null,
      summary: [ "Heavy Attack dealing Arcane damage, with Shieldbreaker." ]
    },
    "arcane-explosion": {
      name: "Arcane Explosion", kind: "ability",
      cost: "2 AP", range: "10ft", keywords: ["Arcane", "Rapid", "Spell", "Blanketing", "Safe"], requires: null,
      summary: [ "Light Attack dealing Arcane damage to every enemy in range." ]
    },
    "arcane-power": {
      name: "Arcane Power", kind: "ability",
      cost: "0 AP, 3 MP", range: "Self", keywords: ["Arcane"], requires: null,
      summary: [ "+3 to all your Arcane damage rolls until the start of your next turn." ]
    },
    "magic-missile-ii": {
      name: "Magic Missile II", kind: "ultimate",
      cost: "1 AP, 2 MP", range: "120ft", keywords: ["Arcane", "Lock On", "Rapid", "Spell", "Circuit"], requires: null,
      summary: [ "Precise Attack dealing Arcane damage to the target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARCHER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("archer", {
  name: "Archer",
  url: "https://lyrian.splatpass.net/classes/archer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "status-assessment-ii-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "unerring-aim" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "volley" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "snap-shot-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "multishot" }
  ],
  abilities: {
    "status-assessment-ii-key": {
      name: "Status Assessment II (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "status-assessment-ii",
      refund: { overlapsWith: ["Marksman"], amount: "full",
                note: "Page says refund possible and Marksman also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Benefit 1: You can use Status Assessment II." ]
    },
    "status-assessment-ii": {
      name: "Status Assessment II", kind: "granted", grantedBy: "status-assessment-ii-key",
      cost: "0 AP", range: "Sight", keywords: ["Analyze", "Quick", "Stealth"], requires: null,
      summary: [
        "See the unit's approximate HP % until combat ends (DM should turn on health bars).",
        "Also reveals its current damage-type weaknesses/strengths and which body parts can be targeted and destroyed, if any."
      ]
    },
    "unerring-aim": {
      name: "Unerring Aim", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "When aiming at an object that isn't worn or wielded, within your ranged weapon range, you always hit." ]
    },
    "volley": {
      name: "Volley", kind: "ability",
      cost: "2 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Scatter"], requires: null,
      summary: [ "Light attack against every target in a 25x25ft area." ]
    },
    "snap-shot-ii": {
      name: "Snap Shot II", kind: "ability",
      cost: "0 AP, 1 MP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Light attack against the target. Your Focus isn't added to this roll." ]
    },
    "multishot": {
      name: "Multishot", kind: "ultimate",
      cost: "3 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Overcharge", "Scatter"], requires: null,
      summary: [
        "Heavy attack against two different targets.",
        "Overcharge: spend X extra Mana to hit 2 + X targets."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARCHSAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("archsage", {
  name: "Archsage",
  url: "https://lyrian.splatpass.net/classes/archsage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: "Sage mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "augmented-casting-persistent-spell" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "battle-cast" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "clearcasting" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "presence-of-mind" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-ultimate-spell" }
  ],
  abilities: {
    "augmented-casting-persistent-spell": {
      name: "Augmented Casting - Persistent Spell", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "persistent-spell",
      summary: [ "Benefit 1: You can use Persistent Spell." ]
    },
    "persistent-spell": {
      name: "Persistent Spell", kind: "granted", grantedBy: "augmented-casting-persistent-spell",
      cost: "0 AP, 2 MP", range: "Self", keywords: [], requires: null,
      summary: [
        "If your next Spell applies a buff or debuff, it lasts 1 extra turn.",
        "If that Spell allows a save, the target gets another save after the original effect ends to resist the extension."
      ]
    },
    "battle-cast": {
      name: "Battle Cast", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Circuit"], requires: null,
      refund: { overlapsWith: ["Battle Mage"], amount: "full",
                note: "Page says refund possible; Battle Mage also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "The next Spell you cast before your turn ends doesn't provoke an attack of opportunity for casting in an enemy's Melee Range." ]
    },
    "clearcasting": {
      name: "Clearcasting", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [ "Encounter Start: the next Spell you cast this encounter costs 2 less Mana (minimum 0)." ]
    },
    "presence-of-mind": {
      name: "Presence of Mind", kind: "ability",
      cost: "0 AP, 3 MP", range: "Self", keywords: [], requires: null,
      summary: [ "Your next Spell this turn costs 2 less AP." ]
    },
    "secret-art-ultimate-spell": {
      name: "Secret Art: Ultimate Spell", kind: "ultimate",
      cost: "0 AP, 4 MP", range: "Self", keywords: ["Secret Art"], requires: null,
      summary: [ "The next Spell you cast this turn with an AP cost under 5 deals true damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARMIGER  (checked 2026-10-20, site v0.13.2)  ** In the site's sitemap but NOT on the class list page **
// ---------------------------------------------------------------------------
CL("armiger", {
  name: "Armiger",
  url: "https://lyrian.splatpass.net/classes/armiger/",
  checked: "2026-10-20",
  version: "0.13.2",
  onClassIndex: false,
  tier: 2,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "dimensional-armory" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "send-to-armory" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Artifice", "Magic", "Stealth", "Athletics", "Art"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fast-dimensional-equip" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "dimensional-armory-expansion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "full-dimensional-equip" }
  ],
  abilities: {
    "dimensional-armory": {
      name: "Dimensional Armory", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Spend 1 week and 1 errand point to create a pocket dimension behind a door of your choice (any normal door you fit through). When you open it, you can step into the Dimensional Armory: a 15x15ft closet holding up to 6 Burden. GM may reject some magic items (e.g. unbonded Divine Arms). If you die, the contents appear in the nearest empty space next to you.",
        "Benefit 2: Burden-reducing items stored inside have no effect. Materials take 1 slot per 1000u."
      ]
    },
    "send-to-armory": {
      name: "Send To Armory", kind: "ability",
      cost: "2 AP, 1 MP", range: "Touch", keywords: ["Spell"],
      requires: "You have a Dimensional Armory active.",
      summary: [
        "Teleport a touched item that no other creature is holding or carrying into an empty spot in your armory. Fails if there's no room. Some magic items can be rejected; no living creatures.",
        "Overcharge: take 1 minute instead of 2 AP to cut the Mana cost by 1."
      ]
    },
    "fast-dimensional-equip": {
      name: "Fast Dimensional Equip", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: [],
      requires: "You have a Dimension Armory active.",
      summary: [
        "Summon an item from your armory into your hand. You can also send a held weapon (that you fully control and no one else wields or carries) into the armory and swap it for another.",
        "Spend 1 RP to activate it to cut the Mana cost by 1."
      ]
    },
    "dimensional-armory-expansion": {
      name: "Dimensional Armory Expansion", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "Armory Burden limit +4 (6 to 10).",
        "Designate one 'dimensional set' stored in the armory (15 minutes of concentration): one armor, one cloak, and one weapon + shield, two weapons, or one two-handed weapon."
      ]
    },
    "full-dimensional-equip": {
      name: "Full Dimensional Equip", kind: "ultimate",
      cost: "0 AP, 1 MP", range: "Self", keywords: [],
      requires: "You have a Dimensional Armory active.",
      summary: [ "Swap your worn armor, cloak and wielded weapons with your dimensional set. What you were using becomes the new set, so you can swap back." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARMORSMITH  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("armorsmith", {
  name: "Armorsmith",
  url: "https://lyrian.splatpass.net/classes/armorsmith/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Defender",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "armorsmith-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "repair-armor" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Armorsmithing": 5 },
      options: ["Athletics", "Riding", "Common Knowledge"],
      summary: "+5 skill points in Armorsmithing, PLUS +5 among Athletics, Riding or Common Knowledge. Expertise trade (1 point = 2 expertise) applies to Athletics, Riding or Common Knowledge." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "share-armor" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"],
      alsoGrants: { proficiencyChoice: ["Heavy Armor", "Greatshields"] },
      summary: "+1 Fitness, and proficiency in Heavy Armor OR Greatshields." },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "thermal-quench" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "reinforce-armor" }
  ],
  abilities: {
    "armorsmith-basics": {
      name: "Armorsmith Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "armorsmith-core-crafting",
      summary: [
        "Benefit 1: Proficiency in Light Armor, Medium Armor and Shields.",
        "Benefit 2: Proficiency in one basic melee weapon. A smith's hammer counts as a bludgeoning weapon you're proficient with.",
        "Benefit 3: Craft armor, shields and cloaks from Iron, Tamahagane, Animal Hide, Direhide and alloys. You can spend 1 IP to perform an EP action tied to this key ability, up to 4 times.",
        "Benefit 4: Gain the Armorsmith Core Crafting abilities."
      ]
    },
    "armorsmith-core-crafting": {
      name: "Armorsmith Basics (crafting abilities)", kind: "granted", grantedBy: "armorsmith-basics",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Armorsmith's Modification A", cost: "X Crafting Points",
          summary: "Add an A-type modification to armor (see Universal Armor and individual armor pages)." },
        { name: "Armorsmith's Modification Frame", cost: "X Crafting Points",
          summary: "Add a Frame-type modification to armor (same references)." },
        { name: "Adaptive Layering", cost: "X Crafting Points",
          summary: "Mix a special material into armor or a shield; each material has its own cost." },
        { name: "Cloak Layering", cost: "X Crafting Points",
          summary: "Mix a cloak special material into a cloak; raises the cloak's burden cost by 1." },
        { name: "Create Ingot", cost: "Errand",
          summary: "Make an ingot from armorsmithing base or special materials (see Item: Armorsmithing Materials)." },
        { name: "Tan Leather", cost: "Errand",
          summary: "Make tanned hide from armorsmithing base leather materials." }
      ],
      summary: [ "Six crafting abilities (see subAbilities)." ]
    },
    "repair-armor": {
      name: "Repair Armor", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude", "Errand"], requires: null,
      summary: [ "Errand: repair a broken armor." ]
    },
    "share-armor": {
      name: "Share Armor", kind: "ability",
      cost: "1 RP", range: "30ft", keywords: ["Aid"],
      requires: "Must be wearing armor",
      summary: [
        "Until the end of the current creature's turn, the target's Guard and Block are figured as if they wore your armor and shield (lasts through all same-type creatures acting on that initiative).",
        "Doesn't transfer temporary Guard/Block from Reinforce Armor, or bonuses from your armor plates or cloak (the target's own plates/cloak may still apply)."
      ]
    },
    "thermal-quench": {
      name: "Thermal Quench", kind: "ability",
      cost: "1 Crafting Dice", range: null, keywords: [],
      requires: "Must be in a crafting session",
      summary: [
        "Make a crafting check with +1 for every roll of 5 or higher you made during this craft.",
        "FAQ: 5s produced by the Westrian Style tool count."
      ]
    },
    "reinforce-armor": {
      name: "Reinforce Armor", kind: "ultimate",
      cost: "0 RP, 2 MP", range: "Self", keywords: [],
      requires: "Must be wearing armor or a shield you crafted",
      summary: [ "Until the start of your next turn, Guard and Block from armor and shield you crafted and are wearing are doubled (not armor plates)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ARTIFICER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("artificer", {
  name: "Artificer",
  url: "https://lyrian.splatpass.net/classes/artificer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Utility",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "artificer-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "repair-artifice" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Artificing": 5 },
      options: ["Artifice", "Magic", "Flight", "Linguistics", "History", "Common Knowledge"],
      summary: "+5 skill points in Artificing, PLUS +5 among Artifice, Magic, Flight, Linguistics, History or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "blackbird" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "overclock" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "quick-artifice-reload" }
  ],
  abilities: {
    "artificer-basics": {
      name: "Artificer Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "artificer-core-crafting",
      summary: [
        "Benefit 1: Gain the Artificer Core Crafting abilities.",
        "Benefit 2: Craft with non-advanced and base materials. You can use an IP to perform an EP action tied to this key ability, 4 times.",
        "Benefit 3: Craft Artifices and Firearms, including artifices costing 2500 clim or less.",
        "Benefit 4: Proficiency with the musket and the Artificer's Multitool."
      ]
    },
    "artificer-core-crafting": {
      name: "Artificer Basics (crafting abilities)", kind: "granted", grantedBy: "artificer-basics",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Artifice Modification A", cost: "X Crafting Points",
          summary: "Add an A-type modification to an artifice; each mod has its own cost." },
        { name: "Weapon Modification A", cost: "X Crafting Points",
          summary: "Add an A-type modification to a weapon; each mod has its own cost." },
        { name: "Artifice Modification C", cost: "X Crafting Points",
          summary: "Add a C-type modification (page text says 'weapon'); each mod has its own cost." },
        { name: "Craft Fuel Shells", cost: "Errand",
          summary: "Craft up to 5 small shells (50 magical fuel each), or 1 medium shell (200 fuel) in place of 2 small." },
        { name: "Craft Artifice Parts", cost: "Errand",
          summary: "Convert up to 3000u of a blacksmithing material into artifice parts 1:1. Higher limits: 6000 tamahagane, 9000 mithril, 12000 orihalcum, 15000 escudo." },
        { name: "Firearm Alloy", cost: "X Crafting Points",
          summary: "Mix a special material into a firearm or artifice weapon; each material has its own cost." },
        { name: "Create Ingot", cost: "Errand",
          summary: "Make an ingot from blacksmithing base or special materials." }
      ],
      summary: [ "Seven crafting abilities (see subAbilities)." ]
    },
    "repair-artifice": {
      name: "Repair Artifice", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude", "Errand"], requires: null,
      summary: [ "Errand: repair a broken artifice." ]
    },
    "blackbird": {
      name: "Blackbird", kind: "ability",
      cost: "1 AP, 1 Small Shell", range: "5ft", keywords: [], requires: null,
      summary: [
        "Deploy a walnut-sized drone that sends a grainy image to a wrist device. Max range 3000ft.",
        "Shows big movement, doors, structures, enemies and large signs - not fine detail or words unless close. Normal human hearing only picks it up within 10ft.",
        "One fuel shell = one flight of up to 15 minutes. If lost or damaged, rebuild it as an errand before using it again."
      ]
    },
    "overclock": {
      name: "Overclock", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be in a crafting session.",
      summary: [ "Add 1d10 crafting points to an item; the item starts Broken. Not usable for Alchemy crafting." ]
    },
    "quick-artifice-reload": {
      name: "Quick Artifice Reload", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "5ft", keywords: ["Stealth"], requires: null,
      summary: [ "Reload one shell into an artifice in range, using one of your shells." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ASSASSIN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("assassin", {
  name: "Assassin",
  url: "https://lyrian.splatpass.net/classes/assassin/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Rogue or Culinarian mastered, and any tier 2 class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "inconspicuous" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "death-mark" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "study-target" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "devastating-strike-iii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-assassinate" }
  ],
  abilities: {
    "inconspicuous": {
      name: "Inconspicuous", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: When traveling stealthily, you roll your own Stealth checks even with the party; your surprise rounds depend only on your rolls.",
        "Benefit 2: In a surprise round, enemies you attack count as having 0 RP for ability requirements until they start their turn (even after your attack, and even if allies already attacked them)."
      ]
    },
    "death-mark": {
      name: "Death Mark", kind: "ability",
      cost: "No listed cost", range: "Sight", keywords: ["Encounter Start", "Killing Blow", "Sidestep"],
      requires: "Enemy is surprised.",
      summary: [
        "Mark a target, opening it up to Assassin abilities.",
        "On a Killing Blow against a marked target, you may Sidestep up to your Speed and Hide for 0 RP."
      ]
    },
    "study-target": {
      name: "Study Target", kind: "ability",
      cost: "2 AP", range: "Sight", keywords: ["Lock On", "Full Pierce", "Sure Hit", "Overcharge", "Stealth"], requires: null,
      summary: [
        "Choose: your next basic attack against the target gets Lock On, OR apply Death Mark to the target.",
        "Overcharge: +2 AP (4 total) so your next basic attack gets Sure Hit and Full Pierce instead."
      ]
    },
    "devastating-strike-iii": {
      name: "Devastating Strike III", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Sure Hit"],
      requires: "Target has 0 RP left and is marked by Death Mark. One-handed weapons only.",
      summary: [ "Light (1 AP) or Heavy (2 AP) attack against the target that deals guaranteed maximum damage." ]
    },
    "secret-art-assassinate": {
      name: "Secret Art: Assassinate", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Secret Art", "Sure Hit"],
      requires: "Target must be marked by Death Mark. One-handed weapons only.",
      summary: [
        "Attack for Heavy Damage. Double heavy damage if you surprised the enemy, are stealthed, and haven't been spotted this encounter.",
        "Moving next to an enemy keeps you stealthed and unspotted if you use this right after the move ends."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// AURORA BLADE STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("aurora-blade-style", {
  name: "Aurora Blade Style",
  url: "https://lyrian.splatpass.net/classes/aurora-blade-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: "Striker",
  requires: "Any class mastered. Proficiency in at least one of light swords, longsword, katana or dueling weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "frost-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "aurora-blade-style-winters-edge" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "Magic", "History", "Flight", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "aurora-blade-style-aurora-slash" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "aurora-blade-style-rimestep" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "aurora-blade-style-secret-art-permafrost-guilotine" }
  ],
  abilities: {
    "frost-weapon": {
      name: "Frost Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your weapon attacks can deal Frost damage instead of their normal type. Declare it before the accuracy roll." ]
    },
    "aurora-blade-style-winters-edge": {
      name: "Aurora Blade Style: Winter's Edge", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Slow", "Frost"],
      requires: "Light swords, longsword, katana or dueling weapon only",
      summary: [ "Precise melee attack dealing Frost damage. On hit (not on damage), the target is Slowed until the end of your next turn." ]
    },
    "aurora-blade-style-aurora-slash": {
      name: "Aurora Blade Style: Aurora Slash", kind: "ability",
      cost: "2 AP, 1 MP", range: "80ft", keywords: ["Slow", "Frost"],
      requires: "Light swords, longsword, katana or dueling weapon only",
      summary: [
        "A straight-line slash: light attack dealing Frost damage to the first target hit. On hit, it's Slowed until the end of your next turn.",
        "The light continues the full 80ft, forming a 300ft-high wall that blocks vision on both sides until the end of your next turn."
      ]
    },
    "aurora-blade-style-rimestep": {
      name: "Aurora Blade Style: Rimestep", kind: "ability",
      cost: "0 RP", range: "Self", keywords: ["Sidestep"], requires: null,
      summary: [
        "When a target is Slowed by a Frost keyword attack (yours or an ally's), Sidestep up to your speed toward it; with enough movement you can end next to it.",
        "Overcharge: 1 Mana to Sidestep up to 3x your speed instead."
      ]
    },
    "aurora-blade-style-secret-art-permafrost-guilotine": {
      name: "Aurora Blade Style Secret Art: Permafrost Guilotine", kind: "ultimate",
      cost: "0 AP", range: "Melee Weapon Range", keywords: ["Secret Art", "Stance", "Frost"],
      requires: "Only right after moving to a target with Rimestep. Light swords, longsword, katana or dueling weapon only.",
      summary: [
        "Light attack (or +1 AP for Heavy or Precise) dealing Frost damage. On damage, the target is Rooted until the end of your next turn.",
        "You then enter the Permafrost Guilotine stance, which lets you use this Secret Art again. Stance lasts until combat ends or you enter another stance."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BAJIQUAN STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("bajiquan-style", {
  name: "Bajiquan Style",
  url: "https://lyrian.splatpass.net/classes/bajiquan-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fire-stance" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "double-palm-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "zhen-jiao" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "elbow-uppercut" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "tetsuzanko" }
  ],
  abilities: {
    "fire-stance": {
      name: "Fire Stance", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "tempestuous-fire-stance",
      summary: [ "Benefit 1: You can use Tempestuous Fire Stance." ]
    },
    "tempestuous-fire-stance": {
      name: "Tempestuous Fire Stance", kind: "granted", grantedBy: "fire-stance",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [
        "While in this stance, before an Unarmed Strike attack you can move 5ft per AP spent on that move; this movement doesn't provoke attacks of opportunity.",
        "Ends if you enter another stance or move (except via this ability or Unarmed Strike movement abilities). Attacking doesn't end it."
      ]
    },
    "double-palm-strike": {
      name: "Double Palm Strike", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Bajiquan", "Unarmed Strike"], requires: null,
      summary: [ "Deal Light Damage. On damage, push the target 5-15ft away from you (minimum 5ft)." ]
    },
    "zhen-jiao": {
      name: "Zhen Jiao", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "When you move toward an enemy as part of a Martial Artist or Bajiquan ability (via Fire Stance or a built-in move, e.g. Rushing Knee Drop), your attack deals +3 damage per 5ft moved.",
        "Applies only once if the attack hits multiple times or multiple targets."
      ]
    },
    "elbow-uppercut": {
      name: "Elbow Uppercut", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Bajiquan", "Combo", "Unarmed Strike"], requires: null,
      summary: [
        "Deal Heavy Damage.",
        "Combo: if used after an Unarmed Strike ability, it gains Full Pierce."
      ]
    },
    "tetsuzanko": {
      name: "Tetsuzanko", kind: "ultimate",
      cost: "3 AP", range: "Melee Weapon Range", keywords: ["Bajiquan", "Combo", "Unarmed Strike"], requires: null,
      summary: [
        "Heavy Attack that also adds Light Damage on top of the Heavy Damage.",
        "Combo: if used after an ability that moved the target, you may push the target the same distance again."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BARD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("bard", {
  name: "Bard",
  url: "https://lyrian.splatpass.net/classes/bard/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Support",
  secondary: null,
  requires: "Idol mastered, OR at least 5 points in Art (Singing) expertise, Art (Idol) expertise, or an Art expertise for an instrument.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "toss-a-coin" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "inspiring-song" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Art", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "dirge-of-despair" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "shatter" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "siren-song" }
  ],
  abilities: {
    "toss-a-coin": {
      name: "Toss a coin", kind: "key",
      cost: "Errand", range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Errand - perform in a city or town to earn Clim equal to your relevant Art roll x 10 (max 300 Clim)." ]
    },
    "inspiring-song": {
      name: "Inspiring Song", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Song", "Sound", "Upkeep"], requires: null,
      summary: [
        "All allies in range (you included) can add 1d4 to one roll until the start of your next turn, even after seeing the roll.",
        "Upkeep: 1 AP at the start of each of your later turns to keep it going and re-grant the bonus to allies in range."
      ]
    },
    "dirge-of-despair": {
      name: "Dirge of Despair", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Sound", "Song", "Upkeep", "Mind Affecting"], requires: null,
      summary: [
        "Enemies in range save vs your Potency. Affected enemies subtract 1d4 from one roll (you choose which, after seeing it) until the start of your next turn.",
        "Upkeep: 1 AP each later turn. Enemies who already saved don't save again; affected ones stay affected."
      ]
    },
    "shatter": {
      name: "Shatter", kind: "ability",
      cost: "3 AP", range: "30ft", keywords: ["Sound", "Scatter"], requires: null,
      summary: [
        "Every enemy in range saves vs your Potency or takes Light Damage.",
        "Unattended glass (or similarly fragile) objects in range shatter."
      ]
    },
    "siren-song": {
      name: "Siren Song", kind: "ultimate",
      cost: "3 AP", range: "60ft", keywords: ["Song", "Sound"], requires: null,
      summary: [
        "Enemies in range save vs your Potency. On a fail, on their next turn they can only spend AP moving toward you by the most direct path, and can't attack first. Actions that help them approach (standing from prone, fae flash) are allowed.",
        "Ends for a creature if the path leads into an obvious hazard (e.g. off a cliff), when it gets within 5ft of you, or when it takes damage.",
        "You can't take any other action while playing; doing so cancels it for everyone. Each creature can only be affected once per encounter."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BATTLE MAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("battle-mage", {
  name: "Battle Mage",
  url: "https://lyrian.splatpass.net/classes/battle-mage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Have at least 1 spell, and be proficient in at least 1 melee weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mage-armor-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "dragon-breaks-the-ranks" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "Magic", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "battle-cast" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "shooting-form" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "circle-swing" }
  ],
  abilities: {
    "mage-armor-key": {
      name: "Mage Armor (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "mage-armor",
      summary: [ "Benefit 1: You can use Mage Armor." ]
    },
    "mage-armor": {
      name: "Mage Armor", kind: "granted", grantedBy: "mage-armor-key",
      cost: "No listed cost", range: "Self", keywords: ["Arcane", "Encounter Start", "Spell"], requires: null,
      summary: [
        "Gain magical Light, Medium or Heavy Armor until the encounter ends. Works like normal armor of that type (same benefits and penalties); doesn't stack with other armor.",
        "No proficiency needed and no Burden.",
        "When first applied, you can add Barrier, Fortress, Manaweave, Protective Coating or Spidersilk if the armor type qualifies (e.g. no Fortress on light).",
        "While active, spend 2 AP to change its type or remove it."
      ]
    },
    "dragon-breaks-the-ranks": {
      name: "Dragon Breaks The Ranks", kind: "ability",
      cost: "4 AP", range: "80ft", keywords: ["Fire", "Spell", "Sidestep"], requires: null,
      summary: [
        "Gain Flight, wreath yourself in fire, and Sidestep in a straight line to a point, smashing low cover on the way (GM may rule some cover too sturdy). Then make one melee Heavy Attack with your weapon on an enemy in range.",
        "Others in your path can spend 1 RP to move 5ft aside or take Light Fire damage.",
        "If you have an element mastered, you can swap the Fire damage to that element. Doesn't provoke attacks of opportunity."
      ]
    },
    "battle-cast": {
      name: "Battle Cast", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Circuit"], requires: null,
      refund: { overlapsWith: ["Archsage"], amount: "full",
                note: "Page says refund possible; Archsage also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "The next Spell you cast before your turn ends doesn't provoke an attack of opportunity for casting in an enemy's melee range." ]
    },
    "shooting-form": {
      name: "Shooting Form", kind: "ability",
      cost: "0 AP", range: null, keywords: ["Rapid"], requires: null,
      summary: [
        "Turn a melee weapon you hold into a Wand Channeling Weapon (or back). It keeps relevant enchantments and works like a wand; you're proficient with it and can fire Arcane Elemental shots even if you normally couldn't.",
        "Lasts until the encounter ends, 5 minutes pass, or the weapon leaves your possession."
      ]
    },
    "circle-swing": {
      name: "Circle Swing", kind: "ultimate",
      cost: "2 AP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [
        "Light Attack. On damage, you may move the target anywhere within your weapon range (max 10ft, same height), then push it 5ft.",
        "Your next Spell or Channeling Weapon attack this turn costs 1 less AP (min 0)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BATTLEMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("battlemaster", {
  name: "Battlemaster",
  url: "https://lyrian.splatpass.net/classes/battlemaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Adventurer or Fighter mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "arms-mastery" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mordschlag" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Riding", "Deception", "Medicine", "History", "Perception", "Insight", "Survival", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "skillfull-blow" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "unconventional-weapon" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "disarming-attack" }
  ],
  abilities: {
    "arms-mastery": {
      name: "Arms Mastery", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: You count as proficient with every melee weapon you wield. This doesn't count as proficiency for class requirements." ]
    },
    "mordschlag": {
      name: "Mordschlag", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Block Crush"],
      requires: "Longsword, Heavy Blades and Bludgeoning weapons only",
      summary: [ "Strike with the pommel or crossguard: a Heavy Attack against the target." ]
    },
    "skillfull-blow": {
      name: "Skillfull Blow", kind: "ability",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Lock On"], requires: null,
      summary: [ "Heavy Attack against the target." ]
    },
    "unconventional-weapon": {
      name: "Unconventional Weapon", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Augment"], requires: null,
      summary: [
        "For your next attack, your weapon also counts as a weapon of another group: it gets both groups' base properties, meets ability requirements for that group, and can switch to that weapon's damage type.",
        "GM may rule some abilities still can't be used with it."
      ]
    },
    "disarming-attack": {
      name: "Disarming Attack", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Disarm"], requires: null,
      summary: [ "Light Attack. On damage, the target is Disarmed until the start of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// BERSERKER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("berserker", {
  name: "Berserker",
  url: "https://lyrian.splatpass.net/classes/berserker/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fallen-friend" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "rage-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "into-the-fray" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "break-free" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "reckless-strike" }
  ],
  abilities: {
    "fallen-friend": {
      name: "Fallen Friend", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When a Heroic-tier ally drops to 0 HP, you can enter Rage Stance for 0 AP, 0 RP and 0 Mana - even if you don't know Rage yet." ]
    },
    "rage-stance": {
      name: "Rage Stance", kind: "ability",
      cost: "2 AP, 2 MP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [
        "Offensive stance lasting until the encounter ends, you're Downed, or 1 hour passes.",
        "+2 AP each turn (including the turn you enter), only for melee attacks. +1 Guard and +5 to all Fitness checks.",
        "No RP actions except attacks of opportunity or Rage-keyword actions; no Spells unless they have Rage. You count as having 0 RP for ability requirements."
      ]
    },
    "into-the-fray": {
      name: "Into the Fray", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [ "On your turn only: move up to 2x your movement speed, ending within melee attack range of an enemy." ]
    },
    "break-free": {
      name: "Break Free", kind: "ability",
      cost: "0 RP", range: "Self", keywords: ["Rage"],
      requires: "Not in Rage Stance.",
      summary: [ "When an enemy would Stun, Root, Fear or similarly stop you acting, enter Rage Stance for no AP/RP and become immune to that effect for the Rage's duration." ]
    },
    "reckless-strike": {
      name: "Reckless Strike", kind: "ultimate",
      cost: "1 AP, 1 RP", range: "Melee Weapon Range", keywords: ["Rage"], requires: null,
      summary: [ "Heavy Attack against the target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// BIOCHEMIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("biochemist", {
  name: "Biochemist",
  url: "https://lyrian.splatpass.net/classes/biochemist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Alchemist mastered or Transmuter mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "transmuter-of-life" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "gene-activation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Riding", "Appraise", "Medicine", "Magic", "History", "Animal Husbandry", "Art", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "helix-siphon" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "g-shift" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-anima-synthesis-form" }
  ],
  abilities: {
    "transmuter-of-life": {
      name: "Transmuter of Life", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "biohacking",
      grants: { geneInventory: 1 },
      summary: [
        "Benefit 1: You can use Biohacking.",
        "Benefit 2: You can store up to 1 gene in your gene inventory."
      ]
    },
    "biohacking": {
      name: "Biohacking", kind: "granted", grantedBy: "transmuter-of-life",
      cost: "No listed cost", range: "Self", keywords: [], requires: null,
      summary: [
        "At the start of an arc, transmute one gene from a Chimera subrace into your DNA, if you have a sample (a vial of blood). The sample isn't used up; the gene goes into your gene inventory.",
        "Repeat for 1 IP or 1 EP. Stores genes up to your gene limit."
      ]
    },
    "gene-activation": {
      name: "Gene Activation", kind: "ability",
      cost: "0 RP", range: "Self", keywords: ["Transformation"],
      requires: "Must have the required gene in your gene inventory.",
      summary: [
        "Consume a gene to transform and gain one chimera racial ability matching it, until the end of your next turn. End early for 0 RP.",
        "Abilities that need IP or EP can't be gained or used this way."
      ]
    },
    "helix-siphon": {
      name: "Helix Siphon", kind: "ability",
      cost: "0 RP, 1 MP", range: "Melee Weapon Range or Touch", keywords: [],
      requires: "A melee attack must deal damage to a known Chimera.",
      summary: [
        "When your melee attack damages an enemy Chimera, copy one gene for any ability of that enemy's race; it lasts until combat ends.",
        "Or touch an ally Chimera or a downed enemy to copy a single gene."
      ]
    },
    "g-shift": {
      name: "G. Shift", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [
        "Encounter Start: take 11 true damage, then lose 1 RP or -1 AP on your first turn (your choice).",
        "Your body mimics one Alchemy Elixir: Rabbit, Reaper, Shark, Tunnel, Bull or Bear. Doesn't stack with that elixir, can't be dispelled, lasts until the encounter ends."
      ]
    },
    "secret-art-anima-synthesis-form": {
      name: "Secret Art: Anima Synthesis Form", kind: "ultimate",
      cost: "0 RP, 3 MP", range: "Self", keywords: ["Secret Art", "Transformation"],
      requires: "Must have the required gene in your gene inventory.",
      grants: { geneInventory: 1 },
      summary: [
        "Learning this gives +1 gene inventory for Biohacking.",
        "Consume a gene to transform fully into that gene's chimera subrace, gaining all its abilities until the encounter ends. You can still use Gene Activation to add more.",
        "Abilities that need IP or EP can't be gained or used this way."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BLACK OATH STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("black-oath-style", {
  name: "Black Oath Style",
  url: "https://lyrian.splatpass.net/classes/black-oath-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "dark-surge" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "inexorable-shadow-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Deception", "Intimidation", "Insight", "Medicine", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "eclipse-breaker" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "focused-power" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "shadow-counter" }
  ],
  abilities: {
    "dark-surge": {
      name: "Dark Surge", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: After you deal damage to yourself, your next unarmed attack that turn gets Dark Surge: +1 Accuracy." ]
    },
    "inexorable-shadow-stance": {
      name: "Inexorable Shadow Stance", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance", "Augment"], requires: null,
      summary: [
        "When you hit with an unarmed attack, deal Light or Heavy true damage to yourself to add that same amount to the attack. You can decide after enemy reactions; the enemy may react again. Twice per round.",
        "Multi-target attacks: the extra applies to only one damage roll. Enhanced attacks gain Augment. Lasts until you enter another stance.",
        "If the enemy Dodges and you miss, the self-damage is refunded (still counts as a use). If they Block, you keep the HP loss."
      ]
    },
    "eclipse-breaker": {
      name: "Eclipse Breaker", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Setup", "Scatter"], requires: null,
      summary: [ "Heavy attack against every target in a 15x15ft line; choose the direction when you start the ability." ]
    },
    "focused-power": {
      name: "Focused Power", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: [],
      requires: "Must be in Inexorable Shadow Stance.",
      summary: [ "When you're about to take the stance's extra damage, maximize it instead of rolling - both the self-damage and the damage dealt." ]
    },
    "shadow-counter": {
      name: "Shadow Counter", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Setup", "Unarmed Strike"],
      requires: "Must be in Inexorable Shadow Stance.",
      summary: [
        "Charge up a Heavy attack on one enemy with extra damage equal to half your missing HP.",
        "If the target provokes an attack of opportunity while you charge, you can unleash it immediately as if fully charged."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BLACKSMITH  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("blacksmith", {
  name: "Blacksmith",
  url: "https://lyrian.splatpass.net/classes/blacksmith/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Support",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "craft-weapons" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "repair-weapon" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Blacksmithing": 5 },
      options: ["Athletics", "Riding", "Common Knowledge"],
      summary: "+5 skill points in Blacksmithing, PLUS +5 among Athletics, Riding or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "forged-knowledge" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "steady-craft-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "weapon-maintenance" }
  ],
  abilities: {
    "craft-weapons": {
      name: "Craft Weapons", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "blacksmith-core-crafting",
      summary: [
        "Benefit 1: Gain the Blacksmith Core Crafting abilities.",
        "Benefit 2: Craft with Iron, Tamahagane and any alloys. You can use an IP to perform an EP action tied to this key ability, 4 times.",
        "Benefit 3: A Smith's Hammer works as your blacksmithing crafting tool and as a Bludgeoning weapon you're proficient with.",
        "Benefit 4: Proficiency in 1 smithing weapon."
      ]
    },
    "blacksmith-core-crafting": {
      name: "Blacksmith Core Crafting", kind: "granted", grantedBy: "craft-weapons",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Blacksmith's Modification A", cost: "X Crafting Points",
          summary: "Add an A-type modification to a weapon or tool (costs on Universal Weapon, Crafting mods or weapon pages)." },
        { name: "Weapon Alloy", cost: "X Crafting Points",
          summary: "Mix a special material into a smithing weapon; each material has its own cost." },
        { name: "Create Ingot", cost: "Errand",
          summary: "Make an ingot from blacksmithing base or special materials (see Item: Blacksmithing Materials)." }
      ],
      summary: [ "Three crafting abilities (see subAbilities)." ]
    },
    "repair-weapon": {
      name: "Repair Weapon", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude", "Errand"], requires: null,
      summary: [ "Errand: repair a broken smithing weapon." ]
    },
    "forged-knowledge": {
      name: "Forged Knowledge", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Rage"],
      requires: "The attack must be made with a weapon you crafted.",
      summary: [ "Maximize one damage die for the attack." ]
    },
    "steady-craft-ii": {
      name: "Steady Craft II", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "1 Crafting Dice.",
      summary: [ "Add a crafting check to the item with the crafting die automatically counting as 7." ]
    },
    "weapon-maintenance": {
      name: "Weapon Maintenance", kind: "ultimate",
      cost: "No listed cost", range: null, keywords: ["Encounter Start", "Flashback", "Stealth"],
      requires: "1 Ally's Smithed Weapon, or your own smithed weapon.",
      summary: [
        "The weapon gets +1 Power OR +1 Focus Material Bonus; if you smithed it, it gets both.",
        "This counts as the same bonus as a material like Tamahagane (doesn't stack with it).",
        "If the weapon gains no bonus from this, its crit range improves by 1 instead (e.g. 19-20 instead of 20; katana 18-20)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BLOODBINDER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("bloodbinder", {
  name: "Bloodbinder",
  url: "https://lyrian.splatpass.net/classes/bloodbinder/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 4,
  role: "Healer",
  secondary: null,
  requires: "At least 1 class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "transfusion-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "crimson-enmity" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "blood-drain" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "blood-shield" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-life-sacrifice" }
  ],
  abilities: {
    "transfusion-key": {
      name: "Transfusion (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "transfusion",
      summary: [ "Benefit 1: You can use Transfusion." ]
    },
    "transfusion": {
      name: "Transfusion", kind: "granted", grantedBy: "transfusion-key",
      cost: "0 AP", range: "40ft", keywords: ["Healing", "Aid", "Quick"], requires: null,
      summary: [
        "Sacrifice up to 2x your Toughness in HP; one ally in range recovers the same amount.",
        "The HP loss can't be reduced or absorbed by temporary HP and doesn't trigger damage-based effects."
      ]
    },
    "crimson-enmity": {
      name: "Crimson Enmity", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "While at or below 50% max HP during an Encounter, you have Crimson Enmity: your Bloodbinder healing (on allies or yourself) is x1.5.",
        "FAQ: checked when the ability is used, so Life Sacrifice's own HP cost doesn't trigger it for itself."
      ]
    },
    "blood-drain": {
      name: "Blood Drain", kind: "ability",
      cost: "1 AP, 1 MP", range: "40ft", keywords: ["Healing", "Safe"],
      requires: "Target must be a living creature and not an ally.",
      summary: [ "Light Attack dealing Dark damage. On hit, you recover HP equal to Toughness + 3." ]
    },
    "blood-shield": {
      name: "Blood Shield", kind: "ability",
      cost: "1 RP, 2 MP", range: "40ft", keywords: ["Aid", "Healing", "Shield"],
      requires: "Target must be the target of an attack.",
      summary: [
        "The target gains 1 RP that must be spent on a Block vs the triggering attack, with +5 Guard.",
        "Afterward, the target regains HP equal to half the damage the Block actually reduced."
      ]
    },
    "secret-art-life-sacrifice": {
      name: "Secret Art: Life Sacrifice", kind: "ultimate",
      cost: "1 AP", range: "40ft", keywords: ["Healing", "Secret Art", "Aid"], requires: null,
      summary: [
        "Lose HP down to 1; one ally in range recovers that amount. Overflow past their max HP becomes temporary HP.",
        "The HP loss can't be reduced or absorbed by temporary HP and doesn't trigger damage-based effects."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BODYGUARD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("bodyguard", {
  name: "Bodyguard",
  url: "https://lyrian.splatpass.net/classes/bodyguard/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Defender",
  secondary: null,
  requires: "Fighter, Maid or Armorsmith mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "vip-protection-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "shelter" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "temporary-protection" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "vengeance" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "at-your-side" }
  ],
  abilities: {
    "vip-protection-key": {
      name: "VIP Protection (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "vip-protection",
      summary: [
        "Benefit 1: At the start of each arc, pick one other person as your VIP for that arc. Several of your abilities target your VIP.",
        "Benefit 2: You can use VIP Protection.",
        "Benefit 3: While you have a VIP, you can't be the target of someone else's VIP Protection."
      ]
    },
    "vip-protection": {
      name: "VIP Protection", kind: "granted", grantedBy: "vip-protection-key",
      cost: "0 RP", range: "5ft", keywords: ["Rapid"],
      requires: "Your VIP is within 5ft of you and is the target of an attack that does not also target you.",
      summary: [
        "Redirect the attack to you. It hits you automatically; you can't Dodge, Block or similar against it.",
        "It keeps most of its targeting conditions (e.g. Full Pierce vs a downed target), and you count as standing in your VIP's spot for range. GM may apply race-based effects to you.",
        "Doesn't work on attacks of opportunity or an attack that's already been redirected."
      ]
    },
    "shelter": {
      name: "Shelter", kind: "ability",
      cost: "1 RP", range: "5ft", keywords: [],
      requires: "Your VIP is the target of an attack.",
      summary: [
        "Redirect the attack to you - usable even if you're also targeted (both resolve against you).",
        "You also get the Block action's benefits against it."
      ]
    },
    "temporary-protection": {
      name: "Temporary Protection", kind: "ability",
      cost: "0 AP, 3 MP", range: "30ft", keywords: [], requires: null,
      summary: [ "Until the encounter ends, the chosen ally also counts as your VIP." ]
    },
    "vengeance": {
      name: "Vengeance", kind: "ability",
      cost: "1 AP", range: "Weapon Range", keywords: ["Lock On", "Block Crush"],
      requires: "Your VIP was attacked last turn and you redirected an attack from them to you, or your VIP is downed.",
      summary: [ "Heavy Attack. If your VIP is at 0 HP or lower, it also gains Lock On and Block Crush." ]
    },
    "at-your-side": {
      name: "At your side", kind: "ultimate",
      cost: "0 RP, 2 MP", range: "Self", keywords: ["Teleport"], requires: null,
      summary: [ "Teleport up to 40ft, ending next to your VIP." ]
    }
  }
});

// ---------------------------------------------------------------------------
// BOTANIST  (checked 2026-10-20, site v0.13.2)  ** Level 8 MISSING on site **
// ---------------------------------------------------------------------------
CL("botanist", {
  name: "Botanist",
  url: "https://lyrian.splatpass.net/classes/botanist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Gatherer",
  secondary: "Utility",
  requires: "Forager mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "botany-study" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "memory-of-the-grove" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Foraging"],
      summary: "+5 skill points in Foraging. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "trail-mix" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "stalks-of-comparison" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: null, missing: "MISSING - Level 8 is blank on the site" }
  ],
  abilities: {
    "botany-study": {
      name: "Botany Study", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Tell whether foraged food is poisonous or unsafe (near-guaranteed). For common poisons, you also know the effect.",
        "Benefit 2: Camp Action - process some poisonous mushrooms, fruits and herbs into edible food, up to 100u at a time.",
        "Benefit 3: Harvest Tier 2 Foraging Outcrops.",
        "Benefit 4: Proficiency with Artifice Chainsaws, usable as a gathering tool."
      ]
    },
    "memory-of-the-grove": {
      name: "Memory of the Grove", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Usable after making a gathering check.",
      summary: [ "After a gathering check, reroll the die and store the original result. Later, you can swap a future gathering die result (before bonuses) for the stored value." ]
    },
    "trail-mix": {
      name: "Trail Mix", kind: "ability",
      cost: "Rest Action", range: null, keywords: [],
      requires: "20u of Food per serving",
      summary: [
        "Camp action: make up to 5 servings of trail meal (20u food each). Each gives 1 Mana (0 for Mirane).",
        "Prevents starvation, needs no culinary kit, and doesn't count as cooking for culinary actions (e.g. using stocks)."
      ]
    },
    "stalks-of-comparison": {
      name: "Stalks of Comparison", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Costs 1 Strike Dice",
      summary: [ "Make a gathering check toward Node Points or Lucky Points. If the raw roll beats your previous roll this session, add a bonus equal to your Foraging skill (max +10)." ]
    },
    "foragers-eye": {
      name: "Forager's Eye", kind: "unlisted",
      note: "Listed under Abilities unlocked but NOT in the progression - how it's gained is unknown.",
      cost: "1 AP", range: "120ft", keywords: ["Combo"],
      requires: "Can see or hear the target category.",
      summary: [
        "Search a 30x30 area in range (by sight and sound) for hidden plants, fungi, creatures or living enemy units. You become aware of the chosen species, or of all hostile enemy units; you need line of sight to spot them.",
        "Combo: the follow-up ability costs 1 less AP and Mana; the target's location is known to you and allies until the end of your next turn, and it loses Hiding.",
        "Mentions a bonus for Lifebeat Sense used right after, but the page doesn't say what it is."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// BRAWLER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("brawler", {
  name: "Brawler",
  url: "https://lyrian.splatpass.net/classes/brawler/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "shrug-it-off" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "counter-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "wind-up-punch" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "suckerpunch" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "knockout-punch" }
  ],
  abilities: {
    "shrug-it-off": {
      name: "Shrug it off", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "vital-drive-ii",
      summary: [ "Benefit 1: You can use Vital Drive II." ]
    },
    "vital-drive-ii": {
      name: "Vital Drive II", kind: "granted", grantedBy: "shrug-it-off",
      cost: "0 RP, Variable MP", range: "Self", keywords: ["Healing"],
      requires: "You took damage from an attack.",
      summary: [ "Regain HP equal to 5 x the Mana spent, up to the damage taken from the triggering attack." ]
    },
    "counter-stance": {
      name: "Counter Stance", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Counter", "Stance", "Unarmed Strike"], requires: null,
      summary: [
        "Stance: after an attack against you resolves, you may make a Melee Attack of Opportunity against the attacker.",
        "You can't Dodge or Block while in it. Cancel for 0 AP or 1 RP; otherwise lasts until you enter another stance."
      ]
    },
    "wind-up-punch": {
      name: "Wind-up Punch", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Overcharge", "Unarmed Strike"], requires: null,
      summary: [
        "Heavy attack against the target.",
        "Overcharge: each extra AP adds 1 Light Damage. All damage is totaled before Guard or damage reduction."
      ]
    },
    "suckerpunch": {
      name: "Suckerpunch", kind: "ability",
      cost: "No listed cost", range: "Melee Weapon Range", keywords: ["Encounter Start", "Sure Hit", "Unarmed Strike"], requires: null,
      summary: [ "Encounter Start: Heavy attack against the target. On damage, it becomes Unbalanced." ]
    },
    "knockout-punch": {
      name: "Knockout Punch", kind: "ultimate",
      cost: "4 AP", range: "Melee Weapon Range", keywords: ["Unarmed Strike"], requires: null,
      summary: [ "Heavy attack. On damage, a Grunt drops to 0 HP and falls unconscious (instead of dying)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CANNONEER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("cannoneer", {
  name: "Cannoneer",
  url: "https://lyrian.splatpass.net/classes/cannoneer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "cannon-expert" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cannonball" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Artifice", "Perception", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "high-power-shell" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "armor-crushing-shell" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "quantum-bomb" }
  ],
  abilities: {
    "cannon-expert": {
      name: "Cannon Expert", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "rocket-jump",
      summary: [
        "Benefit 1: Proficiency in Cannons.",
        "Benefit 2: Attacks with the Cannon keyword ignore cannons' 1-attack limit.",
        "Benefit 3: You can use Rocket Jump."
      ]
    },
    "rocket-jump": {
      name: "Rocket Jump", kind: "granted", grantedBy: "cannon-expert",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Sidestep"], requires: "Cannon only",
      summary: [ "Fire your cannon behind you to Sidestep 10ft. This doesn't reduce your cannon's range." ]
    },
    "cannonball": {
      name: "Cannonball", kind: "ability",
      cost: "4 AP", range: "Ranged Weapon Range", keywords: ["Cannon", "Artillery"], requires: "Cannon only",
      summary: [
        "2 heavy attacks on the target, plus a light attack on every other enemy within 5ft of it.",
        "The splash light attack is affected by cannon mods that change basic-attack splash."
      ]
    },
    "high-power-shell": {
      name: "High Power Shell", kind: "ability",
      cost: "2 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Cannon", "Artillery"], requires: "Cannon only",
      summary: [ "Heavy attack. On damage, push the target back 10ft. You're pushed back 5ft whether it hits or not." ]
    },
    "armor-crushing-shell": {
      name: "Armor Crushing Shell", kind: "ability",
      cost: "1 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Artillery", "Sunder", "Cannon"], requires: "Cannon only",
      summary: [ "Light attack. On damage, apply Sunder 2 until the start of your next turn." ]
    },
    "quantum-bomb": {
      name: "Quantum Bomb", kind: "ultimate",
      cost: "1 AP", range: "Ranged Weapon Range", keywords: ["Setup", "Cannon", "Artillery"], requires: "Cannon only",
      summary: [ "Heavy attack against the target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CARPENTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("carpenter", {
  name: "Carpenter",
  url: "https://lyrian.splatpass.net/classes/carpenter/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Striker",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "carpenter-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "repair-wood-weapon" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Carpentry": 5 },
      options: ["Athletics", "History", "Common Knowledge"],
      summary: "+5 skill points in Carpentry, PLUS +5 among Athletics, History or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "hammer-and-nail" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "in-the-zone" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "felling-strike" }
  ],
  abilities: {
    "carpenter-basics": {
      name: "Carpenter Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "carpenter-core-crafting",
      summary: [
        "Benefit 1: A carpenter's chisel works as your crafting tool for carpentry crafts and buildings.",
        "Benefit 2: Craft with Pine, Maple and alloys. You can spend an IP to perform an EP action tied to this key ability, up to 4 times.",
        "Benefit 3: Proficiency in Axes, plus Bows OR Crossbows.",
        "Benefit 4: You can use the Carpenter core crafting abilities."
      ]
    },
    "carpenter-core-crafting": {
      name: "Carpenter Basics (crafting abilities)", kind: "granted", grantedBy: "carpenter-basics",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Carpenter's Modification A", cost: "X Crafting Points",
          summary: "Add an A-type modification to a weapon or tool (see Universal Weapon page)." },
        { name: "Joining and Assembling", cost: "X Crafting Points",
          summary: "Mix a special material into a project; each material has its own cost." },
        { name: "Create Oil Coating", cost: "Errand",
          summary: "Make an Oil Coating from Carpenter materials." },
        { name: "Create Wood Block", cost: "Errand",
          summary: "Make a Wood Block from Carpenter materials." },
        { name: "Infuse Wand", cost: "5 Crafting Points",
          summary: "Add a drop of an element-changing Oil Coating to a wand, changing its built-in damage type to the oil's element. The oil isn't used up." }
      ],
      summary: [ "Five crafting abilities (see subAbilities)." ]
    },
    "repair-wood-weapon": {
      name: "Repair Wood Weapon", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude", "Errand"], requires: null,
      summary: [ "Errand: repair a broken carpentry weapon." ]
    },
    "hammer-and-nail": {
      name: "Hammer and Nail", kind: "ability",
      cost: "1 RP, 1 MP", range: "Melee Weapon Range", keywords: ["Sure Hit", "Full Pierce", "Rage"],
      requires: "An ally dealt damage to a target that didn't take a defense action.",
      summary: [ "Light attack against the target with Sure Hit and Full Pierce." ]
    },
    "in-the-zone": {
      name: "In The Zone", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be in a crafting session. Costs 1 Crafting Dice.",
      summary: [ "Add a crafting check to the item with +X, where X = crafting dice spent this session." ]
    },
    "felling-strike": {
      name: "Felling Strike", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: [],
      requires: "Axe, Chainsaw and Giant Scissors only.",
      summary: [ "Heavy attack on an enemy no bigger than Large. On damage, Sidestep to an empty space next to it (same elevation), then knock it back 10ft." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CAVALIER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("cavalier", {
  name: "Cavalier",
  url: "https://lyrian.splatpass.net/classes/cavalier/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Utility",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mounted-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "canter" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "horse-whistle" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "rider-and-mount-as-one" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "trample" }
  ],
  abilities: {
    "mounted-basics": {
      name: "Mounted Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "spirit-jump",
      grants: { skill: "Riding", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency in Polearms, Lances, Light Armor, Shields, and one other common weapon group of your choice.",
        "Benefit 2: +5 Riding skill points; any point can be traded for 2 expertise points in Riding.",
        "Benefit 3: You can use Spirit Jump.",
        "Benefit 4: Once Cavalier is mastered, once per encounter your mount survives a lethal blow at 1 HP."
      ]
    },
    "spirit-jump": {
      name: "Spirit Jump", kind: "granted", grantedBy: "mounted-basics",
      cost: "0 AP, 2 MP", range: "Self", keywords: [], requires: "Must be mounted",
      summary: [
        "You and your mount jump up to 60ft straight up, then up to 5ft horizontally. Unless the mount flies, you drop straight down at the end of your turn; the fall doesn't provoke and deals no fall damage.",
        "No non-teleport movement while airborne, but you can take other actions.",
        "Trade height for horizontal distance 1:1 in 5ft steps, up to 40ft extra horizontal.",
        "Preparing for 1 minute makes it cost 0 Mana."
      ]
    },
    "canter": {
      name: "Canter", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Sidestep"],
      requires: "Must be mounted. Usable immediately after a weapon attack.",
      summary: [ "Sidestep 10ft." ]
    },
    "horse-whistle": {
      name: "Horse Whistle", kind: "ability",
      cost: "0 RP, 1 MP", range: "Sight", keywords: ["Sidestep"],
      requires: "Must NOT be mounted",
      summary: [
        "Your last mount this arc Sidesteps up to its speed toward you (with Trample if you have it).",
        "If it ends on your square, mount it for 0 RP; this clears Prone."
      ]
    },
    "rider-and-mount-as-one": {
      name: "Rider & Mount As One", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: [], requires: null,
      summary: [
        "While mounted and not flying, you and your mount count as one target. Nothing can target the mount (even allies) unless it specifically names it.",
        "Your buffs and debuffs also apply to your mount's movement and speed."
      ]
    },
    "trample": {
      name: "Trample", kind: "ultimate",
      cost: "0 RP", range: "Self", keywords: ["Sure Hit"], requires: "Must be mounted",
      summary: [
        "Activate after moving 20ft+ in one movement action (teleports don't count; multi-AP movement counts as one action). Lasts until you stop moving.",
        "While active, moving doesn't provoke and you can move into enemies at least one size smaller than your mount.",
        "Each enemy can spend 1 RP to step to an empty square within 5ft. If not, make a Sure Hit Light attack with your mount's stats; on damage it's knocked Prone into the square you came from and you keep moving. Otherwise your movement ends.",
        "Each enemy is affected only once per activation."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CHRONOFIGHTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("chronofighter", {
  name: "Chronofighter",
  url: "https://lyrian.splatpass.net/classes/chronofighter/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 4,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered, proficient in any melee weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "past-self-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "accelerating-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Magic", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "delayed-hit" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "attacks-from-the-past" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-everything-everywhere-all-at-once" }
  ],
  abilities: {
    "past-self-key": {
      name: "Past Self (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "past-self",
      summary: [
        "Benefit 1: You can use Past Self.",
        "Benefit 2: The Delay encounter start action doesn't use up your encounter start action, and you can use it multiple times."
      ]
    },
    "past-self": {
      name: "Past Self", kind: "granted", grantedBy: "past-self-key",
      cost: "0 AP", range: "Self", keywords: ["Opener", "Quick"], requires: null,
      summary: [
        "Place a past-self token at your position until the encounter ends. Other abilities can use tokens; they can't normally be attacked and can't be moved.",
        "Your weapon attacks can originate from a token. After a token attacks, it can be targeted for 1 round as if you were there (not hit twice by the same attack)."
      ]
    },
    "accelerating-strike": {
      name: "Accelerating Strike", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [ "Heavy Attack, then gain Accelerating Strike: your Initiative rises by up to 2." ]
    },
    "delayed-hit": {
      name: "Delayed Hit", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [
        "Heavy Attack that deals no damage now. If it hits, the target takes Heavy Damage at the start of your next turn - even if it guarded the original attack.",
        "The delayed damage uses the target's Guard at the moment it lands."
      ]
    },
    "attacks-from-the-past": {
      name: "Attacks from the Past", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [
        "After a melee weapon attack, repeat it from one of your past-self tokens (can target the same enemy).",
        "Only attacks with a base cost of 2 AP or less; not Secret Arts or once-per-combat/arc attacks. Mana costs are paid again."
      ]
    },
    "secret-art-everything-everywhere-all-at-once": {
      name: "Secret Art: Everything, Everywhere, All At Once", kind: "ultimate",
      cost: "3 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Secret Art"], requires: null,
      summary: [ "Heavy Attack on an enemy, then repeat it from every past-self token (each can target the same enemy)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// CHRONOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("chronomancer", {
  name: "Chronomancer",
  url: "https://lyrian.splatpass.net/classes/chronomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: "Controller",
  requires: "Mage or Sorcerer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "store-time-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "slow" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "History"],
      summary: "+5 skill points in Magic or History. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "accelerando" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "haste" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-galaxy-stop" }
  ],
  abilities: {
    "store-time-key": {
      name: "Store Time (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "store-time",
      summary: [ "Benefit 1: You can use Store Time." ]
    },
    "store-time": {
      name: "Store Time", kind: "granted", grantedBy: "store-time-key",
      cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Gain Store Time: +1 AP at the start of your next turn." ]
    },
    "slow": {
      name: "Slow", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Spell", "Slow"], requires: null,
      summary: [ "The target is Slowed until the start of your next turn unless it pays 1 RP to resist." ]
    },
    "accelerando": {
      name: "Accelerando", kind: "ability",
      cost: "No listed cost", range: "120ft", keywords: ["Encounter Start"], requires: null,
      summary: [ "Encounter Start: give yourself or an ally +4 initiative." ]
    },
    "haste": {
      name: "Haste", kind: "ability",
      cost: "1 RP, 2 MP", range: "60ft", keywords: ["Spell", "Circuit"], requires: null,
      summary: [ "The target gains Haste: +2 AP for the rest of this turn. A target can only be Hasted once per turn." ]
    },
    "secret-art-galaxy-stop": {
      name: "Secret Art: Galaxy Stop", kind: "ultimate",
      cost: "3 AP, 3 MP", range: "2000ft Radius", keywords: ["Secret Art", "Spell"], requires: null,
      summary: [ "Freeze time in the area: all non-heroic units in range can't act until the end of their next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// COLOSSUS  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("colossus", {
  name: "Colossus",
  url: "https://lyrian.splatpass.net/classes/colossus/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Any tier 2 class mastered. Adventurer or Fighter mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "titans-grip" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mighty-leap" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "double-slam" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "two-sword-crush" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-titan-blade" }
  ],
  abilities: {
    "titans-grip": {
      name: "Titan's Grip", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Hold a Two-Handed weapon in one hand, so your off hand can hold a second Two-Handed weapon or a shield.",
        "Benefit 2: While dual wielding Two-Handed weapons, make dual-wield attacks with them as if they were One-Handed."
      ]
    },
    "mighty-leap": {
      name: "Mighty Leap", kind: "ability",
      cost: "2 AP, 1 MP", range: "40ft", keywords: ["Unbalanced", "Jump"],
      requires: "Two-Handed melee weapons only",
      summary: [ "Jump to a target within 40ft and you may make a Light attack on it. Each enemy within 5ft of it saves or becomes Unbalanced." ]
    },
    "double-slam": {
      name: "Double Slam", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unbalanced"],
      requires: "Two-Handed weapons only",
      summary: [
        "Up to 2 Light attacks on one target, paying 1 AP + 1 Mana each (only 1 if you wield just one Two-Handed weapon).",
        "If either deals damage, the target becomes Unbalanced; if already Unbalanced, it's knocked Prone instead."
      ]
    },
    "two-sword-crush": {
      name: "Two Sword Crush", kind: "ability",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Rage", "Augment"],
      requires: "After a hit with a Two-Handed melee weapon, while dual wielding a second Two-Handed melee weapon.",
      summary: [ "Add your Light damage to the attack." ]
    },
    "secret-art-titan-blade": {
      name: "Secret Art: Titan Blade", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "40ft", keywords: ["Sure Hit", "Full Pierce", "Secret Art", "Scatter"],
      requires: "Must be wielding two Two-Handed melee weapons.",
      summary: [
        "Melee Heavy attack against every enemy in a 15ft-wide line up to range; those damaged are knocked Prone.",
        "A shockwave follows: a second Heavy attack against every enemy still in the line, with Sure Hit and Full Pierce against Prone targets."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CRYOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("cryomancer", {
  name: "Cryomancer",
  url: "https://lyrian.splatpass.net/classes/cryomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Any class mastered or Frost mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "ice-cold" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "icicle-nail" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "sheet-ice" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "glacial-wall" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "frost-coffin" }
  ],
  abilities: {
    "ice-cold": {
      name: "Ice Cold", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Frost" },
      summary: [
        "Benefit 1: Immune to Slows and difficult terrain from Frost-keyword effects.",
        "Benefit 2: Immune to ordinary cold weather effects.",
        "Benefit 3: Gain Frost Mastery (use Frost in Channeling weapon attacks and do minor Frost tricks)."
      ]
    },
    "icicle-nail": {
      name: "Icicle Nail", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Frost", "Slow", "Spell"], requires: null,
      summary: [ "Light Attack dealing Frost damage. On hit, the target is Slowed until the end of its next turn." ]
    },
    "sheet-ice": {
      name: "Sheet Ice", kind: "ability",
      cost: "1 AP", range: "120ft", keywords: ["Frost", "Spell", "Upkeep"], requires: null,
      summary: [
        "Freeze the ground in a 20x20 area into difficult terrain until the end of your next turn.",
        "Upkeep: 1 Mana per instance to extend it to the end of your next turn."
      ]
    },
    "glacial-wall": {
      name: "Glacial Wall", kind: "ability",
      cost: "2 AP, Variable MP", range: "30ft", keywords: ["Frost", "Spell"], requires: null,
      summary: [
        "Create 4 x X connected 5x5ft ice cubes lasting up to 24 hours. Each cube has HP = 20 + Focus and counts as low cover.",
        "Fire attacks deal double damage to ice wall segments."
      ]
    },
    "frost-coffin": {
      name: "Frost Coffin", kind: "ultimate",
      cost: "3 AP, 3 MP", range: "30ft", keywords: ["Frost", "Spell"], requires: null,
      summary: [
        "Flash-freeze one Grunt, killing it instantly, and leave a stack of two Glacial Wall cubes there (HP = 15 + Focus each; counts as cover).",
        "Fire attacks deal double damage to ice wall segments."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CULINARIAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("culinarian", {
  name: "Culinarian",
  url: "https://lyrian.splatpass.net/classes/culinarian/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Controller",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "culinary-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "perfect-seasoning" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Culinary": 5 },
      options: ["Art", "Medicine", "Perception", "Common Knowledge"],
      summary: "+5 skill points in Culinary, PLUS +5 among Art, Medicine, Perception or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "oil-slick" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "craft-pemmican" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "pepper-spray" }
  ],
  abilities: {
    "culinary-basics": {
      name: "Culinary Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "culinarian-core-crafting",
      summary: [
        "Benefit 1: Gain the Culinarian Core Crafting abilities.",
        "Benefit 2: Craft stocks from advanced and base materials. Per IP, you can perform a tied EP action 4 times.",
        "Benefit 3: A Frying Pan works as your crafting tool and as a Light Bludgeoning weapon you're proficient with.",
        "Benefit 4: Proficiency in small weapons."
      ]
    },
    "culinarian-core-crafting": {
      name: "Culinary Basics (crafting abilities)", kind: "granted", grantedBy: "culinary-basics",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Mushroom Stock", cost: "15 CP", summary: "+1 Focus food bonus for 24 hours. Needs 1 Box of Fresh Mushrooms." },
        { name: "Meaty Stock", cost: "15 CP", summary: "+1 Power food bonus for 24 hours. Needs 1 Box of Fresh Meat." },
        { name: "Fish Stock", cost: "15 CP", summary: "+1 Toughness food bonus for 24 hours. Needs 1 Box of Fresh Fish." },
        { name: "Vegetable Stock", cost: "15 CP", summary: "+1 Agility food bonus for 24 hours. Needs 1 Box of Fresh Vegetables." },
        { name: "Spicy Stock", cost: "30 CP", summary: "+1 Crafting food bonus for 24 hours. Needs 1 bundle of Spicy Peppers." },
        { name: "Herbal Stock", cost: "30 CP", summary: "+1 Gathering food bonus for 24 hours. Needs 1 bundle of Fresh Cooking Herbs. On a node, lasts for that whole node unless you skip a day of harvesting it." },
        { name: "Stir Layered Flavors", cost: "30 CP", summary: "Add a second flavor (with its ingredient), e.g. Mushroom + Meaty = +1 Power and +1 Focus." },
        { name: "Use Every Last Drop", cost: "15 CP", summary: "Stock yield +2." },
        { name: "Secret Ingredient", cost: "X CP", summary: "Add a special material; cost depends on the material." },
        { name: "Create Box or Bundle of Food", cost: "Errand", summary: "Make 5 boxes/bundles of any kind per errand; each needs 500u of matching material." }
      ],
      summary: [ "Stock recipes and food crafting (see subAbilities). Stocks don't stack with each other unless noted." ]
    },
    "perfect-seasoning": {
      name: "Perfect Seasoning", kind: "ability",
      cost: "1 Crafting Dice", range: null, keywords: ["Rapid"],
      requires: "In a crafting session, and you added a special ingredient (box of food or alloy materials) in your last action.",
      summary: [ "Make a crafting check with +3." ]
    },
    "oil-slick": {
      name: "Oil Slick", kind: "ability",
      cost: "2 AP, 1 MP", range: "30ft", keywords: [], requires: null,
      summary: [
        "Place a 15x15 patch of slippery oil in range until the start of your next turn.",
        "Anything that touches it during a movement (start or end included) and moves more than 5ft in that one movement action falls Prone."
      ]
    },
    "craft-pemmican": {
      name: "Craft Pemmican", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Errand"], requires: null,
      summary: [
        "Turn up to 1000u of food into 25 Pemmican Bars (40u each) - shelf-stable, about as good as Military Rations.",
        "As an IP action: up to 2000u into 50 bars."
      ]
    },
    "pepper-spray": {
      name: "Pepper Spray", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "5ft", keywords: ["Blinded"], requires: null,
      summary: [
        "Can pay 1 RP + 1 extra Mana instead of the AP cost.",
        "Throw ground chili into a 15ft cube in front of you: everything inside gets Pepper Spray (Blinded 4, no sense of smell).",
        "The target or an ally within 5ft can spend 1 AP to wipe it off; otherwise it ends at the end of the target's next turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CULTIVATOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("cultivator", {
  name: "Cultivator",
  url: "https://lyrian.splatpass.net/classes/cultivator/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Utility",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "cultivators-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "ki-circulation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Deception", "Perception", "Insight", "Medicine", "Intimidation", "Stealth", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "ki-sense" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "ki-recovery" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "sword-riding-art" }
  ],
  abilities: {
    "cultivators-journey": {
      name: "Cultivator's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { points: 5, expertiseTrade: true,
                options: ["Appraise", "Athletics", "Deception", "Perception", "Insight", "Medicine", "Intimidation", "Stealth", "Common Knowledge"] },
      summary: [
        "Benefit 1: Your unarmed attacks count as a One-Handed Weapon you're proficient with.",
        "Benefit 2: Proficiency with Light Armor, Light Swords, and one additional weapon of your choice.",
        "Benefit 3: +5 skill points among Appraise, Athletics, Deception, Perception, Insight, Medicine, Intimidation, Stealth or Common Knowledge; any point can be traded for 2 expertise points in these skills."
      ]
    },
    "ki-circulation": {
      name: "Ki Circulation", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: [], requires: null,
      summary: [ "Remove Bleeding, Shaken, Unbalanced, or any one Poison effect from yourself." ]
    },
    "ki-sense": {
      name: "Ki Sense", kind: "ability",
      cost: "0 AP, 1 MP", range: "40ft", keywords: ["Stealth"], requires: null,
      summary: [
        "Sense creatures within 40ft that lack Presence Concealment and get a rough idea of where they are (doesn't remove Hiding).",
        "Until the start of your next turn, their attacks on you get no Trick Attack or other stealth/surprise bonuses."
      ]
    },
    "ki-recovery": {
      name: "Ki Recovery", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Conclusion"], requires: null,
      summary: [ "Spend your Encounter Conclusion action to regain 2 Mana." ]
    },
    "sword-riding-art": {
      name: "Sword Riding Art", kind: "ultimate",
      cost: "0 AP, 1 MP", range: "Self", keywords: [],
      requires: "Must hold a Light Sword or two-handed melee weapon.",
      summary: [
        "Ride a carried light sword, versatile melee weapon, greatshield, bayonet musket or two-handed melee weapon, gaining Flight for up to 5 minutes.",
        "Taking damage while above 5ft drops you 20ft. If that reaches the ground, you can dismount and return the weapon to hand for 0 RP, ending it.",
        "If the attacker is another flying creature, you don't drop but become Unbalanced.",
        "If knocked back, save vs the attacker's Potency or be blown off your sword."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CURSE KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("curse-knight", {
  name: "Curse Knight",
  url: "https://lyrian.splatpass.net/classes/curse-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "on-my-terms" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "backlash" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Deception", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "devils-curse" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "devils-blow" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-life-bet" }
  ],
  abilities: {
    "on-my-terms": {
      name: "On my terms", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: While at 1+ HP, damage you take during your own turn (even true damage) can't drop you below 1 HP.",
        "Benefit 2: Rolling a 1 on a skill check may cause something unexpected (GM's call) - usually bad, sometimes good."
      ]
    },
    "backlash": {
      name: "Backlash", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Lockstep"], requires: null,
      summary: [ "Light attack. You take true damage equal to half the damage dealt." ]
    },
    "devils-curse": {
      name: "Devil's Curse", kind: "ability",
      cost: "0 RP, 2 MP", range: "Self", keywords: [],
      requires: "An enemy accuracy check against you rolls a 1.",
      summary: [
        "The attacker takes damage equal to the triggering attack's damage roll; they can't Dodge or Block it.",
        "Doesn't work against Secret Arts, Climax Arts or similar-level abilities."
      ]
    },
    "devils-blow": {
      name: "Devil's Blow", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Full Pierce"], requires: null,
      summary: [
        "Heavy attack (the attack itself doesn't have Full Pierce).",
        "If the accuracy check rolls a 1, you take Full Pierce damage of the attack's type equal to its damage roll, and you get the Mana back."
      ]
    },
    "secret-art-life-bet": {
      name: "Secret Art: Life Bet", kind: "ultimate",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Secret Art"], requires: null,
      summary: [
        "Drop your HP to 1, then Heavy attack with bonus damage equal to the HP you lost.",
        "If the attack doesn't meet the target's base evasion, the lost HP is refunded (still uses your Secret Art for the fight)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// CUTTHROAT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("cutthroat", {
  name: "Cutthroat",
  url: "https://lyrian.splatpass.net/classes/cutthroat/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Culinarian or Rogue mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "surgical-precision" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "exposing-stab" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "feinting-stab" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "devastating-strike-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "artery-cut" }
  ],
  abilities: {
    "surgical-precision": {
      name: "Surgical Precision", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When you deal damage with a one-handed melee weapon attack that has both Sure Hit and Full Pierce, or land a critical hit, the target gains Bleeding for 1 turn. Stacks with other Bleeding and with itself, up to 3 times." ]
    },
    "exposing-stab": {
      name: "Exposing Stab", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [ "Light attack. On damage, until the end of your turn you can use Devastating Strike on that target as if it had 0 RP." ]
    },
    "feinting-stab": {
      name: "Feinting Stab", kind: "ability",
      cost: "2 AP, 1 MP", range: "5ft", keywords: [],
      requires: "At least two enemies within range.",
      summary: [ "Heavy attack. If the target reacts at all, you can cancel and make the attack against a different enemy in range instead. The first target's RP isn't refunded." ]
    },
    "devastating-strike-ii": {
      name: "Devastating Strike II", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Sure Hit", "Full Pierce"],
      requires: "The target has no RP.",
      summary: [ "Light attack with dice maximized instead of rolled." ]
    },
    "artery-cut": {
      name: "Artery Cut", kind: "ultimate",
      cost: "1 RP", range: "Melee Weapon Range", keywords: [],
      requires: "One-Handed weapon only. After a Light attack hits and isn't reacted against.",
      summary: [ "Turn the hit into a critical hit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DAIONMYOJI  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("daionmyoji", {
  name: "Daionmyoji",
  url: "https://lyrian.splatpass.net/classes/daionmyoji/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Onmyoji mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "spell-transfer" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "prepared-talisman" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Religion", "Magic", "Perception", "Insight", "Art", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "spiritual-reading" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "talisman-recursion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-within-this-ink-the-perfect-answer" }
  ],
  abilities: {
    "spell-transfer": {
      name: "Spell Transfer", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When you use Create Talisman, an ally can spend their Errand action to fill the talisman with one of their own spells instead of yours. 1 copy per Errand; no Secret Art spells." ]
    },
    "prepared-talisman": {
      name: "Prepared Talisman", kind: "ability",
      cost: "No listed cost", range: "5ft", keywords: [], requires: "Special",
      summary: [
        "Place a talisman on a surface or creature within 5ft, paying its normal AP and Mana. Unwilling targets need an accuracy roll (they can Dodge normally).",
        "For the rest of the encounter or the next 5 minutes, trigger it instantly for 0 RP. Triggered on a creature, it gains Sure Hit against that creature.",
        "A target can remove it by spending AP equal to the talisman's AP cost (before reductions); once removal starts it can't be triggered, and a removed talisman is powerless.",
        "Limits: 1 prepared talisman at a time; not Sealing Talismans; AP cost 4 or less (or 10 seconds or less of casting)."
      ]
    },
    "spiritual-reading": {
      name: "Spiritual Reading", kind: "ability",
      cost: "0 AP, 1 MP", range: "120ft", keywords: ["Analyze"], requires: null,
      summary: [
        "Creatures: learn if the target is non-heroic, weaker, about equal, stronger or much stronger than you (GM may give its Spirit Core value). You can tell if someone hides their Spirit Core level, but get no accurate read. You also see its Mana % until the encounter ends.",
        "Items: learn if it's magical; if so, make an immediate Magic check to learn its effect, like Decipher Magic with +5."
      ]
    },
    "talisman-recursion": {
      name: "Talisman Recursion", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: [], requires: null,
      summary: [ "Right after using a talisman, pay its cost again (before reductions) to repeat its effect without using another talisman. Same target if it had one. Not for Secret Talismans." ]
    },
    "secret-art-within-this-ink-the-perfect-answer": {
      name: "Secret Art: Within This Ink, The Perfect Answer", kind: "ultimate",
      cost: "0 AP", range: "Special", keywords: ["Flashback", "Secret Art"], requires: null,
      usage: "Once per arc.",
      summary: [
        "Draw and immediately use a special talisman holding any base-game spell on the website (no secret or esoteric art spells). Pay its costs normally.",
        "You must also pay the calligraphy units as if you'd made it. If you can't, you go into debt: no making talismans or using this until you pay it off."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// DARK PRIEST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("dark-priest", {
  name: "Dark Priest",
  url: "https://lyrian.splatpass.net/classes/dark-priest/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Healer",
  secondary: "Support",
  requires: "Acolyte, Mage, Sorcerer or Eremancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "soul-absorption-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "gloom-infusion" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Religion", "Magic", "History", "Appraise", "Deception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "dark-healing" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "dark-barrier" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "stygian-screen" }
  ],
  abilities: {
    "soul-absorption-key": {
      name: "Soul Absorption (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "soul-absorption",
      grants: { mastery: "Dark" },
      summary: [
        "Benefit 1: You gain Elemental Mastery: Dark.",
        "Benefit 2: You can use Soul Absorption."
      ]
    },
    "soul-absorption": {
      name: "Soul Absorption", kind: "granted", grantedBy: "soul-absorption-key",
      cost: "0 AP, 1 MP", range: "20ft", keywords: ["Spell", "Dark", "Full Pierce", "Sure Hit"], requires: null,
      summary: [ "Light Attack on a willing target dealing Light Dark damage. Your next Dark-type Spell or Attack (not Soul Absorption) deals extra damage equal to what they took. Doesn't stack." ]
    },
    "gloom-infusion": {
      name: "Gloom Infusion", kind: "ability",
      cost: "1 AP", range: "30ft", keywords: ["Spell", "Dark", "Type"], requires: null,
      summary: [
        "A willing target becomes type Dark II: half damage from Dark damage/Dark-keyword attacks (not true damage), +50% damage from Holy damage/Holy-keyword attacks.",
        "While it lasts: 60ft Darkvision and +4 to saves vs mind-affecting effects.",
        "Lasts until the encounter ends or a stronger type overwrites it."
      ]
    },
    "dark-healing": {
      name: "Dark Healing", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Spell", "Dark", "Full Pierce", "Healing"], requires: null,
      summary: [ "Take Light (1 AP) or Heavy (2 AP) damage yourself, then heal a target in range by the same amount. You can ignore your own Dark resistance or damage reduction for this." ]
    },
    "dark-barrier": {
      name: "Dark Barrier", kind: "ability",
      cost: "2 AP, 3 MP", range: "40ft", keywords: ["Spell", "Dark", "Full Pierce", "Shield"], requires: null,
      summary: [ "You and up to 4 willing allies in range take Light Dark damage, then each gains temporary HP equal to double the damage taken, until the encounter ends. You can ignore allies' Dark resistance or damage reduction." ]
    },
    "stygian-screen": {
      name: "Stygian Screen", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "30ft", keywords: ["Spell", "Dark", "Concentration"], requires: null,
      summary: [ "Create a straight wall of darkness 20ft long, 5ft wide, 10ft high that blocks line of sight. Anyone inside can only see 5ft." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DEADEYE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("deadeye", {
  name: "Deadeye",
  url: "https://lyrian.splatpass.net/classes/deadeye/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Marksman, Gunslinger, Scout, Harrier or Archer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "superior-assessment" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "disarming-shot" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "countershot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "aimed-shot" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-perfect-repetition" }
  ],
  abilities: {
    "superior-assessment": {
      name: "Superior Assessment", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "status-assessment-iii",
      summary: [ "Benefit 1: You can use Status Assessment III." ]
    },
    "status-assessment-iii": {
      name: "Status Assessment III", kind: "granted", grantedBy: "superior-assessment",
      cost: "0 AP", range: "Sight", keywords: ["Analyze", "Stealth"], requires: null,
      summary: [
        "Until combat ends, see the unit's approximate HP % and RP % (DM should turn on health bars).",
        "Also reveals current damage-type weaknesses/strengths and which body parts can be targeted and destroyed, if any."
      ]
    },
    "disarming-shot": {
      name: "Disarming Shot", kind: "ability",
      cost: "2 AP, 2 MP", range: "Ranged Weapon Range", keywords: ["Disarm"], requires: null,
      summary: [ "Heavy Attack. If it beats the target's passive evasion (before Dodge bonuses), the target is Disarmed until the start of your next turn; it can spend 1 RP to avoid the disarm (on top of RP spent vs the attack)." ]
    },
    "countershot": {
      name: "Countershot", kind: "ability",
      cost: "1 RP", range: "Ranged Weapon Range", keywords: [],
      requires: "You or an ally is targeted by a ranged weapon attack.",
      summary: [ "Precise Attack against the incoming attack. If your accuracy check matches or beats theirs, the attack is negated." ]
    },
    "aimed-shot": {
      name: "Aimed Shot", kind: "ability",
      cost: "2 AP, 2 MP", range: "Ranged Weapon Range", keywords: ["Lock On"], requires: null,
      refund: { overlapsWith: ["Sniper"], amount: "full",
                note: "Page says refund possible; Sniper also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Heavy Attack against the target." ]
    },
    "secret-art-perfect-repetition": {
      name: "Secret Art: Perfect Repetition", kind: "ultimate",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: ["Secret Art"], requires: null,
      summary: [ "Heavy Attack. If it deals damage, next turn you can repeat it on the same target with the same accuracy roll - and keep repeating each turn until you skip a turn or it fails to deal damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// DEATH KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("death-knight", {
  name: "Death Knight",
  url: "https://lyrian.splatpass.net/classes/death-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Defender",
  secondary: "Striker",
  requires: "Armorsmith or Fighter mastered and any tier 2 class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "bone-armor-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "unholy-pact" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Religion", "Survival", "Intimidation", "Perception", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "call-of-the-grave" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cant-escape-death" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-unholy-strength" }
  ],
  abilities: {
    "bone-armor-key": {
      name: "Bone Armor (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "bone-armor",
      summary: [ "Benefit 1: You can use Bone Armor." ]
    },
    "bone-armor": {
      name: "Bone Armor", kind: "granted", grantedBy: "bone-armor-key",
      cost: "1 AP", range: "30ft", keywords: [], requires: "Corpse within range.",
      summary: [ "Destroy a corpse within 30ft to gain Bone Armor: +2 Guard until the encounter ends or you take 2+ damage from an attack." ]
    },
    "unholy-pact": {
      name: "Unholy Pact", kind: "ability",
      cost: "1 AP, 2 MP", range: "Self", keywords: ["Healing"],
      requires: "Bone Armor is active on you.",
      summary: [ "Remove your Bone Armor to heal yourself for Power x 2 and get +2 Power on your next attack." ]
    },
    "call-of-the-grave": {
      name: "Call of the Grave", kind: "ability",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Challenge"], requires: null,
      summary: [ "Heavy Attack dealing Dark damage. On hit, if the target is Large or smaller, pull it to you; it's Challenged until the start of your next turn. Doesn't provoke attacks of opportunity." ]
    },
    "cant-escape-death": {
      name: "Can't Escape Death", kind: "ability",
      cost: "0 RP", range: "Melee Weapon Range", keywords: ["Sidestep"],
      requires: "A target Challenged by you leaves your melee range.",
      summary: [ "After it finishes moving, Sidestep up to your speed toward it. For 1 RP, move double your speed instead." ]
    },
    "secret-art-unholy-strength": {
      name: "Secret Art: Unholy Strength", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Upkeep"], requires: null,
      summary: [
        "Gain Unholy Strength: +2 Power and +2 Focus. Upkeep: 1 Mana.",
        "While active, your melee weapon attacks and physical-damage abilities deal Dark damage instead, and your Bone Armor doesn't break from damage."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// DRAGOON  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("dragoon", {
  name: "Dragoon",
  url: "https://lyrian.splatpass.net/classes/dragoon/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Lancer mastered. 10 points in the Athletics (Jumping) expertise skill, OR be a Jiangshi.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "jump-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "skydive" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge", "Expert Knowledge (relevant, DM approval)"],
      summary: "+5 skill points among Athletics, Riding, Intimidation, Perception, Common Knowledge, or a relevant Expert Knowledge skill (DM approval). Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "dragonfire-dive" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "jump-back" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-dragonslaying-jump" }
  ],
  abilities: {
    "jump-key": {
      name: "Jump (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "jump",
      summary: [
        "Benefit 1: You take no fall damage when using Jump-keyword abilities.",
        "Benefit 2: You can use Jump."
      ]
    },
    "jump": {
      name: "Jump", kind: "granted", grantedBy: "jump-key",
      cost: "2 AP", range: null, keywords: ["Jump", "Sidestep"], requires: null,
      summary: [ "Leap up to 30ft into the air, then Sidestep up to 2x your Speed. You can use Skydive at any point during this movement." ]
    },
    "skydive": {
      name: "Skydive", kind: "ability",
      cost: "2 AP", range: "Special", keywords: ["Jump"],
      requires: "Must be airborne; polearm only.",
      summary: [ "Pick an enemy below you within 5ft horizontally, dive onto it and make a Heavy Attack with +1 damage per 10ft fallen (max +10)." ]
    },
    "dragonfire-dive": {
      name: "Dragonfire Dive", kind: "ability",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Fire", "Jump", "Blanketing"], requires: "Polearm only.",
      summary: [ "Jump to the target without provoking attacks of opportunity and make a Heavy Fire attack against it and every other creature within 5ft of it." ]
    },
    "jump-back": {
      name: "Jump Back", kind: "ability",
      cost: "0 AP", range: "120ft", keywords: ["Jump", "Quick"],
      requires: "Previous action had the Jump keyword.",
      summary: [ "Return to your previous location without provoking attacks of opportunity." ]
    },
    "secret-art-dragonslaying-jump": {
      name: "Secret Art: Dragonslaying Jump", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "120ft", keywords: ["Full Pierce", "Jump", "Overcharge", "Secret Art", "Sure Hit"],
      requires: "Target must be airborne; polearm only.",
      summary: [
        "Jump to the target without provoking attacks of opportunity, then Heavy Attack. On damage, it falls to the ground and takes normal fall damage.",
        "Overcharge: +60ft range per extra AP. If the total AP cost exceeds your current AP, it gains the Setup keyword."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// DUELIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("duelist", {
  name: "Duelist",
  url: "https://lyrian.splatpass.net/classes/duelist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: "Defender",
  requires: "Fencer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "deflect-everything" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "forward-momentum" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Deception", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "riposte-ii" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "duelist-blow" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-endless-waltz" }
  ],
  abilities: {
    "deflect-everything": {
      name: "Deflect Everything", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: You can use Parry against every kind of attack, and against Save effects you could Block." ]
    },
    "forward-momentum": {
      name: "Forward Momentum", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick"], requires: null,
      summary: [ "Until the start of your next turn, when your melee attack damages a single enemy, you can push it back 5ft, then move 5ft toward it (if safe) without provoking." ]
    },
    "riposte-ii": {
      name: "Riposte II", kind: "ability",
      cost: "0 RP, 2 MP", range: "Melee Weapon Range", keywords: ["Counter"],
      requires: "Only after you use the Parry fencer ability (and regain the RP).",
      summary: [ "Heavy Attack against the target you Parried." ]
    },
    "duelist-blow": {
      name: "Duelist Blow", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [ "Heavy Attack. Your next Block or Dodge against that target costs 0 RP; lost if you use an RP ability against a different target." ]
    },
    "secret-art-endless-waltz": {
      name: "Secret Art: Endless Waltz", kind: "ultimate",
      cost: "4 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Killing Blow", "Secret Art"], requires: null,
      summary: [
        "Two Light Attacks on the same target, then one more Light Attack on damage.",
        "Killing Blow: move up to 2x your Speed without provoking attacks of opportunity."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// EARTHCLEAVING STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("earthcleaving-style", {
  name: "Earthcleaving Style",
  url: "https://lyrian.splatpass.net/classes/earthcleaving-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered. Proficiency in any two-handed melee weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "earth-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "strata-cut" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Magic", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "tectonic-overhead" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "weight-of-the-mountain" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "measured-collapse" }
  ],
  abilities: {
    "earth-weapon": {
      name: "Earth Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your weapon attacks can deal Earth damage instead of their normal type. Declare it before the accuracy roll." ]
    },
    "strata-cut": {
      name: "Strata Cut", kind: "ability",
      cost: "1 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Combo", "Half Pierce"], requires: null,
      summary: [
        "Precise attack against the target.",
        "Combo: right after Tectonic Overhead, it costs 1 less Mana (1 MP)."
      ]
    },
    "tectonic-overhead": {
      name: "Tectonic Overhead", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Half Pierce"], requires: null,
      summary: [ "Slow, powerful Heavy attack: the target's evasion is doubled for this attack (Dodge isn't affected)." ]
    },
    "weight-of-the-mountain": {
      name: "Weight of the Mountain", kind: "ability",
      cost: "0 AP", range: "Self", keywords: [], requires: null,
      summary: [
        "Your next two-handed melee attack this turn loses Lock On and Sure Hit, gets no accuracy from Focus, and can't use Offstep or similar guaranteed-hit effects.",
        "Instead it deals extra damage equal to the accuracy lost from Focus (double for Heavy or Precise attacks). No effect if the attack wasn't getting a Focus bonus anyway."
      ]
    },
    "measured-collapse": {
      name: "Measured Collapse", kind: "ultimate",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Full Pierce"], requires: null,
      summary: [ "Heavy attack that always counts as rolling a 2 for accuracy (instead of a d20). +2 accuracy vs Large targets, +4 vs Huge." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ELECTROMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("electromancer", {
  name: "Electromancer",
  url: "https://lyrian.splatpass.net/classes/electromancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Any class mastered or have Lightning element mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "superconductor" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "zap" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "bolting" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "forked-lightning" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "chain-lightning" }
  ],
  abilities: {
    "superconductor": {
      name: "Superconductor", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Lightning" },
      summary: [
        "Benefit 1: +1 accuracy on Lightning-damage attacks against a target with Static.",
        "Benefit 2: You gain Elemental Mastery: Lightning."
      ]
    },
    "zap": {
      name: "Zap", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Lightning", "Lock On", "Spell"], requires: null,
      summary: [ "Light attack dealing Lightning damage. On damage, inflict Static equal to Focus x 3." ]
    },
    "bolting": {
      name: "Bolting", kind: "ability",
      cost: "2 AP, 1 MP", range: "360ft", keywords: ["Lightning", "Rapid", "Spell", "Artillery"], requires: null,
      summary: [ "A bolt from the sky: Heavy attack dealing Lightning damage. On damage, inflict Static equal to Focus x 3." ]
    },
    "forked-lightning": {
      name: "Forked Lightning", kind: "ability",
      cost: "2 AP", range: "120ft", keywords: ["Lightning", "Spell", "Blanketing"], requires: null,
      summary: [ "Light attack on two different targets no more than 20ft apart, dealing Lightning damage. On damage, inflict Static equal to Focus x 2." ]
    },
    "chain-lightning": {
      name: "Chain Lightning", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Lightning", "Spell"], requires: null,
      summary: [
        "Heavy attack dealing Lightning damage; on damage, inflict Static equal to Focus x 3.",
        "On damage, repeat the attack free against another target within 30ft of the last one, and keep chaining. Each creature only once per use."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ELECTROMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("electromaster", {
  name: "Electromaster",
  url: "https://lyrian.splatpass.net/classes/electromaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Electromancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "lightning-strikes-twice" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "thunderstorm" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "Flight", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "static-overload" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "static-discharge" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-lightning-field" }
  ],
  abilities: {
    "lightning-strikes-twice": {
      name: "Lightning Strikes Twice", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When Static you applied damages an enemy, that enemy is afflicted with Static equal to the Static value that damaged it." ]
    },
    "thunderstorm": {
      name: "Thunderstorm", kind: "ability",
      cost: "3 AP", range: "40ft", keywords: ["Lightning", "Spell", "Scatter"], requires: null,
      summary: [ "Light Attack dealing Lightning damage to all enemies in range. Cover is figured from above the target, not from your line to it." ]
    },
    "static-overload": {
      name: "Static Overload", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Daze", "Lightning", "Spell"],
      requires: "Target must be afflicted with Static you applied.",
      summary: [ "One target saves. On a fail, it takes Lightning damage equal to its Static and is Dazed." ]
    },
    "static-discharge": {
      name: "Static Discharge", kind: "ability",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Lightning", "Spell"],
      requires: "Target must be afflicted with Static you applied.",
      summary: [ "One target saves. Either way, its Static discharges immediately as if its turn had ended, then it loses all Static." ]
    },
    "secret-art-lightning-field": {
      name: "Secret Art: Lightning Field", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "30ft", keywords: ["Lightning", "Secret Art", "Spell", "Upkeep"], requires: null,
      summary: [
        "Apply Static equal to Focus x 3 to all enemies within 30ft. Enemies already Static take 3 + half their Static value as damage immediately.",
        "While the field lasts (until the end of your next turn), enemies' Static isn't removed at the end of their turn.",
        "Upkeep: 1 Mana at the start of your turn to repeat the initial effect and extend it 1 turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ELEMENTALIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("elementalist", {
  name: "Elementalist",
  url: "https://lyrian.splatpass.net/classes/elementalist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Mage or Sorcerer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "elemental-convergence-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "magic-blast-ii" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "Artifice", "Perception", "Linguistics", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "elemental-bolt" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "elemental-burst" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-surge-of-elements" }
  ],
  abilities: {
    "elemental-convergence-key": {
      name: "Elemental Convergence (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "elemental-convergence",
      summary: [ "Benefit 1: You can use Elemental Convergence." ]
    },
    "elemental-convergence": {
      name: "Elemental Convergence", kind: "granted", grantedBy: "elemental-convergence-key",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [ "Encounter Start: pick Arcane, Fire, Water, Frost, Wind, Lightning or Earth - you count as having mastered it until the encounter ends. Swap once per turn for 1 Mana." ]
    },
    "magic-blast-ii": {
      name: "Magic Blast II", kind: "ability",
      cost: "1 AP", range: "120ft", keywords: ["Spell", "Rapid"], requires: null,
      summary: [ "Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack dealing Arcane damage. If you have an element mastered, you can change the damage to it." ]
    },
    "elemental-bolt": {
      name: "Elemental Bolt", kind: "ability",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Spell", "Burning", "Soaked", "Static", "Slow", "Sunder", "Illumination", "Blinded"], requires: null,
      summary: [
        "Light attack in a damage type you've mastered (chosen when cast). On damage:",
        "Arcane: target loses 1 Mana. Fire: Burning (Focus x 3). Water: Soaked (Focus) until it takes Lightning damage. Lightning: Static (Focus x 3). Frost: Slowed until the start of your next turn.",
        "Earth: Sunder (Focus) for its next damage. Wind: push 10ft. Holy: Illumination (Focus / 2). Dark: Blinded (Focus) for its next attack."
      ]
    },
    "elemental-burst": {
      name: "Elemental Burst", kind: "ability",
      cost: "1 RP", range: "120ft", keywords: ["Spell"],
      requires: "After dealing elemental damage that doesn't have Full Pierce or Sure Hit.",
      summary: [ "Deal extra damage of that element equal to 2d4 + Focus." ]
    },
    "secret-art-surge-of-elements": {
      name: "Secret Art: Surge of Elements", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "120ft", keywords: ["Spell", "Secret Art", "Overcharge"], requires: null,
      summary: [
        "7 Light attacks dealing Arcane, Fire, Water, Frost, Wind, Lightning and Earth damage, in that order.",
        "Overcharge: +1 Mana to add a Holy and a Dark Light attack."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// EREMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("eremancer", {
  name: "Eremancer",
  url: "https://lyrian.splatpass.net/classes/eremancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered or Dark Mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "stygian-comprehension" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "malevolent-phantasm" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Religion", "Magic", "History", "Appraise", "Deception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "energy-drain" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "schadenfreude" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-spirit-stigma" }
  ],
  abilities: {
    "stygian-comprehension": {
      name: "Stygian Comprehension", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "dark-bolt",
      grants: { mastery: "Dark" },
      summary: [
        "Benefit 1: You gain Elemental Mastery: Dark.",
        "Benefit 2: You can use Dark Bolt."
      ]
    },
    "dark-bolt": {
      name: "Dark Bolt", kind: "granted", grantedBy: "stygian-comprehension",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Spell", "Dark", "Half Pierce", "Full Pierce"], requires: null,
      summary: [ "Light Attack dealing Dark damage. You may take true damage equal to Power + 3 to give it Full Pierce." ]
    },
    "malevolent-phantasm": {
      name: "Malevolent Phantasm", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Spell", "Dark"],
      requires: "An ally (including yourself) took damage on your turn.",
      summary: [ "Heavy Attack dealing Dark damage, fueled by energy your allies lost." ]
    },
    "energy-drain": {
      name: "Energy Drain", kind: "ability",
      cost: "0 AP, 2 MP", range: "60ft", keywords: ["Spell", "Dark"], requires: null,
      summary: [
        "Deal Light Full Pierce Dark damage to a willing ally other than you; ignores their Dark resistance unless it's a universal type (e.g. gloom infusion and corvuskite armor are NOT universal).",
        "You gain Haste: +2 AP for the rest of the turn (once per turn per target)."
      ]
    },
    "schadenfreude": {
      name: "Schadenfreude", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Dark"],
      requires: "You are targeted by an attack.",
      summary: [ "Redirect the attack to another ally in its range. If that ally doesn't react, your next Malevolent Phantasm ignores its requirement and costs no Mana." ]
    },
    "secret-art-spirit-stigma": {
      name: "Secret Art: Spirit Stigma", kind: "ultimate",
      cost: "0 AP", range: "60ft", keywords: ["Secret Art", "Spell", "Dark"], requires: null,
      summary: [ "Until the start of your next turn the target has Spirit Stigma: it counts as a willing ally for your Eremancer abilities, and damaging it meets Malevolent Phantasm's requirement." ]
    }
  }
});

// ---------------------------------------------------------------------------
// EVIL EYE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("evil-eye", {
  name: "Evil Eye",
  url: "https://lyrian.splatpass.net/classes/evil-eye/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: "Striker",
  requires: "Any class mastered. Must have at least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "evil-eye-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cursed-evil-eye" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Perception"],
      summary: "+5 skill points in Perception. Any point can be traded for 2 expertise points in that skill." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "evil-eye-of-lethargy" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "evil-eye-of-fear" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "evil-eye-of-death" }
  ],
  abilities: {
    "evil-eye-key": {
      name: "Evil Eye (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: While a Mystic Eye is active, +10 Mystic Eye bonus to sight-based Perception checks.",
        "Benefit 2: One of your eyes becomes an Evil Eye, usable for Mystic Eye abilities of the matching type. An eye can only be one Mystic Eye type."
      ]
    },
    "cursed-evil-eye": {
      name: "Cursed Evil Eye", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye", "Upkeep", "Blanketing"], requires: null,
      summary: [ "Targets in a 90-degree cone up to 60ft save vs your Potency or take Light Dark (Curse) damage. Upkeep 1 AP: repeat the attack." ]
    },
    "evil-eye-of-lethargy": {
      name: "Evil Eye of Lethargy", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye", "Upkeep", "Slow"], requires: null,
      summary: [ "Targets in a 90-degree cone up to 60ft are Slowed until the start of your next turn unless they spend 1 RP to resist. Upkeep 1 AP: repeat." ]
    },
    "evil-eye-of-fear": {
      name: "Evil Eye of Fear", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye", "Upkeep", "Fear", "Mind Affecting"], requires: null,
      summary: [ "Targets in a 90-degree cone up to 60ft save vs your Potency or are Shaken until the start of your next turn. Upkeep 1 AP: repeat." ]
    },
    "evil-eye-of-death": {
      name: "Evil Eye of Death", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "60ft", keywords: ["Mystic Eye", "Upkeep"],
      requires: "Target must be a grunt.",
      summary: [ "A single target dies instantly. Upkeep 3 AP: repeat against a new target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// EXALTED BLADE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("exalted-blade", {
  name: "Exalted Blade",
  url: "https://lyrian.splatpass.net/classes/exalted-blade/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Sword Paladin mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "execute-the-heretic" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "undying-justice" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "divine-storm" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "crusaders-advance" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-divine-judgement" }
  ],
  abilities: {
    "execute-the-heretic": {
      name: "Execute the Heretic", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "execute-heretic",
      summary: [ "Benefit 1: You can use Execute Heretic." ]
    },
    "execute-heretic": {
      name: "Execute Heretic", kind: "granted", grantedBy: "execute-the-heretic",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Sure Hit", "Full Pierce"],
      requires: "Target must be downed.",
      summary: [ "Deal damage equal to the target's max HP." ]
    },
    "undying-justice": {
      name: "Undying Justice", kind: "ability",
      cost: "0 RP, 2 MP", range: "Self", keywords: [],
      requires: "You take damage, and your HP is higher than 1.",
      refund: { overlapsWith: ["Exalted Shield"], amount: "full",
                note: "Page says refund possible; Exalted Shield also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "If the damage would drop you to 0 HP or lower, you drop to 1 HP instead." ]
    },
    "divine-storm": {
      name: "Divine Storm", kind: "ability",
      cost: "3 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Scatter", "Divine"],
      requires: "Target has your Mark of Justice.",
      summary: [
        "Heavy weapon attack on the Mark of Justice target.",
        "Then a Light attack (not with your weapon; always your god's damage type, per the Holy weapon key ability) on every other enemy within 5ft, pushing them back 10ft whether it hits or not."
      ]
    },
    "crusaders-advance": {
      name: "Crusader's Advance", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Teleport"],
      requires: "Target has your Mark of Justice.",
      summary: [ "Teleport to an empty square next to an enemy marked with your Mark of Justice." ]
    },
    "secret-art-divine-judgement": {
      name: "Secret Art: Divine Judgement", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "Melee Weapon Range", keywords: ["Secret Art", "Sure Hit", "Full Pierce", "Divine"],
      requires: "Target has your Mark of Justice.",
      summary: [
        "Heavy attack dealing Holy damage. If the target's HP is below this attack's maximum damage, it gains Full Pierce and deals max damage instead of rolling.",
        "The check uses only base damage (base weapon damage + Power); extras like Heavy Blade bonus or Anathema don't count and aren't maximized.",
        "An enemy reduced to 0 HP or lower by this is killed outright."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// EXALTED SHIELD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("exalted-shield", {
  name: "Exalted Shield",
  url: "https://lyrian.splatpass.net/classes/exalted-shield/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Defender",
  secondary: "Support",
  requires: "Shield Paladin mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "shield-the-fallen-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "undying-justice" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "aura-of-resistance" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "holy-declaration" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-divine-shield" }
  ],
  abilities: {
    "shield-the-fallen-key": {
      name: "Shield the Fallen (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "shield-the-fallen",
      summary: [ "Benefit 1: You can use Shield the Fallen." ]
    },
    "shield-the-fallen": {
      name: "Shield the Fallen", kind: "granted", grantedBy: "shield-the-fallen-key",
      cost: "0 RP", range: "30ft", keywords: ["Aid"],
      requires: "Downed ally takes damage from an attack.",
      summary: [ "Give the downed ally temporary HP equal to the damage they'd take from the attack." ]
    },
    "undying-justice": {
      name: "Undying Justice", kind: "ability",
      cost: "0 RP, 2 MP", range: "Self", keywords: [],
      requires: "You take damage, and your HP is higher than 1.",
      refund: { overlapsWith: ["Exalted Blade"], amount: "full",
                note: "Page says refund possible; Exalted Blade also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "If the damage would drop you to 0 HP or lower, you drop to 1 HP instead." ]
    },
    "aura-of-resistance": {
      name: "Aura of Resistance", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Aura"], requires: null,
      summary: [ "30ft-radius aura until the encounter ends. When an ally (not you) fails a save, spend 1 Mana to let them use your Toughness for that save instead of theirs." ]
    },
    "holy-declaration": {
      name: "Holy Declaration", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Challenge"], requires: null,
      summary: [ "Take the Block action against the attack, then Challenge all enemies within 5ft until the start of your next turn." ]
    },
    "secret-art-divine-shield": {
      name: "Secret Art: Divine Shield", kind: "ultimate",
      cost: "0 AP", range: "Self", keywords: ["Secret Art"], requires: "Must be the first action of your turn.",
      summary: [ "Gain 2 AP. Until the start of your next turn: Damage Reduction 1000 vs all damage types, but you deal only half damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// EXCAVATOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("excavator", {
  name: "Excavator",
  url: "https://lyrian.splatpass.net/classes/excavator/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Gatherer",
  secondary: "Striker",
  requires: "Miner mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "ore-hunter" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "focused-detonation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Mining"],
      summary: "+5 skill points in Mining. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mountain-slayer" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cave-raider" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "take-it-easy" }
  ],
  abilities: {
    "ore-hunter": {
      name: "Ore Hunter", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Gather Tier 2 mining outcrops.",
        "Benefit 2: Expert at knots: tie rope to objects, secure yourself and rappel safely down cliffsides."
      ]
    },
    "focused-detonation": {
      name: "Focused Detonation", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Make a gathering check toward Node or Lucky points. If it would fill them completely, you can stop 1 short instead and gain +1 Strike Dice." ]
    },
    "mountain-slayer": {
      name: "Mountain Slayer", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Shieldbreaker"],
      requires: "The target must be affected by Shieldbreaker.",
      summary: [ "Light attack against the target." ]
    },
    "cave-raider": {
      name: "Cave Raider", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Circuit"], requires: null,
      summary: [ "Until the start of your next turn, climb up to your speed. With rope, tie off to something secure and rappel down a cliffside up to 50ft for 5ft of movement." ]
    },
    "take-it-easy": {
      name: "Take it easy", kind: "ultimate",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Skip the gathering check and immediately collect 25% of the Outcrop's base material as a bonus (doesn't count toward material totals; no Node or Lucky progress)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// EXECUTOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("executor", {
  name: "Executor",
  url: "https://lyrian.splatpass.net/classes/executor/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any mastered class + any points in Acolyte.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "holy-orders-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "silentium" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Roguecraft", "Religion", "Magic", "History", "Insight", "Stealth", "Perception", "Expert Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "eagle-hunt" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "deus-vult" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "ave-maria" }
  ],
  abilities: {
    "holy-orders-key": {
      name: "Holy Orders (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "holy-orders",
      summary: [ "Benefit 1: You can use Holy Orders." ]
    },
    "holy-orders": {
      name: "Holy Orders", kind: "granted", grantedBy: "holy-orders-key",
      cost: "0 AP", range: "60ft", keywords: ["Sidestep"], requires: null,
      summary: [
        "On your turn, before an offensive action: pick an enemy within 60ft as your Holy Order until the start of your next turn. Only it can be targeted by your offensive abilities (or it must be included as a target).",
        "If you make an attack of opportunity on it, or it moves away while in your melee range, Sidestep up to 2x your Speed toward it for 0 RP after its move ends."
      ]
    },
    "silentium": {
      name: "Silentium", kind: "ability",
      cost: "2 AP, 1 MP", range: "Weapon Range", keywords: ["Combo", "Holy"],
      requires: "One-handed Thrown Weapon or Sets of missiles only",
      summary: [
        "Light Attack with a sacred-infused thrown weapon dealing Light Holy damage. On damage, the target's concentration breaks and it can't use Spell abilities until it removes the lodged weapon (1 RP or 2 AP).",
        "Combo: after Eagle Hunt, costs 0 AP instead of 2."
      ]
    },
    "eagle-hunt": {
      name: "Eagle Hunt", kind: "ability",
      cost: "2 AP", range: null, keywords: ["Combo", "Jump"], requires: null,
      summary: [ "Leap up to 30ft into the air, then move horizontally up to 2x your Speed without provoking. You can use Silentium at any point during it and get its Combo bonus." ]
    },
    "deus-vult": {
      name: "Deus Vult", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Augment"],
      requires: "A target of your Holy Order.",
      summary: [ "While Holy Orders is active: your next basic attack or Ave Maria against your Holy Order gains Lock On and Shieldbreaker. Use before attacking, not in reaction to an attack in progress." ]
    },
    "ave-maria": {
      name: "Ave María", kind: "ultimate",
      cost: "3 AP", range: "Melee Weapon Range", keywords: ["Divine"], requires: null,
      summary: [ "A swift double slash: Heavy Attack dealing Light damage plus Heavy Holy damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FAE KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("fae-knight", {
  name: "Fae Knight",
  url: "https://lyrian.splatpass.net/classes/fae-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Fae only. Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "knight-of-yggdrasil" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "fae-knight-style-oak-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Magic", "Medicine", "Negotiation", "Intimidation", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fae-knight-style-devouring-locust" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "fae-knight-style-second-plague" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "fae-knight-style-petal-swirl-flash" }
  ],
  abilities: {
    "knight-of-yggdrasil": {
      name: "Knight of Yggdrasil", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "fluttering-blade",
      summary: [
        "Benefit 1: You can use Fluttering Blade.",
        "Benefit 2: Once per round, if an enemy holds a weapon under your Fluttering Blade, spend 1 RP to deal Heavy Full Pierce damage to it.",
        "Benefit 3: Grab a Fluttering Blade you made within 5ft with a free hand for 0 AP."
      ]
    },
    "fluttering-blade": {
      name: "Fluttering Blade", kind: "granted", grantedBy: "knight-of-yggdrasil",
      cost: "0 AP", range: "120ft", keywords: ["Quick", "Rapid", "Active"], requires: null,
      summary: [
        "Enchant a familiar melee weapon in range (yours and in your combat inventory at encounter start, or in dimensional storage 1+ day) to float and obey you. One active at a time; you need 1 free hand to direct it.",
        "It drops inert when it takes damage. Base evasion 7 + your Agility; base speed 30ft; its movement doesn't provoke.",
        "It can make Heavy, Light and Precise basic attacks and special Fae Knight attacks using your stats."
      ]
    },
    "fae-knight-style-oak-stance": {
      name: "Fae Knight Style: Oak Stance", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Stance"], requires: null,
      summary: [ "Enter Oak Stance: your Fluttering Blades can move up to 20ft as part of an attack, and don't provoke attacks of opportunity." ]
    },
    "fae-knight-style-devouring-locust": {
      name: "Fae Knight Style: Devouring Locust", kind: "ability",
      cost: "2 AP, 1 MP", range: "120ft", keywords: ["Pass"],
      requires: "An active Fluttering Blade within range",
      summary: [ "Your Fluttering Blade moves in a straight line up to 60ft, making a light attack on every target it passes through." ]
    },
    "fae-knight-style-second-plague": {
      name: "Fae Knight Style: Second Plague", kind: "ability",
      cost: "2 AP", range: "720ft", keywords: ["Combo"],
      requires: "An active Fluttering Blade within range, you're in Oak Stance, and you have a free hand to catch it.",
      summary: [
        "Your Fluttering Blade flies back to your hand by the fastest path, making a light attack on every target it passes through; it deactivates on return.",
        "Combo: after Devouring Locust, costs 1 AP."
      ]
    },
    "fae-knight-style-petal-swirl-flash": {
      name: "Fae Knight Style: Petal Swirl Flash", kind: "ultimate",
      cost: "Variable AP, 1 MP", range: "20ft", keywords: ["Teleport"], requires: null,
      summary: [ "Teleport to an enemy in range and make a melee Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack. Then regain your Faerie Flash for the rest of the encounter." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FAE KNIGHT: WILLOW STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("fae-knight-willow-style", {
  name: "Fae Knight: Willow Style",
  url: "https://lyrian.splatpass.net/classes/fae-knight--willow-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 4,
  role: "Striker",
  secondary: "Defender",
  requires: "Fae Knight mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "knight-of-yggdrasil-ii" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "fae-knight-style-carapace" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Magic", "Medicine", "Negotiation", "Intimidation", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fae-knight-style-megasoma" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "fae-knight-style-gadfly" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-faerie-light-eyes-jade-shelterbelt" }
  ],
  abilities: {
    "knight-of-yggdrasil-ii": {
      name: "Knight of Yggdrasil II", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "fae-knight-style-willow-stance",
      summary: [ "Benefit 1: You can use Fae Knight Style: Willow Stance." ]
    },
    "fae-knight-style-willow-stance": {
      name: "Fae Knight Style: Willow Stance", kind: "granted", grantedBy: "knight-of-yggdrasil-ii",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Stance"], requires: null,
      summary: [
        "In this stance your Fluttering Blade limit is 2, and shields can be Fluttering Blades.",
        "For 2 Mana, Fluttering Blades made this turn in the stance become Heavy Spin blades: they no longer add your Agility to evasion, but deal 5d6 upgraded heavy attack damage (even if one-handed).",
        "You can direct two Heavy Spin blades to move for 1 AP instead of one."
      ]
    },
    "fae-knight-style-carapace": {
      name: "Fae Knight Style: Carapace", kind: "ability",
      cost: "0 RP", range: "Self", keywords: [],
      requires: "A Heavy Spin Fluttering Blade is active; you or an ally is targeted by an attack that the chosen blade isn't part of.",
      summary: [
        "One Fluttering Blade returns to interfere: you may Dodge or Block against the attack. The blade needs line of sight to you or the target. This cancels Fluttering Blade on that weapon.",
        "Overcharge (1 RP or 1 Mana): the blade assists an ally within 30ft of it instead."
      ]
    },
    "fae-knight-style-megasoma": {
      name: "Fae Knight Style: Megasoma", kind: "ability",
      cost: "0 RP", range: "30ft", keywords: ["Rapid"],
      requires: "Only with Heavy Spin Fluttering Blades active for at least one whole round.",
      summary: [ "Send a Heavy Spin blade at a target within 30ft (needs line of sight) for a Heavy attack, then cancel Fluttering Blade on it." ]
    },
    "fae-knight-style-gadfly": {
      name: "Fae Knight Style: Gadfly", kind: "ability",
      cost: "2 AP", range: "90ft", keywords: ["Challenge"],
      requires: "Fluttering Blade must be Active.",
      summary: [
        "Send a Fluttering Blade to harass a target within 90ft with a light attack. It shares the target's space and follows all its movement (even teleports). The target is Challenged.",
        "You can upgrade that attack of opportunity to Heavy for 1 RP or 1 Mana."
      ]
    },
    "secret-art-faerie-light-eyes-jade-shelterbelt": {
      name: "Secret Art ~ Faerie Light Eyes: Jade Shelterbelt", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "Self", keywords: ["Secret Art", "Illusion", "Active"], requires: null,
      summary: [ "Create 5 illusory Heavy Spin Fluttering Blades within 20ft until the encounter ends. Each vanishes when Fluttering Blade is cancelled on it. They don't count toward your Fluttering Blade limit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FAERIE LIGHT EYES  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("faerie-light-eyes", {
  name: "Faerie Light Eyes",
  url: "https://lyrian.splatpass.net/classes/faerie-light-eyes/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Controller",
  secondary: null,
  requires: "Must have the 'Mystic Eyes of Faerie Light' breakthrough. Must have at least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "faerie-light-eyes-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "faerie-light-eyes-hold-person" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Insight", "Stealth", "Perception"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "faerie-light-eyes-time-dilation" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "faerie-light-eyes-empty" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "faerie-light-eyes-golden-illusion" }
  ],
  abilities: {
    "faerie-light-eyes-key": {
      name: "Faerie Light Eyes (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Protection from illusions - you notice illusion distortions and are immune to all illusions except your own.",
        "Benefit 2: One of your eyes becomes a Faerie Light Eye, usable for Mystic Eye abilities of the matching type. An eye can only be one Mystic Eye type."
      ]
    },
    "faerie-light-eyes-hold-person": {
      name: "Faerie Light Eyes: Hold Person", kind: "ability",
      cost: "1 RP, 1 MP", range: "60ft", keywords: ["Illusion", "Mind Affecting", "Stun", "Mystic Eye"],
      requires: "Target must be a grunt and have eyes.",
      summary: [ "Stun the target for 1 turn and set its AP and RP to 0; it can't act while stunned." ]
    },
    "faerie-light-eyes-time-dilation": {
      name: "Faerie Light Eyes: Time Dilation", kind: "ability",
      cost: "1 RP, Variable MP", range: "Self", keywords: ["Mystic Eye"],
      requires: "You are the target of a single-target attack.",
      summary: [ "Cast a self-targeted time-slowing Illusion, then Dodge with a Dodge bonus of 2X." ]
    },
    "faerie-light-eyes-empty": {
      name: "Faerie Light Eyes: Empty", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Concentration", "Mind Affecting", "Illusion", "Mystic Eye"],
      requires: "The enemy has used the target ability.",
      summary: [
        "Name an ability the target used this encounter; it forgets it and can't use it while the illusion lasts. Not Secret, Climax or Esoteric Arts. One target at a time. Not on Bosses.",
        "A non-heroic target under Hold Person becomes permanently insane (no more combat actions). Vs a grunt under Hold Person, the normal requirement isn't needed.",
        "Item, passive or racial abilities (e.g. flight) may not be removable (GM's call)."
      ]
    },
    "faerie-light-eyes-golden-illusion": {
      name: "Faerie Light Eyes: Golden Illusion", kind: "ultimate",
      cost: "0 RP", range: "Self", keywords: ["Illusion", "Mind Affecting", "Mystic Eye"],
      requires: "A target is affected by Faerie Light Eyes: Empty.",
      summary: [
        "Copy the forgotten ability into your own abilities until the encounter ends (you must still meet its requirements). It gains the Illusion keyword.",
        "Only one Golden Illusion ability at a time; you lose it if the target stops being affected by Empty."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// FARMER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("farmer", {
  name: "Farmer",
  url: "https://lyrian.splatpass.net/classes/farmer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Controller",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "farming-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "plow-the-fields" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Farming": 5 },
      options: ["Athletics", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points in Farming, PLUS +5 among Athletics, Survival, Animal Husbandry or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "wither-the-stalk" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "pull-the-weeds" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "scarecrows-gaze" }
  ],
  abilities: {
    "farming-basics": {
      name: "Farming Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "farmer-core-abilities",
      summary: [
        "Benefit 1: Proficiency with the scythe (also a farming tool) and the sickle (farming tool and one-handed axe).",
        "Benefit 2: Plant seeds in plots that grow harvestable Food and Alchemy materials. You can work 10 plots.",
        "Benefit 3: Gain the Farmer core abilities."
      ]
    },
    "farmer-core-abilities": {
      name: "Farming Basics (core abilities)", kind: "granted", grantedBy: "farming-basics",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Spiritual Ground", cost: "1 Interlude Point",
          summary: "Create up to 10 plots that grow food and herbs faster and allow tier 1 rare herbs (must be seeded first). You can immediately Sow Seeds there for 0 IP. One Spiritual Ground at a time." },
        { name: "Sow Seeds", cost: "1 Interlude Point",
          summary: "Plant one set of seeds in each plot you can work." },
        { name: "Harvest", cost: "1 Interlude Point",
          summary: "Run a crafting session whose score equals the total value of seeds you can harvest or tend. If too low, drop seeds (highest difficulty first) until your score meets the remaining total difficulty." },
        { name: "Infuse Qi", cost: "No listed cost", keywords: ["Rapid"],
          summary: "Upgrade one planted herb from common to rare; +10 to its difficulty." },
        { name: "Bountiful Harvest", cost: "No listed cost", keywords: ["Rapid"],
          summary: "Double the Food units or Alchemy materials from one planted seed; +5 to its difficulty. Doesn't stack." }
      ],
      summary: [ "Five farming abilities (see subAbilities)." ]
    },
    "plow-the-fields": {
      name: "Plow the fields", kind: "ability",
      cost: "2 AP", range: "15ft", keywords: ["Blanketing"], requires: null,
      summary: [ "Light attack against every enemy in a 15ft-wide line up to range. That ground becomes difficult terrain until the start of your next turn." ]
    },
    "wither-the-stalk": {
      name: "Wither the Stalk", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: "Scythe only",
      summary: [ "Light attack. On damage, the target can't add its Power to damage on its next attack. Doesn't work on Bosses." ]
    },
    "pull-the-weeds": {
      name: "Pull the weeds", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be in a farming crafting session.",
      summary: [ "Destroy one of your planted seeds for +5 crafting points this session." ]
    },
    "scarecrows-gaze": {
      name: "Scarecrow's Gaze", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Fear", "Mind Affecting", "Circuit"], requires: null,
      summary: [ "Every enemy in range saves vs your Potency. On a fail, it can't move closer to you until the start of your next turn, unless it has no other valid target to attack." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FENCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("fencer", {
  name: "Fencer",
  url: "https://lyrian.splatpass.net/classes/fencer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Defender",
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fancy-footwork" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "parry" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Deception", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "lunge" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "riposte" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "precise-thrust" }
  ],
  abilities: {
    "fancy-footwork": {
      name: "Fancy Footwork", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Proficiency with Dueling Weapons. While wielding one, you also get the light blades' Nimble ability (even without light blades or their proficiency)." ]
    },
    "parry": {
      name: "Parry", kind: "ability",
      cost: "1 RP, 1 MP", range: null, keywords: [],
      requires: "Target of a melee attack while wielding a One-Handed melee weapon.",
      summary: [
        "Roll your Heavy Weapon Damage but add Focus instead of Power; use the result as your Block against the attack.",
        "If it reduces the damage to 0, regain 1 RP (up to max), and on-hit effects/maces don't trigger. The attack can't crit you."
      ]
    },
    "lunge": {
      name: "Lunge", kind: "ability",
      cost: "0 AP", range: "Self", keywords: [], requires: null,
      refund: { overlapsWith: ["Lancer"], amount: "full",
                note: "Page says refund possible; Lancer also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Your next basic Light, Heavy or Precise melee attack has double attack range." ]
    },
    "riposte": {
      name: "Riposte", kind: "ability",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Counter"],
      requires: "Only after you use the Parry fencer ability and regain the RP.",
      summary: [ "Heavy Attack against the target you Parried." ]
    },
    "precise-thrust": {
      name: "Precise Thrust", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Full Pierce"], requires: null,
      summary: [ "Heavy Attack against the target. Doesn't disable the dueling weapon ability." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FIGHTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("fighter", {
  name: "Fighter",
  url: "https://lyrian.splatpass.net/classes/fighter/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Striker",
  secondary: "Defender",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fighters-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "charge" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "power-strike" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "slam" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "defensive-flexibility" }
  ],
  abilities: {
    "fighters-journey": {
      name: "Fighter's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { hp: 5 },
      summary: [
        "Benefit 1: Proficiency in 5 common weapon groups.",
        "Benefit 2: Proficiency in all Light Armor, Medium Armor and normal Shields.",
        "Benefit 3: +5 HP."
      ]
    },
    "charge": {
      name: "Charge", kind: "ability",
      cost: "2 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Spend 2 or 4 AP to move as if that AP were spent on movement. Then you may spend half that AP (1 or 2) on one basic Light, Heavy or Precise melee attack." ]
    },
    "power-strike": {
      name: "Power Strike", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Crushing"], requires: null,
      summary: [ "Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack against an enemy." ]
    },
    "slam": {
      name: "Slam", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [
        "Light Damage attack. On damage, push the target 5ft if it's a Grunt or your Power is higher than its Power (target no more than one size larger than you).",
        "Spend 1 Mana to ignore the Power requirement."
      ]
    },
    "defensive-flexibility": {
      name: "Defensive Flexibility", kind: "ultimate",
      cost: "0 RP, 2 MP", range: "Self", keywords: ["Circuit"],
      requires: "You're targeted by an attack and reacted to the previous attack with Dodge or Block.",
      summary: [ "React to the triggering attack with the opposite reaction (Dodge becomes Block, Block becomes Dodge)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FIVE HARMONIES STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("five-harmonies-style", {
  name: "Five Harmonies Style",
  url: "https://lyrian.splatpass.net/classes/five-harmonies-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Healer",
  secondary: "Striker",
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "five-harmonies" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mantra-pure-intentions" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mudra-first-sensation" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "mantra-flowing-perception" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "dharani-blooming-conciousness" }
  ],
  abilities: {
    "five-harmonies": {
      name: "Five Harmonies", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "luminous-form-stance",
      summary: [ "Benefit 1: You can use Luminous Form Stance." ]
    },
    "luminous-form-stance": {
      name: "Luminous Form Stance", kind: "granted", grantedBy: "five-harmonies",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance", "Stacking"], requires: null,
      summary: [
        "Enter the stance and create the Threads of Light: unarmed attacks get +10ft range; your threatened range becomes 5-15ft.",
        "Damaging an enemy with an unarmed strike ability (not basic attacks) gives 1 Harmony stack (max 5; max 1 per ability use). Leaving the stance loses all stacks.",
        "Lasts until you enter another stance or move willingly (unarmed-strike movement abilities don't end it; ally-granted movement like Gravitional Ki counts as willing)."
      ]
    },
    "mantra-pure-intentions": {
      name: "Mantra: Pure Intentions", kind: "ability",
      cost: "1 AP", range: "15ft", keywords: ["Healing"],
      requires: "Must have at least 1 stack of Harmony.",
      summary: [ "Spend up to 5 Harmony stacks plus 1 Mana per stack to heal an ally in range for 3 + Focus per stack." ]
    },
    "mudra-first-sensation": {
      name: "Mudra: First Sensation", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Combo"],
      requires: "Must be in Luminous Form Stance.",
      summary: [
        "Light attack. On hit, gain 1 Harmony stack (on top of any stack from dealing damage).",
        "Combo: right after entering Luminous Form Stance, costs 1 less Mana."
      ]
    },
    "mantra-flowing-perception": {
      name: "Mantra: Flowing Perception", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Unarmed Strike", "Sidestep"],
      requires: "Must be in Luminous Form Stance.",
      summary: [
        "Unarmed Light attack on a target in range. On damage, you may pull yourself to it and Sidestep to the nearest square within 5ft of it.",
        "Used on an ally: always hits, deals no damage, still grants 1 Harmony stack."
      ]
    },
    "dharani-blooming-conciousness": {
      name: "Dharani: Blooming Conciousness", kind: "ultimate",
      cost: "2 AP", range: "20ft", keywords: ["Secret Art", "Healing"],
      requires: "Must be in Luminous Form Stance with 5 Harmony stacks.",
      summary: [ "Consume all Harmony stacks and 1 Mana per stack: heal all allies in range for (6 + Focus) / 2 per stack. If you lack the Mana, it only consumes as many stacks as you can pay for." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FLAME SENTINEL  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("flame-sentinel", {
  name: "Flame Sentinel",
  url: "https://lyrian.splatpass.net/classes/flame-sentinel/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: "Controller",
  requires: "Mage mastered or Fire mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "controlled-blaze" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "flame-infusion" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flame-shield" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "flame-weapon" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "flame-wall" }
  ],
  abilities: {
    "controlled-blaze": {
      name: "Controlled Blaze", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Fire" },
      refund: { overlapsWith: ["Pyromancer"], amount: "full",
                note: "Page says refund possible; Pyromancer also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Your Fire damage can choose not to ignite flammable objects.",
        "Benefit 2: You gain Fire Mastery."
      ]
    },
    "flame-infusion": {
      name: "Flame Infusion", kind: "ability",
      cost: "1 AP, 0 MP", range: "30ft", keywords: ["Fire", "Spell", "Type"], requires: null,
      summary: [
        "A willing target becomes type Fire II: half damage from Fire and Frost damage/keyword attacks (not true damage), +50% from Water damage/keyword attacks, and immune to Burning.",
        "Lasts until the encounter ends or a stronger type overwrites it."
      ]
    },
    "flame-shield": {
      name: "Flame Shield", kind: "ability",
      cost: "1 RP", range: "30ft", keywords: ["Fire", "Full Pierce", "Shield", "Spell", "Aid", "Sure Hit"],
      requires: "An ally took damage from a melee attack.",
      summary: [ "The attacker immediately takes Light Fire Damage." ]
    },
    "flame-weapon": {
      name: "Flame Weapon", kind: "ability",
      cost: "2 AP", range: "Touch", keywords: ["Enchantment"], requires: null,
      summary: [ "Touch your weapon or a willing ally's: until the encounter ends it deals Fire Damage and has a +1 Power Enchantment." ]
    },
    "flame-wall": {
      name: "Flame Wall", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "60ft", keywords: ["Concentration", "Fire", "Spell"], requires: null,
      summary: [
        "A straight wall of fire 30ft long, 5ft wide, 30ft high for 10 minutes or until cancelled.",
        "Passing through it or starting a turn in it deals Heavy Fire Damage (once per round per creature). Creatures inside when it's cast can spend 1 RP to Sidestep out."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// FLASH STAR BLADE STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("flash-star-blade-style", {
  name: "Flash Star Blade Style",
  url: "https://lyrian.splatpass.net/classes/flash-star-blade-style-/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered. Proficiency in one of light swords, longsword, katana or dueling weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "lightning-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "flash-star-style-photon-line" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "Magic", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flash-star-style-thunderbolt-slash" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "flash-star-style-starlight-crescent-reversal" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "flash-star-style-secret-art-twin-nova-pursuit" }
  ],
  abilities: {
    "lightning-weapon": {
      name: "Lightning Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your weapon attacks can deal Lightning damage instead of their normal type. Declare it before the accuracy roll." ]
    },
    "flash-star-style-photon-line": {
      name: "Flash Star Style: Photon Line", kind: "ability",
      cost: "2 AP", range: "25ft", keywords: ["Sidestep", "Pass", "Blanketing"],
      requires: "Can move 25ft in a straight line. Light sword, longsword, katana or dueling weapon only.",
      summary: [
        "Sidestep exactly 25ft in a straight line in any direction (you can cross gaps if you land on solid ground; not needed if you were flying 10ft+ up).",
        "Light attack on each target in your path - or a Heavy attack if there's only one."
      ]
    },
    "flash-star-style-thunderbolt-slash": {
      name: "Flash Star Style: Thunderbolt Slash", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Combo"],
      requires: "Light sword, Longsword, Katana or dueling weapon only.",
      summary: [
        "3 separate Light attacks against the target.",
        "Combo: right after Photon Line, costs 1 less Mana."
      ]
    },
    "flash-star-style-starlight-crescent-reversal": {
      name: "Flash Star Style: Starlight Crescent Reversal", kind: "ability",
      cost: "0 RP, 1 MP", range: "Melee Weapon Range", keywords: ["Counter"],
      requires: "You are targeted by a heavy attack. Light sword, Longsword, Katana or dueling weapon only.",
      summary: [ "Counter the heavy attack with a Light attack of your own. You can still Dodge or Block it afterward." ]
    },
    "flash-star-style-secret-art-twin-nova-pursuit": {
      name: "Flash Star Style Secret Art: Twin Nova Pursuit", kind: "ultimate",
      cost: "4 AP", range: "50ft", keywords: ["Teleport", "Secret Art"],
      requires: "Light sword, Longsword, Katana or dueling weapon only.",
      summary: [
        "Teleport to the target and knock it 25ft in any horizontal direction, then teleport to it in a straight line and make a Heavy attack.",
        "If it responds with any RP action, knock it straight back 25ft, teleport to it again and make another Heavy attack."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// FLOWING WIND STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("flowing-wind-style", {
  name: "Flowing Wind Style",
  url: "https://lyrian.splatpass.net/classes/flowing-wind-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: "Utility",
  requires: "Forager, Fighter, Rogue, Martial Artist, Cultivator or Adventurer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "cloudstep-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "plume-treading-art" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flowing-wind-strike" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "driftwind-evasion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-vanishing-thousand-steps" }
  ],
  abilities: {
    "cloudstep-key": {
      name: "Cloudstep (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "cloudstep",
      summary: [ "Benefit 1: You can use Cloudstep." ]
    },
    "cloudstep": {
      name: "Cloudstep", kind: "granted", grantedBy: "cloudstep-key",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Sidestep"],
      requires: "Must be the first movement action in your turn.",
      summary: [ "Sidestep up to half your speed, ignoring difficult terrain." ]
    },
    "plume-treading-art": {
      name: "Plume-Treading Art", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Stacking"], requires: null,
      summary: [
        "Each AP spent on Move or on an ability that moves you gives 1 Windflow stack (max 6); each stack is +5 movement speed. Stacks last until the encounter ends or you end a turn without moving.",
        "Cloudstep always gives 1 stack (normal cap). After Cloudstep, air is walkable until the end of your turn; if you're still over air at turn end and not Flying, you descend with no fall damage."
      ]
    },
    "flowing-wind-strike": {
      name: "Flowing Wind Strike", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Sidestep"],
      requires: "Must have moved at least 10ft before using this.",
      summary: [ "Light attack with extra damage equal to 2x your Windflow stacks; then lose all stacks. You may then Sidestep 5ft (no stack gained)." ]
    },
    "driftwind-evasion": {
      name: "Driftwind Evasion", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [], requires: null,
      summary: [ "Dodge an attack with a Dodge bonus equal to your Windflow stacks, then lose all stacks." ]
    },
    "secret-art-vanishing-thousand-steps": {
      name: "Secret Art: Vanishing Thousand Steps", kind: "ultimate",
      cost: "0 AP, 3 MP", range: "Sight", keywords: ["Secret Art", "Sidestep"], requires: null,
      summary: [
        "Sidestep to a target in range and make a Heavy attack.",
        "Until the end of the turn, you can Sidestep to any enemy you can see as part of a melee attack you're about to make, gaining Windflow stacks equal to the AP spent on that attack."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// FORAGER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("forager", {
  name: "Forager",
  url: "https://lyrian.splatpass.net/classes/forager/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Gatherer",
  secondary: "Utility",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "foragers-path" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "verdant-instinct" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Foraging": 5 },
      options: ["Athletics", "Medicine", "Survival", "Common Knowledge"],
      summary: "+5 skill points in Foraging, PLUS +5 among Athletics, Medicine, Survival or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "lifebeat-sense" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "divining-petalfall" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "vivisect" }
  ],
  abilities: {
    "foragers-path": {
      name: "Forager's Path", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Proficiency with Giant Scissors and either Axes or Hori. Axes can harvest foraging outcrops.",
        "Benefit 2: Harvest Tier 1 Foraging Outcrops.",
        "Benefit 3: Natural items can stand in for an Adventurer's Kit and Torches (sun/moss as a compass, vines as rope) if available (GM's call).",
        "Benefit 4: Make Wood Blocks as an Errand (see Carpenter Materials); using an IP lets you do this 4 times instead."
      ]
    },
    "verdant-instinct": {
      name: "Verdant Instinct", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Make a gathering check applied to Node Points. Then roll two more dice to be your next two strike dice values; you can reorder them or replace one with a 5." ]
    },
    "lifebeat-sense": {
      name: "Lifebeat Sense", kind: "ability",
      cost: "1 AP, 1 MP", range: "30ft", keywords: ["Expose", "Analyze"], requires: null,
      summary: [
        "Learn the target's approximate HP % until combat ends (DM shows health bars or gives an estimate).",
        "The target gets Expose 1: its crit threshold drops by 1 (20 becomes 19). Removed when it's critically hit (defended or not)."
      ]
    },
    "divining-petalfall": {
      name: "Divining Petalfall", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Gathering check with +5. Even final die: add to Node Points. Odd: add to Lucky Points." ]
    },
    "vivisect": {
      name: "Vivisect", kind: "ultimate",
      cost: "3 AP, 1 MP", range: "Melee Weapon Range", keywords: [],
      requires: "Giant Scissors or Chainsaw only. Target must be affected by Expose and be a grunt.",
      summary: [ "Cut the target in half, killing it instantly." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FORGEMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("forgemaster", {
  name: "Forgemaster",
  url: "https://lyrian.splatpass.net/classes/forgemaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Support",
  requires: "Blacksmith mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "focused-weapons" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "inspired-finish" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Blacksmithing"],
      summary: "+5 skill points in Blacksmithing. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "forged-knowledge-ii" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "expertise-study-blacksmithing" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-shatter" }
  ],
  abilities: {
    "focused-weapons": {
      name: "Focused Weapons", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "forgemaster-core-crafting",
      summary: [
        "Benefit 1: Gain the Forgemaster Core Crafting abilities.",
        "Benefit 2: Craft with Mithril and Orihalcum."
      ]
    },
    "forgemaster-core-crafting": {
      name: "Forgemaster Core Crafting", kind: "granted", grantedBy: "focused-weapons",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Blacksmith's Modification B", cost: "X Crafting Points",
          summary: "Add a B-type modification to a weapon or tool (costs on Universal Weapon / Crafting mods pages)." }
      ],
      summary: [ "One crafting ability (see subAbilities)." ]
    },
    "inspired-finish": {
      name: "Inspired Finish", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be your last crafting die. Costs 1 Crafting Die.",
      summary: [ "Crafting check using 3d10 instead of the normal die (still add your crafting bonus). Crafting then ends; you can't spend Crafting Points on artisan bonuses, alloys or similar." ]
    },
    "forged-knowledge-ii": {
      name: "Forged Knowledge II", kind: "ability",
      cost: "0 RP, 2 MP", range: "Sight", keywords: ["Augment", "Rage"],
      requires: "You or an ally attacked with a weapon or item you crafted.",
      summary: [ "Maximize all weapon dice for that attack's damage." ]
    },
    "expertise-study-blacksmithing": {
      name: "Expertise Study (Blacksmithing)", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { expertise: "5 points in each of 3 different blacksmithing crafts", proficiency: "one smithing melee weapon (may be specialized)" },
      summary: [ "Gain 5 Expertise Points in each of 3 different blacksmithing crafts, plus proficiency with one smithing melee weapon of your choice (can be specialized)." ]
    },
    "secret-art-shatter": {
      name: "Secret Art: Shatter", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Secret Art", "Sure Hit"],
      requires: "The attack must use a Blacksmith's Hammer.",
      summary: [ "Heavy Attack with a Blacksmith's Hammer. If the target Blocks, it gets 100 damage reduction against it, and you may destroy (Broken) one equipped non-divine-arms weapon in its hand with equal or fewer crafted enhancements than your hammer." ]
    }
  }
});

// ---------------------------------------------------------------------------
// FUSILIER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("fusilier", {
  name: "Fusilier",
  url: "https://lyrian.splatpass.net/classes/fusilier/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "recoil-control" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "burst-fire" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Artifice", "Athletics", "Stealth", "Medicine", "Perception", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fast-cartridge" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "maximum-firerate" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "suppressive-fire" }
  ],
  abilities: {
    "recoil-control": {
      name: "Recoil Control", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Proficiency with pistols, muskets or crossbows.",
        "Benefit 2: +1 to attack rolls for Salvo attacks."
      ]
    },
    "burst-fire": {
      name: "Burst Fire", kind: "ability",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: ["Salvo"],
      requires: "Must use a pistol, musket or crossbow.",
      summary: [ "3 light attacks against one target." ]
    },
    "fast-cartridge": {
      name: "Fast Cartridge", kind: "ability",
      cost: "0 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Salvo", "Dual Wield"],
      requires: "Must use a pistol, musket or crossbow.",
      summary: [ "2 light attacks against one target." ]
    },
    "maximum-firerate": {
      name: "Maximum Firerate", kind: "ability",
      cost: "4 AP, 3 MP", range: "Ranged Weapon Range", keywords: ["Salvo"],
      requires: "Must use a pistol, musket or crossbow.",
      summary: [ "8 attacks on one target, rolled in pairs (enemy reactions apply to all 8, as with a normal Salvo). After each pair you may cancel the rest; regain 1 Mana per 2 shots cancelled." ]
    },
    "suppressive-fire": {
      name: "Suppressive Fire", kind: "ultimate",
      cost: "3 AP, 1 MP", range: "Ranged Weapon Range", keywords: ["Salvo"],
      requires: "Must use a pistol, musket or crossbow.",
      summary: [
        "5 light attacks split among enemies in a 25x25ft area.",
        "Until the start of your next turn, each enemy you damaged counts as Blinded 2 against your ranged attacks, and whenever it makes a ranged attack you can make a ranged weapon light attack against it. Leaving the area ends this for that enemy."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// GEOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("geomancer", {
  name: "Geomancer",
  url: "https://lyrian.splatpass.net/classes/geomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Controller",
  secondary: null,
  requires: "Any class mastered or Earth mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "tremorsense-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mud-wall" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fissure" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "seismic-shove" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-earthquake" }
  ],
  abilities: {
    "tremorsense-key": {
      name: "Tremorsense (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "tremorsense",
      grants: { mastery: "Earth" },
      refund: { overlapsWith: ["Granite Warden"], amount: "full",
                note: "Page says refund possible; Granite Warden also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: You gain Earth Mastery.",
        "Benefit 2: You can use Tremorsense."
      ]
    },
    "tremorsense": {
      name: "Tremorsense", kind: "granted", grantedBy: "tremorsense-key",
      cost: "1 AP, 1 MP", range: "40ft", keywords: ["Overcharge"], requires: null,
      summary: [ "Until the end of your turn, know the exact location of every creature in range that's touching the ground. Overcharge: +40ft range per extra Mana." ]
    },
    "mud-wall": {
      name: "Mud Wall", kind: "ability",
      cost: "2 AP", range: "40ft", keywords: ["Spell", "Earth"], requires: null,
      summary: [
        "Can pay 1 RP instead of 2 AP. Create a wall 4ft high, 1ft thick, up to 20ft long on solid ground (no stacking): low cover, and difficult terrain to cross.",
        "Each 5ft section has 60 HP and dissolves at 0; otherwise lasts until the encounter ends."
      ]
    },
    "fissure": {
      name: "Fissure", kind: "ability",
      cost: "2 AP, 2 MP", range: "30ft", keywords: ["Spell", "Earth"], requires: "Special",
      summary: [
        "Open a 15ft-wide fissure up to the target point; everything caught falls 20ft and takes normal fall damage. Creatures at the edge can spend 1 RP to Sidestep 5ft clear.",
        "Needs natural ground underneath (may work on a house's ground floor, fails higher up or in some dungeons)."
      ]
    },
    "seismic-shove": {
      name: "Seismic Shove", kind: "ability",
      cost: "1 AP, 1 MP", range: "80ft", keywords: ["Spell", "Earth"], requires: null,
      summary: [ "Light attack dealing Earth damage. On damage, you may push the target 5ft in any direction." ]
    },
    "secret-art-earthquake": {
      name: "Secret Art: Earthquake", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "160ft", keywords: ["Spell", "Earth", "Secret Art", "Scatter"], requires: null,
      summary: [
        "Light attack dealing Earth damage to all enemies in range touching the ground; on damage they fall Prone.",
        "Separately, a Light Earth attack on all magically created walls and similar magic objects in range, dealing 10x damage to them."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// GEOMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("geomaster", {
  name: "Geomaster",
  url: "https://lyrian.splatpass.net/classes/geomaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Controller",
  secondary: "Striker",
  requires: "Geomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "wall-ride" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "earthen-divide" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "pillar-of-earth" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "spike-field" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "second-tremor" }
  ],
  abilities: {
    "wall-ride": {
      name: "Wall Ride", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When you create a wall on your turn with Geomancer or Geomaster abilities, you can ride along it as it forms and jump off at any point into an empty square beside it." ]
    },
    "earthen-divide": {
      name: "Earthen Divide", kind: "ability",
      cost: "3 AP, 2 MP", range: "5ft", keywords: ["Spell", "Earth"], requires: null,
      summary: [ "Create a straight wall 20ft high, 5ft wide, 20ft long; each segment has HP = 20 + Focus. Overcharge: spend X Mana for +20 x X ft of length." ]
    },
    "pillar-of-earth": {
      name: "Pillar of Earth", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Spell", "Earth"], requires: null,
      summary: [ "Raise a 5x5, 20ft-high pillar under a target creature (it can spend 1 RP to step aside). Each block has HP = 20 + Focus; removing one block collapses the whole pillar." ]
    },
    "spike-field": {
      name: "Spike Field", kind: "ability",
      cost: "2 AP, 1 MP", range: "30ft", keywords: ["Spell", "Earth", "Upkeep"], requires: null,
      summary: [
        "A 20x20ft spike field until the start of your next turn. Moving more than 5ft per movement action across it deals Full Pierce damage equal to your Focus per 5ft moved (forced movement through it: only once).",
        "Upkeep: 1 Mana per extra turn."
      ]
    },
    "second-tremor": {
      name: "Second Tremor", kind: "ultimate",
      cost: "1 RP", range: "120ft", keywords: ["Earth"],
      requires: "An enemy stands up from prone, or takes fall damage without falling prone.",
      summary: [ "The enemy falls Prone and takes Light damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GRANDMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("grandmaster", {
  name: "Grandmaster",
  url: "https://lyrian.splatpass.net/classes/grandmaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 4,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "puppet-grandmaster" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "move-piece" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Deception", "Linguistics", "Magic", "Appraise", "History", "Artifice", "Insight", "Art", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "castling" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "check" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-checkmate" }
  ],
  abilities: {
    "puppet-grandmaster": {
      name: "Puppet Grandmaster", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "summon-piece",
      summary: [
        "Benefit 1: Summon puppets you control with Summon Piece. They follow the movement rules in the abilities, are always Medium, and look like whatever you choose when you take the class.",
        "Benefit 2: Change your pieces' appearance as an EP action."
      ]
    },
    "summon-piece": {
      name: "Summon Piece", kind: "granted", grantedBy: "puppet-grandmaster",
      cost: "1 AP", range: "60ft", keywords: [], requires: null,
      summary: [
        "Summon a Pawn puppet: HP 20 + Focus, no evasion, no guard; not living (generally treated as a structure); lasts until the encounter ends.",
        "Overcharge: summon a different piece instead - Knight or Bishop (1 Mana), Rook (2 Mana), Queen (3 Mana)."
      ]
    },
    "move-piece": {
      name: "Move Piece", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Killing Blow", "Sidestep"], requires: null,
      summary: [
        "Move a visible puppet by its piece type: Pawn up to 2 squares orthogonally or 1 diagonally; Knight 1 orthogonal then 1 diagonal same direction (passes through allies and enemies); Bishop up to 8 diagonal; Rook up to 8 orthogonal; Queen up to 8 either way. Non-Knights can't pass through allies.",
        "When blocked by an object or creature, the piece makes a Heavy Physical (Bludgeoning) attack using your stats. A Knight that fails to kill stays in its original spot. On a Killing Blow, the piece moves into the target's square.",
        "Pieces promote when they deal damage: Pawn to Bishop or Knight, then Rook, then Queen (Queens can't promote). Each move counts as a Sidestep."
      ]
    },
    "castling": {
      name: "Castling", kind: "ability",
      cost: "0 RP, 1 MP", range: "40ft", keywords: ["Teleport"], requires: null,
      summary: [ "Swap places with a Rook puppet you control." ]
    },
    "check": {
      name: "Check", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Active"], requires: null,
      summary: [ "Move a puppet (Move Piece rules, but not as an attack) to where it could attack an enemy on its next move. At the start of your next turn, move it again as if with Move Piece for free (doesn't count as an ability use)." ]
    },
    "secret-art-checkmate": {
      name: "Secret Art: Checkmate", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "Self", keywords: ["Secret Art"], requires: null,
      summary: [ "Move all your pieces as if you used Move Piece on each." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GRANITE WARDEN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("granite-warden", {
  name: "Granite Warden",
  url: "https://lyrian.splatpass.net/classes/granite-warden/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: "Defender",
  requires: "Mage mastered or Earth mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "tremorsense-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "steady-ground" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Medicine", "Magic", "Religion", "History", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "earth-armor" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "earth-infusion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "earth-shield" }
  ],
  abilities: {
    "tremorsense-key": {
      name: "Tremorsense (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "tremorsense",
      grants: { mastery: "Earth" },
      refund: { overlapsWith: ["Geomancer"], amount: "full",
                note: "Page says refund possible; Geomancer also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: You gain Earth Mastery.",
        "Benefit 2: You can use Tremorsense."
      ]
    },
    "tremorsense": {
      name: "Tremorsense", kind: "granted", grantedBy: "tremorsense-key",
      cost: "1 AP, 1 MP", range: "40ft", keywords: ["Overcharge"], requires: null,
      summary: [ "Until the end of your turn, know the exact location of every creature in range that's touching the ground. Overcharge: +40ft range per extra Mana." ]
    },
    "steady-ground": {
      name: "Steady Ground", kind: "ability",
      cost: "1 RP", range: "60ft", keywords: ["Aid"],
      requires: "The target must be touching the ground.",
      summary: [ "Can pay 2 AP instead of 1 RP. The target becomes Immovable until the start of its next turn." ]
    },
    "earth-armor": {
      name: "Earth Armor", kind: "ability",
      cost: "2 AP", range: "5ft", keywords: ["Enchantment", "Aid", "Earth"], requires: null,
      summary: [ "Enchant a willing ally's armor by touch: +1 Guard and +4 Block until the encounter ends." ]
    },
    "earth-infusion": {
      name: "Earth Infusion", kind: "ability",
      cost: "1 AP", range: "30ft", keywords: ["Spell", "Type", "Earth"], requires: null,
      summary: [ "A willing target becomes type Earth II: half damage from Lightning and Earth damage/keyword attacks (not true damage), +50% from Wind damage/keyword attacks." ]
    },
    "earth-shield": {
      name: "Earth Shield", kind: "ultimate",
      cost: "1 RP, 1 MP", range: "30ft", keywords: ["Spell", "Aid", "Shield", "Earth"],
      requires: "An ally in range is the target of a melee and/or physical attack.",
      summary: [ "The target gains 1 RP that it must spend on a Block against the attack, with Block equal to your Focus x 2 for that action." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GRAVITECT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("gravitect", {
  name: "Gravitect",
  url: "https://lyrian.splatpass.net/classes/gravitect/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Controller",
  secondary: null,
  requires: "Mage mastered and one tier 2 class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "gravity-master" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "gravitational-push" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "singularity-collapse" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "weight-of-the-world" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-black-hole" }
  ],
  abilities: {
    "gravity-master": {
      name: "Gravity Master", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When you push or pull an enemy on your turn, spend 1 Mana for +10ft distance - or 1 Mana to ignore one source of Immovable on a target you're pushing (not permanent Immovable)." ]
    },
    "gravitational-push": {
      name: "Gravitational Push", kind: "ability",
      cost: "1 AP", range: "40ft", keywords: ["Spell", "Active", "Gravity"], requires: null,
      summary: [ "Push the target 20ft away or pull it 20ft toward you." ]
    },
    "singularity-collapse": {
      name: "Singularity Collapse", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Spell", "Gravity"], requires: null,
      summary: [ "Target a 25x25 square; each creature in it saves or is pulled 10ft toward the center." ]
    },
    "weight-of-the-world": {
      name: "Weight of the World", kind: "ability",
      cost: "1 RP", range: "40ft", keywords: ["Gravity"],
      requires: "Target enemy is flying or jumping.",
      summary: [ "Drop the target's elevation by 40ft (may interrupt its movement). If it reaches 0, it slams down, taking fall damage equal to the distance it failed to move, and is knocked Prone." ]
    },
    "secret-art-black-hole": {
      name: "Secret Art: Black Hole", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Spell", "Gravity", "Secret Art"], requires: null,
      summary: [
        "Create a Black Hole at a point in range. When cast and on each upkeep, enemies within 120ft save or are pulled 20ft toward it; enemies within 120ft moving away from it are Slowed for that movement.",
        "Upkeep 1 Mana. Instead of paying upkeep, you can detonate it: Heavy attack on all enemies within 15ft."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// GRAVITURGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("graviturge", {
  name: "Graviturge",
  url: "https://lyrian.splatpass.net/classes/graviturge/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Mage or Sorcerer mastered and one tier 2 class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mass-index" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "compression" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "density-break" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "localized-collapse" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-absolute-compression" }
  ],
  abilities: {
    "mass-index": {
      name: "Mass Index", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "gravity-crush",
      summary: [
        "Benefit 1: Your Gravity-keyword spells deal +1 damage vs Large creatures and +3 vs Huge.",
        "Benefit 2: You can use Gravity Crush."
      ]
    },
    "gravity-crush": {
      name: "Gravity Crush", kind: "granted", grantedBy: "mass-index",
      cost: "1 AP", range: "30ft", keywords: ["Spell", "Gravity", "Rapid"], requires: null,
      summary: [ "Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack dealing Physical (Crushing) damage." ]
    },
    "compression": {
      name: "Compression", kind: "ability",
      cost: "1 AP, 2 MP", range: "60ft", keywords: ["Spell", "Gravity"], requires: null,
      summary: [ "Heavy attack dealing Physical (Crushing) damage. Costs 1 less Mana vs Large or bigger targets." ]
    },
    "density-break": {
      name: "Density Break", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Spell", "Gravity", "Full Pierce"], requires: null,
      summary: [ "Precise attack dealing damage equal to the target's Toughness." ]
    },
    "localized-collapse": {
      name: "Localized Collapse", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Gravity", "Full Pierce"], requires: null,
      summary: [ "Target a 15x15ft square: every creature in it takes damage equal to Focus / 2, once per square it occupies. A creature caught can spend 1 RP to avoid it. (Not a Spell.)" ]
    },
    "secret-art-absolute-compression": {
      name: "Secret Art: Absolute Compression", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "120ft", keywords: ["Spell", "Gravity", "Full Pierce", "Trick Attack", "Secret Art"], requires: null,
      summary: [ "An attack dealing Double Heavy Physical (Crushing) damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GREAT BERSERKER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("great-berserker", {
  name: "Great Berserker",
  url: "https://lyrian.splatpass.net/classes/great-berserker/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Berserker mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "giant-strength" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "unrelenting-assault" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "single-minded-fury" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "smash-through-the-pain" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "victory-or-death" }
  ],
  abilities: {
    "giant-strength": {
      name: "Giant Strength", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: In Rage stance, you can treat your size as one size larger, and get +5 to Fitness checks." ]
    },
    "unrelenting-assault": {
      name: "Unrelenting Assault", kind: "ability",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Rage"],
      requires: "An enemy moves out of your range.",
      summary: [
        "When an enemy willingly leaves your melee weapon range, make a Heavy attack against it (counts as an opportunity attack) - even if it Disengaged or similar.",
        "Not usable against teleport-type moves unless it teleports into your weapon range."
      ]
    },
    "single-minded-fury": {
      name: "Single-Minded Fury", kind: "ability",
      cost: "0 AP", range: "Sight", keywords: ["Quick"],
      requires: "In Rage Stance, ability not already active.",
      summary: [
        "Pick one enemy. Moving toward it, your speed is doubled; you're immune to Slowed, difficult terrain, and mind-affecting effects that would stop you chasing or attacking it.",
        "+1d4 accuracy vs it, -2d4 vs anyone else. Lasts until the encounter ends or it drops to 0 HP or lower."
      ]
    },
    "smash-through-the-pain": {
      name: "Smash through the pain", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Rage"], requires: null,
      summary: [ "Damage you take from the next attack is reduced by 3 + Power." ]
    },
    "victory-or-death": {
      name: "Victory or Death", kind: "ultimate",
      cost: "0 AP", range: "Self", keywords: [], requires: "In rage stance.",
      summary: [ "Once per encounter: this turn all your melee weapon attacks deal max damage on hit; until the start of your next turn, weapon attacks against you also deal max damage on hit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GREAT KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("great-knight", {
  name: "Great Knight",
  url: "https://lyrian.splatpass.net/classes/great-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Defender",
  secondary: "Support",
  requires: "Cavalier mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "heavy-cavalry" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "rescue-and-drop" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "intercept" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "shared-defense" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-moving-castle" }
  ],
  abilities: {
    "heavy-cavalry": {
      name: "Heavy Cavalry", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Proficiency in Medium Armor and Heavy Armor.",
        "Benefit 2: Every enemy damaged by your Trample effects is Challenged by you until the start of your next turn."
      ]
    },
    "rescue-and-drop": {
      name: "Rescue & Drop", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: [], requires: "Must be mounted.",
      summary: [
        "Pick up a willing ally onto your mount. They ride until either of you spends 0 AP or 1 RP to set them down.",
        "A rescued ally can't take other actions until dropped. One ally at a time."
      ]
    },
    "intercept": {
      name: "Intercept", kind: "ability",
      cost: "1 RP, 1 MP", range: "Your movement speed", keywords: [],
      requires: "Must be mounted, and an ally is the target of an attack.",
      summary: [ "Move to the ally (mounted movement rules); they Sidestep 5ft in a direction of their choice and you take their square. The attack targets you instead and you automatically Block it." ]
    },
    "shared-defense": {
      name: "Shared Defense", kind: "ability",
      cost: "No listed cost", range: "120ft", keywords: [], requires: "Must be dismounted.",
      summary: [ "Your mount (the last one you rode this arc) can use your defenses instead of its own while in range, and you can spend RP for it while dismounted." ]
    },
    "secret-art-moving-castle": {
      name: "Secret Art: Moving Castle", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Self", keywords: ["Secret Art", "Aura", "Upkeep"], requires: null,
      summary: [
        "Defensive aura up to 15ft: all allies (not you) get Bulwark - they take 3 less damage.",
        "While active, spend 0 RP to Sidestep up to your movement, once until the start of your next turn. Upkeep: 1 Mana at the start of your turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// GUARDIAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("guardian", {
  name: "Guardian",
  url: "https://lyrian.splatpass.net/classes/guardian/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Defender",
  secondary: null,
  requires: "Fighter or Armorsmith mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "controlled-opportunities" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "provoke" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "hold-the-line" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "threatening-aura" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "last-stand" }
  ],
  abilities: {
    "controlled-opportunities": {
      name: "Controlled Opportunities", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Proficiency in Heavy Armor.",
        "Benefit 2: +2 to accuracy and damage on attacks of opportunity."
      ]
    },
    "provoke": {
      name: "Provoke", kind: "ability",
      cost: "0 AP, 1 MP", range: "5ft", keywords: ["Challenge"], requires: null,
      summary: [ "Challenge one enemy until the start of your next turn." ]
    },
    "hold-the-line": {
      name: "Hold the line", kind: "ability",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Immovable"], requires: null,
      summary: [ "Your next Block costs 0 RP. Until the start of your next turn you're Immovable, unless you Dodge." ]
    },
    "threatening-aura": {
      name: "Threatening Aura", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Challenge"], requires: null,
      summary: [ "Until the start of your next turn, every enemy in your melee range is Challenged by you." ]
    },
    "last-stand": {
      name: "Last Stand", kind: "ultimate",
      cost: "2 RP, Variable MP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [ "Once per encounter: until the start of your next turn, Block costs 0 RP and you gain extra Guard equal to the Mana spent on this." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GUN PALADIN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("gun-paladin", {
  name: "Gun Paladin",
  url: "https://lyrian.splatpass.net/classes/gun-paladin/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Support",
  secondary: "Striker",
  requires: "Human. Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "divine-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "judgement-shot" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "twin-verdict" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "sanctity-aura" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "divine-barrage" }
  ],
  abilities: {
    "divine-weapon": {
      name: "Divine Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      refund: { overlapsWith: ["Shield Paladin", "Sword Paladin"], amount: "full",
                note: "Page says refund possible; Shield Paladin and Sword Paladin also grant it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: A weapon attack can deal your chosen Divine damage type instead of its normal type. Declare it before the accuracy roll.",
        "Benefit 2: Your weapon can give off light like a lantern; toggle for 1 AP."
      ]
    },
    "judgement-shot": {
      name: "Judgement Shot", kind: "ability",
      cost: "2 AP, 1 MP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Light attack on the target; then one ally (not you) within 30ft can make a Light attack on the same target - or spend 1 RP to make it Heavy or Precise." ]
    },
    "twin-verdict": {
      name: "Twin Verdict", kind: "ability",
      cost: "3 AP, 1 RP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Two Heavy attacks against the target." ]
    },
    "sanctity-aura": {
      name: "Sanctity Aura", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Aura"], requires: null,
      summary: [ "30ft blessing aura: when an ally attacks as part of one of your Gun Paladin abilities, they can switch that attack's damage type to your Holy Weapon damage type." ]
    },
    "divine-barrage": {
      name: "Divine Barrage", kind: "ultimate",
      cost: "2 AP, Variable MP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Light attack on the target, and X allies (not you) within 30ft can each make a Light attack on the same target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// GUNFU  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("gunfu", {
  name: "Gunfu",
  url: "https://lyrian.splatpass.net/classes/gunfu/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered. Gunslinger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "gun-martial-arts" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "slide-and-shoot" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Deception", "Insight", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "point-blank-shot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "pistol-whip" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-whirling-death" }
  ],
  abilities: {
    "gun-martial-arts": {
      name: "Gun Martial Arts", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Fire pistols at melee range without provoking attacks of opportunity.",
        "Benefit 2: Make unarmed attacks while holding a pistol in both hands (not if wielding any non-pistol weapon). Wielding only pistols, your unarmed attacks get your pistol's material bonuses."
      ]
    },
    "slide-and-shoot": {
      name: "Slide & Shoot", kind: "ability",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: ["Pass", "Sidestep", "Combo"], requires: "Pistol only",
      summary: [
        "Slide up to 20ft toward a target without provoking (you can pass through enemies); at any point, make a pistol Light Attack on the target.",
        "Your next ability gains Combo; if it's an unarmed attack, it costs 1 less AP."
      ]
    },
    "point-blank-shot": {
      name: "Point Blank Shot", kind: "ability",
      cost: "2 AP, 3 MP", range: "5ft", keywords: ["Sure Hit"], requires: "Pistol only",
      summary: [ "Heavy Attack against the target." ]
    },
    "pistol-whip": {
      name: "Pistol Whip", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike"], requires: "Must be holding a pistol",
      summary: [ "Light Attack with your pistol; on damage the target is Unbalanced. Uses the pistol's alloys and material bonuses, not your unarmed strike's." ]
    },
    "secret-art-whirling-death": {
      name: "Secret Art: Whirling Death", kind: "ultimate",
      cost: "0 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Stance", "Scatter"], requires: null,
      summary: [
        "Enter Whirling Death Stance: spend 2 AP for a basic pistol Light Attack against every enemy within 20ft. If it kills or downs an enemy, you can repeat it.",
        "Ends when you enter another stance or make an attack not tied to this ability."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// GUNSLINGER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("gunslinger", {
  name: "Gunslinger",
  url: "https://lyrian.splatpass.net/classes/gunslinger/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "gunslingers-agility" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "ricochet" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Perception", "Insight", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "warning-shot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "quickdraw" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-fan-the-hammer" }
  ],
  abilities: {
    "gunslingers-agility": {
      name: "Gunslinger's Agility", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { initiative: 1 },
      summary: [
        "Benefit 1: Proficiency in pistols.",
        "Benefit 2: +1 Gunslinger bonus to Initiative."
      ]
    },
    "ricochet": {
      name: "Ricochet", kind: "ability",
      cost: "1 AP", range: "Ranged Weapon Range", keywords: [], requires: "Pistol only.",
      summary: [ "Light (1 AP) or Heavy (2 AP) attack; the target gets no benefit from Light Cover." ]
    },
    "warning-shot": {
      name: "Warning Shot", kind: "ability",
      cost: "0 AP, 2 MP", range: "Ranged Weapon Range", keywords: [], requires: "Must be done with a pistol.",
      summary: [ "Your next basic pistol attack or Ricochet against that target gains the Trick Attack keyword." ]
    },
    "quickdraw": {
      name: "Quickdraw", kind: "ability",
      cost: "No listed cost", range: "Ranged Weapon Range", keywords: ["Encounter Start"], requires: "Pistol only.",
      summary: [ "Encounter Start: draw a pistol and make a Light attack; the target can't react to it." ]
    },
    "secret-art-fan-the-hammer": {
      name: "Secret Art: Fan the hammer", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "20ft", keywords: ["Secret Art", "Salvo"], requires: "Pistol only.",
      summary: [ "4 Heavy attacks on the target. The weapon can't be used again until the encounter ends." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HARRIER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("harrier", {
  name: "Harrier",
  url: "https://lyrian.splatpass.net/classes/harrier/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "discern-immunities-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "knockback-shot" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "pinning-shot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "rapid-correction" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "flushing-shot" }
  ],
  abilities: {
    "discern-immunities-key": {
      name: "Discern Immunities (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "discern-immunities",
      summary: [ "Benefit 1: You can use Discern Immunities." ]
    },
    "discern-immunities": {
      name: "Discern Immunities", kind: "granted", grantedBy: "discern-immunities-key",
      cost: "0 AP", range: "Sight", keywords: ["Quick"], requires: null,
      summary: [
        "Learn one target's resistances until the encounter ends.",
        "When you're about to use a negative effect it would passively negate, you know and can cancel the action (not if it has an active ability that removes the effect, e.g. a paladin's Paragon of Virtue)."
      ]
    },
    "knockback-shot": {
      name: "Knockback Shot", kind: "ability",
      cost: "1 AP, 1 MP", range: "Ranged Weapon Range (up to 60ft)", keywords: [], requires: null,
      summary: [ "Light attack. On damage, push the target back 20ft." ]
    },
    "pinning-shot": {
      name: "Pinning Shot", kind: "ability",
      cost: "1 AP, 2 MP", range: "Ranged Weapon Range (up to 60ft)", keywords: ["Root"], requires: "Bow or Crossbow only",
      summary: [ "Light attack. On damage, if a wall or similar is directly behind the target, it's pinned: Rooted until it spends 2 AP to pull the arrow out." ]
    },
    "rapid-correction": {
      name: "Rapid Correction", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [],
      requires: "You miss with a ranged weapon Light attack.",
      summary: [ "Turn the Light attack into a Precise attack." ]
    },
    "flushing-shot": {
      name: "Flushing Shot", kind: "ultimate",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: ["Sure Hit"],
      requires: "Target must be in Low or High cover.",
      summary: [ "Heavy attack. The target can Sidestep out of cover to automatically avoid it; otherwise it gains Sure Hit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HIGH PRIEST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("high-priest", {
  name: "High Priest",
  url: "https://lyrian.splatpass.net/classes/high-priest/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 1,
  role: "Healer",
  secondary: null,
  requires: "Priest mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "tranquil-prayers" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cure-touch-ii" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Religion", "Magic", "History", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "purification-circle" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "radiant-halo" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-walking-church" }
  ],
  abilities: {
    "tranquil-prayers": {
      name: "Tranquil Prayers", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Acolyte, Priest and High Priest healing abilities heal double outside of combat." ]
    },
    "cure-touch-ii": {
      name: "Cure Touch II", kind: "ability",
      cost: "2 AP, 5 MP", range: "Touch", keywords: ["Healing", "Spell"], requires: null,
      summary: [ "Heal the target for 22 + (4 x Power)." ]
    },
    "purification-circle": {
      name: "Purification Circle", kind: "ability",
      cost: "2 AP, 2 MP", range: "120ft", keywords: ["Spell"], requires: null,
      summary: [ "Remove all stacks of one chosen debuff from every ally within 20ft of the target point." ]
    },
    "radiant-halo": {
      name: "Radiant Halo", kind: "ability",
      cost: "2 AP, 6 MP", range: "120ft", keywords: ["Healing", "Spell"], requires: null,
      summary: [ "Heal all allies within 15ft of the target point for 11 + (2 x Power). Can pay 1 RP instead of 2 AP, and then it can be used outside your turn." ]
    },
    "secret-art-walking-church": {
      name: "Secret Art: Walking Church", kind: "ultimate",
      cost: "1 RP, 1 MP", range: "120ft", keywords: ["Secret Art"], requires: null,
      summary: [ "The target gains the 'church' status: Damage Reduction 1000 vs all damage types until the end of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HIGHLANDER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("highlander", {
  name: "Highlander",
  url: "https://lyrian.splatpass.net/classes/highlander/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Adventurer, Fighter, Farmer, Blacksmith or Miner mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "aftershocks" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "steady-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "meteor-cleave" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cleave" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "overpower" }
  ],
  abilities: {
    "aftershocks": {
      name: "Aftershocks", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "aftershock",
      summary: [
        "Benefit 1: You can use Aftershock.",
        "Benefit 2: For Fighter, Highlander or Reaver abilities that compare Power against a Boss-type enemy, treat your Power as 2 higher for that comparison (not damage)."
      ]
    },
    "aftershock": {
      name: "Aftershock", kind: "granted", grantedBy: "aftershocks",
      cost: "0 RP, 1 MP", range: "Melee Weapon Range", keywords: ["Rage", "Half Pierce"],
      requires: "You missed a Heavy melee attack with a Two-Handed Melee Weapon.",
      summary: [
        "Deal Half Pierce Physical damage equal to your Power to the target and all enemies within 5ft of it (halved if the target Dodged).",
        "If your attack had multiple targets, only applies if you missed all of them."
      ]
    },
    "steady-stance": {
      name: "Steady Stance", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Stance", "Immovable"], requires: null,
      summary: [
        "Stance: you're Immovable unless the enemy has more Power than you; if they do, pay 1 more Mana to keep it against them that turn if they'd knock you Prone or back.",
        "Lasts until you enter another stance."
      ]
    },
    "meteor-cleave": {
      name: "Meteor Cleave", kind: "ability",
      cost: "3 AP", range: "15ft", keywords: ["Sidestep"], requires: "Two-Handed melee weapon only.",
      summary: [ "Sidestep up to 10ft toward the target, then melee Heavy attack. On damage, if your Power is equal or higher than its, it's knocked Prone." ]
    },
    "cleave": {
      name: "Cleave", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Half Pierce"], requires: "Two-Handed weapon only.",
      summary: [
        "Heavy attack. On damage, deal Half Pierce Physical damage equal to your Power to all other enemies within 5ft of the target.",
        "If you miss and react with Aftershock, that Aftershock costs 1 less Mana."
      ]
    },
    "overpower": {
      name: "Overpower", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Combo"], requires: "Two-Handed weapons only.",
      summary: [
        "Heavy attack with +2 damage per point of Power you have over the target.",
        "Combo: after Meteor Cleave, costs 1 less AP."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// HOARFROST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("hoarfrost", {
  name: "Hoarfrost",
  url: "https://lyrian.splatpass.net/classes/hoarfrost/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Cryomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "eternal-mirane-cage-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "frost-driver" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "Common Knowledge"],
      summary: "+5 skill points in Magic or Common Knowledge. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "white-thunder" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "glacial-bastion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-whiteout" }
  ],
  abilities: {
    "eternal-mirane-cage-key": {
      name: "Eternal Mirane Cage (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "eternal-mirane-cage",
      summary: [ "Benefit 1: You can use Eternal Mirane Cage." ]
    },
    "eternal-mirane-cage": {
      name: "Eternal Mirane Cage", kind: "granted", grantedBy: "eternal-mirane-cage-key",
      cost: "0 RP, 1 MP", range: "Sight", keywords: ["Frost", "Spell"],
      requires: "An ally's attack would kill a target that isn't an ally.",
      summary: [
        "Instead of dying, the target drops to negative its Max HP + 1 and is sealed in never-melting Magical Ice for 10 years, rooted and immovable.",
        "Only Higher Order Magic (e.g. a Divine Arms) or you can dispel it; ends if you die. +10 years per 2 Mana spent."
      ]
    },
    "frost-driver": {
      name: "Frost Driver", kind: "ability",
      cost: "2 AP, 1 MP", range: "80ft", keywords: ["Frost", "Root", "Slow", "Spell", "Combo"], requires: null,
      summary: [
        "Ice spikes along the ground: Heavy attack dealing Frost damage (can't hit targets more than 5ft off the ground). On hit, Slowed until the end of its next turn; if already Slowed, Rooted instead.",
        "Combo: after Icicle Nail or White Thunder hits, costs 0 Mana."
      ]
    },
    "white-thunder": {
      name: "White Thunder", kind: "ability",
      cost: "1 AP", range: "80ft", keywords: ["Frost", "Slow", "Spell", "Scatter"], requires: null,
      summary: [ "Frost bolt at a Glacial Wall in range (needs line of sight): the wall shatters into ice blades - Precise Frost attack on each enemy within 5ft of it; hits are Slowed until the end of their next turn." ]
    },
    "glacial-bastion": {
      name: "Glacial Bastion", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Frost", "Spell"], requires: null,
      summary: [
        "Encase yourself in a Glacial Wall (HP 20 + Focus) until the start of your next turn; you can't be targeted by attacks. Overflow damage passes to you, reduced by armor.",
        "While encased you can't act, except to cast White Thunder on your ice for 1 RP (ending it). Doesn't provoke attacks of opportunity."
      ]
    },
    "secret-art-whiteout": {
      name: "Secret Art: Whiteout", kind: "ultimate",
      cost: "1 RP, 1 MP", range: "2500ft radius on self", keywords: ["Encounter Start", "Frost", "Spell", "Upkeep", "Concentration", "Secret Art"], requires: null,
      summary: [
        "Snowstorm: affected units' accuracy is reduced by your Focus and sight drops to 60ft (they can only target within sight). You and Frost Immune creatures are unaffected.",
        "Can be activated at Encounter Start for no RP or initial Mana. Upkeep: 2 Mana at the start of your turn or it ends at the end of that turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// HUSSAR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("hussar", {
  name: "Hussar",
  url: "https://lyrian.splatpass.net/classes/hussar/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cavalier mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "terrifying-charge" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cavalry-charge" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "break-away" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "momentum" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-override" }
  ],
  abilities: {
    "terrifying-charge": {
      name: "Terrifying Charge", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Non-heroic targets you damage with Trample or Secret Art: Override become Shaken until the end of their next turn." ]
    },
    "cavalry-charge": {
      name: "Cavalry Charge", kind: "ability",
      cost: "Variable AP", range: "Self", keywords: [], requires: "Must be mounted.",
      summary: [ "Spend up to 4 AP to move as if spent on movement. You automatically gain Trample after 20ft; the Trample attack gets +1 damage per 10ft moved (max +10)." ]
    },
    "break-away": {
      name: "Break Away", kind: "ability",
      cost: "1 AP, 2 MP", range: "Self", keywords: [], requires: "Must be mounted.",
      summary: [ "Disengage and move up to half your speed away from the nearest enemy." ]
    },
    "momentum": {
      name: "Momentum", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: "Must be mounted.",
      summary: [ "Heavy attack with +1 damage per 10ft moved during your last action this turn (max +10). Teleport abilities don't count." ]
    },
    "secret-art-override": {
      name: "Secret Art: Override", kind: "ultimate",
      cost: "3 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Sure Hit", "Pass", "Blanketing"], requires: "Must be mounted.",
      summary: [ "Heavy attack against all enemies in a line, moving through them until you reach an empty space you can stand in. Can't be used if an ally or terrain blocks every valid end spot." ]
    }
  }
});

// ---------------------------------------------------------------------------
// HYDROMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("hydromancer", {
  name: "Hydromancer",
  url: "https://lyrian.splatpass.net/classes/hydromancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Any class mastered or Water mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mage-of-the-tides" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "aqua-drill" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: "ANY_REASON_AWARENESS_OR_PRESENCE_SKILL",
      summary: "+5 skill points in any one Reason, Awareness or Presence category skill. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "crashing-foam-wave" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cure-water" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "refreshing-stream" }
  ],
  abilities: {
    "mage-of-the-tides": {
      name: "Mage of the Tides", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "blue-tide",
      grants: { mastery: "Water" },
      summary: [
        "Benefit 1: You can use Blue Tide.",
        "Benefit 2: You gain Elemental Mastery: Water.",
        "Benefit 3: Walk and skate on water; every 10ft across water costs only 5ft of movement."
      ]
    },
    "blue-tide": {
      name: "Blue Tide", kind: "granted", grantedBy: "mage-of-the-tides",
      cost: "1 AP", range: "Self", keywords: ["Domain", "Spell"], requires: null,
      summary: [ "Create a 15ft-radius, 1ft-deep zone of water around you that stays where it was made, lasts until the encounter ends, and refills when Aqua Drill is used inside it. Multiple zones allowed." ]
    },
    "aqua-drill": {
      name: "Aqua Drill", kind: "ability",
      cost: "2 AP or 1 RP", range: "60ft", keywords: ["Safe", "Water"],
      requires: "You must be touching about a normal bucket's worth of water.",
      summary: [ "Heavy Water attack on a target in range; the water spills within 5ft of the target where you choose. Pay with AP or RP; paying with RP adds +1 Mana cost." ]
    },
    "crashing-foam-wave": {
      name: "Crashing Foam Wave", kind: "ability",
      cost: "1 AP or 1 RP", range: "30ft", keywords: ["Active", "Water"], requires: null,
      summary: [ "A wave from a point of water within 30ft shoves an adjacent Large-or-smaller target 10ft directly away (any direction if it's on water). Pay with AP or RP. Forced movement doesn't provoke." ]
    },
    "cure-water": {
      name: "Cure Water", kind: "ability",
      cost: "2 AP or 1 RP, 3 MP", range: "15ft", keywords: ["Healing", "Spell", "Water"], requires: null,
      summary: [ "Cast on water within 15ft to heal a target within 30ft for 11 + (Power x 2). Pay with AP or RP." ]
    },
    "refreshing-stream": {
      name: "Refreshing Stream", kind: "ultimate",
      cost: "1 RP, 2 MP", range: "15ft", keywords: ["Spell", "Water"], requires: null,
      summary: [ "Cast on water within 15ft: a target within 15ft of that point recovers fatigue and gains 1 RP (not above max)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// IAI STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("iai-style", {
  name: "Iai Style",
  url: "https://lyrian.splatpass.net/classes/iai-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered. Proficient with Katana.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "iaijutsu" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "iai-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "History", "Insight", "Art", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "kiri-tsuke" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "chiburi-noto" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "uke-nagashi" }
  ],
  abilities: {
    "iaijutsu": {
      name: "Iaijutsu", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: You can still react when attacked while surprised (effects that need you to be unaware, like Killshot, don't apply).",
        "Benefit 2: Sheathe and draw katanas for 0 AP, once per turn per katana.",
        "Benefit 3: You start each battle in the Iai state. Attacking with a katana removes Iai for that weapon. Iai-requiring skills need the weapon sheathed and remove Iai from all your weapons unless stated."
      ]
    },
    "iai-strike": {
      name: "Iai Strike", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Iaijutsu", "Lock On"],
      requires: "Katana only. Must be in the Iai state.",
      summary: [ "Quick draw-and-strike Heavy Attack; you lose the Sheathed state afterward." ]
    },
    "kiri-tsuke": {
      name: "Kiri-tsuke", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Killing Blow"], requires: "Katana only",
      summary: [ "Heavy Attack. On a Killing Blow, you regain the Iai state." ]
    },
    "chiburi-noto": {
      name: "Chiburi Noto", kind: "ability",
      cost: "No listed cost", range: "Self (Weapon)", keywords: ["Encounter Conclusion"],
      requires: "You used an Iaijutsu ability with the chosen weapon this encounter.",
      summary: [ "Clean and sheathe the katana: if your next Iai Strike with it this arc hits, its damage roll is maximized." ]
    },
    "uke-nagashi": {
      name: "Uke Nagashi", kind: "ultimate",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Counter", "Iaijutsu"],
      requires: "Katana only. You're the target of a melee attack and in the Iai state.",
      summary: [
        "Roll Heavy Damage and use it as your Block. If damage drops to 0, the attacker is Unbalanced (on-hit effects and maces don't trigger).",
        "Then make an Iai Strike on the attacker for 0 RP, with Sure Hit vs an Unbalanced target."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// IDOL  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("idol", {
  name: "Idol",
  url: "https://lyrian.splatpass.net/classes/idol/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Support",
  secondary: "Healer",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "idols-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "this-is-our-moment" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Stealth", "Deception", "Linguistics", "Insight", "Art", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "twinkle-step" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "stay-here-with-me" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "mashup" }
  ],
  abilities: {
    "idols-journey": {
      name: "Idol's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "one-beat-one-heart",
      grants: { skill: "Art", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency in wands, small weapons and Light Armor.",
        "Benefit 2: +5 Art skill points; any point can be traded for 2 expertise points in Art.",
        "Benefit 3: You can use One Beat, One Heart."
      ]
    },
    "one-beat-one-heart": {
      name: "One Beat, One Heart", kind: "granted", grantedBy: "idols-journey",
      cost: "2 AP", range: "30ft", keywords: ["Song", "Sound", "Idol", "Upkeep"], requires: null,
      summary: [ "All allies in range get +1 Song bonus to accuracy (doubled on Precise attacks). Upkeep: 1 AP." ]
    },
    "this-is-our-moment": {
      name: "This is our moment!", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Song", "Sound", "Idol", "Upkeep"], requires: null,
      summary: [ "All allies in range get +1 Song bonus to damage rolls (doubled on Heavy attacks). Upkeep: 1 AP." ]
    },
    "twinkle-step": {
      name: "Twinkle Step", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Song", "Sound", "Idol", "Upkeep"], requires: null,
      summary: [ "All allies in range get +1 Song bonus to Evasion and Dodge. Upkeep: 1 AP." ]
    },
    "stay-here-with-me": {
      name: "Stay Here With Me!", kind: "ability",
      cost: "2 AP, 2 MP", range: "30ft", keywords: ["Song", "Sound", "Idol", "Healing", "Upkeep"], requires: null,
      summary: [ "All allies in range heal 8 HP. Upkeep: 1 AP + 2 Mana, healing everyone in range for 8 again each time." ]
    },
    "mashup": {
      name: "Mashup", kind: "ultimate",
      cost: "0 AP, 2 MP", range: "Self", keywords: [],
      requires: "At least 1 song with the Idol keyword active.",
      summary: [ "Activate another Idol song: it costs 2 less AP and can exceed your normal song limits." ]
    }
  }
});

// ---------------------------------------------------------------------------
// JEWEL IDOL  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("jewel-idol", {
  name: "Jewel Idol",
  url: "https://lyrian.splatpass.net/classes/jewel-idol/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: null,
  requires: "Idol mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "cool-spotlight" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "never-miss-the-beat" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Stealth", "Deception", "Linguistics", "Insight", "Art", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "until-my-voice-breaks" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "offbeat-recovery" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-full-combo" }
  ],
  abilities: {
    "cool-spotlight": {
      name: "Cool Spotlight", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Your Idol songs get +15ft range (stacks with other key-ability range increases).",
        "Benefit 2: One Beat, One Heart doesn't count toward your song limit.",
        "Benefit 3: When paying One Beat, One Heart's upkeep, spend 1 Mana to double its effect."
      ]
    },
    "never-miss-the-beat": {
      name: "Never Miss The Beat", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Song", "Sound", "Idol", "Upkeep"], requires: null,
      summary: [ "Supportive song (Upkeep 1 AP): once per round per ally, when an ally's attack fails to meet base evasion, spend 2 Mana to add that ally's Focus bonus to the attack." ]
    },
    "until-my-voice-breaks": {
      name: "Until My Voice Breaks", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "When you'd pay Mana for an Idol-keyword ability, you can instead lower your current and max HP by 8 per Mana. The max HP loss lasts until the encounter ends and can't be removed." ]
    },
    "offbeat-recovery": {
      name: "Offbeat Recovery", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Lock On", "Half Rapid", "Augment"],
      requires: "An ally within your Idol Song's range misses a basic attack.",
      summary: [
        "The ally's attack gains Lock On, but its damage is minimized (can't be maximized) and it loses Full Pierce, Block Crush and on-hit/on-damage effects. If the target already Dodged, it may Block for free.",
        "Also usable when an ally misses with an ability, so the miss doesn't count against Secret Art: Full Combo (no Lock On in that case)."
      ]
    },
    "secret-art-full-combo": {
      name: "Secret Art: Full Combo", kind: "ultimate",
      cost: "1 AP, 3 MP", range: "30ft", keywords: ["Song", "Idol", "Sound", "Secret Art", "Upkeep"], requires: null,
      summary: [ "Allies get +4 Song bonus to damage (+8 on Heavy attacks). If an ally misses an attack, the bonus drops to +1. Upkeep: 1 AP." ]
    }
  }
});

// ---------------------------------------------------------------------------
// JONIN  (checked 2026-10-20, site v0.13.2)  ** Level 4 is BLANK on site **
// ---------------------------------------------------------------------------
CL("jonin", {
  name: "Jonin",
  url: "https://lyrian.splatpass.net/classes/jonin/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: "Support",
  requires: "Ninja mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "ninja-techniques" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "kugeki-zan" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: null, missing: "MISSING - Level 4 is blank on the site (En-dama is listed under abilities and may belong here)" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "kage-bunshin-kyomei" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "ougi-taju-bunshin-no-jutsu" }
  ],
  abilities: {
    "ninja-techniques": {
      name: "Ninja Techniques", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "genjutsu-kai",
      summary: [
        "Benefit 1: Your Ninja Run lasts the entire turn.",
        "Benefit 2: You can use Genjutsu Kai."
      ]
    },
    "genjutsu-kai": {
      name: "Genjutsu Kai", kind: "granted", grantedBy: "ninja-techniques",
      cost: "0 AP, 1 MP", range: "5ft", keywords: ["Ninjutsu", "Stealth"],
      requires: "Target is under the effects of an Illusion.",
      summary: [ "Dispel Illusions affecting you or an ally within 5ft." ]
    },
    "kugeki-zan": {
      name: "Kugeki-zan", kind: "ability",
      cost: "1 AP", range: "Ranged Weapon Range", keywords: ["Ninjutsu", "Sure Hit", "Full Pierce"],
      requires: "Target must have 0 RP remaining.",
      summary: [ "Light attack against the target." ]
    },
    "en-dama": {
      name: "En-dama", kind: "unlisted",
      note: "Listed under Abilities unlocked, but the Level 4 step is blank - probably the Level 4 ability. Confirm.",
      cost: "2 AP, 1 MP", range: "5ft", keywords: ["Hiding", "Stealth"], requires: null,
      summary: [
        "Throw a smoke bomb in range: blocks line of sight in a 5ft radius (15x15 total). Creatures inside or within 5ft can only see 5ft into or out of it. If you're inside when it's thrown, you gain Hiding from anyone you have cover or concealment from.",
        "Lasts until the start of your next turn. When it ends, if you're still inside, you can move up to your speed and stay hidden until that move ends (and stay hidden from those you have cover from)."
      ]
    },
    "kage-bunshin-kyomei": {
      name: "Kage Bunshin: Kyomei", kind: "ability",
      cost: "0 AP", range: "5ft", keywords: ["Ninjutsu", "Stealth"],
      requires: "You have a Bunshin clone active and in range.",
      summary: [ "Your next Ninjutsu costs 1 less AP." ]
    },
    "ougi-taju-bunshin-no-jutsu": {
      name: "Ougi: Taju Bunshin no Jutsu", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Ninjutsu", "Illusion", "Upkeep", "Active"], requires: null,
      summary: [
        "Create 3 illusory copies of yourself within 10ft of you or your Bunshin clone. They act like Bunshin Tai no Jutsu copies and each get 2 AP from the start of your next turn; you can spend RP for them as normal.",
        "Each copy has 1 HP and vanishes when damaged. Upkeep: 2 AP."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// KNIGHT-PARAMOUNT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("knight-paramount", {
  name: "Knight-Paramount",
  url: "https://lyrian.splatpass.net/classes/knight-paramount/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Defender",
  secondary: null,
  requires: "Great Knight mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "living-cover" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "blocking-move" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "heavy-trample" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "armored-blow" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-unstoppable-onslaught" }
  ],
  abilities: {
    "living-cover": {
      name: "Living Cover", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: While mounted, an ally within 5ft can use you as Low Cover; if the attack would have missed them because of that cover, it hits you instead." ]
    },
    "blocking-move": {
      name: "Blocking Move", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [],
      requires: "You made an opportunity attack against a target moving away from you. Must be mounted.",
      summary: [
        "Move in front of the target, ending its movement. Until the end of its turn it's Challenged by you and your next Block against it costs 0 RP.",
        "If it moves away from you by any method (even teleport), you can make a Heavy attack with Sure Hit. Your movement can ignore Line Movement restrictions."
      ]
    },
    "heavy-trample": {
      name: "Heavy Trample", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "When using Trample, use your Toughness for the damage roll instead of your mount's Power." ]
    },
    "armored-blow": {
      name: "Armored Blow", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: [],
      requires: "Only after moving at least 20ft in the previous action. Must be mounted.",
      summary: [ "Heavy attack. Your next Block against that target costs 0 RP and gets +10." ]
    },
    "secret-art-unstoppable-onslaught": {
      name: "Secret Art: Unstoppable Onslaught", kind: "ultimate",
      cost: "2 AP", range: "Self", keywords: ["Secret Art", "Sure Hit", "Mind Affecting", "Fear", "Challenge", "Shaken"],
      requires: "Must be mounted.",
      summary: [ "Move up to your speed in a line. Every enemy you pass through, and every enemy within 15ft of where you stop, takes Light damage and is Challenged and Shaken until the start of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// LANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("lancer", {
  name: "Lancer",
  url: "https://lyrian.splatpass.net/classes/lancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cavalier, Adventurer or Fighter mastered. Proficient in polearms or lances.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "brace" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "lunge" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "piercing-stab" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "extending-spear" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "crescent-sweep" }
  ],
  abilities: {
    "brace": {
      name: "Brace", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: When you Prepare a polearm melee attack and the target moved more than 20ft that turn (not teleports), it gains Full Pierce and deals max damage. Vs a mounted enemy it also gains Sure Hit, and on damage the target's movement becomes 0 until the start of your turn.",
        "Benefit 2: Once you master the class, the Sure Hit part (not the movement part) also applies vs mounted Beast-type enemies of Large size or bigger."
      ]
    },
    "lunge": {
      name: "Lunge", kind: "ability",
      cost: "0 AP", range: "Self", keywords: [], requires: null,
      refund: { overlapsWith: ["Fencer"], amount: "full",
                note: "Page says refund possible; Fencer also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Your next basic Light, Heavy or Precise melee attack has double attack range." ]
    },
    "piercing-stab": {
      name: "Piercing Stab", kind: "ability",
      cost: "2 AP, 1 MP", range: "A target in melee weapon range and a target directly behind it in melee weapon range", keywords: ["Blanketing"],
      requires: "Polearm only",
      summary: [ "Heavy Attack against the target and the target directly behind it." ]
    },
    "extending-spear": {
      name: "Extending Spear", kind: "ability",
      cost: "2 AP", range: "30ft", keywords: ["Scatter", "Crushing"], requires: "Polearm only",
      summary: [ "Light Attack against every target in a line up to range." ]
    },
    "crescent-sweep": {
      name: "Crescent Sweep", kind: "ultimate",
      cost: "3 AP", range: "Melee Weapon Range", keywords: ["Blanketing"], requires: "Polearm only",
      summary: [ "Light Attack against every enemy in range; on damage, each falls Prone." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mage", {
  name: "Mage",
  url: "https://lyrian.splatpass.net/classes/mage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Utility",
  secondary: "Controller",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mages-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "decipher-magic" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "arcane-barrier" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "glittershards" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "magic-missile" }
  ],
  abilities: {
    "mages-journey": {
      name: "Mage's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "sense-magic",
      grants: { mastery: "Arcane", skill: "Magic", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency with Channeling weapons and Arcane Mastery (use the element in Channeling weapon attacks and do minor tricks with it).",
        "Benefit 2: +5 Magic skill points; any point can be traded for 2 expertise points in Magic.",
        "Benefit 3: You can use Sense Magic."
      ]
    },
    "sense-magic": {
      name: "Sense Magic", kind: "granted", grantedBy: "mages-journey",
      cost: "1 AP", range: "60ft radius centered on self", keywords: ["Sensory", "Spell"], requires: null,
      summary: [ "Detect active, non-hidden magical effects within 60ft. Hidden effects may need a Perception or Insight check." ]
    },
    "decipher-magic": {
      name: "Decipher Magic", kind: "ability",
      cost: "1 AP", range: "Sight", keywords: ["Hacking"], requires: null,
      summary: [ "Start a skill challenge against a magic effect you can see to understand it. Can disable tier 1 bounded fields." ]
    },
    "arcane-barrier": {
      name: "Arcane Barrier", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Shield", "Spell", "Safe"],
      requires: "You're about to take damage.",
      summary: [
        "Barrier with HP = 15 + Focus and Guard 0. Damage hits the barrier first; overflow goes to you.",
        "Lasts until your next turn starts or you take any action other than Block. Doesn't provoke; doesn't stop true damage."
      ]
    },
    "glittershards": {
      name: "Glittershards", kind: "ability",
      cost: "2 AP, 1 MP", range: "40ft range, 5ft radius", keywords: ["Concentration", "Spell"], requires: null,
      summary: [ "Sparkling crystals block line of sight in the area; creatures inside or within 5ft can only see 5ft into or out of it. Up to 10 minutes; one at a time; end it for 0 AP on your turn." ]
    },
    "magic-missile": {
      name: "Magic Missile", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Arcane", "Lock On", "Spell", "Rapid"], requires: null,
      summary: [ "Precise Attack dealing Arcane damage. Doesn't gain Pinpoint." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MAGE KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mage-knight", {
  name: "Mage Knight",
  url: "https://lyrian.splatpass.net/classes/mage-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Healer",
  secondary: "Support",
  requires: "Cavalier mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mage-knight-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cavalry-heal" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Magic", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mounted-casting" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "rescue" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-ride-of-the-valkyrie" }
  ],
  abilities: {
    "mage-knight-key": {
      name: "Mage Knight (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: You can use Canter after casting a spell." ]
    },
    "cavalry-heal": {
      name: "Cavalry Heal", kind: "ability",
      cost: "2 AP, 3 MP", range: "Touch", keywords: ["Spell", "Healing"], requires: null,
      summary: [ "Heal the target for 11 + (Power x 2). If they're mounted, their mount heals the same amount." ]
    },
    "mounted-casting": {
      name: "Mounted Casting", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [],
      requires: "Must be mounted and taking a movement action.",
      summary: [ "Cast a Spell with an AP cost of 2 or less." ]
    },
    "rescue": {
      name: "Rescue", kind: "ability",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Spell", "Teleport"], requires: null,
      summary: [ "Teleport a willing ally within 60ft to an empty square next to you (with their mount, if mounted)." ]
    },
    "secret-art-ride-of-the-valkyrie": {
      name: "Secret Art: Ride of the Valkyrie", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Sidestep", "Healing", "Pass"],
      requires: "Must be mounted.",
      summary: [ "Sidestep up to your speed in a straight line (whatever your mount type), passing through enemies. You and every ally you pass through heal 11 + (Power x 2)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MAGITECHNICIAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("magitechnician", {
  name: "Magitechnician",
  url: "https://lyrian.splatpass.net/classes/magitechnician-/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Utility",
  requires: "Artificer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "advanced-artificing-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "craft-artificers-glove" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Artificing"],
      summary: "+5 skill points in Artificing. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "reverse-polarity" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "expertise-study-artificing" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-entropic-magic-pulse" }
  ],
  abilities: {
    "advanced-artificing-key": {
      name: "Advanced Artificing (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "advanced-artificing",
      grants: { burden: 1, note: "must be spent on an artifice" },
      summary: [
        "Benefit 1: Gain the Artificer Advanced Crafting abilities.",
        "Benefit 2: Craft artifices costing 10000 clim or less.",
        "Benefit 3: +1 Burden, which must be spent on an artifice."
      ]
    },
    "advanced-artificing": {
      name: "Advanced Artificing", kind: "granted", grantedBy: "advanced-artificing-key",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Artifice Modification B", cost: "X Crafting Points",
          summary: "Add a B-type modification to an artifice (see Universal Artifice mods and weapon pages)." },
        { name: "Weapon Modification B", cost: "X Crafting Points",
          summary: "Add a B-type modification to a weapon (see Universal Weapon and weapon pages)." }
      ],
      summary: [ "Two crafting abilities (see subAbilities)." ]
    },
    "craft-artificers-glove": {
      name: "Craft Artificer's Glove", kind: "ability",
      cost: "1 IP", range: "Self", keywords: [], requires: null,
      summary: [
        "Make a personal glove only you are proficient with; pick its type at creation (change its property with an errand). One glove and one property at a time.",
        "Gamma Glove (Hacker) - Artifice Jamming: 1 RP to jam a small-shell artifice within 120ft until its user spends 1 AP to clear it.",
        "Sigma Glove (Combat Artificer) - Heat Sink: 0 RP + 1 Mana to let one artifice ignore the once-per-turn limit once. Overcharge (1 RP) makes the Mana cost 0.",
        "Delta Glove (Specialist): +10 to one chosen expertise skill (not artisan or gathering skills)."
      ]
    },
    "reverse-polarity": {
      name: "Reverse Polarity", kind: "ability",
      cost: "No listed cost", range: null, keywords: [],
      requires: "Must be in a crafting session.",
      summary: [ "Invert the roll result (1 becomes 10, 2 becomes 9, etc.)." ]
    },
    "expertise-study-artificing": {
      name: "Expertise Study (Artificing)", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { expertise: "5 points in each of 3 different Artificing crafts", proficiency: "one basic or specialized weapon of your choice" },
      summary: [ "Gain 5 Expertise Points in each of 3 different Artificing crafts, plus one basic or specialized weapon proficiency of your choice." ]
    },
    "secret-art-entropic-magic-pulse": {
      name: "Secret Art: Entropic Magic Pulse", kind: "ultimate",
      cost: "1 RP, 2 MP", range: "200ft", keywords: ["Secret Art", "Dispel"], requires: null,
      summary: [
        "Cancel all temporary magic in range: non-permanent effects from Spell or Enchantment abilities (not spells with no time limit or permanent results like a Geomancer's fissure; not Bounded Fields or Secret Arts).",
        "Until the end of your next turn, only you can use artifices."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// MAID  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("maid", {
  name: "Maid",
  url: "https://lyrian.splatpass.net/classes/maid/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Support",
  secondary: "Utility",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "maid-training" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "allow-me-to-clean-that" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Roguecraft", "Medicine", "Common Knowledge", "Linguistics", "Appraise", "History", "Perception", "Insight", "Survival", "Intimidation"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "please-hold-still" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "overtime-again" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "snack-time-everyone" }
  ],
  abilities: {
    "maid-training": {
      name: "Maid Training", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "graceful-service",
      grants: { points: 5, expertiseTrade: true,
                options: ["Appraise", "Athletics", "Common Knowledge", "History", "Insight", "Intimidation", "Linguistics", "Medicine", "Perception", "Roguecraft", "Stealth", "Survival"] },
      summary: [
        "Benefit 1: Proficiency with staves (broom), small weapons, sets of missiles and Light Armor.",
        "Benefit 2: +5 skill points among the same skills as Level 3; any point can be traded for 2 expertise points in these skills.",
        "Benefit 3: You can use Graceful Service."
      ]
    },
    "graceful-service": {
      name: "Graceful Service", kind: "granted", grantedBy: "maid-training",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Spend your own encounter conclusion action to give a target character 1 extra encounter conclusion action." ]
    },
    "allow-me-to-clean-that": {
      name: "Allow me to clean that~", kind: "ability",
      cost: "1 AP, 1 MP", range: "5ft", keywords: ["Rapid"], requires: null,
      summary: [
        "Instantly remove a negative terrain effect (e.g. Oil Slick, Sheet Ice, Web) - up to a 15x15ft area - then you may move to any spot in the cleaned area. Not permanent effects (fissures) or effects with HP (walls).",
        "Or target an ally to remove 1 negative physical effect from them."
      ]
    },
    "please-hold-still": {
      name: "Please Hold Still~", kind: "ability",
      cost: "2 AP", range: "5ft", keywords: ["Illumination"], requires: null,
      summary: [ "Apply Illumination equal to your Focus to the target. You can't benefit from or consume this Illumination yourself." ]
    },
    "overtime-again": {
      name: "Overtime again?", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "When you take the Heal Injury, Appraise or Mentor IP actions, repeat the same action for 1 EP.",
        "When you take the Rest interlude action, you can give its benefit to another character instead (doesn't stack with their other Rest bonuses)."
      ]
    },
    "snack-time-everyone": {
      name: "Snack Time Everyone!~", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Self", keywords: ["Upkeep"], requires: "At least 1 hand free.",
      summary: [
        "Present a snack tray for 1 turn: allies within 5ft (or who walk within 5ft) can spend 0 RP to eat one, and 0 AP to eat another once per turn.",
        "Health snack: the ally may spend 2 Mana to heal 15 HP. Mana snack: recover 1 Mana - counts as that character's food for the day (no benefit if they've already eaten; doesn't stave off starvation).",
        "Upkeep: 1 Mana per extra turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// MANIFESTOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("manifestor", {
  name: "Manifestor",
  url: "https://lyrian.splatpass.net/classes/manifestor/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Striker",
  secondary: "Specialist",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "manifestors-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "phantasmal-uppercut" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "History", "Magic", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "infinite-punches" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "phantom-step" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "converging-blow" }
  ],
  abilities: {
    "manifestors-journey": {
      name: "Manifestor's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "secret-art-manifest",
      grants: { points: 5, expertiseTrade: true,
                options: ["Athletics", "Perception", "History", "Magic", "Intimidation", "Common Knowledge"] },
      summary: [
        "Benefit 1: Proficiency with 1 common melee weapon, Light Armor and Shields.",
        "Benefit 2: +5 skill points among Athletics, Perception, History, Magic, Intimidation or Common Knowledge; any point can be traded for 2 expertise points in these skills.",
        "Benefit 3: You can use Secret Art: Manifest."
      ]
    },
    "secret-art-manifest": {
      name: "Secret Art: Manifest", kind: "granted", grantedBy: "manifestors-journey",
      cost: "2 AP", range: "Self", keywords: ["Transformation", "Secret Art", "Encounter Start"], requires: null,
      summary: [
        "Summon your Manifestation, attached to your body and sharing your space. Move it and command it to make special attacks; it uses your stats for offense. Can be done at Encounter Start instead of paying AP.",
        "It takes no space (anyone can pass through it); when an enemy passes through it, you can make an opportunity attack. It can't be targeted normally.",
        "It must stay within 20ft; if either of you leaves range, it snaps back and can't be used until the end of your next turn. Recall it for 0 AP; attached, it moves with you."
      ]
    },
    "phantasmal-uppercut": {
      name: "Phantasmal Uppercut", kind: "ability",
      cost: "2 AP", range: "25ft", keywords: ["Rapid"],
      requires: "Must have your Manifestation summoned.",
      summary: [ "Move your Manifestation next to an enemy in range; it makes a Heavy attack on that enemy." ]
    },
    "infinite-punches": {
      name: "Infinite Punches", kind: "ability",
      cost: "Variable AP", range: "5ft of Manifestation", keywords: ["Dual Wield"],
      requires: "Must have your Manifestation summoned.",
      summary: [ "Your Manifestation makes X light attacks on the target. If you spend at least 2 AP, it makes one extra light attack and the ability gains Dual Wield." ]
    },
    "phantom-step": {
      name: "Phantom Step", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Active", "Teleport"],
      requires: "Must have your Manifestation summoned.",
      summary: [ "Swap positions with your Manifestation." ]
    },
    "converging-blow": {
      name: "Converging Blow", kind: "ultimate",
      cost: "3 AP, 1 MP", range: "Melee Weapon Range", keywords: [],
      requires: "Must have your Manifestation summoned.",
      summary: [ "You and your Manifestation each make a Heavy attack on the same target, which must be in range of both of you." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MARKSMAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("marksman", {
  name: "Marksman",
  url: "https://lyrian.splatpass.net/classes/marksman/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "status-assessment-ii-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "blast-away" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "prone-cover" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "consistent-shot" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "perfect-shot" }
  ],
  abilities: {
    "status-assessment-ii-key": {
      name: "Status Assessment II (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "status-assessment-ii",
      refund: { overlapsWith: ["Archer"], amount: "full",
                note: "Page says refund possible; Archer also grants it. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Benefit 1: You can use Status Assessment II." ]
    },
    "status-assessment-ii": {
      name: "Status Assessment II", kind: "granted", grantedBy: "status-assessment-ii-key",
      cost: "0 AP", range: "Sight", keywords: ["Analyze", "Quick", "Stealth"], requires: null,
      summary: [
        "See the unit's approximate HP % until combat ends (DM should turn on health bars).",
        "Also reveals its current damage-type weaknesses/strengths and which body parts can be targeted and destroyed, if any."
      ]
    },
    "blast-away": {
      name: "Blast Away", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: [], requires: null,
      summary: [ "Point-blank shot: the target saves vs your Potency; on a fail it's pushed back 5ft and takes Light Damage. Doesn't provoke attacks of opportunity." ]
    },
    "prone-cover": {
      name: "Prone Cover", kind: "ability",
      cost: "0 RP", range: "Self", keywords: ["Stance"], requires: "Can't be used while Flying.",
      summary: [ "Drop Prone. While Prone from this, you have low cover vs ranged attacks, and your Ranged Weapon Attacks gain the Prone keyword." ]
    },
    "consistent-shot": {
      name: "Consistent Shot", kind: "ability",
      cost: "3 AP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Precise Attack that deals Heavy Damage instead. Doesn't gain Pinpoint." ]
    },
    "perfect-shot": {
      name: "Perfect Shot", kind: "ultimate",
      cost: "6 AP", range: "Ranged Weapon Range", keywords: ["Full Pierce", "Prone", "Setup", "Sure Hit"], requires: null,
      summary: [ "Hit one enemy for twice Heavy Damage with Sure Hit and Full Pierce. Automatically fails if the target has cover when it resolves." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MARTIAL ARTIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("martial-artist", {
  name: "Martial Artist",
  url: "https://lyrian.splatpass.net/classes/martial-artist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Striker",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "martial-artists-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "leg-sweep" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge", "Expert Knowledge (relevant, DM approval)"],
      summary: "+5 skill points among the listed skills (or a relevant Expert Knowledge skill with DM approval). Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "vital-drive" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "rushing-knee-drop" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "double-punch" }
  ],
  abilities: {
    "martial-artists-journey": {
      name: "Martial Artist's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "discipline",
      grants: { points: 5, expertiseTrade: true,
                options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Expert Knowledge (relevant, DM approval)"] },
      summary: [
        "Benefit 1: Your unarmed attacks count as a One-Handed Weapon you're proficient with.",
        "Benefit 2: +5 skill points among Athletics, Perception, Insight, Medicine, Intimidation or a relevant Expert Knowledge skill (DM approval); any point can be traded for 2 expertise points in these skills.",
        "Benefit 3: You can use Discipline."
      ]
    },
    "discipline": {
      name: "Discipline", kind: "granted", grantedBy: "martial-artists-journey",
      cost: "0 AP", range: "Self", keywords: [],
      requires: "At least 5 skill points in the called-for skill; used when you need to roll a skill check.",
      summary: [ "Use 10 as the die value instead of rolling the skill check." ]
    },
    "leg-sweep": {
      name: "Leg Sweep", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Unarmed Strike"], requires: null,
      summary: [ "Light Attack. On damage, the target falls Prone." ]
    },
    "vital-drive": {
      name: "Vital Drive", kind: "ability",
      cost: "0 AP, Variable MP", range: "Self", keywords: ["Healing"], requires: null,
      summary: [ "Regain HP equal to 5 x the Mana spent." ]
    },
    "rushing-knee-drop": {
      name: "Rushing Knee Drop", kind: "ability",
      cost: "1 AP or 1 RP", range: "15ft", keywords: ["Sure Hit", "Unarmed Strike", "Jump"],
      requires: "An enemy is Prone in range.",
      summary: [ "Leap up to 15ft and knee a Prone enemy within 5ft for Light Damage. The movement doesn't provoke." ]
    },
    "double-punch": {
      name: "Double Punch", kind: "ultimate",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Dual Wield"], requires: null,
      summary: [ "Two Light Attacks against the same target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MASTER ARMORER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("master-armorer", {
  name: "Master Armorer",
  url: "https://lyrian.splatpass.net/classes/master-armorer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Defender",
  requires: "Armorsmith mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "armorsmithing-expert-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "grindstone-echo" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Armorsmithing"],
      summary: "+5 skill points in Armorsmithing. (Page doesn't mention expertise trading.)" },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "armor-up" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "expertise-study-armorsmithing" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "spiked-armor" }
  ],
  abilities: {
    "armorsmithing-expert-key": {
      name: "Armorsmithing Expert (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "armorsmithing-expert",
      summary: [
        "Benefit 1: Gain the Master Armorer core crafting abilities.",
        "Benefit 2: Craft with Mithril, Orihalcum, Primehide and Dragonscale."
      ]
    },
    "armorsmithing-expert": {
      name: "Armorsmithing Expert", kind: "granted", grantedBy: "armorsmithing-expert-key",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Armorsmith's Modification B", cost: "X Crafting Points",
          summary: "Add a B-type modification (see Universal Armor and individual armor pages); each mod has its own cost." }
      ],
      summary: [ "One crafting ability (see subAbilities)." ]
    },
    "grindstone-echo": {
      name: "Grindstone Echo", kind: "ability",
      cost: "1 Crafting Dice", range: null, keywords: [],
      requires: "Must be in a crafting session.",
      summary: [ "Make a crafting check; you can use the die result from an earlier check this session instead of rolling." ]
    },
    "armor-up": {
      name: "Armor Up", kind: "ability",
      cost: "1 AP, 3 MP", range: "Self", keywords: ["Shield"],
      requires: "Must be wearing armor and/or a shield.",
      summary: [ "Gain temporary HP equal to the combined Block of your armor and shield (max 40)." ]
    },
    "expertise-study-armorsmithing": {
      name: "Expertise Study (Armorsmithing)", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { expertise: "5 points in each of 2 different armorsmithing crafts", proficiencyChoice: ["Heavy Armor", "Greatshields"] },
      summary: [
        "Gain 5 Expertise Points in 2 different armorsmithing crafts, and proficiency in Heavy Armor OR Greatshields.",
        "You always get the expertise bonus crafting armor for yourself, but that armor can't be worn by others and is worth 0 clim."
      ]
    },
    "spiked-armor": {
      name: "Spiked Armor", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Counter"],
      requires: "Must be wearing armor and/or a shield.",
      summary: [ "Until the start of your next turn, enemies that hit you with melee attacks take 4 Full Pierce damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MEDIC  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("medic", {
  name: "Medic",
  url: "https://lyrian.splatpass.net/classes/medic/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Healer",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "medics-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "first-aid" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Linguistics", "History", "Medicine", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "code-blue" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "field-medic" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "painkiller-injection" }
  ],
  abilities: {
    "medics-journey": {
      name: "Medic's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "first-response",
      grants: { skill: "Medicine", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency in small weapons, sets of missiles and Light Armor.",
        "Benefit 2: +5 Medicine skill points; any point can be traded for 2 expertise points in Medicine.",
        "Benefit 3: You get the benefits of First Response."
      ]
    },
    "first-response": {
      name: "First Response", kind: "granted", grantedBy: "medics-journey",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "With a Medical Kit, use your encounter conclusion to give another character the Second Wind encounter conclusion effect; they heal an extra 1d6 (+3 if you have Demonblood Regeneration)." ]
    },
    "first-aid": {
      name: "First Aid", kind: "ability",
      cost: "0 RP", range: "40ft", keywords: ["Aid", "Healing"], requires: "An ally is damaged.",
      summary: [ "Give the ally First Aid equal to the damage they took. Spending 1 AP within 5ft of them removes all their First Aid and heals them for your Focus (up to the First Aid value)." ]
    },
    "code-blue": {
      name: "Code Blue", kind: "ability",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Sidestep"], requires: null,
      summary: [ "Sidestep up to your speed toward an ally, ending within 5ft. Your next Painkiller Injection, or the AP spent on First Aid this turn, costs 1 less AP." ]
    },
    "field-medic": {
      name: "Field Medic", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Medical and Surgery kits you carry (including upgrades) have -1 burden (min 0)." ]
    },
    "painkiller-injection": {
      name: "Painkiller Injection", kind: "ultimate",
      cost: "Variable AP", range: "5ft", keywords: ["Aid", "Active"], requires: null,
      summary: [ "Give a willing ally temporary HP equal to your Focus x X until the start of your next turn. They can't benefit again until the end of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MERCHANT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("merchant", {
  name: "Merchant",
  url: "https://lyrian.splatpass.net/classes/merchant/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Utility",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "peddler-of-wares" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "whisper-of-the-streets" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Riding", "Deception", "Intimidation", "Negotiation", "Appraise", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "procurement" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "bulk-orders" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "always-prepared" }
  ],
  abilities: {
    "peddler-of-wares": {
      name: "Peddler of Wares", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { skill: "Riding", points: 5, expertiseTrade: true, combatBurden: 1 },
      summary: [
        "Benefit 1: In-combat burden capacity +1.",
        "Benefit 2: Proficiency in 1 common weapon group.",
        "Benefit 3: +5 Riding skill points; any point can be traded for 2 expertise points in Riding.",
        "Benefit 4: Once you master the class, your Procurement Limit becomes 2000 (materials up to 2000 clim per ingot/block)."
      ]
    },
    "whisper-of-the-streets": {
      name: "Whisper of the Streets", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Flashback"], requires: null,
      summary: [ "Recall past business conversations: +5 to any Reason check." ]
    },
    "procurement": {
      name: "Procurement", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Interlude"], requires: null,
      summary: [
        "Spend 1 IP to start: pick a base item (no mods) and quantity; its total price is your Procurement Target.",
        "Each IP you gain adds 500 points toward it (or spend 1 IP for +500 more). When you reach it you can buy immediately - if you don't, Procurement is lost. Cancel any time.",
        "Target Limit 1000 (materials: ingot/block cost 1000 or less). One Procurement at a time."
      ]
    },
    "bulk-orders": {
      name: "Bulk Orders", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Buying 5+ of the same item from an NPC or via Procurement gives 10% off the total. Commodities need at least 4000 units." ]
    },
    "always-prepared": {
      name: "Always Prepared", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Flashback"], requires: null,
      summary: [ "Once per arc: instantly buy one base item (no mods) worth up to 1000 clim, then draw/stow it into your hand." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MIME  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mime", {
  name: "Mime",
  url: "https://lyrian.splatpass.net/classes/mime/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mimes-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "imaginary-weapon" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Art"],
      summary: "+5 skill points in Art. Any point can be traded for 2 expertise points in Art." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "invisible-wall" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "dramatic-death" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "imaginary-consumables" }
  ],
  abilities: {
    "mimes-journey": {
      name: "Mime's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { skill: "Art", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency with 1 common weapon and 1 specialized weapon.",
        "Benefit 2: +5 Art skill points; any point can be traded for 2 expertise points in Art.",
        "Benefit 3: You may not speak. If you speak during an encounter, you can't use Mime abilities until it ends."
      ]
    },
    "imaginary-weapon": {
      name: "Imaginary Weapon", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Illusion"], requires: null,
      summary: [ "Draw an imaginary weapon or shield you're proficient with. It works like a real one, but only you can wield it and others can't see it." ]
    },
    "invisible-wall": {
      name: "Invisible Wall", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: ["Illusion"], requires: null,
      summary: [ "Create an invisible 5ft-wide, 5ft-high wall in range: Low Cover, but High Cover against the first ranged attacks it provides cover from." ]
    },
    "dramatic-death": {
      name: "Dramatic Death", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [],
      requires: "You've taken damage, and that damage has finished resolving.",
      summary: [ "Fall Prone and immediately Play Dead (you can use Art (Mime) instead of Deception). At the start of your turn, stop and stand up for 0 AP." ]
    },
    "imaginary-consumables": {
      name: "Imaginary Consumables", kind: "ultimate",
      cost: "1 AP, Variable MP", range: "Self", keywords: ["Illusion"], requires: null,
      summary: [
        "Draw an imaginary basic alchemy consumable or minor item worth up to 100c per Mana spent (max 500c). It works like the real thing, for you only; not with abilities needing real consumables (e.g. counter-potion).",
        "Lasts until the encounter ends, or 5 minutes outside an encounter."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// MINER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("miner", {
  name: "Miner",
  url: "https://lyrian.splatpass.net/classes/miner/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Gatherer",
  secondary: "Striker",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "rock-and-stone" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "power-rock-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      fixed: { "Mining": 5 },
      options: ["Athletics", "Appraise", "Common Knowledge"],
      summary: "+5 skill points in Mining, PLUS +5 among Athletics, Appraise or Common Knowledge. Any point can be traded for 2 expertise points in these skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "excavation-crash" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "efficient-strike" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"],
      alsoGrants: { weaponProperty: "Pickaxe: Superior Armor Pierce (treat enemy Guard as 1 lower)" },
      summary: "+1 Focus, Power or Toughness. Also gain the Pickaxe proficiency Superior Armor Pierce (enemy Guard counts as 1 lower)." },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "rock-fang" }
  ],
  abilities: {
    "rock-and-stone": {
      name: "Rock and Stone", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Proficiency in one armor type or the shield, plus the Pickaxe specialty weapon.",
        "Benefit 2: Gather mining outcrops.",
        "Benefit 3: Make Ingots as an Errand (see Blacksmithing Materials); an IP can do this instead, up to 4 times."
      ]
    },
    "power-rock-strike": {
      name: "Power Rock Strike", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Gathering check using half your gathering bonus (rounded down); add the result to both node points and lucky points." ]
    },
    "excavation-crash": {
      name: "Excavation Crash", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [ "Pick an adjacent spot 5ft from the target; it can move there for 0 RP (move action). You can't make attacks of opportunity during this. If it doesn't move, make a heavy attack on it." ]
    },
    "efficient-strike": {
      name: "Efficient Strike", kind: "ability",
      cost: "1 Strike Dice", range: null, keywords: [],
      requires: "Must be in a gathering session.",
      summary: [ "Gathering check applied to node points; overflow past the max converts to lucky points." ]
    },
    "rock-fang": {
      name: "Rock Fang", kind: "ultimate",
      cost: "3 AP", range: "Melee Weapon Range", keywords: ["Sunder"], requires: "Pickaxe only",
      summary: [ "Heavy attack. On damage, the target gains Armor Sunder 2 (Guard -2 until the start of your next turn), and this attack benefits from it immediately." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MIST VEIL ELEGY  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mist-veil-elegy", {
  name: "Mist Veil Elegy",
  url: "https://lyrian.splatpass.net/classes/mist-veil-elegy/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Controller",
  secondary: "Striker",
  requires: "Idol or Bard mastered, OR 10 points in Art (Flute) expertise and any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "song-without-song" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mist-of-the-vale" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Art"],
      summary: "+5 skill points in Art. Any point can be traded for 2 expertise points in Art." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "phantoms-of-the-mist" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "despair-of-isolation" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "travelers-end" }
  ],
  abilities: {
    "song-without-song": {
      name: "Song without Song", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { extraSongs: 1, language: "Music" },
      summary: [
        "Benefit 1: You can have 1 more song active at once.",
        "Benefit 2: You learn the language 'Music'."
      ]
    },
    "mist-of-the-vale": {
      name: "Mist of the Vale", kind: "ability",
      cost: "2 AP, 1 MP", range: "Self", keywords: ["Song", "Upkeep"],
      requires: "Must be played on a flute.",
      summary: [
        "15ft-radius mist around you (not below you if you're flying). Upkeep: 1 AP.",
        "Creatures inside must save vs your Potency to leave; on a fail, you finish their movement for them (ending inside), without provoking.",
        "Blocks line of sight: inside or within 5ft, creatures can only see 5ft into or out of it. Excluding allies raises the initial and upkeep Mana cost by 1."
      ]
    },
    "phantoms-of-the-mist": {
      name: "Phantoms of the Mist", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Song", "Scatter"],
      requires: "Mist of the Vale must be active.",
      summary: [ "Light attack against every creature in your Mist of the Vale. Spend 1 Mana to exclude allies." ]
    },
    "despair-of-isolation": {
      name: "Despair of Isolation", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Song", "Mind Affecting", "Sound"],
      requires: "Mist of the Vale must be active.",
      summary: [
        "Everyone in your mist is Slowed until the end of their next turn, and must save or be Dazed until then.",
        "On a failed save, they also can't target allies with friendly effects while in the mist (until the end of their next turn). Spend 1 Mana to exclude allies."
      ]
    },
    "travelers-end": {
      name: "Traveler's End", kind: "ultimate",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Song", "Upkeep", "Sound", "Blanketing"],
      requires: "Mist of the Vale active for at least 1 turn.",
      summary: [
        "While active (Upkeep 1 Mana): Mist of the Vale and Despair of Isolation get +3 Potency, and the mist can't be removed (effects that would remove it dispel Traveler's End instead).",
        "After activating, you can spend 1 RP + 5 Mana for a Sure Hit Heavy attack on every enemy in the mist; each Killing Blow refunds 1 of that Mana (max 5). Then the mist ends and can't be reused this encounter.",
        "Otherwise lasts until the encounter ends or the mist is gone."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// MOGUL  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mogul", {
  name: "Mogul",
  url: "https://lyrian.splatpass.net/classes/mogul/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Utility",
  secondary: null,
  requires: "Merchant mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "merchant-lord" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "lord-of-mercenary" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Riding", "Deception", "Intimidation", "Negotiation", "Appraise", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "overcharge-and-discount" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "obvious-intent" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-shot-from-the-blue" }
  ],
  abilities: {
    "merchant-lord": {
      name: "Merchant Lord", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Procurement Limit becomes 3000 (materials up to 3000 clim per ingot/block).",
        "Benefit 2: Proficiency in Pistols.",
        "Benefit 3: Once you master the class, Procurement Limit becomes 4000 (materials up to 4000 clim per ingot/block)."
      ]
    },
    "lord-of-mercenary": {
      name: "Lord of Mercenary", kind: "ability",
      cost: "No listed cost (weekly hire fee)", range: "Self", keywords: ["Flashback"], requires: null,
      summary: [
        "At the start of a new adventure (or when the DM allows), hire an NPC for the whole adventure. Weekly cost: Archer 250, Acolyte 750c, Tank 500c, Apprentice 750c, Rogue 200c, Brute 200c. Stats are in the Monster guide.",
        "If your hire dies, you can't use this until you finish a new, separate adventure. A mercenary counts as 1 toward your summon limit (unless specified). Expert Summoner can modify them, but only when hired."
      ]
    },
    "overcharge-and-discount": {
      name: "Overcharge and Discount", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Interlude"], requires: null,
      summary: [
        "On adventure: 5% off from NPC vendors (stacks with Bulk Orders) and sell items for 10% more.",
        "Spend an IP to give the discount to yourself and up to 9 others for that Interlude phase (total discount up to 800c)."
      ]
    },
    "obvious-intent": {
      name: "Obvious Intent", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: [],
      requires: "Only at the moment an enemy declares a movement.",
      summary: [ "If an enemy plans to move where it could melee attack you, move up to your speed away from it." ]
    },
    "secret-art-shot-from-the-blue": {
      name: "Secret Art: Shot From The Blue", kind: "ultimate",
      cost: "0 RP, 3 MP", range: "Self", keywords: ["Flashback", "Secret Art"],
      requires: "Target is outdoors or reasonably visible from outdoors. Costs 500 Clim to use.",
      summary: [
        "An off-screen sniper mercenary takes one shot on your signal: heavy damage with Full Pierce and Sure Hit, using the Sniper NPC's stats with +6 Accuracy (if relevant) and 4d6+10 damage.",
        "No Sure Hit or Full Pierce vs targets with Instinct. A grunt target is killed instantly."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// MONK  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("monk", {
  name: "Monk",
  url: "https://lyrian.splatpass.net/classes/monk/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "empty-body-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "ki-blast" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flowing-kick" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "serene-water-stance" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "strike-of-still-water" }
  ],
  abilities: {
    "empty-body-key": {
      name: "Empty Body (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "empty-body",
      summary: [ "Benefit 1: You can use Empty Body." ]
    },
    "empty-body": {
      name: "Empty Body", kind: "granted", grantedBy: "empty-body-key",
      cost: "0 RP, 2 MP", range: "Self", keywords: [], requires: "You failed a saving throw.",
      summary: [ "Reroll the failed save; you must keep the new result." ]
    },
    "ki-blast": {
      name: "Ki Blast", kind: "ability",
      cost: "2 AP", range: "120ft", keywords: ["Arcane", "Rapid"], requires: null,
      summary: [ "Heavy Attack dealing Arcane damage." ]
    },
    "flowing-kick": {
      name: "Flowing Kick", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Combo", "Unarmed Strike"], requires: null,
      summary: [
        "Heavy Attack against the target.",
        "Combo: after an unarmed attack misses, costs 1 AP."
      ]
    },
    "serene-water-stance": {
      name: "Serene Water Stance", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Stance"], requires: "An attack against you misses.",
      summary: [
        "Enter the stance: +3 evasion, and each time an accuracy check against you misses you can move 5ft without provoking.",
        "Ends if you enter another stance, Block, or move (except via this ability or Unarmed Strike movement abilities). Attacking doesn't end it."
      ]
    },
    "strike-of-still-water": {
      name: "Strike of Still Water", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Sure Hit", "Unarmed Strike"],
      requires: "Must be in Serene Water Stance.",
      summary: [ "Heavy Attack against the target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MYCOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mycomancer", {
  name: "Mycomancer",
  url: "https://lyrian.splatpass.net/classes/mycomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Healer",
  secondary: "Striker",
  requires: "Mage mastered or Earth Mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "spore-symbiote-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "saprophytic-bolt" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Survival"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "poison-spore" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "amoxicillin" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "destroying-angel" }
  ],
  abilities: {
    "spore-symbiote-key": {
      name: "Spore Symbiote (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "spore-symbiote",
      grants: { mastery: "Earth" },
      summary: [
        "Benefit 1: You can use Spore Symbiote.",
        "Benefit 2: You gain Earth Elemental Mastery.",
        "Benefit 3: You can make a cute mushroom cap hat to wear."
      ]
    },
    "spore-symbiote": {
      name: "Spore Symbiote", kind: "granted", grantedBy: "spore-symbiote-key",
      cost: "0 AP", range: "60ft", keywords: ["Quick"], requires: null,
      summary: [ "Send your symbiote to an ally or yourself until combat ends or you move it. One at a time. Ends if its host gets more than 240ft from you." ]
    },
    "saprophytic-bolt": {
      name: "Saprophytic Bolt", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Healing", "Spell", "Earth"], requires: null,
      summary: [ "Light Attack dealing Earth damage. On damage, your Spore Symbiote host heals Power + 3." ]
    },
    "poison-spore": {
      name: "Poison Spore", kind: "ability",
      cost: "2 AP or 1 RP", range: "Self or the host of Poison Spore; 15x15ft area centered on the target", keywords: ["Concentration", "Poison", "Full Pierce"], requires: null,
      summary: [
        "15x15ft spore cloud centered on you or your symbiote host, until the encounter ends (one at a time). Units ending their turn in it take Full Pierce Poison damage = Power + 2; you and the host are immune.",
        "It stays centered on its original target as they move; if centered on the symbiote and you swap hosts, it moves with the symbiote."
      ]
    },
    "amoxicillin": {
      name: "Amoxicillin", kind: "ability",
      cost: "No listed cost", range: "30ft", keywords: ["Concentration", "Healing", "Spell"],
      requires: "You can identify the disease.",
      summary: [ "Pick up to 10 willing units in range; after 1 minute of concentration, a spore cloud cures a disease you can identify." ]
    },
    "destroying-angel": {
      name: "Destroying Angel", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "60ft", keywords: ["Poison", "Spell", "Healing"], requires: null,
      summary: [ "Precise Attack dealing Poison damage. On damage, a Grunt drops to negative its Max HP and dies. On a Killing Blow, your symbiote host heals 5 + (Power x 2)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MYSTIC EYES OF DESTRUCTION  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mystic-eyes-of-destruction", {
  name: "Mystic Eyes of Destruction",
  url: "https://lyrian.splatpass.net/classes/mystic-eyes-of-destruction/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Evil Eye mastered, OR Oni plus any tier 2 mastered. At least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "look-of-death" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "destroy" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Perception", "Insight", "Medicine", "Magic", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "unmake" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "doom" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-void" }
  ],
  abilities: {
    "look-of-death": {
      name: "Look of Death", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "perish",
      summary: [
        "Benefit 1: You can use Perish.",
        "Benefit 2: One of your eyes becomes a Destruction Eye, usable for Mystic Eye abilities of the matching type. An eye can only be one Mystic Eye type."
      ]
    },
    "perish": {
      name: "Perish", kind: "granted", grantedBy: "look-of-death",
      cost: "1 AP", range: "60ft", keywords: ["Mystic Eye", "Rapid"], requires: null,
      summary: [ "Ranged Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack dealing Dark (Curse) damage." ]
    },
    "destroy": {
      name: "Destroy", kind: "ability",
      cost: "2 AP, 3 MP", range: "60ft", keywords: ["Mystic Eye", "Circuit"], requires: null,
      summary: [ "The target saves; on a fail it takes Heavy Dark (Curse) damage." ]
    },
    "unmake": {
      name: "Unmake", kind: "ability",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Mystic Eye"], requires: null,
      summary: [ "Instantly destroy a 5x5 section of a magically created wall, or a whole unattended object, in range." ]
    },
    "doom": {
      name: "Doom", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye"], requires: null,
      summary: [ "The target saves; on a fail, the next time it takes non-true damage it takes extra Light damage." ]
    },
    "secret-art-void": {
      name: "Secret Art: Void", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye", "Secret Art"], requires: null,
      summary: [ "Remove one identifiable buff or passive effect from a grunt or heroic target in range; it can't be reapplied for the rest of the encounter." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MYSTIC EYES OF DOMINATION  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mystic-eyes-of-domination", {
  name: "Mystic Eyes of Domination",
  url: "https://lyrian.splatpass.net/classes/mystic-eyes-of-domination/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Evil Eye mastered, OR Demon plus any tier 2 mastered. At least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "authority" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "charm" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Perception", "Insight", "Magic", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "kneel" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "decree" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-forbid" }
  ],
  abilities: {
    "authority": {
      name: "Authority", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Negotiation or Intimidation rolls below 10 count as 10. Spend 2 Mana before rolling to treat the roll as 20 instead.",
        "Benefit 2: One of your eyes becomes a Domination Eye, usable for Mystic Eye abilities of the matching type. An eye can only be one Mystic Eye type."
      ]
    },
    "charm": {
      name: "Charm", kind: "ability",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Mystic Eye", "Charm", "Mind Affecting"], requires: null,
      summary: [ "The target saves or is charmed by you until the encounter ends." ]
    },
    "kneel": {
      name: "Kneel", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Mystic Eye", "Mind Affecting"], requires: null,
      summary: [ "The target saves or falls Prone." ]
    },
    "decree": {
      name: "Decree", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Mystic Eye", "Mind Affecting"], requires: null,
      summary: [ "Command the target to Approach or Flee. On a failed save, it immediately moves up to its speed toward you (Approach) or away from you (Flee)." ]
    },
    "secret-art-forbid": {
      name: "Secret Art: Forbid", kind: "ultimate",
      cost: "0 AP, 3 MP", range: "60ft", keywords: ["Mystic Eye", "Secret Art", "Mind Affecting"], requires: null,
      summary: [ "Pick a target and a basic action or ability. Until the start of your next turn, whenever it uses that action it takes Full Pierce damage equal to your Focus per AP it spends on it." ]
    }
  }
});

// ---------------------------------------------------------------------------
// MYSTIC EYES OF PETRIFICATION  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("mystic-eyes-of-petrification", {
  name: "Mystic Eyes of Petrification",
  url: "https://lyrian.splatpass.net/classes/mystic-eyes-of-petrification/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Evil Eye mastered, OR Lamiafolk plus any tier 2 mastered. At least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "petrification-eye" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "petrifying-gaze" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Perception", "Insight", "Medicine", "Art", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "medusas-glance" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "partial-petrification" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "petrify" }
  ],
  abilities: {
    "petrification-eye": {
      name: "Petrification Eye", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "unpetrify",
      summary: [
        "Benefit 1: One of your eyes becomes a Petrification Eye, usable for Mystic Eye abilities of the matching type. An eye can only be one Mystic Eye type.",
        "Benefit 2: You can use Unpetrify."
      ]
    },
    "unpetrify": {
      name: "Unpetrify", kind: "granted", grantedBy: "petrification-eye",
      cost: "1 AP, 1 MP", range: "60ft", keywords: [], requires: null,
      summary: [ "Remove the Petrify condition from a target in range - including yourself, even though petrified creatures normally can't act." ]
    },
    "petrifying-gaze": {
      name: "Petrifying Gaze", kind: "ability",
      cost: "3 AP, 2 MP", range: "60ft", keywords: ["Petrify"], requires: "Target must be a grunt.",
      summary: [ "Lock eyes with the target to petrify it immediately and permanently." ]
    },
    "medusas-glance": {
      name: "Medusa's Glance", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Calcification"], requires: "You are the target of a melee attack.",
      summary: [ "The attacker must avert its eyes and be Blinded 5 until the attack resolves, or begin partial petrification. Either way, it loses 1 RP and gains 1 Calcification stack." ]
    },
    "partial-petrification": {
      name: "Partial Petrification", kind: "ability",
      cost: "2 AP, 3 MP", range: "60ft", keywords: ["Circuit", "Calcification"], requires: null,
      summary: [ "The target saves or begins partial petrification: it loses 1 RP and gains 1 Calcification stack." ]
    },
    "petrify": {
      name: "Petrify", kind: "ultimate",
      cost: "2 AP", range: "60ft", keywords: ["Petrify"], requires: "Target has less HP than your Focus x 2.",
      summary: [ "The target is permanently petrified." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NATURALIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("naturalist", {
  name: "Naturalist",
  url: "https://lyrian.splatpass.net/classes/naturalist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Healer",
  secondary: null,
  requires: "Medic, Acolyte, Sorcerer, Mage, Ranger, Farmer, Forager or Mycomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "natural-cycle" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "full-bloom" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Medicine", "Magic", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "wild-bloom" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "healing-seed" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "sudden-growth" }
  ],
  abilities: {
    "natural-cycle": {
      name: "Natural Cycle", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "regrowth",
      summary: [
        "Benefit 1: At the start of your turn, pay 1 Mana upkeep per Regrowth on an ally to extend that Regrowth by 1 turn (choose separately for each).",
        "Benefit 2: You can use Regrowth."
      ]
    },
    "regrowth": {
      name: "Regrowth", kind: "granted", grantedBy: "natural-cycle",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Regrowth", "Healing", "Spell"], requires: null,
      summary: [ "Place Regrowth on an ally until the start of your next turn (it heals them on their next turn, per the class guidance)." ]
    },
    "full-bloom": {
      name: "Full Bloom", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Spell", "Healing", "Active", "Regrowth"],
      requires: "Target ally must have Regrowth.",
      summary: [ "Consume the target's Regrowth to heal them immediately for twice its normal value." ]
    },
    "wild-bloom": {
      name: "Wild Bloom", kind: "ability",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Spell", "Healing", "Regrowth"], requires: null,
      summary: [ "Apply Regrowth to up to 5 allies in range (you can include yourself)." ]
    },
    "healing-seed": {
      name: "Healing Seed", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Spell"], requires: "Target ally must have Regrowth.",
      summary: [ "Next time Regrowth naturally heals that ally, it also removes all stacks of one debuff. If the debuff has Persist, pay its extra Mana when Regrowth triggers instead of now." ]
    },
    "sudden-growth": {
      name: "Sudden Growth", kind: "ultimate",
      cost: "1 RP", range: "60ft", keywords: ["Regrowth"],
      requires: "An ally in range with your Regrowth has taken damage from an enemy.",
      summary: [ "Trigger your Regrowth's healing immediately." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NECROMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("necromancer", {
  name: "Necromancer",
  url: "https://lyrian.splatpass.net/classes/necromancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: "Striker",
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "raise-undead-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "soulreap" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "speak-with-dead" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "corpse-explosion" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "bring-out-your-dead" }
  ],
  abilities: {
    "raise-undead-key": {
      name: "Raise Undead (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "raise-undead",
      summary: [ "Benefit 1: You can use Raise Undead." ]
    },
    "raise-undead": {
      name: "Raise Undead", kind: "granted", grantedBy: "raise-undead-key",
      cost: "2 AP", range: "30ft", keywords: ["Summon", "Spell", "Safe"],
      requires: "Target must be a dead humanoid.",
      summary: [
        "Raise a corpse as a zombie (non-heroic). Your zombies act as one group token on your Initiative; you can have up to Necromancer level + 1.",
        "Each zombie has 1 HP; the group loses 1 zombie per attack it takes (including non-Holy AoE); Holy AoE removes zombies equal to the damage.",
        "Group stats: Focus and Power 3 (+1 per 3 zombies, rounded down), Agility 2, Toughness 4. All basic actions, no special abilities, a single RP, immune to mind-affecting.",
        "Last until the arc ends or killed; a destroyed corpse can't be raised again."
      ]
    },
    "soulreap": {
      name: "Soulreap", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Killing Blow"], requires: null,
      summary: [ "Heavy Attack. On a Killing Blow, the target dies instantly and you cast Raise Undead on it for 0 AP." ]
    },
    "speak-with-dead": {
      name: "Speak with dead", kind: "ability",
      cost: "1 MP", range: null, keywords: [], requires: "Special",
      summary: [ "One-hour ritual at the corpse or place of death. You must know who they were and have a communication tool (e.g. a ouija board). A hostile spirit may refuse or answer cryptically." ]
    },
    "corpse-explosion": {
      name: "Corpse Explosion", kind: "ability",
      cost: "1 AP", range: "15x15ft area centered on your zombie", keywords: ["Scatter"],
      requires: "Must have an active zombie from Raise Undead.",
      summary: [ "Detonate a zombie (it dies) for a Light Attack dealing Dark damage to every creature in the area. Detonate extra zombies for +2 damage each." ]
    },
    "bring-out-your-dead": {
      name: "Bring out your dead", kind: "ultimate",
      cost: "No listed cost", range: "10ft", keywords: ["Encounter Start"], requires: null,
      summary: [ "Encounter Start: summon 3 zombies as if casting Raise Undead three times (no corpses needed; zombie limit still applies)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NECROMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("necromaster", {
  name: "Necromaster",
  url: "https://lyrian.splatpass.net/classes/necromaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Necromancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "undead-mastery" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "raise-undead-ii" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "thanergetic-bloom" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "command-undead" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-skeletal-champion" }
  ],
  abilities: {
    "undead-mastery": {
      name: "Undead Mastery", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: For every 300 spirit core you have above 2,000, control 1 extra zombie with Create Undead." ]
    },
    "raise-undead-ii": {
      name: "Raise Undead II", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Overcharge", "Summon", "Spell", "Safe"],
      requires: "Target must be a dead humanoid.",
      summary: [
        "Same as Raise Undead (zombie group token; up to Necromancer level + 1; 1 HP each; group Focus/Power 3 +1 per 3 zombies, Agility 2, Toughness 4; basic actions only; single RP; mind-affecting immune; last until arc end).",
        "Overcharge: 1 Mana to raise a non-humanoid corpse."
      ]
    },
    "thanergetic-bloom": {
      name: "Thanergetic Bloom", kind: "ability",
      cost: "0 AP", range: "60ft", keywords: ["Opener", "Summon"], requires: null,
      summary: [ "Summon a temporary zombie as with Raise Undead; it vanishes at the end of the encounter (immediately if used outside one)." ]
    },
    "command-undead": {
      name: "Command Undead", kind: "ability",
      cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [ "One of your Necromancer summons acts as if it had spent 1 AP." ]
    },
    "secret-art-skeletal-champion": {
      name: "Secret Art: Skeletal Champion", kind: "ultimate",
      cost: "4 AP, 2 MP", range: "40ft", keywords: ["Summon", "Secret Art", "Upkeep", "Overcharge"], requires: null,
      summary: [
        "Form a skeletal champion until the encounter ends (stats on the Monster page). It uses 2 of your summon limit. Active zombies convert into its temporary HP (5 per zombie).",
        "It acts after you and can't take AP actions the turn it's summoned. Upkeep: 2 AP. Overcharge: 5 Mana to let it act the turn it's summoned."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// NINJA  (checked 2026-10-20, site v0.13.2)  ** Level 8 is BLANK on site **
// ---------------------------------------------------------------------------
CL("ninja", {
  name: "Ninja",
  url: "https://lyrian.splatpass.net/classes/ninja/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Rogue mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "ninja-style" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "kibaku-fuda-shuriken" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "kawarimi-no-jutsu" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "bunshin-tai-no-jutsu" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: null, missing: "MISSING - Level 8 is blank on the site (Kage Shuriken no Jutsu is listed under abilities and may belong here)" }
  ],
  abilities: {
    "ninja-style": {
      name: "Ninja Style", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "ninja-run",
      summary: [
        "Benefit 1: Proficiency with Small Weapons and Sets of Missiles.",
        "Benefit 2: You can use Ninja Run."
      ]
    },
    "ninja-run": {
      name: "Ninja Run", kind: "granted", grantedBy: "ninja-style",
      cost: "0 AP", range: "Self", keywords: ["Ninjutsu", "Quick", "Stealth"], requires: null,
      summary: [ "For your next movement action, any surface counts as flat ground - walk on water or up walls." ]
    },
    "kibaku-fuda-shuriken": {
      name: "Kibaku Fuda Shuriken", kind: "ability",
      cost: "3 AP", range: "60ft", keywords: ["Ninjutsu", "Blanketing"],
      requires: "Set of Missiles, Throwing Weapon, or a Thrown attack with a small weapon only.",
      summary: [ "Heavy Attack with an explosive-tagged thrown weapon. Hit or miss, the target and everything within 5ft save vs Potency or take Light Fire Damage." ]
    },
    "kawarimi-no-jutsu": {
      name: "Kawarimi no Jutsu", kind: "ability",
      cost: "2 RP", range: "Self", keywords: ["Ninjutsu", "Hiding", "Stealth"],
      requires: "Must be targeted by an attack.",
      summary: [ "The attack automatically misses. Move up to your Speed without provoking, then gain Hiding from anyone you have cover or concealment against." ]
    },
    "bunshin-tai-no-jutsu": {
      name: "Bunshin Tai no Jutsu", kind: "ability",
      cost: "1 AP, 2 MP", range: "5ft", keywords: ["Ninjutsu", "Stealth"], requires: null,
      summary: [
        "Create a body double with your stats at creation. It shares your HP, Mana, AP, RP etc.; effects on either are mirrored. No Presence Concealment for it.",
        "When acting, choose whether you or the double acts; it can only use basic and Ninjutsu abilities and can't make more doubles. When you move (non-teleport), it can move the same distance. Max 300ft from you.",
        "Spend 2 AP to swap places with it. Lasts until you rest; dismiss for 0 AP or 1 RP."
      ]
    },
    "kage-shuriken-no-jutsu": {
      name: "Kage Shuriken no Jutsu", kind: "unlisted",
      note: "Listed under Abilities unlocked, but the Level 8 step is blank - probably the Level 8 ability. Confirm.",
      cost: "2 AP", range: "Weapon Range", keywords: ["Ninjutsu"],
      requires: "Set of Missiles, Throwing Weapon, or a Thrown attack with a small weapon only.",
      summary: [ "Throw two weapons at one target, each a Light Attack. If the first accuracy roll fails, the second gains Sure Hit." ]
    }
  }
});

// ---------------------------------------------------------------------------
// NOMAD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("nomad", {
  name: "Nomad",
  url: "https://lyrian.splatpass.net/classes/nomad/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Support",
  requires: "Cavalier mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "light-cavalry" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "hit-and-run" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Flight", "Intimidation", "Perception", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "running-shot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "trailblazer" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-chase-the-horizon" }
  ],
  abilities: {
    "light-cavalry": {
      name: "Light Cavalry", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: While mounted, with you and your mount both in light armor or no armor, you ignore natural difficult terrain." ]
    },
    "hit-and-run": {
      name: "Hit & Run", kind: "ability",
      cost: "1 AP, 1 MP", range: "Weapon Range", keywords: [], requires: "Must be mounted.",
      summary: [ "Light attack, then you may move up to your speed." ]
    },
    "running-shot": {
      name: "Running Shot", kind: "ability",
      cost: "1 RP", range: "Ranged Weapon Range", keywords: [],
      requires: "Must be mounted and taking a movement action.",
      summary: [ "Heavy attack against the target." ]
    },
    "trailblazer": {
      name: "Trailblazer", kind: "ability",
      cost: "1 AP", range: "Self", keywords: [],
      requires: "Must be mounted and meet your Light Cavalry key ability's requirements.",
      summary: [ "Move up to your speed. Allies within 30ft of your start point can spend 1 RP to move up to 2x their speed toward you, ignoring natural difficult terrain." ]
    },
    "secret-art-chase-the-horizon": {
      name: "Secret Art: Chase the Horizon", kind: "ultimate",
      cost: "0 AP, 3 MP", range: "Self", keywords: ["Secret Art"], requires: "Must be mounted.",
      summary: [
        "Lock onto one enemy: whenever it moves, you can move the same distance (up to your speed) away from it for 0 RP - no attacks of opportunity from it (others still can).",
        "Each time, make one ranged Light attack on it (one per AP if it spends several AP on one move). Lasts until the start of your next turn or you lose sight of it."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ONMYOJI  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("onmyoji", {
  name: "Onmyoji",
  url: "https://lyrian.splatpass.net/classes/onmyoji-/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "expert-scribe" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "create-talisman" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Religion", "Magic", "Perception", "Insight", "Art", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "preparedness" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "sealing-talisman" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-talisman" }
  ],
  abilities: {
    "expert-scribe": {
      name: "Expert Scribe", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { expertise: "Art: Calligraphy +5 (not doubled)" },
      summary: [
        "Benefit 1: +5 points to the Art: Calligraphy expertise (these points aren't doubled by expertise).",
        "Benefit 2: Once per turn, draw a scroll, talisman or similar for 0 AP; it costs 1 less AP (once per turn, even if not used)."
      ]
    },
    "create-talisman": {
      name: "Create Talisman", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [
        "Spend 1 interlude point to make talismans/scrolls (up to 5 per IP; a Secret Art talisman uses 3 slots; max 2 of the same spell per crafting). Each holds a spell you know or a special talisman (e.g. Sealing Talisman); using it consumes it at the spell's normal AP and Mana.",
        "Each talisman is 1 burden (Secret Art talismans 2, and only usable via Secret Talisman).",
        "Cost: 100 calligraphy units per AP and per Mana; 50 for a spell with no AP or Mana; 200 per RP for RP-only spells. Casting over 4 AP counts as 4. Some spells (e.g. Summon Lesser Eidolon, Summon Eidolon) may be unavailable."
      ]
    },
    "preparedness": {
      name: "Preparedness", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Up to 3 talismans, scrolls or similar you carry don't count toward burden." ]
    },
    "sealing-talisman": {
      name: "Sealing Talisman", kind: "ability",
      cost: "0 AP", range: "5ft", keywords: ["Stun"],
      requires: "The target has 0 RP. Must have a Sealing Talisman in hand.",
      summary: [
        "Attach the talisman to a target within 5ft. Non-heroic: stunned immediately. Heroic: must spend 2 AP to remove it or be stunned at the end of its turn; stays stunned while attached.",
        "Anyone touching it can spend 2 AP to remove it (ending the stun). Otherwise lasts until the encounter ends or the target takes damage. One per target."
      ]
    },
    "secret-talisman": {
      name: "Secret Talisman", kind: "ultimate",
      cost: "Special", range: "Special", keywords: ["Special"], requires: "Special",
      summary: [ "Once per encounter, use a talisman you hold that contains a Secret Art (normal talisman rules). Doesn't count toward your normal Secret Art use that encounter." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ORACLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("oracle", {
  name: "Oracle",
  url: "https://lyrian.splatpass.net/classes/oracle/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "receive-oracle-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "scry" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "History", "Magic", "Insight", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "foretell" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "prediction" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-gate-of-fate" }
  ],
  abilities: {
    "receive-oracle-key": {
      name: "Receive Oracle (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "receive-oracle",
      summary: [ "Benefit 1: You can use Receive Oracle." ]
    },
    "receive-oracle": {
      name: "Receive Oracle", kind: "granted", grantedBy: "receive-oracle-key",
      cost: "4 AP", range: "Self", keywords: ["Divination"], requires: null,
      summary: [ "Ask up to three yes-or-no questions on a topic and receive a vision of the answers from an unknown entity (GM decides what you learn). Regain use after a rest." ]
    },
    "scry": {
      name: "Scry", kind: "ability",
      cost: "4 AP, 1 MP", range: "5000ft", keywords: ["Divination", "Spell", "Concentration"], requires: null,
      summary: [ "Place an invisible, inaudible ward at a visible point in range. When you focus, you see and hear everything in its line of sight within 30ft. Lasts as long as you like at any distance; one at a time; detectable by magic." ]
    },
    "foretell": {
      name: "Foretell", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Divination"], requires: null,
      summary: [
        "Roll a d20 and store it. When you or an ally are about to roll that die type, replace the roll with the stored number (uses it up).",
        "One at a time (recasting replaces it). Lasts until the end of your next turn. After rolling, you may spend 1 MP to reroll once."
      ]
    },
    "prediction": {
      name: "Prediction", kind: "ability",
      cost: "1 RP", range: "60ft", keywords: ["Aid", "Divination"], requires: "An ally is the target of an attack.",
      summary: [ "Strip Sure Hit and Lock On from the attack; the target gets +2 Dodge on their next Dodge." ]
    },
    "secret-art-gate-of-fate": {
      name: "Secret Art: Gate of Fate", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "120ft", keywords: ["Divination", "Secret Art", "Aid"], requires: "An ally rolls a 1.",
      summary: [ "Change the ally's roll of 1 into a 20." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PELTAST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("peltast", {
  name: "Peltast",
  url: "https://lyrian.splatpass.net/classes/peltast/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered. Proficiency in throwing weapons.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "throwing-rhythm" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "long-toss" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fan-of-knives" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "rappelling-dagger" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "stab-and-throw" }
  ],
  abilities: {
    "throwing-rhythm": {
      name: "Throwing Rhythm", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: After a thrown attack you can move 5ft, as with Nimble.",
        "Benefit 2: Your thrown weapon returns to you after thrown attacks."
      ]
    },
    "long-toss": {
      name: "Long Toss", kind: "ability",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: [],
      requires: "Throwing Weapon, Set of Missiles, or a Thrown attack only.",
      summary: [ "Make a Heavy attack at triple your normal range." ]
    },
    "fan-of-knives": {
      name: "Fan of Knives", kind: "ability",
      cost: "2 AP", range: "20ft", keywords: ["Scatter"],
      requires: "Throwing Weapon, Set of Missiles, or a Thrown attack only.",
      summary: [ "Make a Light attack against every enemy in range. Counts as a ranged attack and doesn't provoke attacks of opportunity." ]
    },
    "rappelling-dagger": {
      name: "Rappelling Dagger", kind: "ability",
      cost: "1 AP, 1 MP", range: "30ft", keywords: [],
      requires: "Throwing Weapon or a Thrown attack only.",
      summary: [
        "Make a Light attack. On damage, move to the closest open spot within 5ft of the target without provoking attacks of opportunity.",
        "Can target objects; against objects the movement always applies."
      ]
    },
    "stab-and-throw": {
      name: "Stab & Throw", kind: "ultimate",
      cost: "3 AP", range: "Special", keywords: [], requires: null,
      summary: [ "Make a Heavy melee attack, then a Heavy attack against a different target within your ranged/thrown range. The second attack doesn't provoke an attack of opportunity from the first target." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PHANTOM THIEF  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("phantom-thief", {
  name: "Phantom Thief",
  url: "https://lyrian.splatpass.net/classes/phantom-thief/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Utility",
  secondary: null,
  requires: "Thief mastered and mage mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "phantom-thief-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "stolen-power" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "duplicate" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "grand-theft-horse" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "steal-heart" }
  ],
  abilities: {
    "phantom-thief-key": {
      name: "Phantom Thief (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "stolen-skill",
      summary: [
        "Benefit 1: You can disable or modify Tier 2 and Tier 3 bounded fields.",
        "Benefit 2: You can use Stolen Skill."
      ]
    },
    "stolen-skill": {
      name: "Stolen Skill", kind: "granted", grantedBy: "phantom-thief-key",
      cost: "1 AP", range: "40ft", keywords: ["Spell", "Stealth"], requires: null,
      summary: [
        "Name a skill. The target saves vs your Potency or you steal its spent skill points in that skill (it loses them) until the encounter ends or 1 minute passes.",
        "Only spent skill points; not artisan or gathering skills. One stolen skill at a time; you can drop it for 0 AP."
      ]
    },
    "stolen-power": {
      name: "Stolen Power", kind: "ability",
      cost: "Variable AP", range: "60ft", keywords: ["Spell"], requires: null,
      summary: [ "Make a Light (1 AP), Precise (2 AP) or Heavy (2 AP) attack that deals Arcane damage using the TARGET's Power. Doesn't provoke attacks of opportunity." ]
    },
    "duplicate": {
      name: "Duplicate", kind: "ability",
      cost: "1 RP, 1 MP", range: "Sight", keywords: ["Spell", "Arcane"],
      requires: "An enemy in range casts a Spell.",
      summary: [
        "After the enemy's spell resolves, cast a copy of it using your own stats.",
        "Costs 1 RP to copy a 0-2 AP spell, or 2 RP to copy a 3-4 AP spell; more expensive spells can't be copied.",
        "Secret Arts and Esoteric Arts can't be copied (trying refunds the cost). The GM may block unique boss spells."
      ]
    },
    "grand-theft-horse": {
      name: "Grand Theft Horse", kind: "ability",
      cost: "2 AP, 2 MP", range: "5ft", keywords: [], requires: "The target is mounted.",
      summary: [
        "The target saves vs your Potency or is dismounted and knocked Prone. You may then mount its mount for 0 RP.",
        "Doesn't work on creatures that are themselves mounts (e.g. Dullahans, Centaurs)."
      ]
    },
    "steal-heart": {
      name: "Steal Heart", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "40ft", keywords: ["Spell", "Charm", "Mind Affecting", "Stealth"], requires: null,
      summary: [ "The target saves or is Charmed until the encounter ends. If it's a Grunt, you control its actions. One target at a time." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PHOSPHOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("phosphomancer", {
  name: "Phosphomancer",
  url: "https://lyrian.splatpass.net/classes/phosphomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Support",
  requires: "Any class mastered or Holy mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "benevolence" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "brilliance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Religion", "Art", "Magic", "History", "Appraise", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "gleaming-cut" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "illuminating-flash" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "crucified-by-radiance" }
  ],
  abilities: {
    "benevolence": {
      name: "Benevolence", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Holy" },
      summary: [
        "Benefit 1: Gain Elemental Mastery: Holy.",
        "Benefit 2: Your attacks don't use up Illumination when they miss.",
        "Benefit 3: You may choose not to apply Illumination's effect to a target (declare before the attack)."
      ]
    },
    "brilliance": {
      name: "Brilliance", kind: "ability",
      cost: "1 AP, 1 MP", range: "80ft", keywords: ["Spell", "Illumination", "Light"], requires: null,
      summary: [ "Light attack dealing Holy damage. On damage, inflict Illumination equal to Focus / 2 (rounded down) until the end of your next turn." ]
    },
    "gleaming-cut": {
      name: "Gleaming Cut", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Spell", "Light", "Rapid", "Illumination"], requires: null,
      summary: [ "Light attack dealing Holy damage. On damage, inflict Illumination equal to Focus / 2 (rounded down) until the end of your next turn." ]
    },
    "illuminating-flash": {
      name: "Illuminating Flash", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Spell", "Light", "Blinded", "Illumination"], requires: null,
      summary: [ "Pick a point in range. Everything in a 15x15 area centred there saves vs your Potency or gains Illumination equal to Focus / 2 (rounded down) until the end of your next turn, and is Blinded 5 for its next attack." ]
    },
    "crucified-by-radiance": {
      name: "Crucified by Radiance", kind: "ultimate",
      cost: "3 AP, 2 MP", range: "60ft", keywords: ["Spell", "Light", "Illumination", "Scatter"], requires: null,
      summary: [
        "Light Holy attack on everything in a 5ft-wide line. Then pick a point on that line and draw a 55ft line across it (centred, perpendicular); Light Holy attack on everything on the second line.",
        "On damage from either line: Illumination equal to Focus / 2 (rounded down) until the end of your next turn.",
        "A target hit by both lines takes Heavy damage from the second line and gains Illumination equal to your full Focus instead."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// PIERROT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("pierrot", {
  name: "Pierrot",
  url: "https://lyrian.splatpass.net/classes/pierrot/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Controller",
  secondary: "Support",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "pierrots-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "pie-toss" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Art"],
      summary: "+5 skill points in Art only. Any point can be traded for 2 expertise points in Art." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flower-squirt" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "honk" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "banana-peel" }
  ],
  abilities: {
    "pierrots-journey": {
      name: "Pierrot's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { skill: "Art", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency in small weapons, bludgeoning weapons and light armor.",
        "Benefit 2: +5 Art skill points; any point can be traded for 2 expertise points in Art.",
        "Benefit 3: 2 Damage Reduction against pies."
      ]
    },
    "pie-toss": {
      name: "Pie Toss", kind: "ability",
      cost: "2 AP", range: "40ft", keywords: ["Sure Hit", "Full Pierce", "Rapid", "Encounter Start", "Encounter Conclusion", "Downed", "Safe"], requires: null,
      summary: [ "Deal 2 damage to the target; this can't be increased and doesn't trigger extra-damage effects. Usable while downed, as Encounter Start and as Encounter Conclusion." ]
    },
    "flower-squirt": {
      name: "Flower Squirt", kind: "ability",
      cost: "1 AP, 1 MP", range: "5ft", keywords: [], requires: null,
      summary: [ "Light attack dealing Water damage. On damage the target is Soaked (X = your Focus) until it next takes Lightning damage." ]
    },
    "honk": {
      name: "HONK!", kind: "ability",
      cost: "0 AP", range: "5ft", keywords: ["Quick"], requires: null,
      summary: [ "Put a clown nose on the target and honk it: it saves or is Challenged by you until the start of your next turn." ]
    },
    "banana-peel": {
      name: "Banana Peel", kind: "ultimate",
      cost: "1 RP", range: "20ft", keywords: [], requires: "An enemy is moving within range.",
      summary: [ "The target saves or falls prone. If it falls prone, you may immediately use Pie Toss on it for 0 RP." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PRIEST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("priest", {
  name: "Priest",
  url: "https://lyrian.splatpass.net/classes/priest/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 1,
  role: "Healer",
  secondary: "Support",
  requires: "Acolyte mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "studied-healer" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "sacrament" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Religion", "Magic", "History", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "purify" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "holy-light" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-revitalize" }
  ],
  abilities: {
    "studied-healer": {
      name: "Studied Healer", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { skill: "Religion", points: 5 },
      summary: [
        "Benefit 1: +5 Religion.",
        "Benefit 2: +5 Negotiation when dealing with followers of your religion."
      ]
    },
    "sacrament": {
      name: "Sacrament", kind: "ability",
      cost: "2 AP, 0 MP", range: "Touch", keywords: ["Enchantment", "Divine"], requires: null,
      summary: [ "Until the encounter ends, the weapon deals Holy damage and gains +1 Power (Enchantment)." ]
    },
    "purify": {
      name: "Purify", kind: "ability",
      cost: "1 AP, 1 MP", range: "40ft", keywords: ["Spell"], requires: null,
      summary: [ "Remove all stacks of one negative effect of your choice that you can identify." ]
    },
    "holy-light": {
      name: "Holy Light", kind: "ability",
      cost: "1 AP, 2 MP", range: "60ft", keywords: ["Healing", "Spell"], requires: null,
      summary: [ "Heal the target for 8 + Power." ]
    },
    "secret-art-revitalize": {
      name: "Secret Art: Revitalize", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Healing", "Overcharge", "Secret Art", "Spell"],
      requires: "The ally is downed.",
      summary: [
        "Set the ally's HP to 0, then heal them for Power x 3. They may stand up.",
        "Overcharge: +7 HP per extra Mana spent. Can't be used on Mortally Wounded allies."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// PROTECTOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("protector", {
  name: "Protector",
  url: "https://lyrian.splatpass.net/classes/protector/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Defender",
  secondary: null,
  requires: "Guardian mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "greatshield-master" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "no-getting-past" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "provoke-ii" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "bullet-magnet" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-shield-wall" }
  ],
  abilities: {
    "greatshield-master": {
      name: "Greatshield Master", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Gain Greatshield proficiency.",
        "While wearing a greatshield, an ally behind you who is targeted by a ranged attack may treat you as high cover."
      ]
    },
    "no-getting-past": {
      name: "No getting past!", kind: "ability",
      cost: "0 RP", range: "Melee Weapon Range", keywords: ["Sure Hit", "Opportunistic"],
      requires: "Usable whenever you could make an attack of opportunity.",
      summary: [ "Make a Light (0 RP) or Heavy (1 RP) attack. On damage the target is Slowed until the end of its turn, or Rooted if it was already Slowed." ]
    },
    "provoke-ii": {
      name: "Provoke II", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Challenge"], requires: null,
      summary: [ "The target is Challenged until the encounter ends. One target at a time." ]
    },
    "bullet-magnet": {
      name: "Bullet Magnet", kind: "ability",
      cost: "1 AP", range: "20ft", keywords: [], requires: "Must be using a greatshield.",
      summary: [ "Until your next turn, single-target ranged weapon attacks aimed at allies within range target you instead." ]
    },
    "secret-art-shield-wall": {
      name: "Secret Art: Shield Wall", kind: "ultimate",
      cost: "1 RP, 6 MP", range: "20ft", keywords: ["Secret Art"],
      requires: "You are targeted by an area ability while using a shield.",
      summary: [ "You and allies within range take 75 less damage from the triggering attack." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PYROMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("pyromancer", {
  name: "Pyromancer",
  url: "https://lyrian.splatpass.net/classes/pyromancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered or Fire mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "controlled-blaze" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "fireball" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "incendiary-ray" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "ignite" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-pyroblast" }
  ],
  abilities: {
    "controlled-blaze": {
      name: "Controlled Blaze", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Fire" },
      refund: { overlapsWith: ["Flame Sentinel"], amount: "full",
                note: "Page says a refund is possible and that Flame Sentinel also grants this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Your fire can be made not to ignite things (option).",
        "Benefit 2: Gain Elemental Mastery: Fire."
      ]
    },
    "fireball": {
      name: "Fireball", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: ["Fire", "Spell", "Scatter"], requires: null,
      summary: [ "Light Fire attack against every unit in a 15x15 area." ]
    },
    "incendiary-ray": {
      name: "Incendiary Ray", kind: "ability",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Fire", "Spell", "Scatter"], requires: null,
      summary: [ "Light Fire attack on everything in a 10ft-wide line. On damage: Burning (Power x 3)." ]
    },
    "ignite": {
      name: "Ignite", kind: "ability",
      cost: "1 RP", range: "40ft", keywords: ["Fire", "Overcharge", "Spell"],
      requires: "You just dealt Fire damage.",
      summary: [
        "Reaction: the target gains Burning (Power x 3).",
        "Overcharge: 1 extra Mana per additional target hit by the same attack."
      ]
    },
    "secret-art-pyroblast": {
      name: "Secret Art: Pyroblast", kind: "ultimate",
      cost: "4 AP", range: "60ft", keywords: ["Fire", "Secret Art", "Spell"], requires: null,
      summary: [ "Heavy attack that deals double Heavy Fire damage. Gains Lock On against targets that have your Burning on them." ]
    }
  }
});

// ---------------------------------------------------------------------------
// PYROMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("pyromaster", {
  name: "Pyromaster",
  url: "https://lyrian.splatpass.net/classes/pyromaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Pyromancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "eternal-flames" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "blast-wave" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "fireball-ii" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "fireball-barrage" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-meteor" }
  ],
  abilities: {
    "eternal-flames": {
      name: "Eternal Flames", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Burning you apply on your turn becomes Hellfire: like Burning, but it can't be removed normally unless removed before the end of the target's next turn, and it affects Burning-immune targets. Removable normally after that turn; ends when the encounter ends.",
        "Benefit 2: Applying Hellfire to a target that's already burning deals extra Fire damage equal to your Power."
      ]
    },
    "blast-wave": {
      name: "Blast Wave", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Fire", "Spell", "Blanketing"], requires: null,
      summary: [ "Light Fire attack on everyone within 10ft of you; on damage push them 10ft. Doesn't provoke attacks of opportunity." ]
    },
    "fireball-ii": {
      name: "Fireball II", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Fire", "Overcharge", "Spell", "Scatter"], requires: null,
      summary: [
        "Light Fire attack on everything in a 15x15 area; on damage, Burning (Power x 3).",
        "Overcharge: +5ft area size per extra Mana."
      ]
    },
    "fireball-barrage": {
      name: "Fireball Barrage", kind: "ability",
      cost: "3 AP", range: "60ft", keywords: ["Fire", "Spell", "Scatter"], requires: null,
      summary: [ "Place three 15x15 areas. Light Fire attack (as Fireball) on units in them; each unit is attacked only once." ]
    },
    "secret-art-meteor": {
      name: "Secret Art: Meteor", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "120ft", keywords: ["Fire", "Overcharge", "Spell", "Sure Hit", "Secret Art", "Blanketing", "Active"], requires: null,
      summary: [
        "Mark a 30x30 area. At the start of your next turn the meteor lands: Heavy Fire attack on everything there.",
        "Overcharge: each extra 2 AP adds +5ft to the area and +Power damage. Above 4 AP total it gains Setup. Max 16 AP.",
        "Note: the page's guidance mentions '4 AP', which doesn't match the 2 AP cost line (see ISSUES.md)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// RANGER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("ranger", {
  name: "Ranger",
  url: "https://lyrian.splatpass.net/classes/ranger/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 1,
  role: "Striker",
  secondary: "Utility",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "rangers-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "track" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "guided-aim" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "crippling-attack" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "snap-shot" }
  ],
  abilities: {
    "rangers-journey": {
      name: "Ranger's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "status-assessment",
      grants: { points: 5, expertiseTrade: true,
                options: ["Appraise", "Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"] },
      summary: [
        "Benefit 1: Proficiency in Light and Medium armor, one common ranged weapon group and one common melee weapon group.",
        "Benefit 2: +5 skill points among the same skills as the Level 3 step; any point can be traded for 2 expertise points in those skills.",
        "Benefit 3: You can use Status Assessment."
      ]
    },
    "status-assessment": {
      name: "Status Assessment", kind: "granted", grantedBy: "rangers-journey",
      cost: "0 AP", range: "Sight", keywords: ["Analyze", "Quick", "Stealth"], requires: null,
      summary: [ "Learn the target's HP as a percentage until combat ends, plus any destroyable parts it has." ]
    },
    "track": {
      name: "Track", kind: "ability",
      cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Find tracks that aren't hidden and follow them at normal speed with no checks." ]
    },
    "guided-aim": {
      name: "Guided Aim", kind: "ability",
      cost: "0 AP, Variable MP", range: "Self", keywords: [], requires: null,
      summary: [ "Your next accuracy roll gets + the Mana spent (doubled if it's a Precise attack)." ]
    },
    "crippling-attack": {
      name: "Crippling Attack", kind: "ability",
      cost: "1 AP, 1 MP", range: "Weapon Range", keywords: ["Slow"], requires: null,
      summary: [ "Light attack. On damage the target is Slowed until the end of its next turn." ]
    },
    "snap-shot": {
      name: "Snap Shot", kind: "ultimate",
      cost: "1 AP", range: "Ranged Weapon Range", keywords: [], requires: null,
      summary: [ "Heavy attack with a ranged or thrown weapon. Focus isn't added to the accuracy roll." ]
    }
  }
});

// ---------------------------------------------------------------------------
// REAVER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("reaver", {
  name: "Reaver",
  url: "https://lyrian.splatpass.net/classes/reaver/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Highlander mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "overwhelming-critical" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "sweeping-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "full-power-swing" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "shieldcrusher" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-bladestorm" }
  ],
  abilities: {
    "overwhelming-critical": {
      name: "Overwhelming Critical", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "When you crit with a two-handed Heavy attack, you can use Aftershock even though it didn't miss. Doesn't count toward Aftershock's limit, and works even if the attack was blocked." ]
    },
    "sweeping-stance": {
      name: "Sweeping Stance", kind: "ability",
      cost: "2 AP, 1 MP", range: "Self", keywords: ["Stance"], requires: "Two-handed weapon only.",
      summary: [
        "You make an attack of opportunity when an enemy enters your reach (not when it moves within it), with +5ft range on those attacks.",
        "Ends when you make an attack that isn't an attack of opportunity."
      ]
    },
    "full-power-swing": {
      name: "Full Power Swing", kind: "ability",
      cost: "4 AP", range: "Melee", keywords: [], requires: "Two-handed weapon only.",
      summary: [ "Heavy attack that deals double Heavy damage." ]
    },
    "shieldcrusher": {
      name: "Shieldcrusher", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee", keywords: ["Broken"], requires: "Two-handed weapon only.",
      summary: [ "Heavy attack. If the target Blocks with a shield or greatshield, that shield becomes Broken." ]
    },
    "secret-art-bladestorm": {
      name: "Secret Art: Bladestorm", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "Self", keywords: ["Secret Art", "Stance", "Upkeep", "Scatter"],
      requires: "Two-handed slashing weapon only.",
      usage: "Upkeep: 2 Mana + 1 AP.",
      summary: [
        "Heavy attack on every enemy in melee range when you activate it and at the start of each of your turns.",
        "You can move; enemies that come into range are attacked. Each creature can be hit only once per round."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ROGUE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("rogue", {
  name: "Rogue",
  url: "https://lyrian.splatpass.net/classes/rogue/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "rogues-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "evasive-maneuver" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "movement-burst" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "sneak-attack" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "devastating-strike" }
  ],
  abilities: {
    "rogues-journey": {
      name: "Rogue's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "feint",
      grants: { skill: "Roguecraft", fixed: 5, points: 5, expertiseTrade: true,
                options: ["Athletics", "Stealth", "Deception", "Perception", "Insight", "Negotiation", "Intimidation", "relevant Expert Knowledge (DM approval)"] },
      summary: [
        "Grants line: +10 skill points.",
        "Benefit 1: Light armor proficiency, plus one of Small weapons, Light swords, Dueling weapons or Set of missiles.",
        "Benefit 2: +5 Roguecraft, plus +5 among Athletics, Stealth, Deception, Perception, Insight, Negotiation, Intimidation or relevant Expert Knowledge (DM approval); any point can be traded for 2 expertise points in those skills.",
        "Benefit 3: You can use Feint."
      ]
    },
    "feint": {
      name: "Feint", kind: "granted", grantedBy: "rogues-journey",
      cost: "1 AP", range: "15ft", keywords: ["Stealth"], requires: null,
      summary: [ "If the target is a Grunt or has lower Agility than you, it can't make attacks of opportunity against you until your next turn." ]
    },
    "evasive-maneuver": {
      name: "Evasive Maneuver", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Sidestep", "Stealth"], requires: null,
      summary: [ "Sidestep 5ft. On your own turn you can pay 1 Mana and 0 AP instead." ]
    },
    "movement-burst": {
      name: "Movement Burst", kind: "ability",
      cost: "1 AP, Variable MP", range: "Self", keywords: ["Stealth"], requires: null,
      summary: [ "Move your Speed + 15ft per Mana spent. Unused movement is lost. Spending more than 1 Mana removes the Stealth keyword." ]
    },
    "sneak-attack": {
      name: "Sneak Attack", kind: "ability",
      cost: "2 AP, 2 MP", range: "Melee", keywords: ["Trick Attack"], requires: null,
      summary: [ "Heavy attack. (Guidance: Trick Attacks cost double RP to react to.)" ]
    },
    "devastating-strike": {
      name: "Devastating Strike", kind: "ultimate",
      cost: "1 AP", range: "Melee", keywords: ["Full Pierce", "Sure Hit"], requires: "The target has 0 RP.",
      summary: [ "Light attack." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SABOTEUR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("saboteur", {
  name: "Saboteur",
  url: "https://lyrian.splatpass.net/classes/saboteur/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: "Utility",
  requires: "Rogue mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "saboteur-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "flash-bomb" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Stealth"],
      summary: "+5 in Stealth or Stealth expertise. The page doesn't state the usual trade rule (see ISSUES.md)." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "scouting-ahead" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "wire-sweep" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "chemical-explosive" }
  ],
  abilities: {
    "saboteur-key": {
      name: "Saboteur (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "presence-concealment",
      refund: { overlapsWith: ["Adventurer (class)"], amount: "half EXP",
                note: "Only if you already know the shared ability; apply lineage cost reduction first. Shared proficiencies alone don't count." },
      summary: [
        "Benefit 1: Proficiency with the Saboteur Thread Dagger.",
        "Benefit 2: You can use Presence Concealment."
      ]
    },
    "presence-concealment": {
      name: "Presence Concealment", kind: "granted", grantedBy: "saboteur-key",
      cost: "4 AP", range: "Self", keywords: ["Presence Concealment", "Stealth"], requires: null,
      summary: [ "Same ability as Adventurer's: suppress your mana to gain Presence Concealment; no mana-cost or Aura abilities while concealed; end it for 0 RP (restriction lasts until the end of your next turn)." ]
    },
    "flash-bomb": {
      name: "Flash Bomb", kind: "ability",
      cost: "1 AP", range: "20ft", keywords: ["Daze"], requires: null,
      summary: [ "Everything in a 25x25 area saves vs your Potency or is Dazed." ]
    },
    "scouting-ahead": {
      name: "Scouting Ahead", kind: "ability",
      cost: "No listed cost", range: "-", keywords: [], requires: null,
      summary: [ "When the party travels stealthily you move ahead of it; your roll counts as the party's lowest roll (wording unclear, see ISSUES.md)." ]
    },
    "wire-sweep": {
      name: "Wire Sweep", kind: "ability",
      cost: "1 AP, 1 MP", range: "20ft", keywords: [], requires: "Saboteur Threaded Dagger only.",
      summary: [ "The target saves vs Potency + 2 or is knocked Prone and takes Light Damage." ]
    },
    "chemical-explosive": {
      name: "Chemical Explosive", kind: "ultimate",
      cost: "4 AP", range: "5ft", keywords: ["Sure Hit"], requires: null,
      summary: [
        "Plant a package that explodes after 1 minute: 15ft radius, Double Heavy damage, heard throughout that radius, 5x damage to inanimate objects.",
        "You get one free per interlude and can carry one at a time. Disabling it takes a check of 20 + 2 x the creator's Power."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sage", {
  name: "Sage",
  url: "https://lyrian.splatpass.net/classes/sage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: "Mage, Sorcerer or Mage Knight mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "augmented-casting-increased-reach" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "lengthened-incantation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "selective-casting" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "dualcast" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-overcharge" }
  ],
  abilities: {
    "augmented-casting-increased-reach": {
      name: "Augmented Casting - Increased Reach", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "increased-reach",
      summary: [ "Benefit 1: You can use Increased Reach." ]
    },
    "increased-reach": {
      name: "Increased Reach", kind: "granted", grantedBy: "augmented-casting-increased-reach",
      cost: "0 RP, 1 MP", range: "Self", keywords: [], requires: null,
      summary: [ "Your next spell's range is doubled (only ranges measured in feet)." ]
    },
    "lengthened-incantation": {
      name: "Lengthened Incantation", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Arcane"], requires: null,
      summary: [
        "Your next spell costs +2 AP and deals extra Light Damage. If you can't pay the AP this turn, it gains Setup.",
        "The bonus applies to one roll (to every target of a scatter area spell, but once per target). For multi-turn spells, only the initial cast."
      ]
    },
    "selective-casting": {
      name: "Selective Casting", kind: "ability",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Circuit"], requires: null,
      summary: [ "Your next instantaneous spell can leave out a number of visible targets equal to your Focus. Doesn't work on lingering effects (e.g. Glittershards)." ]
    },
    "dualcast": {
      name: "Dualcast", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Arcane"], requires: "Immediately after a successful Spell.",
      summary: [ "Repeat your last ability on the same target, paying its costs again." ]
    },
    "secret-art-overcharge": {
      name: "Secret Art: Overcharge", kind: "ultimate",
      cost: "0 AP", range: "Self", keywords: ["Secret Art"], requires: null,
      summary: [ "Your next spell this turn costs 3 less Mana (you can't gain Mana from this)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SANCTIONER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sanctioner", {
  name: "Sanctioner",
  url: "https://lyrian.splatpass.net/classes/sanctioner/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Healer",
  secondary: "Striker",
  requires: "Medic, Acolyte, Mage, Mage Knight or Sorcerer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "sanctioned-healer" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "consecrating-bolt" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Religion", "Magic", "History", "Insight", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "radiant-verdict" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "call-to-grace" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "benediction" }
  ],
  abilities: {
    "sanctioned-healer": {
      name: "Sanctioned Healer", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Holy" },
      summary: [
        "Benefit 1: You may choose not to trigger Sanctify's effect.",
        "Benefit 2: Gain Elemental Mastery: Holy."
      ]
    },
    "consecrating-bolt": {
      name: "Consecrating Bolt", kind: "ability",
      cost: "1 AP, 1 MP", range: "60ft", keywords: ["Spell", "Sanctify"], requires: null,
      summary: [ "Light Holy attack. On damage: Sanctify 1." ]
    },
    "radiant-verdict": {
      name: "Radiant Verdict", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Spell", "Sanctify", "Artillery"], requires: null,
      summary: [ "Heavy Holy attack. On hit: Sanctify 1." ]
    },
    "call-to-grace": {
      name: "Call to Grace", kind: "ability",
      cost: "0 RP", range: "60ft", keywords: ["Sanctify"], requires: "An enemy with Sanctify attacks an ally.",
      summary: [ "Trigger Sanctify: heal the attack's target by the enemy's Sanctify amount and remove that many stacks. If the attack has several targets, only one is healed." ]
    },
    "benediction": {
      name: "Benediction", kind: "ultimate",
      cost: "1 AP, 3 MP", range: "60ft", keywords: ["Spell", "Sanctify"], requires: null,
      summary: [ "Precise Holy attack. On damage: Sanctify 3. Doesn't get Pinpoint." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SCOUT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("scout", {
  name: "Scout",
  url: "https://lyrian.splatpass.net/classes/scout/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Utility",
  secondary: "Striker",
  requires: "Rogue or Ranger mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "independent-actor" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "squadsight" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Art", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "pathfinder" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "hide-in-bush" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-ambush-shot" }
  ],
  abilities: {
    "independent-actor": {
      name: "Independent Actor", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "scouts-retreat",
      grants: { expertise: "Art (Cartography)", amount: 5, note: "Not doubled for expertise bonus." },
      summary: [
        "Benefit 1: When working alone (no known allies within 300ft) for at least 15 minutes, +10 to Perception, Insight, Survival and Stealth checks.",
        "Benefit 2: +5 bonus in Art (Cartography) expertise (not doubled for expertise bonus).",
        "Benefit 3: You can use Scout's Retreat.",
        "Benefit 4: An active Aetherie or similar connection automatically fails the 'no known allies' requirement."
      ]
    },
    "scouts-retreat": {
      name: "Scout's Retreat", kind: "granted", grantedBy: "independent-actor",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Stealth"], requires: "No known allies within 300ft of you.",
      summary: [ "Disengage and move up to twice your speed away from enemies toward the closest escape point." ]
    },
    "squadsight": {
      name: "Squadsight", kind: "ability",
      cost: "0 RP, 1 MP", range: "300ft", keywords: [], requires: null,
      summary: [
        "Until the start of your next turn, an ally in range who can see or hear you may use your Perception and see from your position.",
        "They may also measure ranged weapon range (not line of sight) from your position, up to twice their normal range."
      ]
    },
    "pathfinder": {
      name: "Pathfinder", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Stealth"], requires: null,
      summary: [ "Move up to your speed ignoring difficult terrain. Until the start of your next turn, terrain within 20ft of you isn't difficult for your allies." ]
    },
    "hide-in-bush": {
      name: "Hide in bush", kind: "ability",
      cost: "2 AP, 1 MP", range: "Self", keywords: [], requires: "Must be in natural terrain.",
      summary: [ "Take the Hide action and count as being in cover for staying stealthed, until you take any action or speak." ]
    },
    "secret-art-ambush-shot": {
      name: "Secret Art: Ambush Shot", kind: "ultimate",
      cost: "2 AP", range: "Ranged Weapon Range", keywords: ["Secret Art", "Sure Hit", "Full Pierce"],
      requires: "The enemy is unaware of you. Only on the first turn of an encounter, as your first attack.",
      summary: [ "Heavy attack that deals maximum damage instead of rolling. Doesn't break your stealth." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SEARING LOTUS STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("searing-lotus-style", {
  name: "Searing Lotus Style",
  url: "https://lyrian.splatpass.net/classes/searing-lotus-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Defender",
  secondary: "Striker",
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "fire-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "trial-by-fire" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Magic", "Perception", "Intimidation", "Survival", "Art", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "scorching-reprisal" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "molten-domain" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "infernal-bastion" }
  ],
  abilities: {
    "fire-weapon": {
      name: "Fire Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your weapon attacks may deal Fire damage instead of their normal type (declare before the accuracy roll)." ]
    },
    "trial-by-fire": {
      name: "Trial By Fire", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Challenge"], requires: null,
      summary: [ "Light attack. On damage the target is Challenged by you until the start of your next turn; if it deals no damage, the target can't be Challenged by you until then." ]
    },
    "scorching-reprisal": {
      name: "Scorching Reprisal", kind: "ability",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Opportunistic"], requires: "An enemy provokes an attack of opportunity.",
      summary: [ "Heavy attack of opportunity. Your next basic attack of opportunity against that target before the start of your next turn costs 0 RP." ]
    },
    "molten-domain": {
      name: "Molten Domain", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Domain", "Burning"], requires: null,
      summary: [
        "Until the start of your next turn, the ground within 5ft of you acts like burning ground: an enemy that willingly leaves or moves through it (not just entering) gets Burning (Focus x 3).",
        "Suppresses your side's other damage aura effects while active; end-of-turn effects like Poison Spore don't trigger for someone ending a turn inside it."
      ]
    },
    "infernal-bastion": {
      name: "Infernal Bastion", kind: "ultimate",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Burning"], requires: "You are targeted by a melee attack.",
      summary: [ "Block the attack. If you reduce its damage to 0, the attacker gets Burning (Focus x 3)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SEVEN SORROWS SWORD STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("seven-sorrows-sword-style", {
  name: "Seven Sorrows Sword Style",
  url: "https://lyrian.splatpass.net/classes/seven-sorrows-sword-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered. Proficiency in at least one of Katanas, Scythes, Heavy Blades or Small weapons.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "dark-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "lone-wolf-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Perception", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "1st-sorrow-distance-dies-first" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "2nd-sorrow-one-against-the-world" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "3rd-sorrow-blade-without-witness" }
  ],
  abilities: {
    "dark-weapon": {
      name: "Dark Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your weapon attacks may deal Dark damage instead of their normal type (declare before the accuracy roll)." ]
    },
    "lone-wolf-stance": {
      name: "Lone Wolf Stance", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start", "Stance"], requires: null,
      summary: [
        "Lasts until the encounter ends or you're Downed.",
        "Allies can't target, buff or aura you (except area abilities that also hit enemies). You can't use abilities on allies (except damaging ones that also affect enemies, including auras). 'Willing ally' abilities don't work with you.",
        "You may still use Aid abilities on yourself."
      ]
    },
    "1st-sorrow-distance-dies-first": {
      name: "1st Sorrow: Distance Dies First", kind: "ability",
      cost: "2 AP, 2 MP", range: "60ft", keywords: ["Teleport", "Trick Attack", "Isolated"],
      requires: "In Lone Wolf Stance. Katana, Heavy Blade, Scythe, Chainsaw or Small Weapon.",
      summary: [ "Teleport behind the target and make a Heavy attack. If you'd be Isolated after teleporting, range becomes 120ft." ]
    },
    "2nd-sorrow-one-against-the-world": {
      name: "2nd Sorrow: One Against The World", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Opener", "Isolated", "Blanketing"],
      requires: "In Lone Wolf Stance and Isolated. Katana, Heavy Blade, Scythe, Chainsaw or Small Weapon.",
      summary: [ "Heavy attack against every enemy in range." ]
    },
    "3rd-sorrow-blade-without-witness": {
      name: "3rd Sorrow: Blade Without Witness", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Isolated"],
      requires: "In Lone Wolf Stance. Katana, Heavy Blade, Scythe, Chainsaw or Small Weapon.",
      summary: [ "Heavy attack. If you're Isolated, the mana cost is 1 lower." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHADOW THIEF  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shadow-thief", {
  name: "Shadow Thief",
  url: "https://lyrian.splatpass.net/classes/shadow-thief/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Utility",
  secondary: "Support",
  requires: "Rogue mastered or Dark mastery.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "nightstalker" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "shadow-step" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "shade-form" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "vanish" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "shadow-cloak" }
  ],
  abilities: {
    "nightstalker": {
      name: "Nightstalker", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { darkvision: 60 },
      summary: [ "Benefit 1: 60ft darkvision; if you already have darkvision, its range increases by 60ft." ]
    },
    "shadow-step": {
      name: "Shadow Step", kind: "ability",
      cost: "1 AP, 2 MP", range: "Self", keywords: ["Shadow", "Teleport", "Stealth"], requires: null,
      summary: [ "Teleport up to twice your movement speed. At night, mana cost -2." ]
    },
    "shade-form": {
      name: "Shade Form", kind: "ability",
      cost: "1 AP, 2 MP", range: "Self", keywords: ["Shadow", "Stealth"], requires: null,
      usage: "Upkeep: 2 Mana at the start of each turn or it ends. At night, cost and Upkeep -2.",
      summary: [ "You become nearly weightless: pass through occupied spaces and slip through cracks at least 1 inch wide and 1 inch tall." ]
    },
    "vanish": {
      name: "Vanish", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self", keywords: ["Shadow", "Hiding", "Stealth"], requires: null,
      summary: [ "Gain the Hiding state against anyone you have cover or concealment from. At night, mana cost -1." ]
    },
    "shadow-cloak": {
      name: "Shadow Cloak", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Self", keywords: ["Shadow", "Stealth"], requires: null,
      summary: [ "+5 Stealth for 1 hour or until the encounter ends, and you can hide without cover or concealment. At night, mana cost -2." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHADOWBRINGER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shadowbringer", {
  name: "Shadowbringer",
  url: "https://lyrian.splatpass.net/classes/shadowbringer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Support",
  secondary: "Utility",
  requires: "Shadow Thief mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "shared-darkness" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: null,
      missing: "MISSING - page shows 'Ability 1' with no ability named. Hide in Shadows is listed under abilities but not tied to a step (likely this slot - unconfirmed)." },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "darkness" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "sable-grace" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-nightcaller" }
  ],
  abilities: {
    "shared-darkness": {
      name: "Shared Darkness", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "darkvision",
      grants: { darkvision: 60 },
      summary: [
        "Benefit 1: Your darkvision range increases by 60ft.",
        "Benefit 2: You can use Darkvision."
      ]
    },
    "darkvision": {
      name: "Darkvision", kind: "granted", grantedBy: "shared-darkness",
      cost: "1 AP", range: "Touch", keywords: ["Stealth"], requires: null,
      summary: [ "Share your darkvision with a touched ally until the encounter ends (see up to 60ft in darkness)." ]
    },
    "hide-in-shadows": {
      name: "Hide in Shadows", kind: "unlisted",
      cost: "2 AP, 2 MP", range: "40ft", keywords: ["Teleport", "Full Pierce", "Stealth"], requires: "Must be day.",
      note: "Listed under abilities but not tied to a progression step (Level 2 is blank).",
      summary: [
        "Jump into a target's shadow. If you were hidden you stay hidden; otherwise enemies may attack the shadow as if it were you. Taking damage forces you out.",
        "While inside you move with the target (including teleports) and can only exit. Exit for 0 RP; if you were hidden, your next basic attack on that target gains Full Pierce."
      ]
    },
    "darkness": {
      name: "Darkness", kind: "ability",
      cost: "2 AP, 3 MP", range: "40ft", keywords: ["Concentration", "Spell", "Stealth", "Blinded"], requires: null,
      summary: [
        "Create a 15x15 area of darkness that blocks line of sight. Inside or within 5ft of it, you can only see 5ft into or out of it.",
        "Creatures inside without darkvision (or similar) are Blinded 2; Nightvision doesn't help.",
        "Lasts up to 10 minutes; end it for 0 AP. At night, mana cost -2."
      ]
    },
    "sable-grace": {
      name: "Sable Grace", kind: "ability",
      cost: "1 RP, 1 MP", range: null, keywords: ["Stealth"],
      requires: "Only at night. You become the target of an attack.",
      summary: [ "Take the Dodge action against the attack; remove its Lock-On and treat your Dodge as 99 against it." ]
    },
    "secret-art-nightcaller": {
      name: "Secret Art: Nightcaller", kind: "ultimate",
      cost: "0 AP, 4 MP", range: "Self", keywords: ["Secret Art", "Stealth"], requires: null,
      summary: [ "Until the encounter ends, it counts as night for all your abilities and items affected by night." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHIELD PALADIN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shield-paladin", {
  name: "Shield Paladin",
  url: "https://lyrian.splatpass.net/classes/shield-paladin/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Defender",
  secondary: "Support",
  requires: "Human, proficient with shields and medium or heavy armor.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "divine-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "holy-shield" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "aura-of-protection" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "divine-smite-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "lay-on-hands" }
  ],
  abilities: {
    "divine-weapon": {
      name: "Divine Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      refund: { overlapsWith: ["Gun Paladin", "Sword Paladin"], amount: "full",
                note: "Page says a refund is possible and that Gun Paladin and Sword Paladin also grant this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Your weapon attacks may deal your chosen Divine damage type instead (declare before the accuracy roll).",
        "Benefit 2: Your weapon can shed light like a lantern; toggling it costs 1 AP."
      ]
    },
    "holy-shield": {
      name: "Holy Shield", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Overcharge"], requires: "Must be using a shield.",
      summary: [
        "Your next Block gets +2 guard (doesn't stack with itself). If that Block reduces the damage to 0, gain 3 temporary HP.",
        "Overcharge: up to 3 extra AP; each adds +3 to the guard bonus and +3 to the temporary HP."
      ]
    },
    "aura-of-protection": {
      name: "Aura of Protection", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Aura"], requires: null,
      summary: [ "30ft aura. When an ally in it takes the Block action, you may spend 1 Mana to replace their Block Value with yours. Aid abilities get +20ft range inside the aura." ]
    },
    "divine-smite-ii": {
      name: "Divine Smite II", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Divine"], requires: null,
      summary: [ "Heavy attack dealing Holy damage. On damage, you or an ally within 30ft gains temporary HP equal to 5 + Power until the encounter ends." ]
    },
    "lay-on-hands": {
      name: "Lay on Hands", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "Touch", keywords: ["Healing", "Overcharge"], requires: null,
      summary: [
        "Heal the target for 4 + Power.",
        "Overcharge: +1 Mana to also remove one negative effect (not Injuries or Mortal Wounds)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHIELD SAINT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shield-saint", {
  name: "Shield Saint",
  url: "https://lyrian.splatpass.net/classes/shield-saint/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Defender",
  secondary: null,
  requires: "Bodyguard mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "soul-bond" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "lifesense" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "faithful-shield" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "quick-assist" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-dynamic-duo" }
  ],
  abilities: {
    "soul-bond": {
      name: "Soul Bond", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Choose one willing person as your Soulmate (several class abilities only work on them). Permanent unless the Soulmate dies.",
        "Benefit 2: Your Soulmate counts as your VIP for Bodyguard abilities (you can still name other VIPs)."
      ]
    },
    "lifesense": {
      name: "Lifesense", kind: "ability",
      cost: "1 AP", range: "Unlimited", keywords: [], requires: null,
      summary: [ "Know your Soulmate's direction at all times and exact location within 300ft, plus their current HP, Mana and RP." ]
    },
    "faithful-shield": {
      name: "Faithful Shield", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Overcharge"], requires: null,
      summary: [ "Until the start of your next turn, once per turn you can use Shelter for 0 RP on your Soulmate. Overcharge: pay 4 AP instead for 2 free Shelter uses that ignore the once-per-turn limit." ]
    },
    "quick-assist": {
      name: "Quick Assist", kind: "ability",
      cost: "1 RP, 2 MP", range: "20ft", keywords: ["Teleport"], requires: "Your Soulmate, within range, is the target of an attack.",
      summary: [ "Teleport next to your Soulmate; the attack resolves against you with the Block action's benefit. Then your Soulmate may make an attack of opportunity on the attacker if in range. Mana cost -1 if you were already next to them." ]
    },
    "secret-art-dynamic-duo": {
      name: "Secret Art: Dynamic Duo", kind: "ultimate",
      cost: "2 AP, 1 MP", range: "Sight", keywords: ["Challenge", "Secret Art"], requires: null,
      summary: [ "Challenge all enemies in range until the start of your next turn. Whenever you could make an attack of opportunity, your Soulmate may make it instead, Sidestepping up to their speed first." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHIELDWARDEN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shieldwarden", {
  name: "Shieldwarden",
  url: "https://lyrian.splatpass.net/classes/shieldwarden/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Healer",
  secondary: null,
  requires: "Acolyte, Mage or Mage Knight mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "recover-power" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "power-word-shield" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "Religion", "Medicine", "Perception", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "power-word-barrier" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "power-word-reinforce" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-lifesaver" }
  ],
  abilities: {
    "recover-power": {
      name: "Recover Power", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: At the end of an encounter, regain HP equal to half your remaining temporary HP." ]
    },
    "power-word-shield": {
      name: "Power Word: Shield", kind: "ability",
      cost: "2 AP, 3 MP", range: "40ft", keywords: ["Shield", "Spell"], requires: null,
      summary: [ "Target gains temporary HP equal to 11 + (2 x Power) until the encounter ends." ]
    },
    "power-word-barrier": {
      name: "Power Word: Barrier", kind: "ability",
      cost: "2 AP, 1 RP, 4 MP", range: "40ft", keywords: ["Shield", "Spell"], requires: null,
      note: "Pay either the AP or the RP part of the cost, not both.",
      summary: [ "Up to 5 allies in range (you can include yourself) gain temporary HP equal to 10 + Power until the encounter ends." ]
    },
    "power-word-reinforce": {
      name: "Power Word: Reinforce", kind: "ability",
      cost: "1 RP", range: "40ft", keywords: ["Aid", "Shield"], requires: "An ally is the target of an attack.",
      summary: [ "The ally's temporary HP is tripled (gains 2x its current amount) for the attack. Afterwards it resets to the earlier value, unless it's already lower." ]
    },
    "secret-art-lifesaver": {
      name: "Secret Art: Lifesaver", kind: "ultimate",
      cost: "4 AP, 5 MP", range: "40ft", keywords: ["Secret Art", "Shield", "Spell"], requires: null,
      summary: [ "Target gains temporary HP equal to its missing HP until the encounter ends." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SHINIGAMI EYES  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("shinigami-eyes", {
  name: "Shinigami Eyes",
  url: "https://lyrian.splatpass.net/classes/shinigami-eyes/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Any class mastered, must have the Touched by Death breakthrough. Must have at least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "death-perception-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "true-death" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "line-of-death" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "point-of-death" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-seventeen-dissection" }
  ],
  abilities: {
    "death-perception-key": {
      name: "Death Perception (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "death-perception",
      grants: { mysticEye: "Shinigami Eye" },
      summary: [
        "Benefit 1: You can use Death Perception.",
        "Benefit 2: One eye becomes a Shinigami Eye, usable for Mystic Eye abilities of that type (an eye can only be one mystic eye type)."
      ]
    },
    "death-perception": {
      name: "Death Perception", kind: "granted", grantedBy: "death-perception-key",
      cost: "0 AP, 1 MP", range: "Sight", keywords: ["Mystic Eye"], requires: null,
      summary: [ "See the approximate HP % of all living units in your line of sight until combat ends (DM shows health bars). Units that join later need another use." ]
    },
    "true-death": {
      name: "True Death", kind: "ability",
      cost: "No listed cost", range: "-", keywords: [], requires: null,
      summary: [ "Passive: damage from your melee weapon attacks also lowers the target's max HP by the same amount until the encounter ends." ]
    },
    "line-of-death": {
      name: "Line of Death", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Half Pierce", "Overcharge"], requires: "Slashing weapons only.",
      summary: [ "Light attack. Overcharge: +1 mana and +1 AP for another Light attack on the same target." ]
    },
    "point-of-death": {
      name: "Point of Death", kind: "ability",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Full Pierce"],
      requires: "Target is below half its original max HP (before True Death reductions).",
      summary: [ "Heavy attack that deals maximum damage instead of rolling." ]
    },
    "secret-art-seventeen-dissection": {
      name: "Secret Art: Seventeen Dissection", kind: "ultimate",
      cost: "3 AP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Secret Art", "Sure Hit"], requires: "Slashing weapons only.",
      summary: [ "Deal 17 true damage. If that takes the target to 0 HP or below it dies immediately; a non-heroic target dies instantly regardless of HP." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SKY KNIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sky-knight", {
  name: "Sky Knight",
  url: "https://lyrian.splatpass.net/classes/sky-knight/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Utility",
  requires: "Cavalier mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "air-stability" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "aerial-crashdown" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Animal Husbandry", "Riding", "Flight", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "aerial-loop" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "flyby-attack" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-mythical-awakening" }
  ],
  abilities: {
    "air-stability": {
      name: "Air Stability", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Your Cavalier Rider & Mount As One works while flying. Damage you take while flying on a flying mount makes you lose altitude as if the mount took it." ]
    },
    "aerial-crashdown": {
      name: "Aerial Crashdown", kind: "ability",
      cost: "2 AP", range: "60ft", keywords: [], requires: "Mounted on a flying mount; target at least 20ft below you.",
      summary: [ "Move to the target; your mount makes a Heavy attack. On damage the target is knocked prone." ]
    },
    "aerial-loop": {
      name: "Aerial Loop", kind: "ability",
      cost: "1 RP, 1 MP", range: "Self or Mount", keywords: [], requires: "Mounted on a flying mount; you or your mount is targeted by a ranged attack.",
      summary: [ "You and your mount both take the Dodge action with +5 evasion against that attack." ]
    },
    "flyby-attack": {
      name: "Flyby Attack", kind: "ability",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Sidestep"], requires: "Mounted on a flying mount.",
      summary: [ "Sidestep up to your speed. At any point, spend 1 AP for a Light or 2 AP for a Heavy weapon attack; afterwards you can change direction for the rest of the move." ]
    },
    "secret-art-mythical-awakening": {
      name: "Secret Art: Mythical Awakening", kind: "ultimate",
      cost: "No listed cost", range: "Self", keywords: ["Secret Art"], requires: "Mounted on one of the mounts named below.",
      subAbilities: [
        { name: "Pegasus - Bellerophon", cost: "1 RP, 2 Mana", summary: "Sidestep toward a target within 60ft and make a Heavy attack with Lock-on." },
        { name: "Wyvern - Reginliev", cost: "2 AP, 2 Mana", summary: "Heavy attack on all enemies in a 5ft line to a point within 60ft, plus all enemies within 10ft of that point; each enemy hit once at most." },
        { name: "Dragonfly - Darting Mirage", cost: "0 AP, 4 Mana", summary: "Illusion: until the start of your next turn, attacks on you or your mount automatically miss unless they crit or have Sure Hit." }
      ],
      summary: [ "Channel power into your mount for a mount-specific attack using the mount's stats (see subAbilities)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SKY TALON STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sky-talon-style", {
  name: "Sky Talon Style",
  url: "https://lyrian.splatpass.net/classes/sky-talon-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "boundless-wind" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "master-of-the-empty-sky" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Flight", "Perception", "Intimidation", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "heavenfall-descent" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "swift-wind-palm" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "cloud-piercing-claw" }
  ],
  abilities: {
    "boundless-wind": {
      name: "Boundless Wind", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "boundless-wind-stance",
      summary: [ "Benefit 1: You can use Boundless Wind Stance." ]
    },
    "boundless-wind-stance": {
      name: "Boundless Wind Stance", kind: "granted", grantedBy: "boundless-wind",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [
        "Unarmed aerial stance: you may Hover and Fly up to your speed. If you already have a natural fly speed or the Flight racial ability, your fly speed +10ft.",
        "Lasts until you enter another stance or attack with anything other than a melee attack or an Unarmed Strike ability."
      ]
    },
    "master-of-the-empty-sky": {
      name: "Master of the Empty Sky", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Passive: while flying, +2 Cover bonus to Evasion and Dodge against ranged attacks." ]
    },
    "heavenfall-descent": {
      name: "Heavenfall Descent", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Unarmed Strike", "Blanketing", "Rage"],
      requires: "Airborne, between 20ft and 120ft above the ground.",
      summary: [ "Crash down with no falling damage (you may land up to 20ft away horizontally) and make a Light attack against all enemies within 5ft." ]
    },
    "swift-wind-palm": {
      name: "Swift Wind Palm", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Sidestep", "Lock On"],
      requires: "You and the target are both airborne.",
      summary: [
        "Light attack. On damage, knock the target down 30ft (or to the floor), on top of normal height loss from being hit while flying. You may then Sidestep next to it.",
        "If it hits the ground it's knocked prone and takes normal falling damage, but not the extra damage for being knocked into the floor."
      ]
    },
    "cloud-piercing-claw": {
      name: "Cloud Piercing Claw", kind: "ultimate",
      cost: "1 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Sidestep", "Combo"], requires: null,
      summary: [
        "Light attack. On damage, the target is knocked 20ft into the air until the end of your turn (drops immediately if used outside your turn); not knocked prone but takes normal fall damage.",
        "Afterwards you may Sidestep up to 25ft into the air, hit or not.",
        "Combo: after entering Boundless Wind Stance, mana cost -1."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SNIPER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sniper", {
  name: "Sniper",
  url: "https://lyrian.splatpass.net/classes/sniper/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Striker",
  secondary: null,
  requires: "Marksman or Scout mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "snipe" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "penetrating-shot" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "concealed-shot" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "aimed-shot" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "killshot" }
  ],
  abilities: {
    "snipe": {
      name: "Snipe", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Sniper Rifle proficiency.",
        "Benefit 2: If you didn't move this turn or last turn, +1d4 Snipe bonus to accuracy with Sniper Rifles."
      ]
    },
    "penetrating-shot": {
      name: "Penetrating Shot", kind: "ability",
      cost: "2 AP, 1 MP", range: "Ranged Weapon Range", keywords: [], requires: "Sniper Rifles only.",
      summary: [ "Heavy attack that goes through thin cover such as wooden planks (GM decides), ignoring that cover bonus." ]
    },
    "concealed-shot": {
      name: "Concealed Shot", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Hiding", "Stealth"], requires: "After attacking with a Sniper Rifle while stealthed.",
      summary: [ "Gain the Hiding state against anyone you have cover or concealment from." ]
    },
    "aimed-shot": {
      name: "Aimed Shot", kind: "ability",
      cost: "2 AP, 2 MP", range: "Ranged Weapon Range", keywords: ["Lock On"], requires: null,
      refund: { overlapsWith: ["Deadeye"], amount: "full",
                note: "Page says a refund is possible and that Deadeye also grants this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [ "Heavy attack." ]
    },
    "killshot": {
      name: "Killshot", kind: "ultimate",
      cost: "4 AP", range: "Ranged Weapon Range", keywords: ["Trick Attack"], requires: "Sniper Rifles only.",
      summary: [
        "Heavy attack that deals double Heavy damage.",
        "If fired in round 1 while all enemies are unaware of you, the target must spend 1 extra RP to react (stacks with Trick Attack; doesn't work vs abilities that negate surprise/stealth attacks, e.g. Instinct)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SORCERER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sorcerer", {
  name: "Sorcerer",
  url: "https://lyrian.splatpass.net/classes/sorcerer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "sorcerers-journey" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "magic-blast" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Deception", "Medicine", "Magic", "Religion", "History", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "arcane-rapidfire" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "arcane-blast" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "circuit-reset" }
  ],
  abilities: {
    "sorcerers-journey": {
      name: "Sorcerer's Journey", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { mastery: "Arcane", skill: "Magic", points: 5, expertiseTrade: true },
      summary: [
        "Benefit 1: Proficiency with Channeling Weapons and Light Armor.",
        "Benefit 2: +5 Magic skill points; any point can be traded for 2 expertise points in Magic.",
        "Benefit 3: Gain Arcane Mastery. When you master this class, you may master one more element of your choice."
      ]
    },
    "magic-blast": {
      name: "Magic Blast", kind: "ability",
      cost: "1 AP", range: "40ft", keywords: ["Spell", "Rapid"], requires: null,
      summary: [ "Light (1 AP), Heavy (2 AP) or Precise (2 AP) attack dealing Arcane damage. If you've mastered an element, you may use that element instead." ]
    },
    "arcane-rapidfire": {
      name: "Arcane Rapidfire", kind: "ability",
      cost: "2 AP, 3 MP", range: "60ft", keywords: ["Spell", "Arcane", "Circuit"], requires: null,
      summary: [ "4 Light attacks against one target, each dealing Arcane damage." ]
    },
    "arcane-blast": {
      name: "Arcane Blast", kind: "ability",
      cost: "1 AP, 3 MP", range: "60ft", keywords: ["Spell", "Circuit"], requires: null,
      summary: [ "One Heavy attack dealing Arcane damage." ]
    },
    "circuit-reset": {
      name: "Circuit Reset", kind: "ultimate",
      cost: "1 AP", range: "Self", keywords: [], requires: null,
      summary: [ "Reset your circuits so you can benefit from the Circuit effect again." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SPEARMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("spearmaster", {
  name: "Spearmaster",
  url: "https://lyrian.splatpass.net/classes/spearmaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Lancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "versatile-range" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "draw-in" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Riding", "Intimidation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "wild-thrusts" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "spear-charge" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-gae-bolg" }
  ],
  abilities: {
    "versatile-range": {
      name: "Versatile Range", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: On your turn you may declare your polearm threatens 5ft instead of 5-10ft, until the start of your next turn." ]
    },
    "draw-in": {
      name: "Draw-In", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Combo"], requires: "Polearm only.",
      summary: [ "Light attack; on damage pull the target up to 5ft toward you. Combo: after Lunge, range and pull are doubled (10ft pull) and the Lunge effect is used up." ]
    },
    "wild-thrusts": {
      name: "Wild Thrusts", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Scatter"], requires: "Polearm only.",
      summary: [
        "Light attack on all enemies in a 15ft-wide, 10ft-long box in front of you.",
        "Until the start of your next turn you may make attacks of opportunity against any enemy moving through the box, but no other attacks of opportunity. Cancel for 0 RP."
      ]
    },
    "spear-charge": {
      name: "Spear Charge", kind: "ability",
      cost: "Variable AP", range: "Self", keywords: [], requires: "Polearm only.",
      summary: [
        "Spend 2 or 4 AP as movement, then spend half that (1 or 2 AP) on one Light or Heavy attack with +1 damage per 10ft moved (max +10).",
        "With 4 AP you may use Wild Thrusts instead (bonus only on the initial attack; Wild Thrusts costs 0 mana)."
      ]
    },
    "secret-art-gae-bolg": {
      name: "Secret Art: Gae Bolg", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Secret Art", "Sure Hit"], requires: "Polearm only.",
      summary: [ "Heavy attack. Unless the accuracy roll is a 1, treat it as a 20 with Sure Hit; it counts as a critical hit unless the target blocks." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SPELL BLADEMASTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("spell-blademaster", {
  name: "Spell Blademaster",
  url: "https://lyrian.splatpass.net/classes/spell-blademaster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Spellblade mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "draw-elements-ii-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "spellblades-preparation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "Magic", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "elemental-sweep" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "double-elements" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-spectrum-blade" }
  ],
  abilities: {
    "draw-elements-ii-key": {
      name: "Draw Elements II (key)", kind: "key",
      cost: null, range: "Self", keywords: [], requires: null,
      grantsAbility: "draw-elements-ii",
      summary: [ "Benefit 1: You can use Draw Elements II." ]
    },
    "draw-elements-ii": {
      name: "Draw Elements II", kind: "granted", grantedBy: "draw-elements-ii-key",
      cost: "0 AP", range: "Self", keywords: ["Quick"], requires: null,
      summary: [ "Choose an element; you count as having mastered it until the start of your next turn." ]
    },
    "spellblades-preparation": {
      name: "Spellblade's Preparation", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Enchantment", "Encounter Start"], requires: null,
      summary: [ "Encounter Start: draw a melee weapon and enchant it with a mastered element (deals that element's damage) and +1 Power to attacks until the encounter ends. Lost if you aren't holding it at the start of your turn." ]
    },
    "elemental-sweep": {
      name: "Elemental Sweep", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Burning", "Soaked", "Static", "Slow", "Blinded", "Blanketing"], requires: null,
      summary: [
        "Light attack against all enemies in range. On damage, add an effect by damage type (pick any if it has several types):",
        "Arcane: target loses 1 mana. Fire: Burning (Power x 3). Water: Soaked (Power / 2, rounded down) until it takes Lightning damage. Lightning: Static (Power x 3).",
        "Earth/Frost: Slowed until the start of your next turn. Wind: push 10ft. Holy: you gain temporary HP equal to Power + 5. Dark: Blinded 5 until after its next attack."
      ]
    },
    "double-elements": {
      name: "Double Elements", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick"], requires: null,
      summary: [ "Your next Elemental Strike or Elemental Sweep this turn can add the effect of a second, different mastered element." ]
    },
    "secret-art-spectrum-blade": {
      name: "Secret Art: Spectrum Blade", kind: "ultimate",
      cost: "1 AP, 2 MP", range: "Self", keywords: ["Enchantment", "Secret Art"], requires: null,
      summary: [
        "Until the encounter ends your weapon has every element: Elemental Strike/Sweep may use any effect, and damage uses whichever type deals the most.",
        "Weapon gains +1 Power (or +2 total if it already had +1 Power from an enchantment). Lost if you aren't holding it at the start of your turn."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SPELLBLADE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("spellblade", {
  name: "Spellblade",
  url: "https://lyrian.splatpass.net/classes/spellblade/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Have at least 1 spell, Have one element mastered, Be proficient in 1 weapon.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "draw-elements-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "imbue-weapon" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "Magic", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "elemental-strike" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "spellstrike" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "greater-imbue-weapon" }
  ],
  abilities: {
    "draw-elements-key": {
      name: "Draw Elements (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "draw-elements",
      summary: [ "Benefit 1: You can use Draw Elements." ]
    },
    "draw-elements": {
      name: "Draw Elements", kind: "granted", grantedBy: "draw-elements-key",
      cost: "0 AP, 1 MP", range: "-", keywords: [], requires: null,
      summary: [ "Choose an element; you count as having mastered it until the start of your next turn." ]
    },
    "imbue-weapon": {
      name: "Imbue Weapon", kind: "ability",
      cost: "1 AP", range: "Self", keywords: ["Enchantment"], requires: null,
      summary: [ "Enchant your melee weapon with a mastered element; it deals that element's damage instead. Lost if you aren't holding it at the start of your turn." ]
    },
    "elemental-strike": {
      name: "Elemental Strike", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Burning", "Soaked", "Static", "Slow", "Blinded", "Sunder"], requires: null,
      summary: [
        "Light attack. On damage, add an effect by damage type (pick any if it has several types):",
        "Arcane: target loses 1 mana. Fire: Burning (Power x 3). Water: Soaked (Power / 2, rounded down) until it takes Lightning damage. Lightning: Static (Power x 3).",
        "Frost: Slowed until the start of your next turn. Earth: Sundered (Power) until it next takes damage. Wind: push 10ft. Holy: you gain temporary HP equal to Power + 3. Dark: Blinded 5 until after its next attack."
      ]
    },
    "spellstrike": {
      name: "Spellstrike", kind: "ability",
      cost: "No listed cost", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [
        "Pick a Spell-keyword attack ability you have and make a melee attack, paying that spell's AP and mana. It works like the spell but doesn't provoke attacks of opportunity and isn't 'casting a Spell' (usable while Raging; Anti-Spell doesn't stop it).",
        "Area spells use the struck target as the target point. The chosen spell can't be used again that round. Using a Secret Art this way counts as your Secret Art for the encounter. Only spells that are attacks."
      ]
    },
    "greater-imbue-weapon": {
      name: "Greater Imbue Weapon", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "Self", keywords: ["Enchantment"], requires: null,
      summary: [ "As Imbue Weapon, plus the weapon gains +1 Power. Lost if you aren't holding it at the start of your turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// STARCALLER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("starcaller", {
  name: "Starcaller",
  url: "https://lyrian.splatpass.net/classes/starcaller/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Mage or Sorcerer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "celestial-artillery" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "starfall" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "corona-burst" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "stardust-reverie" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "starlance" }
  ],
  abilities: {
    "celestial-artillery": {
      name: "Celestial Artillery", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "comet",
      summary: [
        "Benefit 1: Outdoors, against enemies more than 80ft away, your Celestial spells gain the Artillery keyword.",
        "Benefit 2: You can use Comet."
      ]
    },
    "comet": {
      name: "Comet", kind: "granted", grantedBy: "celestial-artillery",
      cost: "1 AP", range: "240ft", keywords: ["Spell", "Celestial"], requires: null,
      summary: [ "Light (1 AP) or Heavy (2 AP) attack dealing Arcane damage." ]
    },
    "starfall": {
      name: "Starfall", kind: "ability",
      cost: "2 AP", range: "360ft", keywords: ["Spell", "Celestial", "Active"], requires: null,
      summary: [ "Target a 25x25 area. At the start of your next turn 4 stars fall: 4 Light Arcane attacks split as evenly as possible among enemies in the area (an enemy can be hit more than once if there are fewer enemies than stars)." ]
    },
    "corona-burst": {
      name: "Corona Burst", kind: "ability",
      cost: "2 AP, 1 MP", range: "240ft", keywords: ["Spell", "Celestial"], requires: null,
      summary: [ "Heavy attack dealing Fire damage, +1 damage per 20ft between you and the target (max +12)." ]
    },
    "stardust-reverie": {
      name: "Stardust Reverie", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Spell", "Celestial", "Upkeep"], requires: null,
      usage: "Upkeep: 1 mana; when you pay it you may change the dome's distance.",
      summary: [
        "Pick a distance up to 60ft and make a celestial dome at that distance from you. Until the start of your next turn, when a creature willingly crosses that distance, you may make a Light Arcane attack against it (spend 1 RP first to make it Heavy).",
        "Creatures that Sidestep or Teleport through don't trigger it."
      ]
    },
    "starlance": {
      name: "Starlance", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "120ft", keywords: ["Spell", "Celestial", "Pinpoint"], requires: null,
      summary: [ "Precise attack dealing Arcane damage." ]
    }
  }
});

// ---------------------------------------------------------------------------
// STILL STONE STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("still-stone-style", {
  name: "Still Stone Style",
  url: "https://lyrian.splatpass.net/classes/still-stone-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Defender",
  secondary: "Striker",
  requires: "Cultivator or Martial Artist mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "shielding-fist" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "steadfast-earth-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "hardening-fist" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "earthen-guardian" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-jade-skin" }
  ],
  abilities: {
    "shielding-fist": {
      name: "Shielding Fist", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: With at least 1 empty hand and no shield, +4 Shield bonus to your Block." ]
    },
    "steadfast-earth-stance": {
      name: "Steadfast Earth Stance", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance"], requires: "Not wearing any armor (including armor plates).",
      summary: [ "+2 guard and +6 Block until you enter a different stance." ]
    },
    "hardening-fist": {
      name: "Hardening Fist", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Combo"], requires: null,
      summary: [
        "Light attack, then gain Hardening Fist until the start of your next turn: +2 guard, +8 Block, -4 evasion (including dodge).",
        "Combo: after Steadfast Earth Stance, mana cost -1."
      ]
    },
    "earthen-guardian": {
      name: "Earthen Guardian", kind: "ability",
      cost: "1 RP, 2 MP", range: "40ft", keywords: ["Sidestep", "Jump"],
      requires: "In Steadfast Earth Stance; an ally in range is targeted by an attack.",
      summary: [ "Jump and sidestep to the ally. The attack targets you instead and you automatically Block it." ]
    },
    "secret-art-jade-skin": {
      name: "Secret Art: Jade Skin", kind: "ultimate",
      cost: "0 RP, 2 MP", range: "Self", keywords: ["Secret Art", "Disarm"], requires: "You are attacked by a Melee attack.",
      summary: [ "Block the attack. If you reduce its damage to 0, the attacker is Disarmed until the start of its next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// STILL STONE TESTAMENT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("still-stone-testament", {
  name: "Still Stone Testament",
  url: "https://lyrian.splatpass.net/classes/still-stone-testament/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Defender",
  secondary: null,
  requires: "Still Stone Style mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "enduring-earth" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "seismic-reversal" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mountains-verdict" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "stone-rebuke" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "unmoving-mountain" }
  ],
  abilities: {
    "enduring-earth": {
      name: "Enduring Earth", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Use your Encounter Start to enter Steadfast Earth Stance for 0 mana.",
        "Benefit 2: That stance's benefit lasts until the encounter ends even if you leave it, and you count as in Earth Stance for abilities that need it.",
        "Benefit 3: After using Hardening Fist, you may make its effect last until the encounter ends (end it for 0 AP)."
      ]
    },
    "seismic-reversal": {
      name: "Seismic Reversal", kind: "ability",
      cost: "0 RP, 2 MP", range: "Self", keywords: ["Circuit"], requires: "You reduced a melee attack's damage against you to 0.",
      summary: [
        "Grab the attacker's weapon or arm, pull it next to you and slam it Prone. Not vs targets more than 1 size larger than you.",
        "Also usable after the attack resolves on a target within 10ft that defies your Mandate."
      ]
    },
    "mountains-verdict": {
      name: "Mountain's Verdict", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Active", "Mandate"], requires: null,
      summary: [ "Light attack; on damage apply Mandate. Your next Stone Rebuke on that target before the start of your next turn gains Lockstep." ]
    },
    "stone-rebuke": {
      name: "Stone Rebuke", kind: "ability",
      cost: "0 RP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Unbalanced"], requires: "The target has defied your Mandate.",
      summary: [ "Light attack; on damage the target becomes Unbalanced." ]
    },
    "unmoving-mountain": {
      name: "Unmoving Mountain", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Mandate"], requires: "You must be in Earth Stance.",
      summary: [ "Let an attack wash over you: it doesn't raise your guard, but you can still reduce its damage to 0 if your guard is high enough. If you took no damage, inflict Mandate on the attacker." ]
    }
  }
});

// ---------------------------------------------------------------------------
// STRATEGIST  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("strategist", {
  name: "Strategist",
  url: "https://lyrian.splatpass.net/classes/strategist/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Support",
  secondary: null,
  requires: "Tactician mastered",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "sound-the-retreat-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "wall-formation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Deception", "Stealth", "Appraise", "History", "Magic", "Perception", "Intimidation", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "feigned-retreat" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "anvil-tactics" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-shock-and-awe" }
  ],
  abilities: {
    "sound-the-retreat-key": {
      name: "Sound the retreat (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "sound-the-retreat",
      summary: [ "Benefit 1: You can use Sound the retreat." ]
    },
    "sound-the-retreat": {
      name: "Sound the retreat", kind: "granted", grantedBy: "sound-the-retreat-key",
      cost: "4 AP", range: "Self", keywords: ["Sidestep"], requires: null,
      summary: [ "Sidestep up to 4x your speed, as far from visible enemies as possible. Then each ally may sidestep up to 2x their speed toward you." ]
    },
    "wall-formation": {
      name: "Wall Formation", kind: "ability",
      cost: "1 AP, 1 MP", range: "40ft", keywords: [], requires: null,
      summary: [ "Until the start of your next turn, allies in range gain Wall Formation: an ally adjacent to another ally gets +1 guard and +4 block value." ]
    },
    "feigned-retreat": {
      name: "Feigned Retreat", kind: "ability",
      cost: "2 AP, 1 MP", range: "40ft", keywords: ["Sidestep"], requires: null,
      summary: [
        "Allies in a 15x15 area in range may sidestep up to their speed toward you.",
        "An ally who leaves an enemy's melee range and ends outside every enemy's melee range may make an attack of opportunity against the first enemy to enter their melee range before the start of their next turn."
      ]
    },
    "anvil-tactics": {
      name: "Anvil Tactics", kind: "ability",
      cost: "1 AP, 1 MP", range: "80ft", keywords: [], requires: null,
      summary: [ "One ally in range may move up to their speed. If they end in melee range of an enemy with another ally directly opposite that enemy, they may make an attack of opportunity with Lock On." ]
    },
    "secret-art-shock-and-awe": {
      name: "Secret Art: Shock & Awe", kind: "ultimate",
      cost: "4 AP, 1 MP", range: "40ft", keywords: ["Secret Art"], requires: null,
      summary: [ "You and up to 3 allies in range each gain 3 AP to spend immediately; each regains 1 less AP on their next turn. Not for Setup abilities; normal once-per-turn limits apply." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SUMMONER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("summoner", {
  name: "Summoner",
  url: "https://lyrian.splatpass.net/classes/summoner/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "summoning-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "channel-eidolon" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "summon-lesser-eidolon" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "unsummon" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-summon-eidolon" }
  ],
  abilities: {
    "summoning-basics": {
      name: "Summoning Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "attune-eidolon",
      summary: [
        "Benefit 1: Channel for 10 minutes to reach a space between worlds where willing Eidolons can be met.",
        "Benefit 2: You can use Attune Eidolon."
      ]
    },
    "attune-eidolon": {
      name: "Attune Eidolon", kind: "granted", grantedBy: "summoning-basics",
      cost: "2 AP", range: "Self", keywords: ["Encounter Start"], requires: "You have an Eidolon you're contracted to.",
      summary: [ "Attune to an Eidolon (pay any attunement cost; activate its Passive). Grants its Channel Eidolon, Summon Lesser Eidolon and Secret Art: Summon Eidolon once you reach those levels. As Encounter Start it costs no AP." ]
    },
    "channel-eidolon": {
      name: "Channel Eidolon", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      summary: [ "Use the ability your attuned Eidolon grants; costs and effects come from the attunement (see Eidolon pages)." ]
    },
    "summon-lesser-eidolon": {
      name: "Summon Lesser Eidolon", kind: "ability",
      cost: "No listed cost", range: "30ft", keywords: ["Summon", "Spell", "Upkeep"], requires: null,
      summary: [
        "Your Eidolon sends minions; summon and costs depend on attunement. Lasts up to 5 minutes; pay the upkeep in the summon's Summon skill or it vanishes.",
        "Unless its skill says otherwise it acts after you and can't act the round it's summoned (except RP actions)."
      ]
    },
    "unsummon": {
      name: "Unsummon", kind: "ability",
      cost: "3 AP", range: "Self", keywords: ["Encounter Conclusion"], requires: "You have an active Eidolon or Lesser Eidolon.",
      refund: { overlapsWith: [], amount: "Half the summon's mana cost", note: "Recover mana equal to half the summon's mana cost." },
      summary: [ "Unsummon your Eidolon or Lesser Eidolon (also usable as Encounter Conclusion) and recover half its mana cost." ]
    },
    "secret-art-summon-eidolon": {
      name: "Secret Art: Summon Eidolon", kind: "ultimate",
      cost: "No listed cost", range: "30ft", keywords: ["Summon", "Spell", "Upkeep", "Secret Art", "Overcharge"], requires: null,
      summary: [
        "Your Eidolon sends a proxy of itself; costs depend on attunement. Lasts up to 5 minutes; pay its upkeep or it vanishes. Acts after you and can't act the round it's summoned (except RP actions) unless its skill says otherwise.",
        "Overcharge: 5 mana lets it act on the turn it's summoned."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SWASHBUCKLER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("swashbuckler", {
  name: "Swashbuckler",
  url: "https://lyrian.splatpass.net/classes/swashbuckler/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Controller",
  secondary: null,
  requires: "Fighter, Rogue, Ranger, Cultivator, Adventurer, Maid or Forager mastered. Proficient in Light Swords.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "take-the-advantage" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "staggering-slice" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Stealth", "Athletics", "Roguecraft", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "deckbreaker" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "dust-kick" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "exposing-edge" }
  ],
  abilities: {
    "take-the-advantage": {
      name: "Take the advantage", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: +1 accuracy on attacks against a target with Offstep, Stagger or Blinded." ]
    },
    "staggering-slice": {
      name: "Staggering Slice", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Stagger"], requires: "One-Handed weapons only.",
      summary: [ "Light attack; on damage Stagger 1 until the end of your next turn (Stagger 2 under Exposing Edge)." ]
    },
    "deckbreaker": {
      name: "Deckbreaker", kind: "ability",
      cost: "1 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Offstep", "Lock On"], requires: "One-Handed weapons only.",
      summary: [ "Light attack; on damage the target has Offstep on its next attack against you. Mana cost -1 if the target has Stagger. Under Exposing Edge it gains Lock On (Lock On is listed as a keyword regardless)." ]
    },
    "dust-kick": {
      name: "Dust Kick", kind: "ability",
      cost: "1 RP, 1 MP", range: "5ft", keywords: ["Blinded"],
      requires: "Within 5ft of the ground. You or an ally is attacked by an enemy in range.",
      summary: [ "The attacker is Blinded 3 (Blinded 5 under Exposing Edge) until the attack resolves. If the attack misses, you may push it 5ft in any horizontal direction." ]
    },
    "exposing-edge": {
      name: "Exposing Edge", kind: "ultimate",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance", "Upkeep"], requires: null,
      usage: "Upkeep: 1 AP or 1 mana to continue.",
      summary: [ "Sharpen your blades: enhances your debuffs (see Staggering Slice, Deckbreaker, Dust Kick)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// SWORD PALADIN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sword-paladin", {
  name: "Sword Paladin",
  url: "https://lyrian.splatpass.net/classes/sword-paladin/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Human.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "divine-weapon" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "mark-of-justice" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "justice-blade" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "paragon-of-virtue" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "divine-smite" }
  ],
  abilities: {
    "divine-weapon": {
      name: "Divine Weapon", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      refund: { overlapsWith: ["Gun Paladin", "Shield Paladin"], amount: "full",
                note: "Page says a refund is possible and that Gun Paladin and Shield Paladin also grant this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Your weapon attacks may deal your chosen Divine damage type instead (declare before the accuracy roll).",
        "Benefit 2: Your weapon can shed light like a lantern; toggling it costs 1 AP."
      ]
    },
    "mark-of-justice": {
      name: "Mark of Justice", kind: "ability",
      cost: "1 AP", range: "120ft", keywords: [], requires: null,
      summary: [
        "Mark one enemy until the encounter ends: its speed becomes 20ft and movement abilities move it at most 20ft per use (Secret and Esoteric Arts unaffected). One mark at a time; not on vehicles.",
        "The marked target can pay 1 mana per AP/RP of the action (min 1, even for 0 AP) to ignore this for one movement action."
      ]
    },
    "justice-blade": {
      name: "Justice Blade", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: "The target has your Mark of Justice.",
      summary: [ "Heavy attack." ]
    },
    "paragon-of-virtue": {
      name: "Paragon of Virtue", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [], requires: null,
      summary: [ "Remove one negative non-physical effect from yourself (e.g. fear or charm, not bleed); you choose if several qualify." ]
    },
    "divine-smite": {
      name: "Divine Smite", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Divine"], requires: "The target has your Mark of Justice.",
      summary: [
        "Heavy attack dealing Holy damage. If the target's HP is below the attack's maximum possible damage, it gains Full Pierce and deals maximum damage instead of rolling.",
        "That check uses base damage only (weapon base + Power); other bonuses (e.g. Heavy Blade bonus, Anathema) aren't counted or maximised."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// SWORD SAINT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("sword-saint", {
  name: "Sword Saint",
  url: "https://lyrian.splatpass.net/classes/sword-saint/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Iaido style mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "resheathe-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "kiri-tsuke-ii" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Intimidation", "History", "Insight", "Art", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "flash-cut" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Awareness", "Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "chiburi-noto-ii" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-tsubame-gaeshi" }
  ],
  abilities: {
    "resheathe-key": {
      name: "Resheathe (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "resheathe",
      summary: [ "Benefit 1: You can use Resheathe." ]
    },
    "resheathe": {
      name: "Resheathe", kind: "granted", grantedBy: "resheathe-key",
      cost: "4 AP", range: "Self", keywords: [], requires: "Not in Iai state.",
      summary: [ "Regain the Iai state. Your next Iai strike this encounter gains Full Pierce." ]
    },
    "kiri-tsuke-ii": {
      name: "Kiri-tsuke II", kind: "ability",
      cost: "2 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Combo", "Killing Blow"], requires: "Katana only.",
      summary: [ "Heavy attack. On a Killing Blow, regain the Iai state. Combo: after an Iai Strike, AP cost -1." ]
    },
    "flash-cut": {
      name: "Flash Cut", kind: "ability",
      cost: "2 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Iaijutsu", "Sure Hit"], requires: "Katana only; must be in Iai state.",
      summary: [ "Draw, make a Heavy attack, and resheathe. Doesn't break the Iai state." ]
    },
    "chiburi-noto-ii": {
      name: "Chiburi Noto II", kind: "ability",
      cost: "No listed cost", range: "Self (Weapon)", keywords: ["Encounter Conclusion"],
      requires: "You used an Iaijutsu ability with the chosen weapon this encounter.",
      summary: [ "Clean and sheathe the katana. If your next Iai strike with it this arc hits, its Roll Damage is maximised and it gains Full Pierce." ]
    },
    "secret-art-tsubame-gaeshi": {
      name: "Secret Art: Tsubame Gaeshi", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Lock On", "Secret Art", "Sure Hit"], requires: "Katana only.",
      summary: [ "Up to 3 Heavy attacks on the target. After the first miss, later attacks gain Lock On; after the second miss, the next gains Sure Hit (only within this ability)." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TACTICIAN  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("tactician", {
  name: "Tactician",
  url: "https://lyrian.splatpass.net/classes/tactician/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Support",
  secondary: null,
  requires: "Any class mastered, 5 skill points in the history skill.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "scholar-of-tactics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "tag-rotation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["History"],
      summary: "+5 skill points in History only. Any point can be traded for 2 expertise points in History." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "order-retreat" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Awareness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "stratagem-lightning" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "attack-in-detail" }
  ],
  abilities: {
    "scholar-of-tactics": {
      name: "Scholar of Tactics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "take-cover",
      summary: [
        "Benefit 1: Pistol proficiency.",
        "Benefit 2: You can use Take Cover!"
      ]
    },
    "take-cover": {
      name: "Take Cover!", kind: "granted", grantedBy: "scholar-of-tactics",
      cost: "1 AP", range: "Light cover in sight", keywords: [], requires: null,
      summary: [ "All Low Cover in a 20x20 area becomes High Cover for you and your allies until the start of your next turn." ]
    },
    "tag-rotation": {
      name: "Tag Rotation", kind: "ability",
      cost: "1 AP or 1 RP", range: "Two adjacent ally units (or yourself and an adjacent ally) that you can see", keywords: [], requires: null,
      summary: [ "The two willing units swap places without provoking attacks of opportunity. Not allowed if it would put an ally in an invalid space." ]
    },
    "order-retreat": {
      name: "Order: Retreat", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: [], requires: null,
      summary: [ "One willing ally moves up to its Speed toward you without provoking attacks of opportunity." ]
    },
    "stratagem-lightning": {
      name: "Stratagem: Lightning", kind: "ability",
      cost: "No listed cost", range: "All allies in sight, including yourself", keywords: ["Encounter Start"], requires: null,
      summary: [ "You and all allies gain +1 Initiative and may immediately move up to your Speed." ]
    },
    "attack-in-detail": {
      name: "Attack in Detail", kind: "ultimate",
      cost: "2 AP", range: "120ft", keywords: [], requires: null,
      summary: [ "Pick an enemy. Until the start of your next turn you and your allies get +1 Damage Bonus against it and +5 Movement Speed when moving toward it." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TAVERN BRAWLER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("tavern-brawler", {
  name: "Tavern Brawler",
  url: "https://lyrian.splatpass.net/classes/tavern-brawler/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Striker",
  secondary: "Controller",
  requires: "Any class mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "improvised-weaponry" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "bottle-smash" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Survival", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "improvised-defense" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "bottle-toss" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "tackle" }
  ],
  abilities: {
    "improvised-weaponry": {
      name: "Improvised Weaponry", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "chair-grab",
      summary: [
        "Benefit 1: Improvised weapons deal the same damage as normal weapons.",
        "Benefit 2: You can use Chair Grab.",
        "Benefit 3: When you master this class, your improvised weapon attacks gain Prone."
      ]
    },
    "chair-grab": {
      name: "Chair Grab", kind: "granted", grantedBy: "improvised-weaponry",
      cost: "0 AP", range: "5ft", keywords: ["Quick"], requires: null,
      summary: [ "Grab a nearby unattended object to use as an improvised weapon." ]
    },
    "bottle-smash": {
      name: "Bottle Smash", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: ["Daze", "Prone"], requires: "Improvised weapon only.",
      summary: [ "Light attack; on damage the target is Dazed. Your improvised weapon then breaks." ]
    },
    "improvised-defense": {
      name: "Improvised Defense", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [], requires: "You become the target of an attack.",
      summary: [ "Grab a nearby item as cover against the attack while you Dodge or Block; the item decides light, heavy or full cover." ]
    },
    "bottle-toss": {
      name: "Bottle Toss", kind: "ability",
      cost: "1 AP, 1 MP", range: "20ft", keywords: ["Daze"], requires: "Improvised weapon only.",
      summary: [ "Light attack; on damage the target is Dazed. Your improvised weapon then breaks." ]
    },
    "tackle": {
      name: "Tackle", kind: "ultimate",
      cost: "0 AP", range: "5ft", keywords: [], requires: null,
      summary: [ "Heavy attack that deals no damage. On a hit, unless the target Blocked, you both fall Prone; if it Dodged, only you fall Prone." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TEMPORAL TRICKSTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("temporal-trickster", {
  name: "Temporal Trickster",
  url: "https://lyrian.splatpass.net/classes/temporal-trickster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 4,
  role: "Utility",
  secondary: "Controller",
  requires: "Time Thief mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mending" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "position-rewind" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "stasis" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "delay-time" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-double-accel" }
  ],
  abilities: {
    "mending": {
      name: "Mending", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: Spend an EP to restore a Broken item (some items, e.g. consumables, can't be repaired - GM's call)." ]
    },
    "position-rewind": {
      name: "Position Rewind", kind: "ability",
      cost: "0 RP, 1 MP", range: "2000ft", keywords: ["Stealth", "Teleport"], requires: null,
      summary: [ "Teleport back to where you were at the start of your last turn (mark it with a token)." ]
    },
    "stasis": {
      name: "Stasis", kind: "ability",
      cost: "2 AP", range: "40ft", keywords: [], requires: null,
      summary: [ "A Grunt or a willing ally is in Stasis until the start of your next turn: can't be affected by abilities, attacks or similar, and can't act." ]
    },
    "delay-time": {
      name: "Delay Time", kind: "ability",
      cost: "0 RP, 1 MP", range: "40ft", keywords: ["Stealth"], requires: null,
      summary: [
        "Pick negative effects on the target that trigger at the start or end of its turn; each triggers on the following turn instead (each effect only once). Can delay Stasis even though Stasis blocks abilities.",
        "The page also says start-of-turn effects still trigger at the start and end-of-turn ones at the end (wording unclear, see ISSUES.md)."
      ]
    },
    "secret-art-double-accel": {
      name: "Secret Art: Double Accel", kind: "ultimate",
      cost: "0 AP", range: "Self", keywords: ["Secret Art", "Stealth"], requires: null,
      summary: [ "Gain 4 AP. Your AP recovery is 3 lower until the end of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// THIEF  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("thief", {
  name: "Thief",
  url: "https://lyrian.splatpass.net/classes/thief/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Utility",
  secondary: null,
  requires: "Be a rabbitfolk or have Rogue mastered and possess the Decipher Magic ability.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "infiltrate" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "fast-hands" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Appraise", "Athletics", "Stealth", "Deception", "Roguecraft", "Perception", "Insight", "Negotiation", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "snatch" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "quick-getaway" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "spellsteal" }
  ],
  abilities: {
    "infiltrate": {
      name: "Infiltrate", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: When using Decipher Magic you may use Roguecraft instead of Magic, and you may modify the effect so it no longer affects you and your allies instead of disabling it." ]
    },
    "fast-hands": {
      name: "Fast Hands", kind: "ability",
      cost: "0 AP", range: "-", keywords: ["Quick", "Stealth"], requires: null,
      summary: [ "Your next Interact with object action this turn costs 1 less AP." ]
    },
    "snatch": {
      name: "Snatch", kind: "ability",
      cost: "0 RP", range: "5ft", keywords: ["Stealth"], requires: "At least 1 hand free.",
      summary: [ "When a target in range uses Interact with object, take the object if you can hold it in one hand. The AP they spent isn't refunded." ]
    },
    "quick-getaway": {
      name: "Quick Getaway", kind: "ability",
      cost: "2 AP", range: "-", keywords: ["Combo", "Stealth"], requires: null,
      summary: [ "Move as if you'd spent 2 AP on movement. Combo: after Feint or Disengage, AP cost -2 (0 AP)." ]
    },
    "spellsteal": {
      name: "Spellsteal", kind: "ultimate",
      cost: "2 AP, Variable MP", range: "5ft", keywords: [], requires: null,
      summary: [
        "Take an effect off the target and apply it to yourself for the same duration (if you meet its requirements), paying mana equal to its original mana cost.",
        "Not stances, transformations or permanent effects. Can't use again until the stolen effect ends, and it can't be reapplied to the target until it fades from you. You must have seen it applied or identified it."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// TIMBERWRIGHT  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("timberwright", {
  name: "Timberwright",
  url: "https://lyrian.splatpass.net/classes/timberwright/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Artisan",
  secondary: "Striker",
  requires: "Carpenter mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "timberwrights-core-crafting-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "stable-foundation" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: null,
      options: ["Carpentry"],
      summary: "+5 skill points in Carpentry. The page doesn't mention expertise trading." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "strengthening-the-bond" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "expertise-study-carpentry" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Focus", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-beaver-timber-fang" }
  ],
  abilities: {
    "timberwrights-core-crafting-key": {
      name: "Timberwright's Core Crafting (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "timberwrights-core-crafting",
      summary: [
        "Benefit 1: You can use the Timberwright's Core Crafting abilities.",
        "Benefit 2: You can craft with Ash and Yew materials."
      ]
    },
    "timberwrights-core-crafting": {
      name: "Timberwright's Core Crafting", kind: "granted", grantedBy: "timberwrights-core-crafting-key",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Carpenter's Modification B", cost: "X Crafting Points", summary: "Add a B-Type modification to a weapon or tool (see Universal Weapon page and the weapon's page); each modification has its own cost." }
      ],
      summary: [ "Crafting abilities (see subAbilities). X isn't defined on this page." ]
    },
    "stable-foundation": {
      name: "Stable Foundation", kind: "ability",
      cost: "No listed cost (1 Crafting Die)", range: null, keywords: [], requires: "Must be the first crafting die of the session.",
      summary: [ "Make a crafting check; afterwards no crafting die this session can roll below 3." ]
    },
    "strengthening-the-bond": {
      name: "Strengthening the Bond", kind: "ability",
      cost: "0 AP or 1 RP", range: "5ft", keywords: [], requires: "A willing ally within 10ft.",
      summary: [ "Swap places with the ally without provoking attacks of opportunity (not into an invalid space). You may take a 5ft step before or after, but the swap must happen." ]
    },
    "expertise-study-carpentry": {
      name: "Expertise Study (Carpentry)", kind: "ability",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      grants: { expertise: "5 in each of 3 different carpentry crafts", proficiency: "One carpentry weapon (including specialized) or artifice chainsaws" },
      summary: [ "Gain 5 expertise points in each of 3 different carpentry crafts, and proficiency with one carpentry weapon of your choice (including specialized) or artifice chainsaws." ]
    },
    "secret-art-beaver-timber-fang": {
      name: "Secret Art: Beaver Timber Fang", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Sure Hit", "Secret Art"], requires: null,
      summary: [ "Heavy attack, then a Light attack with Sure Hit that knocks the target prone even if its damage is reduced to 0." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TIME THIEF  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("time-thief", {
  name: "Time Thief",
  url: "https://lyrian.splatpass.net/classes/time-thief/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: "Rogue mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "thefts-of-the-past" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "start-dash" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "steal-time" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "shatter-time" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-rewind" }
  ],
  abilities: {
    "thefts-of-the-past": {
      name: "Thefts of the past", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: On Roguecraft checks you may treat the object or person as it was up to an hour in the past (e.g. steal items they no longer carry, open doors before they were locked). Not in combat; consumed items can't be stolen.",
        "Benefit 2: The Delay encounter start action doesn't use up your encounter start action, and you may use it multiple times."
      ]
    },
    "start-dash": {
      name: "Start Dash", kind: "ability",
      cost: "0 AP", range: "Self", keywords: ["Quick", "Opener"], requires: "Must be the first action of your turn.",
      summary: [ "Move up to your speed. (Guidance: this movement provokes attacks of opportunity and can't be preceded by Disengage or Feint.)" ]
    },
    "steal-time": {
      name: "Steal Time", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: [], requires: null,
      summary: [ "Light attack. On damage the target gains Time Stolen (-1 Initiative) and you gain Stolen Time (+1 Initiative). Both stack." ]
    },
    "shatter-time": {
      name: "Shatter Time", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: null,
      summary: [
        "For the encounter, if you end your turn with AP left you may act right after another creature ends its turn. These extra actions don't restore AP/RP and aren't turns.",
        "Can be used several times a round while you have AP. No Setup or Active abilities during them."
      ]
    },
    "secret-art-rewind": {
      name: "Secret Art: Rewind", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "Self", keywords: ["Secret Art"], requires: "Only on your turn.",
      summary: [ "Rewind to before your last action: its results are undone and your HP, Mana, AP and RP return to earlier values. The ability used is treated as unused, but Rewind counts as used." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TRANSCENDENT LIGHTNING STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("transcendent-lightning-style", {
  name: "Transcendent Lightning Style",
  url: "https://lyrian.splatpass.net/classes/transcendent-lightning-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered, any tier 2 mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "rolling-thunder" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "heavenly-lightning-stance" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Intimidation", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "lightning-lariat" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "living-lightning" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-lightning-release" }
  ],
  abilities: {
    "rolling-thunder": {
      name: "Rolling Thunder", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: After moving at least 40ft in a turn, your next unarmed strike that turn gets +2 Transcendent Lightning bonus to accuracy and damage." ]
    },
    "heavenly-lightning-stance": {
      name: "Heavenly Lightning Stance", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Stance"], requires: null,
      summary: [
        "Your first movement each turn can pass through enemies and becomes a Sidestep. If you've mastered Sky Talon Style, this also counts as your Wind Stance.",
        "Ends when you enter another stance or attack with anything other than a melee attack or Unarmed Strike ability."
      ]
    },
    "lightning-lariat": {
      name: "Lightning Lariat", kind: "ability",
      cost: "2 AP, 1 MP", range: "Self", keywords: ["Unarmed Strike", "Overcharge", "Combo", "Trick Attack"], requires: null,
      summary: [
        "Move up to your speed in a straight line, then make a Heavy attack. If you moved more than 60ft first, it gains Trick Attack.",
        "Overcharge: spend X mana to move an extra 2 x X times your speed.",
        "Combo: after Heavenly Lightning Stance or Secret Art: Lightning Release, mana cost -1."
      ]
    },
    "living-lightning": {
      name: "Living Lightning", kind: "ability",
      cost: "1 RP", range: "Self", keywords: ["Sure Hit", "Full Pierce", "Blanketing"], requires: "Not mounted; the movement must be in a straight line.",
      summary: [ "For this movement action you become a spark: deal Light Lightning damage to every creature you pass through." ]
    },
    "secret-art-lightning-release": {
      name: "Secret Art: Lightning Release", kind: "ultimate",
      cost: "0 AP, 3 MP", range: "Self", keywords: ["Secret Art", "Transformation"], requires: null,
      summary: [
        "Until the encounter ends your unarmed attacks deal Lightning damage, and you immediately enter Heavenly Lightning Stance.",
        "While active: speed doubled; one extra attack with Double Punch; unarmed crit range 18-20; an unarmed Lightning crit arcs to another enemy within 20ft (same roll and damage, no further arcs).",
        "Leaving the Lightning Stance ends these benefits."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// TRANSMUTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("transmuter", {
  name: "Transmuter",
  url: "https://lyrian.splatpass.net/classes/transmuter/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 2,
  role: "Artisan",
  secondary: "Utility",
  requires: null,
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "transmutation-basics-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "transmute-weapon" },
    { level: 3, type: "special",  label: "Skills (Transmuter points)", points: 5, expertiseTrade: null,
      options: "ANY_CRAFTING_DISCIPLINE",
      summary: "5 Transmuter points tied to one crafting discipline you pick (e.g. blacksmithing, alchemy); add them as a bonus to Transmuter abilities used in crafts of that discipline, even if not a roll." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "transmute-wall" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "deconstruction" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"],
      alsoGrants: { errand: "Co-Craft" },
      summary: "Also grants Co-Craft as an errand (once, to help a crafter). One co-crafter per craft; Co-Craft actions count toward the main crafter's one-ability limit; declare before any crafting actions." },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "transmute-terrain" }
  ],
  abilities: {
    "transmutation-basics-key": {
      name: "Transmutation Basics (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "transmutation-basics",
      summary: [
        "Benefit 1: Gain the Transmuter Core Crafting Abilities; use one per crafting session. Using one blocks other transmuters from co-crafting with you, and if a co-crafter uses one for you, you can't use any.",
        "Benefit 2: Craft with non-advanced and base materials. Spend 1 IP to do an EP action tied to this key ability 4 times.",
        "Benefit 3: Craft Elixirs, Potions, Flasks and Salves; one IP makes 3 of the same item instead of 1 (pay the listed cost once).",
        "Benefit 4: Proficiency with the alchemist's alembic and 1 basic weapon type."
      ]
    },
    "transmutation-basics": {
      name: "Transmutation Basics", kind: "granted", grantedBy: "transmutation-basics-key",
      cost: "No listed cost", range: null, keywords: [], requires: null,
      subAbilities: [
        { name: "Alchemic Catch", cost: "Co-Craft", summary: "Reroll a crafting die right after its result and keep the second number. Not on the last crafting die." },
        { name: "Temperature Shock", cost: "Co-Craft", summary: "Right after a roll: the previous action has no effect, and you get +10 to your next crafting action." },
        { name: "Rage Quit", cost: "1 Crafting Dice (Co-Craft)", summary: "Once per crafting IP: destroy the unfinished item and all its materials, then immediately start another crafting session. As a Co-Craft it uses 1 of the main crafter's crafting dice." },
        { name: "Bouncing Ideas", cost: "Co-Craft", summary: "Add 1d4 crafting points to the current craft." },
        { name: "Create Ingot", cost: "Errand", summary: "Make an ingot from blacksmithing base or special materials." },
        { name: "Create Oil Coating", cost: "Errand", summary: "Make an Oil Coating from Carpenter materials." },
        { name: "Create Wood Block", cost: "Errand", summary: "Make a Wood Block from Carpenter materials." },
        { name: "Craft Fuel Shells", cost: "Errand", summary: "Make up to 5 small shells (50 magical fuel each), or 1 medium shell (200 fuel) in place of 2 small." },
        { name: "Create Artifice Parts", cost: "Errand", summary: "Make up to 3000u of artifice parts from one blacksmithing material at 1:1. Higher-tier limits: 6000 tamahagane, 9000 mithril, 12000 orihalcum, 15000 escudo." },
        { name: "Tan Leather", cost: "Errand", summary: "Make a tanned hide from armorsmithing base leather materials." },
        { name: "Create Box or Bundle of Food", cost: "Errand", summary: "500u of matching material makes 1 food box (e.g. 500u Meat = 1 Box of Fresh Meat); up to 5 boxes per errand." }
      ],
      summary: [ "Transmuter Core Crafting Abilities (see subAbilities)." ]
    },
    "transmute-weapon": {
      name: "Transmute Weapon", kind: "ability",
      cost: "1 AP", range: "30ft", keywords: [], requires: "Suitable material is available (GM decides).",
      summary: [
        "Transmute a basic weapon or shield into your hand or next to an ally (they can grab it for 0 RP when it's made, and can sheathe it). Destroyed at the end of the encounter.",
        "Special materials can be used if enough is around or you have some (e.g. an ingot); that material is destroyed afterwards. DM decides."
      ]
    },
    "transmute-wall": {
      name: "Transmute Wall", kind: "ability",
      cost: "1 RP, Variable MP", range: "5ft", keywords: [], requires: "You or an ally in range is targeted by a ranged attack.",
      summary: [ "Create walls against the attack: each costs 1 mana and reduces the damage by 2 x Focus; make as many as you like. All vanish after the attack resolves." ]
    },
    "deconstruction": {
      name: "Deconstruction", kind: "ability",
      cost: "No listed cost (spend 1 IP)", range: null, keywords: ["Errand"], requires: null,
      summary: [
        "Spend 1 IP to break down up to 5 basic items: 500 matching material per ingot or block used; items without ingots give 1 per 'clim value' (sic). Base price material only; upgrades and alloys are lost.",
        "Or convert up to 1000u of junk into up to 250u of basic Blacksmithing, Armorsmithing, Carpentry, Calligraphy, Magical Fuel or Medical materials (4:1).",
        "As an Errand action, the limit is 1 basic item."
      ]
    },
    "transmute-terrain": {
      name: "Transmute Terrain", kind: "ultimate",
      cost: "2 AP, Variable MP", range: "5ft", keywords: [], requires: null,
      summary: [
        "Grow connected terrain from a point: each mana makes up to 4 connected 5ft squares of solid normal or difficult terrain. Removes effects like ice or fire, and can push objects and creatures the way it grows.",
        "If it damages a creature it stops and the 5ft segment touching that creature is destroyed. Each segment has 20 + Focus HP. Heroes caught in it may spend 1 RP to step out and then can't be shoved by this use."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// TRAPPER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("trapper", {
  name: "Trapper",
  url: "https://lyrian.splatpass.net/classes/trapper/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Controller",
  secondary: "Utility",
  requires: "Ranger mastered",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "trap-basics" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "bear-trap" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Survival", "Animal Husbandry", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "place-trap" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "ambush-trapper" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Agility"],
      alsoGrants: { note: "Trap Basics camp food becomes 1d10 x 10 food units." },
      summary: "Also: the key ability's food increases to 1d10 x 10 food units." },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-guiding-shot" }
  ],
  abilities: {
    "trap-basics": {
      name: "Trap Basics", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: Turn 100u of junk into a Trapper's Trap as a Rest or Errand action. Each Trapper's Trap is a special item costing 1 Burden.",
        "Benefit 2: Carry up to 3 Trapper's Traps with no Burden.",
        "Benefit 3: Resting outdoors at camp, use a Rest action to set alert traps (no Trapper's Trap used): use Survival instead of Perception to detect enemies. After each such rest gain 1d10 x 5 food units."
      ]
    },
    "bear-trap": {
      name: "Bear Trap", kind: "ability",
      cost: "1 AP", range: "5ft", keywords: ["Root", "Full Pierce", "Stealth"], requires: null,
      summary: [ "Place a bear trap in an empty square. An enemy entering it takes Light Full Pierce damage (Heavy vs beasts) and is Rooted until it spends 2 AP to free itself. Uses one Trap." ]
    },
    "place-trap": {
      name: "Place Trap", kind: "ability",
      cost: "Special", range: "Other", keywords: ["Root", "Stealth"], requires: "Enough time (1 minute or 1 hour).",
      summary: [
        "Spend 1 minute (Simple traps only) or 1 hour (Simple or Complex) placing an undecided trap. Max 2 placed this way. When an enemy comes within 20ft, spend 0 RP to choose the effect and trigger it. Uses one Trapper's Trap; can't be reused.",
        "Log Swing (Simple): Light bludgeoning damage, 20ft knockback. Snare (Simple): up to 3 snares within 20ft of each other; triggering stops movement and knocks prone.",
        "Net (Complex): lifts the target into the air, Rooted, until the net takes 15 damage; then it falls prone. Pitfall (Complex): 5x5, 20ft-deep pit; normal falling damage."
      ]
    },
    "ambush-trapper": {
      name: "Ambush Trapper", kind: "ability",
      cost: "No listed cost", range: "Self", keywords: ["Encounter Start"], requires: "You're stealthed or surprised the enemy.",
      summary: [ "Once per encounter, use Place Trap's 0 RP trigger without the setup time (GM may rule out Pitfall/Net). Costs a Trap only if actually used." ]
    },
    "secret-art-guiding-shot": {
      name: "Secret Art: Guiding Shot", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Ranged Weapon Range", keywords: ["Secret Art", "Sure Hit"], requires: null,
      summary: [
        "Heavy attack. The target may spend 1 RP to avoid it; if it does, you may either Sidestep it up to 20ft in a direction you choose and trigger a set Place Trap effect (doesn't count toward the per-encounter limit), or move it into a Bear Trap you set within that 20ft. Pick one.",
        "Can't Sidestep an enemy into a hazard unless it has nowhere else to go."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// TRICKSTER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("trickster", {
  name: "Trickster",
  url: "https://lyrian.splatpass.net/classes/trickster/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Support",
  secondary: "Utility",
  requires: "Two classes mastered, of which 1 must be a tier 2 class.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "perfect-mimicry" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "assign-decoy" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Deception"],
      summary: "+5 skill points in Deception only. Any point can be traded for 2 expertise points in Deception." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "swap" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "misdirected-blow" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-the-grand-theater" }
  ],
  abilities: {
    "perfect-mimicry": {
      name: "Perfect Mimicry", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: With enough prep time and knowledge of the target (GM decides), impersonate someone convincingly; normal means can't see through it unless you act or speak strangely. Partly magical; can't hide obvious size or shape differences." ]
    },
    "assign-decoy": {
      name: "Assign Decoy", kind: "ability",
      cost: "0 AP", range: "60ft", keywords: ["Challenge", "Quick"], requires: null,
      summary: [ "Pick a willing ally (not you) and an enemy in range: the enemy is Challenged by that ally until the start of your next turn." ]
    },
    "swap": {
      name: "Swap", kind: "ability",
      cost: "1 AP, 1 RP", range: "20ft", keywords: ["Rapid", "Teleport"], requires: null,
      note: "Pay either the AP or the RP, not both.",
      summary: [ "Swap places with a willing ally or any non-heroic enemy." ]
    },
    "misdirected-blow": {
      name: "Misdirected Blow", kind: "ability",
      cost: "1 RP, 2 MP", range: "Self", keywords: [], requires: "You're targeted by an attack and another enemy is within 5ft of you.",
      summary: [ "You may Dodge. If you avoid the attack, it's redirected to another enemy within 5ft (not the attacker) with the same accuracy roll; it may react normally. Not vs Secret Art or Esoteric Art attacks." ]
    },
    "secret-art-the-grand-theater": {
      name: "Secret Art: The Grand Theater", kind: "ultimate",
      cost: "4 AP, 3 MP", range: "40ft", keywords: ["Secret Art"], requires: null,
      summary: [ "Allies in range may Sidestep up to their speed; you may Sidestep all enemies in range up to their speed. Then everyone originally in range gains 2 AP, which must be spent attacking other creatures if possible." ]
    }
  }
});

// ---------------------------------------------------------------------------
// TRUE SHINIGAMI EYES  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("true-shinigami-eyes", {
  name: "True Shinigami Eyes",
  url: "https://lyrian.splatpass.net/classes/true-shinigami-eyes/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: "Utility",
  requires: "Shinigami Eyes mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "improved-death-perception" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "cut-away" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Medicine", "Perception", "Insight", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "point-of-death-ii" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cut-magic" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-7-points-of-death" }
  ],
  abilities: {
    "improved-death-perception": {
      name: "Improved Death Perception", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: You see the death of non-living things: automatic maximum Full Pierce damage against objects.",
        "Benefit 2: Each hit on an enemy with 'Lines of Death' or 'Point of Death' applies 1 Mark of Death (max 7)."
      ]
    },
    "cut-away": {
      name: "Cut Away", kind: "ability",
      cost: "1 RP", range: "Self", keywords: [], requires: "You're targeted by an ability that forces a save.",
      summary: [ "Instead of saving, make a Precise attack against the ability's Potency; if your accuracy beats it, you pass." ]
    },
    "point-of-death-ii": {
      name: "Point of Death II", kind: "ability",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Full Pierce"],
      requires: "Target is below half its original max HP (before True Death reductions).",
      refund: { overlapsWith: [], amount: "All mana and AP spent", note: "Refunded on a killing blow." },
      summary: [ "Heavy attack dealing maximum damage instead of rolling. On a killing blow, refund the mana and AP spent." ]
    },
    "cut-magic": {
      name: "Cut Magic", kind: "ability",
      cost: "1 AP", range: "Melee Weapon Range", keywords: ["Overcharge"], requires: null,
      summary: [ "Heavy attack against a temporary magic effect; if accuracy equals or beats its Potency, it's removed. Overcharge: +1 AP to make it a Precise attack." ]
    },
    "secret-art-7-points-of-death": {
      name: "Secret Art: 7 Points of Death", kind: "ultimate",
      cost: "3 AP, 3 MP", range: "Melee Weapon Range", keywords: ["Full Pierce", "Secret Art"],
      requires: "Target is below half HP and has at least 1 Mark of Death.",
      summary: [ "Make Precise attacks equal to the target's Marks of Death (max 7); each deals Focus + Power damage instead of rolling." ]
    }
  }
});

// ---------------------------------------------------------------------------
// VAMPIRE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("vampire", {
  name: "Vampire",
  url: "https://lyrian.splatpass.net/classes/vampire/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 1,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Must have the Curse of Vampirism breakthrough.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "vampiric-strength" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "vampiric-fascination" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "vampire-shapeshift" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "cloak-of-bats" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "blood-frenzy" }
  ],
  abilities: {
    "vampiric-strength": {
      name: "Vampiric Strength", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "vampire-bite",
      summary: [
        "Benefit 1: Your unarmed attacks deal damage as a proficient One-Handed Weapon and can't deal non-lethal damage.",
        "Benefit 2: You can use Vampire Bite."
      ]
    },
    "vampire-bite": {
      name: "Vampire Bite", kind: "granted", grantedBy: "vampiric-strength",
      cost: "4 AP", range: "5ft", keywords: ["Unarmed Strike"], requires: null,
      summary: [
        "Light attack with your fangs (works with both hands full). On damage, drain 1 mana from the target and gain 1 mana; if it has no mana, deal extra Light damage instead.",
        "The damage also lowers its max HP until it rests. A target brought to 0 HP is killed; a heroic one may become your subservient vampire (GM decides). Against a willing target with mana you may deal no damage."
      ]
    },
    "vampiric-fascination": {
      name: "Vampiric Fascination", kind: "ability",
      cost: "4 AP", range: "40ft", keywords: ["Mind Affecting"], requires: "The target can see or hear you and is non-heroic.",
      summary: [
        "Charm the target: it spends its AP moving straight toward you (avoiding known dangers) and does nothing once adjacent.",
        "Pay 4 AP at the start of your next turn to continue; ends when you stop or it takes damage from anything except Vampire Bite. While charmed, your first Vampire Bite on it each turn costs 0 AP and has Sure Hit and Full Pierce."
      ]
    },
    "vampire-shapeshift": {
      name: "Vampire Shapeshift", kind: "ability",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Concentration"], requires: null,
      summary: [ "Turn into a rat or bat (its size; counts as a normal animal). No attacks or abilities in this form; exit any time for 0 RP." ]
    },
    "cloak-of-bats": {
      name: "Cloak of Bats", kind: "ability",
      cost: "2 RP", range: "40ft", keywords: ["Teleport"], requires: null,
      summary: [ "Become a bat swarm and reappear elsewhere in range. If used in reaction to an attack, that attack automatically misses." ]
    },
    "blood-frenzy": {
      name: "Blood Frenzy", kind: "ultimate",
      cost: "0 AP, 2 MP", range: "Self", keywords: [], requires: null,
      summary: [
        "You must basic-unarmed-attack the nearest enemy (your pick if tied), or move toward the closest visible enemy if none is in range. You heal half the damage your unarmed attacks deal and can't use Vampire Bite.",
        "Lasts until all visible enemies are dead or your mana runs out; lose 2 mana at the start of each of your turns."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// VAMPIRE LORD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("vampire-lord", {
  name: "Vampire Lord",
  url: "https://lyrian.splatpass.net/classes/vampire-lord/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Specialist",
  secondary: "Striker",
  requires: "Vampire mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "lords-dominion" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "bloodbolt" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: "ANY_NON_CRAFTING_NON_GATHERING",
      summary: "+5 skill points in any non-crafting, non-gathering skill. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "feeding-frenzy" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "vampiric-domination" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-bloody-ritual" }
  ],
  abilities: {
    "lords-dominion": {
      name: "Lord's Dominion", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grants: { stat: "Presence", amount: 1 },
      summary: [
        "Benefit 1: You can spend one round in sunlight before taking damage; a turn out of the sun resets this.",
        "Benefit 2: +1 Vampire Lord bonus to Presence."
      ]
    },
    "bloodbolt": {
      name: "Bloodbolt", kind: "ability",
      cost: "1 AP", range: "60ft", keywords: ["Overcharge"], requires: null,
      summary: [ "Light attack. Overcharge: spend X HP to add X damage (X can't exceed your Toughness)." ]
    },
    "feeding-frenzy": {
      name: "Feeding Frenzy", kind: "ability",
      cost: "0 RP", range: "Self", keywords: [], requires: "You're under Blood Frenzy.",
      summary: [ "After dropping an enemy to 0 HP or less, immediately use Vampire Bite on it for 0 RP." ]
    },
    "vampiric-domination": {
      name: "Vampiric Domination", kind: "ability",
      cost: "4 AP", range: "20ft", keywords: [], requires: "The target is under your Vampiric Fascination.",
      summary: [
        "The target serves you and obeys most commands (obviously suicidal or against-nature commands end it). Lasts until dispelled, it dies, or you dominate another target.",
        "Afterwards it remembers everything and can't be dominated again for one year."
      ]
    },
    "secret-art-bloody-ritual": {
      name: "Secret Art: Bloody Ritual", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "40ft", keywords: ["Secret Art", "Slow", "Blanketing", "Sure Hit"], requires: null,
      summary: [
        "Tether all enemies in range, Slowing them, until the start of your next turn or until one leaves range. At the start of your next turn the tethers explode for Heavy damage.",
        "For each enemy damaged (or that dies while tethered) recover 1 Mana or 5 HP (your choice)."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// VEILGUARD  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("veilguard", {
  name: "Veilguard",
  url: "https://lyrian.splatpass.net/classes/veilguard/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Healer",
  secondary: null,
  requires: "Shieldwarden mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "emergency-shields" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "shield-burst" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Magic", "Religion", "Medicine", "Perception", "Negotiation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "redistribute" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "purifying-shields" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Power", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "power-word-guardian-shield" }
  ],
  abilities: {
    "emergency-shields": {
      name: "Emergency Shields", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [ "Benefit 1: You can cast Power Word: Shield and Power Word: Guardian Shield (once you have it) for 1 RP instead of 2 AP." ]
    },
    "shield-burst": {
      name: "Shield Burst", kind: "ability",
      cost: "1 RP or 1 AP", range: "40ft", keywords: ["Spell"],
      requires: "The target has temporary HP that you applied, which cost mana or came from a Shieldwarden or Veilguard ability.",
      summary: [ "Heal the target for half its temporary HP, then remove all its temporary HP. Enemies within 5ft of it save vs your Potency or are pushed back 10ft." ]
    },
    "redistribute": {
      name: "Redistribute", kind: "ability",
      cost: "2 AP", range: "80ft", keywords: [],
      requires: "Only temporary HP you applied with a Shieldwarden or Veilguard ability (not from Reinforce).",
      summary: [ "Move temporary HP from one willing ally in range to any number of other allies in range; the total stays the same." ]
    },
    "purifying-shields": {
      name: "Purifying Shields", kind: "ability",
      cost: "2 AP, 2 MP", range: "40ft", keywords: [], requires: null,
      summary: [ "Remove all stacks of a debuff from every ally in range who has temporary HP." ]
    },
    "power-word-guardian-shield": {
      name: "Power Word: Guardian Shield", kind: "ultimate",
      cost: "2 AP, 4 MP", range: "40ft", keywords: ["Spell", "Shield"], requires: null,
      summary: [ "Target gains temporary HP equal to 11 + 2 x Power until the encounter ends. While it lasts, on-damage effects don't trigger unless damage reaches real HP. Lost if a stronger temporary HP source overwrites it." ]
    }
  }
});

// ---------------------------------------------------------------------------
// VENOMANCER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("venomancer", {
  name: "Venomancer",
  url: "https://lyrian.splatpass.net/classes/venomancer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Controller",
  secondary: null,
  requires: "Alchemist, Culinarian, Cultivator, Farmer, Forager, Maid, Pierrot, Rogue, Ranger, Medic or Mycomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "toxic-blast-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "poison-spray" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Medicine", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "catalyze" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "resistant-venom" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "crippling-poison" }
  ],
  abilities: {
    "toxic-blast-key": {
      name: "Toxic Blast (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "toxic-blast",
      summary: [ "Benefit 1: You can use Toxic Blast." ]
    },
    "toxic-blast": {
      name: "Toxic Blast", kind: "granted", grantedBy: "toxic-blast-key",
      cost: "1 AP", range: "40ft", keywords: ["Safe", "Poison", "Toxic"], requires: null,
      summary: [ "Light attack that deals no damage on hit but inflicts Toxic: 1d6 full pierce Poison damage at the start of the target's turn until it spends 2 AP to remove it." ]
    },
    "poison-spray": {
      name: "Poison Spray", kind: "ability",
      cost: "2 AP, 1 MP", range: "30ft", keywords: ["Poison", "Safe", "Toxic", "Blanketing"], requires: null,
      summary: [ "Light attack on everything in a 60ft-wide, 30ft-long cone; on damage inflict Toxic (1d6 full pierce Poison at the start of its turn until it spends 2 AP to remove it)." ]
    },
    "catalyze": {
      name: "Catalyze", kind: "ability",
      cost: "1 AP, 1 MP", range: "40ft", keywords: ["Poison", "Circuit", "Stagger", "Sunder"], requires: "The target has your Toxic.",
      summary: [ "The target saves; on a failure you inflict Stagger II or Sunder II until the end of your next turn." ]
    },
    "resistant-venom": {
      name: "Resistant Venom", kind: "ability",
      cost: "No listed cost", range: null, keywords: ["Persist"], requires: null,
      summary: [ "Passive: your Poison effects gain Persist 1." ]
    },
    "crippling-poison": {
      name: "Crippling Poison", kind: "ultimate",
      cost: "0 RP, 1 MP", range: "40ft", keywords: ["Poison", "Slow"], requires: "A target with your Toxic takes a movement action.",
      summary: [
        "Slow the target's movement.",
        "Overcharge: +1 mana to also affect a fixed-distance movement (not based on speed); its distance is halved. If an attached attack can no longer be made, the ability isn't refunded."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// VENOMBLADE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("venomblade", {
  name: "Venomblade",
  url: "https://lyrian.splatpass.net/classes/venomblade/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: "Controller",
  requires: "Alchemist, Culinarian, Cultivator, Farmer, Forager, Maid, Pierrot, Rogue, Ranger, Medic or Mycomancer mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "envenom-weapon-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "venom-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Stealth", "Deception", "Roguecraft", "Medicine", "Survival", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "deadly-venom" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "maximum-dose" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "outbreak" }
  ],
  abilities: {
    "envenom-weapon-key": {
      name: "Envenom Weapon (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "envenom-weapon",
      summary: [ "Benefit 1: You can use Envenom Weapon." ]
    },
    "envenom-weapon": {
      name: "Envenom Weapon", kind: "granted", grantedBy: "envenom-weapon-key",
      cost: "0 AP, 1 MP", range: "Self", keywords: ["Enchantment", "Stealth"], requires: null,
      summary: [ "Coat your weapon in minor venom: each hit deals +1 full pierce Poison damage until the encounter ends." ]
    },
    "venom-strike": {
      name: "Venom Strike", kind: "ability",
      cost: "1 AP, 1 MP", range: "Weapon Range", keywords: ["Poison", "Rapid", "Toxic"],
      requires: "Melee weapon, or Set of Missiles, Throwing Weapon or small-weapon Thrown attack.",
      summary: [ "Light attack; on damage apply Toxic (1d6 full pierce Poison at the start of its turn until it spends 2 AP to remove it)." ]
    },
    "deadly-venom": {
      name: "Deadly Venom", kind: "ability",
      cost: "2 AP", range: "Weapon Range", keywords: ["Poison", "Toxic"], requires: "Same as Venom Strike.",
      summary: [ "Light attack; on damage +1 stack of the target's Toxic (max 3). Toxic with more than 1 stack deals damage at the end of its turn instead of the start." ]
    },
    "maximum-dose": {
      name: "Maximum Dose", kind: "ability",
      cost: "0 RP, 1 MP", range: "60ft", keywords: ["Poison", "Toxic"], requires: "The target is taking damage from your Toxic.",
      summary: [ "Maximise the damage the target takes from your Toxic." ]
    },
    "outbreak": {
      name: "Outbreak", kind: "ultimate",
      cost: "1 AP, 1 MP", range: "Weapon Range", keywords: ["Poison", "Toxic"], requires: "Same as Venom Strike.",
      summary: [
        "Light attack; on damage apply Toxic as Venom Strike. If the target already has Toxic, trigger that Toxic's damage immediately instead.",
        "Guidance (not in the rules text): vs max stacks it adds 3d6 full pierce; with Maximum Dose that's 18 damage."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// WARDING MAGE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("warding-mage", {
  name: "Warding Mage",
  url: "https://lyrian.splatpass.net/classes/warding-mage/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 3,
  role: "Utility",
  secondary: null,
  requires: "Mage mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "disable-magic" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "alarm-ward" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Stealth", "Magic", "Perception", "Insight", "Common Knowledge"],
      summary: "+5 skill points in Stealth, Magic, Perception or Insight, or Common Knowledge. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: null,
      missing: "MISSING - page shows Level 4 'Ability 2' with no ability named. Hidden Wards is listed under abilities but not tied to a step (likely this slot - unconfirmed)." },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Cunning", "Reason", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "explosive-ward" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "sapping-ward" }
  ],
  abilities: {
    "disable-magic": {
      name: "Disable Magic", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: With Decipher Magic you can disable tier 1 and tier 2 bounded fields.",
        "Benefit 2: Disable your own Bounded Fields, or change who they exclude, for 0 RP."
      ]
    },
    "alarm-ward": {
      name: "Alarm Ward", kind: "ability",
      cost: "1 MP", range: "Touch", keywords: ["Bounded Field", "Spell"], requires: null,
      summary: [
        "Tier 1 ward. 10 minutes of uninterrupted casting on a normal room; 40ft radius, +40ft per extra Alarm Ward in the same area (120ft with 3). Choose who can pass freely.",
        "Anyone else passing through sets off loud ringing until the ward is disabled; once triggered it lasts 5 more minutes then vanishes. Untriggered it lasts until removed. Each maintained Alarm Ward lowers your max mana by 1."
      ]
    },
    "hidden-wards": {
      name: "Hidden Wards", kind: "unlisted",
      cost: "No listed cost", range: "-", keywords: [], requires: null,
      note: "Listed under abilities but not tied to a progression step (Level 4 is blank).",
      summary: [ "When casting a Bounded Field you can hide it with a Stealth check (the ward uses that result). Sense Magic can't see it without a successful Perception or Insight check." ]
    },
    "explosive-ward": {
      name: "Explosive Ward", kind: "ability",
      cost: "2 MP", range: "Touch", keywords: ["Bounded Field", "Fire", "Spell", "Scatter"], requires: null,
      summary: [
        "Tier 2 ward on a door or medium container (10 minutes uninterrupted casting). Choose people equal to your Focus who can open it safely.",
        "Anyone else knowingly opening or attacking it triggers a loud noise and Heavy Fire damage to all creatures within 10ft (items inside are hit too), then it vanishes. Untriggered it lasts until removed. Each maintained Explosive Ward lowers your max mana by 2."
      ]
    },
    "sapping-ward": {
      name: "Sapping Ward", kind: "ultimate",
      cost: "2 MP", range: "Touch", keywords: ["Bounded Field", "Spell"], requires: null,
      summary: [
        "Tier 2 ward on a normal room (10 minutes uninterrupted casting): 20ft radius, +20ft per extra Sapping Ward in the area (60ft with 3). Choose people equal to your Focus who can enter safely.",
        "Anyone else entering saves vs your Potency or is Weakened (non-heroic: Stunned) while inside and for 2 rounds after leaving. Once triggered it lasts 5 more minutes; untriggered until removed. Each active Sapping Ward lowers your max mana by 2."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// WAVE PALM STYLE  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("wave-palm-style", {
  name: "Wave Palm Style",
  url: "https://lyrian.splatpass.net/classes/wave-palm-style/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Striker",
  secondary: null,
  requires: "Cultivator or Martial Artist mastered. Must have at least 1 mystic eye slot open.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "mana-sight-key" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "two-point-strike" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Negotiation", "Perception", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "mystic-eyes-of-life-perception" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "disrupt-ki" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "four-point-strike" }
  ],
  abilities: {
    "mana-sight-key": {
      name: "Mana Sight (key)", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "mana-sight",
      grants: { mysticEye: "Life Perception Eye" },
      summary: [
        "Benefit 1: You can use Mana Sight.",
        "Benefit 2: One eye becomes a Life Perception Eye, usable for Mystic Eye abilities of that type (an eye can only be one type).",
        "Benefit 3: Mystic Eye attacks made with the Life Perception eye ignore 1 point of guard."
      ]
    },
    "mana-sight": {
      name: "Mana Sight", kind: "granted", grantedBy: "mana-sight-key",
      cost: "0 AP", range: "Sight", keywords: ["Quick"], requires: null,
      summary: [ "Estimate a unit's mana % until combat ends (DM shows its mana bar)." ]
    },
    "two-point-strike": {
      name: "Two Point Strike", kind: "ability",
      cost: "1 AP, 1 MP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Mystic Eye"], requires: null,
      summary: [
        "Light attack; on damage apply Wave Palm I.",
        "Wave Palm: the target's next mana-using action costs extra mana equal to the stacks. If stacks exceed its current mana (or it has none), it loses mana equal to the stacks and takes triple that as true damage. Doesn't stack (higher value used); removed when it triggers. Stack count per numeral isn't given on the page."
      ]
    },
    "mystic-eyes-of-life-perception": {
      name: "Mystic Eyes of Life Perception", kind: "ability",
      cost: "0 AP, 2 MP", range: "Self", keywords: ["Mystic Eye"], requires: null,
      summary: [ "360-degree vision; automatically detect enemies within 30ft not behind at least 1ft of full cover, and see their approximate HP and mana %. Lasts 5 minutes or until turned off." ]
    },
    "disrupt-ki": {
      name: "Disrupt Ki", kind: "ability",
      cost: "2 AP", range: "Melee Weapon Range", keywords: ["Unarmed Strike", "Mystic Eye"], requires: null,
      summary: [ "Light attack; on damage any Concentration ability the target has active ends immediately." ]
    },
    "four-point-strike": {
      name: "Four Point Strike", kind: "ultimate",
      cost: "2 AP, 2 MP", range: "Melee Weapon Range", keywords: ["Combo", "Unarmed Strike", "Mystic Eye"], requires: null,
      summary: [
        "Light attack; on damage apply Wave Palm II (Wave Palm III if the target has Wave Palm I).",
        "Combo: after Two Point Strike, or vs a target with Wave Palm I, mana cost -2 and AP cost -1."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// WILDHEART  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("wildheart", {
  name: "Wildheart",
  url: "https://lyrian.splatpass.net/classes/wildheart/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 3,
  role: "Specialist",
  secondary: null,
  requires: "Animal summoner mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "expanded-menagerie" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "x-attack" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Animal Husbandry"],
      summary: "+5 skill points in Animal Husbandry only. Any point can be traded for 2 expertise points in Animal Husbandry." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "quick-revive" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Cunning", "Reason", "Awareness", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "leashing" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-bestial-wrath" }
  ],
  abilities: {
    "expanded-menagerie": {
      name: "Expanded Menagerie", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      summary: [
        "Benefit 1: When using Summon Animal, you may spend 1 mana to choose which animal you summon.",
        "Benefit 2: Cheetah and Landshark are added to the animals you can summon (no stat blocks on this page)."
      ]
    },
    "x-attack": {
      name: "X-Attack", kind: "ability",
      cost: "2 AP", range: "Sight", keywords: [], requires: "Only your summoned animal.",
      summary: [ "Your summon gets +1 Focus and +1 Power (no duration stated on the page)." ]
    },
    "quick-revive": {
      name: "Quick Revive", kind: "ability",
      cost: "0 AP, 2 MP", range: "40ft", keywords: [], requires: null,
      summary: [ "Immediately resummon a Summon Animal summon that died this encounter (the most recent if several)." ]
    },
    "leashing": {
      name: "Leashing", kind: "ability",
      cost: "1 AP", range: "Sight", keywords: ["Teleport"], requires: "Only your summoned animal.",
      summary: [ "Teleport your summoned animal to an empty square within 5ft of you." ]
    },
    "secret-art-bestial-wrath": {
      name: "Secret Art: Bestial Wrath", kind: "ultimate",
      cost: "2 AP, 3 MP", range: "Sight", keywords: ["Secret Art"], requires: "Only your summoned animal.",
      summary: [ "Your summon gains Bestial Wrath (+2 Focus, +2 Power, can't drop below 1 HP) for 3 rounds or until it's reduced to 1 HP, plus AP equal to its max AP to use immediately. Doesn't stack with X-Attack." ]
    }
  }
});

// ---------------------------------------------------------------------------
// WINDBRINGER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("windbringer", {
  name: "Windbringer",
  url: "https://lyrian.splatpass.net/classes/windbringer/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: null,
  requires: "Mage mastered or Wind mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "wind-master" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "gale-wind-aura" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "tailwind" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Fitness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "headwind" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "fly" }
  ],
  abilities: {
    "wind-master": {
      name: "Wind Master", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "glide",
      grants: { mastery: "Wind" },
      refund: { overlapsWith: ["Aeromancer", "Zephyr Warder"], amount: "full",
                note: "Page says a refund is possible and that Aeromancer and Zephyr Warder also grant this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Gain Wind Mastery.",
        "Benefit 2: You can use Glide."
      ]
    },
    "glide": {
      name: "Glide", kind: "granted", grantedBy: "wind-master",
      cost: "1 RP", range: "Self", keywords: ["Spell"], requires: null,
      summary: [ "Fall at 15ft per round while moving horizontally at normal speed. Landing while active means no falling damage and ends it." ]
    },
    "gale-wind-aura": {
      name: "Gale-Wind Aura", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Aura", "Upkeep"], requires: null,
      usage: "Upkeep: 1 AP at the start of each turn or it fades.",
      summary: [ "Allies (not you) within 60ft get +20ft movement speed; an ally who starts a move inside keeps it for that move even after leaving." ]
    },
    "tailwind": {
      name: "Tailwind", kind: "ability",
      cost: "No listed cost", range: "40ft", keywords: ["Encounter Start"], requires: null,
      summary: [ "You and allies within 40ft get +1 initiative and double movement speed during the first round of combat." ]
    },
    "headwind": {
      name: "Headwind", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Aura", "Upkeep", "Slow"], requires: null,
      usage: "Upkeep: 1 AP.",
      summary: [ "Enemies that start their movement within 30ft of you are slowed. An enemy that Moves from outside the zone spending more than 1 AP stays slowed after each AP is calculated (wording unclear)." ]
    },
    "fly": {
      name: "Fly", kind: "ultimate",
      cost: "1 AP, 2 MP", range: "Touch", keywords: ["Spell", "Concentration"], requires: null,
      summary: [
        "You or a touched creature gains controlled flight and hover with doubled speed while flying, until the encounter ends.",
        "Taking damage while flying (not hovering) drops it 20ft; if that reaches the ground it's Rooted and can't fly until the end of its next turn. No altitude loss if the damage came from another flying creature."
      ]
    }
  }
});

// ---------------------------------------------------------------------------
// ZEN WARRIOR  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("zen-warrior", {
  name: "Zen Warrior",
  url: "https://lyrian.splatpass.net/classes/zen-warrior/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 3,
  difficulty: 2,
  role: "Striker",
  secondary: "Defender",
  requires: "Monk mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "rapid-blasts" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "flying-kick" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Athletics", "Perception", "Insight", "Medicine", "Intimidation", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "ki-burst" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Fitness", "Awareness"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "redirected-force" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Power", "Agility", "Toughness"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "secret-art-true-serenity" }
  ],
  abilities: {
    "rapid-blasts": {
      name: "Rapid Blasts", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "ki-blast-ii",
      summary: [ "Benefit 1: You can use Ki Blast II." ]
    },
    "ki-blast-ii": {
      name: "Ki Blast II", kind: "granted", grantedBy: "rapid-blasts",
      cost: "1 or 2 AP", range: "120ft", keywords: ["Arcane", "Rapid"], requires: null,
      summary: [ "One ranged attack: Light (1 AP), Precise (2 AP) or Heavy (2 AP), dealing Arcane damage." ]
    },
    "flying-kick": {
      name: "Flying Kick", kind: "ability",
      cost: "1 AP", range: "40ft", keywords: ["Combo", "Unarmed Strike"], requires: "You hit a target with Ki Blast in your previous action.",
      summary: [ "Sidestep next to a target within 40ft (with Flight for this move) and make a Light attack. Combo: your Strike of Still Water then costs 1 less AP." ]
    },
    "ki-burst": {
      name: "Ki Burst", kind: "ability",
      cost: "0 RP, Variable MP", range: "Self", keywords: [], requires: "Right after damaging a single opponent with an Unarmed Strike attack.",
      summary: [ "The attack deals X extra damage (2X with a basic attack or Double Punch), max +10; one damage roll only. X isn't defined on the page (presumably mana spent - see ISSUES.md)." ]
    },
    "redirected-force": {
      name: "Redirected Force", kind: "ability",
      cost: "1 RP", range: "Melee Weapon Range", keywords: ["Counter"],
      requires: "In Serene Water stance, and a melee attack against you missed.",
      summary: [ "Redirect the missed attack back at the attacker with the same roll (it may react). Not against the attack that put you into Serene Water stance." ]
    },
    "secret-art-true-serenity": {
      name: "Secret Art: True Serenity", kind: "ultimate",
      cost: "1 RP, 2 MP", range: "Self", keywords: ["Secret Art", "Stance"], requires: null,
      summary: [ "Enter Serene Water stance and gain +17 Evasion until the start of your next turn." ]
    }
  }
});

// ---------------------------------------------------------------------------
// ZEPHYR WARDER  (checked 2026-10-20, site v0.13.2)
// ---------------------------------------------------------------------------
CL("zephyr-warder", {
  name: "Zephyr Warder",
  url: "https://lyrian.splatpass.net/classes/zephyr-warder/",
  checked: "2026-10-20",
  version: "0.13.2",
  tier: 2,
  difficulty: 2,
  role: "Support",
  secondary: null,
  requires: "Mage mastered or Wind mastered.",
  steps: [
    { level: 1, type: "key",      label: "Unlock - Key ability", ability: "wind-master" },
    { level: 2, type: "ability",  label: "Ability 1",            ability: "wind-infusion" },
    { level: 3, type: "skills",   label: "Skills", points: 5, expertiseTrade: true,
      options: ["Medicine", "Magic", "Religion", "History", "Flight", "Artifice", "Common Knowledge"],
      summary: "+5 skill points among the listed skills. Any point can be traded for 2 expertise points, spent in those same skills." },
    { level: 4, type: "ability",  label: "Ability 2",            ability: "wind-wall" },
    { level: 5, type: "heart",    label: "Heart", amount: 1, options: ["Reason", "Presence"] },
    { level: 6, type: "ability",  label: "Ability 3",            ability: "wind-empowered-aim" },
    { level: 7, type: "soul",     label: "Soul",  amount: 1, options: ["Focus", "Agility"] },
    { level: 8, type: "ultimate", label: "Ultimate ability",     ability: "wind-shield" }
  ],
  abilities: {
    "wind-master": {
      name: "Wind Master", kind: "key",
      cost: null, range: null, keywords: [], requires: null,
      grantsAbility: "glide",
      grants: { mastery: "Wind" },
      refund: { overlapsWith: ["Aeromancer", "Windbringer"], amount: "full",
                note: "Page says a refund is possible and that Aeromancer and Windbringer also grant this. Rulebook: a duplicate ability gives a full EXP refund (IP still paid)." },
      summary: [
        "Benefit 1: Gain Wind Mastery.",
        "Benefit 2: You can use Glide."
      ]
    },
    "glide": {
      name: "Glide", kind: "granted", grantedBy: "wind-master",
      cost: "1 RP", range: "Self", keywords: ["Spell"], requires: null,
      summary: [ "Fall at 15ft per round while moving horizontally at normal speed. Landing while active means no falling damage and ends it." ]
    },
    "wind-infusion": {
      name: "Wind Infusion", kind: "ability",
      cost: "1 AP, 0 MP", range: "30ft", keywords: ["Spell", "Type", "Wind"], requires: null,
      summary: [
        "A willing target's type becomes Wind II until the encounter ends (or a stronger type overwrites it):",
        "Normal damage from other elements; half damage from Wind or Earth damage/keyword attacks (unless true damage); +50% damage from Frost damage/keyword attacks; +2 Evasion vs ranged weapon attacks."
      ]
    },
    "wind-wall": {
      name: "Wind Wall", kind: "ability",
      cost: "2 AP, 1 MP", range: "60ft", keywords: ["Concentration", "Spell", "Wind"], requires: null,
      summary: [
        "Straight wall of wind 30ft long, 5ft wide, 10ft high. Ranged weapon attacks through it have half range, lose Lock On, Sure Hit, Half Pierce, Guard Crush and Full Pierce, and their targets get +2 Evasion and +1 Guard.",
        "Spells that count as attacks (accuracy roll vs a non-Blocking person) passing through suffer the same."
      ]
    },
    "wind-empowered-aim": {
      name: "Wind-Empowered Aim", kind: "ability",
      cost: "2 AP", range: "Self", keywords: ["Aura", "Upkeep"], requires: null,
      usage: "Upkeep: 1 AP at the start of each turn or it fades.",
      summary: [ "Aura: a heroic ally within 20ft (including you) can add 1d4 to a ranged attack's accuracy roll." ]
    },
    "wind-shield": {
      name: "Wind Shield", kind: "ultimate",
      cost: "1 RP", range: "30ft", keywords: ["Aid", "Shield", "Spell"], requires: "An ally is targeted by a ranged attack.",
      summary: [ "Give the ally 1 RP that must be spent on the basic Dodge or Block against that attack, plus a Dodge bonus equal to your Focus; the attack loses Lock On and Sure Hit." ]
    }
  }
});
