import { CelestialEvent } from '../types/celestial';

export const celestialEvents: CelestialEvent[] = [
  {
    id: '1',
    title: 'Total Solar Eclipse',
    description: 'A spectacular total solar eclipse will be visible across North America, offering up to 4 minutes of totality in the path of totality.',
    date: new Date('2025-03-14'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['North America', 'Mexico', 'United States'],
    rarity: 'rare',
    peak: '2:15 PM EST',
    icon: 'Eclipse',
    facts: [
      'Total solar eclipses occur approximately every 18 months somewhere on Earth',
      'The shadow travels at about 1,500 mph',
      'Temperature can drop by 10-15°F during totality'
    ]
  },
  {
    id: '2',
    title: 'Geminids Meteor Shower Peak',
    description: 'The most active meteor shower of the year, producing up to 120 meteors per hour under ideal conditions.',
    date: new Date('2025-12-14'),
    endDate: new Date('2025-12-15'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Best viewed after midnight',
      'Originates from asteroid 3200 Phaethon',
      'Meteors appear to radiate from constellation Gemini'
    ]
  },
  {
    id: '3',
    title: 'Summer Solstice',
    description: 'The longest day and shortest night in the Northern Hemisphere, marking the official beginning of summer.',
    date: new Date('2025-06-21'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '10:42 AM EDT',
    icon: 'Sun',
    facts: [
      'Sun reaches its northernmost point in the sky',
      'Ancient cultures celebrated this as peak solar power',
      'Daylight hours begin decreasing after this date'
    ]
  },
  {
    id: '4',
    title: 'Venus-Jupiter Conjunction',
    description: 'Venus and Jupiter will appear extremely close together in the evening sky, separated by less than 1 degree.',
    date: new Date('2025-08-12'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '6:30 PM local time',
    icon: 'CircleDot',
    facts: [
      'Will be visible to the naked eye',
      'Best viewed just after sunset',
      'They will appear as a brilliant double star'
    ]
  },
  {
    id: '5',
    title: 'Partial Lunar Eclipse',
    description: 'A dramatic partial lunar eclipse where Earth\'s shadow will cover 95% of the Moon\'s surface.',
    date: new Date('2025-09-18'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '2:44 AM EDT',
    icon: 'Moon',
    facts: [
      'Moon will appear deep red-orange in color',
      'Visible with naked eye - no special equipment needed',
      'Eclipse will last about 3.5 hours total'
    ]
  },
  {
    id: '6',
    title: 'Mars Opposition',
    description: 'Mars reaches opposition, appearing at its brightest and largest as Earth passes between Mars and the Sun.',
    date: new Date('2025-01-16'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: 'All night',
    icon: 'CircleDot',
    facts: [
      'Occurs approximately every 26 months',
      'Mars will appear red-orange in color',
      'Best time for telescope observation'
    ]
  },
  {
    id: '7',
    title: 'Aurora Borealis Enhanced Activity',
    description: 'Solar maximum period bringing spectacular northern lights visible at lower latitudes.',
    date: new Date('2025-03-20'),
    endDate: new Date('2025-03-22'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern US', 'Canada', 'Northern Europe', 'Alaska'],
    rarity: 'rare',
    peak: '10:00 PM - 2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Caused by charged particles from the Sun',
      'Colors depend on altitude and gas type',
      'May be visible as far south as New York'
    ]
  },
  {
    id: '8',
    title: 'Lyrid Meteor Shower',
    description: 'Annual meteor shower producing 15-20 meteors per hour with occasional fireballs.',
    date: new Date('2025-04-22'),
    endDate: new Date('2025-04-23'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '4:00 AM local time',
    icon: 'Zap',
    facts: [
      'Oldest recorded meteor shower (687 BC)',
      'Debris from Comet C/1861 G1 Thatcher',
      'Best viewed in dark skies after midnight'
    ]
  },
  {
    id: '9',
    title: 'Supermoon (Perigee Full Moon)',
    description: 'The Moon reaches its closest approach to Earth while full, appearing 14% larger and 30% brighter.',
    date: new Date('2025-10-07'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '8:47 PM EDT',
    icon: 'Moon',
    facts: [
      'Moon is approximately 226,000 miles from Earth',
      'Term "supermoon" coined by astrologer Richard Nolle',
      'Can cause slightly higher tides'
    ]
  },
  {
    id: '10',
    title: 'Perseid Meteor Shower Peak',
    description: 'One of the most reliable meteor showers, producing 50-100 meteors per hour.',
    date: new Date('2025-08-12'),
    endDate: new Date('2025-08-13'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'common',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Swift-Tuttle comet debris creates this shower',
      'Known for bright, long-lasting streaks',
      'Best meteor shower for beginners'
    ]
  },
  {
    id: '11',
    title: 'Saturn at Opposition',
    description: 'Saturn reaches opposition, providing the best viewing conditions of the year with rings fully illuminated.',
    date: new Date('2025-09-08'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: 'All night',
    icon: 'Circle',
    facts: [
      'Rings will be at maximum tilt and brightness',
      'Visible all night long',
      'Perfect time to observe Saturn\'s moons'
    ]
  },
  {
    id: '12',
    title: 'Comet 12P/Pons-Brooks Perihelion',
    description: 'The "Devil Comet" reaches its closest approach to the Sun, becoming visible to the naked eye.',
    date: new Date('2025-04-21'),
    type: 'rare',
    visibility: 'global',
    rarity: 'very-rare',
    peak: 'Dawn and dusk',
    icon: 'Zap',
    facts: [
      'Returns every 71 years',
      'Has distinctive horn-like coma projections',
      'Last visible from Earth in 1954'
    ]
  },
  {
    id: '13',
    title: 'Mercury Transit of the Sun',
    description: 'Rare transit of Mercury across the face of the Sun, visible with proper solar filters.',
    date: new Date('2025-11-13'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['Americas', 'Western Europe', 'Western Africa'],
    rarity: 'very-rare',
    peak: '9:30 AM - 12:45 PM EST',
    icon: 'CircleDot',
    facts: [
      'Mercury transits occur only 13-14 times per century',
      'Requires special solar filters to view safely',
      'Mercury appears as a tiny black dot'
    ]
  },
  {
    id: '14',
    title: 'Draconid Meteor Shower',
    description: 'Usually modest shower that can occasionally produce meteor storms with thousands per hour.',
    date: new Date('2025-10-08'),
    endDate: new Date('2025-10-09'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'rare',
    peak: '8:00 PM local time',
    icon: 'Zap',
    facts: [
      'Best viewed in early evening, unlike most showers',
      'Debris from comet 21P/Giacobini-Zinner',
      'Can be unpredictable - sometimes explosive'
    ]
  },
  {
    id: '15',
    title: 'Zodiacal Light',
    description: 'Ethereal pyramid of light visible in dark skies before dawn, caused by sunlight reflecting off interplanetary dust.',
    date: new Date('2025-02-15'),
    endDate: new Date('2025-02-28'),
    type: 'rare',
    visibility: 'global',
    rarity: 'rare',
    peak: '5:30 AM local time',
    icon: 'Zap',
    facts: [
      'Also called "false dawn" by ancient cultures',
      'Best seen from locations with minimal light pollution',
      'More prominent in spring and autumn'
    ]
  },
  {
    id: '16',
    title: 'Total Lunar Eclipse',
    description: 'A spectacular total lunar eclipse turning the Moon deep red during totality, visible across the Pacific.',
    date: new Date('2025-03-14'),
    type: 'lunar',
    visibility: 'specific',
    visibilityRegions: ['Pacific', 'Western Americas', 'Eastern Asia', 'Australia'],
    rarity: 'rare',
    peak: '12:05 AM PDT',
    icon: 'Moon',
    facts: [
      'Moon turns red due to Earth\'s atmosphere filtering sunlight',
      'Totality lasts up to 65 minutes',
      'Safe to view with naked eye unlike solar eclipses'
    ]
  },
  {
    id: '17',
    title: 'Jupiter-Saturn Conjunction',
    description: 'The two gas giants appear closest together in the sky, separated by just 0.6 degrees.',
    date: new Date('2025-12-20'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'very-rare',
    peak: '6:00 PM local time',
    icon: 'CircleDot',
    facts: [
      'Occurs approximately every 20 years',
      'Called "Great Conjunction" when very close',
      'Visible as single bright point to naked eye'
    ]
  },
  {
    id: '18',
    title: 'Quadrantid Meteor Shower',
    description: 'The year\'s first major meteor shower with a sharp peak producing 40+ meteors per hour.',
    date: new Date('2025-01-03'),
    endDate: new Date('2025-01-04'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'common',
    peak: '3:00 AM local time',
    icon: 'Zap',
    facts: [
      'Has the sharpest peak of all major meteor showers',
      'Debris from extinct comet 2003 EH1',
      'Peak only lasts about 6 hours'
    ]
  },
  {
    id: '19',
    title: 'Annular Solar Eclipse',
    description: 'A "ring of fire" eclipse where the Moon appears smaller than the Sun, creating a bright ring.',
    date: new Date('2025-09-21'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['Southern Pacific', 'New Zealand'],
    rarity: 'rare',
    peak: '12:45 PM NZST',
    icon: 'Circle',
    facts: [
      'Moon appears too small to completely cover the Sun',
      'Creates a spectacular ring of fire effect',
      'Still requires eclipse glasses for safe viewing'
    ]
  },
  {
    id: '20',
    title: 'Blue Moon (Second Full Moon)',
    description: 'The rare second full moon in a single calendar month, appearing slightly bluer due to atmospheric particles.',
    date: new Date('2025-05-31'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'rare',
    peak: '11:45 PM EDT',
    icon: 'Moon',
    facts: [
      'Occurs about every 2.7 years',
      'Not actually blue in color usually',
      'Phrase "once in a blue moon" refers to its rarity'
    ]
  }
];