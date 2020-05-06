const metrics = {
  SKILLS: [
    'overall',
    'attack',
    'defence',
    'strength',
    'hitpoints',
    'ranged',
    'prayer',
    'magic',
    'cooking',
    'woodcutting',
    'fletching',
    'fishing',
    'firemaking',
    'crafting',
    'smithing',
    'mining',
    'herblore',
    'agility',
    'thieving',
    'slayer',
    'farming',
    'runecrafting',
    'hunter',
    'construction'
  ],
  ACTIVITIES: [
    'league_points',
    'bounter_hunter_hunter',
    'bounter_hunter_rogue',
    'clue_scrolls_all',
    'clue_scrolls_beginner',
    'clue_scroll_easy',
    'clue_scroll_medium',
    'clue_scroll_hard',
    'clue_scroll_elite',
    'clue_scroll_master',
    'last_man_standing'
  ],
  BOSSES: [
    'abyssal_sire',
    'alchemical_hydra',
    'barrows_chests',
    'bryophyta',
    'callisto',
    'cerberus',
    'chambers_of_xeric',
    'chambers_of_xeric_challenge_mode',
    'chaos_elemental',
    'chaos_fanatic',
    'commander_zilyana',
    'corporeal_beast',
    'crazy_archaeologist',
    'dagannoth_prime',
    'dagannoth_rex',
    'dagannoth_supreme',
    'deranged_archaeologist',
    'general_graardor',
    'giant_mole',
    'grotesque_guardians',
    'hespori',
    'kalphite_queen',
    'king_black_dragon',
    'kraken',
    'kreearra',
    'kril_tsutsaroth',
    'mimic',
    'nightmare',
    'obor',
    'sarachnis',
    'scorpia',
    'skotizo',
    'the_gauntlet',
    'the_corrupted_gauntlet',
    'theatre_of_blood',
    'thermonuclear_smoke_devil',
    'tzkal_zuk',
    'tztok_jad',
    'venenatis',
    'vetion',
    'vorkath',
    'wintertodt',
    'zalcano',
    'zulrah'
  ]
};

function getRankKey(value) {
  return `${value}Rank`;
}

function getValueKey(value) {
  if (metrics.SKILLS.includes(value)) {
    return `${value}Experience`;
  }

  if (metrics.ACTIVITIES.includes(value)) {
    return `${value}Score`;
  }

  return `${value}Kills`;
}

module.exports = {
  ...metrics,
  ALL_METRICS: [...metrics.SKILLS, ...metrics.ACTIVITIES, ...metrics.BOSSES],
  getRankKey,
  getValueKey
};
