/* =========================================================
   IMAGE FUNCTION

   These use specific Wikimedia Commons place images
   instead of random Unsplash destination photos.
========================================================= */

function image(fileName) {

    return (
        "https://commons.wikimedia.org/wiki/Special:FilePath/" +
        encodeURIComponent(fileName)
    );

}



/* =========================================================
   DESTINATIONS
========================================================= */

const destinations = {


    /* =====================================================
       TEHRATHUM
    ===================================================== */

    tehrathum: {

        name: "Tehrathum",

        category:
            "Eastern Hills",

        best:
            "🌿 Nature & Hidden Gems",

        interests: [
            "nature",
            "hidden",
            "trekking",
            "relaxation"
        ],

        coords: {
            lat: 27.14,
            lng: 87.46
        },

        minDays: 2,

        budget: {
            transport: 800,
            lodging: 1500,
            food: 600,
            activities: 200
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Nov, Mar–May",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "medium",
            weather: "medium",
            road: "high",
            network: "medium",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 800–1,200",
                    duration: "10–12 hr"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 1,500–2,500",
                    duration: "8–10 hr"
                }
            ],

            note: "Check road conditions before leaving, especially during monsoon."

        },

        image:
            image("Basantapur Bazaar Terathum.jpg"),

        description:
            "Quiet eastern hills, rhododendron country, local settlements and scenic mountain journeys.",

        intro:
            "Tehrathum is ideal for travelers looking for peaceful hills, rhododendron landscapes and a less crowded eastern Nepal experience.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Itahari → Dhankuta side → Basantapur → Tehrathum",

            style:
                "Road journey + short walks",

            carry:
                "Rain jacket, water, warm layer and cash"

        },


        places: [

            {
                name:
                    "Tinjure Milke",

                type:
                    "Popular",

                image:
                    image("Tinjure Milke on the way to Terhathum.jpg"),

                text:
                    "A beautiful eastern Nepal ridge known for rhododendron forests and mountain scenery.",

                rating: 4.7
            },


            {
                name:
                    "Basantapur",

                type:
                    "Popular",

                image:
                    image("Basantapur Bazaar Terathum.jpg"),

                text:
                    "A peaceful hill settlement and gateway for exploring the surrounding Tehrathum region.",

                rating: 4.4
            },


            {
                name:
                    "Tehrathum Hill Landscapes",

                type:
                    "Underrated",

                image:
                    image("Beautiful landscape of Tehrathum.jpg"),

                text:
                    "Quiet countryside, village roads and hill views for travelers wanting fewer crowds.",

                rating: 4.5
            }

        ],


        hotels: [

            {
                name:
                    "Local Guesthouse",

                price:
                    "Rs. 1,000–1,800",

                text:
                    "Simple accommodation around local market areas."
            },


            {
                name:
                    "Hill Lodge",

                price:
                    "Rs. 1,500–2,500",

                text:
                    "Suitable for road trips and short hill stays."
            },


            {
                name:
                    "Local Homestay",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "A more local experience where homestays are available."
            }

        ],


        guide: {

            travel:
                "Road travel from Itahari is the practical option. Check road conditions before leaving, especially during monsoon.",

            time:
                "Spring is attractive for rhododendrons while autumn normally provides clearer views.",

            food:
                "Try local dal bhat, seasonal vegetables, tea and food served in hill settlements.",

            local:
                "Travel slowly and spend time in villages and viewpoints instead of treating Tehrathum as only a quick road stop."

        },


        safety: {

            altitude:
                "Most tourist areas are moderate hill elevations, but higher ridges can become cold. Carry an extra warm layer.",

            weather:
                "Fog and rain can quickly reduce visibility in hill areas.",

            road:
                "Roads may become muddy, slippery or affected by landslides during heavy rain.",

            network:
                "Mobile signal is usually better in settlements and weaker in forests or remote areas.",

            health:
                "Carry personal medicine and a small first-aid kit because advanced healthcare may require travel.",

            precautions:
                "Travel during daylight where possible, carry drinking water and avoid unfamiliar isolated trails after dark."

        },

        rating: 4.4,

        reviews: [

            {
                name: "Sunita Rai",
                rating: 5,
                tag: "Tea Lover",
                text: "The tea gardens roll over every hill and the local market is wonderfully untouched. Great for two quiet days."
            },

            {
                name: "Ramesh Shrestha",
                rating: 4,
                tag: "Weekend Escape",
                text: "Sunrise from the hills above the bazaar is worth waking early for. Roads are a little rough in places."
            },

            {
                name: "Anita Gurung",
                rating: 4,
                tag: "Nature",
                text: "Very few tourists, clean air and warm locals. A hidden corner of the east that still feels authentic."
            }

        ]

    },



    /* =====================================================
       TAPLEJUNG
    ===================================================== */

    taplejung: {

        name:
            "Taplejung",

        category:
            "Himalayan Eastern Nepal",

        best:
            "🥾 Trekking & Culture",

        interests: [
            "trekking",
            "culture",
            "nature",
            "adventure"
        ],

        coords: {
            lat: 27.35,
            lng: 87.67
        },

        minDays: 4,

        budget: {
            transport: 1200,
            lodging: 2000,
            food: 800,
            activities: 400
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Nov, Apr–May",

        difficulty: "challenging",

        hiddenAlt: "Kanchenjunga Base Camp",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 2800,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "high",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 1,200–1,800",
                    duration: "12–14 hr"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 2,000–3,500",
                    duration: "10–12 hr"
                }
            ],

            note: "Remote sections may require local jeeps and walking."

        },

        image:
            image("Pathibhara taplejung.jpg"),

        description:
            "Pathibhara, Kanchenjunga landscapes and remote eastern Himalayan culture.",

        intro:
            "Taplejung is ideal for travelers looking for pilgrimage routes, mountain scenery and a serious eastern Himalayan journey.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Itahari → eastern hills → Taplejung / Phungling",

            style:
                "Long road journey + mountain walking",

            carry:
                "Warm layers, rain protection, water and medicine"

        },


        places: [

            {
                name:
                    "Pathibhara Devi Temple",

                type:
                    "Popular",

                image:
                    image("Pathibhara Devi Temple, Taplejung.jpg"),

                text:
                    "One of eastern Nepal's best-known pilgrimage destinations located high in the mountains.",

                rating: 4.8
            },


            {
                name:
                    "Kanchenjunga Region",

                type:
                    "Popular",

                image:
                    image("Kanchnjunga.jpg"),

                text:
                    "A major Himalayan region surrounding the world's third-highest mountain.",

                rating: 4.9
            },


            {
                name:
                    "Taplejung Hill Country",

                type:
                    "Underrated",

                image:
                    image("Taplejung hill.jpg"),

                text:
                    "The district's villages and hill landscapes offer rewarding experiences away from major trekking routes.",

                rating: 4.6
            }

        ],


        hotels: [

            {
                name:
                    "Town Guesthouse",

                price:
                    "Rs. 1,200–2,500",

                text:
                    "Practical accommodation around Taplejung's main settlement."
            },


            {
                name:
                    "Mountain Lodge",

                price:
                    "Rs. 1,500–3,000",

                text:
                    "Simple lodge accommodation for mountain routes."
            },


            {
                name:
                    "Comfort Hotel",

                price:
                    "Rs. 2,500–4,500",

                text:
                    "Higher-comfort rooms where available in town."
            }

        ],


        guide: {

            travel:
                "Expect a long mountain road journey from Itahari. Remote sections may require local jeeps and walking.",

            time:
                "Spring and autumn normally provide more stable mountain conditions.",

            food:
                "Mountain areas commonly offer dal bhat, noodles, tea and basic Nepali meals.",

            local:
                "Do not treat Pathibhara like a normal city attraction. Prepare properly for elevation and changing weather."

        },


        safety: {

            altitude:
                "Pathibhara is around 3,794 metres. Watch carefully for headache, nausea, dizziness or unusual tiredness.",

            weather:
                "High-altitude weather can change suddenly. Always carry warm clothes and rain protection.",

            road:
                "Mountain roads may become rough or be affected by rainfall and landslides.",

            network:
                "Mobile signal can become weak or unavailable on remote mountain trails.",

            health:
                "Carry medicine and a first-aid kit. Serious emergencies in remote areas may require evacuation.",

            precautions:
                "Tell someone your route, carry enough water and cash, and use local guidance for unfamiliar remote sections."

        },

        rating: 4.7,

        reviews: [

            {
                name: "Daniel Weber",
                rating: 5,
                tag: "Trekker",
                text: "The Kanchenjunga route is remote and raw. Waterfalls and yak pastures for days without another trekker in sight."
            },

            {
                name: "Meera Limbu",
                rating: 5,
                tag: "Hiker",
                text: "My home district and still my favourite walk. The suspension bridges and monastery stays are unforgettable."
            },

            {
                name: "Tom Anderson",
                rating: 4,
                tag: "Adventure",
                text: "Proper wilderness trekking — carry supplies and hire local guides. The views of Kanchenjunga are unreal."
            }

        ]

    },



    /* =====================================================
       ILAM
    ===================================================== */

    ilam: {

        name:
            "Ilam",

        category:
            "Tea Hills",

        best:
            "🌿 Nature & Relaxation",

        interests: [
            "nature",
            "relaxation",
            "food",
            "hidden"
        ],

        coords: {
            lat: 26.91,
            lng: 87.93
        },

        minDays: 2,

        budget: {
            transport: 600,
            lodging: 1500,
            food: 600,
            activities: 300
        },

        crowdLevel: "low",

        bestSeason:
            "Mar–May, Oct–Nov",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "medium",
            weather: "medium",
            road: "medium",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 600–900",
                    duration: "6–8 hr"
                },
                {
                    type: "Taxi / Private",
                    fare: "Rs 3,500–5,000",
                    duration: "4–5 hr"
                }
            ],

            note: "One of the easiest scenic hill destinations to reach by road."

        },

        image:
            image("Kanyam Tea Garden, Illam.jpg"),

        description:
            "Tea gardens, cool hills, sunrise viewpoints and a peaceful eastern Nepal escape.",

        intro:
            "Ilam is one of the easiest scenic hill destinations to reach from Itahari and is excellent for shorter relaxing trips.",


        important: {

            season:
                "October–April",

            route:
                "Itahari → Birtamod → Kanyam → Ilam",

            style:
                "Road trip + viewpoints",

            carry:
                "Light jacket, umbrella and walking shoes"

        },


        places: [

            {
                name:
                    "Kanyam Tea Garden",

                type:
                    "Popular",

                image:
                    image("Kanyam Tea Garden, Illam.jpg"),

                text:
                    "One of eastern Nepal's most recognisable tea garden destinations.",

                rating: 4.8
            },


            {
                name:
                    "Ilam Tea Landscapes",

                type:
                    "Popular",

                image:
                    image("Tea garden at ilam nepal.jpg"),

                text:
                    "Green rolling plantations that give Ilam its distinctive landscape.",

                rating: 4.5
            },


            {
                name:
                    "Mai Pokhari",

                type:
                    "Underrated",

                image:
                    image("Maipokhari ilam.jpg"),

                text:
                    "A peaceful wetland and religious destination surrounded by forest.",

                rating: 4.6
            }

        ],


        hotels: [

            {
                name:
                    "Budget Lodge",

                price:
                    "Rs. 1,000–1,800",

                text:
                    "Suitable for short tea-hill trips."
            },


            {
                name:
                    "Town Hotel",

                price:
                    "Rs. 1,800–3,500",

                text:
                    "Comfortable accommodation around larger settlements."
            },


            {
                name:
                    "Tea Homestay",

                price:
                    "Rs. 1,200–2,500",

                text:
                    "A local-style stay where available."
            }

        ],


        guide: {

            travel:
                "Ilam is relatively easy to reach from Itahari by road.",

            time:
                "Autumn and spring are excellent for tea gardens, sunrise views and photography.",

            food:
                "Try local tea, churpi and eastern Nepali foods.",

            local:
                "Kanyam is popular, but Mai Pokhari and smaller tea areas offer quieter experiences."

        },


        safety: {

            altitude:
                "Most attractions are at moderate hill elevation but mornings and evenings can become cool.",

            weather:
                "Fog and rainfall can significantly reduce road visibility.",

            road:
                "Hill roads can become slippery after rain, especially around bends.",

            network:
                "Mobile coverage is generally available around towns and main tourist areas.",

            health:
                "Basic healthcare services are available in Ilam and nearby settlements.",

            precautions:
                "Wear shoes with good grip around wet tea gardens and use extra care when travelling in fog."

        },

        rating: 4.6,

        reviews: [

            {
                name: "Pooja Sharma",
                rating: 5,
                tag: "Tea Estate",
                text: "Antu Danda sunrise over the tea terraces is one of the best views in the east. The fresh tea is a must-buy."
            },

            {
                name: "James Lee",
                rating: 4,
                tag: "Weekend Trip",
                text: "Lush green hills, cardamom farms and a laid-back feel. Come in the right season for mist-free views."
            },

            {
                name: "Kiran Tamang",
                rating: 5,
                tag: "Photographer",
                text: "Every corner is a picture. The tea garden paths near the bazaar are peaceful and beautifully kept."
            }

        ]

    },



    /* =====================================================
       POKHARA
    ===================================================== */

    pokhara: {

        name:
            "Pokhara",

        category:
            "Lake & Adventure City",

        best:
            "🌊 Lakes & Adventure",

        interests: [
            "lakes",
            "adventure",
            "nature",
            "relaxation",
            "food"
        ],

        coords: {
            lat: 28.21,
            lng: 83.99
        },

        minDays: 3,

        budget: {
            transport: 1500,
            lodging: 3000,
            food: 1000,
            activities: 1500
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Nov, Mar–Apr",

        difficulty: "easy",

        hiddenAlt: "Begnas & Rupa Lake",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,500–2,500",
                    duration: "12–14 hr"
                },
                {
                    type: "Domestic Flight",
                    fare: "Rs 8,000+",
                    duration: "45 min"
                },
                {
                    type: "Night Bus",
                    fare: "Rs 2,000–3,000",
                    duration: "overnight"
                }
            ],

            note: "Reachable by road and domestic flight; the drive is long, so allow breaks."

        },

        image:
            image("Pokhara, Phewa Lake, Nepal.jpg"),

        description:
            "Phewa Lake, Himalayan views, adventure activities and one of Nepal's strongest tourism scenes.",

        intro:
            "Pokhara combines relaxation, lakes, mountain scenery and adventure in one of Nepal's most accessible tourist cities.",


        important: {

            season:
                "October–November and March–April",

            route:
                "Itahari → highway journey west → Pokhara",

            style:
                "City stay + day trips",

            carry:
                "Light layers, rain protection and sun protection"

        },


        places: [

            {
                name:
                    "Phewa Lake",

                type:
                    "Popular",

                image:
                    image("Pokhara, Phewa Lake, Nepal.jpg"),

                text:
                    "Pokhara's iconic lakefront destination known for boating and Himalayan views.",

                rating: 4.9
            },


            {
                name:
                    "Sarangkot",

                type:
                    "Popular",

                image:
                    image("Sarangkot, Nepal-WLV-1715.jpg"),

                text:
                    "A famous hill viewpoint known for sunrise views and adventure activities.",

                rating: 4.7
            },


            {
                name:
                    "Begnas Lake",

                type:
                    "Underrated",

                image:
                    image("Begnas Lake 2018 12.jpg"),

                text:
                    "A quieter lake alternative for travelers who want less crowd than central Lakeside.",

                rating: 4.5
            }

        ],


        hotels: [

            {
                name:
                    "Budget Hostel",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Affordable accommodation commonly found around Lakeside."
            },


            {
                name:
                    "Mid-range Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Comfortable hotel with more facilities."
            },


            {
                name:
                    "Lake-view Resort",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-end accommodation around Pokhara."
            }

        ],


        guide: {

            travel:
                "Pokhara is reachable by road and domestic flight. The drive from Itahari is long, so allow enough breaks.",

            time:
                "Autumn and spring normally provide clearer Himalayan views.",

            food:
                "Lakeside has Nepali and international food, while smaller local restaurants may offer better value.",

            local:
                "Combine famous Lakeside with quieter locations such as Begnas Lake."

        },


        safety: {

            altitude:
                "Pokhara is relatively low altitude, so altitude sickness is normally not a city-level concern.",

            weather:
                "Heavy monsoon rain can affect roads, flights and outdoor activities.",

            road:
                "Roads toward viewpoints can be steep and narrow.",

            network:
                "Mobile networks and internet are generally strong throughout main tourist areas.",

            health:
                "Pokhara has hospitals, clinics and pharmacies with relatively easy access.",

            precautions:
                "Use registered operators for paragliding, rafting and trekking activities."

        },

        rating: 4.9,

        reviews: [

            {
                name: "Laura Bennett",
                rating: 5,
                tag: "Adventure",
                text: "Paragliding over Phewa Lake at sunrise is unbeatable. Lakeside has great cafés and an easy-going vibe."
            },

            {
                name: "Rajesh Koirala",
                rating: 5,
                tag: "Family",
                text: "Sarangkot sunrise, boating on Phewa and a relaxed pace — perfect for families and couples alike."
            },

            {
                name: "Maya Tamang",
                rating: 4,
                tag: "Solo Travel",
                text: "Safe, friendly and walkable. The mountain views from the lakeside promenade stop you in your tracks."
            }

        ]

    },



    /* =====================================================
       LUMBINI
    ===================================================== */

    lumbini: {

        name:
            "Lumbini",

        category:
            "Buddhist Heritage",

        best:
            "🏯 Culture & History",

        interests: [
            "culture",
            "relaxation"
        ],

        coords: {
            lat: 27.47,
            lng: 83.28
        },

        minDays: 2,

        budget: {
            transport: 1500,
            lodging: 2500,
            food: 800,
            activities: 300
        },

        crowdLevel: "medium",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "Kapilvastu & Tilaurakot",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "high",
            road: "low",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,500–2,200",
                    duration: "12–14 hr"
                },
                {
                    type: "Flight to Bhairahawa",
                    fare: "Rs 9,000+",
                    duration: "1 hr + short drive"
                }
            ],

            note: "The heritage area requires considerable walking, so visit in cooler months."

        },

        image:
            image("Maya Devi Temple - Lumbini.jpg"),

        description:
            "Sacred Buddhist heritage, Maya Devi Temple, monasteries and peaceful cultural spaces.",

        intro:
            "Lumbini is one of Nepal's most important spiritual and historical destinations and deserves more than a short photo stop.",


        important: {

            season:
                "November–February",

            route:
                "Itahari → Terai highway west → Lumbini",

            style:
                "Heritage sightseeing + walking",

            carry:
                "Water, sun protection and respectful clothing"

        },


        places: [

            {
                name:
                    "Maya Devi Temple",

                type:
                    "Popular",

                image:
                    image("Maya Devi Temple - Lumbini.jpg"),

                text:
                    "The central sacred site traditionally associated with the birthplace of Gautama Buddha.",

                rating: 4.9
            },


            {
                name:
                    "World Peace Pagoda",

                type:
                    "Popular",

                image:
                    image("The World Peace Pagoda - Lumbini.jpg"),

                text:
                    "A major Buddhist peace monument within the wider Lumbini heritage landscape.",

                rating: 4.7
            },


            {
                name:
                    "Monastic Zone",

                type:
                    "Underrated",

                image:
                    image("Monastery in Lumbini.jpg"),

                text:
                    "International monasteries and quieter spiritual spaces beyond the main Maya Devi complex.",

                rating: 4.4
            }

        ],


        hotels: [

            {
                name:
                    "Pilgrim Guesthouse",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Simple accommodation for short heritage visits."
            },


            {
                name:
                    "Mid-range Hotel",

                price:
                    "Rs. 2,000–4,000",

                text:
                    "Comfortable rooms around Lumbini and Bhairahawa."
            },


            {
                name:
                    "Resort Stay",

                price:
                    "Rs. 4,000+",

                text:
                    "Higher-comfort accommodation for longer visits."
            }

        ],


        guide: {

            travel:
                "Lumbini is easier to reach by road than remote mountain destinations.",

            time:
                "Cooler months are more comfortable because the heritage area requires considerable walking.",

            food:
                "Nepali and Indian meals are widely available around Lumbini and Bhairahawa.",

            local:
                "Spend time exploring the monastery zone instead of only visiting Maya Devi Temple."

        },


        safety: {

            altitude:
                "Lumbini is in Nepal's lowland Terai, so altitude sickness is not a concern.",

            weather:
                "Summer temperatures can become extremely hot.",

            road:
                "Road access is easier than mountain destinations but major highways can still be busy.",

            network:
                "Mobile and internet coverage is generally reliable.",

            health:
                "Hospitals, clinics and pharmacies are available around Lumbini and Bhairahawa.",

            precautions:
                "Stay hydrated, use sun protection and respect rules inside religious sites."

        },

        rating: 4.8,

        reviews: [

            {
                name: "Sarah Mitchell",
                rating: 5,
                tag: "Pilgrim",
                text: "The Maya Devi Temple garden is deeply moving. Renting a bicycle to tour the monasteries is the best way to see it."
            },

            {
                name: "Amit Patel",
                rating: 4,
                tag: "Culture",
                text: "Peaceful and beautifully maintained. The world peace pagoda and each country's monastery are unique."
            },

            {
                name: "Chen Wei",
                rating: 5,
                tag: "History",
                text: "Walking the birthplace of the Buddha with pilgrims around you is an experience no photo can capture."
            }

        ]

    },



    /* =====================================================
       CHITWAN
    ===================================================== */

    chitwan: {

        name:
            "Chitwan",

        category:
            "Wildlife & Jungle",

        best:
            "🦏 Wildlife & Nature",

        interests: [
            "nature",
            "adventure"
        ],

        coords: {
            lat: 27.57,
            lng: 84.49
        },

        minDays: 2,

        budget: {
            transport: 1200,
            lodging: 3000,
            food: 1000,
            activities: 2000
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "Bardia National Park",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "high",
            road: "low",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,200–1,800",
                    duration: "10–12 hr"
                },
                {
                    type: "Private Car",
                    fare: "Rs 8,000–12,000",
                    duration: "8–9 hr"
                }
            ],

            note: "Major highways connect Chitwan with eastern and central Nepal."

        },

        image:
            image("Chitwan National Park.jpg"),

        description:
            "National park wildlife, Rapti River, wetlands and Tharu cultural experiences.",

        intro:
            "Chitwan offers a completely different Nepal experience built around wildlife, forests, wetlands and local Tharu culture.",


        important: {

            season:
                "October–March",

            route:
                "Itahari → East-West Highway → Chitwan",

            style:
                "Road trip + guided wildlife activity",

            carry:
                "Water, sun protection and insect repellent"

        },


        places: [

            {
                name:
                    "Chitwan National Park",

                type:
                    "Popular",

                image:
                    image("Rhino's in Chitwan National Park.jpg"),

                text:
                    "One of Nepal's most famous wildlife destinations and an important rhino habitat.",

                rating: 4.9
            },


            {
                name:
                    "Rapti River",

                type:
                    "Popular",

                image:
                    image("Rapti River, Sauraha, Chitwan.jpg"),

                text:
                    "An important part of Sauraha's scenery and wildlife tourism experience.",

                rating: 4.6
            },


            {
                name:
                    "Bishazari Tal",

                type:
                    "Underrated",

                image:
                    image("Beeshazari Taal 01.jpg"),

                text:
                    "A quieter wetland destination for nature and bird enthusiasts.",

                rating: 4.4
            }

        ],


        hotels: [

            {
                name:
                    "Budget Lodge",

                price:
                    "Rs. 1,200–2,200",

                text:
                    "Simple accommodation around Sauraha."
            },


            {
                name:
                    "Jungle Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Mid-range stay suitable for park visitors."
            },


            {
                name:
                    "Wildlife Resort",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-comfort accommodation for wildlife-focused trips."
            }

        ],


        guide: {

            travel:
                "Major highways connect Chitwan with eastern and central Nepal.",

            time:
                "Cooler months are more comfortable for jungle activities.",

            food:
                "Try local Tharu dishes as well as common Nepali meals.",

            local:
                "Combine national park activities with genuine Tharu cultural experiences."

        },


        safety: {

            altitude:
                "Chitwan is low altitude, so altitude sickness is not normally relevant.",

            weather:
                "The Terai can become extremely hot and humid.",

            road:
                "Highway journeys can involve traffic, dust and delays.",

            network:
                "Mobile coverage is generally good around Sauraha and larger settlements.",

            health:
                "Bharatpur has significant medical facilities.",

            precautions:
                "Never approach wildlife independently. Always follow park rules and authorised guides."

        },

        rating: 4.8,

        reviews: [

            {
                name: "Hannah Cooper",
                rating: 5,
                tag: "Wildlife",
                text: "A rhino walked right past our canoe. The jeep safari and Tharu village dance made it a full jungle day."
            },

            {
                name: "Dipesh Magar",
                rating: 5,
                tag: "Safari",
                text: "Excellent guides, well organised park. Elephant grass, rivers and dense forest — true adventure."
            },

            {
                name: "Olivia King",
                rating: 4,
                tag: "Nature Lover",
                text: "Saw rhinos, crocodiles and deer. Book an experienced guide and keep quiet — the jungle rewards patience."
            }

        ]

    },



    /* =====================================================
       KATHMANDU
    ===================================================== */

    kathmandu: {

        name:
            "Kathmandu",

        category:
            "Heritage Capital",

        best:
            "🏯 Culture & Food",

        interests: [
            "culture",
            "food",
            "adventure"
        ],

        coords: {
            lat: 27.72,
            lng: 85.32
        },

        minDays: 3,

        budget: {
            transport: 1200,
            lodging: 2500,
            food: 1200,
            activities: 800
        },

        crowdLevel: "high",

        bestSeason:
            "Oct–Nov, Mar–Apr",

        difficulty: "easy",

        hiddenAlt: "Patan & Bhaktapur",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "high",
            network: "low",
            health: "low"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,200–2,000",
                    duration: "12–14 hr"
                },
                {
                    type: "Domestic Flight",
                    fare: "Rs 6,000+",
                    duration: "1 hr"
                }
            ],

            note: "Traffic is the biggest planning issue inside Kathmandu."

        },

        image:
            image("Kathmandu Durbar Square, Nepal.JPG"),

        description:
            "Historic squares, temples, Newari culture, markets and Nepal's largest urban travel hub.",

        intro:
            "Kathmandu combines centuries of heritage with a busy modern city and offers far more than just Thamel.",


        important: {

            season:
                "October–April",

            route:
                "Itahari → road or domestic flight connection",

            style:
                "Urban heritage + food exploration",

            carry:
                "Comfortable shoes, secure bag and dust mask"

        },


        places: [

            {
                name:
                    "Kathmandu Durbar Square",

                type:
                    "Popular",

                image:
                    image("Kathmandu Durbar Square, Temples, Nepal.jpg"),

                text:
                    "One of Kathmandu's major heritage areas with historic temples and palace architecture.",

                rating: 4.8
            },


            {
                name:
                    "Swayambhunath",

                type:
                    "Popular",

                image:
                    image("Swayambhunath temple Kathmandu Nepal.jpg"),

                text:
                    "A famous hilltop Buddhist complex overlooking Kathmandu Valley.",

                rating: 4.8
            },


            {
                name:
                    "Kirtipur",

                type:
                    "Underrated",

                image:
                    image("Kirtipur, Nepal (23636789091).jpg"),

                text:
                    "A historic Newari settlement providing a quieter cultural experience.",

                rating: 4.5
            }

        ],


        hotels: [

            {
                name:
                    "Budget Hostel",

                price:
                    "Rs. 1,000–2,000",

                text:
                    "Common around major tourism neighbourhoods."
            },


            {
                name:
                    "Mid-range City Hotel",

                price:
                    "Rs. 2,500–5,000",

                text:
                    "Comfortable accommodation with broader facilities."
            },


            {
                name:
                    "Boutique Hotel",

                price:
                    "Rs. 5,000+",

                text:
                    "Higher-end accommodation around the valley."
            }

        ],


        guide: {

            travel:
                "Traffic is the biggest planning issue inside Kathmandu. Group nearby attractions together.",

            time:
                "Autumn and spring are comfortable for walking and sightseeing.",

            food:
                "Try momo, Newari cuisine, dal bhat and smaller local restaurants.",

            local:
                "Go beyond Thamel and explore places such as Kirtipur and older neighbourhoods."

        },


        safety: {

            altitude:
                "Kathmandu sits around 1,400 metres and normally causes no serious altitude problems.",

            weather:
                "Monsoon rain can cause traffic disruption and waterlogging.",

            road:
                "Traffic can be chaotic. Be careful when crossing roads.",

            network:
                "Mobile and internet coverage is widely available.",

            health:
                "Kathmandu has Nepal's largest range of hospitals and specialist clinics.",

            precautions:
                "Keep phones and wallets secure in crowded areas."

        },

        rating: 4.7,

        reviews: [

            {
                name: "Marco Rossi",
                rating: 5,
                tag: "Culture",
                text: "Basantapur Durbar Square at dusk is magical. The temples, stupas and street food are a sensory overload."
            },

            {
                name: "Elena Novak",
                rating: 4,
                tag: "History",
                text: "Swayambhunath at sunrise beats the crowds. Pashupatinath is intense but unforgettable."
            },

            {
                name: "Bikash Thapa",
                rating: 5,
                tag: "Foodie",
                text: "From Thamel cafés to local momo joints, Kathmandu eats well. The old city alleys hide the best spots."
            }

        ]

    },



    /* =====================================================
       MUSTANG
    ===================================================== */

    mustang: {

        name:
            "Mustang",

        category:
            "High Himalayan Desert",

        best:
            "🏔 Adventure & Culture",

        interests: [
            "adventure",
            "culture",
            "trekking",
            "hidden"
        ],

        coords: {
            lat: 28.78,
            lng: 83.72
        },

        minDays: 5,

        budget: {
            transport: 2000,
            lodging: 2500,
            food: 1000,
            activities: 500
        },

        crowdLevel: "medium",

        bestSeason:
            "Mar–May, Sep–Nov",

        difficulty: "challenging",

        hiddenAlt: "Nar-Phu Valley",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 2800,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "high",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Road via Pokhara–Jomsom",
                    fare: "Rs 3,000–5,000",
                    duration: "multi-day drive"
                },
                {
                    type: "Flight to Jomsom",
                    fare: "Rs 9,000+",
                    duration: "25 min + jeep"
                }
            ],

            note: "Flights can be delayed or cancelled because of weather."

        },

        image:
            image("Mustang,Nepal.jpg"),

        description:
            "High-altitude desert scenery, traditional villages, Muktinath and dramatic Himalayan roads.",

        intro:
            "Mustang is visually unlike most of Nepal, but its altitude, wind and difficult roads require much more preparation.",


        important: {

            season:
                "March–May and September–November",

            route:
                "Itahari → Pokhara → Jomsom → Mustang",

            style:
                "Long journey + high-altitude road trip",

            carry:
                "Warm clothes, water, medicine and sun protection"

        },


        places: [

            {
                name:
                    "Muktinath",

                type:
                    "Popular",

                image:
                    image("Muktinath-Temple, Mustang, Nepal.jpg"),

                text:
                    "A major sacred destination surrounded by high-altitude Himalayan terrain.",

                rating: 4.8
            },


            {
                name:
                    "Marpha Village",

                type:
                    "Popular",

                image:
                    image("Marpha Village, Mustang, Nepal.jpg"),

                text:
                    "A traditional Mustang village known for stone architecture and apples.",

                rating: 4.6
            },


            {
                name:
                    "Mustang Landscapes",

                type:
                    "Underrated",

                image:
                    image("Mustang Nepal.jpg"),

                text:
                    "The road itself reveals dramatic dry valleys and high Himalayan landscapes.",

                rating: 4.7
            }

        ],


        hotels: [

            {
                name:
                    "Basic Trekking Lodge",

                price:
                    "Rs. 1,500–2,500",

                text:
                    "Simple rooms along common mountain routes."
            },


            {
                name:
                    "Village Guesthouse",

                price:
                    "Rs. 2,000–3,500",

                text:
                    "Comfortable local accommodation."
            },


            {
                name:
                    "Comfort Lodge",

                price:
                    "Rs. 3,500+",

                text:
                    "Higher-comfort accommodation around larger settlements."
            }

        ],


        guide: {

            travel:
                "Most Mustang journeys travel through Pokhara and Jomsom.",

            time:
                "Spring and autumn usually provide more stable travel conditions.",

            food:
                "Try thukpa, momo, local lodge meals and Mustang apple products.",

            local:
                "Allow extra time. Rushing makes altitude adjustment more difficult."

        },


        safety: {

            altitude:
                "Many Mustang destinations exceed 2,500–3,500 metres. Altitude sickness is a genuine risk.",

            weather:
                "Strong winds and sudden temperature changes are common.",

            road:
                "Roads can be rough and flights may be delayed or cancelled because of weather.",

            network:
                "Mobile signal can disappear on remote sections.",

            health:
                "Serious medical emergencies may require evacuation from mountain areas.",

            precautions:
                "Ascend gradually, stay hydrated and react immediately to serious altitude symptoms."

        },

        rating: 4.8,

        reviews: [

            {
                name: "Grace Park",
                rating: 5,
                tag: "Trekker",
                text: "Lo Manthang is like stepping back centuries — whitewashed walls, cave dwellings and endless desert views."
            },

            {
                name: "Peter Hall",
                rating: 5,
                tag: "Adventure",
                text: "The Tiji festival alone is worth the flight to Jomsom. Windy, dry and spectacular country."
            },

            {
                name: "Anisha K.C.",
                rating: 4,
                tag: "Culture",
                text: "Cave monasteries and chortens everywhere. Carry cash and a good wind jacket for the passes."
            }

        ]

    },




