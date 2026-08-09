# jarvis_intrhack2026
we are team jarvis
This is repository

1. Project Title 
YatraKhoj
2. Team Name & Member Names 
(Yatrakhoj)
Arun Adhikari
3. Problem Statement
Travelers often struggle to find destinations that match their interests, budget, available time, experience level, and safety requirements. Information about trekking routes, lakes, cultural places, transportation costs, accommodation, local attractions, and safety is usually scattered across different websites and social media platforms.
4. Solution Description
Our solution is to create one platform where travelers tell us what kind of trip they want, and YatraKhoj suggests suitable destinations with their budget, safety, difficulty, and itinerary. This saves users from searching through many different websites and also helps them discover hidden local destinations. Our solution is to create one platform where travelers tell us what kind of trip they want, and YatraKhoj suggests suitable destinations with their budget, safety, difficulty, and itinerary. This saves users from searching through many different websites and also helps them discover hidden local destinations.
5. Tech Stack Used (languages, frameworks, libraries, APIs) 
HTML – to create the structure of the website CSS – to design and style the interface JavaScript – for trip filtering, recommendations, buttons, forms, and interactive features JSON – to store destination, budget, safety, and itinerary data Leaflet.js : for interactive map Google OAuth 2.0 – optional Google sign-in for saved preferences (demo login fallback) Node.js – backend server (auth, community reports, tourism trends, currency, weather)

6. Setup / Installation Instructions (how to run the project locally)
1. Clone the repository:
   git clone https://github.com/arpitputu777/jarvis_intrahack2026.git
   cd jarvis_intrahack2026

2. Start the app — the backend serves the frontend too (single command, same-origin, port 5000):
   cd backend
   node server.js

   Then open http://localhost:5000 in your browser.

   Optional Google login: copy backend/.env.example to backend/.env and add
   GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET (callback URL:
   http://localhost:5000/api/auth/google/callback). Without keys the app runs in
   "demo login only" mode, so sign-in still works for the demo.

3. Frontend-only mode: if you prefer no server, open frontend/index.html directly —
   the app gracefully falls back to demo currency rates, cached weather, seeded
   community reports, and a bundled English↔Nepali dictionary.

Features:
- Smart trip finder: pick interests, budget/day, trip length, difficulty,
  traveler type, and optionally "avoid the crowds". YatraKhoj ranks all 8
  destinations by a weighted score (interest + budget + duration + difficulty fit + crowd).
- Destination hub: live weather, transport options, a day-by-day itinerary built
  from your starting city, an interactive Leaflet map, safety-risk badges,
  a packing checklist, and national emergency hotlines.
- Hire Fair: responsible-hiring guidance with fair daily rates for guides,
  porters and drivers, plus legal porter load limits (20–25 kg).
- Community Safety Reports: live crowdsourced map + feed of scams, harassment,
  theft and alerts; travelers can submit their own reports (persisted server-side).
- Nepal in Numbers: a tourism data dashboard — arrivals recovery, seasonality,
  source markets and spend-per-day, from public NTB reporting.
- Underrated Nepal: off-the-beaten-path alternatives (Bardia, Langtang,
  Kanchenjunga, Karnali, Begnas, Kapilvastu) to fight overtourism.
- Discover page: search and filter all destinations by interest.
- Travel guides with local places and hotels.
- Currency converter with live NPR rates (falls back to demo rates offline);
  trip costs can be shown in your chosen currency everywhere.
- Settings panel: Google or demo sign-in plus saved preferences (default
  currency, language, difficulty, traveler type, avoid-crowd, cost display).
- English ↔ Nepali language toggle (UI dictionary + on-demand translation via backend).
- My Trips: automatically save your best match, review past plans, and reopen them.
- Share your plan via URL query params (?start=&days=&budget=&i=&r=).

7. AI Tools Used mandatory if any AI coding tools were used (see Technology Policy) 
Chat gpt, Claude Ai, Gemini
8. Demo Link or Screenshots
