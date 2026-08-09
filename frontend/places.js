/* YatraKhoj — Places of Nepal
   All 77 districts of Nepal grouped by the 7 provinces, with
   headquarter, a one-line "known for" and key spots, plus an
   optional link to a full destination guide when one exists. */

const nepalProvinces = [
    { id: "Koshi", name: "Koshi (Province 1)" },
    { id: "Madhesh", name: "Madhesh (Province 2)" },
    { id: "Bagmati", name: "Bagmati (Province 3)" },
    { id: "Gandaki", name: "Gandaki (Province 4)" },
    { id: "Lumbini", name: "Lumbini (Province 5)" },
    { id: "Karnali", name: "Karnali (Province 6)" },
    { id: "Sudurpashchim", name: "Sudurpashchim (Province 7)" }
];


const nepalPlaces = [

    /* ---------------- Koshi (Province 1) ---------------- */

    { n: "Bhojpur", p: "Koshi", hq: "Bhojpur", known: "Cultural heart of the eastern hills, famed for the kukri blade and rich Jethi–Mayi folk culture.", spots: ["Bhojpur bazaar", "Salpa Pokhari"], lat: 27.17, lng: 87.05 },
    { n: "Dhankuta", p: "Koshi", hq: "Dhankuta", known: "The 'orange capital' — terraced orchards, tea gardens and cool hill-town air.", spots: ["Dhankuta bazaar", "Hile"], lat: 26.98, lng: 87.34 },
    { n: "Ilam", p: "Koshi", hq: "Ilam", known: "Rolling green tea gardens around Kanyam — Nepal's tea heartland.", spots: ["Kanyam", "Mai Pokhari"], lat: 26.91, lng: 87.93, dest: "ilam" },
    { n: "Jhapa", p: "Koshi", hq: "Bhadrapur", known: "The eastern Terai gateway from India at Kakarbhitta, ringed by tea estates.", spots: ["Kakarbhitta border", "Kankai river"], lat: 26.65, lng: 87.89 },
    { n: "Khotang", p: "Koshi", hq: "Diktel", known: "Quiet hills between Kathmandu and the tea country, rich in Rai culture.", spots: ["Diktel", "Basa"], lat: 27.21, lng: 86.85 },
    { n: "Morang", p: "Koshi", hq: "Biratnagar", known: "Industrial city of the east and a busy regional airport hub.", spots: ["Biratnagar", "Koshi barrage"], lat: 26.45, lng: 87.28 },
    { n: "Okhaldhunga", p: "Koshi", hq: "Okhaldhunga", known: "The classic start of the old Everest trekking route.", spots: ["Okhaldhunga bazaar", "Khiji"], lat: 27.31, lng: 86.5 },
    { n: "Panchthar", p: "Koshi", hq: "Phidim", known: "Falgunanda heartland with some of the east's most scenic tea ridges.", spots: ["Phidim", "Falgunanda"], lat: 27.15, lng: 87.75 },
    { n: "Sankhuwasabha", p: "Koshi", hq: "Khandbari", known: "Gate to Makalu Base Camp and the Arun river valley.", spots: ["Makalu", "Num"], lat: 27.37, lng: 87.22 },
    { n: "Solukhumbu", p: "Koshi", hq: "Salleri", known: "The Everest region — Namche Bazaar, Tengboche and the road to Base Camp.", spots: ["Namche Bazaar", "Tengboche"], lat: 27.58, lng: 86.71, dest: "everest" },
    { n: "Sunsari", p: "Koshi", hq: "Inaruwa", known: "Home of Dharan and the sacred Baraha Kshetra confluence.", spots: ["Dharan", "Baraha Kshetra"], lat: 26.63, lng: 87.16, dest: "dharan" },
    { n: "Taplejung", p: "Koshi", hq: "Phungling", known: "Kanchenjunga country — the world's third-highest peak and pristine trekking.", spots: ["Kanchenjunga", "Ghunsa"], lat: 27.43, lng: 87.8, dest: "taplejung" },
    { n: "Terhathum", p: "Koshi", hq: "Myanglung", known: "Rhododendron forests of Tinjure-Milke and a slower eastern-hills Nepal.", spots: ["Tinjure", "Basantapur"], lat: 27.12, lng: 87.55, dest: "tehrathum", wiki: "Tehrathum District" },
    { n: "Udayapur", p: "Koshi", hq: "Gaighat", known: "The fertile Triyuga valley and a rising river-rafting scene.", spots: ["Gaighat", "Katari"], lat: 26.93, lng: 86.56 },

    /* ---------------- Madhesh (Province 2) ---------------- */

    { n: "Saptari", p: "Madhesh", hq: "Rajbiraj", known: "Plains farmland and the wetland birds of Koshi Tappu wildlife reserve.", spots: ["Koshi Tappu", "Rajbiraj"], lat: 26.54, lng: 86.75 },
    { n: "Siraha", p: "Madhesh", hq: "Siraha", known: "Quiet Madhesh farm country with local bazaars and Maithili culture.", spots: ["Siraha", "Lahan"], lat: 26.65, lng: 86.21 },
    { n: "Dhanusha", p: "Madhesh", hq: "Janakpur", known: "Janakpur — the holy city of Mithila, its grand Ram Janaki temple and art.", spots: ["Janakpur temple", "Mithila art"], lat: 26.73, lng: 85.93, dest: "janakpur" },
    { n: "Mahottari", p: "Madhesh", hq: "Jaleshwar", known: "The Mahadev temple town of Jaleshwar on the lowlands.", spots: ["Jaleshwar"], lat: 26.69, lng: 85.8 },
    { n: "Sarlahi", p: "Madhesh", hq: "Malangwa", known: "Sprawling Terai fields close to the Indian border.", spots: ["Malangwa"], lat: 26.86, lng: 85.56 },
    { n: "Bara", p: "Madhesh", hq: "Kalaiya", known: "The main road gateway from India via Birgunj and the growing Nijgadh corridor.", spots: ["Birgunj border", "Nijgadh"], lat: 27.03, lng: 85.0 },
    { n: "Parsa", p: "Madhesh", hq: "Birgunj", known: "Nepal's busiest India land-crossing, with the forested Parsa National Park nearby.", spots: ["Birgunj", "Parsa NP"], lat: 27.0, lng: 84.87 },
    { n: "Rautahat", p: "Madhesh", hq: "Gaur", known: "The historic town of Gaur at the southern edge of the Terai.", spots: ["Gaur"], lat: 26.96, lng: 85.31 },

    /* ---------------- Bagmati (Province 3) ---------------- */

    { n: "Sindhuli", p: "Bagmati", hq: "Sindhuli Madhi", known: "The road to the east passes the hill fort of Sindhuli Gadhi.", spots: ["Sindhuli Gadhi"], lat: 27.26, lng: 85.98 },
    { n: "Ramechhap", p: "Bagmati", hq: "Manthali", known: "Manthali airport is the reliable plan-B for Everest flights when Lukla is cloudy.", spots: ["Manthali"], lat: 27.33, lng: 86.07 },
    { n: "Dolakha", p: "Bagmati", hq: "Charikot", known: "Kalinchowk shrine and Jiri — the classic entry to the Everest region.", spots: ["Kalinchowk", "Jiri"], lat: 27.67, lng: 86.05 },
    { n: "Bhaktapur", p: "Bagmati", hq: "Bhaktapur", known: "A living medieval city — potters, pagodas and the finest Durbar Square.", spots: ["Bhaktapur Durbar Square", "Taumadhi"], lat: 27.67, lng: 85.43 },
    { n: "Dhading", p: "Bagmati", hq: "Dhading Besi", known: "Rubi Valley hot springs and the trek up the Ganga–Jamuna ridges.", spots: ["Dhading Besi", "Rubi Valley"], lat: 27.87, lng: 84.94 },
    { n: "Kathmandu", p: "Bagmati", hq: "Kathmandu", known: "The capital — temples, Thamel's buzz and the gateway to everywhere.", spots: ["Thamel", "Durbar Square", "Swayambhunath"], lat: 27.72, lng: 85.32, dest: "kathmandu" },
    { n: "Kavrepalanchok", p: "Bagmati", hq: "Dhulikhel", known: "Dhulikhel's Himalayan views, Namo Buddha and Nagarkot's sunrise.", spots: ["Dhulikhel", "Namo Buddha", "Nagarkot"], lat: 27.62, lng: 85.55, dest: "nagarkot" },
    { n: "Lalitpur", p: "Bagmati", hq: "Patan", known: "Patan Durbar Square and a living tradition of metal and wood craft.", spots: ["Patan Durbar Square", "Hiranya Varna"], lat: 27.66, lng: 85.33 },
    { n: "Nuwakot", p: "Bagmati", hq: "Bidur", known: "The ornate Nuwakot palace and the doorstep to the Langtang region.", spots: ["Nuwakot palace"], lat: 27.91, lng: 85.15 },
    { n: "Rasuwa", p: "Bagmati", hq: "Dhunche", known: "The Langtang Valley — glaciers, yak herders and the Tibet border.", spots: ["Langtang Valley", "Dhunche"], lat: 28.11, lng: 85.3, dest: "langtang" },
    { n: "Sindhupalchok", p: "Bagmati", hq: "Chautara", known: "Gosaikunda's sacred lakes and the Helambu hills along the Araniko highway.", spots: ["Gosaikunda", "Helambu"], lat: 27.78, lng: 85.72, wiki: "Sindhupalchowk District" },
    { n: "Chitwan", p: "Bagmati", hq: "Bharatpur", known: "Nepal's most famous safari — rhinos, tigers and the Sauraha riverfront.", spots: ["Chitwan NP", "Sauraha"], lat: 27.68, lng: 84.43, dest: "chitwan" },
    { n: "Makwanpur", p: "Bagmati", hq: "Hetauda", known: "Manakamana's cable car to the goddess temple on the ridge.", spots: ["Manakamana"], lat: 27.42, lng: 85.04 },

    /* ---------------- Gandaki (Province 4) ---------------- */

    { n: "Baglung", p: "Gandaki", hq: "Baglung", known: "The trailhead for Dhorpatan and the Kali temple bazaar town.", spots: ["Dhorpatan", "Baglung bazaar"], lat: 28.27, lng: 83.6 },
    { n: "Gorkha", p: "Gandaki", hq: "Gorkha", known: "Birthplace of the kingdom — Gorkha Durbar on its high ridge.", spots: ["Gorkha Durbar"], lat: 28.0, lng: 84.63, dest: "gorkha" },
    { n: "Kaski", p: "Gandaki", hq: "Pokhara", known: "Pokhara's Phewa lake, Sarangkot paragliding and the Annapurna gateway.", spots: ["Lakeside", "Sarangkot"], lat: 28.21, lng: 83.99, dest: "pokhara" },
    { n: "Lamjung", p: "Gandaki", hq: "Besisahar", known: "Besisahar — where the classic Annapurna Circuit begins.", spots: ["Besisahar"], lat: 28.23, lng: 84.37 },
    { n: "Manang", p: "Gandaki", hq: "Chame", known: "The high Manang valley and the Thorong La crossing.", spots: ["Manang village", "Thorong La"], lat: 28.67, lng: 84.02, dest: "manang", wiki: "Manang District, Nepal" },
    { n: "Mustang", p: "Gandaki", hq: "Jomsom", known: "Muktinath's holy fire, Jomsom's apple orchards and walled Upper Mustang.", spots: ["Muktinath", "Lo Manthang"], lat: 28.78, lng: 83.73, dest: "mustang" },
    { n: "Myagdi", p: "Gandaki", hq: "Beni", known: "Poon Hill sunrises, the Dhaulagiri massif and Ghorepani's forest trails.", spots: ["Poon Hill", "Dhaulagiri"], lat: 28.35, lng: 83.57, dest: "annapurna" },
    { n: "Nawalpur", p: "Gandaki", hq: "Kawasoti", known: "The Devchuli hills watching over the Chitwan buffer zone.", spots: ["Devchuli"], lat: 27.69, lng: 84.11 },
    { n: "Parbat", p: "Gandaki", hq: "Kusma", known: "Kusma's great suspension bridge and terraced valley walks.", spots: ["Kusma bridge"], lat: 28.23, lng: 83.69 },
    { n: "Syangja", p: "Gandaki", hq: "Putalibazar", known: "Step-terraces and the Gurung village of Sirubari.", spots: ["Sirubari"], lat: 28.09, lng: 83.87 },
    { n: "Tanahun", p: "Gandaki", hq: "Damauli", known: "Bandipur's hill-town heritage perched above the Marsyangdi.", spots: ["Bandipur"], lat: 27.91, lng: 84.45, dest: "bandipur" },

    /* ---------------- Lumbini (Province 5) ---------------- */

    { n: "Kapilvastu", p: "Lumbini", hq: "Taulihawa", known: "The ancient Shakya capital and Lord Buddha's childhood home.", spots: ["Kapilavastu ruins"], lat: 27.56, lng: 83.06 },
    { n: "Parasi", p: "Lumbini", hq: "Ramgram", known: "Ramgram's ancient stupa and the western Terai flatlands.", spots: ["Ramgram Stupa"], lat: 27.53, lng: 83.67, wiki: "Nawalparasi (West of Bardaghat Susta) district" },
    { n: "Rupandehi", p: "Lumbini", hq: "Siddharthanagar", known: "Lumbini — the birthplace of the Buddha — plus Bhairahawa's international airport.", spots: ["Lumbini", "Bhairahawa"], lat: 27.51, lng: 83.45, dest: "lumbini" },
    { n: "Arghakhanchi", p: "Lumbini", hq: "Sandhikharka", known: "Sridaicha's viewpoints over the west-central ridges.", spots: ["Sandhikharka"], lat: 27.93, lng: 83.19 },
    { n: "Gulmi", p: "Lumbini", hq: "Tamghas", known: "Darbar Danda and the plum-and-prune orchards of the hills.", spots: ["Darbar Danda", "Tamghas"], lat: 28.09, lng: 83.25 },
    { n: "Palpa", p: "Lumbini", hq: "Tansen", known: "Tansen's steep old bazaar and the riverside Rani Mahal palace.", spots: ["Tansen", "Rani Mahal"], lat: 27.87, lng: 83.55, dest: "palpa" },
    { n: "Dang", p: "Lumbini", hq: "Ghorahi", known: "The wide Dang valley towns of Ghorahi and Tulsipur.", spots: ["Ghorahi", "Tulsipur"], lat: 28.0, lng: 82.29, wiki: "Dang District, Nepal" },
    { n: "Pyuthan", p: "Lumbini", hq: "Pyuthan", known: "Little-visited middle hills between the Terai and Karnali.", spots: ["Pyuthan"], lat: 28.09, lng: 82.87 },
    { n: "Rolpa", p: "Lumbini", hq: "Liwang", known: "Deep hill valleys with an old Magar heartland.", spots: ["Liwang"], lat: 28.28, lng: 82.65 },
    { n: "Rukum East", p: "Lumbini", hq: "Rukumkot", known: "Western hills feeding the wider Rukum range.", spots: ["Rukumkot"], lat: 28.64, lng: 82.48 },
    { n: "Banke", p: "Lumbini", hq: "Nepalgunj", known: "Nepalgunj — the west's trading hub and a springboard for Karnali treks.", spots: ["Nepalgunj"], lat: 28.05, lng: 81.62 },
    { n: "Bardiya", p: "Lumbini", hq: "Gulariya", known: "Bardiya National Park — wilder rhino country than Chitwan.", spots: ["Bardiya NP"], lat: 28.3, lng: 81.35, dest: "bardia" },

    /* ---------------- Karnali (Province 6) ---------------- */

    { n: "Rukum West", p: "Karnali", hq: "Musikot", known: "The fold of western hills joining Karnali province.", spots: ["Musikot"], lat: 28.63, lng: 82.29 },
    { n: "Salyan", p: "Karnali", hq: "Salyan", known: "Quiet middle hills on the road to the far west.", spots: ["Khalanga"], lat: 28.38, lng: 82.17, wiki: "Salyan District, Nepal" },
    { n: "Dolpa", p: "Karnali", hq: "Dunai", known: "Shey Phoksundo's turquoise lake and mystical Upper Dolpo.", spots: ["Phoksundo Lake"], lat: 28.96, lng: 82.82, dest: "dolpo" },
    { n: "Humla", p: "Karnali", hq: "Simikot", known: "Simikot's high airstrip and the Limi valley on the Tibetan edge.", spots: ["Simikot", "Limi Valley"], lat: 29.97, lng: 81.82 },
    { n: "Jumla", p: "Karnali", hq: "Jumla", known: "Nepal's apple country and the door to Rara lake.", spots: ["Jumla apples"], lat: 29.28, lng: 82.18 },
    { n: "Kalikot", p: "Karnali", hq: "Manma", known: "Steep Karnali hills above the river gorges.", spots: ["Manma"], lat: 29.17, lng: 81.64 },
    { n: "Mugu", p: "Karnali", hq: "Gamgadhi", known: "Rara Lake — Nepal's biggest and bluest alpine lake.", spots: ["Rara Lake"], lat: 29.63, lng: 82.16, dest: "rara" },
    { n: "Surkhet", p: "Karnali", hq: "Birendranagar", known: "Birendranagar, the modern gateway into the Karnali.", spots: ["Birendranagar"], lat: 28.6, lng: 81.63 },
    { n: "Dailekh", p: "Karnali", hq: "Dailekh", known: "Fortified hill towns and ancient temples.", spots: ["Dailekh"], lat: 28.84, lng: 81.71 },
    { n: "Jajarkot", p: "Karnali", hq: "Khalanga", known: "Rugged hills ringing the upper Bheri valley.", spots: ["Jajarkot"], lat: 28.74, lng: 82.2 },

    /* ---------------- Sudurpashchim (Province 7) ---------------- */

    { n: "Kailali", p: "Sudurpashchim", hq: "Dhangadhi", known: "Dhangadhi, the far-west's plains hub near the Indian border.", spots: ["Dhangadhi"], lat: 28.72, lng: 80.61 },
    { n: "Achham", p: "Sudurpashchim", hq: "Mangalsen", known: "Traditional hill culture climbing toward the Karnali watershed.", spots: ["Mangalsen"], lat: 29.13, lng: 81.24 },
    { n: "Doti", p: "Sudurpashchim", hq: "Dipayal", known: "Dipayal and the trailhead to the high meadows of Khaptad.", spots: ["Khaptad"], lat: 29.26, lng: 80.94, dest: "khaptad" },
    { n: "Bajhang", p: "Sudurpashchim", hq: "Chainpur", known: "Remote villages near the Saipal range and the Saipal reserve.", spots: ["Chainpur"], lat: 29.52, lng: 81.2 },
    { n: "Bajura", p: "Sudurpashchim", hq: "Martadi", known: "Gate to Saipal peak and the far-western high country.", spots: ["Saipal"], lat: 29.44, lng: 81.47 },
    { n: "Kanchanpur", p: "Sudurpashchim", hq: "Bheemdatta", known: "Shuklaphanta's grasslands and the India border at the far west.", spots: ["Shuklaphanta NP"], lat: 28.79, lng: 80.33 },
    { n: "Dadeldhura", p: "Sudurpashchim", hq: "Dadeldhura", known: "A cool hill town above the Mahakali gorge.", spots: ["Dadeldhura"], lat: 29.3, lng: 80.58 },
    { n: "Baitadi", p: "Sudurpashchim", hq: "Dasharathchand", known: "Steep Mahakali hills and timeless villages.", spots: ["Dasharathchand"], lat: 29.51, lng: 80.44 },
    { n: "Darchula", p: "Sudurpashchim", hq: "Khalanga", known: "Byas Cave and the high passes toward Tibet at Nepal's far corner.", spots: ["Byas Cave", "Darchula"], lat: 29.83, lng: 80.54 }

];