/* =====================================================
       EVEREST REGION (SOLUKHUMBU)
    ===================================================== */

    everest: {

        name: "Everest Region",

        category: "Himalaya East",

        best: "🏔 Everest & Sherpa Country",

        interests: [
            "trekking",
            "nature",
            "adventure",
            "culture"
        ],

        coords: {
            lat: 27.98,
            lng: 86.92
        },

        minDays: 8,

        budget: {
            transport: 6000,
            lodging: 5000,
            food: 2000,
            activities: 1500
        },

        crowdLevel: "high",

        bestSeason:
            "Mar–May, Oct–Nov",

        difficulty: "challenging",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 3000,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "medium",
            network: "low",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Flight to Lukla",
                    fare: "Rs 8,000–12,000",
                    duration: "30–40 min"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 6,000–10,000",
                    duration: "10–14 hr"
                }
            ],

            note: "Lukla flights depend heavily on weather. Buffer extra days for delays."

        },

        image:
            image("Everest kalapatthar.jpg"),

        description:
            "The world's highest peak, Sherpa villages, glacier valleys and the trek of a lifetime.",

        intro:
            "Everest Region is the classic Himalayan journey — flights over Everest, teahouse trails through Namche and the famous Base Camp.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Kathmandu → Lukla → Namche → Dingboche → EBC → Lukla",

            style:
                "Trek with teahouse lodges",

            carry:
                "Warm layers, trekking poles, water purification and altitude medicine"

        },


        places: [

            {
                name: "Namche Bazaar",
                type: "Popular",
                rating: 5,
                image: image("Namche Bazaar.jpg"),
                text: "The mountain gateway town of the Khumbu — bakeries, markets and the first great views of Everest."
            },

            {
                name: "Tengboche Monastery",
                type: "Popular",
                rating: 5,
                image: image("Tengboche.jpg"),
                text: "The famous Buddhist monastery with stunning views of Ama Dablam and Everest."
            },

            {
                name: "Everest Base Camp",
                type: "Popular",
                rating: 5,
                image: image("Everest Base Camp.jpg"),
                text: "Standing at the foot of the world's highest mountain surrounded by the Khumbu Icefall."
            }

        ],


        hotels: [

            {
                name: "Teahouse Lodge",
                price: "Rs. 1,500–3,500",
                text: "Basic warm rooms with meals along the main trail."
            },

            {
                name: "Mountain Lodge",
                price: "Rs. 3,000–6,000",
                text: "Better amenities with hot showers in Namche."
            },

            {
                name: "Sherpa Homestay",
                price: "Rs. 1,200–2,500",
                text: "Family-run stays for a deeper Sherpa experience."
            }

        ],


        guide: {

            travel:
                "Fly Kathmandu to Lukla for speed, or trek from Jiri if you want the classic longer route. Flights are weather-sensitive — keep buffer days.",

            time:
                "Autumn gives the clearest Everest views; spring brings rhododendrons and warmer nights. Winter is possible but very cold.",

            food:
                "Teahouses serve dal bhat, Tibetan bread, noodles and strong hot drinks — dal bhat is the reliable energy meal.",

            local:
                "Acclimatise properly — climb high, sleep low. Walk slowly, drink lots of water and enjoy the mountains rather than rushing."

        },


        safety: {

            altitude:
                "Above 3,000 metres altitude sickness is a real risk. Climb gradually and know the symptoms.",

            weather:
                "Mountain weather changes fast — cold, wind and snow can arrive suddenly.",

            road:
                "Lukla airport and mountain trails are the main concern, not roads. Trail conditions depend on season.",

            network:
                "Wi-Fi and mobile signal exist in villages but vanish on trails.",

            health:
                "Medical care is limited. Carry personal medicine and a basic first-aid kit.",

            precautions:
                "Carry an AMS awareness, trek with a partner or guide, and turn back or descend at the first signs of serious altitude sickness."

        },


        rating: 4.9,


        reviews: [

            {
                name: "David Miller",
                rating: 5,
                tag: "Trekker",
                text: "Standing at Base Camp was the highlight of my life. The teahouse trail is well managed if you acclimatise properly."
            },

            {
                name: "Emma Wilson",
                rating: 5,
                tag: "Adventure",
                text: "Namche and Tengboche are magical. Fly out with spare days — weather delays are normal."
            },

            {
                name: "Priya Nair",
                rating: 4,
                tag: "Family",
                text: "Tough but rewarding. Our guide made the kids feel safe the whole way."
            }

        ]

    },



    /* =====================================================
       ANNAPURNA REGION
    ===================================================== */

    annapurna: {

        name: "Annapurna Region",

        category: "Western Himalaya",

        best: "🏔 Annapurna & Machapuchare Trails",

        interests: [
            "trekking",
            "nature",
            "adventure",
            "relaxation"
        ],

        coords: {
            lat: 28.39,
            lng: 83.93
        },

        minDays: 6,

        budget: {
            transport: 4000,
            lodging: 3500,
            food: 1800,
            activities: 1200
        },

        crowdLevel: "high",

        bestSeason:
            "Mar–May, Oct–Nov",

        difficulty: "moderate",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2800,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "medium",
            network: "low",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 1,000–1,500",
                    duration: "7–8 hr from Pokhara"
                },
                {
                    type: "Private Jeep",
                    fare: "Rs 6,000–9,000",
                    duration: "4–6 hr from Pokhara"
                }
            ],

            note: "Most treks start from Pokhara. Buses run daily and jeeps can be shared."

        },

        image:
            image("Machapuchare.jpg"),

        description:
            "Fishtail Mountain, Poon Hill sunrises, Ghandruk villages and the Annapurna circuit.",

        intro:
            "Annapurna Region offers some of Nepal's most varied and accessible trekking — from the sunrise viewpoint of Poon Hill to high mountain villages under Annapurna's giants.",


        important: {

            season:
                "March–May and October–November",

            route:
                "Pokhara → Nayapul → Ghandruk → Poon Hill → Tadapani",

            style:
                "Teahouse trek, 2–7 day options",

            carry:
                "Warm layers, rain jacket, sunscreen, water and trekking poles"

        },


        places: [

            {
                name: "Ghandruk Village",
                type: "Popular",
                rating: 5,
                image: image("Ghandruk.jpg"),
                text: "A beautiful Gurung village with stone houses, museum and close-up mountain views."
            },

            {
                name: "Poon Hill",
                type: "Popular",
                rating: 5,
                image: image("Ghorepani.jpg"),
                text: "The famous sunrise viewpoint over the Annapurna and Dhaulagiri ranges."
            },

            {
                name: "Annapurna Base Camp",
                type: "Popular",
                rating: 5,
                image: image("Annapurna Base Camp.jpg"),
                text: "A trek ending in an amphitheatre of 8,000-metre peaks."
            }

        ],


        hotels: [

            {
                name: "Teahouse Lodge",
                price: "Rs. 1,200–3,000",
                text: "Warm simple rooms along all the main trails."
            },

            {
                name: "Mountain Resort",
                price: "Rs. 3,500–7,000",
                text: "Better comfort in Ghandruk and Poon Hill areas."
            },

            {
                name: "Village Homestay",
                price: "Rs. 1,000–2,200",
                text: "Stay with Gurung families for authentic meals."
            }

        ],


        guide: {

            travel:
                "Start from Pokhara. A short drive to Nayapul puts you on the trail in under an hour.",

            time:
                "Spring and autumn are ideal. Poon Hill is best at sunrise — start walking before dawn.",

            food:
                "Dal bhat, local curries and apple pie at trail cafes are highlights of the trek.",

            local:
                "Take the low route on the way down to enjoy villages instead of rushing the downhill."

        },


        safety: {

            altitude:
                "Reach up to 4,130 m at Annapurna Base Camp. Ascend gradually and acclimatise.",

            weather:
                "Mountain weather changes fast; mornings are often clearest.",

            road:
                "Roads from Pokhara can be rough in the monsoon season.",

            network:
                "Mobile signal works in most villages; Wi-Fi at teahouses.",

            health:
                "Carry a first-aid kit and personal medicine. Evacuation is possible by helicopter if needed.",

            precautions:
                "Walk at your own pace, stay hydrated and listen to your body at altitude."

        },


        rating: 4.8,


        reviews: [

            {
                name: "James Anderson",
                rating: 5,
                tag: "Adventure",
                text: "Poon Hill sunrise is worth every early morning. Ghandruk village was my favourite stop."
            },

            {
                name: "Laura Meyer",
                rating: 5,
                tag: "Solo",
                text: "Easy to do without a guide. The teahouses and trail signs are excellent."
            },

            {
                name: "Olivia Brown",
                rating: 4,
                tag: "Family",
                text: "We did a short 4-day loop with kids — safe, warm and unforgettable."
            }

        ]

    },



    /* =====================================================
       LANGTANG VALLEY
    ===================================================== */

    langtang: {

        name: "Langtang Valley",

        category: "Central Himalaya",

        best: "🏔 Short Himalayan Valley",

        interests: [
            "trekking",
            "nature",
            "hidden",
            "adventure"
        ],

        coords: {
            lat: 28.21,
            lng: 85.58
        },

        minDays: 5,

        budget: {
            transport: 2500,
            lodging: 2500,
            food: 1500,
            activities: 800
        },

        crowdLevel: "medium",

        bestSeason:
            "Mar–May, Sep–Nov",

        difficulty: "moderate",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3800,
            porterPerDay: 2600,
            porterLoadKg: 22
        },

        safetyLevels: {
            altitude: "medium",
            weather: "high",
            road: "medium",
            network: "low",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 500–800",
                    duration: "6–8 hr from Kathmandu"
                },
                {
                    type: "Private Jeep",
                    fare: "Rs 8,000–12,000",
                    duration: "4–5 hr from Kathmandu"
                }
            ],

            note: "The valley starts at Syabrubesi, about a day's drive from Kathmandu."

        },

        image:
            image("Langtang Lirung.jpg"),

        description:
            "Glaciers, yak pastures and quiet teahouse trails just a short drive from Kathmandu.",

        intro:
            "Langtang is one of the most accessible high Himalayan valleys — dramatic peaks, warm Tamang villages and few crowds.",


        important: {

            season:
                "March–May and September–November",

            route:
                "Kathmandu → Syabrubesi → Lama Hotel → Kyanjin Gompa",

            style:
                "Teahouse trek, 5–7 days",

            carry:
                "Warm layers, rain gear, water purification and snacks"

        },


        places: [

            {
                name: "Kyanjin Gompa",
                type: "Popular",
                rating: 5,
                image: image("Kyanjin Gompa.jpg"),
                text: "A high mountain village with a monastery, cheese factory and 360° peaks."
            },

            {
                name: "Langtang Village",
                type: "Popular",
                rating: 4,
                image: image("Langtang village.jpg"),
                text: "A resilient village that beautifully rebuilt after the 2015 earthquake."
            },

            {
                name: "Tsho Rolpa Lake",
                type: "Underrated",
                rating: 5,
                image: image("Tsho Rolpa.jpg"),
                text: "A deep turquoise glacial lake on the quieter route over the Ganja La."
            }

        ],


        hotels: [

            {
                name: "Teahouse Lodge",
                price: "Rs. 1,200–2,500",
                text: "Warm rooms and meals all along the valley."
            },

            {
                name: "Mountain Lodge",
                price: "Rs. 2,500–4,500",
                text: "More comfort at Kyanjin Gompa."
            },

            {
                name: "Family Guesthouse",
                price: "Rs. 1,000–2,000",
                text: "Cozy village stays with home cooking."
            }

        ],


        guide: {

            travel:
                "Drive from Kathmandu to Syabrubesi in about 5–6 hours. Buses and jeeps both run daily.",

            time:
                "Spring brings rhododendrons; autumn gives the clearest views of Langtang Lirung.",

            food:
                "Local yak cheese, dal bhat and Tibetan bread are the valley specialities.",

            local:
                "Walk slowly at altitude and spend a night at Kyanjin Gompa to enjoy the peaks."

        },


        safety: {

            altitude:
                "Kyanjin Gompa sits near 3,900 m — altitude awareness matters above 3,000 m.",

            weather:
                "Sudden snow and strong sun are both possible — carry sun protection and layers.",

            road:
                "The approach road from Kathmandu can be affected by landslides in monsoon.",

            network:
                "Signal is good in villages, patchy on trails.",

            health:
                "Basic health posts exist in the valley; serious cases go to Kathmandu.",

            precautions:
                "Start walking early, carry water and check weather before high passes."

        },


        rating: 4.7,


        reviews: [

            {
                name: "Hiro Tanaka",
                rating: 5,
                tag: "Trekker",
                text: "So close to Kathmandu yet so wild. Kyanjin Gompa at sunrise is unbeatable."
            },

            {
                name: "Sarah Park",
                rating: 5,
                tag: "Friends",
                text: "Quieter than Everest or Annapurna — we loved the empty trails and yak pastures."
            },

            {
                name: "Rajan Gurung",
                rating: 4,
                tag: "Couple",
                text: "A perfect 5-day escape. The valley communities are incredibly welcoming."
            }

        ]

    },



    /* =====================================================
       RARA LAKE
    ===================================================== */

    rara: {

        name: "Rara Lake",

        category: "Far West Himalaya",

        best: "🌊 Nepal's Largest Lake",

        interests: [
            "lakes",
            "nature",
            "hidden",
            "relaxation"
        ],

        coords: {
            lat: 29.53,
            lng: 82.09
        },

        minDays: 4,

        budget: {
            transport: 4500,
            lodging: 2500,
            food: 1200,
            activities: 600
        },

        crowdLevel: "low",

        bestSeason:
            "Mar–May, Sep–Oct",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "medium",
            weather: "high",
            road: "high",
            network: "low",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Flight to Jumla",
                    fare: "Rs 8,000–12,000",
                    duration: "45 min"
                },
                {
                    type: "Local Bus",
                    fare: "Rs 1,500–2,500",
                    duration: "2–3 days via Nepalgunj"
                }
            ],

            note: "The easiest route is fly to Jumla then 2–3 hours of jeep and walk to the lake."

        },

        image:
            image("Rara lake.jpg"),

        description:
            "Nepal's largest and deepest lake, ringed by pine forest in the remote far west.",

        intro:
            "Rara is a deep blue jewel in Nepal's least-visited corner — pristine, silent and unforgettable.",


        important: {

            season:
                "September–October and April–May",

            route:
                "Kathmandu → Nepalgunj → Jumla → Rara",

            style:
                "Flight + jeep + short walk",

            carry:
                "Warm layers, waterproof gear, cash and power bank"

        },


        places: [

            {
                name: "Rara Lake Views",
                type: "Popular",
                rating: 5,
                image: image("Rara lake.jpg"),
                text: "The classic lake viewpoint over crystal blue water and pine hills."
            },

            {
                name: "Murma Hill",
                type: "Underrated",
                rating: 5,
                image: image("Murma top.jpg"),
                text: "A short climb offering the best panorama of the whole lake."
            },

            {
                name: "Lakeside Trails",
                type: "Underrated",
                rating: 4,
                image: image("Rara.jpg"),
                text: "Quiet forest walks around the lake with almost no other travellers."
            }

        ],


        hotels: [

            {
                name: "Lakeside Lodge",
                price: "Rs. 1,500–3,000",
                text: "Simple rooms near the lake shore."
            },

            {
                name: "Park Guesthouse",
                price: "Rs. 2,000–4,000",
                text: "Warmer options close to the park gate."
            },

            {
                name: "Jumla Hotel",
                price: "Rs. 1,000–2,500",
                text: "Practical stopover rooms before the drive in."
            }

        ],


        guide: {

            travel:
                "Fly Kathmandu to Jumla, then a jeep and short walk reach the lake. It's remote — plan carefully.",

            time:
                "Autumn is clearest and driest. Winter brings snow and very cold nights.",

            food:
                "Expect simple dal bhat and local dishes — stock snacks before leaving Jumla.",

            local:
                "Go for the silence, not the itinerary. Sunrise and sunset by the lake are the magic hours."

        },


        safety: {

            altitude:
                "The lake sits around 2,990 m — mild altitude effects are possible.",

            weather:
                "Nights are cold year-round and mountain weather changes fast.",

            road:
                "Roads from Jumla are rough and can be blocked in rain.",

            network:
                "Signal is weak or absent around the lake — download maps in advance.",

            health:
                "Medical facilities are limited; carry medicine and a first-aid kit.",

            precautions:
                "Carry cash, warm clothes and tell someone your itinerary before heading out."

        },


        rating: 4.8,


        reviews: [

            {
                name: "Maya Gurung",
                rating: 5,
                tag: "Solo",
                text: "The bluest lake I've ever seen and completely empty. Heaven for quiet travellers."
            },

            {
                name: "Tom Baker",
                rating: 5,
                tag: "Backpacker",
                text: "Remote but worth every bump in the jeep. Murma Hill at sunrise is unreal."
            },

            {
                name: "Anita Shrestha",
                rating: 4,
                tag: "Family",
                text: "Gorgeous and peaceful. Pack warm clothes — nights get very cold."
            }

        ]

    },



    /* =====================================================
       JANAKPUR
    ===================================================== */

    janakpur: {

        name: "Janakpur",

        category: "Terai Heritage",

        best: "🏯 City of Temples",

        interests: [
            "culture",
            "food",
            "relaxation"
        ],

        coords: {
            lat: 26.73,
            lng: 85.92
        },

        minDays: 2,

        budget: {
            transport: 700,
            lodging: 1500,
            food: 600,
            activities: 300
        },

        crowdLevel: "medium",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3000,
            porterPerDay: 2200,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "high",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 300–500",
                    duration: "4–5 hr from Itahari"
                },
                {
                    type: "Train",
                    fare: "Rs 200–400",
                    duration: "3–4 hr from Jayanagar (India)"
                }
            ],

            note: "Janakpur has a railway connection from the Indian side, a fun and historic way to arrive."

        },

        image:
            image("Janaki Mandir.jpg"),

        description:
            "The grand temple of Goddess Sita and the colourful, sacred heart of Maithili culture.",

        intro:
            "Janakpur is Nepal's City of Temples — sacred, colourful and full of life, famous as the birthplace of Sita.",


        important: {

            season:
                "October–March",

            route:
                "Itahari → Janakpur by bus or train",

            style:
                "City and temple sightseeing",

            carry:
                "Comfortable shoes, modest clothes and sun protection"

        },


        places: [

            {
                name: "Janaki Mandir",
                type: "Popular",
                rating: 5,
                image: image("Janaki Mandir.jpg"),
                text: "A beautiful pink-and-white temple, one of Nepal's most important pilgrimage sites."
            },

            {
                name: "Ram Sita Vivah Mandap",
                type: "Popular",
                rating: 4,
                image: image("Ram Sita Vivah Mandap.jpg"),
                text: "The temple marking where Rama and Sita are said to have married."
            },

            {
                name: "Ganga Sagar Pond",
                type: "Underrated",
                rating: 4,
                image: image("Gangasagar.jpg"),
                text: "A sacred pond full of turtles where pilgrims bathe before worship."
            }

        ],


        hotels: [

            {
                name: "City Hotel",
                price: "Rs. 1,200–2,500",
                text: "Comfortable rooms near the temple area."
            },

            {
                name: "Heritage Lodge",
                price: "Rs. 2,000–3,500",
                text: "Nice mid-range options close to Janaki Mandir."
            },

            {
                name: "Budget Lodge",
                price: "Rs. 800–1,500",
                text: "Simple, clean rooms for short stays."
            }

        ],


        guide: {

            travel:
                "Buses from Itahari and Dharan run regularly. The train from Jayanagar is a highlight in itself.",

            time:
                "Cooler months are best. The grand festival of Vivah Panchami in November-December draws huge crowds and colour.",

            food:
                "Try local Maithili thali, sweets and the famous street food around the temple.",

            local:
                "Dress modestly and remove shoes at temples. Watch artisans painting Mithila art in the town."

        },


        safety: {

            altitude:
                "Terai plains — no altitude concerns.",

            weather:
                "Summers are very hot; winters are pleasant. Carry water in summer.",

            road:
                "Roads from the east are generally good.",

            network:
                "Mobile and internet coverage are strong.",

            health:
                "Hospitals exist in town for basic needs.",

            precautions:
                "Keep belongings close in busy market areas and temple crowds."

        },


        rating: 4.5,


        reviews: [

            {
                name: "Ravi Kumar",
                rating: 5,
                tag: "Culture",
                text: "Janaki Mandir at dusk is breathtaking. The city feels sacred and very welcoming."
            },

            {
                name: "Laura Meyer",
                rating: 4,
                tag: "Solo",
                text: "Wonderful temples and great sweets. A full day is enough to see the highlights."
            },

            {
                name: "Nabin Joshi",
                rating: 4,
                tag: "Family",
                text: "Visit in winter to enjoy the cool weather and the festival season."
            }

        ]

    },



    /* =====================================================
       BANDIPUR
    ===================================================== */

    bandipur: {

        name: "Bandipur",

        category: "Mid-Hill Town",

        best: "🏯 Living Heritage Town",

        interests: [
            "culture",
            "hidden",
            "relaxation",
            "nature"
        ],

        coords: {
            lat: 27.94,
            lng: 84.41
        },

        minDays: 2,

        budget: {
            transport: 1500,
            lodging: 2500,
            food: 1000,
            activities: 500
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Apr",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3000,
            porterPerDay: 2200,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "high",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Tourist Bus",
                    fare: "Rs 500–800",
                    duration: "3–4 hr from Kathmandu"
                },
                {
                    type: "Local Bus",
                    fare: "Rs 600–900",
                    duration: "3–4 hr from Pokhara"
                }
            ],

            note: "Buses stop at the highway junction below the town; walk or jeep up the last 3 km."

        },

        image:
            image("Bandipur, Nepal.jpg"),

        description:
            "A preserved Newari hill town of old streets, mountain views and quiet cafés.",

        intro:
            "Bandipur is a living museum — a traffic-free Newari town on a ridge with Dhaulagiri and Himalchuli views.",


        important: {

            season:
                "October–April",

            route:
                "Kathmandu → Bandipur (highway) or Pokhara → Bandipur",

            style:
                "Heritage strolls + viewpoint walks",

            carry:
                "Comfortable walking shoes, warm layer for evenings"

        },


        places: [

            {
                name: "Bandipur Durbar",
                type: "Popular",
                rating: 5,
                image: image("Bandipur durbar.jpg"),
                text: "The old palace at the heart of the town square, surrounded by heritage homes."
            },

            {
                name: "Thani Mai Temple",
                type: "Underrated",
                rating: 5,
                image: image("Bandipur Palace.jpg"),
                text: "A short ridge walk to the hilltop temple with spectacular Himalayan sunrises."
            },

            {
                name: "Siddha Gufa",
                type: "Popular",
                rating: 4,
                image: image("Siddha Gufa.jpg"),
                text: "One of Nepal's largest caves — an adventure of ladders, stalactites and bats."
            }

        ],


        hotels: [

            {
                name: "Heritage Inn",
                price: "Rs. 2,500–5,000",
                text: "Traditional Newari houses converted into boutique stays."
            },

            {
                name: "Rooftop Guesthouse",
                price: "Rs. 1,500–3,000",
                text: "Great mountain views and simple comfort."
            },

            {
                name: "Highway Hotel",
                price: "Rs. 1,000–2,000",
                text: "Budget rooms at the town entrance."
            }

        ],


        guide: {

            travel:
                "Sit on the left side of the bus from Kathmandu for the views. The short jeep or walk up from the highway is worth it.",

            time:
                "Autumn to spring is ideal. Sunrise from the viewpoints above town is a must.",

            food:
                "Bandipur is known for its rooftop cafés — try local Newari dishes and freshly baked bread.",

            local:
                "The town is traffic-free by day. Walk the old streets slowly and talk with artisans."

        },


        safety: {

            altitude:
                "Around 1,000 m — no altitude concerns.",

            weather:
                "Evenings are cool; fog sometimes rolls in on the ridge.",

            road:
                "The highway below is busy; the last road up to town is steep but paved.",

            network:
                "Mobile signal is decent in town.",

            health:
                "Basic clinics available; bigger hospitals in Dumre or Pokhara.",

            precautions:
                "Use the marked viewpoint trails and carry water for the cave visit."

        },


        rating: 4.7,


        reviews: [

            {
                name: "Aisha Rai",
                rating: 5,
                tag: "Solo",
                text: "The most charming town in Nepal. Rooftop cafés, empty streets and huge mountain views."
            },

            {
                name: "Ryan Smith",
                rating: 4,
                tag: "Backpacker",
                text: "Perfect 2-day break between Kathmandu and Pokhara. Do the sunrise walk!"
            },

            {
                name: "Priya Nair",
                rating: 5,
                tag: "Family",
                text: "Safe, walkable and lovely for kids. The heritage homes are beautiful."
            }

        ]

    },



    /* =====================================================
       NAGARKOT
    ===================================================== */

    nagarkot: {

        name: "Nagarkot",

        category: "Kathmandu Valley",

        best: "🌄 Himalayan Sunrise Viewpoint",

        interests: [
            "nature",
            "relaxation",
            "adventure"
        ],

        coords: {
            lat: 27.71,
            lng: 85.52
        },

        minDays: 1,

        budget: {
            transport: 1500,
            lodging: 3000,
            food: 800,
            activities: 400
        },

        crowdLevel: "medium",

        bestSeason:
            "Oct–Apr",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3000,
            porterPerDay: 2200,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 150–300",
                    duration: "1.5–2 hr from Kathmandu"
                },
                {
                    type: "Private Car",
                    fare: "Rs 3,000–5,000",
                    duration: "1–1.5 hr from Kathmandu"
                }
            ],

            note: "An easy overnight or day trip from Kathmandu, best for sunrise."

        },

        image:
            image("Nagarkot.jpg"),

        description:
            "The classic sunrise viewpoint where four Himalayan ranges line up across the valley.",

        intro:
            "Nagarkot is the closest taste of the Himalayas to Kathmandu — a hilltop resort village famous for its panoramic sunrises.",


        important: {

            season:
                "October–April for clear mornings",

            route:
                "Kathmandu → Nagarkot (1–2 hr drive)",

            style:
                "Overnight stay + sunrise viewing",

            carry:
                "Warm jacket, camera, water and snacks"

        },


        places: [

            {
                name: "Sunrise View Tower",
                type: "Popular",
                rating: 5,
                image: image("Nagarkot.jpg"),
                text: "The main viewpoint with a panoramic sweep of the eastern Himalaya."
            },

            {
                name: "Sunrise Terrace",
                type: "Popular",
                rating: 4,
                image: image("Nagarkot sunrise.jpg"),
                text: "Many hotels face east for private golden-hour views over Everest."
            },

            {
                name: "Dhulikhel Ridge",
                type: "Underrated",
                rating: 4,
                image: image("Dhulikhel, Nepal.jpg"),
                text: "A beautiful ridge town nearby with culture and quieter viewpoints."
            }

        ],


        hotels: [

            {
                name: "Hilltop Resort",
                price: "Rs. 4,000–8,000",
                text: "East-facing rooms designed for sunrise views."
            },

            {
                name: "Mountain Hotel",
                price: "Rs. 2,000–4,000",
                text: "Comfortable mid-range stays near the tower."
            },

            {
                name: "Budget Lodge",
                price: "Rs. 1,000–2,000",
                text: "Simple rooms for travellers watching the budget."
            }

        ],


        guide: {

            travel:
                "A car or bus from Kathmandu is easy. Go up in the afternoon, then watch sunset and sunrise.",

            time:
                "The best months for clear views are October through April. Check the forecast before booking.",

            food:
                "Hotel restaurants serve buffet meals; try local Newari snacks too.",

            local:
                "Don't only come for the sunrise — the forest trails around the hill are lovely for a walk."

        },


        safety: {

            altitude:
                "Around 2,175 m — mild for most people.",

            weather:
                "Mornings can be very cold; afternoons warm quickly.",

            road:
                "The road is winding but mostly paved.",

            network:
                "Mobile and internet work well in the village.",

            health:
                "Basic clinics nearby; Kathmandu hospitals within reach.",

            precautions:
                "Arrive early for sunrise and carry warm layers."

        },


        rating: 4.6,


        reviews: [

            {
                name: "Fatima Zahra",
                rating: 5,
                tag: "Culture",
                text: "Watched Everest glow at sunrise from my hotel window. Unforgettable."
            },

            {
                name: "Liam O'Connor",
                rating: 4,
                tag: "Couple",
                text: "Close to Kathmandu and totally worth one night. Book an east-facing room."
            },

            {
                name: "Deepak KC",
                rating: 4,
                tag: "Family",
                text: "Clear skies in winter made it magical. The kids loved the forest trails."
            }

        ]

    },



    /* =====================================================
       GORKHA
    ===================================================== */

    gorkha: {

        name: "Gorkha",

        category: "Mid-Hill Heritage",

        best: "🏯 Birthplace of Modern Nepal",

        interests: [
            "culture",
            "history",
            "nature"
        ],

        coords: {
            lat: 27.99,
            lng: 84.63
        },

        minDays: 2,

        budget: {
            transport: 1200,
            lodging: 2000,
            food: 800,
            activities: 400
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Apr",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3200,
            porterPerDay: 2300,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 400–700",
                    duration: "5–6 hr from Kathmandu"
                },
                {
                    type: "Private Jeep",
                    fare: "Rs 7,000–10,000",
                    duration: "4–5 hr from Kathmandu"
                }
            ],

            note: "Gorkha is on the Prithvi Highway — an easy stop between Kathmandu and Pokhara."

        },

        image:
            image("Gorkha.jpg"),

        description:
            "The hilltop Durbar of Nepal's unifier, King Prithvi Narayan Shah, with valley views.",

        intro:
            "Gorkha is where modern Nepal began — an ancient hilltop palace, museum and sweeping mountain views.",


        important: {

            season:
                "October–April",

            route:
                "Kathmandu → Gorkha (5–6 hr) or Pokhara → Gorkha (3–4 hr)",

            style:
                "Heritage site + day hikes",

            carry:
                "Walking shoes, water and a hat"

        },


        places: [

            {
                name: "Gorkha Durbar",
                type: "Popular",
                rating: 5,
                image: image("Gorkha Durbar.jpg"),
                text: "The dramatic hilltop palace complex where Prithvi Narayan Shah was born."
            },

            {
                name: "Manakamana Temple",
                type: "Popular",
                rating: 4,
                image: image("Manakamana temple.jpg"),
                text: "A famous wish-granting goddess temple reached by cable car."
            },

            {
                name: "Gorakhnath Cave",
                type: "Underrated",
                rating: 4,
                image: image("Gorakhnath cave.jpg"),
                text: "A sacred cave shrine below the Durbar with local legends."
            }

        ],


        hotels: [

            {
                name: "Heritage Hotel",
                price: "Rs. 2,000–4,500",
                text: "Comfortable stays in the historic town."
            },

            {
                name: "Hill Resort",
                price: "Rs. 2,500–5,000",
                text: "Rooms with views of the Dhaulagiri range."
            },

            {
                name: "Budget Lodge",
                price: "Rs. 800–1,500",
                text: "Simple options near the bus park."
            }

        ],


        guide: {

            travel:
                "The Durbar is a short steep climb from the town. Cable car runs to Manakamana nearby.",

            time:
                "Any season works, but autumn and spring give the clearest mountain views from the palace.",

            food:
                "Try local dal bhat and the tea shops along the climb to the Durbar.",

            local:
                "The museum inside the palace tells the story of Nepal's unification — don't skip it."

        },


        safety: {

            altitude:
                "Hill town around 1,500 m — comfortable for most.",

            weather:
                "Pleasant days, cool nights; monsoon brings rain.",

            road:
                "The highway is good; the climb to the Durbar is steep but paved.",

            network:
                "Good mobile coverage in town.",

            health:
                "Basic clinics in town; hospitals in Kathmandu or Pokhara.",

            precautions:
                "Carry water for the palace climb and wear good shoes."

        },


        rating: 4.5,


        reviews: [

            {
                name: "Aayush Thapa",
                rating: 5,
                tag: "Friends",
                text: "History comes alive here. The palace views over the whole valley are stunning."
            },

            {
                name: "Claire Dubois",
                rating: 4,
                tag: "Culture",
                text: "Quiet, authentic and fascinating. Easy to pair with the Manakamana cable car."
            },

            {
                name: "Emma Wilson",
                rating: 4,
                tag: "Adventure",
                text: "Lovely hill town with a great sunrise from the Durbar."
            }

        ]

    },



    /* =====================================================
       PALPA (TANSEN)
    ===================================================== */

    palpa: {

        name: "Palpa (Tansen)",

        category: "Western Mid-Hill",

        best: "🏯 Historic Hill Town",

        interests: [
            "culture",
            "hidden",
            "relaxation"
        ],

        coords: {
            lat: 27.86,
            lng: 83.54
        },

        minDays: 2,

        budget: {
            transport: 1500,
            lodging: 2500,
            food: 900,
            activities: 400
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3000,
            porterPerDay: 2200,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "medium",
            network: "medium",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 700–1,000",
                    duration: "6–7 hr from Pokhara"
                },
                {
                    type: "Local Bus",
                    fare: "Rs 1,000–1,500",
                    duration: "8–9 hr from Kathmandu"
                }
            ],

            note: "Tansen sits above the highway junction near Sunauli/Bhairahawa."

        },

        image:
            image("Tansen, Palpa.jpg"),

        description:
            "A historic Newari hill town with a palace, bazaar and sweeping mountain horizons.",

        intro:
            "Palpa's Tansen is a beautifully preserved Newari town of red-brick streets, rickshaws and endless hill views.",


        important: {

            season:
                "October–March",

            route:
                "Pokhara → Tansen or Bhairahawa → Tansen",

            style:
                "Heritage strolls + viewpoints",

            carry:
                "Walking shoes, camera and a light jacket"

        },


        places: [

            {
                name: "Tansen Durbar",
                type: "Popular",
                rating: 4,
                image: image("Tansen Durbar.jpg"),
                text: "A handsome palace and museum overlooking the historic town."
            },

            {
                name: "Rani Mahal",
                type: "Underrated",
                rating: 5,
                image: image("Rani Mahal.jpg"),
                text: "A romantic riverside palace on the Kali Gandaki — a photographer's dream."
            },

            {
                name: "Shreenagar Danda",
                type: "Underrated",
                rating: 5,
                image: image("Shreenagar Danda.jpg"),
                text: "A quiet ridge with Himalayan panoramas, ideal at sunrise."
            }

        ],


        hotels: [

            {
                name: "Heritage Guesthouse",
                price: "Rs. 2,000–4,000",
                text: "Newari-style rooms in the old town."
            },

            {
                name: "Hill Hotel",
                price: "Rs. 1,500–3,000",
                text: "Comfortable stays with mountain views."
            },

            {
                name: "Budget Lodge",
                price: "Rs. 800–1,500",
                text: "Simple rooms near the bazaar."
            }

        ],


        guide: {

            travel:
                "Buses from Pokhara and Bhairahawa stop at Sunauli; taxis and jeeps climb the last stretch to Tansen.",

            time:
                "Autumn and winter are clearest. Rani Mahal is best in the cool months when the river is calm.",

            food:
                "Try the town's fresh bread, local curries and sweet tea in the old bazaar cafés.",

            local:
                "The old bazaar is full of craft shops — brass, dhaka weaving and traditional metalwork."

        },


        safety: {

            altitude:
                "Around 1,300 m — comfortable elevation.",

            weather:
                "Mild days and cool nights; mornings can be foggy.",

            road:
                "The highway below is busy; the climb to town is winding.",

            network:
                "Good coverage in town.",

            health:
                "Basic clinics available; bigger towns nearby for emergencies.",

            precautions:
                "Watch traffic on the highway and carry water for viewpoint walks."

        },


        rating: 4.6,


        reviews: [

            {
                name: "Michael Chen",
                rating: 5,
                tag: "Backpacker",
                text: "Tansen feels untouched by mass tourism. Rani Mahal is worth the trip alone."
            },

            {
                name: "Sarah Park",
                rating: 4,
                tag: "Friends",
                text: "Beautiful old town and lovely people. Great weekend escape."
            },

            {
                name: "Ravi Kumar",
                rating: 5,
                tag: "Culture",
                text: "The dhaka weaving and hill views are unforgettable. A hidden gem."
            }

        ]

    },



    /* =====================================================
       BARDIA NATIONAL PARK
    ===================================================== */

    bardia: {

        name: "Bardia National Park",

        category: "Far West Terai",

        best: "🐘 Wild National Park",

        interests: [
            "nature",
            "adventure",
            "hidden"
        ],

        coords: {
            lat: 28.40,
            lng: 81.48
        },

        minDays: 3,

        budget: {
            transport: 3500,
            lodging: 3000,
            food: 1200,
            activities: 1500
        },

        crowdLevel: "low",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 4000,
            porterPerDay: 2800,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "high",
            road: "medium",
            network: "low",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Flight to Nepalgunj",
                    fare: "Rs 6,000–9,000",
                    duration: "1 hr from Kathmandu"
                },
                {
                    type: "Local Bus",
                    fare: "Rs 1,200–2,000",
                    duration: "1 day via Nepalgunj"
                }
            ],

            note: "Fly to Nepalgunj then drive about 1–2 hours to the park gates."

        },

        image:
            image("Bardiya National Park.jpg"),

        description:
            "Nepal's wildest tiger country — thick sal forest, river beaches and almost empty trails.",

        intro:
            "Bardiya is the uncrowded alternative to Chitwan — deep forest, wild elephants and the best tiger odds in Nepal.",


        important: {

            season:
                "October–March",

            route:
                "Kathmandu → Nepalgunj → Thakurdwara",

            style:
                "Jeep safari + jungle walks",

            carry:
                "Binoculars, insect repellent, light clothes and a hat"

        },


        places: [

            {
                name: "Karnali River Safari",
                type: "Popular",
                rating: 5,
                image: image("Karnali river.jpg"),
                text: "Canoe and elephant-back trips along Nepal's longest river."
            },

            {
                name: "Tharu Village",
                type: "Underrated",
                rating: 4,
                image: image("Tharu village.jpg"),
                text: "Cultural evenings with Tharu music, dance and local stories."
            },

            {
                name: "Babai Valley",
                type: "Underrated",
                rating: 5,
                image: image("Babai river.jpg"),
                text: "The quieter side of the park, famous for wild elephants and tigers."
            }

        ],


        hotels: [

            {
                name: "Jungle Lodge",
                price: "Rs. 3,000–6,000",
                text: "Riverside lodges with safari packages."
            },

            {
                name: "Eco Camp",
                price: "Rs. 1,500–3,000",
                text: "Tented camping close to the park."
            },

            {
                name: "Homestay",
                price: "Rs. 1,200–2,500",
                text: "Stay with Tharu families near the gates."
            }

        ],


        guide: {

            travel:
                "Fly to Nepalgunj and drive to Thakurdwara, the main gateway village.",

            time:
                "October to March is best. Early mornings and late afternoons give the best wildlife sightings.",

            food:
                "Lodges serve Nepali and Tharu dishes; jungle meals are simple and filling.",

            local:
                "Always go with licensed guides and follow park rules — wildlife encounters are real."

        },


        safety: {

            altitude:
                "Lowland terai — no altitude concerns.",

            weather:
                "Hot in summer; pleasant and dry in winter. Be alert for wildlife.",

            road:
                "Approach roads are decent but slow in the monsoon.",

            network:
                "Signal is limited deep in the park.",

            health:
                "Malaria and dengue are possible in summer — use repellent and consult a doctor for medication.",

            precautions:
                "Never walk alone in the jungle, follow your guide and keep quiet on safari."

        },


        rating: 4.8,


        reviews: [

            {
                name: "Deepak KC",
                rating: 5,
                tag: "Adventure",
                text: "Saw a tiger within two days! Bardiya feels like true wilderness, unlike anywhere else."
            },

            {
                name: "Olivia Brown",
                rating: 5,
                tag: "Family",
                text: "The Karnali river safari was the trip of a lifetime. So quiet compared to Chitwan."
            },

            {
                name: "Tom Baker",
                rating: 4,
                tag: "Backpacker",
                text: "Remote to reach but completely worth it. Book a lodge package in advance."
            }

        ]

    },



    /* =====================================================
       MANANG VALLEY
    ===================================================== */

    manang: {

        name: "Manang Valley",

        category: "High Himalaya",

        best: "🏔 High Mountain Valley",

        interests: [
            "trekking",
            "nature",
            "adventure",
            "culture"
        ],

        coords: {
            lat: 28.67,
            lng: 84.02
        },

        minDays: 7,

        budget: {
            transport: 3500,
            lodging: 3500,
            food: 1800,
            activities: 1000
        },

        crowdLevel: "medium",

        bestSeason:
            "Mar–May, Sep–Nov",

        difficulty: "challenging",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 4200,
            porterPerDay: 2900,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "low",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 800–1,200",
                    duration: "1 day from Pokhara"
                },
                {
                    type: "Shared Jeep",
                    fare: "Rs 2,500–4,000",
                    duration: "8–10 hr from Pokhara"
                }
            ],

            note: "Many travellers combine Manang with the Annapurna Circuit trek."

        },

        image:
            image("Manang.jpg"),

        description:
            "A dramatic high-altitude valley of yak pastures, prayer flags and soaring peaks.",

        intro:
            "Manang is the heart of the Annapurna Circuit — a beautiful mountain valley where culture and altitude meet.",


        important: {

            season:
                "March–May and September–November",

            route:
                "Pokhara → Besisahar → Chame → Manang",

            style:
                "Trek, 7–12 days",

            carry:
                "Warm layers, sleeping bag, water purification and altitude medicine"

        },


        places: [

            {
                name: "Manang Village",
                type: "Popular",
                rating: 5,
                image: image("Manang.jpg"),
                text: "A lively high-altitude village ringed by Annapurna's giants."
            },

            {
                name: "Gangapurna Lake",
                type: "Underrated",
                rating: 5,
                image: image("Gangapurna Lake.jpg"),
                text: "A turquoise glacial lake with an icefall tumbling from the mountain above."
            },

            {
                name: "Thorong La Pass",
                type: "Popular",
                rating: 5,
                image: image("Thorong La.jpg"),
                text: "At 5,416 m, the highest point of the circuit with breathtaking views."
            }

        ],


        hotels: [

            {
                name: "Teahouse Lodge",
                price: "Rs. 1,500–3,500",
                text: "Warm rooms and hearty meals in every village."
            },

            {
                name: "Mountain Hotel",
                price: "Rs. 3,000–6,000",
                text: "More comfortable options in Manang village."
            },

            {
                name: "High Camp Lodge",
                price: "Rs. 2,000–4,000",
                text: "Rooms near the pass for early crossings."
            }

        ],


        guide: {

            travel:
                "Reach Manang by road from Pokhara, or trek the whole circuit. The road now reaches most villages.",

            time:
                "Autumn is the most reliable season. Start the Thorong La crossing at dawn.",

            food:
                "Teahouses serve dal bhat, noodles and apple pie from local orchards.",

            local:
                "Spend an acclimatisation day in Manang and visit the village's old monastery."

        },


        safety: {

            altitude:
                "Manang is above 3,500 m and Thorong La above 5,000 m — altitude sickness is a serious risk.",

            weather:
                "Weather turns quickly; snow can fall even in spring.",

            road:
                "Roads are rough and can be blocked by landslides.",

            network:
                "Signal only in villages; no service on the pass.",

            health:
                "Medical facilities are very limited. Carry altitude medicine.",

            precautions:
                "Climb high, sleep low. If symptoms appear, descend immediately."

        },


        rating: 4.8,


        reviews: [

            {
                name: "Hiro Tanaka",
                rating: 5,
                tag: "Trekker",
                text: "Crossing Thorong La at sunrise is the greatest day of my life. Acclimatise well!"
            },

            {
                name: "Emma Wilson",
                rating: 5,
                tag: "Adventure",
                text: "Gangapurna Lake and the icefall are unreal. The valley stays with you."
            },

            {
                name: "David Miller",
                rating: 4,
                tag: "Solo",
                text: "Brilliant circuit. Plan for weather delays and pack seriously warm gear."
            }

        ]

    },



    /* =====================================================
       DOLPO — SHEY PHOKSUNDO
    ===================================================== */

    dolpo: {

        name: "Dolpo & Shey Phoksundo",

        category: "Western Himalaya",

        best: "🌊 Turquoise High-Altitude Lake",

        interests: [
            "lakes",
            "hidden",
            "trekking",
            "nature"
        ],

        coords: {
            lat: 29.48,
            lng: 82.85
        },

        minDays: 7,

        budget: {
            transport: 5500,
            lodging: 3500,
            food: 1800,
            activities: 1200
        },

        crowdLevel: "low",

        bestSeason:
            "May–Oct",

        difficulty: "challenging",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 4500,
            porterPerDay: 3200,
            porterLoadKg: 20
        },

        safetyLevels: {
            altitude: "high",
            weather: "high",
            road: "high",
            network: "low",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Flight to Juphal",
                    fare: "Rs 10,000–15,000",
                    duration: "1 hr via Nepalgunj"
                },
                {
                    type: "Local Bus + Jeep",
                    fare: "Rs 3,000–5,000",
                    duration: "2–3 days"
                }
            ],

            note: "Fly to Juphal then walk a day to the lake. Upper Dolpo needs a special permit."

        },

        image:
            image("Shey-Phoksundo Lake.jpg"),

        description:
            "A deep turquoise lake in Nepal's wildest corner, framed by cliffs and silence.",

        intro:
            "Shey Phoksundo is one of the world's most beautiful high-altitude lakes — a remote turquoise miracle in Dolpo.",


        important: {

            season:
                "May–October",

            route:
                "Kathmandu → Nepalgunj → Juphal → Ringmo",

            style:
                "Trek, 7–10 days",

            carry:
                "Warm layers, sleeping bag, permits and cash"

        },


        places: [

            {
                name: "Shey Phoksundo Lake",
                type: "Popular",
                rating: 5,
                image: image("Shey-Phoksundo Lake.jpg"),
                text: "A surreal turquoise lake ringed by sheer cliffs — the trek's grand finale."
            },

            {
                name: "Ringmo Village",
                type: "Underrated",
                rating: 5,
                image: image("Ringmo village.jpg"),
                text: "A traditional Bon-po village of stone houses above the lake."
            },

            {
                name: "Phoksundo Waterfall",
                type: "Underrated",
                rating: 5,
                image: image("Phoksundo waterfall.jpg"),
                text: "A thundering waterfall on the approach trail to the lake."
            }

        ],


        hotels: [

            {
                name: "Teahouse Lodge",
                price: "Rs. 1,500–3,500",
                text: "Simple lodges along the trekking route."
            },

            {
                name: "Ringmo Guesthouse",
                price: "Rs. 1,200–2,500",
                text: "Basic village stays by the lake."
            },

            {
                name: "Juphal Hotel",
                price: "Rs. 1,000–2,000",
                text: "Practical rooms near the airstrip."
            }

        ],


        guide: {

            travel:
                "Fly to Juphal and trek to Ringmo. Upper Dolpo requires a restricted-area permit through a registered agency.",

            time:
                "May–October is the trekking window. June to September can be wet but lush.",

            food:
                "Expect simple dal bhat and noodles — bring extra snacks from Nepalgunj.",

            local:
                "The lake is sacred to local people. Visit Ringmo's gompa and respect village customs."

        },


        safety: {

            altitude:
                "The lake sits near 3,600 m and passes go much higher — altitude care is essential.",

            weather:
                "Conditions are extreme; temperatures can drop below freezing even in summer.",

            road:
                "The approach is by flight and foot — roads barely exist.",

            network:
                "Almost no mobile signal in the region.",

            health:
                "Medical help is hours or days away. Carry a complete first-aid kit.",

            precautions:
                "Hire an experienced local guide, carry all permits and travel in small groups."

        },


        rating: 4.9,


        reviews: [

            {
                name: "Claire Dubois",
                rating: 5,
                tag: "Culture",
                text: "The most beautiful lake I've ever seen. Dolpo is Nepal at its wildest."
            },

            {
                name: "Tom Baker",
                rating: 5,
                tag: "Backpacker",
                text: "Remote, tough and completely magical. The trek to the lake is world-class."
            },

            {
                name: "Maya Gurung",
                rating: 4,
                tag: "Solo",
                text: "Allow extra days and come physically prepared. Worth every effort."
            }

        ]

    },



    /* =====================================================
       KHAPTAD
    ===================================================== */

    khaptad: {

        name: "Khaptad",

        category: "Far West Highlands",

        best: "🌿 Sacred Meadow Highlands",

        interests: [
            "nature",
            "hidden",
            "relaxation",
            "trekking"
        ],

        coords: {
            lat: 29.40,
            lng: 81.17
        },

        minDays: 3,

        budget: {
            transport: 4000,
            lodging: 2500,
            food: 1200,
            activities: 600
        },

        crowdLevel: "low",

        bestSeason:
            "Mar–May, Sep–Nov",

        difficulty: "moderate",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 22
        },

        safetyLevels: {
            altitude: "medium",
            weather: "high",
            road: "high",
            network: "low",
            health: "medium"
        },

        transport: {

            options: [
                {
                    type: "Flight to Dhangadhi",
                    fare: "Rs 6,000–9,000",
                    duration: "1 hr 20 min"
                },
                {
                    type: "Local Bus",
                    fare: "Rs 1,500–2,500",
                    duration: "1 day via Dhangadhi"
                }
            ],

            note: "Fly or bus to Dhangadhi, then a scenic drive and walk up to the high meadows."

        },

        image:
            image("Khaptad National Park.jpg"),

        description:
            "Rolling alpine meadows, rhododendron forest and a sacred ashram in the far west.",

        intro:
            "Khaptad is a peaceful highland of flower-filled meadows and misty forests — a quiet retreat off every tourist map.",


        important: {

            season:
                "March–May and September–November",

            route:
                "Kathmandu → Dhangadhi → Khaptad",

            style:
                "Drive + gentle walking",

            carry:
                "Warm clothes, rain gear, water and cash"

        },


        places: [

            {
                name: "Khaptad Danda",
                type: "Underrated",
                rating: 5,
                image: image("Khaptad National Park.jpg"),
                text: "The high meadow plateau, alive with flowers in spring and golden grass in autumn."
            },

            {
                name: "Khaptad Baba Ashram",
                type: "Underrated",
                rating: 4,
                image: image("Khaptad Baba.jpg"),
                text: "A quiet hermitage in the forest, home to a legendary sage."
            },

            {
                name: "Saipal Himal View",
                type: "Underrated",
                rating: 5,
                image: image("Saipal Himal.jpg"),
                text: "On clear days, the western Himalaya rises across the valley."
            }

        ],


        hotels: [

            {
                name: "Meadow Lodge",
                price: "Rs. 1,500–3,000",
                text: "Simple stone lodges on the highlands."
            },

            {
                name: "Dhangadhi Hotel",
                price: "Rs. 1,000–2,500",
                text: "Practical rooms at the gateway town."
            },

            {
                name: "Forest Camp",
                price: "Rs. 1,200–2,500",
                text: "Camping options inside the park area."
            }

        ],


        guide: {

            travel:
                "Fly to Dhangadhi, drive to the park gate and walk the final kilometres onto the plateau.",

            time:
                "Spring fills the meadows with rhododendron flowers; autumn is driest and clearest.",

            food:
                "Simple local food is available at the lodges — bring your own snacks for walks.",

            local:
                "Khaptad is sacred and quiet. Enjoy long slow walks, birdsong and the silence."

        },


        safety: {

            altitude:
                "The plateau is around 3,000 m — mild altitude care needed.",

            weather:
                "Clouds and rain can arrive quickly; the plateau is exposed to wind.",

            road:
                "Approach roads are rough; walking is easier than driving near the top.",

            network:
                "Very limited mobile signal.",

            health:
                "Carry medicine — health facilities are far away.",

            precautions:
                "Walk in daylight, carry water and tell someone your route."

        },


        rating: 4.7,


        reviews: [

            {
                name: "Anita Shrestha",
                rating: 5,
                tag: "Family",
                text: "Endless green meadows and total silence. The far west is Nepal's best-kept secret."
            },

            {
                name: "Sarah Park",
                rating: 4,
                tag: "Friends",
                text: "A peaceful hiking escape with gorgeous spring flowers. Bring layers."
            },

            {
                name: "Nabin Joshi",
                rating: 5,
                tag: "Culture",
                text: "The ashram and the meadow walks are deeply calming. Highly underrated."
            }

        ]

    },



    /* =====================================================
       DHARAN
    ===================================================== */

    dharan: {

        name: "Dharan",

        category: "Eastern Terai",

        best: "🌄 Gateway to the Hills",

        interests: [
            "nature",
            "relaxation",
            "food"
        ],

        coords: {
            lat: 26.82,
            lng: 87.28
        },

        minDays: 2,

        budget: {
            transport: 600,
            lodging: 1500,
            food: 700,
            activities: 400
        },

        crowdLevel: "medium",

        bestSeason:
            "Oct–Mar",

        difficulty: "easy",

        hiddenAlt: "",

        fairCosts: {
            guidePerDay: 2800,
            porterPerDay: 2000,
            porterLoadKg: 25
        },

        safetyLevels: {
            altitude: "low",
            weather: "medium",
            road: "low",
            network: "high",
            health: "high"
        },

        transport: {

            options: [
                {
                    type: "Local Bus",
                    fare: "Rs 50–150",
                    duration: "1 hr from Itahari"
                },
                {
                    type: "Taxi / Jeep",
                    fare: "Rs 800–1,500",
                    duration: "30–45 min from Itahari"
                }
            ],

            note: "Dharan is very easy to reach from the eastern terai and Biratnagar."

        },

        image:
            image("Dharan, Nepal.jpg"),

        description:
            "A lively hill-edge city with temples, nature walks and some of Nepal's best street food.",

        intro:
            "Dharan is the friendly eastern gateway town — green hills, holy temples and a relaxed local vibe.",


        important: {

            season:
                "October–March",

            route:
                "Itahari → Dharan (30–60 min)",

            style:
                "City walks + hill viewpoints",

            carry:
                "Comfortable shoes, water and a hat"

        },


        places: [

            {
                name: "Buddha Subba Temple",
                type: "Popular",
                rating: 5,
                image: image("Buddhasubba Temple.jpg"),
                text: "A forest temple on a hilltop, sacred to many communities and great for views."
            },

            {
                name: "Dantakali Temple",
                type: "Underrated",
                rating: 4,
                image: image("Dantakali Temple.jpg"),
                text: "An old cave shrine reached by a long staircase through the forest."
            },

            {
                name: "Vijayapur Hill",
                type: "Underrated",
                rating: 4,
                image: image("Vijayapur fort.jpg"),
                text: "Historic fort ruins with panoramic views of the terai below."
            }

        ],


        hotels: [

            {
                name: "City Hotel",
                price: "Rs. 1,500–3,000",
                text: "Comfortable rooms in the centre of town."
            },

            {
                name: "Hill Resort",
                price: "Rs. 2,500–5,000",
                text: "Nice options up the hill with cooler air."
            },

            {
                name: "Budget Lodge",
                price: "Rs. 800–1,500",
                text: "Simple, clean rooms for transit stays."
            }

        ],


        guide: {

            travel:
                "An easy bus or taxi ride from Itahari or Biratnagar. The hill roads are good.",

            time:
                "Winter is most pleasant. Early mornings at the temples are quiet and cool.",

            food:
                "Dharan is famous for its street food — try local momos, sel roti and sweets.",

            local:
                "Walk up to the temples for exercise and views, and shop in the lively bazaar."

        },


        safety: {

            altitude:
                "Around 600 m — no altitude concerns.",

            weather:
                "Mild winters and hot summers; carry water in summer.",

            road:
                "Roads are good and well-connected.",

            network:
                "Excellent mobile and internet coverage.",

            health:
                "Good hospitals are available in town.",

            precautions:
                "Take care on the steep temple stairs in the rainy season."

        },


        rating: 4.4,


        reviews: [

            {
                name: "Rajan Gurung",
                rating: 4,
                tag: "Couple",
                text: "Lovely walkable town with great food and the peaceful Buddha Subba temple."
            },

            {
                name: "Prakash Limbu",
                rating: 5,
                tag: "Local Explorer",
                text: "The perfect gateway to the east. Vijayapur hill at sunset is special."
            },

            {
                name: "Liam O'Connor",
                rating: 4,
                tag: "Backpacker",
                text: "Great street food and friendly locals. An easy day trip from Itahari."
            }

        ]

    },

};



