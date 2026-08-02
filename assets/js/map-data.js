// Guardians of the Moonlit Vines — location data
// Real-world coordinates are approximate, meant for a story map, not for navigation.
// To add your own photos: drop a .jpg into assets/photos/ named after each location's "id" below
// (e.g. assets/photos/rila-monastery.jpg) and it will automatically replace the placeholder art.

const LOCATIONS = [
  {
    id: "rila-monastery",
    name: "Rila Monastery",
    localName: "Рилски манастир",
    coords: [42.1333, 23.3403],
    kind: "real",
    chapter: "Whispers Among the Icons",
    real: "Bulgaria's largest and most revered monastery, founded in the 10th century by St. John of Rila. Its striped arcades, frescoed courtyard, and mountain setting have made it a UNESCO World Heritage Site.",
    excerpt: "The library alcove of Rila Monastery was a pocket of stillness, apart from chiming bells and chanted prayers... For weeks, he had been tracing a ghost through the archives — a hidden valley, a forgotten stream, and a phrase that appeared with cryptic insistence: “лоза от Дри́скѫ,” the “vine from Driska.”"
  },
  {
    id: "metoh-orlitsa",
    name: "Metoh Orlitsa",
    localName: "Метох Орлица",
    coords: [42.117, 23.217],
    approx: true,
    kind: "real",
    chapter: "The Secret of the Metoh Orlitsa",
    real: "A small working cloister on the old pilgrim path between Rila village and the monastery, near Pastra — a real dependency of Rila Monastery, its frescoed church still standing among fields of lavender.",
    excerpt: "A gentle, calming scent drifted on the air from the fields of lavender that surrounded the cloister... “This is the blood of the Old One,” she said, finally giving the ancient vine its name."
  },
  {
    id: "krasta",
    name: "Krasta — The Cross Rock",
    localName: "Кръста",
    coords: [42.108, 23.228],
    approx: true,
    kind: "real",
    chapter: "The Secret of the Metoh Orlitsa",
    real: "A dramatic stone monolith above the Rilska River gorge, crowned with an iron cross — tied in local legend to St. John of Rila's flight from persecution and his transformation into an eagle.",
    excerpt: "“'Krasta,' Kalina said, her eyes on the summit. 'The Cross.'” ... In his grief and desperation, as the mob closed in, he prayed for deliverance. And God answered — he was transformed into a great eagle."
  },
  {
    id: "rila-village",
    name: "Rila Village",
    localName: "село Рила",
    coords: [42.133, 23.133],
    kind: "real",
    chapter: "Wisdom of Rila Village",
    real: "The gateway town to the monastery, where stone-based houses of timber and clay line the Rilska River — home, in the novel, to the old storyteller Mito and his family.",
    excerpt: "Rila village was nestled in the valley, a cluster of houses with low stone bases and walls of timber and clay, their roofs of old red tile, the sound of the river a constant, soothing presence."
  },
  {
    id: "tsari-mali-grad",
    name: "Tsari Mali Grad",
    localName: "Цари мали град",
    coords: [42.3539, 23.3819],
    kind: "real",
    chapter: "The Crossroads Fortress",
    real: "A restored late-Roman hilltop fortress above the village of Belchin, commanding views across the Samokov valley — held in turn by Rome and the medieval Bulgarian Tsars.",
    excerpt: "“A Roman outpost,” Yanko said as they climbed. “Later, our own Tsars held it. From up here you can see everything — Samokov, the whole valley opening eastward... Whoever held this hill held every road.”"
  },
  {
    id: "sapareva-banya",
    name: "Sapareva Banya",
    localName: "Сапарева баня",
    coords: [42.283, 23.267],
    kind: "real",
    chapter: "The Breath of the Dragon",
    real: "Home to the hottest mineral spring in the Balkans (103°C / 217°F) and the site of the ancient Roman town of Germanea — the geyser still erupts in the town center today.",
    excerpt: "He stood on the balcony of the sanatorium he had built, a cup of coffee steaming in his hand. The air was thick with the sulfurous scent of the geyser, a smell he had come to associate not with brimstone, but with healing."
  },
  {
    id: "samokov",
    name: "Samokov",
    localName: "Самоков",
    coords: [42.333, 23.550],
    kind: "real",
    chapter: "referenced throughout",
    real: "A historic ironworking and icon-painting town at the foot of Rila. The real Samokov Artistic School produced generations of 19th-century church painters — the tradition behind the novel's Nikola Obrazopisov.",
    excerpt: "The notes, hurriedly signed by a master painter from Samokov, Nikola Obrazopisov, spoke of a 'moonlit gleam' — the vine's grapes captured moonlight itself."
  },
  {
    id: "dospey",
    name: "Dospey",
    localName: "Доспей",
    coords: [42.352, 23.53],
    approx: true,
    kind: "real",
    chapter: "The Daughter of Dospey",
    real: "A small village at the foot of the Shishmanovo Ridge, a few kilometers from Samokov, known today for its resident storks nesting on the village church.",
    excerpt: "“I am from Dospey, the village just over the hill... To most, it is a small place. To me, it is the ground where the soul of our nation was reborn.”"
  },
  {
    id: "tsarska-bistritsa",
    name: "Tsarska Bistritsa",
    localName: "Царска Бистрица",
    coords: [42.2583, 23.5956],
    kind: "real",
    chapter: "The Flight to Tsarska Bistritsa",
    real: "The former royal hunting lodge of Tsar Ferdinand and King Boris III, above Borovets. Its real alpineum garden once genuinely gathered Rila's rarest mountain plants for study and preservation.",
    excerpt: "“This is… this is Tsarska Bistritsa,” he said. “The Tsar's hunting lodge.” ... “The Divine Primrose grows in that garden. It grows nowhere on this earth but Rila.”"
  },
  {
    id: "seven-lakes",
    name: "The Seven Rila Lakes",
    localName: "Седемте рилски езера",
    coords: [42.2075, 23.3239],
    kind: "real",
    chapter: "Crossroads at Razdela Saddle",
    real: "Bulgaria's most famous glacial cirque — seven lakes stacked down the mountainside, each with its own name: the Tear, the Eye, the Kidney, the Twin, the Trefoil, the Fish Lake, and the Lower Lake.",
    excerpt: "Below them, cascading down the slopes of a vast glacial cirque, lay the legendary lakes, each nestled one above the other, a staircase of liquid light."
  },
  {
    id: "razdela-saddle",
    name: "Razdela Saddle",
    localName: "Седловина Раздела",
    coords: [42.223, 23.300],
    approx: true,
    kind: "real",
    chapter: "The Blue Gully / The White Gully",
    real: "A high mountain pass (2,603 m) at the head of the Seven Lakes cirque, where real hikers still choose between steep gullies descending toward the peaks of Orlovets and Zliyat Zab.",
    excerpt: "“One is the Синият улей, the Blue Gully. It is the harder path, but it is the rewarding one... The other is the Белият улей, the White Gully. If the Hush does not find you worthy, the mountain will demand your most precious thing, or it will demand your life.”"
  },
  {
    id: "driska-valley",
    name: "Driska Valley",
    localName: "Дриска",
    coords: [42.19, 23.28],
    kind: "legend",
    chapter: "The Journey to Driska",
    real: "Not on any map. In the novel, Driska is the hidden valley where the moonlit vine grows — the destination the whole story circles, guarded by silence, glacier, and the mountain's own judgment.",
    excerpt: "For here, in a hidden valley called Driska, an ancient vine has taken root... By day, it appears to be nothing more than a quiet vineyard, tended by patient hands and modest lives. But its true nature is revealed only to the moon."
  }
];

