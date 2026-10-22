# Lyrian Planner - Bugs & Missing Info

Things to go back and fix. Add new items at the bottom of the right section.
Mark fixed items by changing `[ ]` to `[x]`.

Site version when data was collected: **0.13.2** (shown at the bottom of every class page).
When the site version changes, recheck classes already entered.

## General
- [ ] **Data source:** lyrian.splatpass.net is an unofficial static copy (found by Grok), not the official site. The official site is https://rpg.angelssword.com/ (a JavaScript app that can't be read by page fetch). All data was checked against the static copy (v0.13.2), so spot-check against the official site when you can.

- [ ] **Rules text is own-words summaries, not official wording.** My page tools won't copy the
      site's rules text word for word, so every ability's `summary` is written in plain English.
      All numbers, costs, ranges, keywords, roles and skill/stat choices ARE exact.
      Fix options: screenshots/paste of exact text, or permission from Angel's Sword Studios.
- [ ] **Site gets updated over time.** Each class record has `checked` (date) and `version`.
      Plan: recheck old classes whenever the version number at the bottom of the site changes.
- [ ] **Level 3 skill step text** is stored as a summary + exact skill list. Every class so far
      uses the same pattern (+5 points, trade 1 point for 2 expertise in those skills). Flag any
      class that differs.

- [x] **Formulas & dice need the rulebook.** DONE: rulebook read 2026-10-21 - see RULES_REFERENCE.md (derived stats, attack/damage formulas, EXP/IP costs, keyword glossary). Note the site copy of the rulebook cuts off in "Food and Rest", so rest/HP recovery rules are still MISSING.
- [ ] (old note) **Formulas & dice need the rulebook.** Formulas like "11 + (2 x Power)" are recorded as the
      page shows them, but terms (Guard, Circuit, Overcharge, Upkeep, Encounter Start/Conclusion,
      AP/RP/MP, Challenge, etc.) and any dice rolls can't be turned into planner math until the
      rulebook (https://lyrian.splatpass.net/rulebook/) is read. Do this before building calculators.
- [ ] **"Helps unlock" routes not stored yet.** Each class page lists which later classes it helps
      unlock (useful for long-term build planning). Not captured in records yet; add in a later pass.
- [ ] **Granted abilities.** Some key features grant an extra ability (kind: "granted",
      grantedBy: ...). Planner UI needs to show these.

- [ ] **Class list: 185 records = 184 of the 185 classes on the site index + Armiger.**
      The index page and sitemap both cut off (the sitemap stops after Oracle), so classes after
      Oracle were found through "Helps unlock" lists, requirement lines, the abilities index and
      keyword pages. **One index class is still not found.** All classes on the sitemap (A-Oracle)
      are present. To find the last one: screenshot the class index (sorted Z-A) and compare.
      Found only by searching (not in any list read): Searing Lotus Style, Shield Saint, Shinigami
      Eyes, Sky Knight, Summoner, Tavern Brawler, Timberwright, Trickster, True Shinigami Eyes,
      Vampire, Vampire Lord, Wildheart.
- [ ] **Blank steps on the site** (recorded as MISSING, ability stored as "unlisted"):
      Botanist L8, Jonin L4, Ninja L8, Shadowbringer L2, Warding Mage L4.

## Abjurer

- [ ] Mana Shield cost shows on the page as "No listed cost" (its text says 1 AP + 1 Mana if not
      used at Encounter Start). Recorded exactly as the page shows it.

## Acolyte

- [ ] Entry requirement is recorded as "Divine's Chosen breakthrough, OR being Human" - confirm
      exact wording from the page.
- [ ] Acolyte's Journey: two page reads disagreed on whether "+5 Religion" is its own Benefit or
      part of another. Recorded as Benefit 2 (4 benefits total, plus a "+5 skill points" Grants line).
      Confirm with a screenshot.
- [ ] Miracle: Sanctuary sphere HP recorded as 20 + (8 x Toughness). One read noted the page shows
      it in an unusual way ("Toughness x 8"). Confirm.
- [ ] Miracle: Sanctuary range recorded as "5ft radius centered on self" - confirm exact label.
- [ ] Cure Touch / Light's Care / Sanctuary show a Requirements heading with "-" on the page.
      Recorded as no requirement (null).

## Adventurer

- [ ] Entry requirements show as "None" - recorded as null.
- [ ] Level 3 skills: page says "any non-crafting skill" with no list. Recorded as
      options: "ANY_NON_CRAFTING". Need the official list of crafting vs non-crafting skills.
- [ ] Adventurer Essentials refund rule (half EXP if you already know Presence Concealment via
      Saboteur or Demon WI clan; lineage reduction first). EXP costs/refunds need the rulebook.
- [ ] Adventurer Essentials weapon/armor choices: need the official weapon group list
      (common vs specialized) and armor categories for planner dropdowns.
- [ ] Power Jump: one page read tied the "no attacks of opportunity / no fall damage" part to
      "0 AP" in an unclear way. Recorded as always true - confirm.
- [ ] Mana Razor: page read listed a "Mana Razor (until end of turn)" grant line - confirm if it's
      a status effect name.
- [ ] Efficient Spirit Control: "next non-healing keyword action" wording is odd - confirm.
- [ ] Circuit keyword / "reset your Circuits" - needs rulebook.

## General (added during Aerial Mage - Angelblooded batch)

- [ ] **Crafting classes use different Level 3 steps.** Agrarian and Alchemeister give +5 in one
      crafting skill and the page doesn't mention expertise trading (recorded expertiseTrade: null).
      Alchemist gives fixed +5 Alchemy PLUS +5 among a list (recorded with `fixed`).
      Alkahest gives 10 "Transmuter points" instead (step type: "special"). Planner must handle these.
- [ ] **Sub-abilities.** Crafting key features grant a group of small abilities with Crafting Point
      costs (stored as `subAbilities`). Planner UI needs to show them.
- [ ] **Skill category lists needed:** "any non-crafting" (Adventurer), "any non-crafting or
      gathering" (Angelblooded), "any crafting discipline" (Alkahest). Need official lists of
      crafting and gathering skills.
- [ ] **Roles shown without Main/Secondary labels** on some pages. Aerial Mage and Angelblooded
      read as one role only (Specialist, Utility) - matches the class index. Confirm.

## Aerial Mage

- [ ] Aerial Mode Switch: page read said "airship's movement speed drops to 10ft" in Hover mode -
      recorded as YOUR movement speed. Confirm wording.
- [ ] Take Off cost shows "No listed cost" (Encounter Start ability). Recorded as shown.
- [ ] Mixed naming on page: "Aerial Stave" vs "Aerial Staff". Recorded as shown in each spot.
- [ ] Strafe ("100 or more Strafe"), Lock On, Sure Hit, Full Pierce, Airship shots - need rulebook.

## Aeromancer

- [ ] Wind Master refund: page says refund possible and that Windbringer and Zephyr Warder also
      grant it, but the refund amount wasn't captured. Recorded amount: "MISSING".
- [ ] Wind Buffet: smaller targets roll with 1d4 penalty, larger with 1d4 bonus - dice, needs rulebook.
- [ ] "Save against Potency" - Potency formula needs rulebook.

## Aeromaster

- [ ] Controlled Wind wording is unclear (choose to push the full max distance vs. pick a shorter
      distance). Confirm with a screenshot.
- [ ] Cyclone: rules text lists no damage, but the class's tactical guidance says it deals a slight
      amount of damage. Recorded with no damage.

## Aetherie

- [ ] Conduit: no cost, range or keywords on the page. Recorded as shown.
- [ ] "Blinded 5" and "Block Crush" - need rulebook.

## Agrarian

- [ ] Level 3: +5 Farming only; expertise trading not mentioned. Confirm.
- [ ] Key feature and its granted ability are both named "Expert Farmer". Granted one stored as
      id "expert-farmer-crafting".
- [ ] Terracing: no keywords section, but Overcharge appears in its text. Recorded keywords: [].
- [ ] Rare/mystic herb rarity, Food units, crafting dice/points - need rulebook.

## Alchemeister

- [ ] Level 3: +5 Alchemy only; expertise trading not mentioned. Confirm.
- [ ] Counter-Potion cost shows "Variable RP"; text says X = the AP cost of the used item, but doesn't
      state outright that you pay X RP. Confirm.
- [ ] Detailed Finish upgrades the crafting dice to 2d8 - needs rulebook (base crafting dice).

## Alchemist

- [ ] Level 3 has fixed +5 Alchemy plus +5 choice; trade rule wording covers "these skills" -
      confirm it applies to the Alchemy points too.
- [ ] "1 IP" / "EP action" / interlude points - need rulebook.

## Alkahest

- [ ] Level 3 isn't a normal skill step (10 Transmuter points + discipline choice). Confirm details.
- [ ] Difficulty shows 2/5. Recorded 2.
- [ ] Transmutation Tricks Benefit 3 text only says you may use "the following abilities" and
      links Transmuter Tricks. Recorded as granting Transmuter Tricks.
- [ ] Siphon Material: ability shows no cost, but tactical guidance says it costs an interlude point.
- [ ] Proto Armatae HP shows "–" in its stat block but text gives 15 + 5 x Focus. Recorded formula.
- [ ] Evasion 9/19 and Guard 4/14 - meaning of the two numbers needs rulebook.

## Amanita

- [ ] Mushroomize cost: 2 AP, with "1 RP instead of 2 AP" in the text. Recorded cost "2 AP".
- [ ] Spore Symbiote comes from Mycomancer (the required class) - planner may need to link them.
- [ ] Damage Reduction, Amoxicillin, Downed state - need rulebook.

## Angelblooded

- [ ] Role read as "Main: Main, Secondary: Utility" - recorded role Utility, no secondary
      (matches the class index). Confirm.
- [ ] Angelic Presence grants +1 Presence (stored as `grants`). Planner should add it to stats.
- [ ] God's Blessing: no cost and range "-" on the page. Recorded as shown.

## General (added during Animal Summoner - Bajiquan Style batch)

- [ ] **Shared abilities across classes.** Some abilities appear in more than one class (e.g.
      Battle Cast: Archsage + Battle Mage; Status Assessment II: Archer + Marksman). Each class
      stores its own copy. Planner should detect duplicates for refunds/overlap.
- [ ] **Refund amounts not always captured.** Where the page only says "refund possible",
      recorded amount: "MISSING" (Aeromancer, Archer, Archsage so far).
- [ ] **Heart/Soul steps can grant extra things.** Armorsmith's Heart also gives a proficiency
      choice (stored as `alsoGrants`). Watch for more.
- [ ] **Key ability and granted ability with the same name.** Where this happens, the key gets
      "(key)" in its name and "-key" in its id (Animal Summoner, Archer).

## Animal Summoner

- [ ] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index).
- [ ] Wolf, Boar and Giant Spider stat blocks are NOT on the class page. Need monster pages.
- [ ] "Summon limit" and "slots" - need rulebook.
- [ ] Summon Animal picks a random animal - how it's rolled isn't stated. Needs rulebook.