/* =========================================================
   UNDERRATED NEPAL

   Off-the-beaten-path destinations to redistribute travel
   away from overcrowded classic routes (anti-overtourism).
========================================================= */

const underratedRegions = [

    {
        key: "bardia",
        name: "Bardia National Park",
        region: "Far West",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Mar",
        description: "Nepal's wildest national park — Bengal tigers, wild elephants and empty trails. The uncrowded answer to Chitwan.",
        replace: "Chitwan",
        review: "We saw a tiger on our second morning. Complete wilderness without a single crowd. — Rahul S., Wildlife Photographer"
    },

    {
        key: "langtang",
        name: "Langtang Valley",
        region: "Central Himalaya",
        crowdLevel: "low",
        difficulty: "moderate",
        bestSeason: "Mar–May, Sep–Nov",
        description: "A short, stunning Himalayan valley an hour from Kathmandu with glacier views and quiet teahouse trails.",
        replace: "Everest Base Camp",
        review: "Closer than I expected and just as beautiful — glacier views two hours from Kathmandu. — Sofia M., Trekker"
    },

    {
        key: "kanchenjunga",
        name: "Kanchenjunga Region",
        region: "Far East",
        crowdLevel: "low",
        difficulty: "challenging",
        bestSeason: "Mar–May, Oct–Nov",
        description: "Nepal's wildest and most remote trek around the world's third-highest peak. Permit-restricted and unforgettable.",
        replace: "Annapurna Circuit",
        review: "The most remote trek I've done in Nepal. Worth every permit and every step. — Arjun T., Expedition"
    },

    {
        key: "karnali",
        name: "Karnali River & Jumla",
        region: "Karnali",
        crowdLevel: "low",
        difficulty: "moderate",
        bestSeason: "Oct–Nov, Feb–Apr",
        description: "Nepal's least-visited province — whitewater rafting, apple orchards and a genuinely undiscovered culture.",
        replace: "Mustang",
        review: "Rafting the Karnali felt like another country. Apples, rivers and empty valleys. — Lena K., Rafter"
    },

    {
        key: "begnas",
        name: "Begnas & Rupa Lake",
        region: "Pokhara Valley",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Apr",
        description: "Peaceful lakes 20 minutes from Lakeside Pokhara. Sunrise paddles, terraced villages and almost no tourists.",
        replace: "Pokhara Lakeside",
        review: "A quiet sunrise paddle with Machhapuchhre reflecting in the water. Barely any tourists. — David O., Photographer"
    },

    {
        key: "kapilvastu",
        name: "Kapilvastu & Tilaurakot",
        region: "Western Terai",
        crowdLevel: "low",
        difficulty: "easy",
        bestSeason: "Oct–Mar",
        description: "The archaeological heartland of Buddha's early life — quiet ruins and village life near the Indian border.",
        replace: "Lumbini",
        review: "Walked the Buddha's early home in peaceful ruins. Deeply moving and nearly empty. — Priya V., Historian"
    }

];



