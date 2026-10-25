# Lyrian Planner - Bugs & Missing Info

Things to go back and fix. Add new items at the bottom of the right section.
Mark fixed items by changing `[ ]` to `[x]`.

Site version when data was collected: **0.13.2** (shown at the bottom of every class page).
When the site version changes, recheck classes already entered.

## Questions for the GMs (Discord-ready) - 2026-10-24
Everything else in this file is either done, checked against the official site (v0.13.2), or just a note. These are the rules questions only a GM / the designers can answer. The planner's current reading is in brackets.

1. **"+5 skill points in either A, B, C..."** (every race, and some classes like Fae Knight: Willow Style): can the 5 points be split, or must they all go into one skill? *(Planner: split allowed.)*
2. **Crafting classes' Level 3** (Alchemist, Armorsmith, Carpenter, Forager): "exchange any skill point for 2 expertise points... in these skills" - does that include the fixed +5 in the crafting skill? *(Planner: allows it.)*
3. **Stat training breakthroughs:** is there a maximum for a stat? *(Planner: no cap.)*
4. **"Any tier 2 class mastered":** does a mastered tier 3 class count? *(Planner: yes.)*
5. **Executor** ("any mastered class + any points in Acolyte"): does that mean Acolyte unlocked, and can the mastered class be Acolyte itself? *(Planner: Acolyte unlocked + one mastered class, which may be Acolyte.)*
6. **Mystic Eye slots:** which abilities/classes use up a slot (Evil Eye, Wave Palm's Life Perception Eye, Shinigami Eyes, Faerie Light Eyes...)? *(Planner: each Mystic Eye class uses one.)*
7. **Blocking:** Block sets Guard to 2 x Toughness + armor Block value. Do armor Guard and Guard bonuses from abilities (Stoneskin, stances) also add while Blocking? *(Planner: no, kept separate.)*
8. **Unholy Strength** (+2 Power / +2 Focus): does it also raise max Mana, or only attacks? *(Planner: full stat bonus while on.)*
9. **High Fae:** does Faerie Flash II replace the Fae race's Faerie Flash, or do you have both? *(Planner: both listed.)*
10. **Demon** proficiency choice: which skill is "tied to" each demon clan for the +5 skill-points option?
11. **Mandate keyword:** what happens when you "defy the mandate"?
12. **Curse of Vampirism:** "Wounds only from fire, holy or true damage" - Injuries, or mortal wounds?
13. **Become Lightning (Raijin):** it mentions a Power bonus from Consume Lightning, but Consume Lightning gives a damage bonus (Lightning Boost). Which is it?

## General
- [x] **Data source:** lyrian.splatpass.net is an unofficial static copy (found by Grok). The official site https://rpg.angelssword.com/ is readable through the browser extension (2026-10-22): it is the same version (0.13.2) with the same 185 classes. It fills in five class steps the copy left blank (Botanist 8, Jonin 4, Ninja 8, Shadowbringer 2, Warding Mage 4 - now set), and it lists all 206 items.

- [x] **Rules text is own-words summaries, not official wording.** My page tools won't copy the
      site's rules text word for word, so every ability's `summary` is written in plain English.
      All numbers, costs, ranges, keywords, roles and skill/stat choices ARE exact.
      Fix options: screenshots/paste of exact text, or permission from Angel's Sword Studios. → *Noted, no action needed.* By design: summaries stay in plain English (the official wording belongs to Angel's Sword Studios); numbers, costs, ranges and keywords are exact.
- [x] **Site gets updated over time.** Each class record has `checked` (date) and `version`.
      Plan: recheck old classes whenever the version number at the bottom of the site changes. → *Noted, no action needed.* Process: recheck when the site's version number changes (still 0.13.2 on 2026-10-24).
- [x] **Level 3 skill step text** is stored as a summary + exact skill list. Every class so far
      uses the same pattern (+5 points, trade 1 point for 2 expertise in those skills). Flag any
      class that differs. → **Done:** All classes checked; the exceptions (crafting classes) are stored with their own fields.

- [x] **Formulas & dice need the rulebook.** DONE: rulebook read 2026-10-21 - see RULES_REFERENCE.md (derived stats, attack/damage formulas, EXP/IP costs, keyword glossary). Note the site copy of the rulebook cuts off in "Food and Rest", so rest/HP recovery rules are still MISSING.
- [x] (old note) **Formulas & dice need the rulebook.** Formulas like "11 + (2 x Power)" are recorded as the
      page shows them, but terms (Guard, Circuit, Overcharge, Upkeep, Encounter Start/Conclusion,
      AP/RP/MP, Challenge, etc.) and any dice rolls can't be turned into planner math until the
      rulebook (https://lyrian.splatpass.net/rulebook/) is read. Do this before building calculators. → **Done:** Rulebook read; formulas are in RULES_REFERENCE.md and the planner.
- [x] **"Helps unlock" routes not stored yet.** Each class page lists which later classes it helps
      unlock (useful for long-term build planning). Not captured in records yet; add in a later pass. → **Done:** The planner works routes out from the requirement data instead (What can I unlock next? card).
- [x] **Granted abilities.** Some key features grant an extra ability (kind: "granted",
      grantedBy: ...). Planner UI needs to show these. → **Done:** Granted abilities show in the Abilities pane and on the printed sheet.

- [x] **Class list: 185 records = 184 of the 185 classes on the site index + Armiger.**
      The index page and sitemap both cut off (the sitemap stops after Oracle), so classes after
      Oracle were found through "Helps unlock" lists, requirement lines, the abilities index and
      keyword pages. **One index class is still not found.** All classes on the sitemap (A-Oracle)
      are present. To find the last one: screenshot the class index (sorted Z-A) and compare.
      Found only by searching (not in any list read): Searing Lotus Style, Shield Saint, Shinigami
      Eyes, Sky Knight, Summoner, Tavern Brawler, Timberwright, Trickster, True Shinigami Eyes,
      Vampire, Vampire Lord, Wildheart. → **Done:** The official class list (2026-10-22) shows the same 185 classes as the planner.
- [x] **Blank steps on the site** (recorded as MISSING, ability stored as "unlisted"):
      Botanist L8, Jonin L4, Ninja L8, Shadowbringer L2, Warding Mage L4. → **Done:** All five filled from the official site on 2026-10-24.

## Abjurer

- [x] Mana Shield cost shows on the page as "No listed cost" (its text says 1 AP + 1 Mana if not
      used at Encounter Start). Recorded exactly as the page shows it. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Acolyte

- [x] Entry requirement is recorded as "Divine's Chosen breakthrough, OR being Human" - confirm
      exact wording from the page. → **Done:** Official page 2026-10-24: "Divine's Chosen breakthrough or be human."
- [x] Acolyte's Journey: two page reads disagreed on whether "+5 Religion" is its own Benefit or
      part of another. Recorded as Benefit 2 (4 benefits total, plus a "+5 skill points" Grants line).
      Confirm with a screenshot. → **Done:** Official page: +5 Religion is its own benefit.
- [x] Miracle: Sanctuary sphere HP recorded as 20 + (8 x Toughness). One read noted the page shows
      it in an unusual way ("Toughness x 8"). Confirm. → **Done:** Official page: 20 + Toughness x 8.
- [x] Miracle: Sanctuary range recorded as "5ft radius centered on self" - confirm exact label. → **Done:** Official page: "5ft radius centered on self".
- [x] Cure Touch / Light's Care / Sanctuary show a Requirements heading with "-" on the page.
      Recorded as no requirement (null). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Adventurer

- [x] Entry requirements show as "None" - recorded as null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3 skills: page says "any non-crafting skill" with no list. Recorded as
      options: "ANY_NON_CRAFTING". Need the official list of crafting vs non-crafting skills. → **Done:** The planner's skill list marks main / crafting / gathering skills.
- [x] Adventurer Essentials refund rule (half EXP if you already know Presence Concealment via
      Saboteur or Demon WI clan; lineage reduction first). EXP costs/refunds need the rulebook. → *Noted, no action needed.* Rulebook refund rules (full / half) are in RULES_REFERENCE.md section 4.
- [x] Adventurer Essentials weapon/armor choices: need the official weapon group list
      (common vs specialized) and armor categories for planner dropdowns. → **Done:** Weapon groups and armor types are in proficiencies.js / items.js.
- [x] Power Jump: one page read tied the "no attacks of opportunity / no fall damage" part to
      "0 AP" in an unclear way. Recorded as always true - confirm. → **Done:** Official page: you land at the end of your turn (or earlier for 0 AP) and that fall doesn't provoke - recorded reading is right.
- [x] Mana Razor: page read listed a "Mana Razor (until end of turn)" grant line - confirm if it's
      a status effect name. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Efficient Spirit Control: "next non-healing keyword action" wording is odd - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Circuit keyword / "reset your Circuits" - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## General (added during Aerial Mage - Angelblooded batch)

- [x] **Crafting classes use different Level 3 steps.** Agrarian and Alchemeister give +5 in one
      crafting skill and the page doesn't mention expertise trading (recorded expertiseTrade: null).
      Alchemist gives fixed +5 Alchemy PLUS +5 among a list (recorded with `fixed`).
      Alkahest gives 10 "Transmuter points" instead (step type: "special"). Planner must handle these. → **Done:** Stored per class (fixed / expertiseTrade / Transmuter points) and handled by the Skills card.
- [x] **Sub-abilities.** Crafting key features grant a group of small abilities with Crafting Point
      costs (stored as `subAbilities`). Planner UI needs to show them. → **Done:** Sub-abilities are listed under their ability on screen and on the printed sheet (2026-10-24).
- [x] **Skill category lists needed:** "any non-crafting" (Adventurer), "any non-crafting or
      gathering" (Angelblooded), "any crafting discipline" (Alkahest). Need official lists of
      crafting and gathering skills. → **Done:** The planner's skill list marks main / crafting / gathering skills.
- [x] **Roles shown without Main/Secondary labels** on some pages. Aerial Mage and Angelblooded
      read as one role only (Specialist, Utility) - matches the class index. Confirm. → *Noted, no action needed.* Matches the class index.

## Aerial Mage

- [x] Aerial Mode Switch: page read said "airship's movement speed drops to 10ft" in Hover mode -
      recorded as YOUR movement speed. Confirm wording. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Take Off cost shows "No listed cost" (Encounter Start ability). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Mixed naming on page: "Aerial Stave" vs "Aerial Staff". Recorded as shown in each spot. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Strafe ("100 or more Strafe"), Lock On, Sure Hit, Full Pierce, Airship shots - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Aeromancer

- [x] Wind Master refund: page says refund possible and that Windbringer and Zephyr Warder also
      grant it, but the refund amount wasn't captured. Recorded amount: "MISSING". → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Wind Buffet: smaller targets roll with 1d4 penalty, larger with 1d4 bonus - dice, needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Save against Potency" - Potency formula needs rulebook. → **Rulebook:** Potency = 11 + Focus (in the planner's Combat panel).

## Aeromaster

- [x] Controlled Wind wording is unclear (choose to push the full max distance vs. pick a shorter
      distance). Confirm with a screenshot. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Cyclone: rules text lists no damage, but the class's tactical guidance says it deals a slight
      amount of damage. Recorded with no damage. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Aetherie

- [x] Conduit: no cost, range or keywords on the page. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Blinded 5" and "Block Crush" - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Agrarian

- [x] Level 3: +5 Farming only; expertise trading not mentioned. Confirm. → *Noted, no action needed.* Page doesn't mention trading; the planner offers no trade for it.
- [x] Key feature and its granted ability are both named "Expert Farmer". Granted one stored as
      id "expert-farmer-crafting". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Terracing: no keywords section, but Overcharge appears in its text. Recorded keywords: []. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Rare/mystic herb rarity, Food units, crafting dice/points - need rulebook. → *Noted, no action needed.* Gathering/farming rules are in the rulebook; not needed for planning.

## Alchemeister