const GLOSSARY = [
  { term: "The Hush", def: "A living silence that guards Driska Valley — not peace, but judgment. It tests everyone who draws near and strips the unworthy bare." },
  { term: "The Old One", def: "The ancient vine itself, source of the “moonlit gleam” — grapes that glow like small lanterns under moonlight, holding old magic within them." },
  { term: "The Guardians", def: "An unbroken line of protectors sworn to the vine — not by ink or parchment, but by the joining of crown and cross, of earth and throne." },
  { term: "The wine of the Old One", def: "Ruby-dark wine carried in an ancient manerka. To drink it is to accept a pact — it reveals a person's true nature, to themselves and to others." },
  { term: "Father Atanas", def: "A monk and former folklore scholar (born Nikola Christov) whose search through the monastery archives sets the whole story in motion." },
  { term: "Kalina", def: "A village girl raised by Sister Zoe at the Metoh Orlitsa, gifted with a seer's sight for the truth beneath a place's beauty." },
  { term: "Sister Zoe", def: "The Greek nun who keeps the Metoh Orlitsa — healer, teacher, and keeper of older, deeper lore than the monastery itself admits to." },
  { term: "Bistra", def: "Keeper of the Story, from the village of Dospey — the one whose knowledge of the old maps and names guides the guardians through the high peaks." },
  { term: "Dimo Berov", def: "An industrialist who senses the power sleeping beneath the mountain and means to seize it — builder of the Sapareva Banya sanatorium and the Kalin Dam." }
];
