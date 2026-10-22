# Lyrian Chronicles - Rules Reference (for building the planner)

Source: https://lyrian.splatpass.net/rulebook/ plus /keywords/ and /basic-actions/ (static edition, v0.13.2), read 2026-10-21.
Written in my own words as a working reference. Numbers are exact; wording is not official.
**Gap:** the site copy of the rulebook stops mid-sentence at "To regain HP a character needs to rest." The rest of
the Food & Rest section (and anything after it) could not be read. Basic Actions has no rest rules either.

---

## 1. Core principles
- Round **down** unless stated. Apply flat bonuses **before** doubling/halving.
- Same-name effects don't stack (highest value wins, e.g. +2 Power overrides +1 Power). Unnamed buffs giving the same bonus don't stack either.
- **No character levels.** Power level = total EXP. **Spirit Core** = total EXP *spent* (starts at 0). Spirit Core thresholds matter (skill caps, Ryujin's Draconic Presence, Presence Concealment hides it).
- Game is "tabletop as a service": rules update often - always record the version.

## 2. Character creation (7 steps)
1. **Race** - gives proficiencies, attributes, skills, abilities. Chimera/Fae/Youkai pick a sub-race (gets all its benefits). Demons pick a clan.
2. **Stats** - assign arrays, each value used exactly once:
   - **Main stats (combat)** array **5, 4, 4, 3**: Power, Focus, Agility, Toughness.
   - **Sub stats (out of combat)** array **5, 4, 3, 2, 1**: Fitness, Cunning, Reason, Awareness, Presence.
   - So in class data: **Heart steps (L5) raise sub stats; Soul steps (L7) raise main stats.** Human's "+1 main stat, +1 substat" = one of each list.
3. **Breakthroughs** - 300 EXP usable only on breakthroughs. Not added to Spirit Core. Unspent is lost.
4. **Classes** - 1,000 EXP that must go into classes, plus 3 IP.
5. **Skills** - 10 skill points.
6. **Equipment** - 3,000 Clim.
7. **Progression** - new EXP goes to total; spent EXP adds to Spirit Core. EXP buys breakthroughs, classes, abilities.

## 3. Stats -> derived values (planner formulas)
| Value | Formula |
|---|---|
| HP | 20 + Toughness x 10 |
| Mana (max) | 6 + Power |
| Max RP | 2 + Agility (grunts: 1) |
| AP | 4 per turn for players/heroics (grunts 2; bosses may have more) |
| Guard | equipment value + Toughness (each point -1 damage, min 1 damage unless Blocking) |
| Initiative bonus | Agility (roll 1d4 + Agility + modifiers) |
| Evasion | 7 + Agility |
| Dodge evasion | 20 + Agility (i.e. Evasion +13); Rooted: 13 + Agility |
| Block guard | Blocking *replaces* Guard with 2 x Toughness + armor Block value. Normal shields add +4 only while Blocking; "armors and greatshields always give Guard" (page doesn't say if armor Guard also stacks while Blocking) |
| Potency (save DC of your effects) | 11 + Focus |
| Save | 2d10 + Toughness |
| Speed | 20ft base |
| Accuracy | 1d20 + Focus (Precise: 1d20 + 2 x Focus); hits if >= target Evasion |
| Skill check | d20 + sub stat + skill points + best single expertise |

What each main stat does: **Power** = damage + max mana. **Focus** = accuracy + Potency. **Agility** = Evasion, max RP, Initiative. **Toughness** = HP, saves, Guard.
Sub stats -> skills: Fitness (Athletics, Riding); Cunning (Deception, Roguecraft, Stealth); Reason (Artifice, Appraise, Common Knowledge, Flight, History, Linguistics, Magic, Medicine, Religion); Awareness (Animal Husbandry, Insight, Perception, Survival); Presence (Art, Intimidation, Negotiation).

## 4. Classes, abilities, breakthroughs - EXP economy
- New class: **1 IP + (tier x 100) EXP**. Must meet requirements. Key ability learned immediately. GM may require a teacher for advanced classes.
- Then **7 more abilities at 100 EXP each, bought in order** (steps 2-8). All bought = **Mastered**.
  - So mastering a class costs **tier x 100 + 700 EXP + 1 IP** (T1 = 800, T2 = 900, T3 = 1000).
  - The 2nd, 4th and 6th purchases (our L3 Skills, L5 Heart, L7 Soul) are passive stat/skill boosts, same 100 EXP.
- Abilities can be bought outside interlude only while resting. Classes are unlocked during interlude (Learn Class action).
- **Refunds:** an ability you'd get twice -> full EXP refund (also for a duplicate key when learning a class; IP still paid). Mostly-overlapping ability that still gives some benefit -> **half** EXP refund. An ability you can't use at all -> full refund (rare; example given: Arachne/Centaur getting Living Lightning).
- Each ability once per round unless **Rapid** (upgrades like Fireball II count as the same ability).
- **Secret Art** / **Esoteric Art**: only one (combined) per encounter, and not outside encounters unless stated.
- **Elemental Mastery**: lets you use that element with channeling weapons + minor harmless magic tricks.
- **Breakthroughs**: bought with EXP only (no IP, no class tree). Once each unless stated; some have levels and prerequisites. List: /breakthroughs/ (89 results).
- Starting build budget: 300 breakthrough EXP + 1,000 class EXP + 3 IP + 10 skill points + race bonuses.

## 5. Skills
- 10 starting points. **Expertise**: a narrow specialty under a skill; **each point spent = 2 expertise points**. Only the single highest expertise applies per roll.
- **Caps:** 15 points per skill, 15 per expertise. At **Skybound tier (5k Spirit Core)** caps +5. At **10k Spirit Core** no cap. Bonuses from items/abilities ignore the cap.
- **Artisan skills** (crafting/gathering) can't be chosen with normal skill picks unless named. Cap 10 points and 10 per expertise (only one expertise per craft). Gathering skills: cap 15, no expertises.
- Artisan expertise options: Blacksmith (weapon groups, tools, artisan weapons); Alchemist (Flasks, Elixirs, Potions, Poisons, Salves); Farmer (Food, Alchemy units, Herbs); Carpenter (Bows, Crossbows, Staves, Wands, Slings, Whips, Buildings); Armorsmithing (Clothing, Light/Medium/Heavy armor, Shields); Artificer (Pistol, Shotgun, Musket, Sniper Rifle, Airships, Weapon/Assist/Basic Artifice).
- DCs: 10 initiate, 15 professional, 20 expert, 25 specialist, 30 master. "Pressured task": challenge HP reduced by roll totals.
- **"Non-crafting skill" = the 19 main skills**: Athletics, Riding, Deception, Roguecraft, Stealth, Artifice, Appraise, Common Knowledge, Flight, History, Linguistics, Magic, Medicine, Religion, Animal Husbandry, Insight, Perception, Survival, Art, Intimidation, Negotiation.

## 6. Skill encounters
Initiative order; one action per turn; Events have HP and a Hazard Counter (event fails at 0). Skill Check (d20 + skill vs DC, success = 1 damage, that skill is then used up vs that event). Skill Engage (use an ability; in combat costs 2 AP). Surprise: unaware side; non-surprised get +1 initiative; whoever triggers goes first. One Encounter Start ability each.

## 7. Combat
- Round = 10 seconds. Initiative 1d4 + bonus (min 0). Ties: PCs beat enemies.
- **Character types:** Boss (party-level threat, may have more AP/RP), Heroic/Elite (≈ one PC), Grunt (2 AP, 1 RP; many abilities work better or only on them; die at 0 HP).
- AP refills each turn; **RP only refills at the start of combat**.
- Reactions (RP-only abilities) resolve **last in, first out**; an invalidated action is cancelled and refunded.
- **Attack flow:** check range/cost -> accuracy roll -> damage roll -> defender chooses Dodge (1 RP), Block (1 RP, auto-hit but more Guard; can't be crit) or nothing -> Guard subtracts (min 1 unless Blocking) -> damage reduction -> HP -> other effects.
- **Damage:** Light 2d4 + Power (1 AP). Heavy 4d6 + 2 x Power (2 AP); two-handed melee 5d6 + 2 x Power. Precise 2d4 + Power, accuracy uses 2 x Focus, Pinpoint (2 AP). Improvised: Light 2d4 (no Power), Heavy 2d6 + Power. Unarmed: 1 damage unless proficient.
- **Crit:** natural 20 that hits -> max damage + Half Pierce. Blocking targets can't be crit.
- **True damage** ignores Guard/shields/temp HP. **Full Pierce** ignores Guard (not true damage). **Half Pierce** ignores Guard unless target Dodges/Blocks.
- **Temp HP** goes first, doesn't stack (higher wins), doesn't stop "on damage" effects.
- **On Hit** = accuracy succeeded. **On Damage** = damage dealt (> 0).
- **Downed** at 0 HP (prone, auto-hit, Guard 0, only "downed" actions). Below **negative max HP = Mortal Wound** -> dies at encounter conclusion unless removed.
- Ranged attack = ranged weapon or ability with range > 5ft/melee reach; **each ranged attack provokes AoO** from adjacent enemies unless **Safe**.
- **Cover:** Low +4 Evasion; High +6 Evasion +1 Guard; Full = untargetable. Peeking from cover counts as Low.
- **Hidden attacker:** first attack (2 AP or less) gains Trick Attack.
- Area: you're caught if at least half of one of your squares is covered.
- **Movement:** Move 1 AP per speed's worth; difficult terrain x2; can't end in occupied space; leaving threatened range provokes AoO (forced movement doesn't). Jump = Athletics result (+10ft with 5ft run-up, max speed per AP). **Fall: 1d6 true per 10ft**, prone at 30ft+. Dragging an ally halves speed.
- **Sizes:** Tiny (no space, up to 4/space), Small/Medium 5ft, Large 10ft, Huge 15ft+.
- **Stealth/Hiding:** Hide 3 AP (2 with +10 Stealth) behind cover; moving/attacking/non-Stealth abilities break it.
- **Escaping:** start turn on map edge and spend all AP.
- **Mounted combat:** you spend your AP for mount actions; most mounts move in straight lines; mount/dismount 1 AP (Riding DC 20 for 0 AP). Mounts: Dragonfly (tiny), Boar (small), Horse, Wolf, Pegasus, Wyvern (medium).
- **Damage types:** Physical (slashing/piercing/bludgeoning), Poison, Magic (Arcane, Fire, Water, Earth[Acid], Wind, Lightning, Frost), Divine (Holy, Dark[Necrotic]), Astra (fiends). Immunity to a main type covers its subtypes, not vice versa.

### Basic actions
Aurasense 0 AP (120ft: Boss/Heroic/Grunt) · Opportunity Attack 0 RP light / 1 RP heavy-precise (min damage = Power unless Blocked) · Block 1 RP · Dodge 1 RP · Crawl 2 AP · Defend 3 AP (next Dodge/Block 0 RP) · Disengage 2 AP · Drop Object 0 · Grab Ally 1 AP · Light 1 AP · Heavy 2 AP · Precise 2 AP · Hide 3 AP · Hunker Down 2 AP · Interact X AP (usually 1) · Move X AP · Overwatch 2 AP (90ft 90° cone) · Prepare X AP (base 1-2 AP actions only) · Push 2 AP (5ft, resist 1 RP) · Search 2 AP · Sneak 2 AP · Stand 1 AP · Thrown 1/2 AP (15ft) · Grapple 4 AP (escape at 8 power; upkeep 4 AP; not bosses).
Downed: Crawl, Grit 2 AP (heal 4), Play Dead 4 AP, Throw Rock 2 AP (2 dmg, 40ft). Grunt-only: Retreat 1 AP, Stride 1 AP. Encounter Start: Delay, Unsheathe.

### Encounter conclusion (in order)
1) one Conclusion action each: Draw Mana (+1), Gather Parts (Survival DC 15/20/25 grunt/heroic/boss), Scavenge, **Second Wind (heal 4d4)**, Treat Conditions (kit) · 2) deaths (Mortal Wound dies; other Downed -> 1 HP) · 3) injuries (roll d10 once if Downed: main hand, -2 RP, no mana from food, off hand, -10 speed, -1 AP, wound, eye -10/-3 hit, laceration, -5 speed) · 4) loot · 5) EXP.