## Anti-Mage

- [ ] Role read as "Main" + "Support" - recorded Support only (matches class index).
- [ ] Counterspell cost shows "1 or 2 RP" but its text describes a variable RP cost. Confirm.
- [ ] "Grunt" enemy type, Bounded Fields, Enchantment keyword - need rulebook.

## Arcanist

- [ ] Magic Missile II has no Requirements heading on the page (others show "-"). Recorded null.
- [ ] Expanded Circuits grants +2 max Mana (stored as `grants: { maxMana: 2 }`).

## Archer

- [ ] Status Assessment II key: refund possible, also granted by Marksman. Amount MISSING.
- [ ] Unerring Aim: no cost, range, keywords or requirements on the page.
- [ ] Snap Shot II: "Focus isn't added to this roll" - roll math needs rulebook.

## Archsage

- [ ] Role read as "Main" + "Utility" - recorded Utility only (matches class index).
- [ ] Battle Cast (Level 2) shows refund possible; also granted by Battle Mage. Amount MISSING.

## Armorsmith

- [ ] Level 3: expertise trade wording names Athletics, Riding, Common Knowledge only - unclear
      if the fixed Armorsmithing points can be traded too. Confirm.
- [ ] Heart step also grants proficiency in Heavy Armor OR Greatshields (needs a dropdown).
- [ ] Armorsmith Core Crafting: key Benefit 4 says "Armorsmith Core Crafting" but the granted
      ability on the page is named "Armorsmith Basics". Stored as "Armorsmith Basics (crafting abilities)".
- [ ] Thermal Quench cost line shows "1 Crafting Dice" with an extra "Other" label. Confirm.
- [ ] Modification A / Frame details are on Universal Armor + armor pages (not captured).

## Artificer

- [ ] Level 3 lists both "Artificing" (fixed +5) and "Artifice" (in the choice list). These may
      be two different skills or a site typo. Confirm.
- [ ] Artifice Modification C: text says it modifies a "weapon" despite the name. Possible site typo.
- [ ] Blackbird cost: "1 AP" plus "1 Small Shell" (tagged "Other"). Recorded "1 AP, 1 Small Shell".
- [ ] Overclock: +1d10 crafting points - needs rulebook.
- [ ] "clim" currency and material unit values - need rulebook/items pages.

## Assassin

- [ ] Devastating Strike III: "guaranteed maximum damage" - confirm wording and damage math.
- [ ] Death Mark: no listed cost (Encounter Start ability).

## Aurora Blade Style

- [ ] Ultimate name is spelled "Permafrost Guilotine" on the class index (one 'l'). One page read
      spelled it "Guillotine". Recorded the index spelling. Confirm.
- [ ] Rimestep has no Requirements heading; its trigger (target Slowed by a Frost attack) is in the
      rules text. Recorded requires: null.
- [ ] Rimestep has an Overcharge in its text but "Overcharge" isn't in its keyword list.

## Bajiquan Style

- [ ] Zhen Jiao: no cost, range, keywords or requirements on the page.
- [ ] Elbow Uppercut and Tetsuzanko show a "Combo" heading in the rules - recorded inside summary.
- [ ] Rushing Knee Drop is mentioned (from Martial Artist?) - not on this page.

## General (added during Bard - Botanist batch)

- [ ] **Missing ability steps.** A class step can be blank on the site. Stored as
      `ability: null, missing: "MISSING - ..."`. Planner must show these as missing (Botanist L8).
