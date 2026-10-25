// Lyrian Chronicles Character Planner - companions: summons, hired mercenaries and eidolons
// Source: official monster pages, https://rpg.angelssword.com/game/0.13.2/monsters/<id> (checked 2026-10-24).
// Numbers are exact. Abilities are listed by name with their cost, keywords and range; the full
// rules text is on the monster page (link in the planner).
//
// FIELDS
//   type      - Grunt / Heroic, creature kind, danger rating, as the page shows
//   stats     - stat block. evasion and guard are "normal / when Dodging or Blocking"
//   light, heavy - attack lines (accuracy bonus, damage)
//   abilities - [name, "passive" or cost, keywords, range]
//   usedBy    - which classes / breakthroughs bring it; ab = the class ability that brings it (shown once that step is owned)

window.LC = window.LC || {};
LC.companions = LC.companions || {};

function CP(id, rec){
  rec.id = id;
  rec.url = "https://rpg.angelssword.com/game/0.13.2/monsters/" + id;
  rec.checked = "2026-10-24"; rec.version = "0.13.2";
  LC.companions[id] = rec;
}

CP("acolyte", { name: "Acolyte", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "",
  stats: { hp: 30, mana: 4, ap: 2, rp: 1, init: "+1", Focus: 2, Power: 3, Agility: 2, Toughness: 4, evasion: "7 / 20", guard: "5 / 16",
           Fitness: 2, Cunning: 1, Reason: 3, Awareness: 3, Presence: 4 },
  light: "+2, 2d4+3", heavy: "+2, 4d6+6", strong: "", weak: "",
  abilities: [ ["Combat Healer", "passive", "", ""], ["Cure Touch", "2 MP, 2 AP", "Healing, Spell", "Touch"] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (750 Clim a week)" } ] });

CP("apprentice", { name: "Apprentice", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "Knowledge Magic +9",
  stats: { hp: 15, mana: 3, ap: 2, rp: 1, init: "+3", Focus: 3, Power: 3, Agility: 3, Toughness: 1, evasion: "10 / 23", guard: "1 / 10",
           Fitness: 1, Cunning: 2, Reason: 4, Awareness: 2, Presence: 1 },
  light: "+3, 2d4+3", heavy: "+3, 4d6+6", strong: "Large groups", weak: "Assassins",
  abilities: [ ["Arcane Barrier", "passive", "", ""], ["Glittershards", "1 MP, 2 AP", "Arcane, Spell, Concentration", "30ft"],
               ["Missile Barrage", "1 MP, 2 AP", "Spell, Arcane", "60ft"] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (750 Clim a week)" } ] });

CP("archer", { name: "Archer", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "Perception +9, Stealth +8",
  stats: { hp: 20, mana: 0, ap: 2, rp: 1, init: "+3", Focus: 4, Power: 3, Agility: 3, Toughness: 2, evasion: "10 / 23", guard: "2 / 4",
           Fitness: 3, Cunning: 3, Reason: 1, Awareness: 4, Presence: 1 },
  light: "+4, 2d4+3", heavy: "+4, 4d6+6", strong: "", weak: "Assassins",
  abilities: [ ["Calm Aim", "passive", "", ""] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (250 Clim a week)" } ] });

CP("boar", { name: "Boar", type: "Grunt Beast", danger: "F", move: "25ft", skills: "",
  stats: { hp: 25, mana: 0, ap: 2, rp: 1, init: "+3", Focus: 3, Power: 5, Agility: 3, Toughness: 3, evasion: "10 / 23", guard: "4 / 8",
           Fitness: 4, Cunning: 1, Reason: 1, Awareness: 3, Presence: 2 },
  light: "+3, 2d4+5", heavy: "+3, 4d6+10", strong: "", weak: "Walls",
  abilities: [ ["Boar Hide", "passive", "", ""], ["Boar Charge", "2 AP", "", "100ft"] ],
  usedBy: [ { cls: "animal-summoner", how: "Summon Animal" } ] });

CP("brute", { name: "Brute", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "Athletics +9",
  stats: { hp: 30, mana: 0, ap: 2, rp: 1, init: "+1", Focus: 3, Power: 4, Agility: 2, Toughness: 3, evasion: "7 / 20", guard: "4 / 10",
           Fitness: 4, Cunning: 1, Reason: 1, Awareness: 2, Presence: 1 },
  light: "+3, 2d4+4", heavy: "+3, 5d6+8", strong: "", weak: "",
  abilities: [ ["Charge", "2 AP", "", "Self"], ["Slam", "1 AP", "", "Melee Weapon Range"] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (200 Clim a week)" } ] });

CP("cheetah", { name: "Cheetah", type: "Beast", danger: "F", move: "50ft", skills: "",
  stats: { hp: 25, mana: 0, ap: 2, rp: 1, init: "+5", Focus: 4, Power: 3, Agility: 5, Toughness: 3, evasion: "12 / 25", guard: "3 / 6",
           Fitness: 5, Cunning: 3, Reason: 1, Awareness: 3, Presence: 3 },
  light: "+4, 2d4+3", heavy: "+4, 4d6+6", strong: "", weak: "",
  abilities: [ ["Tripping Pounce", "passive", "", ""], ["Pounce", "2 AP", "", "Melee"] ],
  usedBy: [ { cls: "wildheart", how: "Expanded Menagerie adds it to Summon Animal" } ] });

CP("devouring-swarm", { name: "Devouring Swarm", type: "Grunt Insect", danger: "F", move: "20ft", skills: "",
  stats: { hp: 20, mana: 0, ap: 2, rp: 1, init: "+4", Focus: 1, Power: 1, Agility: 4, Toughness: 4, evasion: "5 / 25", guard: "0 / 0",
           Fitness: 1, Cunning: 1, Reason: 1, Awareness: 1, Presence: 1 },
  light: "none", heavy: "none", strong: "", weak: "",
  abilities: [ ["Summon I", "passive", "", ""], ["Swarm", "passive", "", ""], ["Feeding Time", "passive", "", ""], ["Rush", "passive", "", ""],
               ["Hover", "passive", "", ""], ["Nothing", "action", "", "Self"] ],
  usedBy: [ { bt: "summon-contract-ixilune-the-swarm", how: "Ixilune's swarm (Channel Eidolon)" } ] });

CP("fortuna", { name: "Fortuna", type: "Heroic Humanoid (Summon)", danger: "E", move: "20ft", skills: "Deception +99",
  stats: { hp: 40, mana: 8, ap: 4, rp: 8, init: "+6", Focus: 4, Power: 4, Agility: 6, Toughness: 2, evasion: "13 / 27", guard: "2 / 4",
           Fitness: 1, Cunning: 9, Reason: 2, Awareness: 6, Presence: 9 },
  light: "+4, 2d4+4", heavy: "+4, 4d6+8", strong: "", weak: "",
  abilities: [ ["Summon II", "passive", "", ""], ["Luck Aura", "passive", "", ""], ["Luck Surge", "1 MP, 0 RP", "Rapid", "40ft"],
               ["Lucky Lass", "1 AP", "Rapid", "40ft"], ["Lucky Dodge", "2 RP", "Rapid", "Self"] ],
  usedBy: [ { bt: "summon-contract-fortuna-lady-luck", how: "Eidolon contract" }, { cls: "summoner", how: "Summon Eidolon" } ] });

CP("giant-spider", { name: "Giant Spider", type: "Grunt Insect", danger: "F", move: "20ft", skills: "",
  stats: { hp: 30, mana: 1, ap: 2, rp: 1, init: "+3", Focus: 4, Power: 3, Agility: 3, Toughness: 4, evasion: "10 / 23", guard: "4 / 8",
           Fitness: 3, Cunning: 2, Reason: 1, Awareness: 2, Presence: 1 },
  light: "+4, 2d4+3", heavy: "+4, 4d6+6", strong: "Heavily armored enemies", weak: "",
  abilities: [ ["Spider Climb", "passive", "", ""], ["Poison Bite", "1 AP", "Full Pierce, Poison", "Melee"], ["Web Spray", "1 MP, 2 AP", "Root", "40ft"] ],
  usedBy: [ { cls: "animal-summoner", how: "Summon Animal" } ] });

CP("ixilune", { name: "Ixilune", type: "Heroic Insect", danger: "E", move: "20ft", skills: "Intimidation +17",
  stats: { hp: 60, mana: 8, ap: 4, rp: 6, init: "+4", Focus: 4, Power: 4, Agility: 4, Toughness: 4, evasion: "11 / 23", guard: "6 / 14",
           Fitness: 7, Cunning: 3, Reason: 5, Awareness: 7, Presence: 7 },
  light: "+4, 2d4+4", heavy: "+4, 4d6+8", strong: "", weak: "",
  abilities: [ ["Summon II", "passive", "", ""], ["Ixilune's Chitin", "passive", "", ""], ["Flight", "passive", "", ""],
               ["Ixith Swarm", "1 AP", "Full Pierce", "40ft"], ["Ixilune's Command", "1 AP", "Sidestep", "40ft"],
               ["Insect Assault", "1 AP", "Rapid", "60ft"], ["Queen's Domain", "4 MP, 0 AP", "Concentration, Upkeep", "Self"] ],
  usedBy: [ { bt: "summon-contract-ixilune-the-swarm", how: "Eidolon contract" }, { cls: "summoner", how: "Summon Eidolon" } ] });

CP("jack-of-hearts", { name: "Jack of Hearts", type: "Grunt Humanoid (Summon)", danger: "F", move: "20ft", skills: "Deception +16",
  stats: { hp: 25, mana: 1, ap: 2, rp: 1, init: "+5", Focus: 4, Power: 4, Agility: 5, Toughness: 2, evasion: "12 / 25", guard: "2 / 4",
           Fitness: 3, Cunning: 6, Reason: 2, Awareness: 2, Presence: 2 },
  light: "+4, 2d4+4", heavy: "+4, 4d6+8", strong: "", weak: "",
  abilities: [ ["Summon I", "passive", "", ""], ["Keen II", "passive", "", ""], ["Lucky Hit", "1 MP, 2 AP", "", "5ft"] ],
  usedBy: [ { bt: "summon-contract-fortuna-lady-luck", how: "Fortuna's servant (Channel Eidolon)" } ] });

CP("landshark", { name: "Landshark", type: "Grunt Beast", danger: "F", move: "25ft", skills: "Perception +8",
  stats: { hp: 20, mana: 1, ap: 2, rp: 1, init: "+3", Focus: 4, Power: 4, Agility: 3, Toughness: 2, evasion: "10 / 23 (20 / 43 underground)", guard: "2 / 4",
           Fitness: 3, Cunning: 3, Reason: 1, Awareness: 3, Presence: 1 },
  light: "+4, 2d4+4", heavy: "+4, 4d6+8", strong: "Ranged attackers", weak: "Sure Hit attacks, other burrowed creatures",
  abilities: [ ["Burrow", "passive", "", ""], ["Single Fin", "passive", "", ""], ["Jumping Bite", "1 AP", "", "5ft"] ],
  usedBy: [ { cls: "wildheart", how: "Expanded Menagerie adds it to Summon Animal" } ] });

CP("pipoltr", { name: "Pipoltr", type: "Heroic Insect (Summon)", danger: "E", move: "20ft", skills: "",
  stats: { hp: 90, mana: 0, ap: 4, rp: 3, init: "+2", Focus: 4, Power: 4, Agility: 2, Toughness: 6, evasion: "9 / 19", guard: "7 / 18",
           Fitness: 6, Cunning: 2, Reason: 4, Awareness: 5, Presence: 5 },
  light: "+4, 2d4+4", heavy: "+4, 4d6+8", strong: "", weak: "",
  abilities: [ ["Summon II", "passive", "", ""], ["Controlled Space", "passive", "", ""], ["Provoke", "0 AP", "Challenge", "20ft"],
               ["Raise Shield", "1 AP", "", "Self"], ["Slam", "1 AP", "", "Melee Weapon Range"] ],
  usedBy: [ { bt: "summon-contract-pipoltr-the-gardener", how: "Eidolon contract" }, { cls: "summoner", how: "Summon Eidolon" } ] });

CP("rogue", { name: "Rogue", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "Stealth +9, Perception +7, Roguecraft +9",
  stats: { hp: 15, mana: 0, ap: 2, rp: 1, init: "+4", Focus: 3, Power: 3, Agility: 4, Toughness: 1, evasion: "11 / 24", guard: "1 / 2",
           Fitness: 3, Cunning: 4, Reason: 1, Awareness: 2, Presence: 2 },
  light: "+3, 2d4+3", heavy: "+3, 4d6+6", strong: "Parties with low RP", weak: "Tanky parties",
  abilities: [ ["Evasive Rogue", "passive", "", ""], ["Evasive Maneuver", "1 RP", "", "Self"], ["Devastating Strike", "1 AP", "Sure Hit, Full Pierce", "Melee Weapon Range"],
               ["Improved Feint", "0 AP", "", "40ft"] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (200 Clim a week)" } ] });

CP("skeletal-champion", { name: "Skeletal Champion", type: "Heroic Undead", danger: "F", move: "20ft", skills: "Athletics +18",
  stats: { hp: 65, mana: 0, ap: 4, rp: 6, init: "+4", Focus: 4, Power: 4, Agility: 4, Toughness: 4, evasion: "11 / 24", guard: "4 / 8",
           Fitness: 8, Cunning: 1, Reason: 1, Awareness: 4, Presence: 1 },
  light: "+4, 2d4+4", heavy: "+4, 5d6+8", strong: "", weak: "",
  abilities: [ ["Mindless", "passive", "", ""], ["Regenerating Bone", "passive", "", ""], ["Power Strike", "1 AP", "Crushing", "Melee Weapon Range"],
               ["Death's Follower", "1 RP", "Sidestep", "Melee Weapon Range"] ],
  usedBy: [ { cls: "necromaster", ab: "secret-art-skeletal-champion", how: "Secret Art: Skeletal Champion" } ] });

CP("sniper", { name: "Sniper", type: "Heroic Humanoid", danger: "E", move: "20ft", skills: "Stealth +10, Perception +11, Acrobatics +10",
  stats: { hp: 60, mana: 4, ap: 4, rp: 6, init: "+4", Focus: 6, Power: 5, Agility: 4, Toughness: 4, evasion: "11 / 24", guard: "4 / 8",
           Fitness: 5, Cunning: 5, Reason: 2, Awareness: 6, Presence: 2 },
  light: "+6, 2d4+5", heavy: "+6, 4d6+10", strong: "Dodgy characters", weak: "Assassins",
  abilities: [ ["Calm Aim", "passive", "", ""], ["Homing Shot", "2 MP, 2 AP", "Lock-on", "Ranged or Thrown Weapon Range"],
               ["Disengaging Shot", "4 MP, 2 AP", "", "5ft"], ["Snap Shot", "1 AP", "", "Ranged or Thrown Weapon Range"] ],
  usedBy: [ { cls: "mogul", ab: "secret-art-shot-from-the-blue", how: "Secret Art: Shot From The Blue" } ] });

CP("tank", { name: "Tank", type: "Grunt Humanoid", danger: "F", move: "20ft", skills: "Athletics +9",
  stats: { hp: 40, mana: 1, ap: 2, rp: 1, init: "+0", Focus: 2, Power: 2, Agility: 2, Toughness: 5, evasion: "5 / 18", guard: "7 / 22",
           Fitness: 4, Cunning: 1, Reason: 1, Awareness: 3, Presence: 2 },
  light: "+2, 2d4+2", heavy: "+2, 4d6+4", strong: "", weak: "Full Pierce attacks",
  abilities: [ ["Controlled Space", "passive", "", ""], ["Provoke", "0 AP", "Challenge", "20ft"] ],
  usedBy: [ { cls: "mogul", ab: "lord-of-mercenary", how: "Lord of Mercenary hire (500 Clim a week)" } ] });

CP("wolf", { name: "Wolf", type: "Grunt Beast", danger: "F", move: "20ft", skills: "Perception +8",
  stats: { hp: 25, mana: 0, ap: 2, rp: 1, init: "+3", Focus: 2, Power: 4, Agility: 3, Toughness: 3, evasion: "10 / 23", guard: "2 / 4",
           Fitness: 3, Cunning: 2, Reason: 1, Awareness: 3, Presence: 2 },
  light: "+2, 2d4+3", heavy: "+2, 4d6+6", strong: "", weak: "AoE attacks",
  abilities: [ ["Pack Tactics", "passive", "", ""], ["Swarm Tactics", "passive", "", ""], ["Go for the Throat", "2 AP", "Full Pierce", "Melee"],
               ["Topple Prey", "2 AP", "", "Melee"] ],
  usedBy: [ { cls: "animal-summoner", how: "Summon Animal" } ] });
