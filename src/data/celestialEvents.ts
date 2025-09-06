import { CelestialEvent } from '../types/celestial';

export const celestialEvents: CelestialEvent[] = [
  // A - EVENTS
  {
    id: '1',
    title: 'Andromedid Meteor Shower',
    description: 'Annual meteor shower originating from the constellation Andromeda, producing 5-10 meteors per hour.',
    date: new Date('2025-11-09'),
    endDate: new Date('2025-11-16'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'uncommon',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Debris from Biela\'s comet',
      'Historical meteor storms in 1872 and 1885',
      'Best viewed from dark locations'
    ]
  },
  {
    id: '2',
    title: 'Annular Solar Eclipse',
    description: 'A "ring of fire" eclipse where the Moon appears smaller than the Sun, creating a brilliant ring.',
    date: new Date('2025-09-21'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['Southern Pacific', 'New Zealand', 'Antarctica'],
    rarity: 'rare',
    peak: '12:45 PM NZST',
    icon: 'Circle',
    facts: [
      'Moon appears too small to completely cover the Sun',
      'Creates spectacular ring of fire effect',
      'Still requires eclipse glasses for safe viewing'
    ]
  },
  {
    id: '3',
    title: 'Aurora Australis (Southern Lights)',
    description: 'Enhanced southern aurora activity due to solar maximum, visible from southern latitudes.',
    date: new Date('2025-04-15'),
    endDate: new Date('2025-04-17'),
    type: 'rare',
    visibility: 'southern',
    visibilityRegions: ['Southern Chile', 'Argentina', 'New Zealand', 'Tasmania', 'Antarctica'],
    rarity: 'rare',
    peak: '11:00 PM - 3:00 AM local time',
    icon: 'Zap',
    facts: [
      'Southern counterpart to Aurora Borealis',
      'Caused by solar particles hitting atmosphere',
      'Colors range from green to pink to purple'
    ]
  },
  {
    id: '4',
    title: 'Aurora Borealis Enhanced Activity',
    description: 'Solar maximum period bringing spectacular northern lights visible at lower latitudes.',
    date: new Date('2025-03-20'),
    endDate: new Date('2025-03-22'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern US', 'Canada', 'Northern Europe', 'Alaska', 'Siberia'],
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
    id: '5',
    title: 'Asteroid 2025 AB Close Approach',
    description: 'Near-Earth asteroid makes safe but spectacular close approach, visible with binoculars.',
    date: new Date('2025-02-14'),
    type: 'rare',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '9:30 PM local time',
    icon: 'CircleDot',
    facts: [
      'Passes within 500,000 miles of Earth',
      'About 100 meters in diameter',
      'Completely safe - no collision risk'
    ]
  },

  // B - EVENTS
  {
    id: '6',
    title: 'Blue Moon (Second Full Moon)',
    description: 'The rare second full moon in a single calendar month.',
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
  },
  {
    id: '7',
    title: 'Bootid Meteor Shower',
    description: 'Usually weak meteor shower that can occasionally produce outbursts of hundreds per hour.',
    date: new Date('2025-06-27'),
    endDate: new Date('2025-06-28'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'rare',
    peak: '2:30 AM local time',
    icon: 'Zap',
    facts: [
      'Radiant in constellation Boötes',
      'Unpredictable - can produce meteor storms',
      'Associated with comet 7P/Pons-Winnecke'
    ]
  },

  // C - EVENTS
  {
    id: '8',
    title: 'Comet 12P/Pons-Brooks Perihelion',
    description: 'The "Devil Comet" reaches its closest approach to the Sun, becoming visible to naked eye.',
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
    id: '9',
    title: 'Conjunction of Mars and Jupiter',
    description: 'Mars and Jupiter appear within 0.5 degrees of each other in the night sky.',
    date: new Date('2025-08-14'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '10:00 PM local time',
    icon: 'CircleDot',
    facts: [
      'Occurs approximately every 2 years',
      'Best viewed with telescopes',
      'Both planets visible in same field of view'
    ]
  },
  {
    id: '10',
    title: 'Corona Borealis Nova (T CrB)',
    description: 'Recurrent nova expected to brighten dramatically, becoming visible to naked eye.',
    date: new Date('2025-07-15'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'very-rare',
    peak: '11:00 PM local time',
    icon: 'Star',
    facts: [
      'Also known as the "Blaze Star"',
      'Erupts approximately every 80 years',
      'Will brighten from magnitude 10 to 2'
    ]
  },

  // D - EVENTS
  {
    id: '11',
    title: 'Delta Aquariid Meteor Shower',
    description: 'Summer meteor shower producing 15-20 meteors per hour from constellation Aquarius.',
    date: new Date('2025-07-28'),
    endDate: new Date('2025-07-30'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Best viewed from Southern Hemisphere',
      'Fast meteors with fine trains',
      'Peaks during new moon period'
    ]
  },
  {
    id: '12',
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

  // E - EVENTS
  {
    id: '13',
    title: 'Earth\'s Aphelion',
    description: 'Earth reaches its farthest point from the Sun in its elliptical orbit.',
    date: new Date('2025-07-04'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '12:00 PM UTC',
    icon: 'Sun',
    facts: [
      'Earth is 94.5 million miles from Sun',
      'Occurs during Northern Hemisphere summer',
      'Seasons caused by axial tilt, not distance'
    ]
  },
  {
    id: '14',
    title: 'Earth\'s Perihelion',
    description: 'Earth reaches its closest point to the Sun in its elliptical orbit.',
    date: new Date('2025-01-04'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '12:00 PM UTC',
    icon: 'Sun',
    facts: [
      'Earth is 91.4 million miles from Sun',
      'Occurs during Northern Hemisphere winter',
      'Sun appears 3% larger than at aphelion'
    ]
  },
  {
    id: '15',
    title: 'Eta Aquariid Meteor Shower',
    description: 'Fast meteors from Halley\'s Comet debris, producing 50+ meteors per hour.',
    date: new Date('2025-05-05'),
    endDate: new Date('2025-05-06'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '4:00 AM local time',
    icon: 'Zap',
    facts: [
      'Debris from famous Halley\'s Comet',
      'Fast meteors at 66 km per second',
      'Better visibility from Southern Hemisphere'
    ]
  },

  // F - EVENTS
  {
    id: '16',
    title: 'Full Moon (Harvest Moon)',
    description: 'The full moon closest to autumn equinox, appearing larger and more orange.',
    date: new Date('2025-09-15'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'common',
    peak: '9:33 PM EDT',
    icon: 'Moon',
    facts: [
      'Rises shortly after sunset for several nights',
      'Historically helped farmers harvest crops',
      'Appears more orange due to atmospheric effects'
    ]
  },

  // G - EVENTS
  {
    id: '17',
    title: 'Geminids Meteor Shower Peak',
    description: 'The most active meteor shower of the year, producing up to 120 meteors per hour.',
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
    id: '18',
    title: 'Great Conjunction (Jupiter-Saturn)',
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

  // H - EVENTS
  {
    id: '19',
    title: 'Hybrid Solar Eclipse',
    description: 'Rare eclipse that appears annular and total along different parts of its path.',
    date: new Date('2025-04-08'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['Indian Ocean', 'Australia', 'New Zealand'],
    rarity: 'very-rare',
    peak: '2:30 PM AEST',
    icon: 'Circle',
    facts: [
      'Less than 5% of solar eclipses are hybrid',
      'Changes from annular to total due to Earth\'s curvature',
      'Maximum totality lasts 1 minute 16 seconds'
    ]
  },

  // I - EVENTS
  {
    id: '20',
    title: 'International Space Station Transit',
    description: 'ISS passes directly in front of the Moon as viewed from specific locations.',
    date: new Date('2025-06-12'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['Central United States', 'Parts of Europe'],
    rarity: 'rare',
    peak: '10:45 PM local time',
    icon: 'CircleDot',
    facts: [
      'Transit lasts less than 1 second',
      'Requires precise timing and location',
      'Best viewed with telescopes'
    ]
  },

  // J - EVENTS
  {
    id: '21',
    title: 'Jupiter at Opposition',
    description: 'Jupiter reaches opposition, appearing at its brightest and largest for the year.',
    date: new Date('2025-02-07'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'common',
    peak: 'All night',
    icon: 'CircleDot',
    facts: [
      'Jupiter appears 47 arcseconds in diameter',
      'Perfect time to observe Jupiter\'s moons',
      'Rises at sunset, sets at sunrise'
    ]
  },
  {
    id: '22',
    title: 'June Bootid Meteor Shower',
    description: 'Variable meteor shower from constellation Boötes, can produce surprising outbursts.',
    date: new Date('2025-06-27'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'uncommon',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Unpredictable shower with occasional storms',
      'Associated with comet 7P/Pons-Winnecke',
      'Can produce 100+ meteors per hour during outbursts'
    ]
  },

  // K - EVENTS
  {
    id: '23',
    title: 'Kappa Cygnid Meteor Shower',
    description: 'Minor meteor shower from constellation Cygnus, producing 3-5 meteors per hour.',
    date: new Date('2025-08-17'),
    endDate: new Date('2025-08-18'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'uncommon',
    peak: '11:00 PM local time',
    icon: 'Zap',
    facts: [
      'Slow-moving meteors with long trails',
      'Best viewed from dark sky locations',
      'Active from mid-July to late August'
    ]
  },

  // L - EVENTS
  {
    id: '24',
    title: 'Leonid Meteor Shower',
    description: 'Famous meteor shower that produces spectacular meteor storms every 33 years.',
    date: new Date('2025-11-17'),
    endDate: new Date('2025-11-18'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '5:00 AM local time',
    icon: 'Zap',
    facts: [
      'Debris from comet 55P/Tempel-Tuttle',
      'Fast meteors at 71 km per second',
      'Next meteor storm expected in 2030s'
    ]
  },
  {
    id: '25',
    title: 'Lunar Occultation of Mars',
    description: 'The Moon passes directly in front of Mars, hiding it from view temporarily.',
    date: new Date('2025-01-13'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['North America', 'Europe'],
    rarity: 'uncommon',
    peak: '11:30 PM EST',
    icon: 'Moon',
    facts: [
      'Mars disappears behind Moon\'s dark limb',
      'Reappears on Moon\'s bright limb',
      'Event duration varies by location'
    ]
  },
  {
    id: '26',
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

  // M - EVENTS
  {
    id: '27',
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
      'Mars appears red-orange in color',
      'Best time for telescope observation'
    ]
  },
  {
    id: '28',
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
    id: '29',
    title: 'Micromoon (Apogee New Moon)',
    description: 'New moon occurs when Moon is at its farthest point from Earth.',
    date: new Date('2025-02-12'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '7:15 AM EST',
    icon: 'Moon',
    facts: [
      'Moon appears 14% smaller than supermoon',
      'Results in weaker tides',
      'Opposite of supermoon phenomenon'
    ]
  },

  // N - EVENTS
  {
    id: '30',
    title: 'Neptune at Opposition',
    description: 'Neptune reaches opposition, at its closest approach to Earth for the year.',
    date: new Date('2025-09-19'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'common',
    peak: 'All night',
    icon: 'CircleDot',
    facts: [
      'Requires telescope for viewing',
      'Appears as blue-green disc',
      'Takes 165 years to orbit the Sun'
    ]
  },
  {
    id: '31',
    title: 'Noctilucent Clouds',
    description: 'Rare, luminous clouds visible during summer nights at high latitudes.',
    date: new Date('2025-06-15'),
    endDate: new Date('2025-08-15'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern latitudes above 50°'],
    rarity: 'rare',
    peak: '11:00 PM - 2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Highest clouds in Earth\'s atmosphere',
      'Form at altitude of 50 miles',
      'Best seen during astronomical twilight'
    ]
  },

  // O - EVENTS
  {
    id: '32',
    title: 'Occultation of Venus by Moon',
    description: 'The Moon passes directly in front of Venus, hiding it from view.',
    date: new Date('2025-07-19'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['Asia', 'Australia', 'Pacific'],
    rarity: 'uncommon',
    peak: '6:45 PM local time',
    icon: 'Moon',
    facts: [
      'Venus disappears behind Moon\'s limb',
      'Visible during daylight hours',
      'Duration varies by observer location'
    ]
  },
  {
    id: '33',
    title: 'Orionid Meteor Shower',
    description: 'Fast meteors from Halley\'s Comet debris, producing 15-25 meteors per hour.',
    date: new Date('2025-10-21'),
    endDate: new Date('2025-10-22'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '5:00 AM local time',
    icon: 'Zap',
    facts: [
      'Second shower from Halley\'s Comet',
      'Fast meteors at 66 km per second',
      'Radiant in constellation Orion'
    ]
  },

  // P - EVENTS
  {
    id: '34',
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
    id: '35',
    title: 'Partial Lunar Eclipse',
    description: 'A dramatic partial lunar eclipse where Earth\'s shadow covers 95% of Moon\'s surface.',
    date: new Date('2025-09-18'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '2:44 AM EDT',
    icon: 'Moon',
    facts: [
      'Moon will appear deep red-orange',
      'Visible with naked eye - no equipment needed',
      'Eclipse lasts about 3.5 hours total'
    ]
  },

  // Q - EVENTS
  {
    id: '36',
    title: 'Quadrantid Meteor Shower',
    description: 'The year\'s first major meteor shower with sharp peak producing 40+ meteors per hour.',
    date: new Date('2025-01-03'),
    endDate: new Date('2025-01-04'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'common',
    peak: '3:00 AM local time',
    icon: 'Zap',
    facts: [
      'Sharpest peak of all major meteor showers',
      'Debris from extinct comet 2003 EH1',
      'Peak only lasts about 6 hours'
    ]
  },

  // R - EVENTS
  {
    id: '37',
    title: 'Ring of Fire Solar Eclipse',
    description: 'Annular solar eclipse creating perfect ring of fire effect visible from specific path.',
    date: new Date('2025-09-21'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['Southern Pacific', 'New Zealand'],
    rarity: 'rare',
    peak: '12:45 PM NZST',
    icon: 'Circle',
    facts: [
      'Moon appears smaller than Sun',
      'Creates brilliant ring around Moon',
      'Path of annularity crosses ocean'
    ]
  },

  // S - EVENTS
  {
    id: '38',
    title: 'Saturn at Opposition',
    description: 'Saturn reaches opposition, providing best viewing conditions with rings fully illuminated.',
    date: new Date('2025-09-08'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: 'All night',
    icon: 'Circle',
    facts: [
      'Rings at maximum tilt and brightness',
      'Visible all night long',
      'Perfect time to observe Saturn\'s moons'
    ]
  },
  {
    id: '39',
    title: 'Summer Solstice',
    description: 'The longest day and shortest night in Northern Hemisphere, marking official beginning of summer.',
    date: new Date('2025-06-21'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '10:42 AM EDT',
    icon: 'Sun',
    facts: [
      'Sun reaches its northernmost point',
      'Ancient cultures celebrated this as peak solar power',
      'Daylight hours begin decreasing after this date'
    ]
  },
  {
    id: '40',
    title: 'Supermoon (Perigee Full Moon)',
    description: 'Moon reaches closest approach to Earth while full, appearing 14% larger and 30% brighter.',
    date: new Date('2025-10-07'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '8:47 PM EDT',
    icon: 'Moon',
    facts: [
      'Moon approximately 226,000 miles from Earth',
      'Term "supermoon" coined by astrologer',
      'Can cause slightly higher tides'
    ]
  },

  // T - EVENTS
  {
    id: '41',
    title: 'Total Lunar Eclipse',
    description: 'Spectacular total lunar eclipse turning Moon deep red during totality.',
    date: new Date('2025-03-14'),
    type: 'lunar',
    visibility: 'specific',
    visibilityRegions: ['Pacific', 'Western Americas', 'Eastern Asia', 'Australia'],
    rarity: 'rare',
    peak: '12:05 AM PDT',
    icon: 'Moon',
    facts: [
      'Moon turns red due to Earth\'s atmosphere',
      'Totality lasts up to 65 minutes',
      'Safe to view with naked eye'
    ]
  },
  {
    id: '42',
    title: 'Total Solar Eclipse',
    description: 'Spectacular total solar eclipse visible across North America with up to 4 minutes totality.',
    date: new Date('2025-03-14'),
    type: 'solar',
    visibility: 'specific',
    visibilityRegions: ['North America', 'Mexico', 'United States'],
    rarity: 'rare',
    peak: '2:15 PM EST',
    icon: 'Eclipse',
    facts: [
      'Total solar eclipses occur every 18 months somewhere',
      'Shadow travels at about 1,500 mph',
      'Temperature can drop 10-15°F during totality'
    ]
  },
  {
    id: '43',
    title: 'Taurid Meteor Shower',
    description: 'Long-duration meteor shower known for bright fireballs and slow meteors.',
    date: new Date('2025-11-05'),
    endDate: new Date('2025-11-12'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '1:00 AM local time',
    icon: 'Zap',
    facts: [
      'Debris from comet 2P/Encke',
      'Known for spectacular fireballs',
      'Active for over two months'
    ]
  },

  // U - EVENTS
  {
    id: '44',
    title: 'Uranus at Opposition',
    description: 'Uranus reaches opposition, at its closest and brightest for the year.',
    date: new Date('2025-11-09'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'common',
    peak: 'All night',
    icon: 'CircleDot',
    facts: [
      'Just visible to naked eye in dark skies',
      'Appears blue-green through telescopes',
      'Rotates on its side relative to other planets'
    ]
  },
  {
    id: '45',
    title: 'Ursid Meteor Shower',
    description: 'Year-end meteor shower from constellation Ursa Minor, producing 5-10 meteors per hour.',
    date: new Date('2025-12-22'),
    endDate: new Date('2025-12-23'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['Northern Hemisphere'],
    rarity: 'uncommon',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'Radiant near Polaris, the North Star',
      'Associated with comet 8P/Tuttle',
      'Best viewed from northern latitudes'
    ]
  },

  // V - EVENTS
  {
    id: '46',
    title: 'Venus Greatest Eastern Elongation',
    description: 'Venus reaches its greatest angular distance east of the Sun, best evening viewing.',
    date: new Date('2025-01-10'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '6:30 PM local time',
    icon: 'CircleDot',
    facts: [
      'Venus appears highest in evening sky',
      'Visible for several hours after sunset',
      'Perfect time for telescope observation'
    ]
  },
  {
    id: '47',
    title: 'Venus-Jupiter Conjunction',
    description: 'Venus and Jupiter appear extremely close together, separated by less than 1 degree.',
    date: new Date('2025-08-12'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '6:30 PM local time',
    icon: 'CircleDot',
    facts: [
      'Visible to naked eye as brilliant pair',
      'Best viewed just after sunset',
      'Appear as brilliant double star'
    ]
  },
  {
    id: '48',
    title: 'Vernal Equinox (Spring Equinox)',
    description: 'Day and night are approximately equal length, marking beginning of spring in Northern Hemisphere.',
    date: new Date('2025-03-20'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '9:01 AM EDT',
    icon: 'Sun',
    facts: [
      'Sun crosses celestial equator northward',
      'Equal day and night worldwide',
      'Ancient celebrations mark rebirth and renewal'
    ]
  },

  // W - EVENTS
  {
    id: '49',
    title: 'Winter Solstice',
    description: 'Shortest day and longest night in Northern Hemisphere, marking official beginning of winter.',
    date: new Date('2025-12-21'),
    type: 'solar',
    visibility: 'global',
    rarity: 'common',
    peak: '9:21 AM EST',
    icon: 'Sun',
    facts: [
      'Sun reaches southernmost point in sky',
      'Ancient cultures celebrated rebirth of sun',
      'Daylight hours begin increasing after this'
    ]
  },

  // X - EVENTS (Using Xi for constellation names)
  {
    id: '50',
    title: 'Xi Bootis Occultation',
    description: 'Bright star Xi Bootis is occulted by the Moon, visible from specific regions.',
    date: new Date('2025-08-25'),
    type: 'rare',
    visibility: 'specific',
    visibilityRegions: ['Europe', 'Western Asia'],
    rarity: 'rare',
    peak: '11:15 PM local time',
    icon: 'Star',
    facts: [
      'Star disappears behind Moon\'s limb',
      'Duration depends on observer location',
      'Rare stellar occultation event'
    ]
  },

  // Y - EVENTS (Year-specific events)
  {
    id: '51',
    title: 'Yearly Maximum Solar Activity',
    description: 'Solar maximum period bringing increased aurora activity and solar flare events.',
    date: new Date('2025-06-15'),
    endDate: new Date('2025-08-15'),
    type: 'rare',
    visibility: 'global',
    rarity: 'uncommon',
    peak: 'Variable',
    icon: 'Sun',
    facts: [
      '11-year solar cycle reaches peak',
      'Increased risk of geomagnetic storms',
      'Enhanced aurora activity worldwide'
    ]
  },

  // Z - EVENTS
  {
    id: '52',
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
    id: '53',
    title: 'Zenithal Hourly Rate Peak (Geminids)',
    description: 'Geminids reach theoretical maximum rate of 120+ meteors per hour under perfect conditions.',
    date: new Date('2025-12-14'),
    type: 'rare',
    visibility: 'global',
    rarity: 'common',
    peak: '2:00 AM local time',
    icon: 'Zap',
    facts: [
      'ZHR represents ideal viewing conditions',
      'Actual rates depend on light pollution',
      'Best shower for urban observers'
    ]
  },

  // BONUS RARE PHENOMENA
  {
    id: '54',
    title: 'Planetary Alignment (5 Planets)',
    description: 'Mercury, Venus, Mars, Jupiter, and Saturn align in a rare celestial configuration.',
    date: new Date('2025-06-29'),
    type: 'planetary',
    visibility: 'global',
    rarity: 'very-rare',
    peak: 'Dawn',
    icon: 'CircleDot',
    facts: [
      'All five naked-eye planets visible together',
      'Spans about 50 degrees of sky',
      'Occurs roughly every 20 years'
    ]
  },
  {
    id: '55',
    title: 'Lunar Libration Maximum',
    description: 'Moon shows maximum libration, revealing normally hidden portions of lunar surface.',
    date: new Date('2025-04-18'),
    type: 'rare',
    visibility: 'global',
    rarity: 'rare',
    peak: '10:00 PM local time',
    icon: 'Moon',
    facts: [
      'Reveals 59% of Moon\'s surface',
      'Caused by Moon\'s elliptical orbit',
      'Best observed through telescopes'
    ]
  },
  {
    id: '56',
    title: 'Earthshine on New Moon',
    description: 'Dramatic earthshine illuminates the dark portion of the new moon.',
    date: new Date('2025-05-01'),
    type: 'lunar',
    visibility: 'global',
    rarity: 'uncommon',
    peak: '7:30 PM local time',
    icon: 'Moon',
    facts: [
      'Also called "Da Vinci glow"',
      'Caused by sunlight reflecting off Earth',
      'Best seen with binoculars or telescopes'
    ]
  },
  {
    id: '57',
    title: 'Gegenschein (Counterglow)',
    description: 'Faint oval glow opposite the Sun caused by sunlight backscattering from interplanetary dust.',
    date: new Date('2025-10-15'),
    type: 'rare',
    visibility: 'global',
    rarity: 'very-rare',
    peak: '12:00 AM local time',
    icon: 'Zap',
    facts: [
      'Extremely faint - requires pristine dark skies',
      'Located at antisolar point',
      'Best seen during moonless nights'
    ]
  },
  {
    id: '58',
    title: 'Green Flash at Sunset',
    description: 'Rare optical phenomenon where green light is briefly visible at top of setting sun.',
    date: new Date('2025-08-20'),
    type: 'rare',
    visibility: 'global',
    rarity: 'rare',
    peak: 'Sunset',
    icon: 'Sun',
    facts: [
      'Lasts only 1-2 seconds',
      'Best seen over ocean horizons',
      'Caused by atmospheric refraction'
    ]
  },
  {
    id: '59',
    title: 'Atmospheric Gravity Waves',
    description: 'Rare wave patterns visible in noctilucent clouds during summer months.',
    date: new Date('2025-07-10'),
    endDate: new Date('2025-07-20'),
    type: 'rare',
    visibility: 'northern',
    visibilityRegions: ['High northern latitudes'],
    rarity: 'very-rare',
    peak: '11:30 PM local time',
    icon: 'Zap',
    facts: [
      'Visible only in noctilucent clouds',
      'Caused by atmospheric disturbances',
      'Creates beautiful wave-like patterns'
    ]
  },
  {
    id: '60',
    title: 'Ashen Light of Venus',
    description: 'Mysterious faint glow on night side of Venus, visible through telescopes.',
    date: new Date('2025-09-30'),
    type: 'rare',
    visibility: 'global',
    rarity: 'very-rare',
    peak: '8:00 PM local time',
    icon: 'CircleDot',
    facts: [
      'Cause still debated by astronomers',
      'Only visible through telescopes',
      'Reported for over 400 years'
    ]
  }
];