/* =========================================================
   ACCOMMODATION PHOTOS

   These are intentionally generic hotel/lodge photos because
   we are not pretending these accommodation categories are
   specific real hotels.
========================================================= */

const hotelImages = [

    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80"

];



/* =========================================================
   STARTING POINTS
========================================================= */

const startingPoints = {

    Itahari:    { lat: 26.66, lng: 87.27 },
    Biratnagar: { lat: 26.45, lng: 87.27 },
    Dharan:     { lat: 26.82, lng: 87.28 },
    Birtamod:   { lat: 26.63, lng: 87.98 },
    Kathmandu:  { lat: 27.72, lng: 85.32 },
    Pokhara:    { lat: 28.21, lng: 83.99 },
    Birgunj:    { lat: 27.00, lng: 84.87 },
    Bhairahawa: { lat: 27.51, lng: 83.45 }

};



/* =========================================================
   NATIONAL EMERGENCY NUMBERS
========================================================= */

const nationalEmergency = [
    {
        label: "Police",
        number: "100",
        icon: "👮"
    },
    {
        label: "Ambulance",
        number: "102",
        icon: "🚑"
    },
    {
        label: "Fire Brigade",
        number: "101",
        icon: "🚒"
    },
    {
        label: "Tourist Police",
        number: "1144",
        icon: "🛡"
    }
];



/* =========================================================
   INTEREST LABELS
========================================================= */

const interestLabels = {
    trekking:   "🥾 Trekking",
    lakes:      "🌊 Lakes",
    nature:     "🌿 Nature",
    culture:    "🏯 Culture",
    food:       "🍜 Food",
    adventure:  "🪂 Adventure",
    hidden:     "💎 Hidden Gems",
    relaxation: "🌄 Relaxation"
};



/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageName, button) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });



    document
        .getElementById(pageName)
        .classList.add("active");



    const buttons =
        document.querySelectorAll(".nav-btn");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });



    if (button) {

        button.classList.add("active");

    }



    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    document.body.classList.remove(
        "sidebar-open"
    );

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    if (menuBtn) {

        menuBtn.textContent = "☰";

    }


    if (pageName === "home") {

        applyPrefsToTripFinder();

    } else if (pageName === "discover") {

        renderUnderrated();

    } else if (pageName === "safety") {

        loadSafetyPage();

        loadReports();

        setTimeout(function() {

            if (reportMap) {

                reportMap.invalidateSize();

            }

        }, 150);

    } else if (pageName === "fairprices") {

        loadFairPrices();

        setTimeout(function() {

            if (fairPriceMap) {

                fairPriceMap.invalidateSize();

            }

        }, 150);

    } else if (pageName === "smart") {

        loadSmartPage();

    } else if (pageName === "insights") {

        loadTrends();

    }

}



/* =========================================================
   INTERESTS
========================================================= */

function toggleInterest(button) {

    button.classList.toggle(
        "selected"
    );

}



/* =========================================================
   CURRENT DESTINATION
========================================================= */

let currentDestination = "";

let lastTripPlan = null;



/* =========================================================
   FIND MY TRIP

   Scoring engine:
   - interests match (60%)
   - budget fit (30%)
   - duration fit (10%)
========================================================= */

function getSelectedInterests() {

    const selected = [];

    document
        .querySelectorAll(
            ".interest.selected"
        )
        .forEach(function(btn) {

            selected.push(
                btn.getAttribute(
                    "data-interest"
                )
            );

        });

    return selected;

}



function parseDuration(durationText) {

    const match =
        String(
            durationText
        ).match(/\d+/);

    return match
        ? Number(match[0])
        : 3;

}



function scoreDestination(key, plan) {

    const place =
        destinations[key];


    let interestScore = 0.5;

    if (plan.interests.length > 0) {

        let matched = 0;

        plan.interests.forEach(
            function(interest) {

                if (
                    place.interests.indexOf(
                        interest
                    ) !== -1
                ) {

                    matched += 1;

                }

            }
        );

        interestScore =
            matched / plan.interests.length;

    }


    const perDay =
        (place.budget.transport / plan.days)
        + place.budget.lodging
        + place.budget.food
        + place.budget.activities;


    let budgetScore = 0.7;

    if (plan.budget > 0) {

        budgetScore =
            Math.min(
                1,
                plan.budget / perDay
            );

    }


    const durationScore =
        plan.days >= place.minDays
        ? 1
        : plan.days / place.minDays;


    const difficultyOrder = [
        "easy",
        "moderate",
        "challenging"
    ];

    let difficultyScore = 1;

    if (
        plan.difficulty &&
        plan.difficulty !== "any"
    ) {

        const target =
            difficultyOrder.indexOf(
                plan.difficulty
            );

        const actual =
            difficultyOrder.indexOf(
                place.difficulty || "easy"
            );

        if (actual !== -1) {

            const gap = Math.abs(
                target - actual
            );

            difficultyScore =
                gap === 0
                ? 1
                : (gap === 1 ? 0.75 : 0.5);

        }

    }


    let crowdScore = 1;

    if (plan.avoidCrowd) {

        if (place.crowdLevel === "low") {

            crowdScore = 1;

        } else if (
            place.crowdLevel === "medium"
        ) {

            crowdScore = 0.85;

        } else {

            crowdScore = 0.6;

        }

    }


    let tripTypeScore = 1;

    if (
        plan.travelerType &&
        plan.travelerType !== "any"
    ) {

        if (plan.travelerType === "women") {

            tripTypeScore =
                (
                    place.crowdLevel === "low" &&
                    place.difficulty === "easy"
                )
                ? 1
                : 0.8;

        } else if (
            plan.travelerType === "family"
        ) {

            tripTypeScore =
                place.difficulty === "easy"
                ? 1
                : 0.7;

        } else if (
            plan.travelerType === "solo"
        ) {

            tripTypeScore =
                place.crowdLevel === "low"
                ? 1
                : 0.85;

        }

    }


    const total =
        (interestScore * 0.55)
        + (budgetScore * 0.2)
        + (durationScore * 0.1)
        + (difficultyScore * 0.08)
        + (crowdScore * 0.05)
        + (tripTypeScore * 0.02);


    return {
        key: key,
        place: place,
        score: total,
        budgetScore: budgetScore,
        perDay: perDay,
        difficultyScore: difficultyScore,
        crowdScore: crowdScore,
        tripTypeScore: tripTypeScore
    };

}



function findTrip() {

    const interests =
        getSelectedInterests();

    const durationText =
        document
        .getElementById("duration")
        .value;

    const days =
        parseDuration(durationText);

    const starting =
        document
        .getElementById("starting")
        .value;

    const budget =
        Number(
            document
            .getElementById("budget")
            .value || 0
        );

    const difficulty =
        document
        .getElementById("difficulty")
        .value;

    const travelerType =
        document
        .getElementById("travelerType")
        .value;

    const avoidCrowd =
        document
        .getElementById("avoidCrowd")
        .checked;


    const plan = {
        interests: interests,
        days: days,
        starting: starting,
        budget: budget,
        difficulty: difficulty,
        travelerType: travelerType,
        avoidCrowd: avoidCrowd
    };

    lastTripPlan = plan;


    const scored =
        Object
        .keys(destinations)
        .map(
            function(key) {

                return scoreDestination(
                    key,
                    plan
                );

            }
        )
        .sort(
            function(a, b) {

                return b.score - a.score;

            }
        );


    renderResults(
        scored,
        plan
    );


    document
        .getElementById("searchResult")
        .classList
        .remove("hidden");


    document
        .getElementById("destinationDetails")
        .classList
        .add("hidden");


    document
        .getElementById("searchResult")
        .scrollIntoView({
            behavior: "smooth"
        });


    saveTrip(
        plan,
        scored[0].key
    );


    updateShareUrl(
        plan,
        scored[0].key
    );

}



/* =========================================================
   RENDER RANKED RESULTS
========================================================= */

function difficultyLabel(d) {

    const dict = {

        easy: {
            en: "Easy",
            ne: "सजिलो"
        },

        moderate: {
            en: "Moderate",
            ne: "मध्यम"
        },

        challenging: {
            en: "Challenging",
            ne: "कठिन"
        }

    };

    const entry =
        dict[d] || dict.easy;

    return entry[currentLang] ||
        entry.en;

}


function crowdLabel(c) {

    const dict = {

        low: {
            en: "Low crowd",
            ne: "भीड कम"
        },

        medium: {
            en: "Moderate crowd",
            ne: "सामान्य भीड"
        },

        high: {
            en: "Busy",
            ne: "भीडभाड"
        }

    };

    const entry =
        dict[c] || dict.medium;

    return entry[currentLang] ||
        entry.en;

}


function travelerTypeLabel(t) {

    const dict = {

        solo: {
            en: "Solo",
            ne: "एक्लै"
        },

        couple: {
            en: "Couple",
            ne: "जोडी"
        },

        family: {
            en: "Family",
            ne: "परिवार"
        },

        women: {
            en: "Women",
            ne: "महिला"
        },

        friends: {
            en: "Friends",
            ne: "साथीहरू"
        }

    };

    const entry =
        dict[t] || { en: "", ne: "" };

    return entry[currentLang] ||
        entry.en;

}

