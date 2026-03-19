// ── DATA ──
// Untuk nambah post, tambah objek baru di paling atas array (paling baru = tampil pertama).
//
// category: "trivia" | "funfact" | "sejarah" | "bahasa" | "geografi"
//
// Struktur setiap post:
//   text    → tweet singkat yang muncul di feed
//   thread  → array lanjutan yang muncul di halaman detail
//             { text }          → tweet biasa
//             { text, isSource, source: { label, url } } → tweet penutup dengan link sumber

const ACCOUNTS = {
  trivia:   { name: "Trivia Harian",    handle: "@triviaharian",   emoji: "🌍", bg: "#1d9bf0" },
  funfact:  { name: "Fun Fact ID",      handle: "@funfactid",      emoji: "🐱", bg: "#17bf63" },
  sejarah:  { name: "Sejarah Singkat",  handle: "@sejarahsingkat", emoji: "📚", bg: "#794bc4" },
  sains:    { name: "Sains Kita",       handle: "@sainskita",      emoji: "🔬", bg: "#ff7043" },
  bahasa:   { name: "Bahasa & Kata",    handle: "@bahasakata",     emoji: "🗣️", bg: "#e0a800" },
  geografi: { name: "Peta Dunia",       handle: "@petadunia",      emoji: "🗺️", bg: "#0d9488" },
};