- [ ] **Abilities not in the progression.** Some pages list an ability under "Abilities unlocked"
      that no step grants. Stored with kind: "unlisted" (Botanist: Forager's Eye).
- [ ] **Gene inventory / other counters.** Biochemist adds a gene-inventory counter
      (`grants: { geneInventory: 1 }`) from two abilities. Planner may want to total these.

## Bard

- [ ] Role read as "Main" + "Support" - recorded Support only (matches class index).
- [ ] Toss a coin: cost recorded as "Errand" (page says it's an Errand action, no cost line).
- [ ] Inspiring Song +1d4 / Dirge -1d4 - dice, needs rulebook.
- [ ] Entry requirement includes Art expertise in Singing/Idol/an instrument - planner needs
      Art expertise sub-types for this check.

## Battle Mage

- [ ] Battle Cast (Level 4) shows refund possible; also granted by Archsage. Amount MISSING.
- [ ] Shooting Form range shows "-". Recorded null.
- [ ] Circle Swing has no Keywords line on the page. Recorded [].
- [ ] Mage Armor add-ons (Barrier, Fortress, Manaweave, Protective Coating, Spidersilk) are on
      armor pages - not captured.

## Battlemaster

- [ ] Ability name spelled "Skillfull Blow" (two l's) on the site. Recorded as shown.
- [ ] Arms Mastery proficiency doesn't count for class requirements - planner should respect this.

## Berserker

- [ ] Fallen Friend triggers on a "Heroic-tier ally" - needs rulebook.
- [ ] Soul options listed as "Power or Focus" (that order). Recorded as shown.

## Biochemist

- [ ] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index).
- [ ] Chimera subraces and their genes/abilities - need races pages (races.js later).
- [ ] Alchemy Elixirs (Rabbit, Reaper, Shark, Tunnel, Bull, Bear) - need items pages.

## Black Oath Style

- [ ] Eclipse Breaker: tactical guidance says no mana cost, can start with 1 AP and cancel if no
      one's in the area - not in the ability block. Recorded the ability block only.
- [ ] "Setup" keyword (charging abilities) - needs rulebook.

## Blacksmith

- [ ] Weapon Maintenance has no listed cost, range or duration.
- [ ] Crit ranges (19-20, katana 18-20) - needs rulebook/weapons pages.

## Bloodbinder

- [ ] Entry requirement "At least 1 class mastered" (worded differently from "Any class mastered"
      on other pages - likely the same). Recorded as shown.
- [ ] Crimson Enmity: no cost, range or keywords on the page.

## Bodyguard

- [ ] Cost lines show run together on the page ("0 AP3 MP", "0 RP2 MP"). Recorded as
      "0 AP, 3 MP" and "0 RP, 2 MP".
- [ ] Vengeance range is "Weapon Range" (not "Melee Weapon Range"). Recorded as shown.

## Botanist

- [ ] **Level 8 Ultimate is BLANK on the site** (the class index also shows an empty 5th ability).
      Recorded as MISSING. Recheck when the site updates.
- [ ] **Forager's Eye** is listed under Abilities unlocked but isn't in any progression step.
      Stored as kind "unlisted". Its Combo text is confusing (mentions Lifebeat Sense with an
      unstated bonus). Confirm with a screenshot.
- [ ] Felling Strike and Craft Pemmican are mentioned in the tactical guidance but have no entries.
- [ ] Level 3: +5 Foraging only; expertise trading not mentioned.
- [ ] Trail Mix cost "Rest Action" (plus an "Other" tag); Stalks of Comparison cost "1 Strike Dice"
      (plus "Other"). Recorded without the "Other" tag.
- [ ] Node Points, Lucky Points, Strike Dice, Outcrop tiers - gathering rules, need rulebook.
- [ ] Trail Mix mentions "Mirane" getting 0 Mana - probably a race or character. Confirm.

## General (added during Brawler - Cultivator batch)

- [ ] **Key abilities that grant skill points.** Cavalier (+5 Riding) and Cultivator (+5 among a
      list) give skill points on unlock, on top of Level 3 (stored in the key's `grants`).
      Acolyte did the same (+5 Religion). Planner must add these to skill totals.
- [ ] **Key abilities that grant an element Mastery.** Cryomancer's Ice Cold grants Frost Mastery
      (`grants: { mastery: "Frost" }`). Masteries unlock other classes (e.g. Aeromancer: "Wind
      mastered"). Planner should track masteries.

## Brawler

- [ ] Vital Drive II cost shows "0 RP Variable MP" run together. Recorded "0 RP, Variable MP".
- [ ] Counter Stance: ability says cancel for 0 AP or 1 RP; tactical guidance says it can't end
      until your next turn. Recorded the ability block.
- [ ] Suckerpunch: tactical guidance says only usable when already in melee range at encounter
      start - not in the ability block.

## Cannoneer

- [ ] Cannons' "1 attack limitation" and splash mods - need weapons/items pages.
- [ ] Sunder 2 - needs rulebook.
- [ ] Quantum Bomb lists only "heavy attack" with Setup - seems light on detail. Confirm.

## Carpenter

- [ ] Level 3 expertise trade: "these skills" is ambiguous (Carpentry too, or only the 3 choices?).
- [ ] Felling Strike: no keywords listed on the page.
- [ ] Hammer and Nail has the Rage keyword (unusual for a crafter). Recorded as shown.

## Cavalier

- [ ] Role read as "Main" + "Utility" - recorded Utility only (matches class index).
- [ ] Spirit Jump: same unclear "For 0 AP, the fall doesn't provoke..." wording as Adventurer's
      Power Jump. Recorded as always true.
- [ ] Mounts and mount stats - need rulebook/monsters pages.

## Chronofighter

- [ ] Past Self (granted) has no Requirements section. Recorded null.
- [ ] Accelerating Strike: "Initiative rises by up to 2" - confirm exact wording.
- [ ] "Opener" keyword and the Delay encounter start action - need rulebook.

## Chronomancer

- [ ] No abilities on this page show a Requirements line at all. Recorded null.
- [ ] Galaxy Stop: "non-heroic units" - needs rulebook.

## Colossus

- [ ] Mighty Leap: save vs Unbalanced - no save type given on the page.
- [ ] Level 3 skill list is only 4 skills (no Common Knowledge). Recorded as shown.

## Cryomancer

- [ ] Glacial Wall: "4 x X" cubes - X isn't defined on the page (probably Mana spent, given the
      "Variable MP" cost). Confirm.
- [ ] Sheet Ice "20x20 area" - no unit on the page (probably ft).
- [ ] Frost Coffin cubes have HP 15 + Focus (Glacial Wall cubes are 20 + Focus). Recorded as shown.

## Culinarian

- [ ] Craft Pemmican listed with the "Errand" keyword and no cost line.
- [ ] Pepper Spray keyword shown as "Blinded" (a condition, not a usual keyword). Recorded as shown.
- [ ] Oil Slick "15x15 area" - no unit (probably ft). No keywords listed.
- [ ] Food bonuses (+1 Focus etc.) - planner could track as temporary buffs later.

## Cultivator

- [ ] Role read as "Main" + "Utility" - recorded Utility only (matches class index).
- [ ] Cultivator's Journey Benefit 3 gives +5 skill points from the SAME list as Level 3 - a page
      read called it a duplicate. Recorded both. Confirm it's really two separate +5s.
- [ ] Index lore talks about philosophies/paths, but the page has no path choices. Nothing to record.

## General (added during Curse Knight - Electromancer batch)

- [ ] **Race-based entry routes.** Dragoon can be entered by being a Jiangshi instead of having
      10 Athletics (Jumping) expertise. Planner will need race data (races.js) for these checks.
- [ ] **Expertise sub-skills in requirements.** Dragoon needs "Athletics (Jumping)" expertise;
      Bard needed "Art (Singing)" etc. Planner needs named expertise sub-skills.
- [ ] **Empty overview/guidance sections on some pages** (Cutthroat, Dark Priest). Not needed for
      planner data; noted only.

## Curse Knight

- [ ] Role read as "Main" + "Striker" - recorded Striker only (matches class index).
- [ ] "Lockstep" keyword on Backlash and "Climax Arts" in Devil's Curse - need rulebook.
- [ ] Devil's Blow: page lists Full Pierce as a keyword but the text says the attack does NOT have
      Full Pierce (the self-damage on a roll of 1 does). Recorded keyword as shown. Confirm.

## Cutthroat

- [ ] Exposing Stab says "Devastating Strike" (no number) - assumed it means Devastating Strike II
      on this class. Confirm.
- [ ] Artery Cut: critical hit rules - need rulebook.

## Daionmyoji

- [ ] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index).
- [ ] Level 3 list shows "Magic Perception" with no comma. Recorded as two skills (Magic,
      Perception). Possible site typo - confirm.
- [ ] Prepared Talisman: cost "No listed cost" and requirement "Special". Recorded as shown.
- [ ] Talismans, Create Talisman, Sealing/Secret Talismans, calligraphy units - come from Onmyoji
      (the required class). Need Onmyoji page.
- [ ] Spirit Core values and "non-heroic" - need rulebook.

## Dark Priest

- [ ] Soul Absorption key grants Elemental Mastery: Dark (stored as `grants: { mastery: "Dark" }`).
- [ ] Gloom Infusion: "Type" keyword and creature type "Dark II" - need rulebook.
- [ ] Stygian Screen: Concentration but no stated duration.

## Deadeye

- [ ] Aimed Shot (Level 6) shows refund possible; also granted by Sniper. Amount MISSING.
- [ ] Countershot has no keywords listed.
- [ ] Status Assessment III also shows RP % (Archer's II shows HP % only).

## Death Knight

- [ ] Unholy Strength grants +2 Power and +2 Focus while active (temporary buff).
- [ ] Call of the Grave: page read gave no damage dice for the Heavy Attack (normal - uses weapon).

## Dragoon

- [ ] Level 3 includes "a relevant Expert Knowledge skill (DM approval)". Recorded as an option label.
- [ ] Jump (granted) range shows "-". Recorded null.
- [ ] Entry: "Lancer mastered" + (10 Athletics (Jumping) expertise OR Jiangshi race).

## Duelist

- [ ] Parry comes from Fencer (the required class). Need Fencer page to link.
- [ ] Endless Waltz wording ("two Light Attacks, then one more on damage") - confirm exact sequence.

## Earthcleaving Style

- [ ] "Half Pierce" keyword and "Offstep" - need rulebook.
- [ ] Measured Collapse always counts as rolling a 2 for accuracy - confirm (seems unusual; maybe
      it's a bonus of 2?). Recorded as the page read stated.

## Electromancer

- [ ] Superconductor key grants Elemental Mastery: Lightning (stored as `grants: { mastery: "Lightning" }`).
- [ ] Cost lines show run together ("1 AP1 MP"). Recorded with comma.
- [ ] Static (Focus x 3 etc.) - Static rules need rulebook.
- [ ] Bolting: tactical guidance says it can't be used indoors - not in the ability block.

## General (added during the overnight run)

- [ ] **Class list page is too long to read past ~52 classes.** The overnight run used the site's
      sitemap.xml for the class list (it covers A through Oracle). For classes after Oracle, names
      were collected from "Helps unlock" sections and entry requirements, then counted against the
      site's total of 185. See the end-of-run summary for the final count.
- [ ] **Armiger is in the sitemap but NOT on the class list page.** Its page exists and loads fully.
      Added in alphabetical order with `onClassIndex: false`. It may be hidden/unreleased - confirm.
- [ ] **Masteries as entry routes.** Eremancer ("Dark Mastery"), Electromancer ("Lightning
      mastered"), Aeromancer ("Wind mastered"), Cryomancer ("Frost mastery") can be entered via an
      element mastery. Keys that grant masteries so far: Cryomancer (Frost), Dark Priest (Dark),
      Electromancer (Lightning), Eremancer (Dark).
- [ ] **Mark of Justice / Holy weapon key ability** referenced by Exalted Blade come from Sword
      Paladin (its required class).

## Armiger

- [ ] Not on the class list page (see General). Role read as "Main" + "Utility" - recorded Utility.
- [ ] Fast Dimensional Equip requirement says "Dimension Armory" (not "Dimensional") - site typo.
- [ ] Send To Armory has an Overcharge in its text, but Overcharge isn't in its keywords.

## Electromaster

- [ ] Static Overload: no damage stated on a successful save. Daze keyword - needs rulebook.
- [ ] Thunderstorm: "cover is figured from above the target" - needs rulebook (cover rules).

## Elementalist

- [ ] Elemental Convergence lets you count as having mastered an element for the encounter -
      planner should NOT treat this as a permanent mastery for class entry.
- [ ] Elemental Bolt lists condition names (Burning, Soaked, Illumination, etc.) as keywords.
      Recorded as shown.
- [ ] Elemental Burst: 2d4 + Focus - dice, needs rulebook.

## Eremancer

- [ ] Role read as "Main" only - recorded Striker (matches class index).
- [ ] Dark Bolt lists both Half Pierce and Full Pierce as keywords. Recorded as shown.
- [ ] Energy Drain: "universal" damage resistance types - needs rulebook.
- [ ] "Playing Eremancer" guidance has only an image (no text).

## Evil Eye

- [ ] Entry needs "at least 1 mystic eye slot open" - planner needs to track Mystic Eye slots.
- [ ] Key ability shares the class name; stored as "Evil Eye (key)".
- [ ] Evil Eye of Death: page lists no save. Recorded as shown.
- [ ] "Playing Evil Eye" guidance says only "Soon".

## Exalted Blade

- [ ] Role read as "Main" + "Striker" - recorded Striker only (matches class index).
- [ ] Undying Justice (Level 2) shows refund possible; also granted by Exalted Shield. Amount MISSING.
- [ ] Heavy Blade bonus damage and Anathema mentioned - from other classes/items.

## Exalted Shield

- [ ] Undying Justice (Level 2) shows refund possible; also granted by Exalted Blade. Amount MISSING.
- [ ] Divine Shield: "must be first action of your turn" is in its text, not a Requirements line.
- [ ] Holy Declaration has no listed trigger/requirement, but its text says Block "against the
      attack" - it's probably a reaction. Confirm.

## Excavator

- [ ] Level 3: +5 Mining only; expertise trading not mentioned.
- [ ] Focused Detonation / Take it easy cost "1 Strike Dice" (plus an "Other" tag). Requirement
      text on site says "Must in a gathering session" (missing "be"). Recorded corrected wording.

## Executor

- [ ] Role read as "Main" + "Striker" - recorded Striker only.
- [ ] Entry: "Any mastered class + Any points in Acolyte" - unclear if "points" means levels in
      Acolyte. Confirm.
- [ ] Ultimate name is "Ave María" (with accent); Deus Vult text writes "Ave Maria". Recorded as shown.
- [ ] Eagle Hunt range "-". Recorded null.

## Fae Knight

- [ ] Entry requires the Fae race ("Fae only") - needs races.js.
- [ ] Fluttering Blade "Active" keyword and "Pass" keyword - need rulebook.
- [ ] Petal Swirl Flash refreshes "Faerie Flash" - probably a Fae racial ability.

## Fae Knight: Willow Style

- [ ] URL slug has a double hyphen ("fae-knight--willow-style"); record id is "fae-knight-willow-style".
- [ ] Level 3 wording read as "5 skill points in ONE of" the listed skills - unusual. Recorded as
      the normal pick-among-list. Confirm.
- [ ] Heavy Spin enhancement: ability text says 2 Mana; tactical guidance says 1 Mana. Recorded 2.
- [ ] Ultimate is named "Secret Art ~ Faerie Light Eyes: Jade Shelterbelt" - links to the
      Faerie Light Eyes class somehow. Confirm.

## Faerie Light Eyes

- [ ] Role read as "Main" + "Controller" - recorded Controller only.
- [ ] Entry needs the "Mystic Eyes of Faerie Light" breakthrough + an open mystic eye slot.
- [ ] Time Dilation: Dodge bonus "2X" - X isn't defined (probably Mana spent, given "Variable MP").
- [ ] Boss enemies, Esoteric Arts - need rulebook.

## Farmer

- [ ] Level 3 recorded as fixed +5 Farming plus +5 choice (same pattern as other crafters). The
      page read said "no fixed points" but also "5 points to spend on Farming". Confirm.
- [ ] Farming plots, seeds, harvest difficulty - need rulebook (farming rules).

## Fencer

- [ ] Lunge (Level 4) shows refund possible; also granted by Lancer. Amount MISSING.
- [ ] Parry range "-". Recorded null. Parry's "regain 1 RP" is a rules effect, not a refund note.
- [ ] Nimble (light blades ability) - need weapons page.

## Fighter

- [ ] Fighter's Journey grants +5 HP (stored as `grants: { hp: 5 }`). Planner should add to HP.
- [ ] Power Strike keyword "Crushing" - needs rulebook.

## Five Harmonies Style

- [ ] Ultimate name spelled "Dharani: Blooming Conciousness" on the site (missing 's'). Recorded as shown.
- [ ] Luminous Form Stance mentions "Gravitional Ki" (site spelling) - another class's ability.
- [ ] The ultimate is a Secret Art (keyword) - recorded as shown.

## Flame Sentinel

- [ ] Controlled Blaze key grants Fire Mastery; refund possible (also granted by Pyromancer). Amount MISSING.
- [ ] Flame Infusion cost shows "1 AP, 0 MP". Recorded as shown.

## Flash Star Blade Style

- [ ] Role read as "Main" + "Striker" - recorded Striker only.
- [ ] URL slug ends with a hyphen ("flash-star-blade-style-"); record id has no trailing hyphen.

## Flowing Wind Style

- [ ] Plume-Treading Art: no cost or range on the page (passive). "Stacking" keyword - needs rulebook.

## Forager

- [ ] Level 3: fixed +5 Foraging plus +5 choice; trade wording "these skills" is ambiguous.
- [ ] Verdant Instinct / Divining Petalfall cost "1 Strike Dice" (plus "Other" tag).
- [ ] Expose condition - needs rulebook.
- [ ] Forager's Eye (seen on the Botanist page) is NOT on the Forager page either. Still unknown.

## Forgemaster

- [ ] Level 3: +5 Blacksmithing only; expertise trading not mentioned.
- [ ] Level 6 "Expertise Study (Blacksmithing)" grants expertise points + a weapon proficiency
      (stored in `grants`). Planner should add these.
- [ ] Secret Art: Shatter - "non-divine arms weapon" and crafted enhancements - need items rules.

## Fusilier

- [ ] Salvo keyword and Dual Wield - need rulebook.
- [ ] "Playing Fusilier" guidance is effectively empty.

## Geomancer

- [ ] Role read as "Main" + "Controller" - recorded Controller only.
- [ ] Tremorsense key grants Earth Mastery; refund possible (also granted by Granite Warden). Amount MISSING.
- [ ] Fissure requirement shows "Special". Recorded as shown.
- [ ] Mud Wall: "1ft thick" / "4ft high" - unusual vs 5ft grid. Recorded as page read stated.

## Geomaster

- [ ] Earthen Divide has an Overcharge in its text, but Overcharge isn't in its keywords.

## Grandmaster

- [ ] Role read as "Main" only - recorded Striker (page read named Striker as main).
- [ ] Puppet piece stats (HP 20 + Focus; Knight/Bishop/Rook/Queen movement) - recorded in summaries.
      Summon Piece has an Overcharge in its text but no Overcharge keyword listed.
- [ ] Level 3 read as "+5 to one of" the list - recorded as the normal pick-among-list. Confirm.

## Granite Warden

- [ ] Roles read as "Main: Support, Secondary: Defender" (labels and words run together). Confirm.
- [ ] Tremorsense key: refund possible (also granted by Geomancer). Amount MISSING. Same ability as Geomancer's.
- [ ] Steady Ground: "1 RP (or 2 AP instead)". Recorded cost "1 RP" with the alternative in the summary.

## Gravitect

- [ ] Role read as "Main: Controller" only.
- [ ] Gravitational Push lists no save. Singularity Collapse save type not given.

## Graviturge

- [ ] Role read as "Main: Striker" only.
- [ ] Localized Collapse is explicitly NOT a Spell (no Spell keyword). Recorded as shown.

## Great Berserker

- [ ] Single-Minded Fury: +1d4 / -2d4 accuracy - dice, need rulebook.
- [ ] Rage stance comes from Berserker (required class).

## Great Knight

- [ ] Intercept range is "Your movement speed". Recorded as shown.
- [ ] Bulwark buff (3 less damage) - recorded in summary.

## Guardian

- [ ] Hold the line lists "Immovable" as a keyword (a condition). Recorded as shown.

## Gun Paladin

- [ ] Entry requires the Human race - needs races.js.
- [ ] Divine Weapon key: refund possible (also granted by Shield Paladin, Sword Paladin). Amount MISSING.
- [ ] Sanctity Aura says "Holy Weapon" while the key is named "Divine Weapon" - site inconsistency.
- [ ] Divine Barrage: X allies and the Variable MP cost aren't defined (probably X = Mana spent).
- [ ] No ability on this page lists keywords except Sanctity Aura (Aura).

## Gunfu

- [ ] Heart step text reads "Fitness Cunning, Awareness or Presence" (missing comma). Recorded as
      4 options: Fitness, Cunning, Awareness, Presence. Confirm.

## Gunslinger

- [ ] Gunslinger's Agility grants +1 Initiative (stored as `grants: { initiative: 1 }`).
- [ ] Ultimate name "Secret Art: Fan the hammer" (lowercase h) - recorded as shown.

## Harrier

- [ ] Knockback Shot / Pinning Shot range shows "Ranged Weapon Range (Up to 60ft)". Recorded as shown.
- [ ] Paragon of Virtue (a paladin ability) mentioned.

## High Priest

- [ ] Role read as "Main: Healer" only.
- [ ] Walking Church grants a "church" status (DR 1000). Recorded as shown.

## Highlander

- [ ] Role read as "Main" + "Striker" - recorded Striker only.
- [ ] Aftershocks mentions "Reaver" abilities - Reaver is a Tier 3 class (requires Highlander mastered).

## Hoarfrost

- [ ] Role read as "Main" + "Controller" - recorded Controller only.
- [ ] Eternal Mirane Cage: "negative its Max HP + 1" wording - confirm.
- [ ] Whiteout range "2500ft radius on self". Recorded as shown.

## Hussar

- [ ] Cavalry Charge cost "Variable AP" (up to 4). Recorded as shown.

## Hydromancer

- [ ] Role read as "Main" + "Specialist" - recorded Specialist only.
- [ ] **Level 3 is unusual:** +5 points in "any one Reason, Awareness or Presence category skill"
      (recorded options: "ANY_REASON_AWARENESS_OR_PRESENCE_SKILL"). Needs the skill-to-stat category
      list from the rulebook. Expertise trading not mentioned.
- [ ] Mage of the Tides key grants Elemental Mastery: Water.
- [ ] **Cost lines show both AP and RP** ("2 AP 1 RP") because you pay with EITHER. Recorded as
      "2 AP or 1 RP" (Aqua Drill), "1 AP or 1 RP" (Crashing Foam Wave), "2 AP or 1 RP, 3 MP" (Cure Water).
      Confirm.
- [ ] Aqua Drill: paying with RP adds +1 Mana (noted as a "refund" by the page read - it's really a cost change).
- [ ] "Domain" keyword - needs rulebook.

## Iai Style

- [ ] Role read as "Main: Striker" only.
- [ ] Iai state / Sheathed state rules - recorded in summaries. Killshot mentioned (another ability).
- [ ] Chiburi Noto range "Self (Weapon)". Recorded as shown.

## Idol

- [ ] Roles read as "Main: Support, Secondary: Healer". Confirm.
- [ ] Idol's Journey key grants +5 Art (stored in `grants`), like Acolyte/Cavalier.
- [ ] Song limits (Mashup lets you exceed them) - need rulebook.

## Jewel Idol

- [ ] Role read as "Main" + "Support" - recorded Support only.
- [ ] Offbeat Recovery: requirement says "basic attack" but the text also covers abilities. "Half
      Rapid" keyword - needs rulebook.
- [ ] Until My Voice Breaks: no cost, range or keywords on the page.

## Jonin

- [ ] **Level 4 (Ability 2) is BLANK on the site.** Recorded as MISSING. The page lists "En-dama"
      under Abilities unlocked without a step - stored as kind "unlisted"; probably the Level 4 ability.
- [ ] Class overview, lore and tactical guidance are blank ("-") on the site.
- [ ] Ninja Run, Bunshin clones, Bunshin Tai no Jutsu - come from Ninja (required class).

## Knight-Paramount

- [ ] Role read as "Main: Defender" only.
- [ ] Unstoppable Onslaught lists "Shaken" as a keyword (a condition). Tactical guidance says it
      costs no mana - consistent with the 2 AP cost.
- [ ] "Line Movement restrictions" - needs rulebook.

## Lancer

- [ ] Role read as "Main" only - recorded Striker.
- [ ] Lunge (Level 2) refund possible; also granted by Fencer. Amount MISSING.
- [ ] Piercing Stab range is a long description, not a number. Recorded as shown.
- [ ] Brace uses the "Prepare" action - needs rulebook. Beast-type creatures - monsters rules.

## Mage

- [ ] Mage's Journey grants Arcane Mastery AND +5 Magic (stored in `grants`).
- [ ] Magic Missile: overcharge is mentioned only in the Playing Mage guidance, not the ability.
- [ ] "Hacking" and "Sensory" keywords, Pinpoint - need rulebook.
- [ ] The Mage "Helps unlock" list includes Starcaller, Thief, Warding Mage, Phantom Thief, etc.
      (used to build the class list after Oracle).

## Mage Knight

- [ ] Canter comes from Cavalier (required class).

## Magitechnician

- [ ] URL slug ends with a hyphen ("magitechnician-"); record id has no trailing hyphen.
- [ ] Level 3: +5 Artificing only; expertise trading not mentioned.
- [ ] Advanced Artificing key grants +1 Burden that must go to an artifice (stored in `grants`).
- [ ] Craft Artificer's Glove cost "1 IP" (plus "Other" tag). Recorded "1 IP".
- [ ] Level 6 Expertise Study (Artificing) grants expertise + a weapon proficiency (stored in `grants`).

## Maid

- [ ] Roles read as "Main: Support, Secondary: Utility". Confirm.
- [ ] Maid Training key grants +5 skill points from the Level 3 list (stored in `grants`).
- [ ] Ability names include "~" characters (site style). Recorded as shown.
- [ ] Please Hold Still~ uses the Illumination keyword - needs rulebook.

## Manifestor

- [ ] Manifestor's Journey key grants +5 skill points from the Level 3 list (stored in `grants`).
- [ ] No "Helps unlock" section on the page at all.
- [ ] "Playing Manifestor" guidance has only an image.

## Marksman

- [ ] Role read as "Main: Striker" only.
- [ ] Status Assessment II key: refund possible (also granted by Archer). Amount MISSING.
- [ ] Perfect Shot (6 AP, Setup) - "Prone" keyword on ranged attacks - needs rulebook.

## Martial Artist

- [ ] Role read as "Main" + "Striker" - recorded Striker only.
- [ ] Martial Artist's Journey key grants +5 skill points (its list has Expert Knowledge but NOT
      Common Knowledge; Level 3's list has Common Knowledge). Recorded each as shown.
- [ ] Rushing Knee Drop cost "1 AP" and "1 RP" - text says spend 1 AP OR 1 RP. Recorded "1 AP or 1 RP".
- [ ] Helps unlock lists Monk, Sky Talon Style, Still Stone Style, Wave Palm Style and
      Transcendent Lightning Style (Tier 3).

## Master Armorer

- [ ] Level 3: +5 Armorsmithing only; expertise trading not mentioned.
- [ ] Level 6 Expertise Study (Armorsmithing) grants expertise in 2 crafts + Heavy Armor OR
      Greatshields proficiency (stored in `grants`).
- [ ] Armorsmithing Expert (granted) header says "No listed cost" but its sub-ability costs X CP.
      Page read said it modifies "a weapon or tool" - probably armor. Confirm.

## Medic

- [ ] Role read as "Main: Healer" only.
- [ ] Medic's Journey key grants +5 Medicine (stored in `grants`).
- [ ] First Response: +1d6 healing (+3 with Demonblood Regeneration - a racial trait).
- [ ] Painkiller Injection: X isn't defined (probably AP spent).

## Merchant

- [ ] Role read as "Main" + "Utility" - recorded Utility only.
- [ ] Peddler of Wares key grants +5 Riding and +1 combat burden (stored in `grants`).
- [ ] Helps unlock: Mogul (requires Merchant mastered).

## Mime

- [ ] Role read as "Main" + "Utility" - recorded Utility only.
- [ ] Mime's Journey key grants +5 Art AND Level 3 grants +5 Art. Recorded both. Confirm they stack.
- [ ] Mime can't speak in encounters (Benefit 3) - a roleplay restriction worth showing in the planner.
- [ ] The sitemap lists Miner before Mime; recorded in true alphabetical order (Mime, Miner).

## Miner

- [ ] Level 7 Soul step ALSO grants the Pickaxe property "Superior Armor Pierce" (stored as `alsoGrants`).
- [ ] Power Rock Strike / Efficient Strike cost "1 Strike Dice" (plus "Other"); requirement text on site
      says "Must in a gathering session" (missing "be").

## Mist Veil Elegy

- [ ] Entry: Idol or Bard mastered, OR 10 Art (Flute) expertise + any class mastered.
- [ ] Song without Song key grants +1 active song and the language "Music" (stored in `grants`).
- [ ] "Playing Mist Veil Elegy" guidance has only an image.

## Mogul

- [ ] Role read as "Main" + "Utility" - recorded Utility only.
- [ ] Lord of Mercenary weekly fees: Archer listed as "250" (no "c"), others with "c". Recorded as shown.
- [ ] Mercenary / Sniper NPC stats are in the Monster guide - not captured. "Expert Summoner" and
      "Instinct" mentioned - need other pages/rulebook.
- [ ] Shot From The Blue costs 500 Clim per use (in its requirement line).

## Monk

- [ ] Role read as "Main: Striker" only.
- [ ] Helps unlock: Zen Warrior (Tier 3, requires Monk mastered).

## Mycomancer

- [ ] Spore Symbiote key grants Earth Elemental Mastery (stored in `grants`).
- [ ] Poison Spore cost "2 AP or 1 RP"; range is a long description. Recorded as shown.

## Mystic Eyes of Destruction / Domination / Petrification

- [ ] Each can be entered via a race instead of Evil Eye: Oni (Destruction), Demon (Domination),
      Lamiafolk (Petrification) - each plus any tier 2 mastered. Needs races.js.
- [ ] All three need an open mystic eye slot. Planner should track Mystic Eye slots.
- [ ] Destruction: Doom's extra Light damage amount isn't specified.
- [ ] Domination: Forbid lists no save.
- [ ] Petrification: Calcification stacks and Petrify condition - need rulebook. Partial
      Petrification save type not given. "Playing" guidance has only an image.
- [ ] Roles read as "Main" only (Destruction: Striker; Domination: Controller) or "Main" + "Controller"
      (Petrification). Recorded single roles.

## Naturalist

- [ ] Role read as "Main: Healer" only.
- [ ] Regrowth's heal amount isn't stated on this page (class guidance says it heals on their next turn).
      Full Bloom heals "twice its regular value". Need Regrowth's base heal value.
- [ ] Healing Seed mentions debuffs with "Persist" - needs rulebook.

## Necromancer

- [ ] Speak with dead: range "-" and requirement "Special". Recorded as shown.
- [ ] Corpse Explosion: base damage not stated (Light Attack). Range is a description.
- [ ] Bring out your dead has no Requirements heading.
- [ ] "Corpse Domination" is mentioned in tactical guidance but has no entry.

## Necromaster

- [ ] Role read as "Main" + "Specialist" - recorded Specialist only.
- [ ] Undead Mastery says "Create Undead" (the ability is named Raise Undead) - site inconsistency.
- [ ] Undead Mastery uses "spirit core" values - needs rulebook.
- [ ] Skeletal Champion stats are on the Monster page - not captured.

## Ninja

- [ ] Role read as "Main" only - recorded Striker.
- [ ] **Level 8 Ultimate is BLANK on the site.** Recorded as MISSING. "Kage Shuriken no Jutsu" is
      listed under Abilities unlocked without a step - stored as kind "unlisted"; probably Level 8.
- [ ] Kibaku Fuda Shuriken: Light Fire Damage amount not stated.

## Nomad

- [ ] Hit & Run range is "Weapon Range". Recorded as shown.

## Onmyoji

- [ ] URL slug ends with a hyphen ("onmyoji-"); record id has no trailing hyphen.
- [ ] Role read as "Main" + "Specialist" - recorded Specialist only.
- [ ] Level 3 list shows "Magic Perception" with no comma again (same as Daionmyoji). Recorded as two skills.
- [ ] Expert Scribe key gives +5 to the Art: Calligraphy expertise (not doubled) - stored in `grants`.
- [ ] Secret Talisman: cost, range, keywords and requirements are all "Special". Recorded as shown.
- [ ] Calligraphy units, Summon Eidolon spells - need items/other pages.

## Oracle

- [ ] Role read as "Main" + "Support" - recorded Support only.
- [ ] No "Helps unlock" section on the page. "Playing Oracle" guidance is empty.

## Peltast

- [ ] Role read as "Main" + Striker only - recorded Striker, no secondary.
- [ ] Throwing Rhythm Benefit 1 refers to "as with Nimble" - Nimble rule is in the rulebook/keywords.
- [ ] Stab & Throw range is "Special". Recorded as shown.

## Phantom Thief

- [ ] Role read as "Main" + Utility only - recorded Utility, no secondary.
- [ ] Requirement wording "Thief mastered and mage mastered." (lowercase "mage") - recorded as shown.
- [ ] Duplicate: RP cost depends on the copied spell's AP (1 RP for 0-2 AP, 2 RP for 3-4 AP); cost line shows "1 RP, 1 MP". Planner should treat RP as variable.
- [ ] "Bounded fields" tiers (Phantom Thief key) - rulebook needed.
- [ ] "Playing Phantom Thief" guidance just says "Soon".

## Phosphomancer

- [ ] Level 3 list read as "Religion, Art Magic, History, ..." - recorded as two skills (Art, Magic). Confirm there's a missing comma.
- [ ] Illuminating Flash: unclear whether Blinded 5 also requires failing the save. Range shows "60ft." with a trailing period.
- [ ] Illumination keyword - rulebook needed.

## Pierrot

- [ ] Found via other pages' "Helps unlock" lists (not in the sitemap). Data is complete.
- [ ] Pie Toss lists 7 keywords including "Downed" - recorded as shown.

## Priest

- [ ] Studied Healer Benefit 2 (+5 Negotiation with followers of your religion) is situational - stored in summary only, not `grants`.

## Protector

- [ ] No getting past! cost line "0 RP" but the Heavy version costs 1 RP. Planner should treat RP as variable.

## Pyromancer

- [ ] Controlled Blaze refund amount (also granted by Flame Sentinel) - recorded as MISSING.

## Pyromaster

- [ ] **Meteor cost conflict:** cost line is 2 AP, 4 MP but the guidance text mentions "4 AP". Recorded the cost line. Confirm.
- [ ] Hellfire rules are in the key ability text - may also be a keyword page. Check.

## Ranger

- [ ] Snap Shot: summary says ranged or thrown weapon; no Requirements line on the page (recorded null).
- [ ] Ranger's Journey gives a second +5 skill block using the Level 3 list - stored in `grants` with options.

## Reaver

- [ ] "Aftershock" is a Highlander ability - planner needs a cross-class link.
- [ ] "Playing Reaver" guidance says "Soon".

## Rogue

- [ ] Rogue's Journey has a "+10 skill points" Grants line: +5 fixed Roguecraft plus +5 from a list that includes "relevant Expert Knowledge (DM approval)". Stored in `grants` as fixed: 5 + points: 5.
- [ ] Sneak Attack: "Trick Attacks cost double RP to react to" comes from guidance, not the rules text.

## Saboteur

- [ ] **Level 3 is unusual:** "+5 skill in Stealth or Stealth Expertise" with no trade sentence. Recorded expertiseTrade: null. Confirm.
- [ ] Scouting Ahead wording ("your roll counts as the party's lowest") is unclear - confirm with screenshot.
- [ ] Dagger name differs: "Saboteur Thread Dagger" (key) vs "Saboteur Threaded Dagger" (Wire Sweep). Site typo?
- [ ] Presence Concealment refund: half EXP, overlaps Adventurer.

## Sage

- [ ] Role read as "Main" + Utility only - recorded Utility.
- [ ] Overcharge (Secret Art) name clashes with the "Overcharge" keyword. Planner should keep them separate.

## Sanctioner

- [ ] Sanctify keyword and how stacks work - rulebook needed.
- [ ] Radiant Verdict applies Sanctify "on hit" (not "on damage") - recorded as read; confirm.

## Scout

- [ ] Independent Actor Art (Cartography) +5 expertise "not doubled" - stored in `grants`.
- [ ] Squadsight range is 300ft - recorded as shown.

## Searing Lotus Style

- [ ] Found by searching the Secret Art/Challenge keyword pages (not in the sitemap or any "Helps unlock" list read so far).
- [ ] Domain keyword (Molten Domain) - rulebook needed.

## Seven Sorrows Sword Style

- [ ] Role read as "Main" + Striker only - recorded Striker.
- [ ] Dark Weapon shows no cost/range/keyword lines (key ability) - normal.
- [ ] 3rd Sorrow says "mana cost reduced by 1" while the cost line uses MP - same thing; noted.
- [ ] Isolated keyword - rulebook needed.

## Shadow Thief

- [ ] Roles listed as Main: Utility, Secondary: Support (one read was unclear, a later read confirmed order).
- [ ] "At night" cost reductions on every ability - planner may want a day/night toggle.

## Shadowbringer

- [ ] **Level 2 is BLANK on the site.** Recorded as MISSING. "Hide in Shadows" is listed under abilities without a step - stored as kind "unlisted"; probably Level 2.
- [ ] Class overview and "Playing Shadowbringer" guidance are empty ("-").
- [ ] Sable Grace has no Range line.

## Shield Paladin

- [ ] Requirement starts with "Human" - same racial gate as Sword/Gun Paladin. The Unknown Paladin breakthrough lets non-humans qualify.
- [ ] Divine Weapon refund amount (also granted by Gun Paladin and Sword Paladin) - recorded as MISSING.
- [ ] Holy Shield shows a "Grants" line naming a buff "Holy Shield" - stored in summary only.

## Shield Saint

- [ ] Found via the Secret Art keyword page (Dynamic Duo) - not in the sitemap.
- [ ] Faithful Shield refers to "Shelter" (a Bodyguard ability) - planner cross-link.

## Shieldwarden

- [ ] Role read as "Main" + Healer only - recorded Healer.
- [ ] Power Word: Barrier cost "2 AP, 1 RP, 4 MP" - pay AP or RP, not both. Stored with a note.
- [ ] Power Word: Reinforce: "gains temp HP equal to 2x current" (so 3x total) - confirm wording.

## Shinigami Eyes

- [ ] Found via the abilities index (not in the sitemap). Requires the Touched by Death breakthrough and an open mystic eye slot.
- [ ] Mystic eye slots - rulebook/breakthrough rules needed.

## Sky Knight

- [ ] Found via the abilities index (not in the sitemap).
- [ ] Mythical Awakening has 3 mount-specific versions with their own costs - stored as subAbilities. Mount names (Pegasus, Wyvern, Dragonfly) come from item/mount pages.

## Sky Talon Style

- [ ] Master of the Empty Sky is a passive at Level 2 with no cost/range lines.
- [ ] Cloud Piercing Claw "mana cost reduced by 1" - noted.
- [ ] "Playing Sky Talon Style" guidance says "Soon".

## Sniper

- [ ] Aimed Shot refund amount (also granted by Deadeye) - recorded as MISSING.
- [ ] Snipe +1d4 accuracy bonus - dice; rulebook needed for planner math.

## Sorcerer

- [ ] Sorcerer's Journey: "upon mastering this class, you may master one additional element of your choice" - planner needs an element dropdown at mastery.

## Spearmaster

- [ ] Draw-In Combo references "Lunge" (a Lancer ability) - cross-link.

## Spell Blademaster

- [ ] Elemental Sweep effects differ from Spellblade's Elemental Strike (Earth/Frost both Slow here; Holy temp HP is Power + 5 vs + 3). Recorded each as read - confirm.
- [ ] Double Elements references Elemental Strike (Spellblade ability) - cross-link.
- [ ] Draw Elements II key shows Range "Self" - recorded.

## Spellblade

- [ ] Spellstrike has many edge-case rules - summary is long; check against a screenshot.

## Starcaller

- [ ] Cost lines render without spaces on the page ("2 AP1 MP") - read as 2 AP, 1 MP.
- [ ] Stardust Reverie upkeep: 1 mana - stored in `usage`.

## Still Stone Style

- [ ] Shielding Fist +4 Shield bonus to Block - "Shield bonus" stacking rules need the rulebook.

## Still Stone Testament

- [ ] Role read as "Main" + Defender only - recorded Defender.
- [ ] Mandate, Lockstep and Unbalanced keywords - rulebook needed.
- [ ] Unmoving Mountain has no trigger line on the page (only "must be in Earth Stance") even though it reacts to an attack. Confirm.

## Strategist

- [ ] Role read as "Main" + Support only - recorded Support.
- [ ] Requirement shows "Tactician mastered" with no period - recorded as shown.

## Summoner

- [ ] Found via the abilities index (not in the sitemap).
- [ ] Role read as "Main" + Specialist only - recorded Specialist.
- [ ] Eidolon-specific costs, upkeep and abilities live on Eidolon pages (not collected). Needed for the planner.
- [ ] "Playing Summoner" guidance says "Soon".

## Swashbuckler

- [ ] Role read as "Main" + Controller only - recorded Controller.
- [ ] Exposing Edge's own text is short ("sharpens your blades to enhance debuffs"); the real effects are inside the other abilities.

## Sword Paladin

- [ ] Requirement is just "Human." (The Unknown Paladin breakthrough lets non-humans qualify.)
- [ ] Divine Weapon refund amount - recorded as MISSING.

## Sword Saint

- [ ] **Requirement says "Iaido style mastered" but the class is named "Iai Style" (slug iai-style).** Site typo? Planner should link to Iai Style.
- [ ] Iai state / Iaijutsu keyword - rulebook needed.

## Tactician

- [ ] Role read as "Main" + Support only - recorded Support.
- [ ] Level 3 is History only (with trade).
- [ ] Tag Rotation cost "1 AP and 1 RP (either may be used)" - stored as "1 AP or 1 RP".

## Tavern Brawler

- [ ] Found via the abilities index (not in the sitemap).
- [ ] Improvised Weaponry Benefit 3 applies only "upon mastering this class".
- [ ] Bottle Smash lists Prone as a keyword but its text doesn't mention Prone. Confirm.

## Temporal Trickster

- [ ] Delay Time wording seems to contradict itself (delayed effects vs "start-of-turn effects still trigger at the start"). Confirm with a screenshot.
- [ ] Class overview and guidance are empty ("-"). No "Helps unlock" entries.

## Thief

- [ ] Role read as "Main" + Utility only - recorded Utility.
- [ ] Requirement includes a race route: "Be a rabbitfolk or ...".

## Time Thief

- [ ] Role read as "Main" + Utility only - recorded Utility.
- [ ] Start Dash: "provokes attacks of opportunity; can't follow Disengage/Feint" is from guidance text.

## Timberwright

- [ ] Found via the abilities index (not in the sitemap).
- [ ] Level 3 is "+5 skill points in Carpentry" with NO expertise trade sentence - recorded expertiseTrade: null.
- [ ] Core Crafting header says "No listed cost" but the body says "Cost: X Crafting Points" (X undefined). Confirm.
- [ ] Its "Helps unlock" lists Shield Paladin (via armor/shield proficiency at level 6?) - odd; check.
- [ ] "Playing Timberwright" guidance is empty.

## Transcendent Lightning Style

- [ ] Living Lightning gives no damage number beyond "Light Lightning damage".
- [ ] Lightning Lariat Overcharge "move an extra 2 x X times your speed" - wording odd; confirm.

## Transmuter

- [ ] Level 3 is Transmuter points (5) tied to a crafting discipline - type "special", like Alkahest.
- [ ] Level 7 Soul also grants the Co-Craft errand - stored in `alsoGrants`.
- [ ] Core crafting abilities (11) stored as subAbilities of "Transmutation Basics". Several reference material item pages not collected.
- [ ] Deconstruction says "clim value" - site typo (probably "claim value")?
- [ ] Only Transmute Weapon, Wall and Terrain show Range lines.

## Trapper

- [ ] Level 7 Soul also raises camp food to 1d10 x 10 - stored in `alsoGrants`.
- [ ] Place Trap range label shows "Other". Recorded "Other".

## Trickster

- [ ] Found via the abilities index (not in the sitemap). Requirement: two classes mastered, one of them tier 2.
- [ ] Swap: pay AP or RP, not both - stored with a note.

## True Shinigami Eyes

- [ ] Improved Death Perception mentions "Lines of Death" (the ability is "Line of Death") - site typo?
- [ ] Point of Death II refund on killing blow - stored in `refund`.

## Vampire

- [ ] Found via the abilities index. Requires the Curse of Vampirism breakthrough. Tier 1.
- [ ] Role read as "Main" + Specialist only - recorded Specialist.

## Vampire Lord

- [ ] Lord's Dominion +1 Presence - stored in `grants`.
- [ ] No "Helps unlock" entries.

## Veilguard

- [ ] Role read as "Main" + Healer only - recorded Healer.
- [ ] Shield Burst cost "1 RP (or 1 AP instead)". Stored as "1 RP or 1 AP".
- [ ] Class overview and guidance are empty ("-").

## Venomancer

- [ ] Role read as "Main" + Controller only - recorded Controller.
- [ ] Catalyze "Stagger II or Sunder II" - who picks? Not stated.
- [ ] Crippling Poison has Overcharge text but no Overcharge keyword. Confirm.
- [ ] Toxic: 1d6 full pierce Poison per turn - dice; rulebook.

## Venomblade

- [ ] Outbreak numbers (3d6 vs max stacks, 18 with Maximum Dose) come from guidance, not rules text.
- [ ] Maximum Dose's exact effect isn't defined beyond "maximize".

## Warding Mage

- [ ] **Level 4 is BLANK on the site.** Recorded as MISSING. "Hidden Wards" is listed under abilities without a step - stored as kind "unlisted"; probably Level 4.
- [ ] Role read as "Main" + Utility only - recorded Utility.
- [ ] Level 3 list reads "Stealth, Magic, Perception or Insight, or Common Knowledge" - recorded as 5 skills.

## Wave Palm Style

- [ ] Wave Palm I/II/III stack counts aren't given on the page.
- [ ] Guidance says "Mystic Eyes of Light Perception" vs ability name "Life Perception" - site typo.

## Wildheart

- [ ] Found via the Secret Art keyword page (Bestial Wrath) - not in the sitemap.
- [ ] Role read as "Main" + Specialist only - recorded Specialist.
- [ ] Requirement "Animal summoner mastered." (lowercase s) - recorded as shown.
- [ ] Cheetah and Landshark stat blocks not on the page. X-Attack has no duration.

## Windbringer

- [ ] Role read as "Main" + Support only - recorded Support.
- [ ] Wind Master refund amount (also granted by Aeromancer and Zephyr Warder) - recorded as MISSING.
- [ ] Headwind wording about multi-AP moves is unclear.

## Zen Warrior

- [ ] Ki Burst's X isn't defined on the page (probably mana spent).
- [ ] Serene Water stance and Strike of Still Water belong to Monk - cross-link.

## Zephyr Warder

- [ ] Role read as "Main" + Support only - recorded Support.
- [ ] Wind Master refund amount (also granted by Aeromancer and Windbringer) - recorded as MISSING.
- [ ] Wind Infusion "Type: Wind II" rules - rulebook needed.

---

# RACES (data/races.js)

## Races - General

- [ ] **Race list: 5 main races + 44 sub-races = 49 records, matching the site's counts** (44 sub-races on the race index). Nekomata, Nio, Gnome and Willo Wisp were cut off the index page but found via the sitemap and hybrid page.
- [ ] **Skill pick is unclear on every race:** "+5 skill points in either A, B, C..." - all 5 into one skill, or split? Stored as `pick: "UNCLEAR"`. Check the rulebook / ask the GM.
- [ ] **Sub-race pages repeat the parent's creation benefits** (stats, skills, languages). Every sub-race matched its parent exactly, so sub-race records only store `usesParentCreation: true` plus size and their own abilities.
- [ ] **Chimera sub-race dialect names are never given** ("the special dialect of your sub-race"). Planner can show "<Sub-race> dialect".
- [ ] **Size and Speed** aren't on main race pages. Base speed seems to be 20ft (Fast Runner says "25ft instead of 20ft"). Sizes come from sub-race pages. Human, Demon (no sub-races) have no size listed.
- [ ] **Race abilities that unlock classes:** Gnome -> Miner, Pigfolk -> Merchant, Raijin -> Flash Star Blade Style, Selkie -> Hydromancer (at level 2), Sheepfolk -> Aetherie (skip requirements, -100 EXP), Demon clans Wi -> Saboteur, Un -> Maid, Vi -> Medic. Rabbitfolk is a Thief entry route. Stored in `grants`/`options`.
- [ ] **Elemental masteries from races:** Phoenix (Fire), Raijin (Lightning), Sylph (Wind), Unseelie (Dark), Suryan (Holy), Yuki-Onna (Frost), Ryujin (choice). These count for class requirements like "Fire mastery".
- [ ] Hybrid races (Faerie-Chimera, Human-Chimera) are 200 EXP creation-only breakthroughs, stored in `LC.raceHybrids`.

## Human

- [x] Stat bonus is "+1 to a main stat of choice, +1 to a substat of choice". ANSWERED by rulebook: main = Power/Focus/Agility/Toughness, sub = Fitness/Cunning/Reason/Awareness/Presence.
- [ ] Skills: "+5 in any non-crafting or gathering skill" - stored as ANY_NON_CRAFTING_NON_GATHERING.
- [ ] "Lineage features" section is empty.

## Chimera

- [ ] Kanolith/zoalith are lore categories, not choices - confirm.
- [ ] Page doesn't link its sub-races; list built from the hybrid page and sub-race pages.

## Demon

- [ ] Proficiency choice: one common weapon OR +5 skill points "in a skill tied to your demon clan" - which skill belongs to each clan isn't stated.
- [ ] Mana Burst: "you may use AP for this attack instead" - unclear which cost is replaced.
- [ ] Mixed House breakthrough (100 EXP) gives a second clan.
- [ ] No size listed; no sub-races.

## Fae

- [ ] Faerie Flash has the Rage keyword but its text doesn't mention Rage.
- [ ] Speed for Faerie Flash ("twice your Speed") isn't on the page.

## Youkai

- [ ] Spiritual Sync "8X" - X assumed to be mana paid.

## Ancient Marionette
- [ ] "Adaptive Defense (Type)" - the Type keyword needs the rulebook.

## Anubis
- [ ] Speak with Dead requirement is just "Special".

## Bearfolk
- [ ] Hibernate's extra night-rest HP "Toughness HP" amount isn't clear.

## Bullfolk
- [ ] Restriction: "Male only." Goring Charge: X and the AP cost aren't defined.

## Cait Sith
- [ ] Soul Strike "once on that target" usage - confirm.

## Catfolk
- [ ] Fast Runner sets base speed 25ft (stored in `grants`).

## Centaur
- [ ] Charge cost line "2 AP" but text allows 2 or 4 AP. Same mechanic as Spearmaster's Spear Charge.

## Cowfolk
- [ ] Restriction: "Female only." Provide Milk cost line says no cost but text says 1 EP.

## Cu Sith
- [ ] Haunting Bark: Light Lightning damage on 3rd use has no number.

## Dogfolk
- [ ] Nothing extra.

## Dryad
- [ ] Nature's Grasp: "costs 0 Mana vs Grunts" though the cost line already shows 1 MP - fine, but confirm.

## Dullahan
- [ ] Nothing extra.

## Gnome
- [ ] Gnome Claws "+10/+20 dodge bonus" - which applies when? Unclear.
- [ ] Not on the race index page text I could read; found through the sitemap/hybrid page.

## Harpy
- [ ] Downburst range 720ft - recorded as shown.

## High Fae
- [ ] Faerie Flash II replaces Faerie Flash? Page lists both (inherited + unique). Hybrid page says High Fae normally gets Faerie Flash II.

## Horse-Folk
- [ ] **Size not listed** - recorded MISSING. Lore overview marked "(Placeholder)". Horse Step Acceleration "+30" has no unit.

## Jiangshi
- [ ] Consume Enemy's Requirements line is blank.

## Kitsune
- [ ] Nothing extra.

## Lamiafolk
- [ ] Size Large. "Just a hug" escape: 8 escape power, adding Power per attempt.

## Lizardfolk
- [ ] Regrowing Limbs: cost line says no cost, requirements say "Costs 1 Interlude Point".

## Mothfolk
- [ ] Nothing extra.

## Nekomata
- [ ] Not on the race index page text; found via the sitemap.
- [ ] Corpse Puppetry range 60ft but text says corpse "within 30ft". Feign Death references "Play Dead" (not defined on the page).

## Nio
- [ ] Not on the race index page text; found via the sitemap.

## Oni
- [ ] Tipsy effect isn't defined on the page. Drink to Battle cost "2 AP or Encounter Start action".

## Phoenix
- [ ] Phoenix Tears heals "Power" - presumably your Power stat.

## Pigfolk
- [ ] Break Piggy Bank costs 500 Clim (listed as a requirement).

## Pixie
- [ ] Tiny Pixie: Toughness -2, Agility +2, walking speed 5ft - stored in `grants`.

## Rabbitfolk
- [ ] Escape Artist cost "1 AP and 1 RP (either)" - stored as "1 AP or 1 RP".

## Raijin
- [ ] Nothing extra.

## Ratfolk
- [ ] Nothing extra.

## Red Pandafolk
- [ ] Panda Stance cost "1 AP and 1 RP (either)". Panda Roll mentions Sidestep but has no keywords.

## Ryujin
- [ ] Ryujin's Mastery lists "Ice" while the game elsewhere uses "Frost" - same thing? Dragon's Breath keyword list may be a display artifact.

## Salamander
- [ ] Fireball is the same as Pyromancer's Fireball.

## Selkie
- [ ] Aquatic Fae references "Aqua Drill" (Hydromancer ability?) - cross-link.

## Sheepfolk
- [ ] Mind Connection mentions "Conduit" (not defined on the page).

## Slimefolk
- [ ] Nothing extra.

## Spiderfolk
- [ ] Nothing extra.

## Suryan
- [ ] Solar Radiance has no range field; values come from the text.

## Sylph
- [ ] Fly is the same as Windbringer's Fly.

## Tengu
- [ ] Nothing extra.

## Unseelie
- [ ] Nothing extra.

## Willo Wisp
- [ ] Not on the race index page text; found via the hybrid page. Lore says "Faerie Light Eyes" but the ability is "Faerie Eyes: Calling".

## Wolf-folk
- [ ] Hunting Wolf "X AP" - variable.

## Yuki-Onna
- [ ] Lore says female only, but no rule restriction is stated - recorded as a note only.

---

# BREAKTHROUGHS (data/breakthroughs.js)

## Breakthroughs - General

- [ ] **89 records = all 89 on the site's breakthrough list** (list page was complete, not cut off). Every record was checked against its own page.
- [ ] **Repeat costs:** only Primary Stat Training states that the cost rises (400 -> 500 -> 600 -> 700 cap). Secondary Stat Training (200), Skill Training (25), Universal Training (700), Weapon/Speciality Weapon Training, Language Training, Elemental Affinity, Blend In II and Wide Circuits IV are repeatable but don't say whether repeats cost more. Recorded as flat - confirm.
- [ ] **Stat caps:** no page says whether stat-training breakthroughs have a maximum (stats beyond the creation arrays). Rulebook doesn't say either.
- [ ] **"Must be a Fae / Youkai / Chimera / Demon"** is stored as the main-race id, meaning any sub-race qualifies. "Lamia" (Drag along) = Lamiafolk; "Red Panda" = Red Pandafolk; "Willowisp" = Willo Wisp; "Raijin Youkai"/"Sylph Fae" = those sub-races.
- [ ] **"Speciality weapon" groups** aren't listed on the breakthrough pages. I used the rulebook's "Specialized Weapons" (Pistol, Shotgun, Sniper Rifle, Saboteur Thread Daggers, Lance, Whip, Gauntlets, plus channeling and artisan weapons). Confirm they're the same thing.
- [ ] **Eidolon contracts** (Fortuna, Ixilune, Pipoltr): eidolon stats and the Channel Eidolon abilities (Draw Luck, Distracting Swarm, Vine Wall Cover) live on Monster/Ability pages - not collected yet. Needed for Summoner.
- [ ] Divine list (9 divines with damage types) stored as `LC.divines`.

## Breakthroughs - specific items

- [ ] **Angelblooded (Human) (Restricted):** 0 EXP, GM approval. Unlocks the Angelblooded class.
- [ ] **Arachne (Spiderfolk):** creation only, 0 EXP, makes you Large and removes Extra Arms. Several class/race notes refer to "Arachne/Centaur" (the class refund example for Living Lightning).
- [ ] **Become Lightning (Raijin):** mentions a "Power bonus" from Consume Lightning not stacking - Consume Lightning's race page describes a damage bonus (Lightning Boost), not Power. Check wording.
- [ ] **Become Ice/Lightning/Wind:** "reset back to 0 when it becomes your turn" - read as "the free use comes back each turn". Confirm.
- [ ] **Curse of Vampirism:** "Wounds only from fire, holy or true damage" - the rulebook uses "Injuries"; probably the same thing.
- [ ] **Elixir Addict** is a 0 EXP drawback you gain by using 3+ elixirs in one encounter; removed for 1 IP.
- [ ] **Expert Summoner** needs 3000+ Spirit Core and a maxed summoner-type class (Summoner, Mogul, Animal Summoner, Necromancer).
- [ ] **Fae Flash Acrobat** says "Fae Flash" / "Fae Step"; the race ability is "Faerie Flash". Same thing?
- [ ] **Fast Movement (Centaur)** also allows "Arachne Spiderfolk" (needs the Arachne breakthrough).
- [ ] **Mark of Conflict** needs "an Unknown Paladin that follows Eisen" + Mark of Justice (Sword Paladin).
- [ ] **Slow Starter:** -200 starting EXP, then doubled EXP until 500 received. Planner needs to handle this in the EXP budget.
- [ ] **Tengu Defensive Aura:** Astra corruption rules aren't in the rulebook copy I read.
- [ ] **Third Eye / 8 Eyes:** "regular 2" Mystic Eyes - mystic eye slot rules aren't in the rulebook copy (Wave Palm Style and Shinigami Eyes need an open slot).
- [ ] **Touched by Death:** also gives a 1 AP "see HP% and weak spots for 1 turn" effect (separate from the Shinigami Eyes class).

---

# CLASS REQUIREMENTS & UNLOCK ROUTES (data/requirements.js)

## Requirements - General

- [ ] Built from the 185 page-checked "Requirements" lines in classes.js (text copied exactly into each record, so a site change shows up as a mismatch). Not re-fetched from the site.
- [ ] **Generic routes** (any class mastered, element masteries, "have a spell", weapon proficiency, skill points) are checked live by the planner, not listed in the reverse index. The site's "Helps unlock" lists include those (e.g. Sorcerer lists 26 classes; 9 name Sorcerer directly, the rest come through Arcane/element mastery, spells, etc.). That matches.
- [ ] **Proficiency categories** used: "ANY_MELEE", "ANY_TWO_HANDED_MELEE", "ANY_WEAPON", and group names (Light Swords, Longsword, Katana, Dueling Weapons, Polearms, Lance, Scythe, Heavy Blades, Small Weapons, Thrown, Shields, Medium/Heavy Armor). Needs a weapon-group list (items data) for the planner to check "ANY_MELEE".
- [ ] **Mystic eye slots** ("at least 1 open"): base 2 slots (Third Eye -> 3, 8 Eyes -> 8). What uses up a slot (Evil Eye, Wave Palm's Life Perception Eye, Shinigami Eye, Faerie Light Eyes...) isn't spelled out anywhere I read.
- [ ] **"Any class mastered"** - does a Tier 1 count? Assumed yes (any class). "Any tier 2 class mastered" assumed to also accept tier 3 - confirm.

## Requirements - ambiguous lines

- [ ] **Dragoon:** "Lancer mastered. 10 points in Athletics (Jumping) expertise, OR be a Jiangshi." Read as Lancer AND (expertise OR Jiangshi).
- [ ] **Thief:** "Be a rabbitfolk or have Rogue mastered and possess the Decipher Magic ability." Read as Rabbitfolk OR (Rogue AND Decipher Magic). Decipher Magic comes from Mage.
- [ ] **Executor:** "Any mastered class + any points in Acolyte." Read as: 1 mastered class AND Acolyte unlocked. Could the mastered class be Acolyte itself?
- [ ] **Mist Veil Elegy:** "Idol or Bard mastered, OR 10 points in Art (Flute) expertise and any class mastered."
- [ ] **Bard:** "an Art expertise for an instrument" - stored as "Art (any instrument)".
- [ ] **Abjurer:** needs Arcane Barrier (a Mage ability) AND a damaging spell.
- [ ] **Sword Saint:** "Iaido style" = Iai Style (site typo).

---

# ITEMS (data/items.js)

## Items - General
- [ ] The site says 206 items, but only 155 are in items.js. The static items list page stops partway (its text is cut off by the site itself), and its Type filters/sort only work with JavaScript, so the rest can't be listed from here. 155 were found from the list plus guessed page addresses.
- [ ] The visible list was not a complete A-to-P run either (e.g. Hori, Pickaxe, Sickle, Shielding/Speed Potion, Smoke Flask were all missing from it), so the ~51 missing items could be anywhere in the alphabet.
- [ ] **Easiest fix:** on the site's Items page, use the Type filter (Adventuring Essentials, Alchemy, Artifice, Astra Relic, Crafting, Divine Arms, Equipment, Mount, Talisman) and screenshot each filtered list. Then I can fetch each page directly.
- [ ] Types with almost nothing found so far: Astra Relic (0), Divine Arms (1: Ghostblade), Talisman (1: Locking Seal), Mount (8).
- [ ] Addresses tried that don't exist (so the item has another name or isn't on the site): greatshield, great-shield, greatshield-two-handed, tower-shield, sling, sling-one-handed, sling-two-handed, thrown-weapon(-one-handed), throwing-weapon(s)-one-handed, magic-staff-two-handed, large-shell, mana-potion, superior-healing-potion, tent, glittershards, glittershard-flask, sleeping-poison, toad/owl/snake/spider/troll/lion/gorilla/ox/fox/raven/tiger/wolf-elixir, smithing-kit.
- [ ] Rulebook lists a Greatshield, a Sling and Thrown weapons, but their item pages weren't found. Needed for the planner's weapon/shield choices.
- [ ] The rulebook calls the staff a "Magic Staff"; the site's item pages are "Staff (One-Handed)" and "Staff (Two-Handed)".

## Items - specific
- [ ] Alchemist's Alembic and Carpenter's Chisel list Blacksmithing as their crafting discipline (could be correct, flagging in case).
- [ ] Aetherie Sensory Station: crafting points read "lol" on the page.
- [ ] Long Distance Communications Array: crafting points read "No".
- [ ] Obsidian Steel and Ebony Wood Block have no crafting points listed.
- [ ] Displacement Potion: the d8 direction list is incomplete on the page.
- [ ] Elemental Grease / Mixture Flask / Resistance / Immunity: herb is "matching element", with substitutes only given for Holy/Dark (Arcane), Lightning (Wind), Frost (Water).
- [ ] Food Bag and Mining Bag: page says +2000 units per material, then says hide versions give +1000/3000/6000/10000. Both recorded; which is the base?
- [ ] Isona Poison: activation shows just "1" (no AP/unit).
- [ ] Military Ration: burden not listed; "food effects for 2 mana" wording unclear.
- [ ] Growth Potion and Mana Vision Goggles: activation not listed.
- [ ] Gourmet Cooking Stock: no tag shown.
- [ ] Smith's Hammer: no weapon effect on the page (rulebook says it counts as bludgeoning).
- [ ] Giant Dragonfly: no line-movement note (it flies; other fliers have straight-line flight).
- [ ] Greater Speed Potion and Speed Potion: page metadata says "Materials: 1"/"Materials: 2", which disagrees with the body text. Body text used.
- [x] Facilities: effects added from the rulebook (workshops +2/+4/+6, uses per level, etc.). Greenhouse effect still MISSING.
- [ ] Rest and food rules: the static rulebook copy really does stop mid-sentence at "To regain HP a character needs to rest." (the later Housing/Facilities sections mention Rest-action doubling but not the base rules). Needs the user's rulebook file.

---

# PLANNER (planner.html)

## Planner - not done yet
- [x] Mixed House (Demon): pick your extra clan; its ability, class unlock and proficiency apply.
- [x] Roadmap view and build sharing (text summary + build code) added 2026-10-22.
- [x] Ability bonuses are now added to the Combat numbers (classes.js grants + data/bonuses.js), with tap-to-see breakdowns and toggles for situational ones.
- [x] Race hybrids (Human-Chimera, Faerie-Chimera) work: take the breakthrough, then pick the other race's sub-race.
- [x] Weapon/armor proficiencies are now tracked (data/proficiencies.js) and checked for class requirements and equipped armor.
- [x] Mystic Eye slots tracked (2 normal, 8 with 8 Eyes; each eye class uses one). Element masteries tracked from class keys, Elemental Affinity, Ryujin, and Acolyte/Sorcerer on mastery.
- [ ] Element mastery requirements still show "check" (not "locked") when no tracked source gives the element, in case a race ability or something untracked gives it.
- [ ] Aeromancer's Wind Master grant (Wind Mastery) was missing from classes.js; added 2026-10-22 after re-checking the page.
- [x] Canon campaign starting Clim: +1,000 on top of the normal 3,000 (confirmed by user 2026-10-21).
- [ ] "Any tier 2 class mastered" is counted as tier 2 or higher. Confirm whether a tier 3 mastery counts.
- [x] Transmuter/Alkahest: pick the crafting discipline for your Transmuter points on the class step.
- [x] Slow Starter: -200 creation class EXP applied; enter EXP already doubled (note shown in Pools).

## Proficiencies (data/proficiencies.js)
- [ ] Which groups count as "common" vs "specialized" comes from the rulebook's weapon list (Thrown, Set of Missiles, Bow, Crossbow, Musket, Sling are treated as common ranged). Confirm Musket isn't specialized.
- [ ] "Basic weapon" (Alchemist, Transmuter, Magitechnician) is treated as the same thing as "common weapon".
- [ ] "Any melee weapon" requirements count common melee, artisan weapons, Lances, Whips, Gauntlets, Saboteur daggers and Staves. Unarmed proficiency is not counted.
- [ ] "Smithing weapon" (Blacksmith, Forgemaster) = weapon groups crafted with Blacksmithing in items.js.
- [x] Demon: choose weapon proficiency OR +5 clan skill points in Identity. The page doesn't say which skill each clan uses, so any normal skill is allowed.
- [ ] Non-proficient armor/shield penalty: the planner warns but doesn't change the numbers (exact penalty wording to confirm in the rulebook).

## Keywords (data/keywords.js)
- [ ] 92 keywords from the site. Ability tags with no keyword page (Healing, Encounter Start, Arcane, Shield, Mind Affecting, Jump, Aura, Illusion, Counter, Gravity, Errand, Interlude, etc.) show as plain tags with no pop-up.
- [ ] Mandate: the page says ignoring it means you've "defied the mandate" but doesn't say what that does.

## Bonuses (data/bonuses.js) - rechecked 2026-10-22
- [ ] Fighter's Journey says "+5 HP" (not "max HP"); treated as +5 max HP.
- [ ] Angelblooded and Vampire Lord show "+1 stat point to Presence" in the header AND +1 Presence in a benefit. Treated as one +1 (the header summarises the benefit).
- [ ] Ranger key: page says "5 points in one of the following" while the Grants line says "+5 skill points" over the list. Treated as 5 points spread among the list.
- [ ] Blocking: the rules say Block *replaces* Guard with 2 x Toughness + armor Block. Not stated whether armor Guard, or Guard bonuses from abilities (Stoneskin, stances), also count while Blocking. The planner keeps them separate: "guard" bonuses -> Guard, "block" bonuses -> Block guard.
- [ ] Evasion vs Dodge: bonuses that only say "evasion" (Serene Water Stance) are added to Evasion only, not to Dodge evasion. Ones that say "evasion and dodge" (Stoneskin, Hardening Fist, Dog Form) change both.
- [ ] Unholy Strength (+2 Power/Focus) is added to your stats, which also raises Mana and HP-related numbers while on. Check whether it should only affect attacks.
- [ ] Craft expertise grants (Forgemaster, Magitechnician, Master Armorer, Timberwright: "5 points in each of 3 crafts") are shown as text only, not tracked.
- [ ] Magitechnician and Onmyoji pages wouldn't load on 2026-10-22; their bonuses use the data checked on 2026-10-20.
- [ ] Unlisted abilities (Botanist Forager's Eye, Jonin En-dama, Ninja Kage Shuriken no Jutsu, Shadowbringer Hide in Shadows, Warding Mage Hidden Wards) aren't tied to a step, so the planner never counts them as owned. They show in the class details window.

## Refunds - updated 2026-10-22
- [x] Shared abilities (Wind Master, Controlled Blaze, Tremorsense, Divine Weapon, Status Assessment II, Battle Cast, Aimed Shot, Undying Justice, Lunge): the class pages only say "Refund possible". The rulebook says buying an ability you already have refunds the EXP (IP still paid for a new class). classes.js refund amounts now say "full", and the planner makes the later purchase cost 0 EXP.
- [ ] Half refunds ("not an exact match but you still gain everything") aren't detected automatically; there's no list of which abilities count as near-matches.

## Data audit - 2026-10-22
- [x] Spot-check of 20 random classes (highlander, zen-warrior, windbringer, anti-mage, amanita, elementalist, trickster, aurora-blade-style, jewel-idol, agrarian, bard, monk, sage, sanctioner, sniper, duelist, mage, marksman, phosphomancer, daionmyoji) re-read against the static copy: tier, difficulty, roles, requirements and all 8 steps (abilities, skill lists, Heart/Soul options) all matched. 0 errors in 160 steps.
- [ ] Page typos noted during the audit: Phosphomancer lists "Art Magic" and Daionmyoji "Magic Perception" with a missing comma; the data treats them as two skills each.
- [ ] Item pages tried and not found (they're abilities that make items, not items): sealing-talisman, purify-elixir, detoxify-elixir, volatile-flask, high-power-shell, shadow-cloak.

## Printable sheet (Print sheet button) - 2026-10-22
- [x] Fills the official fillable Character Sheet 1.2 (6 pages, 351 fields) using its own fonts. Tested in poppler and pdfium (Chrome's PDF engine); qpdf reports no errors.
- [ ] The sheet lists "Acrobatics" and "Artisan" as skills; the current rules have neither, so the planner writes its own skill list into those rows (crafting/gathering skills you've put points into go in the spare rows).
- [ ] "Bonus" column = total roll bonus (stat + skill points + best expertise). Say if you'd rather it show just the stat.
- [ ] "Exp" field = unspent EXP. L/P Attack = 2d4 + Power, H Attack = 4d6 + 2 x Power. Temp HP/RP/Mana and Injuries are left blank for play.
- [ ] Only works with that exact PDF file (Character Sheet 1.2, 2,316,411 bytes). A new sheet version needs tools/make_sheet_map.py re-run.