## 8. Interlude (downtime)
- GM gives IP: 0 none, 1 days, 2 weeks, 3 months. **IP doesn't carry over.** Each IP gained also gives **1 Errand Point (EP)**. First errand per interlude free, more cost 1 IP each.
- Actions: Appraise Item (1 IP) · Class Action · Crafting (1 IP) · Gather (600 units; x2 with mastered T1 gathering class) · Heal Injury (1 IP) · Investigate · Job (1 IP = 300 Clim, +300 with a mastered crafting class) · **Learn Class (1 IP + tier x 100 EXP)** · Mentor Class (1 IP; student skips IP) · Open Shop (1 IP) · Recover (1 IP, remove one injury) · Research (auto 20) · Rest (+20% HP and mana as temp pools next adventure) · **Train (+25 EXP)**.
- Raising animals needs a Stable; hatch/grow/train cost IP.

## 9. Crafting & gathering
- **Crafting:** pay materials; 5 Crafting Dice (d10). Check = d10 + crafting skill (+ expertise) + modifiers; points must reach the item's Crafting HP or the craft fails and materials are lost. Actions: Basic Craft (1 die, Rapid), Beginner's Luck (1 die, 2d10 keep high, no skill), Standard Finish (2 dice, double points and end; not on modified items), Steady Craft (1 die counts as 5). Generic rerolls (e.g. Human racial) don't work; crafting-class abilities (e.g. Transmuter) do. Alchemy makes at least 3.
- Materials sell ~2 units per Clim (junk 4 per Clim). Carry max 1,000 units of each material.
- **Gathering:** 5 Strike Dice; check d10 + gathering skill vs node NP (normal) and LP (lucky). Actions: Basic Strike, Lucky Strike, Novice's Perseverance, Back To Basics, Iron Focus. One attempt per outcrop per day. Node variation d20 table (Explosive ... Exposed Rich).