function renderResults(results, plan) {

    const container =
        document.getElementById(
            "resultsList"
        );


    container.innerHTML = "";


    results.forEach(
        function(item, index) {

            const reasons = [];

            if (plan.interests.length > 0) {

                const matched =
                    plan.interests.filter(
                        function(interest) {

                            return item.place
                                .interests
                                .indexOf(interest) !== -1;

                        }
                    );

                if (matched.length > 0) {

                    reasons.push(
                        matched
                        .map(
                            function(interest) {

                                return interestLabels[interest];

                            }
                        )
                        .join(" · ")
                    );

                }

            } else {

                reasons.push(
                    "🗺 All destinations considered"
                );

            }


            if (plan.budget > 0) {

                reasons.push(
                    item.budgetScore >= 1
                    ? "✅ Within budget"
                    : "💸 Slightly above budget"
                );

            }


            if (plan.days < item.place.minDays) {

                reasons.push(
                    "🕐 Best with " +
                    item.place.minDays +
                    "+ days"
                );

            }


            if (plan.avoidCrowd) {

                if (item.place.crowdLevel === "low") {

                    reasons.push(
                        "🧘 Quieter destination"
                    );

                } else if (
                    item.place.hiddenAlt
                ) {

                    reasons.push(
                        "🔄 Try instead: " +
                        item.place.hiddenAlt
                    );

                }

            }


            if (
                plan.travelerType &&
                plan.travelerType !== "any"
            ) {

                reasons.push(
                    "🧳 Great for " +
                    travelerTypeLabel(
                        plan.travelerType
                    )
                );

            }


            container.innerHTML += `

                <div class="result-card">

                    <img
                        src="${item.place.image}"
                        alt="${item.place.name}"
                        loading="lazy"
                        onerror="imgFallback(this)"
                    >

                    <div class="result-card-body">

                        <div class="result-card-top">

                            <div>

                                <span class="destination-badge">
                                    ${item.place.category}
                                </span>

                                ${
                                    index === 0
                                    ? '<span class="best-match-badge">★ Best Match</span>'
                                    : ""
                                }

                                <h3>
                                    ${item.place.name}
                                </h3>

                                <p>
                                    ${item.place.description}
                                </p>

                                <div class="result-stars">
                                    ${starRow(item.place.rating)}
                                    <span>
                                        ${item.place.reviews.length} traveler review${item.place.reviews.length > 1 ? "s" : ""}
                                    </span>
                                </div>

                            </div>


                            <div class="result-score">

                                <strong>
                                    ${Math.round(item.score * 100)}%
                                </strong>

                                <small>
                                    MATCH
                                </small>

                            </div>

                        </div>


                        <div class="destination-tags">

                            <span>
                                📍 From ${plan.starting}
                            </span>

                            <span>
                                🕐 ${plan.days} Day${plan.days > 1 ? "s" : ""}
                            </span>

                            <span>
                                ${item.place.best}
                            </span>

                            <span class="chip chip-${item.place.difficulty}">
                                ${difficultyLabel(item.place.difficulty)}
                            </span>

                            <span class="crowd-badge crowd-${item.place.crowdLevel}">
                                ${crowdLabel(item.place.crowdLevel)}
                            </span>

                            ${
                                plan.budget > 0
                                ? `<span>💰 ~${formatCost(item.perDay)}/day</span>`
                                : ""
                            }

                        </div>


                        <div class="match-reasons">
                            ${reasons.map(function(reason) {
                                return `<span>${reason}</span>`;
                            }).join("")}
                        </div>


                        <button
                            class="open-btn"
                            onclick="openDestination('${item.key}')"
                        >
                            View Full Details →
                        </button>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================================
   OPEN DESTINATION

   Renders the full details panel for a destination.
========================================================= */

function openDestination(key) {

    currentDestination = key;

    const place =
        destinations[key];


    document
        .getElementById("detailsName")
        .textContent =
        place.name +
        " Travel Information";


    document
        .getElementById("detailsIntro")
        .textContent =
        place.intro;


    renderImportantInfo(
        place
    );

    renderWeather(
        place
    );

    renderTransport(
        place
    );

    renderItinerary(
        place
    );

    renderMap(
        place
    );

    renderSafety(
        place,
        "homeSafety"
    );

    renderHireFair(
        place
    );

    renderPlaces(
        place.places,
        "homePlaces"
    );

    renderHotels(
        place.hotels,
        "homeHotels"
    );

    renderReviews(
        place,
        "homeReviews"
    );

    renderPacking(
        place
    );

    renderEmergency(
        place
    );


    document
        .getElementById("destinationDetails")
        .classList
        .remove("hidden");


    document
        .getElementById("destinationDetails")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   IMPORTANT INFORMATION
========================================================= */

function renderImportantInfo(place) {

    document
        .getElementById(
            "importantInfo"
        )
        .innerHTML = `

        <div class="info-card">

            <span>
                ☀️
            </span>

            <small>
                BEST TIME
            </small>

            <strong>
                ${place.important.season}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🚙
            </span>

            <small>
                ROUTE FROM ITAHARI
            </small>

            <strong>
                ${place.important.route}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🧭
            </span>

            <small>
                TRAVEL STYLE
            </small>

            <strong>
                ${place.important.style}
            </strong>

        </div>



        <div class="info-card">

            <span>
                🎒
            </span>

            <small>
                WHAT TO CARRY
            </small>

            <strong>
                ${place.important.carry}
            </strong>

        </div>

    `;

}



/* =========================================================
   SAFETY
========================================================= */

function statusLevel(level) {

    if (level === "low") {
        return { class: "level-low", label: "Low Risk" };
    }

    if (level === "high") {
        return { class: "level-high", label: "High Risk" };
    }

    return { class: "level-medium", label: "Moderate" };

}


function renderSafety(
    place,
    containerName
) {

    const safety =
        place.safety;

    const levels =
        place.safetyLevels;

    const items = [
        {
            icon: "🏔",
            title: "Altitude",
            text: safety.altitude,
            key: "altitude"
        },
        {
            icon: "🌦",
            title: "Weather",
            text: safety.weather,
            key: "weather"
        },
        {
            icon: "🚙",
            title: "Road & Transport",
            text: safety.road,
            key: "road"
        },
        {
            icon: "📶",
            title: "Mobile Network",
            text: safety.network,
            key: "network"
        },
        {
            icon: "🏥",
            title: "Healthcare",
            text: safety.health,
            key: "health"
        },
        {
            icon: "⚠️",
            title: "Important Precautions",
            text: safety.precautions,
            key: "precautions"
        }
    ];


    const html =
        items.map(
            function(item) {

                const level =
                    statusLevel(
                        levels[item.key]
                    );

                const badge =
                    item.key === "precautions"
                    ? ""
                    : `<span class="level-badge ${level.class}">
                            ${level.label}
                        </span>`;

                return `

                    <div class="safety-card">

                        <div class="safety-head">

                            <div class="safety-icon">
                                ${item.icon}
                            </div>

                            ${badge}

                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.text}
                        </p>

                    </div>

                `;

            }
        ).join("");


    document
        .getElementById(
            containerName
        )
        .innerHTML =
        html;

}



/* =========================================================
   HIRE FAIR

   Responsible-hiring guidance for guides, porters and
   drivers — fair daily rates and porter load limits.
========================================================= */

function renderHireFair(place) {

    const container =
        document.getElementById(
            "homeHireFair"
        );

    if (!container) {

        return;

    }


    const costs =
        place.fairCosts ||
        {
            guidePerDay: 3500,
            porterPerDay: 2500,
            porterLoadKg: 25
        };


    const cards = [

        {
            icon: "🥾",
            title: "Guide",
            detail: (
                "Fair daily rate " +
                formatCost(costs.guidePerDay)
            ),
            tip: "Verify your guide is licensed (TAAN/NMA) and agree the full itinerary and cost in writing before you start."
        },

        {
            icon: "🎒",
            title: "Porter",
            detail: (
                "Fair daily rate " +
                formatCost(costs.porterPerDay)
            ),
            tip: (
                "International mountaineering rules cap loads at " +
                costs.porterLoadKg +
                " kg. Never ask a porter to carry more — pay porter insurance too."
            )
        },

        {
            icon: "🚐",
            title: "Driver",
            detail: (
                "Agree fares before boarding"
            ),
            tip: "Use metered taxis or agree the price first. Tip for long mountain drives, and only book registered vehicles."
        }

    ];


    const html =
        cards.map(function(card) {

            return `

                <div class="fair-card">

                    <div class="fair-icon">
                        ${card.icon}
                    </div>

                    <h3>
                        ${card.title}
                    </h3>

                    <div class="fair-detail">
                        ${card.detail}
                    </div>

                    <p class="fair-tip">
                        ${card.tip}
                    </p>

                </div>

            `;

        }).join("");


    container.innerHTML =
        html;

}



/* =========================================================
   PLACES
========================================================= */

function renderPlaces(
    places,
    containerName
) {

    const container =
        document.getElementById(
            containerName
        );


    container.innerHTML = "";



    places.forEach(function(place) {

        let hiddenClass = "";


        if (
            place.type ===
            "Underrated"
        ) {

            hiddenClass =
                "hidden-place";

        }


        container.innerHTML += `

            <div class="place-card">


                <div class="place-image">

                    <img
                        src="${place.image}"
                        alt="${place.name}"
                        onerror="imgFallback(this)"
                    >


                    <span
                        class="
                        place-label
                        ${hiddenClass}
                        "
                    >

                        ${
                            place.type ===
                            "Underrated"
                            ?
                            "💎 Underrated"
                            :
                            "★ Popular"
                        }

                    </span>

                </div>



                <div class="place-body">

                    <h3>
                        ${place.name}
                    </h3>

                    ${
                        place.rating
                        ? `<div class="place-stars">${starRow(place.rating)}</div>`
                        : ""
                    }

                    <p>
                        ${place.text}
                    </p>

                </div>


            </div>

        `;

    });

}



/* =========================================================
   HOTELS
========================================================= */

function renderHotels(
    hotels,
    containerName
) {

    const container =
        document.getElementById(
            containerName
        );


    container.innerHTML = "";



    hotels.forEach(
        function(hotel, index) {

            container.innerHTML += `

                <div class="hotel-card">

                    <img
                        src="${hotelImages[index]}"
                        alt="${hotel.name}"
                        onerror="imgFallback(this)"
                    >


                    <div class="hotel-body">

                        <h3>
                            ${hotel.name}
                        </h3>


                        <p>
                            ${hotel.text}
                        </p>


                        <div class="hotel-price">

                            <small>
                                ESTIMATED / NIGHT
                            </small>

                            <strong>
                                ${hotel.price}
                            </strong>

                        </div>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imgFallback(img) {

    const placeholder =
        "https://via.placeholder.com/900x600/0c1631/8e9ab8?text=YatraKhoj";

    if (img.src !== placeholder) {
        img.src = placeholder;
    }

}



/* =========================================================
   RATING STARS + TRAVELER REVIEWS

   Renders the ★★★☆☆ star row for a destination or place,
   and the "Traveler Reviews" cards for a destination.
========================================================= */

function starRow(rating) {

    const value =
        Math.max(
            0,
            Math.min(
                5,
                Number(rating) || 0
            )
        );

    let stars = "";

    for (let i = 1; i <= 5; i++) {
        stars +=
            i <= value
            ? "★"
            : "☆";
    }

    return `<span class="stars" aria-label="${value} out of 5 stars">${stars}</span>`;

}


function renderReviews(place, containerName) {

    const container =
        document.getElementById(
            containerName
        );

    if (!container) {
        return;
    }

    const reviews =
        Array.isArray(place.reviews)
        ? place.reviews
        : [];

    const heading =
        document.getElementById(
            containerName + "Heading"
        );

    if (heading) {

        heading.textContent =
            `Traveler Reviews` +
            (
                reviews.length > 0
                ? ` · ${reviews.length}`
                : ""
            );

    }

    container.innerHTML = "";

    if (reviews.length === 0) {

        container.innerHTML = `

            <div class="review-empty">
                No traveler reviews yet. Be the first to share your experience!
            </div>

        `;

        return;

    }


    reviews.forEach(function(review) {

        container.innerHTML += `

            <div class="review-card">

                <div class="review-head">

                    <div class="review-avatar">
                        ${(review.name || "?").charAt(0).toUpperCase()}
                    </div>

                    <div class="review-meta">

                        <strong>
                            ${review.name}
                        </strong>

                        <small>
                            ${review.tag || "Traveler"}
                        </small>

                    </div>

                </div>

                <div class="review-rating">
                    ${starRow(review.rating)}
                </div>

                <p>
                    ${review.text}
                </p>

            </div>

        `;

    });

}



/* =========================================================
   BACKEND API HELPERS
========================================================= */

const API_BASE = "";


function apiGet(path, fallback) {

    const controller = new AbortController();

    const timer = setTimeout(
        function() {
            controller.abort();
        },
        10000
    );

    return fetch(
        API_BASE + path,
        { credentials: "same-origin", signal: controller.signal }
    )
    .then(function(response) {
        return response.json();
    })
    .catch(function() {
        return fallback;
    })
    .finally(function() {
        clearTimeout(timer);
    });

}


function apiPost(path, data) {

    const controller = new AbortController();

    const timer = setTimeout(
        function() {
            controller.abort();
        },
        10000
    );

    return fetch(
        API_BASE + path,
        {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            signal: controller.signal
        }
    )
    .then(function(response) {
        return response.json();
    })
    .catch(function() {
        return { success: false, message: "Network error" };
    })
    .finally(function() {
        clearTimeout(timer);
    });

}


function escapeHtml(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}



/* =========================================================
   WEATHER
========================================================= */

function renderWeather(place) {

    const container =
        document.getElementById(
            "homeWeather"
        );


    container.innerHTML = `

        <div class="weather-loading">
            Loading live weather…
        </div>

    `;


    apiGet(
        "/api/weather?place=" +
        encodeURIComponent(place.name),
        null
    )
    .then(function(data) {

        if (
            !data ||
            data.success !== true
        ) {

            container.innerHTML = `

                <div class="weather-offline">
                    Live weather is unavailable for this
                    destination right now. Try again later
                    or check a weather app before you travel.
                </div>

            `;

            return;

        }


        const weatherIcon =
            data.temperature < 12
            ? "❄️"
            : data.temperature < 24
            ? "⛅"
            : "☀️";


        container.innerHTML = `

            <div class="weather-card">

                <div class="weather-icon">
                    ${weatherIcon}
                </div>

                <div>

                    <small>
                        NOW IN ${data.place.toUpperCase()}
                    </small>

                    <h3>
                        ${Math.round(data.temperature)}°C
                    </h3>

                </div>

            </div>

            <div class="weather-stat">
                <small>FEELS LIKE</small>
                <strong>${Math.round(data.feelsLike)}°C</strong>
            </div>

            <div class="weather-stat">
                <small>HUMIDITY</small>
                <strong>${Math.round(data.humidity)}%</strong>
            </div>

            <div class="weather-stat">
                <small>WIND</small>
                <strong>${Math.round(data.windSpeed)} km/h</strong>
            </div>

            <div class="weather-stat">
                <small>RAIN</small>
                <strong>${data.precipitation} mm</strong>
            </div>

        `;

    });

}



/* =========================================================
   TRANSPORT
========================================================= */

function renderTransport(place) {

    const container =
        document.getElementById(
            "homeTransport"
        );


    const options =
        place.transport.options
        .map(
            function(option) {

                return `

                    <div class="transport-card">

                        <div class="transport-icon">
                            🚍
                        </div>

                        <div>

                            <h3>
                                ${option.type}
                            </h3>

                            <div class="transport-meta">

                                <span>
                                    ⏱ ${option.duration}
                                </span>

                                <span>
                                    💰 ${option.fare}
                                </span>

                            </div>

                        </div>

                    </div>

                `;

            }
        ).join("");


    container.innerHTML =
        options +
        `

        <p class="transport-note">
            💡 ${place.transport.note}
        </p>

        `;

}



/* =========================================================
   ITINERARY
========================================================= */

function buildItinerary(place, days, starting) {

    const steps = [];

    const places = place.places;

    const totalDays =
        Math.max(1, days);

    const travelDay =
        "Travel from " + starting +
        " to " + place.name + ".";

    const returnDay =
        "Return journey back to " + starting +
        ". Carry extra time for road conditions.";


    if (totalDays === 1) {

        steps.push({
            day: 1,
            title: place.name + " Day Trip",
            detail:
                travelDay +
                " Explore " +
                places[0].name +
                " in the morning."
        });

        steps.push({
            day: "Return",
            title: "Head Home",
            detail: returnDay
        });

        return steps;

    }


    steps.push({
        day: 1,
        title: "Arrival & First Stop",
        detail:
            travelDay +
            " Settle in and visit " +
            places[0].name +
            "."
    });


    const middleDays =
        totalDays - 2;

    for (let i = 0; i < middleDays; i += 1) {

        const placeIndex =
            1 + (i % (places.length - 1));

        const target =
            places[placeIndex];

        steps.push({
            day: i + 2,
            title: "Explore " + target.name,
            detail:
                target.text +
                (i === 0 && middleDays === 1
                    ? " Spend the evening enjoying local food."
                    : "")
        });

    }


    const lastPlace =
        places[places.length - 1];

    steps.push({
        day: totalDays,
        title: lastPlace.name + " & Departure",
        detail:
            "Visit " +
            lastPlace.name +
            " before starting your journey back to " +
            starting + "."
    });


    return steps;

}



function renderItinerary(place) {

    const container =
        document.getElementById(
            "homeItinerary"
        );


    const plan =
        lastTripPlan
        ? lastTripPlan
        : {
            days: parseDuration(
                document
                .getElementById("duration")
                .value || "3 Days"
            ),
            starting:
                document
                .getElementById("starting")
                .value || "Itahari"
        };


    const steps =
        buildItinerary(
            place,
            plan.days,
            plan.starting
        );


    container.innerHTML =
        steps.map(
            function(step) {

                return `

                    <div class="itinerary-item">

                        <div class="itinerary-day">
                            ${step.day}
                        </div>

                        <div>

                            <h3>
                                ${step.title}
                            </h3>

                            <p>
                                ${step.detail}
                            </p>

                        </div>

                    </div>

                `;

            }
        ).join("");

}



/* =========================================================
   MAP
========================================================= */

let activeMap = null;


function renderMap(place) {

    const container =
        document.getElementById(
            "homeMap"
        );


    const lat = place.coords.lat;

    const lng = place.coords.lng;


    container.innerHTML = `

        <div id="leafletMap"
            class="leaflet-box"
        >
        </div>

        <a
            class="map-open-link"
            href="https://www.google.com/maps?q=${lat},${lng}"
            target="_blank"
            rel="noopener"
        >
            Open in Google Maps ↗
        </a>

    `;


    if (typeof L === "undefined") {

        container.querySelector(
            ".leaflet-box"
        ).innerHTML =
            '<div class="map-unavailable">Map library could not load.</div>';

        return;

    }


    if (activeMap) {

        activeMap.remove();

        activeMap = null;

    }


    const map =
        L.map("leafletMap").setView(
            [lat, lng],
            11
        );

    activeMap = map;


    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 19
        }
    ).addTo(map);


    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            "<strong>" + place.name + "</strong><br>" +
            place.description
        )
        .openPopup();

}



/* =========================================================
   PACKING CHECKLIST
========================================================= */

function buildPackingList(place) {

    const items = [
        "ID / travel documents",
        "Cash (small notes)",
        "Water bottle",
        "Power bank & charger",
        "Basic first-aid & medicines"
    ];


    if (place.important.carry) {

        place.important.carry
            .split(",")
            .forEach(function(item) {

                const clean =
                    item.trim().replace(/\.$/, "");

                if (clean && items.indexOf(clean) === -1) {
                    items.push(clean);
                }

            });

    }


    const altitudeLevel =
        place.safetyLevels.altitude;

    const roadLevel =
        place.safetyLevels.road;

    const weatherLevel =
        place.safetyLevels.weather;


    if (altitudeLevel === "high") {

        items.push(
            "Warm layers",
            "Wool cap & gloves"
        );

    } else if (altitudeLevel === "medium") {

        items.push("Warm layer");

    }


    if (roadLevel === "high") {

        items.push(
            "Travel insurance",
            "First-aid kit"
        );

    }


    if (weatherLevel === "high") {

        items.push("Rain protection");
    }


    return items;

}



function renderPacking(place) {

    const container =
        document.getElementById(
            "homePacking"
        );


    const items =
        buildPackingList(place);


    container.innerHTML =
        items
        .map(
            function(item, index) {

                return `

                    <label class="pack-item">

                        <input type="checkbox"
                            ${index === 0 ? "checked" : ""}
                        >

                        <span>
                            ${item}
                        </span>

                    </label>

                `;

            }
        ).join("");

}



/* =========================================================
   EMERGENCY CONTACTS
========================================================= */

function renderEmergency(place) {

    const container =
        document.getElementById(
            "homeEmergency"
        );


    const hotlines =
        nationalEmergency
        .map(
            function(item) {

                return `

                    <div class="emergency-card">

                        <div class="emergency-icon">
                            ${item.icon}
                        </div>

                        <div>

                            <small>
                                ${item.label}
                            </small>

                            <a href="tel:${item.number}">
                                ${item.number}
                            </a>

                        </div>

                    </div>

                `;

            }
        ).join("");


    container.innerHTML =
        hotlines +
        `

        <div class="emergency-card emergency-note">

            <div class="emergency-icon">
                🏥
            </div>

            <div>

                <small>
                    HEALTH NOTE
                </small>

                <p>
                    ${place.safety.health}
                </p>

            </div>

        </div>

        `;

}



/* =========================================================
   DISCOVER PAGE
========================================================= */

function loadDiscover() {

    loadDiscoverFilters();

    renderDiscoverGrid();

}



let discoverActiveFilter = "all";



function loadDiscoverFilters() {

    const container =
        document.getElementById(
            "discoverFilters"
        );


    container.innerHTML = "";


    const filters = [
        "all",
        "trekking",
        "lakes",
        "nature",
        "culture",
        "food",
        "adventure",
        "hidden",
        "relaxation"
    ];


    filters.forEach(
        function(filter) {

            const label =
                filter === "all"
                ? "All"
                : interestLabels[filter];

            container.innerHTML += `

                <button
                    class="filter-chip
                        ${
                            filter === discoverActiveFilter
                            ? "active"
                            : ""
                        }
                    "
                    data-filter="${filter}"
                    onclick="setDiscoverFilter('${filter}', this)"
                >
                    ${label}
                </button>

            `;

        }
    );

}



function setDiscoverFilter(
    filter,
    button
) {

    discoverActiveFilter = filter;


    document
        .querySelectorAll(
            "#discoverFilters .filter-chip"
        )
        .forEach(
            function(btn) {

                btn.classList.remove("active");

            }
        );


    if (button) {

        button.classList.add("active");

    }


    renderDiscoverGrid();

}



function applyDiscoverFilters() {

    renderDiscoverGrid();

}



function renderDiscoverGrid() {

    const container =
        document.getElementById(
            "discoverGrid"
        );


    container.innerHTML = "";


    const query =
        (
            document
            .getElementById("discoverSearch")
            .value || ""
        )
        .toLowerCase()
        .trim();


    Object
        .keys(destinations)
        .forEach(function(key) {

            const place =
                destinations[key];


            if (
                discoverActiveFilter !== "all" &&
                place.interests.indexOf(
                    discoverActiveFilter
                ) === -1
            ) {

                return;

            }


            if (
                query &&
                (
                    place.name +
                    " " +
                    place.category
                )
                .toLowerCase()
                .indexOf(query) === -1
            ) {

                return;

            }


            container.innerHTML += `

                <div
                    class="discover-card"
                    onclick="
                        openDiscover('${key}')
                    "
                >

                    <img
                        src="${place.image}"
                        alt="${place.name}"
                        loading="lazy"
                        onerror="imgFallback(this)"
                    >


                    <div class="discover-overlay">
                    </div>


                    <div class="discover-info">

                        <span>
                            ${place.category}
                        </span>

                        <h3>
                            ${place.name}
                        </h3>

                        <p>
                            ${place.best}
                        </p>

                        <div class="discover-stars">
                            ${starRow(place.rating)}
                            <small>
                                ${place.reviews.length} reviews
                            </small>
                        </div>

                    </div>

                </div>

            `;

        });

}



/* =========================================================
   OPEN DISCOVER DESTINATION
========================================================= */

