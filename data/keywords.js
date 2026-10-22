// Lyrian Chronicles Character Planner - Keyword Data
// Source: https://lyrian.splatpass.net/keywords/ (Static edition of Lyrian Chronicles 0.13.2)
// Each keyword's own page was read (the list page shortens some definitions).
// "rules" are plain-English summaries written for this tool, NOT the official wording.
// Kept in alphabetical order. To add one: copy a KW(...) line and change it.

window.LC = window.LC || {};
LC.keywords = LC.keywords || {};

function KW(id, name, rules){
  LC.keywords[id] = { id: id, name: name, rules: rules, url: "https://lyrian.splatpass.net/keywords/" + id + "/",
                      checked: "2026-10-21", version: "0.13.2" };
}

KW("active", "Active", ["An ability with this keyword can't be the target of a Prepare action."]);
KW("aid", "Aid", ["Can only target allies, unless the ability says you can target yourself."]);
KW("artillery", "Artillery", ["Can hit units that aren't hidden even behind cover (including full cover). Cover is judged from above the target, not from the attacker."]);
KW("augment", "Augment", ["An attack already changed by an Augment effect can't get a second Augment."]);
KW("blanketing", "Blanketing", ["Against several targets you make one accuracy roll and one damage roll, and both apply to every target."]);
KW("bleeding", "Bleeding", ["Take 1d6 true damage at the start of your turn."]);
KW("blinded", "Blinded", ["-X to accuracy rolls (X = Blinded value).", "At 3 or more: no ranged attacks unless you've found the target some way other than sight.", "At 5 or more: your attacks can't get Sure Hit either."]);
KW("block-crush", "Block Crush", ["Ignores the extra Guard a target gets from taking the Block action."]);
KW("broken", "Broken", ["Only applies to equipment.", "Broken armor or shields give no bonus and no penalty.", "A broken weapon can only be used as an improvised weapon."]);
KW("burning", "Burning", ["Take X damage at the end of your turn.", "Spend 1 AP to remove it."]);
KW("calcification", "Calcification", ["Your Agility is lowered by 1."]);
KW("challenge", "Challenge", ["If a challenged character attacks without including the challenger as a target, the challenger may make a melee attack of opportunity against it.", "No attack of opportunity if the challenged character is itself making an attack of opportunity, or if the challenger can't be targeted (for example because of Charm)."]);
KW("charm", "Charm", ["You can't willingly attack whoever charmed you, unless the only other valid targets are your allies.", "Area effects that hit allies also hit the charmer; area effects that skip allies also skip the charmer."]);
KW("circuit", "Circuit", ["The first time each combat you use a Circuit ability, it costs 1 less mana.", "After that, the discount is gone for all your Circuit abilities."]);
KW("combo", "Combo", ["Gets an extra bonus when used right after a different ability.", "The bonus lasts until you spend AP on something that isn't a Combo ability."]);
KW("concentration", "Concentration", ["Only one Concentration effect can be active at a time.", "You can end it on your own turn for 0 AP.", "You lose it if you're Downed."]);
KW("crushing", "Crushing", ["If the attack hits and isn't Blocked, it deals at least damage equal to your Power."]);
KW("daze", "Daze", ["You lose 1 AP right away.", "If you have no AP left, you regain 1 less AP at the start of your next turn instead.", "A Dazed target can't be Dazed again until the end of its next turn."]);
KW("disarm", "Disarm", ["You can't make weapon attacks with the weapon you were holding when Disarmed.", "When the Disarm ends you must draw that weapon again to use it.", "Unarmed attacks aren't affected."]);
KW("divine", "Divine", ["If you have the Divine's Chosen breakthrough, this deals your chosen divine's damage type instead of Holy."]);
KW("domain", "Domain", ["A spell that creates a domain area.", "Only one domain area can be active at a single location at a time."]);
KW("dual-wield", "Dual Wield", ["Using it uses up your dual wield attack for the round.", "Can't be used if you've already made a dual wield attack this round.", "After using it you can't make another dual wield attack that round."]);
KW("enchantment", "Enchantment", ["Applied to a weapon; a weapon can hold only one enchantment at a time.", "On a channeling weapon, the enchantment also applies to spells you cast while holding it."]);
KW("esoteric-art", "Esoteric Art", ["Only one Esoteric Art or Secret Art ability per encounter."]);
KW("expose", "Expose", ["Lowers the target's crit threshold by X (Expose 1: crits on 19-20).", "Stacks with katanas and other abilities that lower the attacker's crit threshold.", "Removed once the target is critically hit, even if it defended."]);
KW("fire", "Fire", ["Fire damage can set unattended, easily burned objects alight."]);
KW("flashback", "Flashback", ["Refers back to an earlier moment in the campaign: planning your character did in advance to set up the current situation."]);
KW("full-pierce", "Full Pierce", ["Damage can't be reduced by Guard."]);
KW("half-pierce", "Half Pierce", ["Ignores Guard unless the target Blocks or Dodges."]);
KW("half-rapid", "Half Rapid", ["Can be used on each creature only once per round."]);
KW("hellfire", "Hellfire", ["Like Burning: set damage at the end of the target's turn. If it isn't removed before the end of the target's next turn, it can't be removed the normal way any more.", "Abilities can still dispel it.", "Creatures immune to Burning can still get Hellfire, and for them it stays removable the normal way even after a turn.", "Ends automatically when the encounter ends."]);
KW("hiding", "Hiding", ["Enemies can't see or target you, and can't pinpoint where you are even if they know you're near.", "Lost when you move, attack, or use an ability without the Stealth keyword, unless that action says otherwise."]);
KW("illumination", "Illumination", ["The next attack against you gets +X accuracy.", "Used up whether that attack hits or misses."]);
KW("immovable", "Immovable", ["While not flying, other creatures' knockdowns and forced movement (knockbacks, pulls, etc.) don't affect you."]);
KW("instant", "Instant", ["Can be used in the middle of another action, pausing it.", "Resolves right away, before the interrupted action finishes.", "If the interrupted action's target becomes invalid, that action is cancelled and its cost refunded."]);
KW("isolated", "Isolated", ["You're Isolated when no allies are within 10ft and 2+ enemies (or 1 boss) are within 10ft."]);
KW("killing-blow", "Killing Blow", ["Triggers when you bring an enemy to 0 HP or less.", "The same Killing Blow effect can only be gained once from a given target."]);
KW("lock-on", "Lock On", ["Ignores the bonus a target gets from Dodging."]);
KW("lockstep", "Lockstep", ["Always counts as meeting the target's base Evasion (with its bonuses); the target can still Dodge normally."]);
KW("mandate", "Mandate", ["Your next single-target attack must target whoever gave you the Mandate; otherwise you've broken the mandate.", "Challenge doesn't work on you while you have Mandate."]);
KW("miracle", "Miracle", ["Each character can use only one Miracle per encounter."]);
KW("mystic-eye", "Mystic Eye", ["The ability is used through a Mystic Eye."]);
KW("ninjutsu", "Ninjutsu", ["Needs both hands free.", "Holding a small weapon, Saboteur thread dagger, one-handed thrown weapon or set of missiles still counts as a free hand."]);
KW("offstep", "Offstep", ["Attacks against you always count as meeting your base Evasion (with its bonuses); you can still Dodge normally."]);
KW("opener", "Opener", ["Can only be used as the first action of your turn.", "Paying upkeep isn't an action, so it doesn't count."]);
KW("opportunistic", "Opportunistic", ["Can be used instead of a normal attack of opportunity.", "It still counts as your attack of opportunity, so you give up the normal one."]);
KW("overcharge", "Overcharge", ["Pay extra AP and/or Mana to make the ability stronger."]);
KW("pass", "Pass", ["During this movement you can move through enemy spaces."]);
KW("persist", "Persist", ["Removing it costs X extra mana; if the remover isn't using mana, X extra AP (or RP) instead.", "The extra cost doesn't apply to the effect's normal removal method, if it has one (e.g. 1 AP to clear Burning)."]);
KW("petrify", "Petrify", ["+10 Guard, but every attack against you hits automatically and you can't take actions.", "Allies can use you as cover; if an attack would have missed them because of that cover, it hits you instead.", "Normal \"remove negative effects\" abilities don't work; only effects that name Petrify remove it."]);
KW("pinpoint", "Pinpoint", ["Your attacks ignore an amount of the target's Guard equal to your Focus.", "Guard can't go below 0 from this."]);
KW("presence-concealment", "Presence Concealment", ["Hides your mana output and aura: your Spirit Core counts as 0 for detection and aura abilities.", "+5 Stealth."]);
KW("prone", "Prone", ["Abilities with this keyword can be used while Prone with no penalty.", "While Prone, attacks without this keyword cost +1 AP and +1 RP."]);
KW("quick", "Quick", ["After you use a Quick ability, the next Quick ability you use that turn costs +1 AP."]);
KW("rage", "Rage", ["Can be used while you're in Rage Stance."]);
KW("rapid", "Rapid", ["Can be used more than once per turn."]);
KW("regrowth", "Regrowth", ["At the start of your turn, heal 3 + the Focus of whoever applied it."]);
KW("root", "Root", ["You can't move.", "When you Dodge, your Evasion is 13 + Agility (rounded down)."]);
KW("safe", "Safe", ["Doesn't provoke attacks of opportunity just for being a spell or a ranged attack."]);
KW("salvo", "Salvo", ["All attacks in the Salvo resolve at the same time.", "One basic Dodge or Block against one of them covers the rest for no extra cost.", "Extra effects tied to that defense (like healing from a Block) happen only once.", "The Salvo provokes only one attack of opportunity."]);
KW("sanctify", "Sanctify", ["When an attack hits the Sanctified creature, the attacker heals 3 + the applier's Focus.", "Each trigger removes one stack.", "An attacker already at full HP can choose not to trigger it."]);
KW("scatter", "Scatter", ["Against several targets, roll accuracy and damage separately for each one."]);
KW("secret-art", "Secret Art", ["Only one Secret Art or Esoteric Art ability per encounter."]);
KW("setup", "Setup", ["Finished by spending AP on your next turn.", "While charging you can't take other AP actions, and attacks against you gain Trick Attack.", "You can abandon it instead of finishing; the leftover AP stays unspent. You can cancel it any time for 0 RP.", "It can't trigger until your next turn starts, and Setup abilities can't be Prepared.", "Starting the charge costs at least 1 AP."]);
KW("shaken", "Shaken", ["Maximum AP lowered by 1."]);
KW("shieldbreaker", "Shieldbreaker", ["Double damage to Shield HP and Temporary HP.", "Damage that carries over past them isn't doubled."]);
KW("sickened", "Sickened", ["Rolls that use Focus, Power, Agility or Toughness treat that stat as 1 lower."]);
KW("sidestep", "Sidestep", ["This movement doesn't provoke attacks of opportunity."]);
KW("slow", "Slow", ["Your movement speed is halved."]);
KW("soaked", "Soaked", ["Take X extra damage from Lightning damage."]);
KW("song", "Song", ["Only one Song can be active at a time."]);
KW("sound", "Sound", ["The effect is sound-based; anyone who can't hear it is unaffected."]);
KW("spell", "Spell", ["Counts as a spell and provokes attacks of opportunity unless something says otherwise."]);
KW("stacking", "Stacking", ["These abilities give stacks of something.", "You can only hold one kind of stack from them at a time; gaining a different kind removes all your old stacks."]);
KW("stagger", "Stagger", ["Evasion lowered by X."]);
KW("stance", "Stance", ["Only one Stance can be active at a time."]);
KW("static", "Static", ["At the end of your next turn, you deal X lightning damage to each ally within 5ft of you."]);
KW("stealth", "Stealth", ["Doesn't break Hiding.", "You still need to be in low cover or concealment afterward to stay hidden."]);
KW("strafe", "Strafe", ["You must move at least the Strafe distance toward the target before making this attack."]);
KW("stun", "Stun", ["Your AP, AP recovery and RP all become 0.", "When it ends you get back the unspent RP it took."]);
KW("summon", "Summon", ["Counts toward your summon limit: at most 2 summons at once.", "A summon can't be the target of abilities that need a willing ally."]);
KW("sunder", "Sunder", ["Guard lowered by X."]);
KW("sure-hit", "Sure Hit", ["Always hits with no accuracy roll, but automatically misses a target in full cover."]);
KW("teleport", "Teleport", ["You move by teleporting instead of normal movement.", "Doesn't provoke attacks of opportunity and gets past most roots and grapples.", "You must be able to see where you're going; otherwise you ignore difficult terrain and solid obstacles.", "Unless stated, only you and your gear teleport; creatures you're touching stay behind."]);
KW("toxic", "Toxic", ["Take 1d6 Full Pierce Poison damage at the start of your turn."]);
KW("transformation", "Transformation", ["Only one transformation effect can be active at a time."]);
KW("trick-attack", "Trick Attack", ["The target must pay double the normal RP to react to it."]);
KW("type", "Type", ["You can only be one \"type\" at a time."]);
KW("unarmed-strike", "Unarmed Strike", ["Must be made with an unarmed attack."]);
KW("unbalanced", "Unbalanced", ["Your next attack that uses AP (even a normally 0 AP one) costs 1 extra AP."]);
KW("upkeep", "Upkeep", ["At the start of your turn you choose whether to pay; if you don't, the effect ends.", "You can't pay upkeep while Downed."]);
KW("weakened", "Weakened", ["Your max AP becomes 2 and max RP becomes 1.", "When it ends you get back the unspent RP it took."]);
