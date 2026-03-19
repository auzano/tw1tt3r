// ── DATA ──
// To add a post: add a new object at the TOP of the array (newest first).
// category: "trivia" | "history" | "language" | "geography" | "science"

const ACCOUNTS = {
  trivia:    { name: "Trivia Daily",    handle: "@triviadaily",   emoji: "🌍", bg: "#1d9bf0" },
  history:   { name: "Short History",   handle: "@shorthistory",  emoji: "📚", bg: "#794bc4" },
  language:  { name: "Words & Language",handle: "@wordsandlang",  emoji: "🗣️", bg: "#e0a800" },
  geography: { name: "World Map",       handle: "@worldmapfacts", emoji: "🗺️", bg: "#0d9488" },
  science:   { name: "Science Bits",    handle: "@sciencebits",   emoji: "🔬", bg: "#ff7043" },
};

const posts = [

  // ── POST 100 ──
  {
    id: 100, category: "science", account: ACCOUNTS.science, time: "1j",
    text: "Your body replaces most of its cells every 7–10 years.\n\nBut your neurons? Most of them last your entire lifetime — you're thinking with the same brain cells you had as a child. #science",
    thread: [
      { text: "Different cells replace at different rates:\n\n🩸 Red blood cells: ~120 days\n🦷 Gut lining: 3–5 days\n💀 Bone cells: ~10 years\n🧠 Neurons: mostly never" },
      { text: "The neurons in your cerebral cortex — the part responsible for thought, memory, and personality — are largely the ones you were born with.\n\nYou are, in a very literal sense, still running on original hardware." },
      { text: "There are exceptions: your olfactory bulb (smell) and hippocampus (memory formation) do generate some new neurons throughout life.\n\nBut the core \"you\" is old. Very old." },
      { text: "🔗 Source", isSource: true, source: { label: "Scientific American — Do We Replace Our Cells Every 7 Years?", url: "https://www.scientificamerican.com/article/do-we-replace-our-cells-every-7-years/" } },
    ],
  },

  {
    id: 99, category: "history", account: ACCOUNTS.history, time: "2j",
    text: "The Great Fire of London in 1666 destroyed 13,200 houses and 87 churches.\n\nOnly 6 people were recorded as dying. Historians suspect the real number was much higher. #history",
    thread: [
      { text: "The fire started on 2 September 1666 in a bakery on Pudding Lane and burned for four days, destroying most of the medieval City of London." },
      { text: "The official death toll of 6 is almost certainly wrong. At the time, only deaths of wealthy citizens were formally recorded — the poor, who lived closest to the fire's path, were largely uncounted." },
      { text: "One unexpected outcome: the fire wiped out the rat population that had spread the bubonic plague.\n\nLondon had suffered a devastating plague outbreak in 1665 — the year before the fire. The Great Fire may have ended it." },
      { text: "🔗 Source", isSource: true, source: { label: "Museum of London — The Great Fire", url: "https://www.museumoflondon.org.uk/discover/great-fire-london" } },
    ],
  },

  {
    id: 98, category: "language", account: ACCOUNTS.language, time: "3j",
    text: "The word \"muscle\" comes from the Latin \"musculus\" — meaning little mouse.\n\nRomans thought the movement of muscles under skin looked like a mouse running beneath a cloth. #language",
    thread: [
      { text: "\"Musculus\" in Latin meant both \"little mouse\" and \"muscle\" — the resemblance was the basis for the metaphor." },
      { text: "This kind of body-as-animal metaphor was common in Latin anatomy:\n\n🦷 \"Molar\" → millstone (molaris)\n💪 \"Muscle\" → little mouse (musculus)\n🦴 \"Patella\" → little pan/dish (kneecap)" },
      { text: "The same root gave us \"mussel\" — the shellfish — because its shape was also thought to resemble a mouse.\n\nMuscle, mussel, mouse — all from the same Latin root." },
      { text: "🔗 Source", isSource: true, source: { label: "Online Etymology Dictionary — muscle", url: "https://www.etymonline.com/word/muscle" } },
    ],
  },

  {
    id: 97, category: "geography", account: ACCOUNTS.geography, time: "4j",
    text: "Vatican City is the world's smallest country — but it has its own postal system, radio station, newspaper, and bank.\n\nAll packed into 0.44 km². #geography",
    thread: [
      { text: "Vatican City became an independent state in 1929 through the Lateran Treaty between the Holy See and Italy.\n\nBefore that, the Pope had been effectively a prisoner in the Vatican since 1870." },
      { text: "Despite its size, Vatican City operates like a full nation:\n\n📬 Its own postal stamps (highly sought by collectors)\n📻 Vatican Radio — broadcasts in 40+ languages\n🏦 Institute for the Works of Religion (its bank)\n💂 Swiss Guard — the world's oldest active military unit (since 1506)" },
      { text: "The Vatican also has the highest crime rate per capita in the world — mostly pickpocketing by the millions of tourists who visit annually.\n\nWith ~800 residents and millions of visitors, the math gets weird." },
      { text: "🔗 Source", isSource: true, source: { label: "CIA World Factbook — Holy See (Vatican City)", url: "https://www.cia.gov/the-world-factbook/countries/holy-see-vatican-city/" } },
    ],
  },

  {
    id: 96, category: "trivia", account: ACCOUNTS.trivia, time: "5j",
    text: "Penguins propose with pebbles.\n\nMale Gentoo penguins search for the smoothest, most perfect pebble to present to a female. If she accepts, she places it in the nest. #trivia",
    thread: [
      { text: "Pebbles aren't just symbolic — they're functional. Gentoo penguins build nests out of pebbles, and quality pebbles are scarce and valuable in Antarctica." },
      { text: "Males compete intensely for the best pebbles — sometimes stealing them from other nests when their neighbor isn't looking.\n\nScientists have observed this pebble theft extensively. It's essentially penguin theft." },
      { text: "If a female accepts a male's pebble, they often bond for life — or at least for the season.\n\nSome Gentoo pairs have been documented returning to the same mate and the same nest for years." },
      { text: "🔗 Source", isSource: true, source: { label: "BBC Earth — Penguin pebble proposals", url: "https://www.bbcearth.com/news/why-penguins-give-pebbles-as-gifts" } },
    ],
  },

  {
    id: 95, category: "history", account: ACCOUNTS.history, time: "6j",
    text: "The Eiffel Tower was supposed to be torn down in 1909.\n\nIt was saved because it doubled as a giant radio antenna — useful enough to keep standing. #history",
    thread: [
      { text: "Gustave Eiffel built the tower as the entrance arch for the 1889 World's Fair in Paris. The original permit allowed it to stand for only 20 years." },
      { text: "Parisians largely hated it at first. Writers and artists called it a \"blot on the cityscape\" and an \"iron monster.\" Demolition was scheduled for 1909." },
      { text: "But by 1900, the tower had been fitted with a radio transmitter. By 1909, it was used to send wireless telegraphs across the Atlantic — including intercepting German messages during WWI.\n\nIts military value made it too useful to destroy." },
      { text: "Today it's the most-visited paid monument in the world with about 7 million visitors per year.\n\nThe iron monster became the symbol of Paris." },
      { text: "🔗 Source", isSource: true, source: { label: "Eiffel Tower official history", url: "https://www.toureiffel.paris/en/the-monument/history" } },
    ],
  },

  {
    id: 94, category: "science", account: ACCOUNTS.science, time: "7j",
    text: "Octopuses have three hearts, blue blood, and can edit their own RNA.\n\nThey are so genetically different from other animals that scientists call them \"effectively aliens.\" #science",
    thread: [
      { text: "Two hearts pump blood to the gills; one pumps it to the rest of the body. When an octopus swims, the main heart stops beating — which is why they prefer crawling." },
      { text: "Their blood is blue because it uses hemocyanin (copper-based) instead of hemoglobin (iron-based) to carry oxygen.\n\nCopper-based blood works better in cold, low-oxygen environments like the deep ocean." },
      { text: "Most remarkably: octopuses can edit their own RNA — the messenger molecules that carry genetic instructions — on the fly.\n\nThis lets them adapt their nervous system to temperature changes in real time. No other animal is known to do this so extensively." },
      { text: "🔗 Source", isSource: true, source: { label: "Cell — RNA Editing Underlies Temperature Adaptation in Cephalopods", url: "https://www.cell.com/cell/fulltext/S0092-8674(17)30344-6" } },
    ],
  },

  {
    id: 93, category: "geography", account: ACCOUNTS.geography, time: "8j",
    text: "Finland has more saunas than cars.\n\nWith a population of 5.5 million, Finland has an estimated 3 million saunas — roughly one per household. #geography",
    thread: [
      { text: "Sauna culture in Finland is ancient — the oldest Finnish saunas date back 2,000 years. The word \"sauna\" is one of the very few Finnish words adopted into English." },
      { text: "Saunas in Finland are used for everything:\n🤝 Business meetings\n👶 Historically, childbirth\n🕊️ Diplomacy (Finland's presidents have conducted official talks in saunas)\n💆 General relaxation" },
      { text: "UNESCO added Finnish sauna culture to its Intangible Cultural Heritage list in 2020.\n\nTo many Finns, the sauna isn't a luxury — it's a necessity, as fundamental as a kitchen." },
      { text: "🔗 Source", isSource: true, source: { label: "UNESCO — Sauna culture in Finland", url: "https://ich.unesco.org/en/RL/sauna-culture-in-finland-01596" } },
    ],
  },

  {
    id: 92, category: "trivia", account: ACCOUNTS.trivia, time: "9j",
    text: "The shortest commercial flight in the world lasts about 90 seconds.\n\nLoganair flight between Westray and Papa Westray in Scotland. The record is 47 seconds. #trivia",
    thread: [
      { text: "The two Orkney islands are only 2.7 km apart. The scheduled flight time is 2 minutes — but with a tailwind, pilots have landed in under a minute." },
      { text: "The record flight of 47 seconds was set in 2016. The plane reaches a maximum altitude of about 150 feet — lower than many office buildings." },
      { text: "It's a fully scheduled commercial flight with tickets, boarding passes, and cabin crew.\n\nPassengers sometimes say the seatbelt announcement takes longer than the flight itself." },
      { text: "🔗 Source", isSource: true, source: { label: "Loganair — World's Shortest Scheduled Flight", url: "https://www.loganair.co.uk/travel-information/orkney-inter-island-services/" } },
    ],
  },

  {
    id: 91, category: "language", account: ACCOUNTS.language, time: "10j",
    text: "The Hawaiian alphabet has only 13 letters.\n\nA, E, I, O, U, H, K, L, M, N, P, W, and the ʻokina (ʻ) — a glottal stop that counts as a letter. #language",
    thread: [
      { text: "Hawaiian is a Polynesian language with a very simple phonological structure — no consonant clusters, every syllable ends in a vowel." },
      { text: "The ʻokina (ʻ) represents a glottal stop — a brief pause in the throat, like the pause in the middle of \"uh-oh\".\n\nIt changes meaning entirely: \"Hawaii\" and \"Hawaiʻi\" are different words." },
      { text: "Despite having the smallest alphabet of any living language, Hawaiian has enormous vocabulary depth — a single word can carry multiple layers of meaning depending on context, chant, and tone.\n\nThe language nearly died out in the 20th century but has been experiencing a significant revival since the 1970s." },
      { text: "🔗 Source", isSource: true, source: { label: "University of Hawaii — Hawaiian Language", url: "https://www.hawaii.edu/hawaiian/" } },
    ],
  },

  {
    id: 90, category: "history", account: ACCOUNTS.history, time: "11j",
    text: "The world's first novel was written by a Japanese woman in 1008 CE.\n\n\"The Tale of Genji\" by Murasaki Shikibu — a 54-chapter story about court life in Heian-era Japan. #history",
    thread: [
      { text: "Murasaki Shikibu was a lady-in-waiting at the Imperial court. She wrote The Tale of Genji (Genji Monogatari) around 1008 CE — over 600 years before Don Quixote." },
      { text: "The novel follows Prince Genji through his romantic relationships and court intrigues. It's deeply psychological, exploring memory, longing, and impermanence.\n\nModern scholars consider it the first psychological novel — not just the first novel." },
      { text: "The irony: women in Heian Japan were considered too refined for Chinese (the language of scholarship). They wrote in Japanese.\n\nThis \"limitation\" accidentally produced the world's first great work of prose fiction." },
      { text: "🔗 Source", isSource: true, source: { label: "The British Library — The Tale of Genji", url: "https://www.bl.uk/collection-items/the-tale-of-genji" } },
    ],
  },

  {
    id: 89, category: "science", account: ACCOUNTS.science, time: "12j",
    text: "A bolt of lightning is 5x hotter than the surface of the Sun.\n\nThe Sun's surface: ~5,500°C. Lightning bolt: ~30,000°C. #science",
    thread: [
      { text: "The Sun's surface (photosphere) temperature is about 5,500°C (9,932°F).\n\nA lightning bolt superheats the air around it to approximately 30,000°C (54,000°F) — in about 1/1000th of a second." },
      { text: "But the Sun's core is ~15 million°C — so lightning is nowhere near as hot as the interior of the Sun.\n\nThe comparison only holds for the surface, not the core." },
      { text: "The rapid heating is what causes thunder. Air expands explosively from the heat, creating a shockwave we hear as a crack or rumble depending on distance." },
      { text: "🔗 Source", isSource: true, source: { label: "NOAA — Lightning: The Science", url: "https://www.nssl.noaa.gov/education/svrwx101/lightning/" } },
    ],
  },

  {
    id: 88, category: "trivia", account: ACCOUNTS.trivia, time: "13j",
    text: "Crows can recognize human faces — and hold grudges.\n\nIn studies, crows remembered and scolded specific researchers who had trapped them, sometimes years later. #trivia",
    thread: [
      { text: "University of Washington researchers wore \"dangerous\" masks while trapping crows for study. When they later walked the same paths wearing those masks, the crows dive-bombed and scolded them.\n\nNeutral masks? No reaction." },
      { text: "What's more: crows taught other crows to recognize those faces. Young crows who had never met the researchers began scolding the same masks.\n\nThis is social transmission of specific knowledge about individual humans." },
      { text: "Crows belong to the corvid family — which also includes ravens, jays, and magpies. Corvids have a brain-to-body ratio comparable to great apes.\n\nSome corvids can solve multi-step puzzles that even dogs and cats cannot." },
      { text: "🔗 Source", isSource: true, source: { label: "University of Washington — Crows Remember Faces", url: "https://www.washington.edu/news/2008/06/27/crows-never-forget-a-face-it-seems/" } },
    ],
  },

  {
    id: 87, category: "geography", account: ACCOUNTS.geography, time: "14j",
    text: "Brazil and France share a border.\n\nFrench Guiana is an overseas territory of France — meaning France borders Brazil, Suriname, and has a coastline on the Atlantic in South America. #geography",
    thread: [
      { text: "French Guiana is not just a territory — it is legally part of France itself (an overseas department), the same way Hawaii is part of the US.\n\nIt uses the euro, is part of the EU, and its residents are French citizens." },
      { text: "The French-Brazilian border stretches about 730 km along the Oyapock River.\n\nThis means the European Union shares a land border with Brazil — through French Guiana." },
      { text: "French Guiana is also home to the Guiana Space Centre — Europe's primary rocket launch site. Its location near the equator gives rockets a speed advantage from Earth's rotation.\n\nAriane rockets launch from South American soil." },
      { text: "🔗 Source", isSource: true, source: { label: "INSEE — French Guiana", url: "https://www.insee.fr/fr/metadonnees/definition/c1501" } },
    ],
  },

  {
    id: 86, category: "language", account: ACCOUNTS.language, time: "15j",
    text: "There's a word in Japanese — \"木漏れ日\" (komorebi) — for the sunlight that filters through leaves.\n\nEnglish has no single word for this. Neither does most of the world. #language",
    thread: [
      { text: "Komorebi (木漏れ日) combines:\n木 (ko) = tree/trees\n漏れ (more) = leaking/filtering\n日 (bi) = sun/light\n\nLiterally: \"sunlight leaking through trees.\"" },
      { text: "Japanese has many such words for subtle natural phenomena — reflections, textures of light, the sound of wind.\n\nThis partly reflects the Shinto cultural tradition of finding spirit and meaning in natural details." },
      { text: "Other untranslatable Japanese nature words:\n🌸 Mono no aware — the bittersweetness of impermanence\n🍂 Wabi-sabi — beauty in imperfection and transience\n🌙 Ma — the meaningful pause or empty space between things" },
      { text: "🔗 Source", isSource: true, source: { label: "The Dictionary of Obscure Sorrows + NHK World", url: "https://www.nhk.or.jp/lesson/en/words/komorebi.html" } },
    ],
  },

  {
    id: 85, category: "history", account: ACCOUNTS.history, time: "16j",
    text: "Napoleon was not short.\n\nHe was 5'6\" — average height for a Frenchman of his era. The \"short Napoleon\" myth was partly British wartime propaganda. #history",
    thread: [
      { text: "Napoleon's height was recorded as 5 pieds 2 pouces in French units — which translates to about 5'6\" (168 cm) in modern measurement.\n\nThe confusion arose because French inches were longer than English inches." },
      { text: "British cartoonist James Gillray drew Napoleon as tiny and temperamental in caricatures — propaganda during the Napoleonic Wars.\n\nThese images spread widely and the myth stuck for 200 years." },
      { text: "Napoleon's nickname among his troops was \"le petit caporal\" — but \"petit\" was used affectionately, the way soldiers call a beloved general \"the old man.\" It wasn't about height.\n\nHis actual guards were required to be tall, which may have made him look shorter by comparison." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian Magazine — Napoleon's Height", url: "https://www.smithsonianmag.com/history/the-little-corporal-how-napoleon-got-his-nickname-180958524/" } },
    ],
  },

  {
    id: 84, category: "trivia", account: ACCOUNTS.trivia, time: "17j",
    text: "The average person walks about 100,000 miles in their lifetime.\n\nThat's roughly 4 trips around the equator — powered entirely by food. #trivia",
    thread: [
      { text: "Based on average daily step counts (~7,500 steps/day) and average stride length (~0.75m), a person covers about 2.5 miles a day.\n\nOver a 70-year life, that adds up to ~65,000–100,000 miles depending on the individual." },
      { text: "The Earth's circumference at the equator is about 24,901 miles.\n\n100,000 miles ÷ 24,901 = approximately 4 trips around the Earth." },
      { text: "All of this is powered by food — specifically, by ATP produced in your mitochondria from the calories you eat.\n\nEvery step is a tiny combustion event happening millions of times per second in your muscle cells." },
      { text: "🔗 Source", isSource: true, source: { label: "Stanford University — Daily Steps Research", url: "https://med.stanford.edu/news/all-news/2017/03/stanford-researchers-find-walking-10000-steps-a-day-is-good-for-you.html" } },
    ],
  },

  {
    id: 83, category: "science", account: ACCOUNTS.science, time: "18j",
    text: "Bananas are radioactive.\n\nThey contain potassium-40, a naturally occurring radioactive isotope. Scientists even have a unit called the \"Banana Equivalent Dose.\" #science",
    thread: [
      { text: "All bananas contain potassium, and about 0.0117% of naturally occurring potassium is the radioactive isotope K-40.\n\nThis means every banana emits a tiny amount of radiation." },
      { text: "The \"Banana Equivalent Dose\" (BED) is an informal unit used to explain radiation exposure in relatable terms.\n\nEating a banana = 0.1 microsieverts of radiation. A chest X-ray = about 1,000 bananas." },
      { text: "You shouldn't worry — your body regulates potassium levels carefully, so eating more bananas doesn't increase your radiation dose.\n\nYour body is already radioactive. So is everything around you. Background radiation is everywhere." },
      { text: "🔗 Source", isSource: true, source: { label: "NRC — Radiation in Everyday Life", url: "https://www.nrc.gov/about-nrc/radiation/around-us/sources/nat-bg-sources.html" } },
    ],
  },

  {
    id: 82, category: "geography", account: ACCOUNTS.geography, time: "19j",
    text: "Africa is much larger than most maps suggest.\n\nThe Mercator projection (the standard world map) makes Greenland look as big as Africa. In reality, Africa is 14x larger. #geography",
    thread: [
      { text: "Africa's actual area: ~30.4 million km².\nGreenland's actual area: ~2.2 million km².\n\nYet on most world maps, they appear roughly the same size." },
      { text: "The Mercator projection — developed in 1569 for navigation — distorts size as you move away from the equator.\n\nCountries near the poles (Greenland, Russia, Canada) are greatly inflated. Countries near the equator (most of Africa) appear smaller than they are." },
      { text: "Africa is big enough to fit:\n🇺🇸 USA\n🇨🇳 China\n🇮🇳 India\n🇯🇵 Japan\n🌍 Most of Europe\n\n...all at the same time, with room to spare." },
      { text: "🔗 Source", isSource: true, source: { label: "True Size Of — Africa visualization", url: "https://www.thetruesize.com/" } },
    ],
  },

  {
    id: 81, category: "history", account: ACCOUNTS.history, time: "20j",
    text: "Ancient Romans used crushed mouse brains as toothpaste.\n\nOther ingredients in Roman dental care: powdered ox hooves, eggshells, and urine. #history",
    thread: [
      { text: "Roman toothpaste recipes, recorded by writers including Pliny the Elder, included some genuinely bizarre ingredients by modern standards." },
      { text: "Urine — particularly Portuguese urine, considered especially potent — was prized as a tooth whitener and mouthwash.\n\nThe active ingredient is ammonia, which does in fact break down stains. It worked." },
      { text: "Despite the odd ingredients, Romans actually had fairly healthy teeth compared to medieval Europeans — largely because they had no refined sugar.\n\nRefined sugar became widespread in Europe only in the 16th–17th centuries, and tooth decay rates exploded shortly afterward." },
      { text: "🔗 Source", isSource: true, source: { label: "Ancient History Encyclopedia — Roman Medicine and Dentistry", url: "https://www.worldhistory.org/article/1088/dentistry-in-the-ancient-world/" } },
    ],
  },

  {
    id: 80, category: "language", account: ACCOUNTS.language, time: "21j",
    text: "The word \"disaster\" literally means \"bad star.\"\n\nFrom Latin: dis (bad) + astrum (star). Ancient people blamed catastrophes on unfavorable star positions. #language",
    thread: [
      { text: "Before modern science, the movements of celestial bodies were believed to directly influence earthly events — wars, famines, floods, personal fate." },
      { text: "Many English words carry this astrological origin:\n\n⭐ Disaster → bad star\n🌙 Lunatic → influenced by the moon (luna)\n💥 Influenza → influence of the stars\n🌟 Consider → to observe the stars (con + sidus)\n🌌 Disaster, jovial, mercurial, saturnine — all from planets" },
      { text: "\"Influenza\" is particularly interesting — named because epidemics were thought to be caused by unfavorable celestial influence.\n\nThe flu's name is a 500-year-old reminder that people once blamed the stars for disease outbreaks." },
      { text: "🔗 Source", isSource: true, source: { label: "Online Etymology Dictionary — disaster", url: "https://www.etymonline.com/word/disaster" } },
    ],
  },

  {
    id: 79, category: "trivia", account: ACCOUNTS.trivia, time: "22j",
    text: "There are more possible games of Go than there are atoms in the observable universe.\n\nAnd Go is still \"unsolved\" — no computer can play it perfectly. #trivia",
    thread: [
      { text: "Chess has ~10¹²⁰ possible games. Go has an estimated 10¹⁷⁰ possible board positions — a number so vast it makes chess look simple." },
      { text: "Go is played on a 19×19 board with black and white stones. The rules are simpler than chess — but the strategy is incomparably deeper." },
      { text: "In 2016, DeepMind's AlphaGo defeated world champion Lee Sedol 4-1 — a major AI milestone. But \"solved\" means a computer can play perfectly every time.\n\nGo remains too complex to fully solve. Possibly forever." },
      { text: "🔗 Source", isSource: true, source: { label: "DeepMind — AlphaGo", url: "https://deepmind.google/research/breakthroughs/alphago/" } },
    ],
  },

  {
    id: 78, category: "science", account: ACCOUNTS.science, time: "23j",
    text: "Trees in a forest share nutrients through underground fungal networks.\n\nScientists call it the \"Wood Wide Web.\" Older trees feed younger ones, especially their own seedlings. #science",
    thread: [
      { text: "Mycorrhizal fungi connect tree roots in dense underground networks, allowing trees to exchange water, carbon, phosphorus, and nitrogen." },
      { text: "\"Mother trees\" — large, old trees at forest centers — appear to send more nutrients to nearby seedlings, especially their own offspring.\n\nForest ecologist Suzanne Simard's research showed that removing mother trees causes disproportionate collapse of the surrounding young forest." },
      { text: "Trees also send chemical distress signals through these networks when attacked by insects — warning neighboring trees to produce defensive chemicals.\n\nThe forest functions more like a community than a collection of individuals." },
      { text: "🔗 Source", isSource: true, source: { label: "Nature — Net transfer of carbon between ectomycorrhizal tree species", url: "https://www.nature.com/articles/41557" } },
    ],
  },

  {
    id: 77, category: "history", account: ACCOUNTS.history, time: "1h",
    text: "The first speeding ticket was issued in 1896.\n\nWalter Arnold of Kent, England, was fined for driving 8 mph in a 2 mph zone. He was caught by a policeman on a bicycle. #history",
    thread: [
      { text: "The Motor Car Act of 1896 in the UK set a speed limit of 14 mph on open roads and 2 mph in towns.\n\nWalter Arnold exceeded the town limit by 400% — an impressive feat in 1896." },
      { text: "The police constable who caught him had to chase him on a bicycle. Arnold was fined one shilling.\n\nIn adjusted terms, that's roughly £6–7 today — the most historically significant cheap fine in automotive history." },
      { text: "The same Motor Car Act that enabled Arnold's ticket also abolished the \"Red Flag Law\" — which previously required a person to walk ahead of every car carrying a red flag to warn horse traffic.\n\nThe red flag law had limited UK car speeds to 4 mph on roads and 2 mph in towns." },
      { text: "🔗 Source", isSource: true, source: { label: "RAC Foundation — History of Speed Limits", url: "https://www.racfoundation.org/motoring-faqs/road-safety" } },
    ],
  },

  {
    id: 76, category: "geography", account: ACCOUNTS.geography, time: "2h",
    text: "Mount Everest is not the farthest point from the Earth's center.\n\nThat title belongs to Mount Chimborazo in Ecuador — because Earth bulges at the equator. #geography",
    thread: [
      { text: "Earth is not a perfect sphere — it bulges at the equator due to its rotation, making the equatorial radius ~21 km longer than the polar radius." },
      { text: "Everest sits at 27°N latitude. Its peak is 8,849 m above sea level — but the center of the Earth is 6,382 km away.\n\nChimborazo sits almost exactly on the equator. Despite being only 6,263 m above sea level, its peak is 6,384 km from Earth's center — about 2 km farther than Everest's." },
      { text: "So if you define \"tallest\" as distance from Earth's center, Chimborazo wins.\n\nIf you define it as elevation above sea level, Everest wins.\n\nIf you define it as height from base to summit, Mauna Kea in Hawaii wins (most of it is underwater)." },
      { text: "🔗 Source", isSource: true, source: { label: "National Geographic — Is Everest Really the Tallest Mountain?", url: "https://www.nationalgeographic.com/science/article/is-mount-everest-really-the-tallest-mountain" } },
    ],
  },

  // ── POSTS 26–75 (continued mix) ──

  {
    id: 75, category: "trivia", account: ACCOUNTS.trivia, time: "3h",
    text: "Honey badgers have been documented escaping from enclosures by using tools — stacking objects, picking locks, and unlatching gates.\n\nZookeepers have called them \"the most fearless animals on Earth.\" #trivia",
    thread: [
      { text: "The Guinness World Records lists the honey badger as the \"world's most fearless creature.\"\n\nThey've been filmed attacking lions, buffalo, and cobras — animals many times their size — without hesitation." },
      { text: "In captivity, honey badgers have been documented:\n🔓 Unlatching gate bolts with rocks\n📦 Stacking objects to climb over walls\n🛠️ Using tools to escape enclosures repeatedly\n\nOne honey badger named Stoffel in South Africa became famous for escaping multiple \"escape-proof\" enclosures." },
      { text: "Their skin is so thick and loose that if grabbed by a predator, they can turn around inside their own skin and bite back.\n\nThey're also highly resistant to bee stings, snake venom, and porcupine quills." },
      { text: "🔗 Source", isSource: true, source: { label: "National Geographic — Honey Badger", url: "https://www.nationalgeographic.com/animals/mammals/facts/honey-badger" } },
    ],
  },

  {
    id: 74, category: "language", account: ACCOUNTS.language, time: "3h",
    text: "English is the only major language where the first-person pronoun \"I\" is capitalized.\n\nIn German, French, Spanish, Japanese — \"I\" is lowercase. Only English capitalizes it. #language",
    thread: [
      { text: "In Old English, the word for \"I\" was \"ic\" — lowercase, unremarkable.\n\nAs manuscripts were written more quickly in the Middle Ages, \"ic\" shortened to \"i\" — so small it was hard to read. Scribes began capitalizing it to make it visible." },
      { text: "The capitalization became standard in English by the 1300s — long before printing presses existed.\n\nOther languages had the same small-word problem and solved it differently (bold, double letters, etc.). Only English kept the capital." },
      { text: "Some linguists argue the capital \"I\" has subtly reinforced English speakers' sense of individual importance.\n\nWhether the grammar shapes the culture or the culture shaped the grammar — it's a chicken-and-egg question linguists still debate." },
      { text: "🔗 Source", isSource: true, source: { label: "New York Times — The Capital I", url: "https://www.nytimes.com/2008/08/03/magazine/03wwln-essay-t.html" } },
    ],
  },

  {
    id: 73, category: "science", account: ACCOUNTS.science, time: "4h",
    text: "The human eye can detect a single photon of light in complete darkness.\n\nYour visual system is sensitive enough to theoretically see a candle flame 30 miles away on a clear night. #science",
    thread: [
      { text: "Rod cells in the human retina are so sensitive that a single photon can trigger a detectable signal.\n\nA 2016 study at Rockefeller University confirmed this — participants could correctly identify single-photon flashes at statistically significant rates." },
      { text: "In perfect darkness, fully adapted human eyes can detect a candle flame from approximately 48 km (30 miles) away — assuming a clear, unobstructed line of sight." },
      { text: "The problem is neural noise. Your brain receives constant random signals from your visual system, so even if a single photon hits, the brain often filters it as background noise.\n\nYou're often seeing things you don't consciously register." },
      { text: "🔗 Source", isSource: true, source: { label: "Nature Communications — Direct detection of single photons by humans", url: "https://www.nature.com/articles/ncomms12172" } },
    ],
  },

  {
    id: 72, category: "history", account: ACCOUNTS.history, time: "4h",
    text: "Before alarm clocks, people in Britain paid \"knocker-uppers\" to wake them up.\n\nThey walked the streets tapping on bedroom windows with long sticks until the 1970s. #history",
    thread: [
      { text: "Knocker-uppers were a real profession in industrial Britain. They were typically paid a few pennies a week per client to ensure factory workers woke up for early shifts." },
      { text: "The tools varied: long bamboo poles, pea shooters, soft hammers on long sticks, or rattles on rods.\n\nThey were careful only to wake their client — not the whole street." },
      { text: "The obvious question: who woke the knocker-upper?\n\nMost woke naturally from years of habit, or were woken by other knocker-uppers.\n\nThe profession persisted in some British towns until the mid-1970s, even as alarm clocks were widely available — many workers simply didn't trust clocks." },
      { text: "🔗 Source", isSource: true, source: { label: "BBC — Britain's Knocker-Uppers", url: "https://www.bbc.co.uk/news/uk-england-22751752" } },
    ],
  },

  {
    id: 71, category: "geography", account: ACCOUNTS.geography, time: "5h",
    text: "The Sahara Desert is smaller than you think — and it's actually growing.\n\nIn the 1970s, the Sahara expanded southward by about 8% due to climate change and land use. #geography",
    thread: [
      { text: "The Sahara covers about 9.2 million km² — roughly the size of the US. But it hasn't always been this large, and it's not static." },
      { text: "Around 6,000–11,000 years ago, the Sahara was green — a period called the African Humid Period or \"Green Sahara.\"\n\nPetroglyph drawings from that era show hippos, crocodiles, and cattle in areas that are now pure desert." },
      { text: "Today, the Sahara's southern edge is advancing due to a combination of reduced rainfall (climate change) and overgrazing.\n\nHowever, some parts of the Sahara are also re-greening due to increased rainfall patterns — the situation is complex and regional." },
      { text: "🔗 Source", isSource: true, source: { label: "Journal of Climate — Expansion of the Sahara Desert", url: "https://journals.ametsoc.org/view/journals/clim/31/19/jcli-d-17-0187.1.xml" } },
    ],
  },

  {
    id: 70, category: "trivia", account: ACCOUNTS.trivia, time: "5h",
    text: "The word \"quiz\" appeared suddenly in Dublin in 1791 and nobody knows where it came from.\n\nLegend says a theater owner bet he could introduce a new word into the language overnight. He won. #trivia",
    thread: [
      { text: "The story goes that Richard Daly, a Dublin theater owner, bet he could introduce a new, meaningless word into the language within 48 hours.\n\nHe hired street urchins to chalk the word \"quiz\" on walls all over Dublin overnight." },
      { text: "By morning, Dubliners were puzzling over the strange word — asking each other what it meant.\n\nWithin days, \"quiz\" had entered common speech to mean \"a strange thing\" or \"to question/tease.\"" },
      { text: "Whether this story is true or not, the word's origin genuinely is unknown.\n\nThe Oxford English Dictionary lists its etymology as \"origin unknown\" and its first known use as 1782 — no earlier source has been found." },
      { text: "🔗 Source", isSource: true, source: { label: "Oxford English Dictionary — quiz", url: "https://www.oed.com/dictionary/quiz_n1" } },
    ],
  },

  {
    id: 69, category: "science", account: ACCOUNTS.science, time: "6h",
    text: "Time moves faster at your head than at your feet.\n\nGravity warps time — the stronger the gravitational field, the slower time passes. Your feet are in slightly stronger gravity than your head. #science",
    thread: [
      { text: "Einstein's general relativity predicts that time passes more slowly in stronger gravitational fields.\n\nThis isn't just theory — atomic clocks on mountain peaks run measurably faster than clocks at sea level." },
      { text: "The difference between your head and feet (assuming you're ~2m tall) is about 90 nanoseconds per year.\n\nTiny — but real, measurable, and confirmed by experiment." },
      { text: "GPS satellites account for this effect. They orbit ~20,000 km up where gravity is weaker — their clocks run faster by about 45 microseconds per day.\n\nIf GPS didn't correct for relativity, navigation errors would accumulate at ~10 km per day. Your maps would be useless within weeks." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA — GPS and Relativity", url: "https://www.nasa.gov/directorates/somd/space-communications-navigation-program/gps-and-relativity/" } },
    ],
  },

  {
    id: 68, category: "history", account: ACCOUNTS.history, time: "6h",
    text: "The fax machine was invented before the telephone.\n\nAlexander Bain patented a rudimentary fax machine in 1843. Bell invented the telephone in 1876 — 33 years later. #history",
    thread: [
      { text: "Alexander Bain, a Scottish clockmaker, patented the \"Electric Printing Telegraph\" in 1843 — a device that could transmit images over telegraph wires by scanning them line by line." },
      { text: "Early fax machines used a synchronized pendulum system to scan and reproduce images.\n\nThey were slow, expensive, and required perfect synchronization between sender and receiver — but they worked." },
      { text: "Commercial fax services launched in France in 1865 — 11 years before Bell's telephone.\n\nThe fact that fax technology preceded voice communication is one of the most counterintuitive facts in the history of telecommunications." },
      { text: "🔗 Source", isSource: true, source: { label: "IEEE — History of the Fax Machine", url: "https://ethw.org/Fax_Machines" } },
    ],
  },

  {
    id: 67, category: "language", account: ACCOUNTS.language, time: "7h",
    text: "Sign languages are fully independent languages — not visual versions of spoken languages.\n\nAmerican Sign Language (ASL) is more closely related to French Sign Language than to British Sign Language. #language",
    thread: [
      { text: "ASL developed from French Sign Language (LSF) brought to the US by Laurent Clerc in 1817.\n\nBritish Sign Language (BSL) developed independently — and ASL and BSL are mutually unintelligible, the same way English and French are." },
      { text: "Sign languages have their own grammar, syntax, and idioms — completely distinct from the spoken language of the surrounding culture.\n\nJapanese Sign Language is not related to ASL despite Japan's modern connections with the US." },
      { text: "Sign languages also have dialects and accents. A Deaf signer from New York signs differently from one in Texas — and both can often tell immediately where the other is from." },
      { text: "🔗 Source", isSource: true, source: { label: "Gallaudet University — History of ASL", url: "https://gallaudet.edu/museum/history-through-deaf-eyes/language-of-signs/" } },
    ],
  },

  {
    id: 66, category: "geography", account: ACCOUNTS.geography, time: "7h",
    text: "There's a place in the Pacific Ocean so remote that the nearest humans are usually astronauts on the International Space Station.\n\nIt's called Point Nemo. #geography",
    thread: [
      { text: "Point Nemo — officially the oceanic pole of inaccessibility — is the point in the ocean farthest from any land.\n\nCoordinates: 48°52.6′S, 123°23.6′W. It's in the South Pacific, roughly equidistant from three uninhabited islands." },
      { text: "The nearest land is over 2,700 km away in any direction.\n\nWhen the ISS is in a typical orbit, it passes about 400 km above Point Nemo — making the astronauts aboard the nearest humans to the location." },
      { text: "Point Nemo is also used as a \"spacecraft cemetery\" — ESA, NASA, and other agencies direct de-orbiting spacecraft to crash into this remote area to minimize risk to human life." },
      { text: "🔗 Source", isSource: true, source: { label: "NOAA — Point Nemo", url: "https://oceanservice.noaa.gov/facts/nemo.html" } },
    ],
  },

  {
    id: 65, category: "trivia", account: ACCOUNTS.trivia, time: "8h",
    text: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.\n\nSame comparison as the iPhone one — but this one hits differently. #trivia",
    thread: [
      { text: "Great Pyramid completed: ~2560 BCE\nCleopatra born: 69 BCE\nMoon landing: 1969 CE\n\nCleopatra to Pyramid: ~2,491 years\nCleopatra to Moon landing: ~2,038 years" },
      { text: "The Great Pyramid was already as ancient to Cleopatra as Cleopatra is to us.\n\nShe lived in a world where the pyramids were already 2,500-year-old tourist attractions — Romans and Greeks visited them the same way we visit them today." },
      { text: "Julius Caesar and Cleopatra reportedly visited the Sphinx together. At that point, the Sphinx had already been buried up to its neck in sand for centuries — and had already been excavated and re-buried multiple times." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — Cleopatra and the Ancient World", url: "https://www.smithsonianmag.com/history/real-cleopatra-180968911/" } },
    ],
  },

  {
    id: 64, category: "science", account: ACCOUNTS.science, time: "8h",
    text: "There are more bacteria in your gut than cells in your entire body.\n\nApproximately 38 trillion bacteria vs. 30 trillion human cells. You are, by cell count, more microbe than human. #science",
    thread: [
      { text: "A 2016 paper in Cell recalculated the ratio more precisely: ~38 trillion bacteria vs. ~30 trillion human cells — a ratio of roughly 1.3:1.\n\nEarlier estimates put it at 10:1 bacteria to human cells, but that overstated it significantly." },
      { text: "Your gut microbiome weighs about 1–2 kg and contains somewhere between 500–1,000 species of bacteria.\n\nThese bacteria collectively have ~100x more unique genes than your human genome." },
      { text: "The microbiome influences:\n🧠 Mood and mental health (gut-brain axis)\n🏋️ Metabolism and weight\n🛡️ Immune system development\n😴 Sleep quality\n\nAntibiotics, diet, and stress all dramatically shift its composition." },
      { text: "🔗 Source", isSource: true, source: { label: "Cell — Revised Estimates for the Number of Human and Bacteria Cells in the Body", url: "https://www.cell.com/cell/fulltext/S0092-8674(16)30702-5" } },
    ],
  },

  {
    id: 63, category: "history", account: ACCOUNTS.history, time: "9h",
    text: "Abraham Lincoln was a licensed bartender.\n\nHe co-owned Berry and Lincoln, a tavern in New Salem, Illinois, in 1833. His liquor license still exists. #history",
    thread: [
      { text: "Before entering politics, Abraham Lincoln co-owned a general store and tavern called Berry and Lincoln with William F. Berry in New Salem, Illinois in 1833." },
      { text: "The liquor license, issued March 6, 1833, survives in archives. It authorized Lincoln and Berry to sell wine, whiskey, and beer.\n\nThe business struggled — Berry drank most of the inventory — and closed within a year." },
      { text: "Lincoln referred to the business's collapse as his \"national debt\" — a debt he spent years paying off after Berry died penniless.\n\nHe called his financial obligations from the period \"the national debt\" with characteristic dark humor." },
      { text: "🔗 Source", isSource: true, source: { label: "Abraham Lincoln Presidential Library — Early Career", url: "https://www.illinois.gov/alplm" } },
    ],
  },

  {
    id: 62, category: "geography", account: ACCOUNTS.geography, time: "9h",
    text: "The Amazon River discharges more water than the next seven largest rivers combined.\n\nAt its mouth, it pumps ~20% of all fresh water that flows into Earth's oceans. #geography",
    thread: [
      { text: "The Amazon's discharge rate averages about 209,000 m³/second — roughly 20% of total global river discharge into the ocean." },
      { text: "The Amazon's freshwater influence extends ~200 km into the Atlantic Ocean.\n\nSailors and early explorers noticed that the ocean water off the Brazilian coast was drinkable — hundreds of miles from land." },
      { text: "The Amazon basin holds ~10% of all species on Earth and processes so much CO₂ that it acts as a significant planetary carbon sink.\n\nDeforestation doesn't just destroy habitat — it reduces the planet's capacity to absorb the carbon driving climate change." },
      { text: "🔗 Source", isSource: true, source: { label: "USGS — Amazon River Facts", url: "https://water.usgs.gov/edu/rivers.html" } },
    ],
  },

  {
    id: 61, category: "language", account: ACCOUNTS.language, time: "10h",
    text: "The oldest surviving written sentence was found in 1929.\n\nIt's from 1400 BCE, inscribed on a Canaanite comb, and translates to: \"May this tusk root out the lice of the hair and the beard.\" #language",
    thread: [
      { text: "The inscription was found on an ivory louse comb discovered at Tel Lachish, Israel. The text is written in an early Canaanite alphabet — a direct ancestor of modern Hebrew, Arabic, Greek, and Latin scripts." },
      { text: "The sentence is remarkably mundane: a simple wish for a comb to do its job.\n\nThe world's oldest complete sentence isn't a prayer, a royal decree, or a philosophical statement — it's someone asking their comb to kill bugs." },
      { text: "The Canaanite script on the comb is one of the earliest examples of alphabetic writing ever found.\n\nOur entire Latin alphabet traces back through Greek → Phoenician → Canaanite writing systems like this one." },
      { text: "🔗 Source", isSource: true, source: { label: "Jerusalem Journal of Archaeology — Tel Lachish inscription", url: "https://www.journals.uchicago.edu/doi/10.1086/717053" } },
    ],
  },

  {
    id: 60, category: "trivia", account: ACCOUNTS.trivia, time: "10h",
    text: "Sharks are older than trees.\n\nSharks first appeared ~450 million years ago. Trees evolved ~350 million years ago. Sharks predate forests by 100 million years. #trivia",
    thread: [
      { text: "The first true trees (Archaeopteris) evolved about 350–360 million years ago, during the late Devonian period.\n\nSharks have been in the oceans since ~450 million years ago — well before land plants evolved into trees." },
      { text: "Sharks have survived all five major mass extinction events on Earth — including the one that wiped out the dinosaurs 66 million years ago.\n\nThey are, quite literally, one of the most successful survival machines evolution has ever produced." },
      { text: "In 400 million years, sharks haven't changed dramatically. The basic design — torpedo body, rows of replaceable teeth, electroreception — remains essentially intact.\n\nNature found an answer and stuck with it." },
      { text: "🔗 Source", isSource: true, source: { label: "Natural History Museum — Shark Evolution", url: "https://www.nhm.ac.uk/discover/how-sharks-have-survived-for-450-million-years.html" } },
    ],
  },

  {
    id: 59, category: "science", account: ACCOUNTS.science, time: "11h",
    text: "It's impossible to hum while holding your nose.\n\nHumming requires air to pass through your nasal cavity. Try it right now. #science",
    thread: [
      { text: "Humming is produced by vibrating your vocal cords while keeping your mouth closed.\n\nThe sound needs an exit — and the only one available when your mouth is closed is your nasal passage." },
      { text: "When you pinch your nose, you block the air outflow, which stops the vibration almost immediately.\n\nYou can try to continue, but you'll find you physically cannot sustain the hum." },
      { text: "This is also why your voice sounds different when you have a cold — nasal congestion changes the resonance chamber that shapes your hum and certain consonant sounds (m, n, ng)." },
      { text: "🔗 Source", isSource: true, source: { label: "Journal of Voice — Nasal resonance in phonation", url: "https://www.journalofvoice.com" } },
    ],
  },

  {
    id: 58, category: "history", account: ACCOUNTS.history, time: "11h",
    text: "The Colosseum in Rome had a retractable roof.\n\nA massive awning called the \"velarium\" was deployed by sailors to shade 50,000 spectators from the Roman sun. #history",
    thread: [
      { text: "The velarium (or velum) was a massive canvas awning system that could be extended over the Colosseum's open top.\n\nIt required a dedicated crew of about 1,000 Roman sailors — men skilled with rigging and ropes — to operate it." },
      { text: "The awning was supported by 240 wooden masts fitted along the top rim of the structure.\n\nContemporary Roman writers described the shadow it cast inside the arena and how it protected the crowds from sun and light rain." },
      { text: "Modern engineers have analyzed the Colosseum's design and are impressed by both its sophistication and its impracticality — deploying the velarium would have taken significant time and coordination.\n\nBut it existed, and it worked." },
      { text: "🔗 Source", isSource: true, source: { label: "Colosseum Rome — Architecture", url: "https://colosseo.it/en/area/the-colosseum/the-building/" } },
    ],
  },

  {
    id: 57, category: "geography", account: ACCOUNTS.geography, time: "12h",
    text: "Iceland is green, and Greenland is icy.\n\nThe naming was deliberate — Viking explorer Erik the Red named Greenland to attract settlers, while Iceland got its name from a grumpy early visitor. #geography",
    thread: [
      { text: "Erik the Red was exiled from Iceland for murder around 982 CE. He sailed west, found a large land, and spent three years exploring it.\n\nWhen he returned to Iceland, he named his discovery \"Greenland\" — specifically to entice settlers. It worked." },
      { text: "The southern tip of Greenland actually does have green coastal areas during summer — Erik wasn't lying, just... aggressively optimistic.\n\nIceland, meanwhile, gets its name from a Norse settler named Flóki Vilgerðarson who arrived in winter, was miserable, and named it accordingly." },
      { text: "Today:\n🇮🇸 Iceland: ~11% covered by glaciers, relatively mild due to the Gulf Stream\n🇬🇱 Greenland: ~80% covered by an ice sheet up to 3 km thick\n\nThe names have been wrong for over 1,000 years." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — Why is Greenland Called Greenland?", url: "https://www.smithsonianmag.com/history/why-is-greenland-called-greenland-1790043/" } },
    ],
  },

  {
    id: 56, category: "language", account: ACCOUNTS.language, time: "12h",
    text: "The most translated document in history is not the Bible.\n\nIt's the United Nations' Universal Declaration of Human Rights, translated into 500+ languages — including Klingon. #language",
    thread: [
      { text: "The UDHR was adopted by the UN General Assembly on 10 December 1948, following World War II and the Holocaust.\n\nWith 500+ translations, it holds the Guinness World Record for most translated document." },
      { text: "The Bible has been fully translated into ~700 languages with portions in 3,500+ — but no single text has been as systematically translated into every living language as the UDHR." },
      { text: "The Klingon translation was created by fans and submitted to the UN as an unofficial translation.\n\nOfficially unofficial — but it exists." },
      { text: "🔗 Source", isSource: true, source: { label: "UN — Universal Declaration of Human Rights translations", url: "https://www.ohchr.org/en/human-rights/universal-declaration/translations" } },
    ],
  },

  {
    id: 55, category: "trivia", account: ACCOUNTS.trivia, time: "13h",
    text: "Wombats produce cube-shaped poop.\n\nThey are the only known animals on Earth to do this. Scientists spent years figuring out how — the answer involves unusual intestines. #trivia",
    thread: [
      { text: "Wombat feces are distinctly cubic — approximately 2 cm per side — and wombats produce up to 100 of them per night.\n\nThey use them as territorial markers, stacking them on rocks and logs." },
      { text: "For years, biologists assumed wombats had square anuses (they don't).\n\nA 2018 study found the answer: the last ~8% of a wombat's intestine has varying elasticity — two stiff sides and two flexible sides — which gradually shapes the feces into cubes during the 2-week digestive process." },
      { text: "The cube shape is functionally important: cubes don't roll. Scent markers stay put.\n\nThe discovery won the 2019 Ig Nobel Prize in Physics and has since been studied for applications in manufacturing processes." },
      { text: "🔗 Source", isSource: true, source: { label: "Soft Matter — How the wombat produces cubical droppings", url: "https://pubs.rsc.org/en/content/articlelanding/2021/SM/D0SM01230K" } },
    ],
  },

  {
    id: 54, category: "history", account: ACCOUNTS.history, time: "13h",
    text: "Before refrigeration, New England shipped ice to India.\n\nFrederic Tudor built an empire by cutting frozen lake ice in Massachusetts and selling it in Calcutta — in the 1800s. #history",
    thread: [
      { text: "Frederic \"the Ice King\" Tudor began shipping ice from Walden Pond and other Massachusetts lakes to Caribbean islands in 1806. Everyone told him it was insane.\n\nThe ice mostly melted. He tried again. And again." },
      { text: "By the 1830s, Tudor had cracked the logistics: pack ice in sawdust, ship in insulated hulls, deliver quickly.\n\nHe was shipping ice to Havana, New Orleans, and eventually Calcutta — an 18,000 km journey across the equator." },
      { text: "By the 1850s, ice was a global commodity. New England ice houses employed thousands. Ice was delivered to homes like milk.\n\nThe ice trade collapsed rapidly in the 1880s when mechanical refrigeration was invented — one of history's fastest industry extinctions." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — The Ice King of Boston", url: "https://www.smithsonianmag.com/history/the-ice-king-of-boston-180950849/" } },
    ],
  },

  {
    id: 53, category: "science", account: ACCOUNTS.science, time: "14h",
    text: "The Sun's energy takes 100,000 years to travel from its core to its surface — then 8 minutes to reach Earth.\n\nThe light you see right now is older than modern humans. #science",
    thread: [
      { text: "Nuclear fusion in the Sun's core produces energy as gamma ray photons.\n\nBut the Sun's interior is so dense that photons bounce randomly from particle to particle in a \"random walk\" — this journey from core to surface takes an estimated 100,000 to 1 million years." },
      { text: "Once a photon reaches the surface, it streams through the vacuum of space at the speed of light.\n\nEarth is ~150 million km away — so it arrives 8 minutes and 20 seconds later." },
      { text: "Homo sapiens appeared approximately 300,000 years ago.\n\nThe sunlight hitting your face today began its journey in the Sun's core before modern humans existed — and spent 99.99% of its journey bumping around inside the Sun before the final 8-minute sprint." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA — How long does light travel from the Sun to Earth?", url: "https://spaceplace.nasa.gov/light-travel-time/en/" } },
    ],
  },

  {
    id: 52, category: "geography", account: ACCOUNTS.geography, time: "14h",
    text: "Norway and Russia share a tiny 195 km border.\n\nIt's one of the only places where NATO and Russia share a land boundary — and it's been remarkably peaceful for decades. #geography",
    thread: [
      { text: "The Norwegian-Russian border runs 195.7 km along the Pasvik River valley in the far north.\n\nThe town of Kirkenes, Norway sits just 15 km from the Russian border — closer to Moscow in some ways than to Oslo." },
      { text: "For most of the Cold War, this border was tense but incident-free.\n\nLocal cross-border communities maintained cultural ties — Russians and Norwegians intermarried, traded, and visited relatives across what was technically a NATO-Warsaw Pact frontier." },
      { text: "After Russia's invasion of Ukraine in 2022, the border dynamic shifted significantly. Norway tightened controls and increased military presence.\n\nBut historically, it stands as an example of two adversarial systems coexisting at close range." },
      { text: "🔗 Source", isSource: true, source: { label: "Norwegian Ministry of Foreign Affairs — Russia", url: "https://www.regjeringen.no/en/topics/foreign-affairs/norway-and-russia/id2008097/" } },
    ],
  },

  {
    id: 51, category: "language", account: ACCOUNTS.language, time: "15h",
    text: "The Pirahã language in the Amazon has no words for numbers — not even \"one\" or \"two.\"\n\nSpeakers can't distinguish between 3 and 4 objects in tests. The concept simply doesn't exist. #language",
    thread: [
      { text: "The Pirahã people of the Amazon have been studied extensively by linguist Daniel Everett, who lived with them for decades.\n\nTheir language has no number words — not even words meaning \"few\" or \"many.\" Only approximations like \"some\" and \"more.\"" },
      { text: "In cognitive tests, Pirahã speakers struggle to perform tasks that require tracking exact quantities.\n\nThis is the strongest real-world evidence for linguistic relativity: that the language you speak can limit certain kinds of thinking." },
      { text: "Pirahã is also unusual in other ways:\n❌ No color terms\n❌ No perfect tense\n❌ No numbers\n❌ No mythology or creation stories\n\nEverett argues it reflects a cultural value of direct, immediate experience — abstract concepts that can't be verified by personal observation are simply not expressed." },
      { text: "🔗 Source", isSource: true, source: { label: "Cultural Constraints on Grammar — Daniel Everett (Current Anthropology)", url: "https://www.journals.uchicago.edu/doi/10.1086/431525" } },
    ],
  },

  {
    id: 50, category: "trivia", account: ACCOUNTS.trivia, time: "15h",
    text: "Cleopatra is closer to us in time than she is to the construction of the Great Pyramid.\n\n(Same concept, different framing — because it still surprises people every time.) #trivia",
    thread: [
      { text: "This isn't a repeat — it's about framing.\n\nThe same mathematical fact lands differently depending on how you phrase it. This version emphasizes Cleopatra's temporal proximity to us, not the iPhone." },
      { text: "Cleopatra lived 2,000 years before us. The Pyramid was built 2,500 years before her.\n\nSo when you see Cleopatra as \"ancient history,\" remember she would have looked at the Pyramids the way we look at the Roman Empire — ancient, slightly mythological, a tourist attraction." },
      { text: "The Pyramids were already one of the Seven Wonders of the Ancient World when ancient Greeks made the list.\n\nAncient to the ancients. That's how old the Pyramids are." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — Timeline of Ancient Egypt", url: "https://www.smithsonianmag.com/history/a-visual-guide-to-ancient-egypt-130774006/" } },
    ],
  },

  // ── POSTS 26–49 ──

  {
    id: 49, category: "science", account: ACCOUNTS.science, time: "16h",
    text: "The universe is not silent — space is full of radio waves, X-rays, and gravitational waves.\n\nWe just can't hear any of it without instruments. If our ears could detect radio waves, the sky would roar. #science",
    thread: [
      { text: "Sound requires a medium to travel through — so space is silent in the traditional sense.\n\nBut electromagnetic radiation travels through the vacuum constantly: radio waves, microwaves, X-rays, gamma rays, infrared, ultraviolet." },
      { text: "The cosmic microwave background — the afterglow of the Big Bang — fills every cubic centimeter of space with microwave radiation.\n\nYou are bathed in the echo of the universe's birth right now." },
      { text: "Gravitational waves — ripples in spacetime itself — also pass through you constantly, most too weak to detect.\n\nIn 2015, LIGO detected gravitational waves from two merging black holes 1.3 billion light-years away. The entire Earth moved less than 1/1000th the width of a proton." },
      { text: "🔗 Source", isSource: true, source: { label: "LIGO — Gravitational Waves Detected", url: "https://www.ligo.caltech.edu/news/ligo20160211" } },
    ],
  },

  {
    id: 48, category: "history", account: ACCOUNTS.history, time: "16h",
    text: "The first computer bug was an actual bug.\n\nIn 1947, Grace Hopper's team found a moth stuck in Harvard's Mark II computer relay. They taped it in the logbook: \"First actual case of bug being found.\" #history",
    thread: [
      { text: "On September 9, 1947, operators at Harvard found a moth trapped in Relay #70 of the Mark II Aiken Relay Calculator, causing errors.\n\nThey removed it with tweezers and taped it into the operations logbook." },
      { text: "The note read: \"First actual case of bug being found.\"\n\nThe term \"bug\" for technical errors predates this — Thomas Edison used it in the 1870s — but this event popularized \"debugging\" as the term for fixing computer errors." },
      { text: "The original logbook with the taped moth is preserved at the Smithsonian National Museum of American History.\n\nGrace Hopper became one of the most important figures in computing history, co-creating COBOL." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — First Computer Bug", url: "https://americanhistory.si.edu/collections/search/object/nmah_334663" } },
    ],
  },

  {
    id: 47, category: "geography", account: ACCOUNTS.geography, time: "17h",
    text: "The Dead Sea is so salty you cannot sink in it.\n\nSalinity is ~34% — 10x saltier than ocean water. Your body is less dense than the water, so you float effortlessly. #geography",
    thread: [
      { text: "The Dead Sea sits 430 meters below sea level — the lowest point on Earth's surface.\n\nWater flows in from the Jordan River but has nowhere to go. It evaporates, leaving the salt behind." },
      { text: "With 34% salinity, the water is so dense that the human body floats at the surface without any effort. You literally cannot sink even if you try.\n\nThe downside: if you swallow the water or get it in your eyes, it burns intensely." },
      { text: "The Dead Sea is actually shrinking — its surface level drops about 1 meter per year due to water diversion and evaporation.\n\nIt has shrunk by a third since the 1960s. Scientists are worried about its long-term survival." },
      { text: "🔗 Source", isSource: true, source: { label: "National Geographic — Dead Sea", url: "https://www.nationalgeographic.com/environment/article/dead-sea" } },
    ],
  },

  {
    id: 46, category: "language", account: ACCOUNTS.language, time: "17h",
    text: "The word \"berserk\" comes from Norse warriors called Berserkers.\n\nThey fought in a trance-like fury, wearing bear skins, impervious to pain. \"Berserkr\" = bear-shirt. #language #history",
    thread: [
      { text: "Old Norse \"berserkr\" likely means \"bear-shirt\" (ber = bear, serkr = shirt/coat).\n\nBerserkers were Norse warriors who worked themselves into a battle frenzy, reportedly feeling no pain." },
      { text: "Ancient sources describe them foaming at the mouth, biting their shields, and having supernatural strength in battle.\n\nThe frenzy may have been induced by rhythmic drumming, self-hypnosis, or possibly psychoactive plants — historians still debate this." },
      { text: "Other Norse words in English:\n🌊 Maelstrom → mill-stream\n⚡ Thor → Thursday (Thor's day)\n🪨 Troll → the creature\n🗡️ Ransack → house + seek\n🏠 Window → wind-eye (wind + eye, an opening for wind)" },
      { text: "🔗 Source", isSource: true, source: { label: "Online Etymology Dictionary — berserk", url: "https://www.etymonline.com/word/berserk" } },
    ],
  },

  {
    id: 45, category: "trivia", account: ACCOUNTS.trivia, time: "18h",
    text: "Astronauts grow taller in space.\n\nWithout gravity compressing the spine, vertebrae expand and astronauts can grow up to 3% taller — about 5 cm for an average person. #trivia #science",
    thread: [
      { text: "On Earth, gravity compresses the cartilage discs between your vertebrae throughout the day.\n\nThis is why you're typically 1–2 cm taller in the morning than at night." },
      { text: "In space, with no gravity, the spine decompresses fully and stays that way. Over weeks, astronauts can gain up to 3% in height.\n\nThis reverses within days of returning to Earth's gravity." },
      { text: "The expansion can cause back pain and nerve issues — the suit and equipment on the ISS are designed to account for it.\n\nNASA measures astronauts before and after missions to track the changes." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA — Human Research Program", url: "https://www.nasa.gov/hrp/spine-changes-astronauts" } },
    ],
  },

  {
    id: 44, category: "history", account: ACCOUNTS.history, time: "18h",
    text: "The Great Wall of China is NOT visible from space with the naked eye.\n\nThis is one of the most persistent myths in history — NASA has confirmed it repeatedly. #history",
    thread: [
      { text: "The myth appears in encyclopedias as early as 1932, long before anyone had been to space.\n\nWhen astronauts actually got there, none could see it." },
      { text: "Chinese astronaut Yang Liwei specifically looked for the Wall during China's first crewed spaceflight in 2003.\n\nHe couldn't see it — and publicly corrected the myth." },
      { text: "The Wall is long but only about 5–8 meters wide — too narrow to resolve with the naked eye from orbit (~400 km up).\n\nYou can see highways and airports from the ISS — they're much wider. The Wall simply isn't." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA Earth Observatory — Great Wall of China", url: "https://earthobservatory.nasa.gov/images/9136/great-wall" } },
    ],
  },

  {
    id: 43, category: "geography", account: ACCOUNTS.geography, time: "19h",
    text: "Papua New Guinea has over 800 living languages — about 12% of all languages on Earth.\n\nIt has a total population of ~10 million people. That's one language per ~12,500 people. #geography",
    thread: [
      { text: "With 840+ languages, Papua New Guinea is the most linguistically diverse country on Earth.\n\nFor comparison, Europe has ~300 languages for 750 million people." },
      { text: "Why so many? PNG's mountainous terrain with deep valleys isolated communities for thousands of years.\n\nNeighboring villages separated by a single ridge often developed entirely separate languages — not dialects." },
      { text: "Tok Pisin — a creole English-based language — serves as the national lingua franca.\n\nBut many villages still communicate primarily in languages spoken by only a few hundred people, some never written down." },
      { text: "🔗 Source", isSource: true, source: { label: "Ethnologue — Languages of Papua New Guinea", url: "https://www.ethnologue.com/country/PG/" } },
    ],
  },

  {
    id: 42, category: "science", account: ACCOUNTS.science, time: "19h",
    text: "Every atom in your body (except hydrogen) was forged in a star.\n\nCarbon, oxygen, iron, calcium — all created in stellar cores and scattered when stars exploded. You are literally stardust. #science",
    thread: [
      { text: "Hydrogen was created in the Big Bang (~13.8 billion years ago). Everything heavier was produced in stars.\n\nSmall stars (like our Sun) produce carbon, nitrogen, oxygen.\nMassive stars produce iron, calcium, and heavier elements." },
      { text: "When stars exhaust their fuel, they explode in supernovas — scattering their heavy elements across the galaxy.\n\nThose atoms drift through space, clump into clouds, and eventually become new solar systems, planets, and life." },
      { text: "The iron in your blood was forged in a star that died before our Sun was born.\n\nThe calcium in your bones came from supernovas.\n\nYou are the universe looking at itself." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA — Origins of the Elements", url: "https://science.nasa.gov/universe/stars/the-origin-of-the-elements/" } },
    ],
  },

  {
    id: 41, category: "language", account: ACCOUNTS.language, time: "20h",
    text: "\"Silhouette\" is named after a French finance minister who was so stingy, his name became synonymous with cheap things.\n\nÉtienne de Silhouette, 1759. #language #history",
    thread: [
      { text: "Étienne de Silhouette was appointed France's Controller-General of Finances in 1759.\n\nHe immediately imposed severe austerity — cutting pensions, taxing the wealthy, reducing government spending." },
      { text: "He lasted only 8 months before being forced to resign.\n\nBut his name had already been attached to cheap shadow portraits — the least expensive alternative to painted portraits — as a mocking comparison to his stinginess." },
      { text: "\"À la Silhouette\" became a French phrase meaning \"on the cheap.\"\n\nThe shadow portraits lasted; the phrase generalized into the modern word for any backlit outline figure." },
      { text: "🔗 Source", isSource: true, source: { label: "Online Etymology Dictionary — silhouette", url: "https://www.etymonline.com/word/silhouette" } },
    ],
  },

  {
    id: 40, category: "trivia", account: ACCOUNTS.trivia, time: "20h",
    text: "The average cloud weighs about 500,000 kg.\n\nA typical cumulus cloud contains roughly half a million kilograms of water — suspended in the sky above your head. #trivia #science",
    thread: [
      { text: "A cumulus cloud roughly 1 km wide contains about 500,000 kg of water droplets.\n\nA large thunderstorm cloud (cumulonimbus) can weigh billions of kilograms." },
      { text: "Why doesn't it fall?\n\nThe water exists as tiny droplets — so small that air resistance and updrafts easily hold them aloft.\n\nIt only falls when droplets collide and merge into drops heavy enough to overcome upward air movement." },
      { text: "The equivalent weight comparison: a 500,000 kg cloud is about the weight of 100 full-grown elephants floating above you.\n\nSomething to think about next time you watch clouds drift overhead." },
      { text: "🔗 Source", isSource: true, source: { label: "USGS — How much does a cloud weigh?", url: "https://www.usgs.gov/special-topics/water-science-school/science/precipitation-and-water-cycle" } },
    ],
  },

  {
    id: 39, category: "history", account: ACCOUNTS.history, time: "21h",
    text: "The potato saved Europe.\n\nIntroduced from the Americas in the 1500s, the potato tripled European calorie output, enabling population growth that drove the Industrial Revolution. #history",
    thread: [
      { text: "Before the potato, European peasants ate mostly grains — rye, barley, wheat. One failed harvest meant famine.\n\nThe potato, introduced from Peru via Spain in the 1570s, was different: higher yield per acre, more nutrients, and grew in poor soil where grain couldn't." },
      { text: "By the 18th century, the potato was the primary food in Ireland, Germany, Poland, and Russia.\n\nHistorians estimate the potato's adoption contributed to a 25% increase in European population between 1700 and 1900." },
      { text: "The Irish Famine (1845–1852) shows both the potato's importance and the danger of dependency.\n\nOver 1 million died and 1 million emigrated when potato blight destroyed successive harvests — because the entire Irish poor had come to depend on a single crop." },
      { text: "🔗 Source", isSource: true, source: { label: "American Economic Review — How the Potato Changed the World", url: "https://www.aeaweb.org/articles?id=10.1257/aer.101.5.1diff" } },
    ],
  },

  {
    id: 38, category: "science", account: ACCOUNTS.science, time: "21h",
    text: "The largest living organism on Earth is a fungus.\n\nArmillaria ostoyae in Oregon's Blue Mountains spans ~9.6 km² — and is estimated to be 8,000 years old. #science",
    thread: [
      { text: "The \"Humongous Fungus\" of Oregon was discovered in 1998 when researchers noticed unusually widespread tree die-off.\n\nDNA testing revealed it was a single organism — Armillaria ostoyae — spreading through the soil for thousands of years." },
      { text: "Most of the fungus is underground — a network of mycelium (root-like threads) threading through the soil between trees.\n\nThe mushrooms that appear above ground are just the fruiting bodies — the visible tips of an enormous invisible organism." },
      { text: "The fungus survives by parasitizing trees, extracting nutrients from their roots.\n\nAt 8,000+ years old, it has been continuously growing since before the first Egyptian dynasties." },
      { text: "🔗 Source", isSource: true, source: { label: "Nature — Humongous Fungus", url: "https://www.nature.com/articles/scientificamerican1992-106" } },
    ],
  },

  {
    id: 37, category: "geography", account: ACCOUNTS.geography, time: "22h",
    text: "Mongolia has more horses than people.\n\nPopulation: ~3.5 million people. Horses: ~4.3 million. Mongolians still use horses as a primary mode of transport in rural areas. #geography",
    thread: [
      { text: "Mongolia has the world's highest horse-to-human ratio.\n\nThe nomadic culture is deeply tied to horses — many rural Mongolians learn to ride before they learn to walk." },
      { text: "Mongolian horses are a distinct ancient breed — smaller, stockier, and hardier than most modern breeds.\n\nThey can survive temperatures from -40°C in winter to +40°C in summer, digging through snow to find grass." },
      { text: "Genghis Khan's conquests — the largest contiguous empire in history — were built almost entirely on Mongolian horse logistics.\n\nMongol armies could cover 100+ km per day, an unprecedented speed in the 13th century." },
      { text: "🔗 Source", isSource: true, source: { label: "FAO — Mongolia Livestock", url: "https://www.fao.org/mongolia/fao-in-mongolia/mongolia-at-a-glance/en/" } },
    ],
  },

  {
    id: 36, category: "trivia", account: ACCOUNTS.trivia, time: "22h",
    text: "A group of flamingos is called a \"flamboyance.\"\n\nOther exceptional animal group names: a murder of crows, a parliament of owls, an impossibility of giraffes. #trivia",
    thread: [
      { text: "Collective nouns in English are often poetic, sometimes absurd:\n\n🦩 Flamingos → flamboyance\n🦉 Owls → parliament\n🦒 Giraffes → tower (or impossibility)\n🐦‍⬛ Crows → murder\n🐈 Cats → clowder" },
      { text: "Many of these came from 15th-century hunting manuals — particularly \"The Book of Saint Albans\" (1486), which listed hundreds of collective nouns for animals and people.\n\nSome were practical, some were clearly invented for entertainment." },
      { text: "More unusual ones:\n🐊 Crocodiles → a bask\n🦥 Sloths → a bed\n🦦 Otters → a romp\n🦜 Parrots → a pandemonium\n🦔 Hedgehogs → an array" },
      { text: "🔗 Source", isSource: true, source: { label: "Oxford Languages — Collective Nouns", url: "https://languages.oup.com/google-dictionary-en/" } },
    ],
  },

  {
    id: 35, category: "language", account: ACCOUNTS.language, time: "23h",
    text: "The English word \"nice\" used to mean stupid.\n\nIn the 13th century, \"nice\" meant foolish. By the 15th it meant wanton. By the 18th it meant precise. Then pleasant. Words drift. #language",
    thread: [
      { text: "\"Nice\" comes from Latin \"nescius\" (ignorant) → Old French \"nice\" (foolish, simple) → Middle English \"nice\" (foolish, wanton, lascivious).\n\nFor 300 years, calling someone \"nice\" was an insult." },
      { text: "The word gradually softened through a process called \"amelioration\" — where word meanings shift from negative to positive over time.\n\nOther ameliorated words: \"knight\" (once meant servant), \"pretty\" (once meant cunning)." },
      { text: "The opposite process — \"pejoration\" — also happens. \"Silly\" once meant blessed/happy. \"Awful\" once meant deserving of awe (the same root as awesome).\n\nLanguage drift is constant and mostly unconscious." },
      { text: "🔗 Source", isSource: true, source: { label: "Online Etymology Dictionary — nice", url: "https://www.etymonline.com/word/nice" } },
    ],
  },

  {
    id: 34, category: "science", account: ACCOUNTS.science, time: "23h",
    text: "Water has memory — but not in the mystical sense.\n\nWater molecules form hydrogen bond networks that rearrange in picoseconds. Real memory lasts 50 femtoseconds. #science",
    thread: [
      { text: "Water molecules are constantly forming and breaking hydrogen bonds with neighbors — about 10¹² times per second.\n\nThe network of bonds at any given moment is a kind of \"structure\" — but it lasts only femtoseconds (10⁻¹⁵ seconds)." },
      { text: "The \"water memory\" claims in alternative medicine — that water retains imprints of substances dissolved in it — are not supported by physics.\n\nAny structural \"memory\" is erased and re-formed trillions of times per second." },
      { text: "That said, water's real properties are genuinely strange:\n❄️ Ice floats (most solids sink in their liquid)\n💧 Water expands when frozen\n🌡️ Unusually high heat capacity\n🔗 High surface tension\n\nReal water is weird enough without adding myths." },
      { text: "🔗 Source", isSource: true, source: { label: "Science — Femtosecond Studies of Water Structure", url: "https://www.science.org/doi/10.1126/science.1116213" } },
    ],
  },

  {
    id: 33, category: "history", account: ACCOUNTS.history, time: "1d",
    text: "The inventor of the lobotomy won a Nobel Prize.\n\nEgas Moniz received the 1949 Nobel Prize in Medicine for the prefrontal lobotomy — a procedure later recognized as deeply harmful. #history",
    thread: [
      { text: "Egas Moniz developed the prefrontal lobotomy in 1935 — severing connections to the frontal lobe to treat severe mental illness.\n\nHe received the Nobel Prize in Physiology or Medicine in 1949." },
      { text: "Between 1936 and the mid-1950s, over 40,000 lobotomies were performed in the US alone.\n\nWalter Freeman popularized a brutal \"ice pick\" version performed through the eye socket, often with no anesthesia, on an outpatient basis." },
      { text: "Long-term outcomes were often severe: personality destruction, regression, loss of autonomy.\n\nThe procedure fell out of use in the late 1950s as antipsychotic medications became available.\n\nMoniz's Nobel Prize has never been revoked." },
      { text: "🔗 Source", isSource: true, source: { label: "Nobel Prize — Egas Moniz", url: "https://www.nobelprize.org/prizes/medicine/1949/moniz/facts/" } },
    ],
  },

  {
    id: 32, category: "geography", account: ACCOUNTS.geography, time: "1d",
    text: "The Maldives is the world's flattest country — and one of the first that will disappear due to sea level rise.\n\nAverage elevation: 1.5 meters above sea level. #geography",
    thread: [
      { text: "The Maldives consists of 1,192 coral islands, none higher than 2.4 meters above sea level.\n\nWith an average elevation of 1.5 meters, it is the flattest nation on Earth." },
      { text: "Scientists estimate the Maldives could become uninhabitable by 2100 if sea levels rise as projected.\n\nThe government has taken extraordinary measures: purchasing land in India and Australia as potential relocation destinations." },
      { text: "Former President Mohamed Nasheed famously held an underwater cabinet meeting in 2009 — ministers in scuba gear, signing documents — to draw international attention to climate change.\n\nIt became one of the most photographed political acts of the decade." },
      { text: "🔗 Source", isSource: true, source: { label: "IPCC — Sea Level Rise and Small Island Developing States", url: "https://www.ipcc.ch/srocc/" } },
    ],
  },

  {
    id: 31, category: "trivia", account: ACCOUNTS.trivia, time: "1d",
    text: "Sloths move so slowly that algae grows on their fur.\n\nThis isn't a problem — the algae provides camouflage and the sloth eats it as a dietary supplement. #trivia #science",
    thread: [
      { text: "Two-toed sloths move at an average speed of ~0.27 km/h. Three-toed sloths are slightly faster — up to ~0.4 km/h when motivated.\n\nIn warm weather, they can cover about 125 meters per day." },
      { text: "The slow metabolism and limited movement mean sloths generate very little body heat.\n\nThis, combined with their coarse, grooved fur, creates an ideal environment for algae — specifically Trichophilus and Cyanoderma species." },
      { text: "The algae turns the fur greenish, providing camouflage in the forest canopy.\n\nSloths have also been observed licking their own fur — likely consuming the algae for additional nutrition.\n\nIt's a mutualistic relationship: the algae gets a host; the sloth gets camouflage and food." },
      { text: "🔗 Source", isSource: true, source: { label: "Biology Letters — Sloth hair as a specialized microbial ecosystem", url: "https://royalsocietypublishing.org/doi/10.1098/rsbl.2014.0602" } },
    ],
  },

  {
    id: 30, category: "language", account: ACCOUNTS.language, time: "1d",
    text: "Welsh has a word — \"hiraeth\" — for a deep longing for home or something lost, tinged with grief.\n\nIt has no direct translation in any other language. #language",
    thread: [
      { text: "\"Hiraeth\" (pronounced heer-eyeth) combines homesickness, grief, and a longing for something that may never have existed or can never be recaptured.\n\nIt's tied to a Welsh sense of cultural identity and relationship with the land." },
      { text: "Similar untranslatable longing words in other cultures:\n\n🇵🇹 Saudade (Portuguese) — melancholic longing for absent things\n🇩🇪 Sehnsucht (German) — deep longing for something missed or imagined\n🇫🇮 Kaiho (Finnish) — longing combined with sadness\n\nBut each has its own specific texture and cultural weight." },
      { text: "\"Hiraeth\" is specifically Welsh — tied to the landscape of Wales, the Welsh language's precarious survival, and a sense of cultural displacement.\n\nIt's a word that carries an entire history inside it." },
      { text: "🔗 Source", isSource: true, source: { label: "BBC Wales — What is Hiraeth?", url: "https://www.bbc.co.uk/wales/arts/sites/themes/pages/hiraeth.shtml" } },
    ],
  },

  {
    id: 29, category: "science", account: ACCOUNTS.science, time: "1d",
    text: "The human brain uses about 20 watts of power — the same as a dim light bulb.\n\nYet it outperforms any computer on Earth in energy efficiency by a factor of millions. #science",
    thread: [
      { text: "The brain consumes ~20 watts — roughly 20% of the body's total energy despite being only 2% of its weight.\n\nThis makes it one of the most metabolically expensive organs per unit of mass." },
      { text: "For comparison, a modern AI data center running GPT-class models consumes megawatts — millions of times more energy to perform tasks the brain handles routinely.\n\nYour brain does this on roughly the same energy as keeping a nightlight on." },
      { text: "The brain's efficiency comes from its architecture: ~86 billion neurons connected by ~100 trillion synapses, processing information in massively parallel analog signals.\n\nDigital computers are fast but energy-inefficient by comparison." },
      { text: "🔗 Source", isSource: true, source: { label: "Scientific American — The Brain as Power Plant", url: "https://www.scientificamerican.com/article/thinking-hard-calories/" } },
    ],
  },

  {
    id: 28, category: "history", account: ACCOUNTS.history, time: "1d",
    text: "Ancient Egyptians shaved off their eyebrows when their cat died.\n\nThey also mummified cats and brought them offerings. Killing a cat — even accidentally — was punishable by death. #history",
    thread: [
      { text: "Cats were sacred in ancient Egypt, associated with the goddess Bastet.\n\nHerodotus recorded that when a house cat died, the entire household shaved their eyebrows as a sign of mourning." },
      { text: "Cats were mummified and buried with their owners or in dedicated cat cemeteries.\n\nIn 1888, an Egyptian farmer found a cache of ~80,000 cat mummies at Beni Hasan — an entire necropolis dedicated to cats." },
      { text: "A Roman soldier who accidentally killed a cat in Egypt was killed by a mob — despite the outrage of the Roman government.\n\nDiodorus Siculus recorded the incident as an example of Egyptian devotion to their sacred animals." },
      { text: "🔗 Source", isSource: true, source: { label: "Ancient History Encyclopedia — Cats in Ancient Egypt", url: "https://www.worldhistory.org/article/466/cats-in-the-ancient-world/" } },
    ],
  },

  {
    id: 27, category: "trivia", account: ACCOUNTS.trivia, time: "1d",
    text: "The shortest English word containing all five vowels is \"eunoia\" — a medical term meaning beautiful thinking.\n\nIt's also the title of a remarkable poetry book. #trivia #language",
    thread: [
      { text: "\"Eunoia\" (yoo-NOY-ah) comes from Greek: eu (good/beautiful) + noia (mind/thought).\n\nIn medicine, it refers to a state of normal mental health. In rhetoric, it means goodwill between speaker and audience." },
      { text: "Canadian poet Christian Bök wrote a book called \"Eunoia\" (2001) with a unique constraint:\n\nEach chapter uses only one vowel.\n\nChapter A uses only words with the letter A. Chapter E uses only E. And so on." },
      { text: "It took Bök seven years to write.\n\nThe book became a bestselling poetry collection in Canada and won the Griffin Poetry Prize.\n\nIt's one of the most extreme examples of constrained writing ever published." },
      { text: "🔗 Source", isSource: true, source: { label: "Griffin Poetry Prize — Eunoia by Christian Bök", url: "https://www.griffinpoetryprize.com/awards-and-poets/shortlist/2002-shortlist/christian-bok/" } },
    ],
  },

  {
    id: 26, category: "geography", account: ACCOUNTS.geography, time: "1d",
    text: "New Zealand was the last large landmass on Earth to be settled by humans.\n\nMāori arrived around 1280 CE — meaning humans have lived there for less than 800 years. #geography #history",
    thread: [
      { text: "Humans have lived in Africa for ~300,000 years. In Australia for ~65,000 years. In the Americas for ~15,000–20,000 years.\n\nNew Zealand's first human settlers, the Māori, arrived around 1280 CE — making it one of the last places on Earth to be settled." },
      { text: "The Māori navigated to New Zealand from eastern Polynesia (likely the Cook Islands or Society Islands) using remarkable open-ocean navigation.\n\nThis was among the greatest feats of non-instrumental navigation in human history." },
      { text: "Europeans first reached New Zealand in 1642 (Abel Tasman) and 1769 (James Cook).\n\nAt that point, the Māori had been there for less than 500 years — extraordinarily recent in the context of human history." },
      { text: "🔗 Source", isSource: true, source: { label: "Science — Māori settlement of New Zealand", url: "https://www.science.org/doi/10.1126/science.1249389" } },
    ],
  },

  {
    id: 25, category: "geography", account: ACCOUNTS.geography, time: "1j",
    text: "Australia is wider than the Moon.\n\nAustralia's diameter: ~4,000 km. The Moon's diameter: ~3,474 km.\n\nA continent literally wider than Earth's only natural satellite. #geography",
    thread: [
      { text: "Australia spans about 4,000 km from east to west. The Moon's diameter is approximately 3,474 km.\n\nSo if you placed the Moon next to a map of Australia, it wouldn't even cover the full width." },
      { text: "This comparison only works for width — Australia's surface area (~7.7 million km²) is far smaller than the Moon's total surface area (~38 million km²).\n\nBut still. Wider. Than. The Moon." },
      { text: "For context, Australia also contains more time zones (5) than it does states (6 states, 2 territories).\n\nIt's a big place." },
      { text: "🔗 Source", isSource: true, source: { label: "NASA Moon Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html" } },
    ],
  },

  {
    id: 24, category: "geography", account: ACCOUNTS.geography, time: "3j",
    text: "Russia borders 14 countries — more than any other nation on Earth.\n\nAnd there are still parts of Russia that border nobody for thousands of kilometers. #geography",
    thread: [
      { text: "14 neighbors: Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, Mongolia, China, North Korea.\n\nTwo continents: Europe and Asia." },
      { text: "China also has 14 neighbors — tying Russia for the most in the world.\n\nFor comparison: Indonesia has 3 neighbors (Papua New Guinea, Timor-Leste, Malaysia)." },
      { text: "Russia's total land border: ~22,400 km.\n\nEarth's circumference is ~40,000 km. Russia's land borders alone are more than half of that." },
      { text: "🔗 Source", isSource: true, source: { label: "CIA World Factbook — Russia", url: "https://www.cia.gov/the-world-factbook/countries/russia/" } },
    ],
  },

  {
    id: 23, category: "geography", account: ACCOUNTS.geography, time: "6j",
    text: "There is a place on Earth where you can stand in four countries at once.\n\nFour Corners — where Utah, Colorado, New Mexico, and Arizona meet. #geography",
    thread: [
      { text: "The Four Corners Monument is the only point in the US where four states share a corner.\n\nYou can put each limb in a different state." },
      { text: "It's managed by the Navajo Nation. Visitors pay an entrance fee.\n\nOne of the most photographed but least scenic spots in the American West." },
      { text: "The monument is ~1,800 feet off from where modern GPS says it should be.\n\nBut since the wrong spot was surveyed first, it's legally correct — and stays." },
      { text: "🔗 Source", isSource: true, source: { label: "National Geographic — Four Corners", url: "https://www.nationalgeographic.com/travel/article/four-corners" } },
    ],
  },

  {
    id: 22, category: "geography", account: ACCOUNTS.geography, time: "10j",
    text: "Canada has more lakes than all other countries combined.\n\nAround 60% of the world's freshwater lakes are in Canada. #geography",
    thread: [
      { text: "Canada has approximately 2 million lakes covering about 9% of its total territory.\n\nAll other countries combined have roughly 40% of the world's lakes." },
      { text: "Why so many?\n\nThis is the legacy of the Ice Age. Around 10,000 years ago, glaciers carved depressions across North America that filled with meltwater." },
      { text: "Lake Superior — the largest — holds enough water to cover all of North America 30 cm deep." },
      { text: "🔗 Source", isSource: true, source: { label: "Natural Resources Canada — Lakes", url: "https://natural-resources.canada.ca/earth-sciences/geography/atlas-canada/selected-thematic-maps-canada/16784" } },
    ],
  },

  {
    id: 21, category: "geography", account: ACCOUNTS.geography, time: "14j",
    text: "Indonesia has 17,000+ islands — but only ~6,000 are inhabited.\n\nThe rest are empty. Waiting. #geography",
    thread: [
      { text: "Indonesia consists of approximately 17,508 islands. Only around 6,000 are permanently inhabited." },
      { text: "Five largest islands: Kalimantan, Sumatra, Papua, Sulawesi, and Java — which holds ~57% of Indonesia's population despite not being the largest." },
      { text: "Java is one of the most densely populated places on Earth — ~151 million people in ~132,000 km².\n\nUK has ~67 million people in roughly twice the area." },
      { text: "🔗 Source", isSource: true, source: { label: "Badan Informasi Geospasial Indonesia", url: "https://www.big.go.id" } },
    ],
  },

  {
    id: 20, category: "language", account: ACCOUNTS.language, time: "18j",
    text: "English has the word \"the\" but many major world languages have no direct equivalent.\n\nRussian, Japanese, Mandarin, Latin — none have a definite article. #language",
    thread: [
      { text: "In English, \"the\" marks specific reference: \"the cat\" (that particular cat we both know about). This is a definite article.\n\nMany major languages have no such concept." },
      { text: "Languages without definite articles:\n🇷🇺 Russian\n🇯🇵 Japanese\n🇨🇳 Mandarin\n🏛️ Latin\n🇮🇩 Indonesian" },
      { text: "For speakers of these languages, learning English \"the\" vs \"a\" is notoriously difficult — the distinction has to be built from scratch.\n\nIndonesian speakers have the same challenge." },
      { text: "🔗 Source", isSource: true, source: { label: "WALS Online — Definite Articles", url: "https://wals.info/feature/37A" } },
    ],
  },

  {
    id: 19, category: "language", account: ACCOUNTS.language, time: "22j",
    text: "The word \"salary\" comes from salt.\n\nRoman soldiers were sometimes paid in salt — or given money to buy salt. Latin \"salarium\" became our \"salary.\" #language #history",
    thread: [
      { text: "Salt was among the most valuable commodities in the ancient world — essential for food preservation before refrigeration." },
      { text: "\"Salarium argentum\" meant \"silver for salt.\" It became \"salarium\" → Old French \"salaire\" → English \"salary.\"" },
      { text: "This also gave us \"worth his salt\" (meaning competent) and the same word in nearly all Romance languages." },
      { text: "🔗 Source", isSource: true, source: { label: "Merriam-Webster — Origin of Salary", url: "https://www.merriam-webster.com/words-at-play/salary-origin-and-history" } },
    ],
  },

  {
    id: 18, category: "language", account: ACCOUNTS.language, time: "1h",
    text: "Some languages have no words for \"left\" and \"right.\"\n\nThe Guugu Yimithirr people in Australia use cardinal directions for everything — even describing body position. #language",
    thread: [
      { text: "In Guugu Yimithirr, there is no \"left\" or \"right\" relative to the body.\n\nThey always use absolute directions: north, south, east, west." },
      { text: "This means they always know their cardinal direction — their spatial orientation is constantly calibrated to the world, not to themselves." },
      { text: "Speakers of this language have significantly better spatial orientation than average.\n\nThis is strong evidence for linguistic relativity — the language you speak shapes how you think." },
      { text: "🔗 Source", isSource: true, source: { label: "Cognitive Science — Guugu Yimithirr Spatial Language", url: "https://www.science.org/doi/10.1126/science.1073979" } },
    ],
  },

  {
    id: 17, category: "language", account: ACCOUNTS.language, time: "1h",
    text: "\"Selamat\" in Indonesian comes from Arabic \"salama\" — meaning peace, safety, and wellbeing.\n\nOne word, two civilizations. #language #history",
    thread: [
      { text: "Thousands of Indonesian words were absorbed from Arabic through trade and Islam from the 13th century onward." },
      { text: "Common Arabic-origin words in Indonesian:\n📖 Kitab → kutub (book)\n🕐 Waktu → waqt (time)\n🌍 Dunia → dunya (world)\n💡 Ilmu → 'ilm (knowledge)" },
      { text: "The same Arabic roots entered European languages through a different route — Al-Andalus (Islamic Spain).\n\nOne origin, many paths." },
      { text: "🔗 Source", isSource: true, source: { label: "KBBI — Kamus Besar Bahasa Indonesia", url: "https://kbbi.kemdikbud.go.id" } },
    ],
  },

  {
    id: 16, category: "language", account: ACCOUNTS.language, time: "2h",
    text: "\"Checkmate\" in chess comes from Persian: \"Shah Mat\" — the king is helpless.\n\nChess traveled from India → Persia → Arab world → Europe. #language #history",
    thread: [
      { text: "Chess originated in India as Chaturanga (~6th century CE), spread to Persia as Chatrang/Shatranj, then to the Arab world, then to Europe." },
      { text: "\"Shah\" (king) became \"scacchi\" (Italian) → \"échecs\" (French) → \"chess\" (English).\n\nEvery time you say \"chess,\" you're speaking Persian." },
      { text: "The queen was originally a weak piece. She became the most powerful piece in Europe during the 15th century — possibly influenced by the era's powerful queens like Isabella of Castile." },
      { text: "🔗 Source", isSource: true, source: { label: "Britannica — History of Chess", url: "https://www.britannica.com/topic/chess/History" } },
    ],
  },

  {
    id: 15, category: "history", account: ACCOUNTS.history, time: "2h",
    text: "Woolworth Building in New York — completed 1913 — was paid for entirely in cash.\n\nF.W. Woolworth wrote a check for $13.5 million. No loans. #history",
    thread: [
      { text: "Frank Woolworth built his retail empire on fixed-price 5-and-10-cent stores.\n\nAt its peak, he had over 1,000 stores across the US." },
      { text: "At 241 meters, Woolworth Building was the world's tallest when completed in 1913 — a title it held for 7 years." },
      { text: "President Woodrow Wilson pressed a button in the White House to light 80,000 bulbs at the inauguration.\n\nThe building still stands and is still in use today." },
      { text: "🔗 Source", isSource: true, source: { label: "Woolworth Building — History", url: "https://woolworthbuilding.com/history/" } },
    ],
  },

  {
    id: 14, category: "history", account: ACCOUNTS.history, time: "3h",
    text: "The shortest war in history lasted 38–45 minutes.\n\nAnglo-Zanzibar War, August 27, 1896. Zanzibar surrendered before the British had finished breakfast. #history",
    thread: [
      { text: "The pro-British Sultan of Zanzibar died. His replacement, Khalid bin Barghash, took power without British approval.\n\nBritain gave him an ultimatum: abdicate by 09:00. He refused." },
      { text: "At 09:02, British warships opened fire on the palace.\n\nBy 09:40–09:45, the palace was on fire, Zanzibar's warship was sunk, and the flag came down." },
      { text: "Casualties: ~500 Zanzibaris dead or wounded. 1 British sailor lightly injured.\n\nKhalid fled to the German consulate and lived in exile for years." },
      { text: "🔗 Source", isSource: true, source: { label: "Britannica — Anglo-Zanzibar War", url: "https://www.britannica.com/event/Anglo-Zanzibar-War" } },
    ],
  },

  {
    id: 13, category: "history", account: ACCOUNTS.history, time: "4h",
    text: "The Statue of Liberty was originally brown-red — not green.\n\nThe iconic green color is oxidized copper that formed over 20–30 years after her 1886 dedication. #history",
    thread: [
      { text: "The Statue of Liberty is made of copper 2.4mm thick — about as thin as two stacked coins.\n\nWhen installed in 1886, it was shiny copper-brown." },
      { text: "Over 20–30 years, salt air caused oxidation, forming the blue-green patina (copper carbonate/sulfate/chloride) we see today." },
      { text: "In the early 1900s, New Yorkers debated painting it back to copper.\n\nThey decided to leave it — and the green became its identity." },
      { text: "🔗 Source", isSource: true, source: { label: "NPS — Statue of Liberty", url: "https://www.nps.gov/stli/learn/historyculture/the-statue-of-liberty.htm" } },
    ],
  },

  {
    id: 12, category: "history", account: ACCOUNTS.history, time: "5h",
    text: "In 1961, the US almost accidentally detonated a nuclear bomb over North Carolina.\n\nTwo of three safety mechanisms failed. One switch prevented catastrophe. #history",
    thread: [
      { text: "On January 23, 1961, a B-52 broke apart over Goldsboro, NC, releasing two Mark 39 nuclear bombs." },
      { text: "Bomb one: three of four safety mechanisms activated. Nearly a full detonation.\n\nBomb two: fell into a swamp. Parts are still buried 55 meters underground." },
      { text: "Declassified documents confirmed: only one low-voltage switch prevented a 4-megaton explosion — 260x the power of Hiroshima.\n\nWashington D.C. would have been in the blast radius." },
      { text: "🔗 Source", isSource: true, source: { label: "The Guardian — 1961 Goldsboro B-52 crash", url: "https://www.theguardian.com/world/2013/sep/20/usaf-nuclear-bomb-north-carolina-1961" } },
    ],
  },

  {
    id: 11, category: "history", account: ACCOUNTS.history, time: "6h",
    text: "A newspaper once reported Mark Twain's death. Twain was very much alive.\n\nHis response became one of the most famous quotes in history. #history",
    thread: [
      { text: "In 1897, a newspaper reported Twain was gravely ill or dead. Twain, then in London, heard about it and replied in writing." },
      { text: "His response: \"The reports of my death have been greatly exaggerated.\"\n\nShort, witty, and very Twain." },
      { text: "Twain was born in 1835 when Halley's Comet appeared. He said he expected to die with it.\n\nHalley's Comet returned April 1910. Twain died April 21, 1910 — one day after its closest approach." },
      { text: "🔗 Source", isSource: true, source: { label: "Mark Twain Project", url: "https://www.marktwainproject.org" } },
    ],
  },

  {
    id: 10, category: "history", account: ACCOUNTS.history, time: "8h",
    text: "The Berlin Wall fell because an official misread a memo.\n\nNovember 9, 1989 — a bureaucratic error ended the Cold War. #history",
    thread: [
      { text: "Günter Schabowski received a memo about new East German travel rules — but wasn't briefed on when they'd take effect." },
      { text: "At a live press conference, a reporter asked when the new rules began.\n\nSchabowski shuffled through his notes and said: \"Sofort, unverzüglich.\" — Immediately, without delay." },
      { text: "Thousands of East Germans rushed to checkpoints. Guards, receiving no orders, opened the gates.\n\nThe Wall came down that night. Germany reunified a year later." },
      { text: "🔗 Source", isSource: true, source: { label: "BBC — The night the Berlin Wall came down", url: "https://www.bbc.com/news/world-europe-50013048" } },
    ],
  },

  {
    id: 9, category: "trivia", account: ACCOUNTS.trivia, time: "9h",
    text: "Vinegar can dissolve a pearl.\n\nCleopatra allegedly bet Marc Antony she could host the most expensive dinner ever — then dissolved a pearl earring in vinegar and drank it. #trivia #history",
    thread: [
      { text: "Recorded by Pliny the Elder: Cleopatra bet she could throw the most expensive dinner party in history.\n\nShe dissolved one pearl earring worth 10 million sesterces in vinegar and drank it." },
      { text: "Is it chemically possible? Yes.\n\nPearls are calcium carbonate (CaCO₃), which reacts with acetic acid in vinegar:\nCaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂" },
      { text: "Whether she actually did it is debated — Pliny wrote it a century later.\n\nBut the chemistry is real." },
      { text: "🔗 Source", isSource: true, source: { label: "RSC — Cleopatra's pearl experiment", url: "https://www.rsc.org/education/eic/issues/2010july/cleopatradissolvedpearlexperiment.asp" } },
    ],
  },

  {
    id: 8, category: "trivia", account: ACCOUNTS.trivia, time: "10h",
    text: "Liechtenstein sent 80 soldiers to war and came back with 81.\n\nThey made a friend on the way home and never fought another war again. #trivia #history",
    thread: [
      { text: "In the 1866 Austro-Prussian War, Liechtenstein sent 80 men to guard Brenner Pass.\n\nNo battles occurred in their sector." },
      { text: "On the way home, they befriended an Austrian officer and brought him along.\n\n80 left. 81 returned." },
      { text: "Liechtenstein dissolved its military after this war. They haven't fought since.\n\nThey remain one of the few countries with no active military." },
      { text: "🔗 Source", isSource: true, source: { label: "Britannica — Liechtenstein", url: "https://www.britannica.com/place/Liechtenstein" } },
    ],
  },

  {
    id: 7, category: "trivia", account: ACCOUNTS.trivia, time: "12h",
    text: "There are more possible chess games than atoms in the observable universe.\n\n~10¹²⁰ possible games. ~10⁸⁰ atoms. Chess is 10⁴⁰ times more complex. #trivia #science",
    thread: [
      { text: "This is called the Shannon Number, estimated by mathematician Claude Shannon in 1950.\n\nApproximate possible chess games: 10¹²⁰." },
      { text: "Atoms in observable universe: ~10⁸⁰.\n\nChess is 10,000,000,000,000,000,000,000,000,000,000,000,000,000 times more complex." },
      { text: "This is why chess can't be \"solved\" the way checkers was in 2007.\n\nDeep Blue beat Kasparov in 1997. AlphaZero is superhuman. But perfect chess is mathematically impossible to compute." },
      { text: "🔗 Source", isSource: true, source: { label: "Shannon (1950) — Programming a Computer for Playing Chess", url: "https://www.pi.infn.it/~carosi/chess/shannon.txt" } },
    ],
  },

  {
    id: 6, category: "history", account: ACCOUNTS.history, time: "1h",
    text: "Nintendo was founded in 1889 — not as a games company, but as a playing card manufacturer.\n\nThey made hanafuda cards for 80 years before touching video games. #history #trivia",
    thread: [
      { text: "Fusajiro Yamauchi founded Nintendo Koppai in Kyoto in 1889, producing hanafuda — flower-illustrated Japanese playing cards." },
      { text: "In between, Nintendo tried:\n🚕 Taxi company (1960s)\n🏨 Love hotels (1960s)\n🍜 Instant noodles (1960s)\n\nNone were successful." },
      { text: "They entered electronics in the late 1960s and released their first console (Color TV-Game) in 1977. NES followed in 1983." },
      { text: "🔗 Source", isSource: true, source: { label: "Nintendo Corporate History", url: "https://www.nintendo.co.jp/corporate/en/history/" } },
    ],
  },

  {
    id: 5, category: "trivia", account: ACCOUNTS.trivia, time: "1h",
    text: "Honey never spoils.\n\nA 3,000-year-old pot of honey was found in an Egyptian tomb and was still edible. #trivia",
    thread: [
      { text: "Archaeologists found honey in Egyptian tombs — including Tutankhamun's — still in good condition after thousands of years." },
      { text: "Why it never spoils:\n🍯 Very high sugar content → osmosis kills bacteria\n🔬 Low pH → hostile to microbes\n💧 Very low water content\n⚗️ Contains natural hydrogen peroxide" },
      { text: "Caveat: commercial honey may have added water, which can cause mold.\n\nPure, sealed honey? Lasts indefinitely." },
      { text: "🔗 Source", isSource: true, source: { label: "Smithsonian — Honey's Eternal Shelf Life", url: "https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/" } },
    ],
  },

  {
    id: 4, category: "science", account: ACCOUNTS.science, time: "12j",
    text: "Hot water can sometimes freeze faster than cold water.\n\nThis is called the Mpemba Effect — named after a Tanzanian student who discovered it making ice cream in 1963. #science",
    thread: [
      { text: "Erasto Mpemba noticed his hot ice cream mixture froze faster than his classmate's pre-cooled mixture." },
      { text: "He brought the question to physicist Denis Osborne, who investigated and published the findings in 1969." },
      { text: "The exact mechanism is still debated:\n❄️ Convection currents\n💧 Evaporation reducing volume\n🧪 Dissolved gases escaping\n\nResults aren't always reproducible — conditions matter." },
      { text: "🔗 Source", isSource: true, source: { label: "RSC — The Mpemba Effect", url: "https://www.rsc.org/publishing/journals/results/articledetails/?id=c3cp54431d" } },
    ],
  },

  {
    id: 3, category: "history", account: ACCOUNTS.history, time: "9j",
    text: "Oxford University is older than the Aztec Empire.\n\nTeaching at Oxford began ~1096 CE. The Aztec Empire wasn't founded until 1428 CE. #history",
    thread: [
      { text: "Oxford began teaching around 1096 CE, growing rapidly after 1167 when Henry II banned English students from studying in Paris." },
      { text: "The Aztec Triple Alliance formed in 1428 — more than 330 years after Oxford opened." },
      { text: "When the Aztecs fell in 1521, Oxford was already 425 years old.\n\nOxford is still operating today — 928+ years later." },
      { text: "🔗 Source", isSource: true, source: { label: "University of Oxford — Brief History", url: "https://www.ox.ac.uk/about/organisation/history" } },
    ],
  },

  {
    id: 2, category: "trivia", account: ACCOUNTS.trivia, time: "5j",
    text: "Cats don't meow at other cats.\n\nThey only meow at humans — a behavior they developed specifically to communicate with us over thousands of years. #trivia",
    thread: [
      { text: "Adult cats almost never meow at each other. The behavior is reserved for communicating with their mothers as kittens — and with humans." },
      { text: "Researchers believe cats discovered that humans respond to vocalizations, so they retained and developed this behavior specifically for us." },
      { text: "Each cat develops a unique \"dialect\" of meows tuned to its owner.\n\nYou may be the only one who fully understands your cat's vocabulary." },
      { text: "🔗 Source", isSource: true, source: { label: "National Geographic — Why Do Cats Meow at Humans?", url: "https://www.nationalgeographic.com/animals/article/cats-meow-communication-humans" } },
    ],
  },

  {
    id: 1, category: "trivia", account: ACCOUNTS.trivia, time: "2j",
    text: "Cleopatra lived closer to the iPhone than to the Great Pyramid.\n\nPyramid: ~2560 BCE. Cleopatra: 69 BCE. iPhone: 2007 CE.\n\nShe's closer to us than to the pyramids. #trivia #history",
    thread: [
      { text: "Cleopatra to Pyramid: ~2,491 years.\nCleopatra to iPhone: ~2,076 years.\n\nShe is chronologically closer to us." },
      { text: "The pyramids were already ancient to Cleopatra — as ancient as Cleopatra is to us today.\n\nRomans visited them as tourists, just as we do." },
      { text: "Julius Caesar and Cleopatra reportedly visited the Sphinx together. At that point it had already been buried and excavated multiple times over thousands of years." },
      { text: "🔗 Source", isSource: true, source: { label: "Live Science — How old are the Pyramids?", url: "https://www.livescience.com/33346-how-old-pyramids.html" } },
    ],
  },

];