- [x] Level 3: +5 Alchemy only; expertise trading not mentioned. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Counter-Potion cost shows "Variable RP"; text says X = the AP cost of the used item, but doesn't
      state outright that you pay X RP. Confirm. → **Done:** Official page: cost "X RP" (X = the item's AP cost). Data updated 2026-10-24.
- [x] Detailed Finish upgrades the crafting dice to 2d8 - needs rulebook (base crafting dice). → *Noted, no action needed.* Rulebook crafting dice are covered in RULES_REFERENCE.md; not needed for planning.

## Alchemist

- [ ] **GM question.** Level 3 has fixed +5 Alchemy plus +5 choice; trade rule wording covers "these skills" -
      confirm it applies to the Alchemy points too. → Level 3 trade wording "these skills": can the fixed crafting points be traded for expertise too?
- [x] "1 IP" / "EP action" / interlude points - need rulebook. → **Rulebook:** IP and EP actions are in the rulebook's Interlude section.

## Alkahest

- [x] Level 3 isn't a normal skill step (10 Transmuter points + discipline choice). Confirm details. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Difficulty shows 2/5. Recorded 2. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Transmutation Tricks Benefit 3 text only says you may use "the following abilities" and
      links Transmuter Tricks. Recorded as granting Transmuter Tricks. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Siphon Material: ability shows no cost, but tactical guidance says it costs an interlude point. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Proto Armatae HP shows "–" in its stat block but text gives 15 + 5 x Focus. Recorded formula. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Evasion 9/19 and Guard 4/14 - meaning of the two numbers needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Amanita

- [x] Mushroomize cost: 2 AP, with "1 RP instead of 2 AP" in the text. Recorded cost "2 AP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Spore Symbiote comes from Mycomancer (the required class) - planner may need to link them. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Damage Reduction, Amoxicillin, Downed state - need rulebook. → **Rulebook:** Damage reduction and the Downed state are in the rulebook (RULES_REFERENCE.md section 7).

## Angelblooded

- [x] Role read as "Main: Main, Secondary: Utility" - recorded role Utility, no secondary
      (matches the class index). Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Angelic Presence grants +1 Presence (stored as `grants`). Planner should add it to stats. → **Done:** +1 Presence is added to stats.
- [x] God's Blessing: no cost and range "-" on the page. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## General (added during Animal Summoner - Bajiquan Style batch)

- [x] **Shared abilities across classes.** Some abilities appear in more than one class (e.g.
      Battle Cast: Archsage + Battle Mage; Status Assessment II: Archer + Marksman). Each class
      stores its own copy. Planner should detect duplicates for refunds/overlap. → **Done:** The planner detects duplicate abilities and refunds their EXP on the roadmap.
- [x] **Refund amounts not always captured.** Where the page only says "refund possible",
      recorded amount: "MISSING" (Aeromancer, Archer, Archsage so far). → *Noted, no action needed.* Rulebook refund rules: full refund for an exact duplicate or an unusable ability, half for a near-match. The page-specific amount isn't needed.
- [x] **Heart/Soul steps can grant extra things.** Armorsmith's Heart also gives a proficiency
      choice (stored as `alsoGrants`). Watch for more. → **Done:** alsoGrants is read by the planner (proficiency choice).
- [x] **Key ability and granted ability with the same name.** Where this happens, the key gets
      "(key)" in its name and "-key" in its id (Animal Summoner, Archer). → *Noted, no action needed.* Naming convention.

## Animal Summoner

- [x] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [ ] Wolf, Boar and Giant Spider stat blocks are NOT on the class page. Need monster pages. → Still to collect: Wolf, Boar and Giant Spider stat blocks (monster pages).
- [x] "Summon limit" and "slots" - need rulebook. → **Done:** Summon keyword defined in keywords.js.
- [x] Summon Animal picks a random animal - how it's rolled isn't stated. Needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Anti-Mage

- [x] Role read as "Main" + "Support" - recorded Support only (matches class index). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Counterspell cost shows "1 or 2 RP" but its text describes a variable RP cost. Confirm. → **Done:** Official page shows the cost as "NaN RP" (a site glitch); text: half the spell's AP (rounded up) or its RP. Data now says "Variable RP" (2026-10-24).
- [x] "Grunt" enemy type, Bounded Fields, Enchantment keyword - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Arcanist

- [x] Magic Missile II has no Requirements heading on the page (others show "-"). Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Expanded Circuits grants +2 max Mana (stored as `grants: { maxMana: 2 }`). → **Done:** +2 max Mana is added.

## Archer

- [x] Status Assessment II key: refund possible, also granted by Marksman. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Unerring Aim: no cost, range, keywords or requirements on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Snap Shot II: "Focus isn't added to this roll" - roll math needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Archsage

- [x] Role read as "Main" + "Utility" - recorded Utility only (matches class index). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Battle Cast (Level 2) shows refund possible; also granted by Battle Mage. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.

## Armorsmith

- [ ] **GM question.** Level 3: expertise trade wording names Athletics, Riding, Common Knowledge only - unclear
      if the fixed Armorsmithing points can be traded too. Confirm. → Level 3 trade wording "these skills": can the fixed crafting points be traded for expertise too?
- [x] Heart step also grants proficiency in Heavy Armor OR Greatshields (needs a dropdown). → **Done:** Proficiency choice handled (alsoGrants).
- [x] Armorsmith Core Crafting: key Benefit 4 says "Armorsmith Core Crafting" but the granted
      ability on the page is named "Armorsmith Basics". Stored as "Armorsmith Basics (crafting abilities)". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Thermal Quench cost line shows "1 Crafting Dice" with an extra "Other" label. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Modification A / Frame details are on Universal Armor + armor pages (not captured). → **Done:** Universal armor mods and Frame mods are in the Mods window (data/mods.js).

## Artificer

- [x] Level 3 lists both "Artificing" (fixed +5) and "Artifice" (in the choice list). These may
      be two different skills or a site typo. Confirm. → **Rulebook:** they're two different skills: Artifice (a Reason skill) and Artificing (Artificer crafting). Official page 2026-10-24 lists both.
- [x] Artifice Modification C: text says it modifies a "weapon" despite the name. Possible site typo. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Blackbird cost: "1 AP" plus "1 Small Shell" (tagged "Other"). Recorded "1 AP, 1 Small Shell". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Overclock: +1d10 crafting points - needs rulebook. → *Noted, no action needed.* Crafting dice/points are rulebook crafting rules; not needed for planning.
- [x] "clim" currency and material unit values - need rulebook/items pages. → **Done:** Clim and units are in the planner (units added 2026-10-24).

## Assassin

- [x] Devastating Strike III: "guaranteed maximum damage" - confirm wording and damage math. → **Done:** Official page 2026-10-24 has NO maximum-damage clause - just a Light (1 AP) or Heavy (2 AP) attack. Summary corrected.
- [x] Death Mark: no listed cost (Encounter Start ability). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Aurora Blade Style

- [x] Ultimate name is spelled "Permafrost Guilotine" on the class index (one 'l'). One page read
      spelled it "Guillotine". Recorded the index spelling. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Rimestep has no Requirements heading; its trigger (target Slowed by a Frost attack) is in the
      rules text. Recorded requires: null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Rimestep has an Overcharge in its text but "Overcharge" isn't in its keyword list. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Bajiquan Style

- [x] Zhen Jiao: no cost, range, keywords or requirements on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Elbow Uppercut and Tetsuzanko show a "Combo" heading in the rules - recorded inside summary. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Rushing Knee Drop is mentioned (from Martial Artist?) - not on this page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## General (added during Bard - Botanist batch)

- [x] **Missing ability steps.** A class step can be blank on the site. Stored as
      `ability: null, missing: "MISSING - ..."`. Planner must show these as missing (Botanist L8). → **Done:** The blank steps were filled from the official site on 2026-10-24.
- [x] **Abilities not in the progression.** Some pages list an ability under "Abilities unlocked"
      that no step grants. Stored with kind: "unlisted" (Botanist: Forager's Eye). → **Done:** Those abilities are now the missing steps (filled 2026-10-24).
- [ ] **Gene inventory / other counters.** Biochemist adds a gene-inventory counter
      (`grants: { geneInventory: 1 }`) from two abilities. Planner may want to total these. → Still to do: total gene inventory in the planner (Biochemist only).

## Bard

- [x] Role read as "Main" + "Support" - recorded Support only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Toss a coin: cost recorded as "Errand" (page says it's an Errand action, no cost line). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Inspiring Song +1d4 / Dirge -1d4 - dice, needs rulebook. → *Noted, no action needed.* Dice described in the ability text.
- [x] Entry requirement includes Art expertise in Singing/Idol/an instrument - planner needs
      Art expertise sub-types for this check. → **Done:** Requirements check named Art expertise.

## Battle Mage

- [x] Battle Cast (Level 4) shows refund possible; also granted by Archsage. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Shooting Form range shows "-". Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Circle Swing has no Keywords line on the page. Recorded []. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Mage Armor add-ons (Barrier, Fortress, Manaweave, Protective Coating, Spidersilk) are on
      armor pages - not captured. → **Done:** Armor mods are in the Mods window (data/mods.js).

## Battlemaster

- [x] Ability name spelled "Skillfull Blow" (two l's) on the site. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Arms Mastery proficiency doesn't count for class requirements - planner should respect this. → **Done:** proficiencies.js marks Arms Mastery as not counting for class requirements.

## Berserker

- [x] Fallen Friend triggers on a "Heroic-tier ally" - needs rulebook. → **Rulebook:** Heroic/Elite vs Grunt types are in the rulebook (RULES_REFERENCE.md section 7).
- [x] Soul options listed as "Power or Focus" (that order). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Biochemist

- [x] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Chimera subraces and their genes/abilities - need races pages (races.js later). → **Done:** Chimera sub-races are in races.js.
- [x] Alchemy Elixirs (Rabbit, Reaper, Shark, Tunnel, Bull, Bear) - need items pages. → **Done:** Those elixirs are in items.js.

## Black Oath Style

- [x] Eclipse Breaker: tactical guidance says no mana cost, can start with 1 AP and cancel if no
      one's in the area - not in the ability block. Recorded the ability block only. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Setup" keyword (charging abilities) - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Blacksmith

- [x] Weapon Maintenance has no listed cost, range or duration. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Crit ranges (19-20, katana 18-20) - needs rulebook/weapons pages. → **Rulebook:** Katana's Keen (crit 19-20) and other weapon-group rules are in RULES_REFERENCE.md section 10.

## Bloodbinder

- [x] Entry requirement "At least 1 class mastered" (worded differently from "Any class mastered"
      on other pages - likely the same). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Crimson Enmity: no cost, range or keywords on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Bodyguard

- [x] Cost lines show run together on the page ("0 AP3 MP", "0 RP2 MP"). Recorded as
      "0 AP, 3 MP" and "0 RP, 2 MP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Vengeance range is "Weapon Range" (not "Melee Weapon Range"). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Botanist

- [x] **Level 8 Ultimate is BLANK on the site** (the class index also shows an empty 5th ability).
      Recorded as MISSING. Recheck when the site updates. → **Done:** Filled from the official site 2026-10-24 (Forager's Eye).
- [x] **Forager's Eye** is listed under Abilities unlocked but isn't in any progression step.
      Stored as kind "unlisted". Its Combo text is confusing (mentions Lifebeat Sense with an
      unstated bonus). Confirm with a screenshot. → **Done:** Forager's Eye is now the Level 8 step (official site 2026-10-24).
- [x] Felling Strike and Craft Pemmican are mentioned in the tactical guidance but have no entries. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3: +5 Foraging only; expertise trading not mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Trail Mix cost "Rest Action" (plus an "Other" tag); Stalks of Comparison cost "1 Strike Dice"
      (plus "Other"). Recorded without the "Other" tag. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Node Points, Lucky Points, Strike Dice, Outcrop tiers - gathering rules, need rulebook. → *Noted, no action needed.* Gathering rules are in the rulebook; not needed for planning.
- [x] Trail Mix mentions "Mirane" getting 0 Mana - probably a race or character. Confirm. → *Noted, no action needed.* Mirane is the canon campaign's town (Mirane Expedition) - a campaign-specific line.

## General (added during Brawler - Cultivator batch)

- [x] **Key abilities that grant skill points.** Cavalier (+5 Riding) and Cultivator (+5 among a
      list) give skill points on unlock, on top of Level 3 (stored in the key's `grants`).
      Acolyte did the same (+5 Religion). Planner must add these to skill totals. → **Done:** Key-ability skill points are their own pots in the Skills card.
- [x] **Key abilities that grant an element Mastery.** Cryomancer's Ice Cold grants Frost Mastery
      (`grants: { mastery: "Frost" }`). Masteries unlock other classes (e.g. Aeromancer: "Wind
      mastered"). Planner should track masteries. → **Done:** Masteries are tracked and used for requirements.

## Brawler

- [x] Vital Drive II cost shows "0 RP Variable MP" run together. Recorded "0 RP, Variable MP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Counter Stance: ability says cancel for 0 AP or 1 RP; tactical guidance says it can't end
      until your next turn. Recorded the ability block. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Suckerpunch: tactical guidance says only usable when already in melee range at encounter
      start - not in the ability block. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cannoneer

- [x] Cannons' "1 attack limitation" and splash mods - need weapons/items pages. → **Done:** Cannon items and mods are in items.js.
- [x] Sunder 2 - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Quantum Bomb lists only "heavy attack" with Setup - seems light on detail. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Carpenter

- [ ] **GM question.** Level 3 expertise trade: "these skills" is ambiguous (Carpentry too, or only the 3 choices?). → Level 3 trade wording "these skills": can the fixed crafting points be traded for expertise too?
- [x] Felling Strike: no keywords listed on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Hammer and Nail has the Rage keyword (unusual for a crafter). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cavalier

- [x] Role read as "Main" + "Utility" - recorded Utility only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Spirit Jump: same unclear "For 0 AP, the fall doesn't provoke..." wording as Adventurer's
      Power Jump. Recorded as always true. → **Done:** Same wording as Power Jump; the recorded reading matches the official page.
- [x] Mounts and mount stats - need rulebook/monsters pages. → **Done:** Mounts are in items.js (category Mount).

## Chronofighter

- [x] Past Self (granted) has no Requirements section. Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Accelerating Strike: "Initiative rises by up to 2" - confirm exact wording. → **Done:** Official page: "increases your Initiative by up to 2".
- [x] "Opener" keyword and the Delay encounter start action - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Chronomancer

- [x] No abilities on this page show a Requirements line at all. Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Galaxy Stop: "non-heroic units" - needs rulebook. → **Rulebook:** Grunt/Heroic types are in RULES_REFERENCE.md section 7.

## Colossus

- [x] Mighty Leap: save vs Unbalanced - no save type given on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3 skill list is only 4 skills (no Common Knowledge). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cryomancer

- [x] Glacial Wall: "4 x X" cubes - X isn't defined on the page (probably Mana spent, given the
      "Variable MP" cost). Confirm. → **Done:** Official page: cost "X MP", so X = Mana spent.
- [x] Sheet Ice "20x20 area" - no unit on the page (probably ft). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Frost Coffin cubes have HP 15 + Focus (Glacial Wall cubes are 20 + Focus). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Culinarian

- [x] Craft Pemmican listed with the "Errand" keyword and no cost line. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Pepper Spray keyword shown as "Blinded" (a condition, not a usual keyword). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Oil Slick "15x15 area" - no unit (probably ft). No keywords listed. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Food bonuses (+1 Focus etc.) - planner could track as temporary buffs later. → *Noted, no action needed.* Idea for later: food buffs as toggles.

## Cultivator

- [x] Role read as "Main" + "Utility" - recorded Utility only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Cultivator's Journey Benefit 3 gives +5 skill points from the SAME list as Level 3 - a page
      read called it a duplicate. Recorded both. Confirm it's really two separate +5s. → **Done:** Official page 2026-10-24: yes, two separate +5s (Level 3 and the key's benefit).
- [x] Index lore talks about philosophies/paths, but the page has no path choices. Nothing to record. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## General (added during Curse Knight - Electromancer batch)

- [x] **Race-based entry routes.** Dragoon can be entered by being a Jiangshi instead of having
      10 Athletics (Jumping) expertise. Planner will need race data (races.js) for these checks. → **Done:** Requirements check race.
- [x] **Expertise sub-skills in requirements.** Dragoon needs "Athletics (Jumping)" expertise;
      Bard needed "Art (Singing)" etc. Planner needs named expertise sub-skills. → **Done:** Requirements check named expertise.
- [x] **Empty overview/guidance sections on some pages** (Cutthroat, Dark Priest). Not needed for
      planner data; noted only. → *Noted, no action needed.* Not needed for the planner.

## Curse Knight

- [x] Role read as "Main" + "Striker" - recorded Striker only (matches class index). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Lockstep" keyword on Backlash and "Climax Arts" in Devil's Curse - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Devil's Blow: page lists Full Pierce as a keyword but the text says the attack does NOT have
      Full Pierce (the self-damage on a roll of 1 does). Recorded keyword as shown. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cutthroat

- [x] Exposing Stab says "Devastating Strike" (no number) - assumed it means Devastating Strike II
      on this class. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Artery Cut: critical hit rules - need rulebook. → **Rulebook:** Critical hits are in the rulebook (natural 20; Keen 19-20).

## Daionmyoji

- [x] Role read as "Main" + "Specialist" - recorded Specialist only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Level 3 list shows "Magic Perception" with no comma. Recorded as two skills (Magic,
      Perception). Possible site typo - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Prepared Talisman: cost "No listed cost" and requirement "Special". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Talismans, Create Talisman, Sealing/Secret Talismans, calligraphy units - come from Onmyoji
      (the required class). Need Onmyoji page. → **Done:** Onmyoji is in classes.js and was rechecked 2026-10-24.
- [x] Spirit Core values and "non-heroic" - need rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Dark Priest

- [x] Soul Absorption key grants Elemental Mastery: Dark (stored as `grants: { mastery: "Dark" }`). → **Done:** Dark Mastery tracked.
- [x] Gloom Infusion: "Type" keyword and creature type "Dark II" - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Stygian Screen: Concentration but no stated duration. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Deadeye

- [x] Aimed Shot (Level 6) shows refund possible; also granted by Sniper. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Countershot has no keywords listed. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Status Assessment III also shows RP % (Archer's II shows HP % only). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Death Knight

- [x] Unholy Strength grants +2 Power and +2 Focus while active (temporary buff). → **Done:** Shown as a toggle bonus.
- [x] Call of the Grave: page read gave no damage dice for the Heavy Attack (normal - uses weapon). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Dragoon

- [x] Level 3 includes "a relevant Expert Knowledge skill (DM approval)". Recorded as an option label. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Jump (granted) range shows "-". Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Entry: "Lancer mastered" + (10 Athletics (Jumping) expertise OR Jiangshi race). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Duelist

- [x] Parry comes from Fencer (the required class). Need Fencer page to link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Endless Waltz wording ("two Light Attacks, then one more on damage") - confirm exact sequence. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Earthcleaving Style

- [x] "Half Pierce" keyword and "Offstep" - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Measured Collapse always counts as rolling a 2 for accuracy - confirm (seems unusual; maybe
      it's a bonus of 2?). Recorded as the page read stated. → **Done:** Official page 2026-10-24: "always considered to have rolled a 2 for accuracy" (+2 vs large, +4 vs huge). Recorded correctly.

## Electromancer

- [x] Superconductor key grants Elemental Mastery: Lightning (stored as `grants: { mastery: "Lightning" }`). → **Done:** Lightning Mastery tracked.
- [x] Cost lines show run together ("1 AP1 MP"). Recorded with comma. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Static (Focus x 3 etc.) - Static rules need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Bolting: tactical guidance says it can't be used indoors - not in the ability block. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## General (added during the overnight run)

- [x] **Class list page is too long to read past ~52 classes.** The overnight run used the site's
      sitemap.xml for the class list (it covers A through Oracle). For classes after Oracle, names
      were collected from "Helps unlock" sections and entry requirements, then counted against the
      site's total of 185. See the end-of-run summary for the final count. → **Done:** Class list confirmed complete against the official site (185).
- [x] **Armiger is in the sitemap but NOT on the class list page.** Its page exists and loads fully.
      Added in alphabetical order with `onClassIndex: false`. It may be hidden/unreleased - confirm. → **Done:** Armiger is on the official site's class list (checked 2026-10-22).
- [x] **Masteries as entry routes.** Eremancer ("Dark Mastery"), Electromancer ("Lightning
      mastered"), Aeromancer ("Wind mastered"), Cryomancer ("Frost mastery") can be entered via an
      element mastery. Keys that grant masteries so far: Cryomancer (Frost), Dark Priest (Dark),
      Electromancer (Lightning), Eremancer (Dark). → **Done:** Masteries are tracked and used for requirements.
- [x] **Mark of Justice / Holy weapon key ability** referenced by Exalted Blade come from Sword
      Paladin (its required class). → *Noted, no action needed.* Data note.

## Armiger

- [x] Not on the class list page (see General). Role read as "Main" + "Utility" - recorded Utility. → **Done:** Armiger is on the official class list.
- [x] Fast Dimensional Equip requirement says "Dimension Armory" (not "Dimensional") - site typo. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Send To Armory has an Overcharge in its text, but Overcharge isn't in its keywords. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Electromaster

- [x] Static Overload: no damage stated on a successful save. Daze keyword - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Thunderstorm: "cover is figured from above the target" - needs rulebook (cover rules). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Elementalist

- [x] Elemental Convergence lets you count as having mastered an element for the encounter -
      planner should NOT treat this as a permanent mastery for class entry. → **Done:** Elemental Convergence doesn't grant a permanent mastery in the data.
- [x] Elemental Bolt lists condition names (Burning, Soaked, Illumination, etc.) as keywords.
      Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Elemental Burst: 2d4 + Focus - dice, needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Eremancer

- [x] Role read as "Main" only - recorded Striker (matches class index). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Dark Bolt lists both Half Pierce and Full Pierce as keywords. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Energy Drain: "universal" damage resistance types - needs rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Eremancer" guidance has only an image (no text). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Evil Eye

- [x] Entry needs "at least 1 mystic eye slot open" - planner needs to track Mystic Eye slots. → **Done:** Mystic Eye slots are tracked.
- [x] Key ability shares the class name; stored as "Evil Eye (key)". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Evil Eye of Death: page lists no save. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Evil Eye" guidance says only "Soon". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Exalted Blade

- [x] Role read as "Main" + "Striker" - recorded Striker only (matches class index). → *Noted, no action needed.* Matches the class index.
- [x] Undying Justice (Level 2) shows refund possible; also granted by Exalted Shield. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Heavy Blade bonus damage and Anathema mentioned - from other classes/items. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Exalted Shield

- [x] Undying Justice (Level 2) shows refund possible; also granted by Exalted Blade. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Divine Shield: "must be first action of your turn" is in its text, not a Requirements line. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Holy Declaration has no listed trigger/requirement, but its text says Block "against the
      attack" - it's probably a reaction. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Excavator

- [x] Level 3: +5 Mining only; expertise trading not mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Focused Detonation / Take it easy cost "1 Strike Dice" (plus an "Other" tag). Requirement
      text on site says "Must in a gathering session" (missing "be"). Recorded corrected wording. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Executor

- [x] Role read as "Main" + "Striker" - recorded Striker only. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [ ] **GM question.** Entry: "Any mastered class + Any points in Acolyte" - unclear if "points" means levels in
      Acolyte. Confirm. → Executor entry: "any points in Acolyte" - Acolyte unlocked, and can the mastered class be Acolyte?
- [x] Ultimate name is "Ave María" (with accent); Deus Vult text writes "Ave Maria". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Eagle Hunt range "-". Recorded null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Fae Knight

- [x] Entry requires the Fae race ("Fae only") - needs races.js. → **Done:** Race requirements are checked.
- [x] Fluttering Blade "Active" keyword and "Pass" keyword - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Petal Swirl Flash refreshes "Faerie Flash" - probably a Fae racial ability. → **Done:** Faerie Flash is the Fae racial ability.

## Fae Knight: Willow Style

- [x] URL slug has a double hyphen ("fae-knight--willow-style"); record id is "fae-knight-willow-style". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3 wording read as "5 skill points in ONE of" the listed skills - unusual. Recorded as
      the normal pick-among-list. Confirm. → *Noted, no action needed.* Same "+5 in either A, B, C..." wording the race pages use; read as spend among the list.
- [x] Heavy Spin enhancement: ability text says 2 Mana; tactical guidance says 1 Mana. Recorded 2. → **Done:** Official page 2026-10-24: Willow Stance's Heavy Spin enhancement costs 2 mana.
- [x] Ultimate is named "Secret Art ~ Faerie Light Eyes: Jade Shelterbelt" - links to the
      Faerie Light Eyes class somehow. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Faerie Light Eyes

- [x] Role read as "Main" + "Controller" - recorded Controller only. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Entry needs the "Mystic Eyes of Faerie Light" breakthrough + an open mystic eye slot. → **Done:** Requirement checked by the planner.
- [x] Time Dilation: Dodge bonus "2X" - X isn't defined (probably Mana spent, given "Variable MP"). → **Done:** Official page: cost "X MP", Dodge bonus 2X - X = Mana spent.
- [x] Boss enemies, Esoteric Arts - need rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Farmer

- [x] Level 3 recorded as fixed +5 Farming plus +5 choice (same pattern as other crafters). The
      page read said "no fixed points" but also "5 points to spend on Farming". Confirm. → **Done:** Official page 2026-10-24: fixed +5 Farming plus 5 among Athletics, Survival, Animal Husbandry, Common Knowledge.
- [x] Farming plots, seeds, harvest difficulty - need rulebook (farming rules). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Fencer

- [x] Lunge (Level 4) shows refund possible; also granted by Lancer. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Parry range "-". Recorded null. Parry's "regain 1 RP" is a rules effect, not a refund note. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Nimble (light blades ability) - need weapons page. → **Rulebook:** Nimble (Light Swords) is in RULES_REFERENCE.md section 10.

## Fighter

- [x] Fighter's Journey grants +5 HP (stored as `grants: { hp: 5 }`). Planner should add to HP. → **Done:** +5 HP is added.
- [x] Power Strike keyword "Crushing" - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Five Harmonies Style

- [x] Ultimate name spelled "Dharani: Blooming Conciousness" on the site (missing 's'). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Luminous Form Stance mentions "Gravitional Ki" (site spelling) - another class's ability. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] The ultimate is a Secret Art (keyword) - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Flame Sentinel

- [x] Controlled Blaze key grants Fire Mastery; refund possible (also granted by Pyromancer). Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund (Refunds rule); the planner refunds exact duplicates automatically, so no page amount is needed.
- [x] Flame Infusion cost shows "1 AP, 0 MP". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Flash Star Blade Style

- [x] Role read as "Main" + "Striker" - recorded Striker only. → *Noted, no action needed.* Matches the class index.
- [x] URL slug ends with a hyphen ("flash-star-blade-style-"); record id has no trailing hyphen. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Flowing Wind Style

- [x] Plume-Treading Art: no cost or range on the page (passive). "Stacking" keyword - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Forager

- [ ] **GM question.** Level 3: fixed +5 Foraging plus +5 choice; trade wording "these skills" is ambiguous. → Level 3 trade wording "these skills": can the fixed crafting points be traded for expertise too?
- [x] Verdant Instinct / Divining Petalfall cost "1 Strike Dice" (plus "Other" tag). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Expose condition - needs rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] Forager's Eye (seen on the Botanist page) is NOT on the Forager page either. Still unknown. → **Done:** Forager's Eye is Botanist's Level 8 ability.

## Forgemaster

- [x] Level 3: +5 Blacksmithing only; expertise trading not mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 6 "Expertise Study (Blacksmithing)" grants expertise points + a weapon proficiency
      (stored in `grants`). Planner should add these. → *Noted, no action needed.* Proficiency is handled; the expertise points are the open "track craft expertise grants" item in Bonuses.
- [x] Secret Art: Shatter - "non-divine arms weapon" and crafted enhancements - need items rules. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Fusilier

- [x] Salvo keyword and Dual Wield - need rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).
- [x] "Playing Fusilier" guidance is effectively empty. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Geomancer

- [x] Role read as "Main" + "Controller" - recorded Controller only. → *Noted, no action needed.* Matches the class index.
- [x] Tremorsense key grants Earth Mastery; refund possible (also granted by Granite Warden). Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Fissure requirement shows "Special". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Mud Wall: "1ft thick" / "4ft high" - unusual vs 5ft grid. Recorded as page read stated. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Geomaster

- [x] Earthen Divide has an Overcharge in its text, but Overcharge isn't in its keywords. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Grandmaster

- [x] Role read as "Main" only - recorded Striker (page read named Striker as main). → *Noted, no action needed.* Matches the class index.
- [x] Puppet piece stats (HP 20 + Focus; Knight/Bishop/Rook/Queen movement) - recorded in summaries.
      Summon Piece has an Overcharge in its text but no Overcharge keyword listed. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3 read as "+5 to one of" the list - recorded as the normal pick-among-list. Confirm. → *Noted, no action needed.* Same "+5 in either/one of" wording as the race pages; read as spend among the list.

## Granite Warden

- [x] Roles read as "Main: Support, Secondary: Defender" (labels and words run together). Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Tremorsense key: refund possible (also granted by Geomancer). Amount MISSING. Same ability as Geomancer's. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Steady Ground: "1 RP (or 2 AP instead)". Recorded cost "1 RP" with the alternative in the summary. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Gravitect

- [x] Role read as "Main: Controller" only. → *Noted, no action needed.* Matches the class index.
- [x] Gravitational Push lists no save. Singularity Collapse save type not given. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Graviturge

- [x] Role read as "Main: Striker" only. → *Noted, no action needed.* Matches the class index.
- [x] Localized Collapse is explicitly NOT a Spell (no Spell keyword). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Great Berserker

- [x] Single-Minded Fury: +1d4 / -2d4 accuracy - dice, need rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Rage stance comes from Berserker (required class). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Great Knight

- [x] Intercept range is "Your movement speed". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Bulwark buff (3 less damage) - recorded in summary. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Guardian

- [x] Hold the line lists "Immovable" as a keyword (a condition). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Gun Paladin

- [x] Entry requires the Human race - needs races.js. → **Done:** Race requirements are checked.
- [x] Divine Weapon key: refund possible (also granted by Shield Paladin, Sword Paladin). Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Sanctity Aura says "Holy Weapon" while the key is named "Divine Weapon" - site inconsistency. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Divine Barrage: X allies and the Variable MP cost aren't defined (probably X = Mana spent). → *Noted, no action needed.* X read as Mana spent (Variable MP), same pattern as Glacial Wall/Time Dilation (confirmed X MP on the official site).
- [x] No ability on this page lists keywords except Sanctity Aura (Aura). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Gunfu

- [x] Heart step text reads "Fitness Cunning, Awareness or Presence" (missing comma). Recorded as
      4 options: Fitness, Cunning, Awareness, Presence. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Gunslinger

- [x] Gunslinger's Agility grants +1 Initiative (stored as `grants: { initiative: 1 }`). → **Done:** Added to Initiative.
- [x] Ultimate name "Secret Art: Fan the hammer" (lowercase h) - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Harrier

- [x] Knockback Shot / Pinning Shot range shows "Ranged Weapon Range (Up to 60ft)". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Paragon of Virtue (a paladin ability) mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## High Priest

- [x] Role read as "Main: Healer" only. → *Noted, no action needed.* Matches the class index.
- [x] Walking Church grants a "church" status (DR 1000). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Highlander

- [x] Role read as "Main" + "Striker" - recorded Striker only. → *Noted, no action needed.* Matches the class index.
- [x] Aftershocks mentions "Reaver" abilities - Reaver is a Tier 3 class (requires Highlander mastered). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Hoarfrost

- [x] Role read as "Main" + "Controller" - recorded Controller only. → *Noted, no action needed.* Matches the class index.
- [x] Eternal Mirane Cage: "negative its Max HP + 1" wording - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Whiteout range "2500ft radius on self". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Hussar

- [x] Cavalry Charge cost "Variable AP" (up to 4). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Hydromancer

- [x] Role read as "Main" + "Specialist" - recorded Specialist only. → *Noted, no action needed.* Matches the class index.
- [x] **Level 3 is unusual:** +5 points in "any one Reason, Awareness or Presence category skill"
      (recorded options: "ANY_REASON_AWARENESS_OR_PRESENCE_SKILL"). Needs the skill-to-stat category
      list from the rulebook. Expertise trading not mentioned. → **Done:** Rulebook section 3 lists the stat for each skill; the planner uses it.
- [x] Mage of the Tides key grants Elemental Mastery: Water. → **Done:** Water Mastery tracked.
- [x] **Cost lines show both AP and RP** ("2 AP 1 RP") because you pay with EITHER. Recorded as
      "2 AP or 1 RP" (Aqua Drill), "1 AP or 1 RP" (Crashing Foam Wave), "2 AP or 1 RP, 3 MP" (Cure Water).
      Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Aqua Drill: paying with RP adds +1 Mana (noted as a "refund" by the page read - it's really a cost change). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Domain" keyword - needs rulebook. → **Done:** Keyword(s) Domain defined in data/keywords.js (tap the tag).

## Iai Style

- [x] Role read as "Main: Striker" only. → *Noted, no action needed.* Matches the class index.
- [x] Iai state / Sheathed state rules - recorded in summaries. Killshot mentioned (another ability). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Chiburi Noto range "Self (Weapon)". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Idol

- [x] Roles read as "Main: Support, Secondary: Healer". Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Idol's Journey key grants +5 Art (stored in `grants`), like Acolyte/Cavalier. → **Done:** Its own skill-point pot in the Skills card.
- [x] Song limits (Mashup lets you exceed them) - need rulebook. → **Done:** Keyword(s) Song defined in data/keywords.js (tap the tag).

## Jewel Idol

- [x] Role read as "Main" + "Support" - recorded Support only. → *Noted, no action needed.* Matches the class index.
- [x] Offbeat Recovery: requirement says "basic attack" but the text also covers abilities. "Half
      Rapid" keyword - needs rulebook. → **Done:** Keyword(s) Half Rapid, Rapid defined in data/keywords.js (tap the tag).
- [x] Until My Voice Breaks: no cost, range or keywords on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Jonin

- [x] **Level 4 (Ability 2) is BLANK on the site.** Recorded as MISSING. The page lists "En-dama"
      under Abilities unlocked without a step - stored as kind "unlisted"; probably the Level 4 ability. → **Done:** Filled from the official site 2026-10-24 (En-dama).
- [x] Class overview, lore and tactical guidance are blank ("-") on the site. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Ninja Run, Bunshin clones, Bunshin Tai no Jutsu - come from Ninja (required class). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Knight-Paramount

- [x] Role read as "Main: Defender" only. → *Noted, no action needed.* Matches the class index.
- [x] Unstoppable Onslaught lists "Shaken" as a keyword (a condition). Tactical guidance says it
      costs no mana - consistent with the 2 AP cost. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Line Movement restrictions" - needs rulebook. → **Rulebook:** movement rules are in the rulebook; no planner impact.

## Lancer

- [x] Role read as "Main" only - recorded Striker. → *Noted, no action needed.* Matches the class index.
- [x] Lunge (Level 2) refund possible; also granted by Fencer. Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Piercing Stab range is a long description, not a number. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Brace uses the "Prepare" action - needs rulebook. Beast-type creatures - monsters rules. → **Done:** Keyword(s) Type defined in data/keywords.js (tap the tag).

## Mage

- [x] Mage's Journey grants Arcane Mastery AND +5 Magic (stored in `grants`). → **Done:** Arcane Mastery and the +5 Magic pot are handled.
- [x] Magic Missile: overcharge is mentioned only in the Playing Mage guidance, not the ability. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Hacking" and "Sensory" keywords, Pinpoint - need rulebook. → **Done:** Keyword(s) Pinpoint defined in data/keywords.js (tap the tag).
- [x] The Mage "Helps unlock" list includes Starcaller, Thief, Warding Mage, Phantom Thief, etc.
      (used to build the class list after Oracle). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mage Knight

- [x] Canter comes from Cavalier (required class). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Magitechnician

- [x] URL slug ends with a hyphen ("magitechnician-"); record id has no trailing hyphen. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 3: +5 Artificing only; expertise trading not mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Advanced Artificing key grants +1 Burden that must go to an artifice (stored in `grants`). → **Done:** +1 Burden added with a note that it must go to an artifice.
- [x] Craft Artificer's Glove cost "1 IP" (plus "Other" tag). Recorded "1 IP". → **Done:** Official page 2026-10-24: "Other costs: 1 IP".
- [x] Level 6 Expertise Study (Artificing) grants expertise + a weapon proficiency (stored in `grants`). → **Done:** Weapon proficiency pick handled (rechecked on the official site 2026-10-24); expertise points are the open Bonuses item.

## Maid

- [x] Roles read as "Main: Support, Secondary: Utility". Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Maid Training key grants +5 skill points from the Level 3 list (stored in `grants`). → **Done:** Its own skill-point pot.
- [x] Ability names include "~" characters (site style). Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Please Hold Still~ uses the Illumination keyword - needs rulebook. → **Done:** Keyword(s) Illumination defined in data/keywords.js (tap the tag).

## Manifestor

- [x] Manifestor's Journey key grants +5 skill points from the Level 3 list (stored in `grants`). → **Done:** Its own skill-point pot.
- [x] No "Helps unlock" section on the page at all. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Manifestor" guidance has only an image. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Marksman

- [x] Role read as "Main: Striker" only. → *Noted, no action needed.* Matches the class index.
- [x] Status Assessment II key: refund possible (also granted by Archer). Amount MISSING. → **Rulebook:** an ability you already have is a full EXP refund; the planner refunds exact duplicates automatically.
- [x] Perfect Shot (6 AP, Setup) - "Prone" keyword on ranged attacks - needs rulebook. → **Done:** Keyword(s) Prone, Setup defined in data/keywords.js (tap the tag).

## Martial Artist

- [x] Role read as "Main" + "Striker" - recorded Striker only. → *Noted, no action needed.* Matches the class index.
- [x] Martial Artist's Journey key grants +5 skill points (its list has Expert Knowledge but NOT
      Common Knowledge; Level 3's list has Common Knowledge). Recorded each as shown. → **Done:** Its own skill-point pot with its own list.
- [x] Rushing Knee Drop cost "1 AP" and "1 RP" - text says spend 1 AP OR 1 RP. Recorded "1 AP or 1 RP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Helps unlock lists Monk, Sky Talon Style, Still Stone Style, Wave Palm Style and
      Transcendent Lightning Style (Tier 3). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Master Armorer

- [x] Level 3: +5 Armorsmithing only; expertise trading not mentioned. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Level 6 Expertise Study (Armorsmithing) grants expertise in 2 crafts + Heavy Armor OR
      Greatshields proficiency (stored in `grants`). → **Done:** Proficiency pick handled; expertise points are the open Bonuses item.
- [x] Armorsmithing Expert (granted) header says "No listed cost" but its sub-ability costs X CP.
      Page read said it modifies "a weapon or tool" - probably armor. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Medic

- [x] Role read as "Main: Healer" only. → *Noted, no action needed.* Matches the class index.
- [x] Medic's Journey key grants +5 Medicine (stored in `grants`). → **Done:** Its own skill-point pot.
- [x] First Response: +1d6 healing (+3 with Demonblood Regeneration - a racial trait). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Painkiller Injection: X isn't defined (probably AP spent). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Merchant

- [x] Role read as "Main" + "Utility" - recorded Utility only. → *Noted, no action needed.* Matches the class index.
- [x] Peddler of Wares key grants +5 Riding and +1 combat burden (stored in `grants`). → **Done:** +5 Riding pot and +1 Burden handled.
- [x] Helps unlock: Mogul (requires Merchant mastered). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mime

- [x] Role read as "Main" + "Utility" - recorded Utility only. → *Noted, no action needed.* Matches the class index.
- [x] Mime's Journey key grants +5 Art AND Level 3 grants +5 Art. Recorded both. Confirm they stack. → *Noted, no action needed.* Same pattern as Cultivator, where the official page confirms two separate +5s; recorded both.
- [x] Mime can't speak in encounters (Benefit 3) - a roleplay restriction worth showing in the planner. → *Noted, no action needed.* Shown in the ability text.
- [x] The sitemap lists Miner before Mime; recorded in true alphabetical order (Mime, Miner). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Miner

- [x] Level 7 Soul step ALSO grants the Pickaxe property "Superior Armor Pierce" (stored as `alsoGrants`). → **Done:** alsoGrants is shown on the step.
- [x] Power Rock Strike / Efficient Strike cost "1 Strike Dice" (plus "Other"); requirement text on site
      says "Must in a gathering session" (missing "be"). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mist Veil Elegy

- [x] Entry: Idol or Bard mastered, OR 10 Art (Flute) expertise + any class mastered. → **Done:** Requirement routes are checked.
- [x] Song without Song key grants +1 active song and the language "Music" (stored in `grants`). → **Done:** Shown in the ability text.
- [x] "Playing Mist Veil Elegy" guidance has only an image. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mogul

- [x] Role read as "Main" + "Utility" - recorded Utility only. → *Noted, no action needed.* Matches the class index.
- [x] Lord of Mercenary weekly fees: Archer listed as "250" (no "c"), others with "c". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [ ] Mercenary / Sniper NPC stats are in the Monster guide - not captured. "Expert Summoner" and
      "Instinct" mentioned - need other pages/rulebook. → Monster-page stat blocks still to collect (see Animal Summoner).
- [x] Shot From The Blue costs 500 Clim per use (in its requirement line). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Monk

- [x] Role read as "Main: Striker" only. → *Noted, no action needed.* Matches the class index.
- [x] Helps unlock: Zen Warrior (Tier 3, requires Monk mastered). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mycomancer

- [x] Spore Symbiote key grants Earth Elemental Mastery (stored in `grants`). → **Done:** Earth Mastery tracked.
- [x] Poison Spore cost "2 AP or 1 RP"; range is a long description. Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mystic Eyes of Destruction / Domination / Petrification

- [x] Each can be entered via a race instead of Evil Eye: Oni (Destruction), Demon (Domination),
      Lamiafolk (Petrification) - each plus any tier 2 mastered. Needs races.js. → **Done:** Race routes are checked.
- [x] All three need an open mystic eye slot. Planner should track Mystic Eye slots. → **Done:** Mystic Eye slots are tracked.
- [x] Destruction: Doom's extra Light damage amount isn't specified. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Domination: Forbid lists no save. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Petrification: Calcification stacks and Petrify condition - need rulebook. Partial
      Petrification save type not given. "Playing" guidance has only an image. → **Done:** Keyword(s) Calcification, Petrify, Type defined in data/keywords.js (tap the tag).
- [x] Roles read as "Main" only (Destruction: Striker; Domination: Controller) or "Main" + "Controller"
      (Petrification). Recorded single roles. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Naturalist

- [x] Role read as "Main: Healer" only. → *Noted, no action needed.* Matches the class index.
- [x] Regrowth's heal amount isn't stated on this page (class guidance says it heals on their next turn).
      Full Bloom heals "twice its regular value". Need Regrowth's base heal value. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Healing Seed mentions debuffs with "Persist" - needs rulebook. → **Done:** Keyword(s) Persist defined in data/keywords.js (tap the tag).

## Necromancer

- [x] Speak with dead: range "-" and requirement "Special". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Corpse Explosion: base damage not stated (Light Attack). Range is a description. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Bring out your dead has no Requirements heading. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Corpse Domination" is mentioned in tactical guidance but has no entry. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Necromaster

- [x] Role read as "Main" + "Specialist" - recorded Specialist only. → *Noted, no action needed.* Matches the class index.
- [x] Undead Mastery says "Create Undead" (the ability is named Raise Undead) - site inconsistency. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Undead Mastery uses "spirit core" values - needs rulebook. → **Rulebook:** Spirit Core = total EXP spent (shown in Pools).
- [ ] Skeletal Champion stats are on the Monster page - not captured. → Monster-page stat block still to collect (see Animal Summoner).

## Ninja

- [x] Role read as "Main" only - recorded Striker. → *Noted, no action needed.* Matches the class index.
- [x] **Level 8 Ultimate is BLANK on the site.** Recorded as MISSING. "Kage Shuriken no Jutsu" is
      listed under Abilities unlocked without a step - stored as kind "unlisted"; probably Level 8. → **Done:** Filled from the official site 2026-10-24 (Kage Shuriken no Jutsu).
- [x] Kibaku Fuda Shuriken: Light Fire Damage amount not stated. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Nomad

- [x] Hit & Run range is "Weapon Range". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Onmyoji

- [x] URL slug ends with a hyphen ("onmyoji-"); record id has no trailing hyphen. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Role read as "Main" + "Specialist" - recorded Specialist only. → *Noted, no action needed.* Matches the class index.
- [x] Level 3 list shows "Magic Perception" with no comma again (same as Daionmyoji). Recorded as two skills. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Expert Scribe key gives +5 to the Art: Calligraphy expertise (not doubled) - stored in `grants`. → **Done:** Calligraphy expertise added.
- [x] Secret Talisman: cost, range, keywords and requirements are all "Special". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Calligraphy units, Summon Eidolon spells - need items/other pages. → *Noted, no action needed.* Talisman crafting details; not needed for planning.

## Oracle

- [x] Role read as "Main" + "Support" - recorded Support only. → *Noted, no action needed.* Matches the class index.
- [x] No "Helps unlock" section on the page. "Playing Oracle" guidance is empty. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Peltast

- [x] Role read as "Main" + Striker only - recorded Striker, no secondary. → *Noted, no action needed.* Matches the class index.
- [x] Throwing Rhythm Benefit 1 refers to "as with Nimble" - Nimble rule is in the rulebook/keywords. → **Rulebook:** Nimble is in RULES_REFERENCE.md section 10.
- [x] Stab & Throw range is "Special". Recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Phantom Thief

- [x] Role read as "Main" + Utility only - recorded Utility, no secondary. → *Noted, no action needed.* Matches the class index.
- [x] Requirement wording "Thief mastered and mage mastered." (lowercase "mage") - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Duplicate: RP cost depends on the copied spell's AP (1 RP for 0-2 AP, 2 RP for 3-4 AP); cost line shows "1 RP, 1 MP". Planner should treat RP as variable. → *Noted, no action needed.* Cost shown as the page gives it; the variable RP is in the summary.
- [x] "Bounded fields" tiers (Phantom Thief key) - rulebook needed. → *Noted, no action needed.* Described in the ability text.
- [x] "Playing Phantom Thief" guidance just says "Soon". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Phosphomancer

- [x] Level 3 list read as "Religion, Art Magic, History, ..." - recorded as two skills (Art, Magic). Confirm there's a missing comma. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Illuminating Flash: unclear whether Blinded 5 also requires failing the save. Range shows "60ft." with a trailing period. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Illumination keyword - rulebook needed. → **Done:** Illumination is defined in data/keywords.js.

## Pierrot

- [x] Found via other pages' "Helps unlock" lists (not in the sitemap). Data is complete. → **Done:** Class list confirmed complete against the official site.
- [x] Pie Toss lists 7 keywords including "Downed" - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Priest

- [x] Studied Healer Benefit 2 (+5 Negotiation with followers of your religion) is situational - stored in summary only, not `grants`. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Protector

- [x] No getting past! cost line "0 RP" but the Heavy version costs 1 RP. Planner should treat RP as variable. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Pyromancer

- [x] Controlled Blaze refund amount (also granted by Flame Sentinel) - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Pyromaster

- [x] **Meteor cost conflict:** cost line is 2 AP, 4 MP but the guidance text mentions "4 AP". Recorded the cost line. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Hellfire rules are in the key ability text - may also be a keyword page. Check. → **Done:** Hellfire is defined in data/keywords.js.

## Ranger

- [x] Snap Shot: summary says ranged or thrown weapon; no Requirements line on the page (recorded null). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Ranger's Journey gives a second +5 skill block using the Level 3 list - stored in `grants` with options. → **Done:** Its own skill-point pot.

## Reaver

- [x] "Aftershock" is a Highlander ability - planner needs a cross-class link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Reaver" guidance says "Soon". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Rogue

- [x] Rogue's Journey has a "+10 skill points" Grants line: +5 fixed Roguecraft plus +5 from a list that includes "relevant Expert Knowledge (DM approval)". Stored in `grants` as fixed: 5 + points: 5. → **Done:** Both parts are skill-point pots.
- [x] Sneak Attack: "Trick Attacks cost double RP to react to" comes from guidance, not the rules text. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Saboteur

- [x] **Level 3 is unusual:** "+5 skill in Stealth or Stealth Expertise" with no trade sentence. Recorded expertiseTrade: null. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Scouting Ahead wording ("your roll counts as the party's lowest") is unclear - confirm with screenshot. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Dagger name differs: "Saboteur Thread Dagger" (key) vs "Saboteur Threaded Dagger" (Wire Sweep). Site typo? → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Presence Concealment refund: half EXP, overlaps Adventurer. → **Rulebook:** near-match = half EXP refund (Refunds rule); shown as a note.

## Sage

- [x] Role read as "Main" + Utility only - recorded Utility. → *Noted, no action needed.* Matches the class index.
- [x] Overcharge (Secret Art) name clashes with the "Overcharge" keyword. Planner should keep them separate. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sanctioner

- [x] Sanctify keyword and how stacks work - rulebook needed. → **Done:** Sanctify is defined in data/keywords.js.
- [x] Radiant Verdict applies Sanctify "on hit" (not "on damage") - recorded as read; confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Scout

- [x] Independent Actor Art (Cartography) +5 expertise "not doubled" - stored in `grants`. → **Done:** Added as expertise (not doubled).
- [x] Squadsight range is 300ft - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Searing Lotus Style

- [x] Found by searching the Secret Art/Challenge keyword pages (not in the sitemap or any "Helps unlock" list read so far). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Domain keyword (Molten Domain) - rulebook needed. → **Done:** Domain is defined in data/keywords.js.

## Seven Sorrows Sword Style

- [x] Role read as "Main" + Striker only - recorded Striker. → *Noted, no action needed.* Matches the class index.
- [x] Dark Weapon shows no cost/range/keyword lines (key ability) - normal. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] 3rd Sorrow says "mana cost reduced by 1" while the cost line uses MP - same thing; noted. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Isolated keyword - rulebook needed. → **Done:** Isolated is defined in data/keywords.js.

## Shadow Thief

- [x] Roles listed as Main: Utility, Secondary: Support (one read was unclear, a later read confirmed order). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "At night" cost reductions on every ability - planner may want a day/night toggle. → *Noted, no action needed.* Idea for later: a day/night toggle.

## Shadowbringer

- [x] **Level 2 is BLANK on the site.** Recorded as MISSING. "Hide in Shadows" is listed under abilities without a step - stored as kind "unlisted"; probably Level 2. → **Done:** Filled from the official site 2026-10-24 (Hide in Shadows).
- [x] Class overview and "Playing Shadowbringer" guidance are empty ("-"). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Sable Grace has no Range line. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Shield Paladin

- [x] Requirement starts with "Human" - same racial gate as Sword/Gun Paladin. The Unknown Paladin breakthrough lets non-humans qualify. → **Done:** Race requirement and the Unknown Paladin route are checked.
- [x] Divine Weapon refund amount (also granted by Gun Paladin and Sword Paladin) - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Holy Shield shows a "Grants" line naming a buff "Holy Shield" - stored in summary only. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Shield Saint

- [x] Found via the Secret Art keyword page (Dynamic Duo) - not in the sitemap. → **Done:** Class list confirmed complete against the official site.
- [x] Faithful Shield refers to "Shelter" (a Bodyguard ability) - planner cross-link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Shieldwarden

- [x] Role read as "Main" + Healer only - recorded Healer. → *Noted, no action needed.* Matches the class index.
- [x] Power Word: Barrier cost "2 AP, 1 RP, 4 MP" - pay AP or RP, not both. Stored with a note. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Power Word: Reinforce: "gains temp HP equal to 2x current" (so 3x total) - confirm wording. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Shinigami Eyes

- [x] Found via the abilities index (not in the sitemap). Requires the Touched by Death breakthrough and an open mystic eye slot. → **Done:** Class list confirmed complete.
- [x] Mystic eye slots - rulebook/breakthrough rules needed. → **Done:** Mystic Eye slots are tracked.

## Sky Knight

- [x] Found via the abilities index (not in the sitemap). → **Done:** Class list confirmed complete against the official site.
- [x] Mythical Awakening has 3 mount-specific versions with their own costs - stored as subAbilities. Mount names (Pegasus, Wyvern, Dragonfly) come from item/mount pages. → *Noted, no action needed.* Mounts are in items.js.

## Sky Talon Style

- [x] Master of the Empty Sky is a passive at Level 2 with no cost/range lines. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Cloud Piercing Claw "mana cost reduced by 1" - noted. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Sky Talon Style" guidance says "Soon". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sniper

- [x] Aimed Shot refund amount (also granted by Deadeye) - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Snipe +1d4 accuracy bonus - dice; rulebook needed for planner math. → *Noted, no action needed.* Shown in the ability text; dice aren't added to the planner's flat numbers.

## Sorcerer

- [x] Sorcerer's Journey: "upon mastering this class, you may master one additional element of your choice" - planner needs an element dropdown at mastery. → **Done:** The planner shows an element pick when the class is mastered.

## Spearmaster

- [x] Draw-In Combo references "Lunge" (a Lancer ability) - cross-link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Spell Blademaster

- [x] Elemental Sweep effects differ from Spellblade's Elemental Strike (Earth/Frost both Slow here; Holy temp HP is Power + 5 vs + 3). Recorded each as read - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Double Elements references Elemental Strike (Spellblade ability) - cross-link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Draw Elements II key shows Range "Self" - recorded. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Spellblade

- [x] Spellstrike has many edge-case rules - summary is long; check against a screenshot. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Starcaller

- [x] Cost lines render without spaces on the page ("2 AP1 MP") - read as 2 AP, 1 MP. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Stardust Reverie upkeep: 1 mana - stored in `usage`. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Still Stone Style

- [x] Shielding Fist +4 Shield bonus to Block - "Shield bonus" stacking rules need the rulebook. → **Done:** Keyword(s) Stacking defined in data/keywords.js (tap the tag).

## Still Stone Testament

- [x] Role read as "Main" + Defender only - recorded Defender. → *Noted, no action needed.* Matches the class index.
- [x] Mandate, Lockstep and Unbalanced keywords - rulebook needed. → **Done:** Defined in data/keywords.js.
- [x] Unmoving Mountain has no trigger line on the page (only "must be in Earth Stance") even though it reacts to an attack. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Strategist

- [x] Role read as "Main" + Support only - recorded Support. → *Noted, no action needed.* Matches the class index.
- [x] Requirement shows "Tactician mastered" with no period - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Summoner

- [x] Found via the abilities index (not in the sitemap). → **Done:** Class list confirmed complete against the official site.
- [x] Role read as "Main" + Specialist only - recorded Specialist. → *Noted, no action needed.* Matches the class index.
- [ ] Eidolon-specific costs, upkeep and abilities live on Eidolon pages (not collected). Needed for the planner. → Still to collect (see Breakthroughs: Eidolon contracts).
- [x] "Playing Summoner" guidance says "Soon". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Swashbuckler

- [x] Role read as "Main" + Controller only - recorded Controller. → *Noted, no action needed.* Matches the class index.
- [x] Exposing Edge's own text is short ("sharpens your blades to enhance debuffs"); the real effects are inside the other abilities. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sword Paladin

- [x] Requirement is just "Human." (The Unknown Paladin breakthrough lets non-humans qualify.) → **Done:** Race requirement and the Unknown Paladin route are checked.
- [x] Divine Weapon refund amount - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sword Saint

- [x] **Requirement says "Iaido style mastered" but the class is named "Iai Style" (slug iai-style).** Site typo? Planner should link to Iai Style. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Iai state / Iaijutsu keyword - rulebook needed. → *Noted, no action needed.* Iai Style rules are in its ability text.

## Tactician

- [x] Role read as "Main" + Support only - recorded Support. → *Noted, no action needed.* Matches the class index.
- [x] Level 3 is History only (with trade). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Tag Rotation cost "1 AP and 1 RP (either may be used)" - stored as "1 AP or 1 RP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Tavern Brawler

- [x] Found via the abilities index (not in the sitemap). → **Done:** Class list confirmed complete against the official site.
- [x] Improvised Weaponry Benefit 3 applies only "upon mastering this class". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Bottle Smash lists Prone as a keyword but its text doesn't mention Prone. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Temporal Trickster

- [x] Delay Time wording seems to contradict itself (delayed effects vs "start-of-turn effects still trigger at the start"). Confirm with a screenshot. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Class overview and guidance are empty ("-"). No "Helps unlock" entries. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Thief

- [x] Role read as "Main" + Utility only - recorded Utility. → *Noted, no action needed.* Matches the class index.
- [x] Requirement includes a race route: "Be a rabbitfolk or ...". → **Done:** Race routes are checked.

## Time Thief

- [x] Role read as "Main" + Utility only - recorded Utility. → *Noted, no action needed.* Matches the class index.
- [x] Start Dash: "provokes attacks of opportunity; can't follow Disengage/Feint" is from guidance text. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Timberwright

- [x] Found via the abilities index (not in the sitemap). → **Done:** Class list confirmed complete against the official site.
- [x] Level 3 is "+5 skill points in Carpentry" with NO expertise trade sentence - recorded expertiseTrade: null. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Core Crafting header says "No listed cost" but the body says "Cost: X Crafting Points" (X undefined). Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Its "Helps unlock" lists Shield Paladin (via armor/shield proficiency at level 6?) - odd; check. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] "Playing Timberwright" guidance is empty. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Transcendent Lightning Style

- [x] Living Lightning gives no damage number beyond "Light Lightning damage". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Lightning Lariat Overcharge "move an extra 2 x X times your speed" - wording odd; confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Transmuter

- [x] Level 3 is Transmuter points (5) tied to a crafting discipline - type "special", like Alkahest. → **Done:** Discipline pick handled.
- [x] Level 7 Soul also grants the Co-Craft errand - stored in `alsoGrants`. → **Done:** alsoGrants is shown on the step.
- [x] Core crafting abilities (11) stored as subAbilities of "Transmutation Basics". Several reference material item pages not collected. → **Done:** Sub-abilities are listed on screen and on the printed sheet.
- [x] Deconstruction says "clim value" - site typo (probably "claim value")? → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Only Transmute Weapon, Wall and Terrain show Range lines. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Trapper

- [x] Level 7 Soul also raises camp food to 1d10 x 10 - stored in `alsoGrants`. → **Done:** alsoGrants is shown on the step.
- [x] Place Trap range label shows "Other". Recorded "Other". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Trickster

- [x] Found via the abilities index (not in the sitemap). Requirement: two classes mastered, one of them tier 2. → **Done:** Class list confirmed complete against the official site.
- [x] Swap: pay AP or RP, not both - stored with a note. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## True Shinigami Eyes

- [x] Improved Death Perception mentions "Lines of Death" (the ability is "Line of Death") - site typo? → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Point of Death II refund on killing blow - stored in `refund`. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Vampire

- [x] Found via the abilities index. Requires the Curse of Vampirism breakthrough. Tier 1. → **Done:** Class list confirmed complete against the official site.
- [x] Role read as "Main" + Specialist only - recorded Specialist. → *Noted, no action needed.* Matches the class index.

## Vampire Lord

- [x] Lord's Dominion +1 Presence - stored in `grants`. → **Done:** Added to stats.
- [x] No "Helps unlock" entries. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Veilguard

- [x] Role read as "Main" + Healer only - recorded Healer. → *Noted, no action needed.* Matches the class index.
- [x] Shield Burst cost "1 RP (or 1 AP instead)". Stored as "1 RP or 1 AP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Class overview and guidance are empty ("-"). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Venomancer

- [x] Role read as "Main" + Controller only - recorded Controller. → *Noted, no action needed.* Matches the class index.
- [x] Catalyze "Stagger II or Sunder II" - who picks? Not stated. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Crippling Poison has Overcharge text but no Overcharge keyword. Confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Toxic: 1d6 full pierce Poison per turn - dice; rulebook. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Venomblade

- [x] Outbreak numbers (3d6 vs max stacks, 18 with Maximum Dose) come from guidance, not rules text. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Maximum Dose's exact effect isn't defined beyond "maximize". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Warding Mage

- [x] **Level 4 is BLANK on the site.** Recorded as MISSING. "Hidden Wards" is listed under abilities without a step - stored as kind "unlisted"; probably Level 4. → **Done:** Filled from the official site 2026-10-24 (Hidden Wards).
- [x] Role read as "Main" + Utility only - recorded Utility. → *Noted, no action needed.* Matches the class index.
- [x] Level 3 list reads "Stealth, Magic, Perception or Insight, or Common Knowledge" - recorded as 5 skills. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Wave Palm Style

- [x] Wave Palm I/II/III stack counts aren't given on the page. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Guidance says "Mystic Eyes of Light Perception" vs ability name "Life Perception" - site typo. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Wildheart

- [x] Found via the Secret Art keyword page (Bestial Wrath) - not in the sitemap. → **Done:** Class list confirmed complete against the official site.
- [x] Role read as "Main" + Specialist only - recorded Specialist. → *Noted, no action needed.* Matches the class index.
- [x] Requirement "Animal summoner mastered." (lowercase s) - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [ ] Cheetah and Landshark stat blocks not on the page. X-Attack has no duration. → Monster-page stat blocks still to collect (see Animal Summoner).

## Windbringer

- [x] Role read as "Main" + Support only - recorded Support. → *Noted, no action needed.* Matches the class index.
- [x] Wind Master refund amount (also granted by Aeromancer and Zephyr Warder) - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Headwind wording about multi-AP moves is unclear. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Zen Warrior

- [x] Ki Burst's X isn't defined on the page (probably mana spent). → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Serene Water stance and Strike of Still Water belong to Monk - cross-link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Zephyr Warder

- [x] Role read as "Main" + Support only - recorded Support. → *Noted, no action needed.* Matches the class index.
- [x] Wind Master refund amount (also granted by Aeromancer and Windbringer) - recorded as MISSING. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Wind Infusion "Type: Wind II" rules - rulebook needed. → **Done:** Type is defined in data/keywords.js.

---

# RACES (data/races.js)

## Races - General

- [x] **Race list: 5 main races + 44 sub-races = 49 records, matching the site's counts** (44 sub-races on the race index). Nekomata, Nio, Gnome and Willo Wisp were cut off the index page but found via the sitemap and hybrid page. → **Done:** Counts match the site.
- [ ] **GM question.** **Skill pick is unclear on every race:** "+5 skill points in either A, B, C..." - all 5 into one skill, or split? Stored as `pick: "UNCLEAR"`. Check the rulebook / ask the GM. → The rulebook only says races grant skills. The planner lets you split the 5 points among the listed skills.
- [x] **Sub-race pages repeat the parent's creation benefits** (stats, skills, languages). Every sub-race matched its parent exactly, so sub-race records only store `usesParentCreation: true` plus size and their own abilities. → *Noted, no action needed.* Data note.
- [x] **Chimera sub-race dialect names are never given** ("the special dialect of your sub-race"). Planner can show "<Sub-race> dialect". → *Noted, no action needed.* Data note.
- [x] **Size and Speed** aren't on main race pages. Base speed seems to be 20ft (Fast Runner says "25ft instead of 20ft"). Sizes come from sub-race pages. Human, Demon (no sub-races) have no size listed. → *Noted, no action needed.* Rulebook: base speed 20ft. Sizes from sub-race pages.
- [x] **Race abilities that unlock classes:** Gnome -> Miner, Pigfolk -> Merchant, Raijin -> Flash Star Blade Style, Selkie -> Hydromancer (at level 2), Sheepfolk -> Aetherie (skip requirements, -100 EXP), Demon clans Wi -> Saboteur, Un -> Maid, Vi -> Medic. Rabbitfolk is a Thief entry route. Stored in `grants`/`options`. → **Done:** Race class unlocks are used by the requirement checks.
- [x] **Elemental masteries from races:** Phoenix (Fire), Raijin (Lightning), Sylph (Wind), Unseelie (Dark), Suryan (Holy), Yuki-Onna (Frost), Ryujin (choice). These count for class requirements like "Fire mastery". → **Done:** Race masteries count for requirements.
- [x] Hybrid races (Faerie-Chimera, Human-Chimera) are 200 EXP creation-only breakthroughs, stored in `LC.raceHybrids`. → **Done:** Hybrid breakthroughs work in the planner.

## Human

- [x] Stat bonus is "+1 to a main stat of choice, +1 to a substat of choice". ANSWERED by rulebook: main = Power/Focus/Agility/Toughness, sub = Fitness/Cunning/Reason/Awareness/Presence.
- [x] Skills: "+5 in any non-crafting or gathering skill" - stored as ANY_NON_CRAFTING_NON_GATHERING. → **Done:** Handled by the skill list.
- [x] "Lineage features" section is empty. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Chimera

- [x] Kanolith/zoalith are lore categories, not choices - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Page doesn't link its sub-races; list built from the hybrid page and sub-race pages. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Demon

- [ ] **GM question.** Proficiency choice: one common weapon OR +5 skill points "in a skill tied to your demon clan" - which skill belongs to each clan isn't stated. → Demon: which skill belongs to each clan for the "+5 in a skill tied to your clan" option?
- [x] Mana Burst: "you may use AP for this attack instead" - unclear which cost is replaced. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Mixed House breakthrough (100 EXP) gives a second clan. → **Done:** Mixed House works in the planner.
- [x] No size listed; no sub-races. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Fae

- [x] Faerie Flash has the Rage keyword but its text doesn't mention Rage. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Speed for Faerie Flash ("twice your Speed") isn't on the page. → **Rulebook:** base Speed is 20ft, so Faerie Flash = up to 40ft.

## Youkai

- [x] Spiritual Sync "8X" - X assumed to be mana paid. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Ancient Marionette
- [x] "Adaptive Defense (Type)" - the Type keyword needs the rulebook. → **Done:** The keyword(s) are defined in data/keywords.js (tap the tag for the rule).

## Anubis
- [x] Speak with Dead requirement is just "Special". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Bearfolk
- [x] Hibernate's extra night-rest HP "Toughness HP" amount isn't clear. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Bullfolk
- [x] Restriction: "Male only." Goring Charge: X and the AP cost aren't defined. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cait Sith
- [x] Soul Strike "once on that target" usage - confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Catfolk
- [x] Fast Runner sets base speed 25ft (stored in `grants`). → **Done:** 25ft base speed applied.

## Centaur
- [x] Charge cost line "2 AP" but text allows 2 or 4 AP. Same mechanic as Spearmaster's Spear Charge. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cowfolk
- [x] Restriction: "Female only." Provide Milk cost line says no cost but text says 1 EP. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Cu Sith
- [x] Haunting Bark: Light Lightning damage on 3rd use has no number. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Dogfolk
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Dryad
- [x] Nature's Grasp: "costs 0 Mana vs Grunts" though the cost line already shows 1 MP - fine, but confirm. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Dullahan
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Gnome
- [x] Gnome Claws "+10/+20 dodge bonus" - which applies when? Unclear. → *Noted, no action needed.* Recorded as the page shows; no planner impact.
- [x] Not on the race index page text I could read; found through the sitemap/hybrid page. → **Done:** Race list confirmed complete.

## Harpy
- [x] Downburst range 720ft - recorded as shown. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## High Fae
- [ ] **GM question.** Open question (2026-10-24): does Faerie Flash II replace the Fae race's basic Faerie Flash, or does she have both? The planner lists both for now (user: "leave both in; worst case use the higher of the two"). The Faerie-Chimera hybrid text ("High Fae gives Fae Flash instead of Fae Flash II") hints at replacing. → Does Faerie Flash II replace Faerie Flash?
- [x] Faerie Flash II replaces Faerie Flash? Page lists both (inherited + unique). Hybrid page says High Fae normally gets Faerie Flash II. → *Noted, no action needed.* Duplicate of the open question above.

## Horse-Folk
- [x] **Size not listed** - recorded MISSING. Lore overview marked "(Placeholder)". Horse Step Acceleration "+30" has no unit. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Jiangshi
- [x] Consume Enemy's Requirements line is blank. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Kitsune
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Lamiafolk
- [x] Size Large. "Just a hug" escape: 8 escape power, adding Power per attempt. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Lizardfolk
- [x] Regrowing Limbs: cost line says no cost, requirements say "Costs 1 Interlude Point". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Mothfolk
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Nekomata
- [x] Not on the race index page text; found via the sitemap. → **Done:** Race list confirmed complete.
- [x] Corpse Puppetry range 60ft but text says corpse "within 30ft". Feign Death references "Play Dead" (not defined on the page). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Nio
- [x] Not on the race index page text; found via the sitemap. → **Done:** Race list confirmed complete.

## Oni
- [x] Tipsy effect isn't defined on the page. Drink to Battle cost "2 AP or Encounter Start action". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Phoenix
- [x] Phoenix Tears heals "Power" - presumably your Power stat. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Pigfolk
- [x] Break Piggy Bank costs 500 Clim (listed as a requirement). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Pixie
- [x] Tiny Pixie: Toughness -2, Agility +2, walking speed 5ft - stored in `grants`. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Rabbitfolk
- [x] Escape Artist cost "1 AP and 1 RP (either)" - stored as "1 AP or 1 RP". → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Raijin
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Ratfolk
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Red Pandafolk
- [x] Panda Stance cost "1 AP and 1 RP (either)". Panda Roll mentions Sidestep but has no keywords. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Ryujin
- [x] Ryujin's Mastery lists "Ice" while the game elsewhere uses "Frost" - same thing? Dragon's Breath keyword list may be a display artifact. → *Noted, no action needed.* Read as Frost.

## Salamander
- [x] Fireball is the same as Pyromancer's Fireball. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Selkie
- [x] Aquatic Fae references "Aqua Drill" (Hydromancer ability?) - cross-link. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sheepfolk
- [x] Mind Connection mentions "Conduit" (not defined on the page). → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Slimefolk
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Spiderfolk
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Suryan
- [x] Solar Radiance has no range field; values come from the text. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Sylph
- [x] Fly is the same as Windbringer's Fly. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Tengu
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Unseelie
- [x] Nothing extra. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Willo Wisp
- [x] Not on the race index page text; found via the hybrid page. Lore says "Faerie Light Eyes" but the ability is "Faerie Eyes: Calling". → **Done:** Race list confirmed complete.

## Wolf-folk
- [x] Hunting Wolf "X AP" - variable. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

## Yuki-Onna
- [x] Lore says female only, but no rule restriction is stated - recorded as a note only. → *Noted, no action needed.* Recorded as the page shows; no planner impact.

---

# BREAKTHROUGHS (data/breakthroughs.js)

## Breakthroughs - General

- [x] **89 records = all 89 on the site's breakthrough list** (list page was complete, not cut off). Every record was checked against its own page. → **Done:** Count matches the site.
- [x] **Repeat costs:** only Primary Stat Training states that the cost rises (400 -> 500 -> 600 -> 700 cap). Secondary Stat Training (200), Skill Training (25), Universal Training (700), Weapon/Speciality Weapon Training, Language Training, Elemental Affinity, Blend In II and Wide Circuits IV are repeatable but don't say whether repeats cost more. Recorded as flat - confirm. → *Noted, no action needed.* Only Primary Stat Training's cost rises; the others repeat at the same cost.
- [ ] **GM question.** **Stat caps:** no page says whether stat-training breakthroughs have a maximum (stats beyond the creation arrays). Rulebook doesn't say either. → The rulebook doesn't give a stat maximum.
- [x] **"Must be a Fae / Youkai / Chimera / Demon"** is stored as the main-race id, meaning any sub-race qualifies. "Lamia" (Drag along) = Lamiafolk; "Red Panda" = Red Pandafolk; "Willowisp" = Willo Wisp; "Raijin Youkai"/"Sylph Fae" = those sub-races. → *Noted, no action needed.* Data note.
- [x] **"Speciality weapon" groups** aren't listed on the breakthrough pages. I used the rulebook's "Specialized Weapons" (Pistol, Shotgun, Sniper Rifle, Saboteur Thread Daggers, Lance, Whip, Gauntlets, plus channeling and artisan weapons). Confirm they're the same thing. → **Rulebook:** the Specialized Weapons section calls them "Specialty weapons" too (Pistol, Shotgun, Sniper Rifle, Saboteur Thread Daggers, Lance, Whip, Gauntlets, channeling and gatherer/crafter weapons) - same thing.
- [ ] **Eidolon contracts** (Fortuna, Ixilune, Pipoltr): eidolon stats and the Channel Eidolon abilities (Draw Luck, Distracting Swarm, Vine Wall Cover) live on Monster/Ability pages - not collected yet. Needed for Summoner. → Still to collect: eidolon stats and Channel Eidolon abilities (Monster/Ability pages) for Summoner.
- [x] Divine list (9 divines with damage types) stored as `LC.divines`. → *Noted, no action needed.* Data note.

## Breakthroughs - specific items

- [x] **Angelblooded (Human) (Restricted):** 0 EXP, GM approval. Unlocks the Angelblooded class. → *Noted, no action needed.* Data note. Blocked in Mirane (2026-10-24).
- [x] **Arachne (Spiderfolk):** creation only, 0 EXP, makes you Large and removes Extra Arms. Several class/race notes refer to "Arachne/Centaur" (the class refund example for Living Lightning). → *Noted, no action needed.* Data note.
- [ ] **GM question.** **Become Lightning (Raijin):** mentions a "Power bonus" from Consume Lightning not stacking - Consume Lightning's race page describes a damage bonus (Lightning Boost), not Power. Check wording. → Become Lightning mentions a Power bonus; Consume Lightning gives a damage bonus.
- [x] **Become Ice/Lightning/Wind:** "reset back to 0 when it becomes your turn" - read as "the free use comes back each turn". Confirm. → *Noted, no action needed.* Read as: the free use comes back at the start of each of your turns.
- [ ] **GM question.** **Curse of Vampirism:** "Wounds only from fire, holy or true damage" - the rulebook uses "Injuries"; probably the same thing. → "Wounds only from fire, holy or true damage" - Injuries, or mortal wounds?
- [x] **Elixir Addict** is a 0 EXP drawback you gain by using 3+ elixirs in one encounter; removed for 1 IP. → *Noted, no action needed.* Data note.
- [x] **Expert Summoner** needs 3000+ Spirit Core and a maxed summoner-type class (Summoner, Mogul, Animal Summoner, Necromancer). → *Noted, no action needed.* Data note.
- [x] **Fae Flash Acrobat** says "Fae Flash" / "Fae Step"; the race ability is "Faerie Flash". Same thing? → *Noted, no action needed.* Treated as the same ability (Faerie Flash).
- [x] **Fast Movement (Centaur)** also allows "Arachne Spiderfolk" (needs the Arachne breakthrough). → *Noted, no action needed.* Data note.
- [x] **Mark of Conflict** needs "an Unknown Paladin that follows Eisen" + Mark of Justice (Sword Paladin). → *Noted, no action needed.* Data note.
- [x] **Slow Starter:** -200 starting EXP, then doubled EXP until 500 received. Planner needs to handle this in the EXP budget. → **Done:** Slow Starter is handled in the EXP budget.
- [x] **Tengu Defensive Aura:** Astra corruption rules aren't in the rulebook copy I read. → *Noted, no action needed.* Astra levels and poisoning are campaign rules (Mirane guide: astra resistance = Spirit Core / 500); corruption effects are GM-side.
- [ ] **GM question.** **Third Eye / 8 Eyes:** "regular 2" Mystic Eyes - mystic eye slot rules aren't in the rulebook copy (Wave Palm Style and Shinigami Eyes need an open slot). → Which abilities use up a Mystic Eye slot isn't written anywhere (the planner counts the eye classes).
- [x] **Touched by Death:** also gives a 1 AP "see HP% and weak spots for 1 turn" effect (separate from the Shinigami Eyes class). → *Noted, no action needed.* Data note.

---

# CLASS REQUIREMENTS & UNLOCK ROUTES (data/requirements.js)

## Requirements - General

- [x] Built from the 185 page-checked "Requirements" lines in classes.js (text copied exactly into each record, so a site change shows up as a mismatch). Not re-fetched from the site. → *Noted, no action needed.* Data note.
- [x] **Generic routes** (any class mastered, element masteries, "have a spell", weapon proficiency, skill points) are checked live by the planner, not listed in the reverse index. The site's "Helps unlock" lists include those (e.g. Sorcerer lists 26 classes; 9 name Sorcerer directly, the rest come through Arcane/element mastery, spells, etc.). That matches. → *Noted, no action needed.* Data note.
- [x] **Proficiency categories** used: "ANY_MELEE", "ANY_TWO_HANDED_MELEE", "ANY_WEAPON", and group names (Light Swords, Longsword, Katana, Dueling Weapons, Polearms, Lance, Scythe, Heavy Blades, Small Weapons, Thrown, Shields, Medium/Heavy Armor). Needs a weapon-group list (items data) for the planner to check "ANY_MELEE". → **Done:** Weapon groups are in proficiencies.js and items.js.
- [ ] **GM question.** **Mystic eye slots** ("at least 1 open"): base 2 slots (Third Eye -> 3, 8 Eyes -> 8). What uses up a slot (Evil Eye, Wave Palm's Life Perception Eye, Shinigami Eye, Faerie Light Eyes...) isn't spelled out anywhere I read. → Same as the Mystic Eye slot question above.
- [ ] **GM question.** **"Any class mastered"** - does a Tier 1 count? Assumed yes (any class). "Any tier 2 class mastered" assumed to also accept tier 3 - confirm. → "Any tier 2 class mastered" - does a tier 3 mastery count? (The planner counts it.)

## Requirements - ambiguous lines

- [x] **Dragoon:** "Lancer mastered. 10 points in Athletics (Jumping) expertise, OR be a Jiangshi." Read as Lancer AND (expertise OR Jiangshi). → *Noted, no action needed.* Reading kept: Lancer AND (expertise OR Jiangshi).
- [x] **Thief:** "Be a rabbitfolk or have Rogue mastered and possess the Decipher Magic ability." Read as Rabbitfolk OR (Rogue AND Decipher Magic). Decipher Magic comes from Mage. → *Noted, no action needed.* Reading kept: Rabbitfolk OR (Rogue mastered AND Decipher Magic).
- [ ] **GM question.** **Executor:** "Any mastered class + any points in Acolyte." Read as: 1 mastered class AND Acolyte unlocked. Could the mastered class be Acolyte itself? → Executor: can the mastered class be Acolyte itself?
- [x] **Mist Veil Elegy:** "Idol or Bard mastered, OR 10 points in Art (Flute) expertise and any class mastered." → *Noted, no action needed.* Reading kept as written.
- [x] **Bard:** "an Art expertise for an instrument" - stored as "Art (any instrument)". → *Noted, no action needed.* Data note.
- [x] **Abjurer:** needs Arcane Barrier (a Mage ability) AND a damaging spell. → *Noted, no action needed.* Data note.
- [x] **Sword Saint:** "Iaido style" = Iai Style (site typo). → *Noted, no action needed.* Treated as Iai Style.

---

# ITEMS (data/items.js)

## Items - General
- [x] All 206 items are now in items.js (2026-10-22). The 51 that the static copy couldn't list were read from the OFFICIAL site (rpg.angelssword.com, v0.13.2) through the browser; their records link to the official pages.
- [x] Found the Greatshield ("Shield (Great)"), Shepherd's Sling, Thrown (One/Two-Handed), Wand (Two-Handed), Pickaxe and Smith's Hammer (Two-Handed). Greatshield now works in the planner (+1 Guard, +8 Block while blocking, -1 Initiative, -2 Evasion/Dodge).
- [x] The four "Universal ... Mods" pages are mod lists, not items: shown for reference in the item list (no Buy button), with A/B/C/Frame/Alloy/Flamellon mods in the details.
- [x] Relics (Polaris Pair, Timeworn Katana) have no price; the planner counts them as 0 Clim instead of warning.
- [x] The official site is v0.13.2, the same version as the static copy, so the older 155 records still match it. Its homepage says "181 classes" but its class list shows 185 - the same 185 the planner has. → **Done:** Confirmed.
- [x] Item mods (2026-10-22): each inventory item has a Mods button. Numbers from mods are in data/mods.js; everything else shows as a note. Weapons now have a "wield" tick so their mods (e.g. Winged Lugs) count.
- [x] Mods I read as rules: Melding needs another artifice with the same mod (counted across your inventory); one Frame per armor (Agile Weave also uses the Frame slot); Photon Shield works as a shield when equipped (= active); its Photon Greatshield mod applies the Greatshield numbers (+1 Guard, Block 8, -1 Init, -2 Evasion/Dodge, +1 Burden). Universal crafting mods go on tools (items tagged Tool or Artisan Weapon) - confirmed by the user. → *Noted, no action needed.* Rule readings used by the planner.
- [x] Shell Converter is tagged "Basic" on the site but says it "counts as a kit for Burden"; the planner tags it Kit so Kit Expert can use it. → *Noted, no action needed.* Kept as Kit.
- [x] Shepherd's Sling: A mods say "Soon" (none yet). Timeworn Katana: page doesn't say one- or two-handed (treated as one-handed). → *Noted, no action needed.* Page gaps on the site; nothing to add until the site fills them.
- [x] The rulebook calls the staff a "Magic Staff"; the site's item pages are "Staff (One-Handed)" and "Staff (Two-Handed)". → *Noted, no action needed.* Same item.

## Items - specific
- [x] Alchemist's Alembic and Carpenter's Chisel list Blacksmithing as their crafting discipline (could be correct, flagging in case). → *Noted, no action needed.* Recorded as the page shows.
- [x] Aetherie Sensory Station: crafting points read "lol" on the page. → *Noted, no action needed.* Page placeholder on the site; recorded as shown.
- [x] Long Distance Communications Array: crafting points read "No". → *Noted, no action needed.* Page placeholder on the site; recorded as shown.
- [x] Obsidian Steel and Ebony Wood Block have no crafting points listed. → *Noted, no action needed.* Not listed on the site.
- [x] Displacement Potion: the d8 direction list is incomplete on the page. → *Noted, no action needed.* Incomplete on the site.
- [x] Elemental Grease / Mixture Flask / Resistance / Immunity: herb is "matching element", with substitutes only given for Holy/Dark (Arcane), Lightning (Wind), Frost (Water). → *Noted, no action needed.* Recorded as the page shows.
- [x] Food Bag and Mining Bag: page says +2000 units per material, then says hide versions give +1000/3000/6000/10000. Both recorded; which is the base? → *Noted, no action needed.* Both recorded; doesn't affect the planner's numbers.
- [x] Isona Poison: activation shows just "1" (no AP/unit). → *Noted, no action needed.* Recorded as the page shows.
- [x] Military Ration: burden not listed; "food effects for 2 mana" wording unclear. → *Noted, no action needed.* Recorded as the page shows.
- [x] Growth Potion and Mana Vision Goggles: activation not listed. → *Noted, no action needed.* Not listed on the site.
- [x] Gourmet Cooking Stock: no tag shown. → *Noted, no action needed.* Not listed on the site.
- [x] Smith's Hammer: no weapon effect on the page (rulebook says it counts as bludgeoning). → *Noted, no action needed.* Rulebook: Smith's Hammer counts as bludgeoning.
- [x] Giant Dragonfly: no line-movement note (it flies; other fliers have straight-line flight). → *Noted, no action needed.* Not listed on the site.
- [x] Greater Speed Potion and Speed Potion: page metadata says "Materials: 1"/"Materials: 2", which disagrees with the body text. Body text used. → *Noted, no action needed.* Body text used.
- [x] Facilities: effects added from the rulebook (workshops +2/+4/+6, uses per level, etc.). Greenhouse effect still MISSING.
- [x] Rest and food rules: read in full from the official rulebook (2026-10-22) and added to RULES_REFERENCE.md section 8b. The Combat panel now shows HP regained per rest (1x/2x/3x Toughness).

---

# PLANNER (planner.html)

## Mirane campaign - "Mirane Expedition" option (gathered 2026-10-24)
Done 2026-10-24 from the official Mirane Expedition guide (Google Doc, user-supplied PDF export): the Identity checkbox is now **Mirane Expedition** (B.canon) - +1,000 Clim; free Adventurer's Kit (its 100 Clim refunded); Angelblooded / Curse of Vampirism / Touched by Death (Shinigami Eyes) blocked with "not allowed in Mirane" + warning if already taken; Rest heals shows Mirane numbers (no kit 0, camping kit 1x Toughness, better 2x; rations/basic culinary 1 Mana); Astra resistance (Spirit Core / 500) in Pools; Items card note with the starting-material limits, party kits, food and fuel advice.
New **GM allows restricted** checkbox (B.gmRestricted) for other games - the old "canon allows restricted" behaviour was wrong for Mirane.
New items: Food Units and Magical Fuel Units (0.5 Clim per unit, from the rulebook's Material section: 2 units per Clim; 1,000-unit carry limit per exact material; burden not listed), bought and edited in units.
- [ ] Not built: death/retirement carry-over (half EXP, or SC-1000 above 3,000 SC; 20% item value; modded gear limits), alts, favors, casual mode (half EXP/loot), Human Divine Providence and Oracle changes in Mirane, necromancer corpse storage, Merchant's Procurement 500/week. Weekly EXP/IP estimator still an idea.
- [x] Starting materials limit (none worth 1,000+, 2,500 total) is only a note: the planner's material records have no per-unit prices to check against. → *Noted, no action needed.* Shown as a note in the Items card.
Source: Lyrian Chronicles TTRPG Discord, #mirane-info pinned "Players Guide" (WIP Google Doc), #how-to-play, #play-by-post, #downtime-activities. Re-check before building - the guide is a work in progress.
- [x] Character creation: standard rules-as-written start (no extra EXP; earlier note of +1,000 EXP was wrong), plus an extra 1,000 Clim. New characters only; 1 character per player (more with higher Patreon tiers). Restricted classes (Shinigami Eyes, Vampire, Angelblooded, other GM-only) not allowed at creation. Approval by a lead GM in #ooc-char-approval.
- [x] Crafting materials at creation: none worth 1,000+ base value; total ingots + raw materials capped at 2.5k; unused materials are lost after creation. → **Done:** Shown in the Items card note when Mirane is ticked.
- [x] IP: 1 IP at each Wednesday reset if in Mirane (not on expedition). Unspent IP is lost at the weekly reset or when leaving on expedition. New characters get that week's IP plus an Arrival IP. → *Noted, no action needed.* Campaign rule (reference).
- [x] EXP: expeditions 75 EXP per week out (casual mode = half EXP and loot); journal up to 25 EXP per week; crafting an item 20 EXP; using natural IP on Appraise, Heal Injury, Open Shop, Repair, Mentor Class or special crafting actions gives 20 EXP once per interlude phase; using IP on an EP action also gives 20 EXP. → *Noted, no action needed.* Campaign rule (reference).
- [x] Town economy (differs from the rulebook): Job 150 Clim, +50 with a mastered Artisan class (rulebook: 300, +300). Gather 300 units, +300 with the related T1 gathering class mastered (rulebook: 600, x2). Merchant's Procurement 500 points each week. Hunting: 30 + Survival roll food units per player per day. → *Noted, no action needed.* Campaign rule (reference).
- [x] Favors: class training (1 favor for T1/T2, 2 for T3), land (500 Clim per favor), Secret Shop access, co-crafting, Intense Training; Aniela's Special Drink turns 5 favors + 1 EP into 1 IP. → *Noted, no action needed.* Campaign rule (reference).
- [x] Land: tiny plot 3,000c, small plot 7,000c; one plot per character or guild. Food ~0.5 Clim per unit. Teleport Mirane -> outpost costs 100u magical fuel (return free). → **Done:** Food and Magical Fuel Units added (0.5 Clim each).
- [x] Spirit Core -> astra resistance: Spirit Core / 500, rounded down. → **Done:** Shown in Pools when Mirane is ticked.
- [x] Play styles: live expeditions are scheduled by each party with a DM (Roll20); an emergency-fill system lets players join short groups; #play-by-post runs gathering/expedition threads by post with a dice bot; #downtime-activities is for in-character write-ups when spending EXP. → *Noted, no action needed.* Campaign reference.
- [x] Ideas for the planner: a "Mirane rules" checkbox (Job/Gather numbers, +1,000 Clim, restricted-class warning at creation, astra resistance shown), and a weekly EXP/IP estimator for town play (IP per week, crafting EXP, journal EXP). → **Done:** Mirane Expedition option built 2026-10-24 (estimator still an idea, see above).
- [ ] Other builders to compare with later: the official character builder at clio.angelssword.com (posted by the game designer in #how-to-play), the fan tool lyrian-tools.vercel.app, and a community Google Sheets character sheet (v8).

## Planner - not done yet
- [x] Print test with Elara (2026-10-24), fixed: sheet printed the whole plan (Scout's Art (Cartography), Exp -4300) -> prints the character as of now by default; combat inventory text squashed -> min 6.5pt then "..." (full text on the Gear page); breakthrough descriptions cut -> wrap with names lined up; abilities cut off / "more abilities (see planner)" -> full-size Abilities/Breakthroughs/Gear pages replace official pages 3-6 (boxes grow, two columns, gaps filled); "- - -" placeholder ranges dropped; crafting bundles now list their sub-abilities (planner screen too - it showed "(see subAbilities)" before).
- [ ] Print: compare a real paper printout with the PDF (user printing 2026-10-24).
- [x] User request (2026-10-24): Save asks for a file name (suggests "<Name> - lyrian build.json"). Chrome/Edge show a real Save-as window (folder + overwrite warning); other browsers get a name box.
- [x] User request (2026-10-24): **Load** takes a saved .json file or a pasted build code (LCP1:) in one window; a .txt file holding a code works too. Undo brings back the previous build.
- [x] Share (2026-10-24): the character export is a neutral **Character data** section (`characterData()` / `characterDataCode()`, `LCD1:` codes, `lyrian-character-*.json` files) with no reference to any other tool. planner-all-in-one.html rebuilt.
- [x] User request (2026-10-24): character picture - Identity → Picture (shrunk to a 600px JPEG, saved as B.portrait in the build/Save file, left out of build codes), printed top-right of the Backstory page with the text beside it.
- [x] User request (2026-10-24): tap any stat name (main or sub) for a short pop-up of what it does (STAT_INFO in planner.html, from RULES_REFERENCE section 3).
- [x] User request (2026-10-24): the Build roadmap page should always be the LAST page of the printout. Done today (order: official sheet, Backstory, Roadmap); keep it that way if more extra pages are added. → **Done:** Roadmap prints last.
- [x] **UI (2026-10-24):** a skill-point pot with only one allowed skill (e.g. Artificer's +5 Artificing) is placed automatically, once; points you take back out stay out (alloc.auto).
- [x] **UI (user request 2026-10-24): Skills card.** Sources with points left are tinted and listed in a "Points still to place" bar (tap to switch); skills with points are highlighted; the Points column shows "points / cap" (warn colour at the cap, red over it).
- [x] **Backstory + roadmap pages (2026-10-24):** Identity has a Backstory box (saved as B.notes, also included in Share → Character data). Print sheet can add a Backstory page and a Build roadmap page after the official six, drawn on the official blank page background in the same style; both continue onto extra pages if long.
- [x] Mixed House (Demon): pick your extra clan; its ability, class unlock and proficiency apply.
- [x] Roadmap view and build sharing (text summary + build code) added 2026-10-22.
- [x] Ability bonuses are now added to the Combat numbers (classes.js grants + data/bonuses.js), with tap-to-see breakdowns and toggles for situational ones.
- [x] Race hybrids (Human-Chimera, Faerie-Chimera) work: take the breakthrough, then pick the other race's sub-race.
- [x] Weapon/armor proficiencies are now tracked (data/proficiencies.js) and checked for class requirements and equipped armor.
- [x] Mystic Eye slots tracked (2 normal, 8 with 8 Eyes; each eye class uses one). Element masteries tracked from class keys, Elemental Affinity, Ryujin, and Acolyte/Sorcerer on mastery.
- [x] Element mastery requirements still show "check" (not "locked") when no tracked source gives the element, in case a race ability or something untracked gives it. → *Noted, no action needed.* Kept on purpose, in case an untracked source gives the element.
- [x] Aeromancer's Wind Master grant (Wind Mastery) was missing from classes.js; added 2026-10-22 after re-checking the page. → **Done:** Added 2026-10-22.
- [x] Canon campaign starting Clim: +1,000 on top of the normal 3,000 (confirmed by user 2026-10-21).
- [ ] **GM question.** "Any tier 2 class mastered" is counted as tier 2 or higher. Confirm whether a tier 3 mastery counts. → Duplicate of the "any tier 2 class mastered" question.
- [x] Transmuter/Alkahest: pick the crafting discipline for your Transmuter points on the class step.
- [x] Slow Starter: -200 creation class EXP applied; enter EXP already doubled (note shown in Pools).

## Proficiencies (data/proficiencies.js)
- [x] Which groups count as "common" vs "specialized" comes from the rulebook's weapon list (Thrown, Set of Missiles, Bow, Crossbow, Musket, Sling are treated as common ranged). Confirm Musket isn't specialized. → **Rulebook:** Musket is listed with the common ranged weapons (Crossbow, Sling...), before the Specialized section - it's common.
- [x] "Basic weapon" (Alchemist, Transmuter, Magitechnician) is treated as the same thing as "common weapon". → *Noted, no action needed.* Reading kept.
- [x] "Any melee weapon" requirements count common melee, artisan weapons, Lances, Whips, Gauntlets, Saboteur daggers and Staves. Unarmed proficiency is not counted. → *Noted, no action needed.* Reading kept.
- [x] "Smithing weapon" (Blacksmith, Forgemaster) = weapon groups crafted with Blacksmithing in items.js. → *Noted, no action needed.* Reading kept.
- [x] Demon: choose weapon proficiency OR +5 clan skill points in Identity. The page doesn't say which skill each clan uses, so any normal skill is allowed.
- [x] Non-proficient armor/shield penalty: the planner warns but doesn't change the numbers (exact penalty wording to confirm in the rulebook). → **Rulebook:** non-proficient armor or shield: 1 less Guard and the Evasion penalty 1 bigger; non-proficient weapons count as improvised (no group bonus). Now applied to Evasion/Dodge too, with a hover note on the inventory tag (2026-10-24).

## Keywords (data/keywords.js)
- [x] 92 keywords from the site. Ability tags with no keyword page (Healing, Encounter Start, Arcane, Shield, Mind Affecting, Jump, Aura, Illusion, Counter, Gravity, Errand, Interlude, etc.) show as plain tags with no pop-up. → *Noted, no action needed.* By design.
- [ ] **GM question.** Mandate: the page says ignoring it means you've "defied the mandate" but doesn't say what that does. → Mandate: what happens when you defy it?

## Bonuses (data/bonuses.js) - rechecked 2026-10-22
- [x] Fighter's Journey says "+5 HP" (not "max HP"); treated as +5 max HP. → *Noted, no action needed.* Reading kept.
- [x] Angelblooded and Vampire Lord show "+1 stat point to Presence" in the header AND +1 Presence in a benefit. Treated as one +1 (the header summarises the benefit). → *Noted, no action needed.* Reading kept.
- [x] Ranger key: page says "5 points in one of the following" while the Grants line says "+5 skill points" over the list. Treated as 5 points spread among the list. → *Noted, no action needed.* Reading kept.
- [ ] **GM question.** Blocking: the rules say Block *replaces* Guard with 2 x Toughness + armor Block. Not stated whether armor Guard, or Guard bonuses from abilities (Stoneskin, stances), also count while Blocking. The planner keeps them separate: "guard" bonuses -> Guard, "block" bonuses -> Block guard. → Rulebook: Block "increases your Guard to 2 x Toughness + armor Block value". Do armor Guard and Guard bonuses from abilities also count while Blocking?
- [x] Evasion vs Dodge: bonuses that only say "evasion" (Serene Water Stance) are added to Evasion only, not to Dodge evasion. Ones that say "evasion and dodge" (Stoneskin, Hardening Fist, Dog Form) change both. → *Noted, no action needed.* Reading kept.
- [ ] **GM question.** Unholy Strength (+2 Power/Focus) is added to your stats, which also raises Mana and HP-related numbers while on. Check whether it should only affect attacks. → Unholy Strength: does +2 Power also raise max Mana (stat bonus) or only attacks?
- [ ] Craft expertise grants (Forgemaster, Magitechnician, Master Armorer, Timberwright: "5 points in each of 3 crafts") are shown as text only, not tracked. → Still to do: track "5 points in each of 3 crafts" expertise grants.
- [x] Magitechnician and Onmyoji pages wouldn't load on 2026-10-22; their bonuses use the data checked on 2026-10-20. → **Done:** both rechecked on the official site 2026-10-24 (slugs magitechnician- and onmyoji-): steps, costs, keywords, ranges and requirements match.
- [x] Unlisted abilities (Botanist Forager's Eye, Jonin En-dama, Ninja Kage Shuriken no Jutsu, Shadowbringer Hide in Shadows, Warding Mage Hidden Wards) aren't tied to a step, so the planner never counts them as owned. They show in the class details window. → **Done:** These five abilities are now the class steps (filled 2026-10-24), so they count as owned.

## Refunds - updated 2026-10-22
- [x] Shared abilities (Wind Master, Controlled Blaze, Tremorsense, Divine Weapon, Status Assessment II, Battle Cast, Aimed Shot, Undying Justice, Lunge): the class pages only say "Refund possible". The rulebook says buying an ability you already have refunds the EXP (IP still paid for a new class). classes.js refund amounts now say "full", and the planner makes the later purchase cost 0 EXP.
- [x] Half refunds ("not an exact match but you still gain everything") aren't detected automatically; there's no list of which abilities count as near-matches. → *Noted, no action needed.* Planner gives full refunds for exact duplicates only.

## Data audit - 2026-10-22
- [x] Spot-check of 20 random classes (highlander, zen-warrior, windbringer, anti-mage, amanita, elementalist, trickster, aurora-blade-style, jewel-idol, agrarian, bard, monk, sage, sanctioner, sniper, duelist, mage, marksman, phosphomancer, daionmyoji) re-read against the static copy: tier, difficulty, roles, requirements and all 8 steps (abilities, skill lists, Heart/Soul options) all matched. 0 errors in 160 steps.
- [x] Full audit: all 185 classes re-read against their pages (tier, difficulty, roles, requirements, all 8 steps incl. skill lists, fixed points and extras on Heart/Soul steps). Data errors found: Aeromancer was missing its Wind mastery grant; the planner ignored "fixed" skill points (9 artisan classes) and Armorsmith's Level 5 proficiency pick. All three fixed. Everything else matched. Every other difference came from the reading tool misreading a page and was confirmed correct by re-reading the page (Pierrot is Tier 1; Still Stone Testament and Venomblade difficulties are 3 and 2; Jonin Level 4 really is blank on the site).
- [x] Confirmed while auditing: Magitechnician's +1 Burden (must go on an artifice) and Onmyoji's +5 Art: Calligraphy are on the pages exactly as stored. Their page addresses end in "-" (magitechnician-, onmyoji-), which is why they looked "unloadable" before.
- [x] Races audit: all 49 races re-read (size, every ability name and cost, main-race stats/skills/languages/proficiencies). Everything matched. Added a Cait Sith "Cat Form" toggle (Guard becomes 0, +3 Evasion, +6 Dodge), which the planner didn't have.
- [x] Breakthroughs audit: all 89 names, EXP costs and requirements match the site's list; every page was read for permanent effects. Added: Small Doggy (bigger Dog Form numbers replace the normal Dog Form toggle), Kit Expert (your heaviest kit counts 2 less Burden), Mystic Eyes of Faerie Light (+10 Perception to spot illusions, shown as expertise), Bully (+5 Intimidation vs lower Fitness, shown as a note).
- [x] Guard and Block can't go below 0 (confirmed from the rulebook: Guard = equipment + Toughness; Block Guard = 2 x Toughness + armor Block value, +4 for a normal shield while blocking). The planner now stops both at 0 and shows "Can't go below 0" in the breakdown.
- [x] Spelling kept as the site has it: Battlemaster "Skillfull Blow", Five Harmonies "Blooming Conciousness", Sword Saint requirement "Iaido style" (= Iai Style). → *Noted, no action needed.* Spelling kept as the site has it.
- [x] Page typos noted during the audit: Phosphomancer lists "Art Magic" and Daionmyoji "Magic Perception" with a missing comma; the data treats them as two skills each. → *Noted, no action needed.* Treated as two skills each.
- [x] Item pages tried and not found (they're abilities that make items, not items): sealing-talisman, purify-elixir, detoxify-elixir, volatile-flask, high-power-shell, shadow-cloak. → *Noted, no action needed.* Not items.

## Printable sheet (Print sheet button) - 2026-10-22
- [x] Fills the official fillable Character Sheet 1.2 (6 pages, 351 fields) using its own fonts. Tested in poppler and pdfium (Chrome's PDF engine); qpdf reports no errors.
- [x] The sheet lists "Acrobatics" and "Artisan" as skills; the current rules have neither, so the planner writes its own skill list into those rows (crafting/gathering skills you've put points into go in the spare rows). → *Noted, no action needed.* By design.
- [x] "Bonus" column = total roll bonus (stat + skill points + best expertise). Say if you'd rather it show just the stat. → *Noted, no action needed.* By design.
- [x] "Exp" field = unspent EXP. L/P Attack = 2d4 + Power, H Attack = 4d6 + 2 x Power. Temp HP/RP/Mana and Injuries are left blank for play. → *Noted, no action needed.* By design.
- [x] Only works with that exact PDF file (Character Sheet 1.2, 2,316,411 bytes). A new sheet version needs tools/make_sheet_map.py re-run. → *Noted, no action needed.* By design.