function openDiscover(key) {

    const place =
        destinations[key];


    document
        .getElementById(
            "discoverTitle"
        )
        .textContent =
        place.name;


    document
        .getElementById(
            "discoverText"
        )
        .textContent =
        place.intro;



    renderPlaces(
        place.places,
        "discoverPlaces"
    );


    renderHotels(
        place.hotels,
        "discoverHotels"
    );


    renderReviews(
        place,
        "discoverReviews"
    );



    document
        .getElementById(
            "discoverDetails"
        )
        .classList
        .remove("hidden");


    document
        .getElementById(
            "discoverDetails"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   TRAVEL GUIDES
========================================================= */

function loadGuideButtons() {

    const container =
        document.getElementById(
            "guideButtons"
        );


    container.innerHTML = "";


    const keys =
        Object.keys(
            destinations
        );



    keys.forEach(
        function(key, index) {

            container.innerHTML += `

                <button

                    class="
                        ${
                            index === 0
                            ?
                            "active"
                            :
                            ""
                        }
                    "

                    onclick="
                        showGuide(
                            '${key}',
                            this
                        )
                    "
                >

                    ${destinations[key].name}

                </button>

            `;

        }
    );


    showGuide(
        keys[0]
    );

}



/* =========================================================
   SHOW GUIDE
========================================================= */

function showGuide(
    key,
    button
) {

    const place =
        destinations[key];


    if (button) {

        const buttons =
            document.querySelectorAll(
                "#guideButtons button"
            );


        buttons.forEach(
            function(btn) {

                btn.classList.remove(
                    "active"
                );

            }
        );


        button.classList.add(
            "active"
        );

    }



    document
        .getElementById(
            "guideContent"
        )
        .innerHTML = `

        <div class="guide-card">


            <div class="guide-photo">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    onerror="imgFallback(this)"
                >


                <div class="guide-title">

                    <span class="mini-title">
                        DESTINATION GUIDE
                    </span>

                    <h2>
                        ${place.name}
                    </h2>

                </div>

            </div>



            <div class="guide-body">

                <p>
                    ${place.intro}
                </p>


                <div class="guide-grid">


                    <div class="guide-tip">

                        <strong>
                            🚙 Getting There
                        </strong>

                        <span>
                            ${place.guide.travel}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            ☀ Best Time
                        </strong>

                        <span>
                            ${place.guide.time}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            🍜 Food
                        </strong>

                        <span>
                            ${place.guide.food}
                        </span>

                    </div>



                    <div class="guide-tip">

                        <strong>
                            💎 Local Experience
                        </strong>

                        <span>
                            ${place.guide.local}
                        </span>

                    </div>


                </div>

            </div>

        </div>

    `;

}



/* =========================================================
   SAFETY PAGE
========================================================= */

function loadSafetyPage() {

    const key =
        document
        .getElementById(
            "safetyDestination"
        )
        .value;


    const place =
        destinations[key];


    document
        .getElementById(
            "safetyTitle"
        )
        .textContent =
        place.name +
        " Safety Guide";


    document
        .getElementById(
            "safetyText"
        )
        .textContent =
        "Important information to consider before travelling to " +
        place.name +
        ".";



    renderSafety(
        place,
        "safetyGrid"
    );

}



/* =========================================================
   CURRENCY
========================================================= */

const currencyRatesFallback = {

    USD: 139.50,

    GBP: 185.50,

    INR: 1.60,

    CNY: 19.40,

    AED: 38.00,

    MYR: 32.80

};


let liveCurrencyRates = null;


function loadLiveCurrency() {

    const codes =
        Object.keys(
            currencyRatesFallback
        );


    const pending =
        codes.map(
            function(code) {

                return apiGet(
                    "/api/currency?from=" +
                    code +
                    "&to=NPR&amount=1",
                    null
                )
                .then(
                    function(data) {

                        if (
                            data &&
                            data.success &&
                            data.rate
                        ) {

                            return {
                                code: code,
                                rate: data.rate
                            };

                        }

                        return null;

                    }
                );

            }
        );


    Promise
        .all(pending)
        .then(function(results) {

            const map = {};

            let ok = 0;

            results.forEach(function(result) {

                if (result) {

                    map[result.code] = result.rate;

                    ok += 1;

                }

            });


            if (ok === codes.length) {

                liveCurrencyRates = map;

            }


            convertCurrency();

        });

}



function getRate(currency) {

    if (liveCurrencyRates) {

        return liveCurrencyRates[currency];

    }

    return currencyRatesFallback[currency];

}


/* =========================================================
   USER PREFERENCES

   Stored locally so the app remembers currency, language
   and trip-finder choices between visits.
========================================================= */

const defaultPrefs = {
    currency: "USD",
    language: "en",
    difficulty: "any",
    travelerType: "any",
    avoidCrowd: false,
    hideCosts: false
};


function getPrefs() {

    try {

        const raw =
            localStorage.getItem("yk_prefs");

        if (raw) {

            const parsed = JSON.parse(raw);

            return Object.assign(
                {},
                defaultPrefs,
                parsed
            );

        }

    } catch (err) {

        /* corrupted prefs -> fall back to defaults */

    }

    return Object.assign(
        {},
        defaultPrefs
    );

}


function setPrefs(patch) {

    const prefs =
        getPrefs();

    Object.assign(prefs, patch);

    try {

        localStorage.setItem(
            "yk_prefs",
            JSON.stringify(prefs)
        );

    } catch (err) {

        /* storage unavailable -> ignore */

    }

    return prefs;

}


const currencySymbols = {

    NPR: "Rs ",
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CNY: "¥",
    INR: "₹",
    AUD: "A$",
    CAD: "C$",
    MYR: "RM"

};


function formatCost(nprAmount) {

    const prefs =
        getPrefs();

    if (prefs.hideCosts) {

        return "—";

    }

    const currency =
        prefs.currency || "USD";

    const rate =
        getRate(currency);

    const symbol =
        currencySymbols[currency] ||
        currency + " ";

    if (currency === "NPR") {

        return (
            "NPR " +
            Math.round(nprAmount).toLocaleString()
        );

    }

    if (!rate) {

        return (
            "NPR " +
            Math.round(nprAmount).toLocaleString()
        );

    }

    const converted =
        nprAmount / rate;

    return (
        symbol +
        converted.toLocaleString(
            undefined,
            { maximumFractionDigits: 0 }
        )
    );

}



function convertCurrency() {

    let amount =
        Number(
            document
            .getElementById(
                "currencyAmount"
            )
            .value
        );


    const currency =
        document
        .getElementById(
            "currencyType"
        )
        .value;


    if (
        isNaN(amount) ||
        amount < 0
    ) {

        amount = 0;

    }


    const rate =
        getRate(currency);


    const result =
        amount * rate;



    document
        .getElementById(
            "currencyResult"
        )
        .textContent =
        "NPR " +
        result.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );



    document
        .getElementById(
            "rateText"
        )
        .textContent =
        "1 " +
        currency +
        " ≈ NPR " +
        rate +
        (liveCurrencyRates ? " · Live" : " · Demo");



    const warning =
        document.querySelector(
            ".demo-warning"
        );

    if (warning) {

        warning.textContent =
            liveCurrencyRates
            ? "Live exchange rates via open.er-api.com."
            : "Using demo rates. Start the backend (node server.js) for live rates.";

    }

}



/* =========================================================
   LANGUAGE TOGGLE
========================================================= */

const uiDict = {

    en: {
        navHome: "⌂ Find Your Trip",
        navDiscover: "⌖ Discover Places",
        navGuides: "☷ Travel Guides",
        navSafety: "🛡 Safety Info",
        navFairPrices: "💵 Fair Price Nepal",
        navSmart: "🧠 Travel Smart",
        navInsights: "📊 Nepal in Numbers",
        navCurrency: "₨ Currency Converter",
        navAbout: "◎ About Us",
        langBtn: "🇳🇵 नेपाली"
    },

    ne: {
        navHome: "⌂ आफ्नो यात्रा खोज्नुहोस्",
        navDiscover: "⌖ स्थानहरू पत्ता लगाउनुहोस्",
        navGuides: "☷ यात्रा गाइड",
        navSafety: "🛡 सुरक्षा जानकारी",
        navFairPrices: "💵 उचित मूल्य नेपाल",
        navSmart: "🧠 स्मार्ट यात्रा",
        navInsights: "📊 नेपाल संख्यामा",
        navCurrency: "₨ मुद्रा परिवर्तक",
        navAbout: "◎ हाम्रो बारेमा",
        langBtn: "🇬🇧 English"
    }

};


let currentLang = "en";


function setLanguage(lang) {

    currentLang = lang;

    localStorage.setItem(
        "yk-lang",
        lang
    );


    const dict =
        uiDict[lang];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(el) {

            const key =
                el.getAttribute(
                    "data-i18n"
                );

            if (dict[key]) {

                el.textContent =
                    dict[key];

            }

        });

}



const translateCache = {};


function translateText(text, to) {

    if (
        !text ||
        typeof text !== "string" ||
        !text.trim()
    ) {

        return Promise.resolve(text);

    }


    const key =
        to + "::" + text;

    if (translateCache[key]) {

        return Promise.resolve(
            translateCache[key]
        );

    }


    return fetch(
        API_BASE + "/api/translate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                to: to
            })
        }
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        const out =
            data && data.success
            ? data.translated
            : text;

        translateCache[key] = out;

        return out;

    })
    .catch(function() {
        return text;
    });

}



function translateContent() {

    if (currentLang !== "ne") {

        return;

    }

    const selectors =
        "#detailsName, #detailsIntro, " +
        ".info-card strong, " +
        ".place-body h3, .place-body p, " +
        ".hotel-body h3, .hotel-body p, " +
        ".safety-card h3, .safety-card p, " +
        ".transport-card h3";


    document
        .querySelectorAll(selectors)
        .forEach(function(el) {

            if (el.dataset.i18nOriginal === undefined) {

                el.dataset.i18nOriginal =
                    el.textContent;

            }

            const original =
                el.dataset.i18nOriginal;

            if (
                el.dataset.i18nTranslated !== "1" &&
                original &&
                original.trim()
            ) {

                translateText(original, "ne")
                    .then(function(translated) {

                        if (
                            el &&
                            el.isConnected &&
                            currentLang === "ne"
                        ) {

                            el.textContent =
                                translated;

                            el.dataset.i18nTranslated =
                                "1";

                        }

                    });

            }

        });

}



function restoreContent() {

    document
        .querySelectorAll("[data-i18n-original]")
        .forEach(function(el) {

            el.textContent =
                el.dataset.i18nOriginal;

            delete el.dataset.i18nTranslated;

        });

}



function toggleLanguage() {

    if (currentLang === "en") {

        setLanguage("ne");

        translateContent();

    } else {

        setLanguage("en");

        restoreContent();

    }

}



/* =========================================================
   SAVED TRIPS
========================================================= */

const TRIPS_KEY = "yk-trips";


function getSavedTrips() {

    try {

        return (
            JSON.parse(
                localStorage.getItem(
                    TRIPS_KEY
                )
            ) || []
        );

    } catch (error) {

        return [];

    }

}



function saveTrip(plan, topKey) {

    const trips =
        getSavedTrips();

    const entry = {
        key: topKey,
        starting: plan.starting,
        days: plan.days,
        budget: plan.budget,
        interests: plan.interests,
        savedAt: new Date().toISOString()
    };


    trips.unshift(entry);


    const unique = [];

    const seen = {};

    trips.forEach(function(trip) {

        const id =
            trip.key +
            trip.starting +
            trip.days;

        if (!seen[id]) {

            seen[id] = true;

            unique.push(trip);

        }

    });


    localStorage.setItem(
        TRIPS_KEY,
        JSON.stringify(unique.slice(0, 12))
    );

}



function openMyTrips() {

    const panel =
        document.getElementById(
            "myTripsPanel"
        );


    panel.classList.toggle("hidden");


    if (!panel.classList.contains("hidden")) {

        renderTrips();

    }


    panel.scrollIntoView({
        behavior: "smooth"
    });

}



function renderTrips() {

    const container =
        document.getElementById(
            "tripsList"
        );


    container.innerHTML = "";


    const trips =
        getSavedTrips();


    if (trips.length === 0) {

        container.innerHTML = `

            <p class="trips-empty">
                No saved trips yet. Run "Find My Trip"
                to save one to this device.
            </p>

        `;

        return;

    }


    trips.forEach(function(trip) {

        const place =
            destinations[trip.key];

        if (!place) {

            return;

        }

        container.innerHTML += `

            <div class="trip-saved-card">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    onerror="imgFallback(this)"
                >

                <div class="trip-saved-body">

                    <h3>
                        ${place.name}
                    </h3>

                    <p>
                        📍 ${trip.starting}
                        · 🕐 ${trip.days} Day${trip.days > 1 ? "s" : ""}
                        ${
                            trip.budget
                            ? " · 💰 NPR " + trip.budget + "/day"
                            : ""
                        }
                    </p>

                    <p class="trip-date">
                        Saved ${new Date(trip.savedAt).toLocaleDateString()}
                    </p>

                    <button
                        class="open-btn"
                        onclick="restoreTrip(
                            '${trip.key}',
                            '${trip.starting}',
                            '${trip.days}',
                            '${trip.budget}'
                        )"
                    >
                        Open Trip →
                    </button>

                </div>

            </div>

        `;

    });

}



function restoreTrip(
    key,
    starting,
    days,
    budget
) {

    document
        .getElementById("starting")
        .value =
        starting || "Itahari";


    document
        .getElementById("duration")
        .value =
        days + " Day" + (days > 1 ? "s" : "");


    if (budget) {

        document
            .getElementById("budget")
            .value =
            budget;

    }


    lastTripPlan = {
        interests: [],
        days: Number(days || 3),
        starting: starting || "Itahari",
        budget: Number(budget || 0)
    };


    openDestination(key);

}



/* =========================================================
   SHAREABLE URL
========================================================= */

function updateShareUrl(plan, topKey) {

    const params =
        new URLSearchParams();

    params.set("start", plan.starting);

    params.set("days", plan.days);

    if (plan.budget) {

        params.set("budget", plan.budget);

    }

    if (plan.interests.length) {

        params.set("i", plan.interests.join(","));

    }

    params.set("r", topKey);


    history.replaceState(
        null,
        "",
        location.pathname + "?" + params.toString()
    );

}



function restoreFromUrl() {

    const params =
        new URLSearchParams(
            location.search
        );


    const start =
        params.get("start");

    const days =
        params.get("days");

    const budget =
        params.get("budget");

    const interests =
        params.get("i");

    const result =
        params.get("r");


    if (!start && !days && !result) {

        return;

    }


    if (start) {

        document
            .getElementById("starting")
            .value =
            start;

    }


    if (days) {

        document
            .getElementById("duration")
            .value =
            days + " Day" + (Number(days) > 1 ? "s" : "");

    }


    if (budget) {

        document
            .getElementById("budget")
            .value =
            budget;

    }


    if (interests) {

        const list =
            interests.split(",");

        document
            .querySelectorAll(".interest")
            .forEach(function(btn) {

                if (
                    list.indexOf(
                        btn.getAttribute("data-interest")
                    ) !== -1
                ) {

                    btn.classList.add("selected");

                }

            });

    }


    if (result && destinations[result]) {

        findTrip();

    }

}



/* =========================================================
   TOAST NOTIFICATIONS
========================================================= */

let toastTimer = null;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) {

        return;

    }

    toast.textContent =
        message;

    toast.classList.remove(
        "hidden"
    );

    toast.classList.add("show");


    if (toastTimer) {

        clearTimeout(toastTimer);

    }

    toastTimer =
        setTimeout(function() {

            toast.classList.remove(
                "show"
            );

            toast.classList.add(
                "hidden"
            );

        }, 3500);

}



/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function toggleSidebar() {

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (!sidebar) {

        return;

    }

    const isOpen =
        sidebar.classList.contains(
            "open"
        );

    sidebar.classList.toggle(
        "open"
    );

    document.body.classList.toggle(
        "sidebar-open",
        !isOpen
    );

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    if (menuBtn) {

        menuBtn.textContent =
            isOpen ? "☰" : "✕";

    }

}



/* =========================================================
   ACCOUNT & SETTINGS
========================================================= */

let currentUser = null;


function toggleSettings() {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );

    if (!overlay) {

        return;

    }

    const isHidden =
        overlay.classList.contains(
            "hidden"
        );

    if (isHidden) {

        renderSettings();

        overlay.classList.remove(
            "hidden"
        );

    } else {

        overlay.classList.add(
            "hidden"
        );

    }

}


function closeSettings(event) {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );

    if (!overlay) {

        return;

    }

    if (
        event &&
        event.target !== overlay
    ) {

        return;

    }

    overlay.classList.add(
        "hidden"
    );

}


function renderSettings() {

    const auth =
        document.getElementById(
            "settingsAuth"
        );

    const profile =
        document.getElementById(
            "settingsProfile"
        );

    if (currentUser) {

        auth.classList.add("hidden");

        profile.classList.remove(
            "hidden"
        );

        document
            .getElementById("profileName")
            .textContent =
            currentUser.name ||
            "Traveler";

        document
            .getElementById("profileEmail")
            .textContent =
            currentUser.email ||
            "";

        const pic =
            document.getElementById(
                "profilePic"
            );

        if (currentUser.picture) {

            pic.src =
                currentUser.picture;

        } else {

            pic.removeAttribute(
                "src"
            );

        }

    } else {

        auth.classList.remove(
            "hidden"
        );

        profile.classList.add(
            "hidden"
        );

    }


    const prefs =
        getPrefs();

    document
        .getElementById("prefCurrency")
        .value =
        prefs.currency || "USD";

    document
        .getElementById("prefLanguage")
        .value =
        prefs.language || "en";

    document
        .getElementById("prefDifficulty")
        .value =
        prefs.difficulty || "any";

    document
        .getElementById("prefTraveler")
        .value =
        prefs.travelerType || "any";

    document
        .getElementById("prefCrowd")
        .checked =
        !!prefs.avoidCrowd;

    document
        .getElementById("prefHideCosts")
        .checked =
        prefs.hideCosts !== true;

}


function googleLogin() {

    fetch(
        API_BASE + "/api/auth/google",
        {
            credentials: "same-origin",
            redirect: "manual"
        }
    )
    .then(function(resp) {

        if (
            resp.status === 0 ||
            resp.type === "opaqueredirect"
        ) {

            window.location.href =
                "/api/auth/google";

            return;

        }

        return resp.json();

    })
    .then(function(data) {

        if (
            data &&
            data.success === false
        ) {

            showToast(
                "Google login is not configured yet. Try the demo login instead."
            );

        }

    })
    .catch(function() {

        showToast(
            "Could not reach the login service. Try again."
        );

    });

}


function demoLogin() {

    apiPost(
        "/api/auth/demo",
        {}
    )
    .then(function(data) {

        if (data && data.success) {

            currentUser = {
                name: "Demo Traveler",
                email: "demo@yatrakhoj.local",
                picture: "",
                provider: "demo"
            };

            renderSettings();

            showToast(
                "Signed in as Demo Traveler"
            );

        } else {

            showToast(
                data && data.message
                ? data.message
                : "Demo login failed"
            );

        }

    });

}


function logout() {

    apiPost(
        "/api/auth/logout",
        {}
    )
    .then(function() {

        currentUser = null;

        renderSettings();

        showToast(
            "Signed out"
        );

    });

}


function restoreSession() {

    apiGet(
        "/api/auth/me",
        { success: false }
    )
    .then(function(data) {

        if (
            data &&
            data.success &&
            data.user
        ) {

            currentUser =
                data.user;

        } else {

            currentUser =
                null;

        }

        renderSettings();

    });

}


function bindPrefsControls() {

    document
        .getElementById("prefCurrency")
        .addEventListener("change", function() {

            setPrefs({
                currency: this.value
            });

            showToast(
                "Default currency saved"
            );

        });

    document
        .getElementById("prefLanguage")
        .addEventListener("change", function() {

            const prefs =
                setPrefs({
                    language: this.value
                });

            localStorage.setItem(
                "yk-lang",
                prefs.language
            );

            setLanguage(prefs.language);

            showToast(
                "Language saved"
            );

        });

    document
        .getElementById("prefDifficulty")
        .addEventListener("change", function() {

            setPrefs({
                difficulty: this.value
            });

            showToast(
                "Default difficulty saved"
            );

        });

    document
        .getElementById("prefTraveler")
        .addEventListener("change", function() {

            setPrefs({
                travelerType: this.value
            });

            showToast(
                "Default traveler type saved"
            );

        });

    document
        .getElementById("prefCrowd")
        .addEventListener("change", function() {

            setPrefs({
                avoidCrowd: this.checked
            });

            showToast(
                this.checked
                ? "Avoid-crowds preference on"
                : "Avoid-crowds preference off"
            );

        });

    document
        .getElementById("prefHideCosts")
        .addEventListener("change", function() {

            setPrefs({
                hideCosts: !this.checked
            });

            showToast(
                "Cost display preference saved"
            );

        });

}


function applyPrefsToTripFinder() {

    const prefs =
        getPrefs();

    const difficulty =
        document.getElementById(
            "difficulty"
        );

    const traveler =
        document.getElementById(
            "travelerType"
        );

    const crowd =
        document.getElementById(
            "avoidCrowd"
        );

    if (difficulty) {

        difficulty.value =
            prefs.difficulty || "any";

    }

    if (traveler) {

        traveler.value =
            prefs.travelerType || "any";

    }

    if (crowd) {

        crowd.checked =
            !!prefs.avoidCrowd;

    }

}



/* =========================================================
   COMMUNITY SAFETY REPORTS
========================================================= */

let reportMap = null;

let reportMarkers = [];

let reportsLoaded = [];


const reportCategoryNames = {

    scam: {
        en: "Scam",
        ne: "ठगी"
    },

    harassment: {
        en: "Harassment",
        ne: "उत्पीडन"
    },

    theft: {
        en: "Theft",
        ne: "चोरी"
    },

    price: {
        en: "Price",
        ne: "मूल्य"
    },

    guide: {
        en: "Guide",
        ne: "गाइड"
    },

    info: {
        en: "Info",
        ne: "जानकारी"
    }

};


function reportCategoryName(category) {

    const entry =
        reportCategoryNames[category] ||
        reportCategoryNames.info;

    return entry[currentLang] ||
        entry.en;

}


function getReportCoords(report) {

    if (
        report.lat &&
        report.lng
    ) {

        return [
            Number(report.lat),
            Number(report.lng)
        ];

    }

    const place =
        destinations[report.place];

    if (
        place &&
        place.coords &&
        place.coords.lat &&
        place.coords.lng
    ) {

        return [
            place.coords.lat,
            place.coords.lng
        ];

    }

    return null;

}


function loadReports() {

    apiGet(
        "/api/reports",
        { success: false, reports: [] }
    )
    .then(function(data) {

        const reports =
            data &&
            data.success &&
            Array.isArray(data.reports)
            ? data.reports
            : [];

        reportsLoaded =
            reports;

        renderReportMap(
            reports
        );

        renderReportFeed(
            reports
        );

    });

}