## 10. Items & equipment
- Proficiency needed; a weapon group proficiency covers 1H and 2H versions. Non-proficient weapon = improvised; non-proficient armor/shield: "lowers the guard gained from it by 1" (rechecked 2026-10-22).
- **Dual wield** (two 1H): once per turn after a basic Light attack, a free 0 AP Light attack with the other weapon.
- 2H melee heavy = 5d6. Ranged ranges: 1H 60ft, 2H 120ft.
- **Weapon groups:** Small (hidden weapon: draw 0 AP, once/combat Trick Attack) · Polearm (+5ft reach, threatens 5-10ft) · Light Swords (Nimble: 5ft move after Light attack) · Longsword (Versatile: 1H alone +4 Block / 2H +1d4 on crit) · Dueling (3 attacks on one enemy -> next Dodge/Block vs it 0 RP) · Axes (Wild Swing: miss still deals 4/8) · Bludgeoning (Hollow Blow: +2/+4 if target Blocks) · Katana (Keen: crit 19-20) · Heavy Blades 2H (Overpower: +1d4/+1d12 on crit) · Twinblade 2H (dual-wield attacks).
- Ranged: Thrown (returns), Set of Missiles (30ft, doesn't break stealth), Bow 2H (240ft, shoot from above), Crossbow (-1/-2 Guard within 30ft), Musket 2H (-1 Guard), Sling (overcharge Heavy +1 AP for +9 dmg).
- Specialized: Pistol (0 AP draw, 2-hand +1/+2 acc), Shotgun (15/30ft, no AoO in melee), Sniper Rifle (720ft, +10 Perception scoped), Saboteur Thread Daggers (throw 30ft, recall 0 AP), Lance (mounted, polearm, max damage after 20ft move), Whip (+5ft reach, +1 dmg at exactly 10ft), Gauntlets (unarmed).
- Channeling: Wand (0 AP swap damage to a mastered/built-in element), Magic Staff (1 Mana: push 5ft on damage). Enchantments on channeling weapons apply to spells.
- Artisan weapons: Scythe (after Heavy, free Light on another enemy), Giant Scissors (+1 vs unarmored), Pickaxe/Sickle = axe, Hori = small, Smith's Hammer = bludgeoning.
- **Armor:** Light +1 Guard, -1 Init, -2 Evasion/Dodge, Block guard 4 · Medium +2, -2, -4, 8 · Heavy +3, -3, -6, 12 · Shield +4 Guard when Blocking · Greatshield +1 Guard, -1 Init, -2 Evasion, Block 8. One armor at a time.
- **Burden limit 10** (over = Rooted): 1H weapon 1, 2H 2, Light/Medium/Heavy armor 1/2/3, shield 1, greatshield 2, potion/elixir/flask 1, tool 1. Non-combat items from a pack cost 4 AP in combat.
- Poisons: 1 AP to apply; fixed hits/duration; only on damage. Artifices run on fuel shells (small reload 2 AP).
- Housing: plots, houses (Tiny-Estate), facilities with 3 levels (workshops +2/+4/+6, Infirmary, Dojo, Shrine, Sauna, Appraiser, Shop, Stable).
- Travel stealthily at half speed; group Stealth = average of highest and lowest rolls.

## 11. Keyword glossary (92 on /keywords/, condensed)
Active (no Prepare) · Aid (allies only) · Artillery (hits over cover, from above) · Augment (one augment per attack) · Blanketing (one roll for all targets) · Bleeding (1d6 true/turn) · Blinded X (-X accuracy; 3+ no ranged without locating; 5+ no Sure Hit) · Block Crush (ignores Block's extra Guard) · Broken · Burning X (X dmg end of turn; 1 AP removes) · Calcification (-1 Agility) · Challenge (attack someone else -> challenger gets melee AoO) · Charm · **Circuit (first use per combat -1 mana; then the discount is gone for all Circuit abilities)** · Combo (bonus right after the named ability) · Concentration (one at a time) · Crushing · Daze (lose 1 AP; immune until end of next turn) · Disarm · Divine (Chosen breakthrough changes Holy to your divine's type) · Domain (one per location) · Dual Wield · Enchantment (one per weapon) · Esoteric Art · Expose X (crit threshold -X) · Fire · Flashback · Full Pierce · Half Pierce · Half Rapid · Hellfire · Hiding · Illumination X (next attack vs you +X acc) · Immovable · Instant (interrupts, resolves first) · **Isolated (no allies within 10ft AND 2+ enemies or 1 boss within 10ft)** · Killing Blow · Lock On (ignores Dodge bonus) · Lockstep · Mandate · Miracle (one per encounter) · Mystic Eye · Ninjutsu (two free hands) · Offstep · Opener (first action of turn) · Opportunistic (replaces your AoO) · **Overcharge (pay extra AP/Mana for more power)** · Pass · Persist X (dispel costs +X) · Petrify · Pinpoint (ignore Guard = Focus) · Presence Concealment (spirit core reads 0; +5 Stealth) · Prone · Quick (second Quick ability in a turn +1 AP) · Rage (usable in Rage Stance) · Rapid (more than once per turn) · Regrowth · Root (can't move; Dodge 13 + Agility) · Safe (no AoO) · Salvo · Sanctify (attackers who hit you heal an enemy 3 + applier's Focus, -1 stack) · Scatter (separate rolls per target) · Secret Art · **Setup (finish next turn; you're Trick-Attackable while charging)** · Shaken (-1 max AP) · Shieldbreaker · Sickened · Sidestep (no AoO) · Slow (half speed) · Soaked X (+X Lightning damage taken) · Song (one at a time) · Sound · Spell (provokes AoO) · Stacking · Stagger X (-X Evasion) · Stance (one at a time) · Static X · Stealth (doesn't break Hiding) · Strafe · Stun · **Summon (max 2 active)** · Sunder X (-X Guard) · Sure Hit · Teleport · Toxic (1d6 Full Pierce poison/turn) · Transformation (one at a time) · **Trick Attack (target pays double RP to react)** · Type (one at a time) · Unarmed Strike · Unbalanced · **Upkeep (pay at start of turn or it ends)** · Weakened (max 2 AP, 1 RP).
Not on the glossary but used on pages: Tipsy, Haste, Wounded, Spirit Core tiers beyond "Skybound 5k" - still unknown.

## 12. What this means for the planner
- Build budget tracker: breakthrough EXP (300, separate pool), class EXP, IP, skill points, Clim, Spirit Core.
- Class cost calculator: unlock = tier x 100 EXP + 1 IP; each further step 100 EXP; apply duplicate (full) / overlap (half) refunds.
- Derived stat panel from section 3, with armor penalties (section 10).
- Skill panel: 10 base points + race + class L3 steps; expertise at 2:1; caps 15 (artisan 10); enforce "best single expertise".
- Damage preview: Light/Heavy/Precise formulas with Power/Focus; weapon group modifiers.
- Track masteries (element list) because many class requirements use them.