const posts = [

  // ── GEOGRAFI ──

  {
    id: 25,
    category: "geografi",
    account: ACCOUNTS.geografi,
    time: "1j",
    text: "Australia is wider than the Moon.\n\nAustralia's diameter: ~4,000 km. The Moon's diameter: ~3,474 km.\n\nA continent literally wider than Earth's only natural satellite. #geografi",
    thread: [
      { text: "Australia spans about 4,000 km from east to west. The Moon's diameter is approximately 3,474 km.\n\nSo if you placed the Moon next to a map of Australia, it wouldn't even cover the full width." },
      { text: "This comparison only works for width, of course — Australia's surface area (~7.7 million km²) is far smaller than the Moon's total surface area (~38 million km²).\n\nBut still. Wider. Than. The Moon." },
      { text: "For context, Australia also contains more time zones (5) than it does states (6 states, 2 territories).\n\nIt's a big place." },
      { text: "🔗 Sumber", isSource: true, source: { label: "NASA Moon Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html" } },
    ],
  },

  {
    id: 24,
    category: "geografi",
    account: ACCOUNTS.geografi,
    time: "3j",
    text: "Rusia berbatasan dengan 14 negara — lebih banyak dari negara manapun di dunia.\n\nDan tetap saja, masih ada bagian Rusia yang tidak berbatasan dengan siapapun selama ribuan kilometer. #geografi",
    thread: [
      { text: "14 negara tetangga Rusia:\nNorwegia, Finlandia, Estonia, Latvia, Lithuania, Polandia, Belarus, Ukraina, Georgia, Azerbaijan, Kazakhstan, Mongolia, Tiongkok, Korea Utara.\n\nDua benua: Eropa dan Asia." },
      { text: "Dibandingkan negara lain:\n🇨🇳 Tiongkok: 14 tetangga (sama)\n🇧🇷 Brasil: 10 tetangga\n🇮🇩 Indonesia: 3 tetangga (Papua Nugini, Timor Leste, Malaysia)\n\nRusia dan Tiongkok berbagi rekor." },
      { text: "Yang lebih mengejutkan: total perbatasan darat Rusia mencapai ~22.400 km.\n\nUntuk perbandingan, keliling Bumi sekitar 40.000 km. Perbatasan darat Rusia saja sudah lebih dari setengahnya." },
      { text: "🔗 Sumber", isSource: true, source: { label: "CIA World Factbook — Russia", url: "https://www.cia.gov/the-world-factbook/countries/russia/" } },
    ],
  },

  {
    id: 23,
    category: "geografi",
    account: ACCOUNTS.geografi,
    time: "6j",
    text: "There is a place on Earth where you can stand in four countries at once.\n\nIt's called Four Corners — the only point in the US where four states meet: Utah, Colorado, New Mexico, and Arizona. #geografi",
    thread: [
      { text: "The Four Corners Monument sits at the exact intersection of Utah, Colorado, New Mexico, and Arizona.\n\nYou can literally put each limb in a different state — or in this case, different jurisdiction." },
      { text: "It's managed by the Navajo Nation, since much of the surrounding land is tribal territory. Visitors pay an entrance fee to stand on the monument.\n\nIt's one of the most photographed yet least scenic spots in the American West." },
      { text: "Here's the twist: the monument is actually about 1,800 feet off from where it should be according to modern GPS calculations.\n\nBut legally? The wrong spot was officially surveyed first — so it stays." },
      { text: "🔗 Sumber", isSource: true, source: { label: "National Geographic — Four Corners", url: "https://www.nationalgeographic.com/travel/article/four-corners" } },
    ],
  },

  {
    id: 22,
    category: "geografi",
    account: ACCOUNTS.geografi,
    time: "10j",
    text: "Kanada punya lebih banyak danau dibanding seluruh negara di dunia digabungkan.\n\nSekitar 60% danau air tawar di dunia ada di Kanada. #geografi",
    thread: [
      { text: "Kanada memiliki sekitar 2 juta danau yang menutupi sekitar 9% total wilayahnya.\n\nUntuk perbandingan, seluruh negara lain di dunia digabungkan hanya memiliki sekitar 40% dari total danau dunia." },
      { text: "Kenapa sebanyak itu?\n\nIni adalah warisan dari Zaman Es. Sekitar 10.000 tahun lalu, gletser raksasa bergerak melintasi Amerika Utara, mengikis tanah dan meninggalkan cekungan-cekungan yang kemudian terisi air." },
      { text: "Danau terbesar di Kanada — dan salah satu terbesar di dunia — adalah Lake Superior yang berbatasan dengan AS.\n\nVolume airnya cukup untuk menenggelamkan seluruh benua Amerika Utara setinggi 30 cm." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Natural Resources Canada — Lakes", url: "https://natural-resources.canada.ca/earth-sciences/geography/atlas-canada/selected-thematic-maps-canada/16784" } },
    ],
  },

  {
    id: 21,
    category: "geografi",
    account: ACCOUNTS.geografi,
    time: "14j",
    text: "Indonesia adalah negara kepulauan terbesar di dunia — tapi lebih dari 17.000 pulaunya, hanya sekitar 6.000 yang berpenghuni.\n\nSisanya? Kosong. Menunggu. #geografi",
    thread: [
      { text: "Indonesia terdiri dari sekitar 17.508 pulau (angka resmi bervariasi tergantung definisi 'pulau').\n\nDari jumlah itu, hanya sekitar 6.000 yang dihuni manusia secara permanen." },
      { text: "Lima pulau terbesar:\n🏝️ Kalimantan (terbagi dengan Malaysia & Brunei)\n🏝️ Sumatra\n🏝️ Papua (terbagi dengan PNG)\n🏝️ Sulawesi\n🏝️ Jawa — rumah bagi ~57% populasi Indonesia meskipun bukan pulau terbesar." },
      { text: "Jawa adalah salah satu pulau terpadat di dunia dengan sekitar 151 juta jiwa di area ~132.000 km².\n\nSebagai perbandingan, Inggris Raya memiliki ~67 juta jiwa di area yang hampir dua kali lipatnya." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Badan Informasi Geospasial Indonesia", url: "https://www.big.go.id" } },
    ],
  },

  // ── BAHASA / LINGUISTIK ──

  {
    id: 20,
    category: "bahasa",
    account: ACCOUNTS.bahasa,
    time: "18j",
    text: "Bahasa Inggris punya kata \"the\" tapi banyak bahasa besar dunia tidak memiliki padanan langsungnya.\n\nBahasa Rusia, Jepang, Mandarin, Latin — semuanya tidak punya artikel definit. #bahasa",
    thread: [
      { text: "Dalam bahasa Inggris, \"the\" dipakai untuk merujuk sesuatu yang spesifik: \"the cat\" (kucing itu, yang kita tahu). Ini disebut artikel definit.\n\nTapi banyak bahasa besar dunia tidak punya konsep ini sama sekali." },
      { text: "Bahasa tanpa artikel definit:\n🇷🇺 Rusia: konteks menggantikan artikel\n🇯🇵 Jepang: urutan kata & partikel yang bekerja\n🇨🇳 Mandarin: tidak perlu — makna tersirat dari konteks\n🏛️ Latin: tidak ada, dan tidak dibutuhkan" },
      { text: "Bagi penutur bahasa-bahasa ini, belajar bahasa Inggris seringkali membingungkan justru di bagian \"the\" vs \"a\".\n\nKapan pakai \"a dog\" dan kapan pakai \"the dog\"? Ini intuisi yang harus dibangun dari nol." },
      { text: "Yang menarik: bahasa Indonesia juga tidak punya artikel definit.\n\n\"Kucing\" bisa berarti \"a cat\" atau \"the cat\" tergantung konteks. Dan kita baik-baik saja. #bahasa" },
      { text: "🔗 Sumber", isSource: true, source: { label: "Linguistic Typology — WALS Online: Definite Articles", url: "https://wals.info/feature/37A" } },
    ],
  },

  {
    id: 19,
    category: "bahasa",
    account: ACCOUNTS.bahasa,
    time: "22j",
    text: "The word \"salary\" comes from salt.\n\nRoman soldiers were sometimes paid in salt — or given money to buy salt. The Latin word \"salarium\" became our modern \"salary.\" #bahasa #sejarah",
    thread: [
      { text: "Salt was one of the most valuable commodities in the ancient world. It preserved food before refrigeration existed, making it essential for survival — especially for armies on long campaigns." },
      { text: "The Latin phrase was \"salarium argentum\" — silver for salt. Over time, it shortened to \"salarium,\" which became the Old French \"salaire,\" which became the English \"salary.\"\n\nYou're still being paid in salt. Symbolically." },
      { text: "This also gave us:\n🧂 \"Worth his salt\" → meaning competent, capable\n🧂 \"Salary\" in almost every Romance language: salaire (French), salario (Spanish/Italian)\n\nOne word, thousands of years of linguistic inheritance." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Merriam-Webster — Origin of Salary", url: "https://www.merriam-webster.com/words-at-play/salary-origin-and-history" } },
    ],
  },

  {
    id: 18,
    category: "bahasa",
    account: ACCOUNTS.bahasa,
    time: "1h",
    text: "Ada bahasa yang tidak punya kata untuk \"kiri\" dan \"kanan\".\n\nSuku Guugu Yimithirr di Australia menggunakan arah mata angin untuk segalanya — bahkan untuk menjelaskan posisi tubuh sendiri. #bahasa",
    thread: [
      { text: "Dalam bahasa Guugu Yimithirr, tidak ada konsep \"kanan\" atau \"kiri\" yang bersifat relatif terhadap tubuh.\n\nSebaliknya, mereka selalu menggunakan arah absolut: utara, selatan, timur, barat." },
      { text: "Artinya, kalimat seperti \"tangan kirimu\" tidak ada. Mereka akan berkata \"tangan baratmu\" — dan itu mengharuskan mereka tahu arah mata angin setiap saat, di mana pun mereka berada." },
      { text: "Yang luar biasa: penutur bahasa ini memiliki orientasi spasial yang jauh lebih akurat daripada rata-rata manusia.\n\nMereka tidak pernah \"tersesat\" secara spasial karena otak mereka dilatih sejak kecil untuk selalu tahu arah absolut." },
      { text: "Ini adalah salah satu contoh terkuat dari hipotesis Sapir-Whorf: bahwa bahasa yang kamu gunakan memengaruhi cara kamu berpikir dan memandang dunia. #bahasa #linguistik" },
      { text: "🔗 Sumber", isSource: true, source: { label: "Cognitive Science — Guugu Yimithirr Spatial Language (Levinson)", url: "https://www.science.org/doi/10.1126/science.1073979" } },
    ],
  },

  {
    id: 17,
    category: "bahasa",
    account: ACCOUNTS.bahasa,
    time: "1h",
    text: "\"Selamat\" dalam bahasa Indonesia artinya selamat — tapi kata ini asalnya dari bahasa Arab \"salama\" yang berarti damai, selamat, dan aman.\n\nSatu kata, dua peradaban. #bahasa #sejarah",
    thread: [
      { text: "Bahasa Indonesia menyerap ribuan kata dari bahasa Arab, terutama melalui jalur perdagangan dan penyebaran Islam sejak abad ke-13.\n\nKata-kata ini masuk ke Melayu, lalu menjadi bagian dari bahasa Indonesia modern." },
      { text: "Beberapa kata serapan Arab yang sering kita pakai tanpa sadar:\n\n📖 Kitab → kutub (buku)\n🕐 Waktu → waqt\n🌍 Dunia → dunya\n💡 Ilmu → 'ilm\n🏛️ Majelis → majlis\n📰 Kabar → khabar" },
      { text: "Yang menarik, bahasa Melayu/Indonesia menyerap kata Arab ini bersamaan dengan bahasa Spanyol, Portugis, dan bahasa Eropa lain menyerapnya lewat jalur yang berbeda — yaitu melalui Al-Andalus (Spanyol Islam)." },
      { text: "Contohnya: kata \"alkohol\" — diserap langsung dari Arab \"al-kuhl\" ke bahasa Eropa, dan juga masuk ke bahasa Indonesia via rute yang berbeda.\n\nSatu akar, ribuan cabang. #bahasa" },
      { text: "🔗 Sumber", isSource: true, source: { label: "Kamus Besar Bahasa Indonesia — Etimologi", url: "https://kbbi.kemdikbud.go.id" } },
    ],
  },

  {
    id: 16,
    category: "bahasa",
    account: ACCOUNTS.bahasa,
    time: "2h",
    text: "\"Checkmate\" in chess comes from the Persian phrase \"Shah Mat\" — meaning \"the king is dead\" or \"the king is helpless.\"\n\nChess itself traveled from India → Persia → Arab → Europe. #bahasa #sejarah",
    thread: [
      { text: "Chess originated in India around the 6th century CE as a game called Chaturanga. It spread to Persia, where it became Chatrang and later Shatranj." },
      { text: "The Persians gave us the word \"chess\" itself — from \"Shah\" (king), which became \"Scacchi\" in Italian, \"Échecs\" in French, and \"Chess\" in English.\n\nEvery time you say \"chess,\" you're speaking Persian." },
      { text: "When Arab traders brought the game to Europe through Spain and Sicily around the 9th–10th centuries, European languages adopted the Arabic terminology.\n\nThe rules evolved too — the queen, originally a weak piece, became the most powerful on the board during the 15th century in Europe." },
      { text: "🔗 Sumber", isSource: true, source: { label: "The Oxford Companion to Chess", url: "https://www.britannica.com/topic/chess/History" } },
    ],
  },

  // ── SEJARAH ──

  {
    id: 15,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "2h",
    text: "Woolworth Building di New York — selesai 1913 — dibangun tanpa pinjaman bank.\n\nF.W. Woolworth membayar $13.5 juta tunai dari kantong sendiri. Setara dengan sekitar $400 juta hari ini. #sejarah",
    thread: [
      { text: "Frank Winfield Woolworth membangun kerajaan bisnisnya dari konsep sederhana: toko serba ada dengan harga tetap 5 sen dan 10 sen.\n\nPada puncaknya, jaringan Woolworth memiliki lebih dari 1.000 toko di seluruh AS." },
      { text: "Woolworth Building setinggi 241 meter adalah gedung tertinggi di dunia saat selesai dibangun pada 1913, menyalip Metropolitan Life Tower.\n\nIa mempertahankan gelar itu selama tujuh tahun, hingga disalip oleh 40 Wall Street pada 1930." },
      { text: "Presiden Woodrow Wilson menekan tombol listrik dari Gedung Putih untuk menyalakan 80.000 lampu di gedung ini saat inaugurasi — sebuah pertunjukan teknologi yang luar biasa untuk zamannya.\n\nGedung ini masih berdiri hingga hari ini, dan masih digunakan." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Woolworth Building Official History", url: "https://woolworthbuilding.com/history/" } },
    ],
  },

  {
    id: 14,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "3h",
    text: "Perang terpendek dalam sejarah berlangsung hanya 38–45 menit.\n\nPerang Anglo-Zanzibar, 27 Agustus 1896. Zanzibar menyerah sebelum Inggris sempat sarapan siang. #sejarah",
    thread: [
      { text: "Latar belakang: Sultan Zanzibar yang pro-Inggris meninggal, dan penggantinya — Khalid bin Barghash — naik takhta tanpa persetujuan Inggris.\n\nInggris memberinya ultimatum: turun takhta sebelum jam 09:00 pagi. Ia menolak." },
      { text: "Pukul 09:02, kapal-kapal perang Inggris mulai menembaki istana.\n\nPukul 09:40-09:45, istana terbakar, kapal perang Zanzibar tenggelam, dan bendera Zanzibar diturunkan.\n\nTotal durasi: sekitar 38–45 menit." },
      { text: "Korban:\n💀 Zanzibar: ~500 orang tewas atau terluka\n💀 Inggris: 1 orang terluka ringan\n\nKhalid bin Barghash melarikan diri ke kedutaan Jerman dan hidup dalam pengasingan selama bertahun-tahun." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Encyclopaedia Britannica — Anglo-Zanzibar War", url: "https://www.britannica.com/event/Anglo-Zanzibar-War" } },
    ],
  },

  {
    id: 13,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "4h",
    text: "Patung Liberty awalnya berwarna cokelat kemerahan — bukan hijau.\n\nWarna hijaunya adalah hasil oksidasi tembaga selama 20–30 tahun setelah diresmikan pada 1886. #sejarah",
    thread: [
      { text: "Patung Liberty terbuat dari tembaga setebal 2.4 mm — tipis seperti dua koin yang ditumpuk.\n\nSaat pertama kali dipasang pada 1886, ia berwarna seperti tembaga baru: cokelat kemerahan mengkilap." },
      { text: "Selama 20–30 tahun, tembaga bereaksi dengan udara laut New York dan membentuk lapisan patina — campuran tembaga karbonat, sulfat, dan klorida.\n\nHasilnya: warna hijau-biru yang kita kenal sekarang." },
      { text: "Di awal 1900an, warga New York sempat berdebat apakah patung itu harus dicat ulang ke warna aslinya.\n\nAkhirnya diputuskan untuk dibiarkan — dan warna hijau itu kini menjadi ikon tersendiri." },
      { text: "Lapisan patina itu sebenarnya melindungi tembaga di bawahnya dari korosi lebih lanjut.\n\nJadi warna hijau bukan tanda kerusakan — ia adalah pelindung alami yang terbentuk selama puluhan tahun. #sains" },
      { text: "🔗 Sumber", isSource: true, source: { label: "National Park Service — Statue of Liberty", url: "https://www.nps.gov/stli/learn/historyculture/the-statue-of-liberty.htm" } },
    ],
  },

  {
    id: 12,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "5h",
    text: "Pada tahun 1962, AS hampir secara tidak sengaja meledakkan bom nuklir di atas North Carolina.\n\nDua dari tiga pengaman keselamatan gagal. Hanya satu saklar yang mencegah bencana. #sejarah",
    thread: [
      { text: "Pada 23 Januari 1961 — bukan 1962, koreksi — sebuah pesawat B-52 mengalami kerusakan struktural di atas Goldsboro, North Carolina, dan dua bom nuklir Mark 39 jatuh ke tanah." },
      { text: "Bom pertama: tiga dari empat mekanisme keselamatan aktif saat jatuh. Bom hampir meledak secara penuh.\n\nBom kedua: jatuh ke rawa, terkubur sedalam 55 meter. Sebagian komponennya tidak pernah berhasil diambil." },
      { text: "Dokumen yang dideklasifikasi pada 2013 oleh fisikawan nuklir AS mengonfirmasi: \"Hanya satu saklar rendah-tegangan yang mencegah ledakan.\"\n\nLedakan penuh akan memiliki yield 4 megaton — 260 kali lebih kuat dari bom Hiroshima." },
      { text: "Wilayah yang terdampak jika meledak: sebagian besar East Coast AS, termasuk Washington D.C., Baltimore, dan Philadelphia.\n\nSejarah berubah karena satu saklar. #sejarah" },
      { text: "🔗 Sumber", isSource: true, source: { label: "The Guardian — 1961 Goldsboro B-52 crash", url: "https://www.theguardian.com/world/2013/sep/20/usaf-nuclear-bomb-north-carolina-1961" } },
    ],
  },

  {
    id: 11,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "6h",
    text: "Surat kabar The New York Times pernah salah muat berita di halaman depan: mereka mengumumkan kematian Mark Twain — padahal Twain masih hidup.\n\nTwain merespons dengan tenang. #sejarah",
    thread: [
      { text: "Pada 1897, sebuah surat kabar (bukan NYT, tapi sumber campuran) melaporkan bahwa Mark Twain sakit parah atau meninggal.\n\nTwain, yang saat itu sedang berada di London, mengetahuinya dan memilih merespons secara tertulis." },
      { text: "Responsnya menjadi salah satu kutipan paling terkenal dalam sejarah:\n\n\"The reports of my death have been greatly exaggerated.\"\n\nSingkat, tajam, dan sangat khas Twain." },
      { text: "Mark Twain (Samuel Clemens) akhirnya meninggal pada 21 April 1910, pada usia 74 tahun.\n\nIa sendiri pernah berkata ia lahir bersama komet Halley (1835) dan ingin meninggal bersamanya juga.\n\nKomet Halley muncul pada April 1910. Twain meninggal sehari setelahnya." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Mark Twain Project — Letters and Autobiography", url: "https://www.marktwainproject.org" } },
    ],
  },

  {
    id: 10,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "8h",
    text: "Tembok Berlin runtuh bukan karena keputusan besar — tapi karena seorang pejabat salah membaca memo.\n\n9 November 1989. Kesalahan manusia yang mengubah sejarah. #sejarah",
    thread: [
      { text: "Pada 9 November 1989, pejabat Jerman Timur Günter Schabowski menghadiri konferensi pers.\n\nIa baru saja menerima memo tentang aturan perjalanan baru — tapi tidak sempat dibriefing dengan benar sebelum tampil di depan kamera." },
      { text: "Seorang wartawan bertanya: kapan aturan baru ini berlaku?\n\nSchabowski membaca memo itu, ragu sebentar, lalu menjawab:\n\n\"Sofort, unverzüglich.\" — Segera, tanpa penundaan.\n\nPadahal aturan itu belum seharusnya berlaku malam itu." },
      { text: "Siaran langsung itu menyebar ke seluruh Jerman Barat dan Timur dalam hitungan menit.\n\nRibuan warga Jerman Timur bergerak menuju pos pemeriksaan. Penjaga perbatasan — bingung dan tanpa instruksi jelas — akhirnya membuka gerbang." },
      { text: "Tembok Berlin mulai diruntuhkan malam itu juga. Reunifikasi Jerman menyusul setahun kemudian.\n\nSatu jawaban yang salah. Satu malam. Akhir dari Perang Dingin." },
      { text: "🔗 Sumber", isSource: true, source: { label: "BBC — The night the Berlin Wall came down", url: "https://www.bbc.com/news/world-europe-50013048" } },
    ],
  },

  // ── TRIVIA / FUNFACT (sisanya) ──

  {
    id: 9,
    category: "funfact",
    account: ACCOUNTS.funfact,
    time: "9h",
    text: "Vinegar can dissolve a pearl.\n\nCleopatra allegedly dissolved a pearl in wine vinegar and drank it to win a bet about throwing the most expensive dinner party in history. #funfact #sejarah",
    thread: [
      { text: "The story, recorded by Pliny the Elder in Natural History, goes like this:\n\nCleopatra bet Mark Antony she could host the most expensive meal ever. He accepted. She dissolved one of her pearl earrings — reportedly worth 10 million sesterces — into vinegar and drank it." },
      { text: "Is it chemically possible?\n\nYes. Pearls are made of calcium carbonate (CaCO₃), which reacts with acetic acid in vinegar.\n\nThe reaction: CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂\n\nA pearl dissolves slowly — but it does dissolve." },
      { text: "Whether Cleopatra actually did it? Historians are divided. Pliny wrote about it a century after the fact.\n\nBut the chemistry checks out. A pearl large enough would dissolve completely in strong vinegar given enough time." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Pliny the Elder, Natural History (Book IX) + RSC Chemical analysis", url: "https://www.rsc.org/education/eic/issues/2010july/cleopatradissolvedpearlexperiment.asp" } },
    ],
  },

  {
    id: 8,
    category: "trivia",
    account: ACCOUNTS.trivia,
    time: "10h",
    text: "Liechtenstein, negara kecil di Eropa, pernah mengirim 80 tentara ke perang dan pulang dengan 81.\n\nMereka berteman dengan musuh di jalan pulang. #trivia #sejarah",
    thread: [
      { text: "Pada Perang Austro-Prusia 1866, Liechtenstein mengirimkan kontingen militer kecil sebanyak 80 orang untuk mempertahankan Brenner Pass di perbatasan Austria-Italia." },
      { text: "Tidak ada pertempuran yang terjadi di sektor mereka.\n\nDalam perjalanan pulang, mereka bertemu dengan seorang perwira Austria dari wilayah lain dan mengajaknya bergabung. Ia setuju." },
      { text: "Hasilnya: Liechtenstein berangkat 80 orang, pulang 81 orang.\n\nPeperangan itu juga menjadi yang terakhir bagi Liechtenstein — sejak saat itu mereka membubarkan militernya dan menyatakan netralitas permanen." },
      { text: "Liechtenstein hingga hari ini tidak memiliki angkatan bersenjata aktif — salah satu dari sedikit negara di dunia yang demikian. #trivia" },
      { text: "🔗 Sumber", isSource: true, source: { label: "Encyclopaedia Britannica — Liechtenstein", url: "https://www.britannica.com/place/Liechtenstein" } },
    ],
  },

  {
    id: 7,
    category: "trivia",
    account: ACCOUNTS.trivia,
    time: "12h",
    text: "There are more possible iterations of a game of chess than there are atoms in the observable universe.\n\nThe number of possible chess games: ~10¹²⁰. Atoms in universe: ~10⁸⁰. #trivia #sains",
    thread: [
      { text: "This is known as the Shannon Number, named after mathematician Claude Shannon who estimated it in 1950.\n\nHe calculated that the number of possible chess games is approximately 10¹²⁰ — a number so large it has no physical analogy." },
      { text: "For context:\n⚛️ Atoms in observable universe: ~10⁸⁰\n♟️ Possible chess games: ~10¹²⁰\n\nThat's a difference of 10 followed by 40 zeros — chess is 10⁴⁰ times more complex than the number of atoms in everything we can see." },
      { text: "This is why chess engines, despite being incredibly powerful, still cannot \"solve\" chess the way checkers was solved in 2007.\n\nThere are simply too many possible states to enumerate." },
      { text: "Deep Blue beat Kasparov in 1997. AlphaZero crushed Stockfish in 2017. But perfect chess? Still out of reach — mathematically, possibly forever. #sains" },
      { text: "🔗 Sumber", isSource: true, source: { label: "Shannon, C. (1950). Programming a Computer for Playing Chess. Philosophical Magazine.", url: "https://www.pi.infn.it/~carosi/chess/shannon.txt" } },
    ],
  },

  // ── 6 POST LAMA ──

  {
    id: 6,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "1h",
    text: "Nintendo berdiri tahun 1889 — bukan sebagai perusahaan game, tapi sebagai produsen kartu hanafuda Jepang. #sejarah #trivia",
    thread: [
      { text: "Fusajiro Yamauchi mendirikan Nintendo Koppai di Kyoto pada 1889 untuk memproduksi kartu hanafuda — kartu bergambar bunga yang dipakai dalam berbagai permainan tradisional Jepang." },
      { text: "Selama puluhan tahun, Nintendo mencoba berbagai bisnis:\n\n🚕 Perusahaan taksi (1960an)\n🏨 Love hotel (1960an)\n🍜 Makanan instan (1960an)\n\nSemuanya tidak berhasil besar." },
      { text: "Barulah pada akhir 1960an mereka masuk ke mainan elektronik, dan 1977 merilis konsol game pertama — Color TV-Game.\n\nNES menyusul pada 1983, dan sisanya adalah sejarah." },
      { text: "Jadi saat Mario berlari di layarmu, kamu sedang berinteraksi dengan warisan perusahaan yang mulanya bikin kartu main-main untuk orang Jepang di era Meiji." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Nintendo Corporate History", url: "https://www.nintendo.co.jp/corporate/en/history/" } },
    ],
  },

  {
    id: 5,
    category: "trivia",
    account: ACCOUNTS.trivia,
    time: "1h",
    text: "Madu tidak pernah basi.\n\nPot madu berusia 3.000 tahun ditemukan di makam Mesir kuno dan masih layak dimakan. #trivia",
    thread: [
      { text: "Arkeolog menemukan madu di dalam makam Mesir — termasuk makam Tutankhamun — dan madu tersebut masih dalam kondisi baik setelah ribuan tahun." },
      { text: "Kenapa madu tidak basi?\n\n🍯 Kadar gula sangat tinggi → menyedot air dari bakteri (osmosis)\n🔬 pH rendah → lingkungan asam tidak ramah bagi mikroba\n💧 Kadar air sangat rendah → bakteri tidak bisa tumbuh\n⚗️ Mengandung hidrogen peroksida alami → bersifat antibakteri" },
      { text: "Catatan penting: madu yang dijual di toko kadang mengandung air lebih banyak dari proses produksi. Ini bisa membuatnya berjamur jika tidak disimpan dengan benar.\n\nMadu murni yang tersegel? Awet selamanya." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Smithsonian Magazine — The Science Behind Honey's Eternal Shelf Life", url: "https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/" } },
    ],
  },

  {
    id: 4,
    category: "funfact",
    account: ACCOUNTS.sains,
    time: "12j",
    text: "Air panas kadang membeku lebih cepat dari air dingin — ini disebut Efek Mpemba.\n\nNamanya dari siswa Tanzania yang menemukannya saat membuat es krim tahun 1963. #sains #funfact",
    thread: [
      { text: "Tahun 1963, Erasto Mpemba — siswa SMA di Tanzania — menyadari bahwa campuran es krim panas miliknya membeku lebih cepat dari milik temannya yang sudah didinginkan terlebih dahulu." },
      { text: "Ia membawa pertanyaan ini ke fisikawan Denis Osborne. Alih-alih meremehkan, Osborne justru meneliti fenomena itu bersama Mpemba dan mempublikasikan hasilnya pada 1969." },
      { text: "Sampai hari ini, penyebab pastinya masih diperdebatkan.\n\nBeberapa hipotesis:\n❄️ Konveksi — air panas menciptakan arus yang mempercepat pendinginan\n💧 Penguapan — air panas menyusut volumenya\n🧪 Gas terlarut — air panas melepas lebih banyak gas" },
      { text: "Yang menarik: tidak selalu terjadi. Hasilnya bergantung pada wadah, freezer, dan kondisi spesifik lainnya.\n\nIni yang bikin fenomenanya sulit direplikasi secara konsisten di lab." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Royal Society of Chemistry — The Mpemba Effect", url: "https://www.rsc.org/publishing/journals/results/articledetails/?id=c3cp54431d" } },
    ],
  },

  {
    id: 3,
    category: "sejarah",
    account: ACCOUNTS.sejarah,
    time: "9j",
    text: "Oxford University lebih tua dari Kerajaan Aztec.\n\nPengajaran di Oxford dimulai ~1096 M. Kerajaan Aztec baru berdiri 1428 M. #sejarah",
    thread: [
      { text: "Oxford mulai mengajar sekitar tahun 1096 M dan berkembang pesat setelah 1167 ketika Raja Henry II melarang mahasiswa Inggris belajar di Paris." },
      { text: "Kerajaan Aztec (secara resmi disebut Triple Alliance) baru terbentuk tahun 1428 M — lebih dari 330 tahun setelah Oxford berdiri." },
      { text: "Untuk lebih memahami skalanya:\n\n🎓 Oxford sudah meluluskan sarjana selama 3 generasi saat Aztec belum ada.\n🏛️ Saat Aztec runtuh (1521), Oxford sudah berusia 425 tahun.\n📖 Oxford masih berdiri hingga hari ini — 928 tahun kemudian." },
      { text: "🔗 Sumber", isSource: true, source: { label: "University of Oxford — Brief History", url: "https://www.ox.ac.uk/about/organisation/history" } },
    ],
  },

  {
    id: 2,
    category: "funfact",
    account: ACCOUNTS.funfact,
    time: "5j",
    text: "Kucing tidak meong ke sesama kucing.\n\nMereka hanya meong ke manusia — semacam bahasa khusus yang berkembang selama ribuan tahun domestikasi. #funfact",
    thread: [
      { text: "Kucing liar dan kucing dewasa yang hidup sendiri hampir tidak pernah mengeluarkan suara meong satu sama lain.\n\nMeong dipakai untuk berkomunikasi dengan anak kucing — tapi kebiasaan itu menghilang saat mereka dewasa." },
      { text: "Lalu kenapa mereka meong ke manusia?\n\nPara peneliti percaya kucing menyadari bahwa manusia merespons suara, jadi mereka mempertahankan — bahkan mengembangkan — vokalisasi ini khusus untuk kita." },
      { text: "Setiap kucing bahkan punya \"dialek\" meong yang disesuaikan dengan pemiliknya.\n\nArtinya kucing kamu meong dengan cara yang unik — dan kemungkinan kamu satu-satunya yang bisa membaca maksudnya." },
      { text: "🔗 Sumber", isSource: true, source: { label: "National Geographic — Why Do Cats Meow at Humans?", url: "https://www.nationalgeographic.com/animals/article/cats-meow-communication-humans" } },
    ],
  },

  {
    id: 1,
    category: "trivia",
    account: ACCOUNTS.trivia,
    time: "2j",
    text: "Cleopatra hidup lebih dekat ke era iPhone dibanding ke era selesainya Piramida Giza.\n\nPiramida selesai ~2560 SM. Cleopatra lahir 69 SM. iPhone 2007 M. #sejarah #trivia",
    thread: [
      { text: "Mari kita breakdown angkanya:\n\n📐 Piramida Giza selesai dibangun sekitar 2560 SM.\n👑 Cleopatra lahir 69 SM.\n📱 iPhone pertama rilis 2007 M." },
      { text: "Selisih antara Cleopatra dan Piramida: sekitar 2.491 tahun.\n\nSelisih antara Cleopatra dan iPhone: sekitar 2.076 tahun.\n\nJadi Cleopatra secara kronologis lebih dekat ke kita daripada ke para pembangun piramida." },
      { text: "Ini menunjukkan betapa tuanya Piramida Giza sebenarnya.\n\nBagi orang Romawi yang hidup semasa Cleopatra, piramida itu sudah setua peninggalan kuno — sama seperti kita memandang Romawi hari ini." },
      { text: "🔗 Sumber", isSource: true, source: { label: "Live Science — How old are the Pyramids?", url: "https://www.livescience.com/33346-how-old-pyramids.html" } },
    ],
  },

];