function renderReportMap(reports) {

    const el =
        document.getElementById(
            "reportMap"
        );

    if (!el || typeof L === "undefined") {

        return;

    }

    if (!reportMap) {

        reportMap =
            L.map(el).setView(
                [27.9, 84.1],
                7
            );

        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                attribution:
                    "&copy; OpenStreetMap &copy; CARTO",
                subdomains: "abcd",
                maxZoom: 18
            }
        ).addTo(reportMap);

    }


    reportMarkers.forEach(
        function(marker) {

            reportMap.removeLayer(
                marker
            );

        }
    );

    reportMarkers = [];


    const iconColors = {
        scam: "#C8102E",
        harassment: "#F2B632",
        theft: "#8E44AD",
        price: "#2ECC71",
        guide: "#F39C12",
        info: "#2E86DE"
    };


    reports.forEach(function(report) {

        const coords =
            getReportCoords(report);

        if (!coords) {

            return;

        }

        const color =
            iconColors[report.category] ||
            "#2E86DE";

        const icon =
            L.divIcon({
                className:
                    "report-marker",
                html:
                    '<div style="background:' +
                    color +
                    '">⚠</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

        const marker =
            L.marker(coords, {
                icon: icon
            })
            .addTo(reportMap)
            .bindPopup(
                "<strong>" +
                escapeHtml(report.title) +
                "</strong><br>" +
                escapeHtml(report.place) +
                "<br>" +
                escapeHtml(
                    report.description || ""
                )
            );

        reportMarkers.push(
            marker
        );

    });

}


function renderReportFeed(reports) {

    const feed =
        document.getElementById(
            "reportsFeed"
        );

    if (!feed) {

        return;

    }

    if (reports.length === 0) {

        feed.innerHTML =
            '<div class="reports-empty">' +
            "No reports yet — be the first to share." +
            "</div>";

        return;

    }


    feed.innerHTML =
        reports
        .slice(0, 12)
        .map(function(report) {

            return `

                <div class="report-item cat-${escapeHtml(report.category)}">

                    <div class="report-head">

                        <span class="report-cat">
                            ${escapeHtml(reportCategoryName(report.category))}
                        </span>

                        <span class="report-time">
                            ${escapeHtml(prettyTime(report.time))}
                        </span>

                    </div>

                    <h4>
                        ${escapeHtml(report.title)}
                    </h4>

                    <p>
                        ${escapeHtml(report.description || "")}
                    </p>

                    <span class="report-place">
                        📍 ${escapeHtml(destinationName(report.place))}
                    </span>

                </div>

            `;

        })
        .join("");

}


function prettyTime(isoTime) {

    if (!isoTime) {

        return "";

    }

    const date =
        new Date(isoTime);

    if (isNaN(date.getTime())) {

        return isoTime;

    }

    return date.toLocaleDateString(
        undefined,
        {
            day: "numeric",
            month: "short"
        }
    );

}


function destinationName(key) {

    const place =
        destinations[key];

    return place
        ? place.name
        : key;

}


function openReportForm() {

    const form =
        document.getElementById(
            "reportForm"
        );

    if (!form) {

        return;

    }

    form.classList.remove(
        "hidden"
    );

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function closeReportForm() {

    const form =
        document.getElementById(
            "reportForm"
        );

    if (form) {

        form.classList.add(
            "hidden"
        );

    }

}


function submitReport() {

    const place =
        document
        .getElementById("reportPlace")
        .value;

    const category =
        document
        .getElementById("reportCategory")
        .value;

    const severity =
        document
        .getElementById("reportSeverity")
        .value;

    const title =
        document
        .getElementById("reportTitle")
        .value
        .trim();

    const description =
        document
        .getElementById("reportDescription")
        .value
        .trim();

    if (!title) {

        showToast(
            "Please add a short title for your report."
        );

        return;

    }


    const placeData =
        destinations[place];

    const lat =
        placeData &&
        placeData.coords &&
        placeData.coords.lat
        ? Number(placeData.coords.lat)
        : null;

    const lng =
        placeData &&
        placeData.coords &&
        placeData.coords.lng
        ? Number(placeData.coords.lng)
        : null;


    apiPost(
        "/api/reports",
        {
            place: place,
            lat: lat,
            lng: lng,
            category: category,
            severity: severity,
            title: title,
            description: description
        }
    )
    .then(function(data) {

        if (data && data.success) {

            document
                .getElementById("reportForm")
                .classList.add("hidden");

            document
                .getElementById("reportTitle")
                .value = "";

            document
                .getElementById("reportDescription")
                .value = "";

            showToast(
                "Report submitted. Thank you for helping other travelers."
            );

            loadReports();

        } else {

            showToast(
                data && data.message
                ? data.message
                : "Could not submit report."
            );

        }

    });

}



/* =========================================================
   FAIR PRICE NEPAL

   Street-level NPR prices per destination + universal
   scam scripts, feeding the tabs, the "Am I overpaying?"
   estimator and the live price-check report map.
========================================================= */

let fairPricesData = null;

let fairSelected = "kathmandu";

let fairPriceMap = null;

let fairPriceMarkers = [];


function loadFairPrices() {

    const selector =
        document.getElementById(
            "fairDestination"
        );

    if (selector) {

        fairSelected =
            selector.value ||
            fairSelected;

    }

    if (fairPricesData) {

        renderFairPrices();

        return;

    }

    apiGet(
        "/api/fairprices",
        { success: false, fairprices: null }
    )
    .then(function(data) {

        if (
            data &&
            data.success &&
            data.fairprices
        ) {

            fairPricesData =
                data.fairprices;

            renderFairPrices();

        } else {

            showFairUnavailable();

        }

    });

}


function showFairUnavailable() {

    const title =
        document.getElementById(
            "fairTitle"
        );

    if (title) {

        title.textContent =
            "Fair-price data is temporarily unavailable.";

    }

}


function renderFairPrices() {

    const destination =
        fairPricesData.destinations[
            fairSelected
        ];

    if (!destination) {

        return;

    }

    const title =
        document.getElementById(
            "fairTitle"
        );

    if (title) {

        title.textContent =
            "Fair prices in " +
            destination.title;

    }

    const subtitle =
        document.getElementById(
            "fairSubtitle"
        );

    if (subtitle) {

        subtitle.textContent =
            "Updated " +
            fairPricesData.updated +
            " · all prices in Nepali Rupees (NPR)";
    }

    renderFairTaxiTab(destination);

    renderFairEntryTab(destination);

    renderFairFoodTab(destination);

    renderFairScamTab(
        destination,
        fairPricesData.universal
    );

    populateFairRouteSelect(destination);

    loadFairReports();

}


function switchFairTab(tab, button) {

    document
        .querySelectorAll(
            ".fair-tab"
        )
        .forEach(function(el) {

            el.classList.remove(
                "active"
            );

        });

    if (button) {

        button.classList.add(
            "active"
        );

    }

    document
        .querySelectorAll(
            ".fair-panel"
        )
        .forEach(function(el) {

            el.classList.toggle(
                "active",
                el.id ===
                    "fair-" + tab
            );

        });

}


function parseNprRange(str) {

    if (!str) {

        return null;

    }

    const cleaned =
        String(str)
        .replace(/[Rs.,~\s]/g, "");

    const parts =
        cleaned.split(/[–\-–]/);

    const numbers =
        parts
        .map(Number)
        .filter(function(n) {

            return (
                !isNaN(n) &&
                n > 0
            );

        });

    if (numbers.length === 0) {

        return null;

    }

    return {
        min: Math.min.apply(null, numbers),
        max: Math.max.apply(null, numbers)
    };

}


function fairRangeText(str) {

    return String(str || "");

}


function renderFairTaxiTab(destination) {

    const notesEl =
        document.getElementById(
            "fairTaxiNotes"
        );

    const universal =
        fairPricesData.universal;

    if (notesEl) {

        notesEl.innerHTML =
            escapeHtml(
                universal.taxiNotes || ""
            );

    }

    const list =
        document.getElementById(
            "fairTaxiList"
        );

    if (!list) {

        return;

    }

    const routes =
        destination.taxiRoutes || [];

    const busNote =
        universal.busNotes ||
        "";

    list.innerHTML =
        routes
        .map(function(route) {

            return `
                <div class="fair-card">

                    <div class="fair-icon">
                        🚕
                    </div>

                    <h3>
                        ${escapeHtml(route.route)}
                    </h3>

                    <div class="fair-price-row">
                        <span class="fair-label">
                            Meter
                        </span>
                        <span class="fair-value">
                            ${escapeHtml(route.meter)}
                        </span>
                    </div>

                    <div class="fair-price-row fair-row-highlight">
                        <span class="fair-label">
                            Fair
                        </span>
                        <span class="fair-value">
                            ${escapeHtml(formatCost(fairRangeMid(route.fair)))}
                        </span>
                    </div>

                    ${route.note ? `
                        <p class="fair-note">
                            ${escapeHtml(route.note)}
                        </p>
                    ` : ""}

                </div>
            `;

        })
        .join("") +
        (busNote
            ? `
                <div class="fair-card fair-bus-card">

                    <div class="fair-icon">
                        🚌
                    </div>

                    <h3>
                        Buses
                    </h3>

                    <p class="fair-note">
                        ${escapeHtml(busNote)}
                    </p>

                </div>
            `
            : "");

}


function fairRangeMid(str) {

    const range =
        parseNprRange(str);

    if (!range) {

        return 0;

    }

    return Math.round(
        (range.min + range.max) / 2
    );

}


function renderFairEntryTab(destination) {

    const el =
        document.getElementById(
            "fairEntryContent"
        );

    if (!el) {

        return;

    }

    const universal =
        fairPricesData.universal;

    const fees =
        destination.entryFees || [];

    const guidePorter =
        destination.guidePorter;

    let html =
        `
            <div class="fair-notes">
                ${escapeHtml(universal.entryNote || "")}
            </div>
        `;

    if (fees.length > 0) {

        html += `
            <div class="fair-entry-heading">
                <h3>Entry fees</h3>
            </div>
            <div class="fair-grid">
                ${fees.map(function(fee) {

                    return `
                        <div class="fair-card">

                            <div class="fair-icon">
                                🎟
                            </div>

                            <h3>
                                ${escapeHtml(fee.site)}
                            </h3>

                            <div class="fair-price-row">
                                <span class="fair-label">
                                    Foreigner
                                </span>
                                <span class="fair-value">
                                    ${escapeHtml(fee.foreign)}
                                </span>
                            </div>

                            ${fee.saarc ? `
                                <div class="fair-price-row">
                                    <span class="fair-label">
                                        SAARC
                                    </span>
                                    <span class="fair-value">
                                        ${escapeHtml(fee.saarc)}
                                    </span>
                                </div>
                            ` : ""}

                            ${fee.nepali ? `
                                <div class="fair-price-row">
                                    <span class="fair-label">
                                        Nepali
                                    </span>
                                    <span class="fair-value">
                                        ${escapeHtml(fee.nepali)}
                                    </span>
                                </div>
                            ` : ""}

                            ${fee.note ? `
                                <p class="fair-note">
                                    ${escapeHtml(fee.note)}
                                </p>
                            ` : ""}

                        </div>
                    `;

                }).join("")}
            </div>
        `;

    }

    if (guidePorter) {

        html += `
            <div class="fair-guide-box">

                <div class="fair-icon">
                    🧭
                </div>

                <div>
                    <h3>Licensed guide & porter</h3>
                    <div class="fair-price-row">
                        <span class="fair-label">
                            Guide per day
                        </span>
                        <span class="fair-value">
                            ${formatCost(guidePorter.guidePerDay)}
                        </span>
                    </div>
                    <div class="fair-price-row">
                        <span class="fair-label">
                            Porter per day
                        </span>
                        <span class="fair-value">
                            ${formatCost(guidePorter.porterPerDay)}
                        </span>
                    </div>
                    <p class="fair-note">
                        Porter carries up to
                        ${escapeHtml(String(guidePorter.porterLoadKg || 25))} kg.
                        A licensed guide makes a big difference to the price
                        of a bad day.
                    </p>
                </div>

            </div>
        `;

    }

    el.innerHTML = html;

}


function renderFairFoodTab(destination) {

    const el =
        document.getElementById(
            "fairFoodContent"
        );

    if (!el) {

        return;

    }

    const meals =
        destination.mealBands;

    const shopping =
        destination.shoppingSanity || [];

    let html = "";

    if (meals) {

        html += `
            <div class="fair-meals">

                <div class="fair-meal-card fair-meal-budget">
                    <span class="mini-title">BUDGET</span>
                    <div class="fair-meal-price">
                        ${escapeHtml(meals.budget)}
                    </div>
                    <p>Local eateries, dal bhat, street food</p>
                </div>

                <div class="fair-meal-card fair-meal-standard">
                    <span class="mini-title">STANDARD</span>
                    <div class="fair-meal-price">
                        ${escapeHtml(meals.standard)}
                    </div>
                    <p>Mid-range restaurants, tourist menu</p>
                </div>

                <div class="fair-meal-card fair-meal-tourist">
                    <span class="mini-title">TOURIST</span>
                    <div class="fair-meal-price">
                        ${escapeHtml(meals.tourist)}
                    </div>
                    <p>Fancy rooftop spots, lakeside dining</p>
                </div>

            </div>
        `;

    }

    if (shopping.length > 0) {

        html += `
            <div class="fair-shopping">

                <h3>
                    Souvenir sanity check
                </h3>

                <div class="fair-grid">
                    ${shopping.map(function(item) {

                        return `
                            <div class="fair-card fair-shopping-card">

                                <div class="fair-icon">
                                    🛍
                                </div>

                                <h3>
                                    ${escapeHtml(item.item)}
                                </h3>

                                <div class="fair-price-row fair-row-highlight">
                                    <span class="fair-label">
                                        Fair price
                                    </span>
                                    <span class="fair-value">
                                        ${escapeHtml(item.fair)}
                                    </span>
                                </div>

                                ${item.check ? `
                                    <p class="fair-note">
                                        ✅ ${escapeHtml(item.check)}
                                    </p>
                                ` : ""}

                            </div>
                        `;

                    }).join("")}
                </div>

            </div>
        `;

    }

    if (!meals && shopping.length === 0) {

        html += `
            <div class="reports-empty">
                Food and shopping guidance is being collected
                for this destination.
            </div>
        `;

    }

    el.innerHTML = html;

}


function renderFairScamTab(destination, universal) {

    const el =
        document.getElementById(
            "fairScamContent"
        );

    if (!el) {

        return;

    }

    const localScams =
        destination.scamCards || [];

    const universalScams =
        universal.scams || [];

    const allScams =
        localScams.concat(universalScams);

    const phrases =
        universal.phrases || [];

    let html =
        allScams
        .map(function(scam, index) {

            return `
                <div class="fair-scam-card">

                    <div class="fair-scam-head">
                        <span class="fair-scam-badge">
                            ⚠ SCAM ${index + 1}
                        </span>
                        <h3>
                            ${escapeHtml(scam.title)}
                        </h3>
                    </div>

                    <p class="fair-scam-script">
                        ${escapeHtml(scam.script)}
                    </p>

                    ${scam.redFlags && scam.redFlags.length
                        ? `
                            <div class="fair-redflags">
                                <strong>🚩 Red flags</strong>
                                <ul>
                                    ${scam.redFlags.map(function(flag) {
                                        return `
                                            <li>
                                                ${escapeHtml(flag)}
                                            </li>
                                        `;
                                    }).join("")}
                                </ul>
                            </div>
                        `
                        : ""}

                    ${scam.response ? `
                        <div class="fair-response">
                            <strong>💪 If it happens</strong>
                            <p>
                                ${escapeHtml(scam.response)}
                            </p>
                        </div>
                    ` : ""}

                    ${scam.phrase ? `
                        <div class="fair-phrase">
                            <span>🗣 Say this:</span>
                            <em>
                                "${escapeHtml(scam.phrase)}"
                            </em>
                        </div>
                    ` : ""}

                </div>
            `;

        })
        .join("");

    if (phrases.length > 0) {

        html += `
            <div class="fair-phrasebox">

                <h3>
                    🗣 Survival phrases
                </h3>

                <div class="fair-grid">
                    ${phrases.map(function(phrase) {

                        return `
                            <div class="fair-card fair-phrase-card">
                                <h3>
                                    ${escapeHtml(phrase.context)}
                                </h3>
                                <em class="fair-phrase-np">
                                    "${escapeHtml(phrase.nepali)}"
                                </em>
                                <p class="fair-note">
                                    ${escapeHtml(phrase.english)}
                                </p>
                            </div>
                        `;

                    }).join("")}
                </div>

            </div>
        `;

    }

    el.innerHTML = html;

}


function populateFairRouteSelect(destination) {

    const select =
        document.getElementById(
            "fairRouteSelect"
        );

    if (!select) {

        return;

    }

    const routes =
        destination.taxiRoutes || [];

    select.innerHTML =
        routes
        .map(function(route, index) {

            return `
                <option value="${index}">
                    ${escapeHtml(route.route)}
                </option>
            `;

        })
        .join("");

}


function checkFairFare() {

    const destination =
        fairPricesData &&
        fairPricesData.destinations[
            fairSelected
        ];

    const select =
        document.getElementById(
            "fairRouteSelect"
        );

    const input =
        document.getElementById(
            "fairQuoteInput"
        );

    const verdictEl =
        document.getElementById(
            "fairVerdict"
        );

    const cardEl =
        document.getElementById(
            "fairShareCard"
        );

    if (
        !destination ||
        !select ||
        !input ||
        !verdictEl ||
        !cardEl
    ) {

        return;

    }

    const quoted =
        Number(input.value);

    const routeIndex =
        Number(select.value);

    const route =
        destination.taxiRoutes &&
        destination.taxiRoutes[routeIndex];

    if (!route || !quoted || isNaN(quoted)) {

        showToast(
            "Pick a route and enter the quoted price in NPR."
        );

        return;

    }

    const fairRange =
        parseNprRange(route.fair);

    if (!fairRange) {

        showToast(
            "No fair-price reference for this route yet."
        );

        return;
    }

    const fairMid =
        Math.round(
            (fairRange.min + fairRange.max) / 2
        );

    const inCurrency =
        formatCost(fairMid);

    const quotedInCurrency =
        formatCost(quoted);

    let verdictText = "";
    let verdictHint = "";
    let cls = "";
    let emoji = "";

    if (quoted <= fairRange.max) {

        cls = "fair-ok";
        emoji = "✅";
        verdictText =
            "That is a fair price.";
        verdictHint =
            "Pay it and move on — this matches the going rate.";

    } else if (quoted <= fairRange.max * 1.5) {

        cls = "fair-warn";
        emoji = "⚠️";
        verdictText =
            "Slightly high — negotiate.";
        verdictHint =
            "Offer " +
            inCurrency +
            " and expect to settle around the fair range.";

    } else {

        cls = "fair-bad";
        emoji = "🚨";
        verdictText =
            "Overpriced — walk away.";
        verdictHint =
            "The fair range is " +
            inCurrency +
            ". Say no and find another driver.";

    }

    verdictEl.className =
        "fair-verdict " +
        cls;

    verdictEl.innerHTML = `
        <div class="fair-verdict-emoji">
            ${emoji}
        </div>
        <div class="fair-verdict-text">
            <h3>
                ${verdictText}
            </h3>
            <p>
                ${verdictHint}
            </p>
            <p class="fair-verdict-detail">
                You were quoted
                <strong>${quotedInCurrency}</strong> —
                fair is
                <strong>${escapeHtml(route.fair)}</strong>
                (≈ ${inCurrency}).
            </p>
        </div>
    `;

    verdictEl.classList.remove(
        "hidden"
    );

    cardEl.innerHTML = `
        <div class="fair-card fair-fare-card">

            <div class="fair-icon">
                🚕
            </div>

            <h3>
                ${escapeHtml(destination.title)}
            </h3>

            <p class="fair-fare-route">
                ${escapeHtml(route.route)}
            </p>

            <div class="fair-price-row">
                <span class="fair-label">
                    Quoted
                </span>
                <span class="fair-value">
                    ${quotedInCurrency}
                </span>
            </div>

            <div class="fair-price-row fair-row-highlight">
                <span class="fair-label">
                    Fair
                </span>
                <span class="fair-value">
                    ${escapeHtml(route.fair)}
                </span>
            </div>

            <div class="fair-share-actions">
                <button
                    class="report-btn"
                    onclick="copyFairShare()"
                >
                    📋 Copy share text
                </button>
                <button
                    class="report-cancel"
                    onclick="downloadFairCard()"
                >
                    🖼 Save as image
                </button>
            </div>

        </div>
    `;

    cardEl.classList.remove(
        "hidden"
    );

}


function fairShareText() {

    const destination =
        fairPricesData.destinations[
            fairSelected
        ];

    const select =
        document.getElementById(
            "fairRouteSelect"
        );

    const input =
        document.getElementById(
            "fairQuoteInput"
        );

    const route =
        destination.taxiRoutes[
            Number(select.value)
        ];

    const quoted =
        Number(input.value);

    const fairMid =
        fairRangeMid(route.fair);

    return (
        "🚕 " +
        destination.title +
        " · " +
        route.route +
        " — quoted " +
        formatCost(quoted) +
        ", fair is " +
        formatCost(fairMid) +
        ". Checked with YatraKhoj Fair Price Nepal."
    );

}


function copyFairShare() {

    const text =
        fairShareText();

    const done = function() {

        showToast(
            "Share text copied to clipboard."
        );

    };

    if (navigator.clipboard) {

        navigator.clipboard
            .writeText(text)
            .then(done)
            .catch(function() {

                fallbackCopy(text);

                done();

            });

        return;

    }

    fallbackCopy(text);

    done();

}


function fallbackCopy(text) {

    const textarea =
        document.createElement(
            "textarea"
        );

    textarea.value = text;

    textarea.style.position =
        "fixed";

    textarea.style.opacity =
        "0";

    document.body.appendChild(
        textarea
    );

    textarea.select();

    try {

        document.execCommand(
            "copy"
        );

    } catch (err) {

        /* ignore */

    }

    document.body.removeChild(
        textarea
    );

}


function downloadFairCard() {

    const destination =
        fairPricesData.destinations[
            fairSelected
        ];

    const route =
        destination.taxiRoutes[
            Number(
                document
                .getElementById("fairRouteSelect")
                .value
            )
        ];

    const quoted =
        Number(
            document
            .getElementById("fairQuoteInput")
            .value
        );

    const fairRange =
        parseNprRange(route.fair);

    const width = 640;

    const height = 400;

    const canvas =
        document.createElement(
            "canvas"
        );

    canvas.width = width;

    canvas.height = height;

    const ctx =
        canvas.getContext("2d");

    const grad =
        ctx.createLinearGradient(
            0, 0, 0, height
        );

    grad.addColorStop(0, "#0a1128");

    grad.addColorStop(1, "#05081a");

    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle =
        "rgba(255, 215, 0, 0.92)";

    ctx.font =
        "700 15px sans-serif";

    ctx.fillText(
        "YATRAKHOJ · FAIR PRICE NEPAL",
        36, 48
    );

    ctx.fillStyle =
        "#ffffff";

    ctx.font =
        "700 26px sans-serif";

    ctx.fillText(
        destination.title,
        36, 100
    );

    ctx.font =
        "500 20px sans-serif";

    ctx.fillText(
        route.route,
        36, 136
    );

    ctx.fillStyle =
        "#9fb0d8";

    ctx.font =
        "400 16px sans-serif";

    ctx.fillText(
        "Quoted",
        36, 200
    );

    ctx.fillStyle =
        "#ff7b7b";

    ctx.font =
        "700 28px sans-serif";

    ctx.fillText(
        formatCost(quoted),
        36, 236
    );

    ctx.fillStyle =
        "#9fb0d8";

    ctx.font =
        "400 16px sans-serif";

    ctx.fillText(
        "Fair price",
        36, 288
    );

    ctx.fillStyle =
        "#2ecc71";

    ctx.font =
        "700 28px sans-serif";

    ctx.fillText(
        formatCost(
            fairRangeMid(route.fair)
        ),
        36, 324
    );

    ctx.strokeStyle =
        "rgba(255, 215, 0, 0.5)";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(36, 348);

    ctx.lineTo(
        width - 36, 348
    );

    ctx.stroke();

    ctx.fillStyle =
        "#c5cfe8";

    ctx.font =
        "400 13px sans-serif";

    ctx.fillText(
        "Verdict: " +
        (
            quoted <= fairRange.max
                ? "Fair"
                : quoted <= fairRange.max * 1.5
                    ? "Slightly high"
                    : "Overpriced"
        ),
        36, 376
    );

    const link =
        document.createElement(
            "a"
        );

    link.download =
        "fair-price-" +
        fairSelected +
        ".png";

    link.href =
        canvas.toDataURL(
            "image/png"
        );

    link.click();

    showToast(
        "Fair-fare card image downloaded."
    );

}


function loadFairReports() {

    apiGet(
        "/api/reports",
        { success: false, reports: [] }
    )
    .then(function(data) {

        const reports =
            data &&
            data.success &&
            Array.isArray(data.reports)
            ? data.reports
            : [];

        renderFairReportMap(
            reports
        );

        renderFairReportFeed(
            reports
        );

    });

}


function renderFairReportMap(reports) {

    const el =
        document.getElementById(
            "priceReportMap"
        );

    if (!el || typeof L === "undefined") {

        return;

    }

    if (!fairPriceMap) {

        fairPriceMap =
            L.map(el).setView(
                [27.9, 84.1],
                7
            );

        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                attribution:
                    "&copy; OpenStreetMap &copy; CARTO",
                subdomains: "abcd",
                maxZoom: 18
            }
        ).addTo(fairPriceMap);

    }

    fairPriceMarkers.forEach(
        function(marker) {

            fairPriceMap.removeLayer(
                marker
            );

        }
    );

    fairPriceMarkers = [];

    const iconColors = {
        scam: "#C8102E",
        harassment: "#F2B632",
        theft: "#8E44AD",
        price: "#2ECC71",
        guide: "#F39C12",
        info: "#2E86DE"
    };

    reports.forEach(function(report) {

        const coords =
            getReportCoords(report);

        if (!coords) {

            return;

        }

        const color =
            iconColors[report.category] ||
            "#2E86DE";

        const icon =
            L.divIcon({
                className:
                    "report-marker",
                html:
                    '<div style="background:' +
                    color +
                    '">⚠</div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

        const marker =
            L.marker(coords, {
                icon: icon
            })
            .addTo(fairPriceMap)
            .bindPopup(
                "<strong>" +
                escapeHtml(report.title) +
                "</strong><br>" +
                escapeHtml(destinationName(report.place)) +
                "<br>" +
                escapeHtml(
                    report.description || ""
                )
            );

        fairPriceMarkers.push(
            marker
        );

    });

}


function renderFairReportFeed(reports) {

    const feed =
        document.getElementById(
            "priceReportsFeed"
        );

    if (!feed) {

        return;

    }

    const priceReports =
        reports.filter(
            function(report) {

                return (
                    report.category ===
                    "price"
                );

            }
        );

    if (priceReports.length === 0) {

        feed.innerHTML =
            '<div class="reports-empty">' +
            "No price checks yet — be the first to share one." +
            "</div>";

        return;

    }

    feed.innerHTML =
        priceReports
        .slice(0, 10)
        .map(function(report) {

            return `

                <div class="report-item cat-price">

                    <div class="report-head">

                        <span class="report-cat">
                            ${escapeHtml(reportCategoryName(report.category))}
                        </span>

                        <span class="report-time">
                            ${escapeHtml(prettyTime(report.time))}
                        </span>

                    </div>

                    <h4>
                        ${escapeHtml(report.title)}
                    </h4>

                    <p>
                        ${escapeHtml(report.description || "")}
                    </p>

                    <span class="report-place">
                        📍 ${escapeHtml(destinationName(report.place))}
                    </span>

                </div>

            `;

        })
        .join("");

}


function openFairReportForm() {

    const form =
        document.getElementById(
            "fairReportForm"
        );

    if (!form) {

        return;

    }

    const placeSelect =
        document.getElementById(
            "fairReportPlace"
        );

    if (placeSelect && fairSelected) {

        placeSelect.value =
            fairSelected;

    }

    form.classList.remove(
        "hidden"
    );

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function closeFairReportForm() {

    const form =
        document.getElementById(
            "fairReportForm"
        );

    if (form) {

        form.classList.add(
            "hidden"
        );

    }

}


function submitFairReport() {

    const place =
        document
        .getElementById("fairReportPlace")
        .value;

    const category =
        document
        .getElementById("fairReportCategory")
        .value;

    const severity =
        document
        .getElementById("fairReportSeverity")
        .value;

    const title =
        document
        .getElementById("fairReportTitle")
        .value
        .trim();

    const description =
        document
        .getElementById("fairReportDescription")
        .value
        .trim();

    if (!title) {

        showToast(
            "Please add a short title for your price check."
        );

        return;

    }

    const placeData =
        destinations[place];

    const lat =
        placeData &&
        placeData.coords &&
        placeData.coords.lat
        ? Number(placeData.coords.lat)
        : null;

    const lng =
        placeData &&
        placeData.coords &&
        placeData.coords.lng
        ? Number(placeData.coords.lng)
        : null;

    apiPost(
        "/api/reports",
        {
            place: place,
            lat: lat,
            lng: lng,
            category: category,
            severity: severity,
            title: title,
            description: description
        }
    )
    .then(function(data) {

        if (data && data.success) {

            document
                .getElementById("fairReportForm")
                .classList.add("hidden");

            document
                .getElementById("fairReportTitle")
                .value = "";

            document
                .getElementById("fairReportDescription")
                .value = "";

            showToast(
                "Price check submitted. Thank you for helping other travelers."
            );

            loadFairReports();

            loadReports();

        } else {

            showToast(
                data && data.message
                ? data.message
                : "Could not submit price check."
            );

        }

    });

}


function buildFairPrintHTML() {

    const destination =
        fairPricesData &&
        fairPricesData.destinations[
            fairSelected
        ];

    if (!destination) {

        return "";

    }

    return `
        <h1>
            Fair price sheet — ${escapeHtml(destination.title)}
        </h1>
        <p class="print-sub">
            Updated ${escapeHtml(fairPricesData.updated)} · NPR ·
            YatraKhoj Fair Price Nepal
        </p>

        <h2>Taxis</h2>
        <ul>
            ${(destination.taxiRoutes || []).map(function(route) {
                return `
                    <li>
                        <strong>${escapeHtml(route.route)}</strong>
                        — meter ${escapeHtml(route.meter)},
                        fair ${escapeHtml(route.fair)}
                        ${route.note ? " (" + escapeHtml(route.note) + ")" : ""}
                    </li>
                `;
            }).join("")}
        </ul>

        ${destination.entryFees && destination.entryFees.length
            ? `
                <h2>Entry fees</h2>
                <ul>
                    ${destination.entryFees.map(function(fee) {
                        return `
                            <li>
                                <strong>${escapeHtml(fee.site)}</strong>
                                — foreigner ${escapeHtml(fee.foreign)},
                                SAARC ${escapeHtml(fee.saarc || "—")},
                                Nepali ${escapeHtml(fee.nepali || "—")}
                            </li>
                        `;
                    }).join("")}
                </ul>
            `
            : ""}

        ${destination.mealBands
            ? `
                <h2>Meals</h2>
                <ul>
                    <li>Budget: ${escapeHtml(destination.mealBands.budget)}</li>
                    <li>Standard: ${escapeHtml(destination.mealBands.standard)}</li>
                    <li>Tourist: ${escapeHtml(destination.mealBands.tourist)}</li>
                </ul>
            `
            : ""}

        ${destination.guidePorter
            ? `
                <h2>Guide & porter</h2>
                <ul>
                    <li>Guide: ${formatCost(destination.guidePorter.guidePerDay)}/day</li>
                    <li>Porter: ${formatCost(destination.guidePorter.porterPerDay)}/day
                        (up to ${escapeHtml(String(destination.guidePorter.porterLoadKg || 25))} kg)</li>
                </ul>
            `
            : ""}

        <h2>Know the scams</h2>
        <ul>
            ${(destination.scamCards || []).concat(fairPricesData.universal.scams || []).map(function(scam) {
                return `
                    <li>
                        <strong>${escapeHtml(scam.title)}</strong>
                        — ${escapeHtml(scam.script)}
                    </li>
                `;
            }).join("")}
        </ul>
    `;

}


function printFairSheet() {

    const destination =
        fairPricesData &&
        fairPricesData.destinations[
            fairSelected
        ];

    if (!destination) {

        showToast(
            "Load the price page first."
        );

        return;
    }

    const printRoot =
        document.getElementById(
            "fairPrintRoot"
        );

    if (!printRoot) {

        showToast(
            "Print area not available."
        );

        return;
    }

    printRoot.innerHTML =
        buildFairPrintHTML();

    printRoot.classList.remove(
        "hidden"
    );

    window.print();

    printRoot.classList.add(
        "hidden"
    );

    printRoot.innerHTML = "";

}


/* =========================================================
   TRAVEL SMART

   Permits, vet-your-guide, women's safety, emergency
   numbers, money on the trail, offline pack and an
   English ⇄ Nepali phrasebook.
========================================================= */

const smartPermits = [

    {
        region: "All independent trekkers",
        permit: "NepaliPort registration",
        cost: "Free",
        where: "nepaliport.gov.np",
        note: "Mandatory since Sept 2025 — register before you start trekking.",
        mandatory: true
    },
    {
        region: "Annapurna & Langtang",
        permit: "TIMS card",
        cost: "Rs 1,000–3,000",
        where: "NTB / TAAN offices",
        note: "Confirm the current requirement at the NTB counter before departure."
    },
    {
        region: "Annapurna",
        permit: "ACAP conservation fee",
        cost: "Rs 3,000",
        where: "ACAP checkpoints",
        note: "Entry conservation fee for the Annapurna area."
    },
    {
        region: "Everest",
        permit: "Sagarmatha NP + Khumbu Pasang Lhamu",
        cost: "Rs ~3,000 + Rs 2,000",
        where: "Monjo gateway",
        note: "Two separate permits, both bought near the park entrance."
    },
    {
        region: "Langtang",
        permit: "Langtang NP entry",
        cost: "Rs ~3,000",
        where: "Dhunche / Syabrubesi"
    },
    {
        region: "Rara",
        permit: "Rara NP entry",
        cost: "Rs ~3,000",
        where: "Talcha / Ghatta"
    },
    {
        region: "Dolpo",
        permit: "Shey Phoksundo NP + restricted area",
        cost: "US$10/day",
        where: "Dept. of Immigration / agency",
        note: "Organised, licensed trek required."
    },
    {
        region: "Upper Mustang",
        permit: "Restricted area permit",
        cost: "~US$50/day",
        where: "Authorised agency",
        note: "Must travel with a licensed, organised trek."
    },
    {
        region: "Manaslu & Kanchenjunga",
        permit: "Restricted area permit",
        cost: "US$75+ / US$20 per week",
        where: "Dept. of Immigration",
        note: "Licensed group required."
    },
    {
        region: "Chitwan & Bardia",
        permit: "National park entry",
        cost: "Rs 1,500",
        where: "Park gates",
        note: "Keep the ticket — needed again for jeep safaris."
    }

];


const smartEmergency = [

    {
        name: "Tourist Police — Thamel",
        number: "+977-1-4700750",
        note: "Main tourist hub, Kathmandu"
    },
    {
        name: "Tourist Police — Airport",
        number: "+977-1-6227122",
        note: "Tribhuvan International"
    },
    {
        name: "Tourist Police — Pokhara",
        number: "+977-61-462761",
        note: "Lakeside"
    },
    {
        name: "Nepal Tourism Crisis Unit",
        number: "97510-44088",
        note: "24/7 tourism emergencies"
    },
    {
        name: "National women's helpline",
        number: "1145",
        note: "Free, confidential"
    },
    {
        name: "Police",
        number: "100",
        note: ""
    },
    {
        name: "Ambulance",
        number: "102",
        note: ""
    },
    {
        name: "Fire",
        number: "101",
        note: ""
    },
    {
        name: "International SOS (Kathmandu)",
        number: "+977-1-5580311",
        note: "Private clinic & evacuation"
    }

];


const smartMoneyTips = [

    "ATMs end around Namche Bazaar (Everest), Jomsom (Mustang) and Besishahar (Annapurna) — above that it is cash only.",
    "Carry small notes (Rs 100 / Rs 500) for teahouses, tips and village shops; big bills are hard to break.",
    "Exchange money at banks or authorised counters and keep the receipt.",
    "Budget roughly Rs 1,500–3,500 per day for food and lodging on popular treks.",
    "Cards work in Kathmandu and Pokhara hotels, but expect cash-only in villages.",
    "Tell your bank you are travelling so your card is not auto-blocked."

];


const smartGuideChecklist = [

    "Ask for their TAAN or NTIA licence card and check the photo matches.",
    "Confirm daily rate, meals, insurance and rescue cover in writing.",
    "Make sure they are insured for rescue — you should never pay their evacuation.",
    "Verify the agency is registered and get a printed itinerary with dates.",
    "Read recent reviews of the guide or agency before paying anything.",
    "Pay in instalments and keep receipts — never 100% upfront.",
    "A good guide will never rush your altitude rest days or skip permits."

];


const smartPhrases = [

    { en: "How much does this cost?", ne: "यसको मूल्य कति हो?" },
    { en: "That is too expensive.", ne: "यो धेरै महँगो छ।" },
    { en: "Please reduce the price.", ne: "कृपया मूल्य घटाउनुहोस्।" },
    { en: "Please use the meter.", ne: "कृपया मिटर चलाउनुहोस्।" },
    { en: "Is this the correct price?", ne: "के यो सही मूल्य हो?" },
    { en: "I need a licensed guide.", ne: "मलाई इजाजतपत्र प्राप्त गाइड चाहिन्छ।" },
    { en: "No, thank you.", ne: "होइन, धन्यवाद।" },
    { en: "I don't want this.", ne: "मलाई यो चाहिँदैन।" },
    { en: "Help!", ne: "मद्दत गर्नुहोस्!" },
    { en: "Please call the police.", ne: "कृपया प्रहरीलाई फोन गर्नुहोस्।" },
    { en: "I am lost.", ne: "म हराएँ।" },
    { en: "I am not feeling well.", ne: "मलाई सन्चो छैन।" },
    { en: "Where is the hospital?", ne: "अस्पताल कहाँ छ?" },
    { en: "Where can I exchange money?", ne: "पैसा साट्न कहाँ पाइन्छ?" },
    { en: "Is there an ATM nearby?", ne: "नजिकै एटिएम छ?" },
    { en: "Please speak slowly.", ne: "कृपया बिस्तारै बोल्नुहोस्।" },
    { en: "Delicious, thank you.", ne: "मीठो छ, धन्यवाद।" },
    { en: "See you later.", ne: "फेरि भेटौँला।" }

];


const smartRestrictedAreas = [
    "Upper Mustang",
    "Upper Dolpo",
    "Manaslu",
    "Kanchenjunga"
];


function loadSmartPage() {

    renderPermitList();

    renderGuideChecklist();

    renderEmergencyGrid();

    renderMoneyTips();

    renderPhrasebook();

    renderOfflineStatus();

}


function renderPermitList() {

    const el =
        document.getElementById(
            "permitList"
        );

    if (!el) {

        return;

    }

    el.innerHTML =
        smartPermits
        .map(function(permit) {

            return `

                <div class="permit-item ${permit.mandatory ? "permit-mandatory" : ""}">

                    <div class="permit-top">

                        <div>

                            <span class="permit-region">
                                ${escapeHtml(permit.region)}
                            </span>

                            <h3>
                                ${escapeHtml(permit.permit)}
                            </h3>

                        </div>

                        ${permit.mandatory ? `
                            <span class="permit-badge">
                                MANDATORY
                            </span>
                        ` : ""}

                    </div>

                    <div class="permit-meta">
                        <span>
                            💰 ${escapeHtml(permit.cost)}
                        </span>
                        <span>
                            📍 ${escapeHtml(permit.where)}
                        </span>
                    </div>

                    ${permit.note ? `
                        <p class="permit-note">
                            ${escapeHtml(permit.note)}
                        </p>
                    ` : ""}

                </div>

            `;

        })
        .join("");

    const alert =
        document.getElementById(
            "restrictedAlert"
        );

    if (alert) {

        alert.innerHTML =
            `
                <strong>🛑 Restricted areas:</strong>
                ${escapeHtml(smartRestrictedAreas.join(", "))}
                need a special permit and a licensed, organised trek.
                Budget the permit cost before you book.
            `;

        alert.classList.remove(
            "hidden"
        );

    }

}


function renderGuideChecklist() {

    const el =
        document.getElementById(
            "guideChecklist"
        );

    if (!el) {

        return;

    }

    el.innerHTML =
        smartGuideChecklist
        .map(function(item) {

            return `
                <li>
                    <span class="check-dot">✓</span>
                    <span>${escapeHtml(item)}</span>
                </li>
            `;

        })
        .join("");

}


function renderEmergencyGrid() {

    const el =
        document.getElementById(
            "emergencyGrid"
        );

    if (!el) {

        return;

    }

    el.innerHTML =
        smartEmergency
        .map(function(entry) {

            return `

                <div class="emergency-card">

                    <div class="emergency-icon">
                        📞
                    </div>

                    <div>

                        <h3>
                            ${escapeHtml(entry.name)}
                        </h3>

                        <div class="emergency-number">
                            ${escapeHtml(entry.number)}
                        </div>

                        ${entry.note ? `
                            <p>
                                ${escapeHtml(entry.note)}
                            </p>
                        ` : ""}

                    </div>

                </div>

            `;

        })
        .join("");

}


function renderMoneyTips() {

    const el =
        document.getElementById(
            "moneyTips"
        );

    if (!el) {

        return;

    }

    el.innerHTML =
        smartMoneyTips
        .map(function(tip) {

            return `
                <li>
                    <span class="check-dot">✓</span>
                    <span>${escapeHtml(tip)}</span>
                </li>
            `;

        })
        .join("");

}


function renderPhrasebook() {

    const el =
        document.getElementById(
            "phrasebookList"
        );

    if (!el) {

        return;

    }

    el.innerHTML =
        smartPhrases
        .map(function(phrase, index) {

            return `
                <div class="phrase-row">

                    <span class="phrase-en">
                        ${escapeHtml(phrase.en)}
                    </span>

                    <span class="phrase-arrow">
                        →
                    </span>

                    <span class="phrase-ne">
                        ${escapeHtml(phrase.ne)}
                    </span>

                </div>
            `;

        })
        .join("");

}


function renderOfflineStatus() {

    const el =
        document.getElementById(
            "offlineStatus"
        );

    if (!el) {

        return;

    }

    if ("serviceWorker" in navigator) {

        if (navigator.serviceWorker.controller) {

            el.textContent =
                "✅ Offline mode active — this page opens without signal.";

            el.className =
                "offline-status offline-ready";

        } else if (
            location.protocol === "https:" ||
            location.hostname === "localhost" ||
            location.hostname === "127.0.0.1"
        ) {

            el.textContent =
                "⚙️ Offline mode activates on your next visit.";

            el.className =
                "offline-status offline-pending";

        } else {

            el.textContent =
                "⚠️ Offline mode needs HTTPS — available on the live site.";

            el.className =
                "offline-status offline-unavailable";

        }

    } else {

        el.textContent =
            "⚠️ This browser does not support offline mode.";

        el.className =
            "offline-status offline-unavailable";

    }

}


function buildSmartPackText() {

    const lines = [];

    lines.push(
        "YATRAKHOJ — OFFLINE SURVIVAL PACK"
    );

    lines.push(
        "Keep this for treks and areas without signal."
    );

    lines.push("");

    if (
        fairPricesData &&
        fairPricesData.destinations[
            fairSelected
        ]
    ) {

        const destination =
            fairPricesData.destinations[
                fairSelected
            ];

        lines.push(
            "=== FAIR PRICES: " +
            destination.title.toUpperCase() +
            " (NPR) ==="
        );

        (destination.taxiRoutes || []).forEach(
            function(route) {

                lines.push(
                    "Taxi " +
                    route.route +
                    " — meter " +
                    route.meter +
                    ", fair " +
                    route.fair
                );

            }
        );

        if (destination.guidePorter) {

            lines.push(
                "Guide " +
                formatCost(destination.guidePorter.guidePerDay) +
                "/day, porter " +
                formatCost(destination.guidePorter.porterPerDay) +
                "/day"
            );

        }

        lines.push("");

    }

    lines.push("=== EMERGENCY NUMBERS ===");

    smartEmergency.forEach(function(entry) {

        lines.push(
            entry.name +
            " — " +
            entry.number +
            (entry.note ? " (" + entry.note + ")" : "")
        );

    });

    lines.push("");

    lines.push("=== PERMITS & RULES ===");

    smartPermits.forEach(function(permit) {

        lines.push(
            permit.region +
            ": " +
            permit.permit +
            " — " +
            permit.cost +
            " (" +
            permit.where +
            ")"
        );

    });

    lines.push("");

    lines.push("=== VET YOUR GUIDE ===");

    smartGuideChecklist.forEach(function(item) {

        lines.push("- " + item);

    });

    lines.push("");

    lines.push("=== MONEY ON THE TRAIL ===");

    smartMoneyTips.forEach(function(tip) {

        lines.push("- " + tip);

    });

    lines.push("");

    lines.push("=== PHRASEBOOK (ENGLISH -> NEPALI) ===");

    smartPhrases.forEach(function(phrase) {

        lines.push(
            phrase.en +
            " = " +
            phrase.ne
        );

    });

    lines.push("");

    lines.push(
        "Stay safe. Find Hidden. Go Local. — YatraKhoj"
    );

    return lines.join("\n");

}


function downloadSmartPack() {

    const text =
        buildSmartPackText();

    const blob =
        new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

    const link =
        document.createElement(
            "a"
        );

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "yatra-khoj-offline-pack.txt";

    link.click();

    URL.revokeObjectURL(
        link.href
    );

    showToast(
        "Offline pack downloaded."
    );

}


function printSmartPack() {

    const printRoot =
        document.getElementById(
            "fairPrintRoot"
        );

    if (!printRoot) {

        showToast(
            "Print area not available."
        );

        return;
    }

    const html =
        buildSmartPackText()
        .split("\n")
        .map(function(line) {

            if (/^===/.test(line)) {

                return (
                    "<h2>" +
                    escapeHtml(line.replace(/=+/g, "").trim()) +
                    "</h2>"
                );

            }

            if (/^YATRAKHOJ/.test(line)) {

                return (
                    "<h1>" +
                    escapeHtml(line) +
                    "</h1>"
                );

            }

            return (
                "<p>" +
                escapeHtml(line) +
                "</p>"
            );

        })
        .join("");

    printRoot.innerHTML = html;

    printRoot.classList.remove(
        "hidden"
    );

    window.print();

    printRoot.classList.add(
        "hidden"
    );

    printRoot.innerHTML = "";

}


/* =========================================================
   NEPAL IN NUMBERS — TRENDS DASHBOARD
========================================================= */

function loadTrends() {

    apiGet(
        "/api/trends",
        { success: false, trends: null }
    )
    .then(function(data) {

        const trends =
            data &&
            data.success &&
            data.trends
            ? data.trends
            : null;

        if (!trends) {

            renderTrendStats(null);

            return;

        }

        renderTrendStats(trends);

        renderArrivalsChart(trends);

        renderSeasonalityChart(trends);

        renderMarketsChart(trends);

        renderTrendsTakeaway(trends);

    });

}


const KTM_TZ = "Asia/Kathmandu";
const AVG_STAY_DAYS = 16.3;
const SPEND_PER_DAY = 33;

let liveTrends = null;
let liveTicker = null;
let liveStatsAnimated = false;


function padNum(n) {
    return (n < 10 ? "0" : "") + n;
}


function ktmClockParts() {

    const parts =
        new Intl.DateTimeFormat(
            "en-GB",
            {
                timeZone: KTM_TZ,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }
        )
        .formatToParts(new Date());

    let h = 0, m = 0, s = 0;

    parts.forEach(function(part) {

        if (part.type === "hour") {
            h = parseInt(part.value, 10) % 24;
        } else if (part.type === "minute") {
            m = parseInt(part.value, 10);
        } else if (part.type === "second") {
            s = parseInt(part.value, 10);
        }

    });

    return {
        h: h,
        m: m,
        s: s,
        hh: padNum(h),
        mm: padNum(m),
        ss: padNum(s)
    };

}


function liveStatValues() {

    const yearArr =
        (liveTrends && liveTrends.arrivalsByYear) || [];

    const last =
        yearArr[yearArr.length - 1];

    const annual =
        (last && last.value) || 1158459;

    const dailyRate =
        annual / 365;

    const clock =
        ktmClockParts();

    const frac =
        (clock.h * 3600 + clock.m * 60 + clock.s) / 86400;

    const arrivalsToday =
        Math.round(dailyRate * frac);

    return {
        arrivalsToday: arrivalsToday,
        spentToday: Math.round(arrivalsToday * SPEND_PER_DAY),
        visitorsNow: Math.round((annual * AVG_STAY_DAYS) / 365),
        clock: clock.hh + ":" + clock.mm + ":" + clock.ss
    };

}


function setStat(id, value, label) {

    const el =
        document.getElementById(id);

    if (!el) {

        return;

    }

    const strong =
        el.querySelector("strong");

    const span =
        el.querySelector("span");

    if (strong) {

        strong.textContent = value;

    }

    if (span && label) {

        span.textContent = label;

    }

}


function animateCount(el, target, formatter, duration) {

    const dur = duration || 1100;
    const start = performance.now();

    function frame(now) {

        const t =
            Math.min(1, (now - start) / dur);

        const eased =
            1 - Math.pow(1 - t, 3);

        el.textContent =
            formatter(Math.round(target * eased));

        if (t < 1) {

            requestAnimationFrame(frame);

        }

    }

    requestAnimationFrame(frame);

}


function tickLiveStats() {

    const v =
        liveStatValues();

    setStat(
        "stat-1",
        "≈ " + v.arrivalsToday.toLocaleString("en-US"),
        "Arrivals so far today (est.)"
    );

    setStat(
        "stat-2",
        v.clock,
        "Kathmandu time"
    );

    setStat(
        "stat-3",
        "≈ $" + v.spentToday.toLocaleString("en-US"),
        "Spent by visitors today (est.)"
    );

    setStat(
        "stat-4",
        "≈ " + v.visitorsNow.toLocaleString("en-US"),
        "Visitors in Nepal right now (est.)"
    );

}


function startLiveTicker() {

    if (liveTicker) {

        return;

    }

    liveTicker =
        setInterval(tickLiveStats, 1000);

}


function renderTrendStats(trends) {

    liveTrends = trends;

    const v =
        liveStatValues();

    const card1 =
        document.getElementById("stat-1");

    const card2 =
        document.getElementById("stat-2");

    const card3 =
        document.getElementById("stat-3");

    const card4 =
        document.getElementById("stat-4");

    if (!liveStatsAnimated) {

        liveStatsAnimated = true;

        if (card1) {

            animateCount(
                card1.querySelector("strong"),
                v.arrivalsToday,
                function(n) {
                    return "≈ " + n.toLocaleString("en-US");
                }
            );

        }

        if (card3) {

            animateCount(
                card3.querySelector("strong"),
                v.spentToday,
                function(n) {
                    return "≈ $" + n.toLocaleString("en-US");
                }
            );

        }

        if (card4) {

            animateCount(
                card4.querySelector("strong"),
                v.visitorsNow,
                function(n) {
                    return "≈ " + n.toLocaleString("en-US");
                }
            );

        }

        setStat("stat-1", null, "Arrivals so far today (est.)");
        setStat("stat-2", v.clock, "Kathmandu time");
        setStat("stat-3", null, "Spent by visitors today (est.)");
        setStat("stat-4", null, "Visitors in Nepal right now (est.)");

        setTimeout(startLiveTicker, 1300);

    } else {

        tickLiveStats();

    }

}


function renderArrivalsChart(trends) {

    const el =
        document.getElementById(
            "arrivalsChart"
        );

    if (!el || !trends.arrivalsByYear) {

        return;

    }

    const entries =
        trends.arrivalsByYear;

    const max =
        Math.max.apply(
            null,
            entries.map(function(e) {
                return e.value;
            })
        ) || 1;


    el.innerHTML =
        entries
        .map(function(entry) {

            const year =
                entry.year;

            const value =
                entry.value;

            const height =
                Math.round(
                    (value / max) * 100
                );

            return `

                <div class="bar-col">

                    <span class="bar-value">
                        ${value >= 1000000 ? (value / 1000000).toFixed(2) + "M" : Math.round(value / 1000) + "k"}
                    </span>

                    <div class="bar-track">

                        <div
                            class="bar-fill"
                            style="height:${height}%"
                        >
                        </div>

                    </div>

                    <span class="bar-label">
                        ${year}
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderSeasonalityChart(trends) {

    const el =
        document.getElementById(
            "seasonalityChart"
        );

    if (!el || !trends.seasonality) {

        return;

    }

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const entries =
        trends.seasonality;

    const byMonth = {};

    entries.forEach(function(entry) {

        byMonth[entry.month] =
            entry.value;

    });


    el.innerHTML =
        monthNames
        .map(function(name, index) {

            const value =
                byMonth[name] ||
                (entries[index] && entries[index].value) ||
                0;

            const height =
                Math.max(3, value);

            return `

                <div class="bar-col season-col">

                    <div class="bar-track">

                        <div
                            class="bar-fill season-fill"
                            style="height:${height}%"
                            title="${name}: ${value}%"
                        >
                        </div>

                    </div>

                    <span class="bar-label">
                        ${name}
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderMarketsChart(trends) {

    const el =
        document.getElementById(
            "marketsChart"
        );

    if (!el || !trends.sourceMarkets) {

        return;

    }

    const entries =
        trends.sourceMarkets;

    const max =
        Math.max.apply(
            null,
            entries.map(function(e) {
                return e.value;
            })
        ) || 1;


    el.innerHTML =
        entries
        .map(function(entry) {

            const width =
                Math.round(
                    (entry.value / max) * 100
                );

            return `

                <div class="market-row">

                    <span class="market-name">
                        ${escapeHtml(entry.country || entry.name)}
                    </span>

                    <div class="market-track">

                        <div
                            class="market-fill"
                            style="width:${width}%"
                        >
                        </div>

                    </div>

                    <span class="market-value">
                        ${entry.value}%
                    </span>

                </div>

            `;

        })
        .join("");

}


function renderTrendsTakeaway(trends) {

    const el =
        document.getElementById(
            "trendsTakeaway"
        );

    if (!el) {

        return;

    }

    el.textContent =
        trends.takeaway ||
        "Data from public Nepal Tourism Board reporting.";

}



/* =========================================================
   UNDERRATED NEPAL
========================================================= */

function renderUnderrated() {

    const grid =
        document.getElementById(
            "underratedGrid"
        );

    if (!grid) {

        return;

    }

    grid.innerHTML =
        underratedRegions
        .map(function(region) {

            return `

                <div class="underrated-card">

                    <div class="underrated-tags">

                        <span class="crowd-badge crowd-${region.crowdLevel}">
                            ${crowdLabel(region.crowdLevel)}
                        </span>

                        <span class="chip chip-${region.difficulty}">
                            ${difficultyLabel(region.difficulty)}
                        </span>

                    </div>

                    <span class="underrated-region">
                        ${escapeHtml(region.region)}
                    </span>

                    <h3>
                        ${escapeHtml(region.name)}
                    </h3>

                    <p>
                        ${escapeHtml(region.description)}
                    </p>

                    <span class="underrated-replace">
                        ☞ Quieter alternative to ${escapeHtml(region.replace)}
                    </span>

                    ${
                        region.review
                        ? `<p class="underrated-review">“${escapeHtml(region.review)}”</p>`
                        : ""
                    }

                </div>

            `;

        })
        .join("");

}



/* =========================================================
   START WEBSITE
========================================================= */

function startWebsite() {

    const savedLang =
        localStorage.getItem("yk-lang");

    if (savedLang) {

        setLanguage(savedLang);

    }


    loadDiscover();

    loadGuideButtons();

    loadSafetyPage();

    convertCurrency();

    loadLiveCurrency();

    restoreFromUrl();

    restoreSession();

    applyPrefsToTripFinder();

    bindPrefsControls();

    renderUnderrated();

    loadTrends();

    registerServiceWorker();

}


function registerServiceWorker() {

    if (
        !("serviceWorker" in navigator) ||
        (
            location.protocol !== "https:" &&
            location.hostname !== "localhost" &&
            location.hostname !== "127.0.0.1"
        )
    ) {

        return;

    }

    navigator.serviceWorker
        .register("sw.js")
        .catch(function() {
            /* offline mode is best-effort */
        });

}


startWebsite();

