import { CelestialEvent } from '../types/celestial';

export const celestialEvents: CelestialEvent[] = [
  {
    id: '1',
    title: 'Total Solar Eclipse',
    description: 'A spectacular total solar eclipse will be visible across North America, offering up to 4 minutes of totality in the path of totality.',
    date: new Date('2024-10-14'),
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
    date: new Date('2024-12-14'),
    endDate: new Date('2024-12-15'),
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
    title: 'Winter Solstice',
    description: 'The shortest day and longest night in the Northern Hemisphere, marking the official beginning of winter.',
    date: new Date('2024-12-21'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '9:21 AM EST',
    icon: 'Sun',
    facts: [
      'Sun reaches its southernmost point in the sky',
      'Ancient cultures celebrated this as rebirth of the sun',
      'Daylight hours begin increasing after this date'
    ]
  },
  {
    id: '4',
    title: 'Venus-Jupiter Conjunction',
    description: 'Venus and Jupiter will appear extremely close together in the evening sky, separated by less than 1 degree.',
    date: new Date('2025-01-12'),
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
    title: 'Lunar Eclipse (Penumbral)',
    description: 'A subtle lunar eclipse where the Moon passes through Earth\'s penumbral shadow, causing a slight darkening.',
    date: new Date('2025-02-20'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'common',
    peak: '12:44 AM EST',
    icon: 'Moon',
    facts: [
      'Much more subtle than total lunar eclipses',
      'Moon may appear slightly darker on one side',
      'Safe to view with naked eye'
    ]
  },
  {
    id: '6',
    title: 'Mars Opposition',
    description: 'Mars reaches opposition, appearing at its brightest and largest as Earth passes between Mars and the Sun.',
    date: new Date('2025-03-15'),
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
    description: 'Heightened solar activity expected to produce spectacular northern lights visible at lower latitudes.',
    date: new Date('2025-04-08'),
    endDate: new Date('2025-04-10'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern US', 'Canada', 'Northern Europe', 'Alaska'],
    rarity: 'rare',
    peak: '10:00 PM - 2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Caused by charged particles from the Sun',
      'Colors depend on altitude and gas type',
      'May be visible as far south as Pennsylvania'
    ]
  },
  {
    id: '8',
    title: 'Mercury Transit',
    description: 'Rare transit of Mercury across the face of the Sun, visible with proper solar filters or telescopes.',
    date: new Date('2025-05-07'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['Americas', 'Western Europe'],
    rarity: 'very-rare',
    peak: '11:30 AM - 2:15 PM EST',
    icon: 'CircleDot',
    facts: [
      'Mercury transits occur only 13-14 times per century',
      'Requires special solar filters to view safely',
      'Mercury appears as a tiny black dot'
    ]
  },
  {
    id: '9',
    title: 'Supermoon (Perigee Full Moon)',
    description: 'The Moon reaches its closest approach to Earth while full, appearing 14% larger and 30% brighter.',
    date: new Date('2025-06-14'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '11:25 PM EST',
    icon: 'Moon',
    facts: [
      'Moon is approximately 226,000 miles from Earth',
      'Term "supermoon" coined by astrologer Richard Nolle',
      'Can cause slightly higher tides'
    ]
  },
  {
    id: '10',
    title: 'Saturn Ring Plane Crossing',
    description: 'Saturn\'s rings will appear edge-on from Earth, making them nearly invisible and revealing hidden moons.',
    date: new Date('2025-07-23'),
    type: 'rare',
    visibility: 'global',
    rarity: 'very-rare',
    peak: 'Best after midnight',
    icon: 'Circle',
    facts: [
      'Occurs approximately every 15 years',
      'Rings are only about 30 feet thick',
      'Perfect time to spot Saturn\'s fainter moons'
    ]
  }
];