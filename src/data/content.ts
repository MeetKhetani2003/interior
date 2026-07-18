/* ————————————————————————————————————————————————
   ModernArt Interior — content registry
   Photography: Pexels (curated) · Video: Pexels
———————————————————————————————————————————————— */

export const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
export const pxc = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

/* ————— film ————— */
export const FILM = {
  hero: "https://videos.pexels.com/video-files/20707771/20707771-hd_1920_1080_60fps.mp4",
  heroPoster:
    "https://images.pexels.com/videos/20707771/pexels-photo-20707771.jpeg?auto=compress&cs=tinysrgb&w=1920",
  tour: "https://videos.pexels.com/video-files/12687238/12687238-hd_1920_1080_30fps.mp4",
  tourPoster:
    "https://images.pexels.com/videos/12687238/pexels-photo-12687238.jpeg?auto=compress&cs=tinysrgb&w=1920",
  loop: "https://videos.pexels.com/video-files/7239172/7239172-hd_1920_1080_25fps.mp4",
  pool: "https://videos.pexels.com/video-files/18531414/18531414-hd_1920_1080_60fps.mp4",
  poolPoster:
    "https://images.pexels.com/videos/18531414/pexels-photo-18531414.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

/* ————— projects ————— */
export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  cats: string[];
  location: string;
  year: string;
  area: string;
  duration: string;
  scope: string[];
  hero: string;
  poster: string;
  images: { src: string; cap: string; tall?: boolean }[];
  description: string[];
  mood: { name: string; tone: string }[];
  materials: string[];
  furniture: { piece: string; maker: string; room: string }[];
  video: string;
};

const I = (id: number, cap: string, tall = false, w = 1600) => ({ src: px(id, w), cap, tall });

export const PROJECTS: Project[] = [
  {
    slug: "aditya-antilia",
    index: "01",
    title: "Aditya Antilia",
    tagline: "A monumental residence of light and stone",
    cats: ["Villa", "Residential"],
    location: "Mumbai, India",
    year: "2026",
    area: "850 m²",
    duration: "24 months",
    scope: ["Full interior architecture", "Custom furniture", "Art direction"],
    hero: "/projects/Aditya%20Antilia%20Living%20Room/44792522-deb4-4713-b47e-df4fcbb87c6a.jpg",
    poster: "/projects/Aditya%20Antilia%20Living%20Room/44792522-deb4-4713-b47e-df4fcbb87c6a.jpg",
    images: [
      { src: "/projects/Aditya%20Antilia%20Living%20Room/44792522-deb4-4713-b47e-df4fcbb87c6a.jpg", cap: "Gallery View 1" },
      { src: "/projects/Aditya%20Antilia%20Living%20Room/7955d7bb-aa68-4322-bb9d-85293296e57b.jpg", cap: "Gallery View 2" },
      { src: "/projects/Aditya%20Antilia%20Living%20Room/9ceac41c-1d04-468f-8e3a-d8589e86f79f.jpg", cap: "Gallery View 3" },
      { src: "/projects/Aditya%20Antilia%20Living%20Room/bec3fc0e-c252-4fbe-8a0b-621f2b59bd3d.jpg", cap: "Gallery View 4" },
      { src: "/projects/Aditya%20Antilla%20final%203D/0a26f3f3-8251-40ae-913c-e1cff2db12c4.jpg", cap: "Gallery View 5" },
      { src: "/projects/Aditya%20Antilla%20final%203D/3f886d35-4b51-40a7-8035-a391cef70220.jpg", cap: "Gallery View 6" },
      { src: "/projects/Aditya%20Antilla%20final%203D/5638ee9f-4308-4d64-95bb-256c6bc8aa57.jpg", cap: "Gallery View 7" },
      { src: "/projects/Aditya%20Antilla%20final%203D/5aef3e06-75db-4c5c-93c1-cc57fe64f911.jpg", cap: "Gallery View 8" },
      { src: "/projects/Aditya%20Antilla%20final%203D/782fe1bd-fba0-472e-adf6-ab00c06d0612.jpg", cap: "Gallery View 9" },
      { src: "/projects/Aditya%20Antilla%20final%203D/7d0c220e-ae23-4090-b7d3-9b6ddc545e5a.jpg", cap: "Gallery View 10" },
      { src: "/projects/Aditya%20Antilla%20final%203D/8152abb0-a7c0-437e-a99a-11c5637ea3a5.jpg", cap: "Gallery View 11" },
      { src: "/projects/Aditya%20Antilla%20final%203D/81bc2f6c-e0c5-47e3-8702-fe98c8418c53.jpg", cap: "Gallery View 12" },
      { src: "/projects/Aditya%20Antilla%20final%203D/82fd5618-495c-47ba-a7d0-6892795bfb7f.jpg", cap: "Gallery View 13" },
      { src: "/projects/Aditya%20Antilla%20final%203D/869d59cc-aaf7-4b8c-a423-13597c8a61ed.jpg", cap: "Gallery View 14" },
      { src: "/projects/Aditya%20Antilla%20final%203D/9e9a7ec5-840a-4548-b1ab-0cb300a9e4ef.jpg", cap: "Gallery View 15" },
      { src: "/projects/Aditya%20Antilla%20final%203D/a03b9f45-a21c-4020-93ad-3f960f5fe7ff.jpg", cap: "Gallery View 16" },
      { src: "/projects/Aditya%20Antilla%20final%203D/a2d34d98-2741-4ef1-8b63-c405de30f525.jpg", cap: "Gallery View 17" },
      { src: "/projects/Aditya%20Antilla%20final%203D/a5b09df2-2fe1-49a9-8c3f-14e61e2a5c78.jpg", cap: "Gallery View 18" },
      { src: "/projects/Aditya%20Antilla%20final%203D/aa036768-1ad4-4bcb-ad12-431106428c1a.jpg", cap: "Gallery View 19" },
      { src: "/projects/Aditya%20Antilla%20final%203D/ab121534-a9cd-43b4-88a0-d276606cc831.jpg", cap: "Gallery View 20" },
      { src: "/projects/Aditya%20Antilla%20final%203D/ae220f86-130f-4c80-a0d6-7a87df094454.jpg", cap: "Gallery View 21" },
      { src: "/projects/Aditya%20Antilla%20final%203D/bde80e60-7ecc-40ea-9743-3112383a9895.jpg", cap: "Gallery View 22" },
      { src: "/projects/Aditya%20Antilla%20final%203D/cb3d9d80-a5cf-46dd-bb14-a8a66afa12f8.jpg", cap: "Gallery View 23" },
      { src: "/projects/Aditya%20Antilla%20final%203D/d5ed6fad-c27c-4310-9b3f-ebf9a9b8a222.jpg", cap: "Gallery View 24" },
      { src: "/projects/Aditya%20Antilla%20final%203D/d7bc1d8a-1581-4e05-9868-24c8cd5d923f.jpg", cap: "Gallery View 25" },
      { src: "/projects/Aditya%20Antilla%20final%203D/d96d51cb-cba0-4b59-83db-329a234da2a5.jpg", cap: "Gallery View 26" },
      { src: "/projects/Aditya%20Antilla%20final%203D/db90bf67-fe08-4212-826b-1bf986eb8e54.jpg", cap: "Gallery View 27" },
      { src: "/projects/Aditya%20Antilla%20final%203D/e085cb14-54f0-44bd-b929-33d1fc9f4def.jpg", cap: "Gallery View 28" },
      { src: "/projects/Aditya%20Antilla%20final%203D/ec60b8a7-f272-4e64-8faa-439a94799b8e.jpg", cap: "Gallery View 29" },
      { src: "/projects/Aditya%20Antilla%20final%203D/fac3db6c-ea90-460b-8e80-82a74c7ef4a4.jpg", cap: "Gallery View 30" }
    ],
    description: [
      "Aditya Antilia is an exercise in scale and serenity. Designed as a monumental private residence, the spaces are carved out of massive volumes of travertine and warm minimalism. The living room features double-height ceilings that draw in natural light, making the monumental stone feel weightless.",
      "Every detail in the semi-master bedroom and daughter's room was carefully calibrated to feel intimate despite the vastness of the home, using rich textures and a highly restrained palette."
    ],
    mood: [
      { name: "Travertine", tone: "#d9cdb4" },
      { name: "Warm Oak", tone: "#8b6a4b" },
      { name: "Bone Plaster", tone: "#f2ece1" },
    ],
    materials: ["Travertine", "Warm Oak", "Bone Plaster", "Bronze"],
    furniture: [
      { piece: "Custom 4m Sofa", maker: "ModernArt Atelier", room: "Living Room" },
      { piece: "Monumental Coffee Table", maker: "GUBI", room: "Living Room" },
    ],
    video: FILM.tour,
  },
  {
    slug: "ananta-sky",
    index: "02",
    title: "Ananta Sky",
    tagline: "Penthouse living above the clouds",
    cats: ["Apartment", "Residential"],
    location: "Mumbai, India",
    year: "2025",
    area: "420 m²",
    duration: "16 months",
    scope: ["Full interior", "Lighting design", "Custom joinery"],
    hero: "/projects/ANANTA%20SKY%20SEMI%20MASTER/cfec4800-d485-4968-a485-adcf1d277eb1.jpg",
    poster: "/projects/ANANTA%20SKY%20SEMI%20MASTER/cfec4800-d485-4968-a485-adcf1d277eb1.jpg",
    images: [
      { src: "/projects/ANANTA%20SKY%20SEMI%20MASTER/cfec4800-d485-4968-a485-adcf1d277eb1.jpg", cap: "Gallery View 1" }
    ],
    description: [
      "Perched high above the city, Ananta Sky is a penthouse that embraces the evening. The semi-master suite was designed with a cinematic, moody palette of smoked oak and charcoal linens to contrast with the bright skyline outside.",
      "The layout was entirely reconfigured to prioritize panoramic views, ensuring that every room acts as a private viewing gallery for the city below."
    ],
    mood: [
      { name: "Smoked Oak", tone: "#4a3c31" },
      { name: "Charcoal Linen", tone: "#3a3a3a" },
      { name: "Brushed Brass", tone: "#b08d57" },
    ],
    materials: ["Smoked Oak", "Charcoal Linen", "Brushed Brass"],
    furniture: [
      { piece: "Camaleonda Sofa", maker: "B&B Italia", room: "Lounge" },
      { piece: "Custom Bed Frame", maker: "ModernArt Atelier", room: "Semi Master" },
    ],
    video: FILM.loop,
  },
  {
    slug: "nineteen-nineteen",
    index: "03",
    title: "19.19",
    tagline: "A Parisian study in bone and oak",
    cats: ["Apartment", "Residential"],
    location: "Paris, France",
    year: "2024",
    area: "180 m²",
    duration: "12 months",
    scope: ["Full renovation", "Furniture curation"],
    hero: "/projects/19.19_p1.png",
    poster: "/projects/19.19_p1.png",
    images: [
      { src: "/projects/19.19_p1.png", cap: "Salon — herringbone and bone plaster" },
      { src: "/projects/bedroom-_p1.png", cap: "Suite — mirrored light" },
    ],
    description: [
      "Project 19.19 is a careful restoration of a classic apartment, stripping back decades of modifications to reveal its essential bones. Herringbone floors were restored and walls were washed in flat bone plaster.",
      "The result is a bright, highly textured space that serves as a quiet backdrop for a curated collection of contemporary and mid-century furniture."
    ],
    mood: [
      { name: "Bone Plaster", tone: "#f4eee4" },
      { name: "Aged Oak", tone: "#a98d6b" },
      { name: "Cognac Leather", tone: "#9a6b44" },
    ],
    materials: ["Bone Plaster", "Aged Oak", "Cognac Leather"],
    furniture: [
      { piece: "Soriana Armchair", maker: "Cassina", room: "Salon" },
      { piece: "Wishbone Chairs", maker: "Carl Hansen", room: "Dining" },
    ],
    video: FILM.pool,
  },
  {
    slug: "casa-lumen",
    index: "01",
    title: "Casa Lumen",
    tagline: "A villa that collects daylight",
    cats: ["Villa", "Residential"],
    location: "Belas, Lisboa",
    year: "2024",
    area: "420 m²",
    duration: "14 months",
    scope: ["Architecture coordination", "Full interior", "Custom furniture", "Art direction"],
    hero: px(28054862, 2200),
    poster: px(28054862, 1200),
    images: [
      { src: "https://images.pexels.com/photos/15867752/pexels-photo-15867752.png?auto=compress&cs=tinysrgb&w=1600", cap: "Living hall — afternoon light" },
      I(8251600, "Principal suite — crumpled linen, oak, paper", true),
      I(35021550, "Kitchen — walnut panelling, nero marble"),
      I(7031574, "Bath — honed white, double basin"),
      I(6032422, "Stair — oak treads on charcoal spine", true),
    ],
    description: [
      "Casa Lumen began with a single question — where does the sun land at 8 a.m.? Every room was then placed to receive it. Travertine floors run from garden to hearth, storing the day's warmth and giving it back by evening.",
      "The palette is deliberately narrow: ivory lime, walnut, nero marble, unlacquered brass that will deepen with touch. Furniture paces the rooms rather than filling them — a few sculptural pieces, generously spaced, the way a gallery hangs a single drawing.",
    ],
    mood: [
      { name: "Travertine Classico", tone: "#d9cdb4" },
      { name: "Walnut veneer", tone: "#6a4e36" },
      { name: "Ivory bouclé", tone: "#ede6d8" },
      { name: "Nero Marquina", tone: "#23211e" },
      { name: "Brushed brass", tone: "#b08d57" },
    ],
    materials: ["Travertine", "Walnut", "Nero marble", "Ivory bouclé", "Limewash", "Brass"],
    furniture: [
      { piece: "Blade sofa, custom 3.2 m", maker: "ModernArt Atelier", room: "Living hall" },
      { piece: "Epic coffee table, travertine", maker: "GUBI", room: "Living hall" },
      { piece: "C-Chair dining", maker: "GUBI", room: "Dining" },
      { piece: "Model 2065 suspension", maker: "Astep", room: "Stair void" },
    ],
    video: FILM.pool,
  },
  {
    slug: "atrio-do-vale",
    index: "02",
    title: "Atrio do Vale",
    tagline: "A penthouse tuned to dusk",
    cats: ["Apartment", "Residential"],
    location: "Chiado, Lisboa",
    year: "2023",
    area: "210 m²",
    duration: "11 months",
    scope: ["Full renovation", "Lighting design", "Custom joinery"],
    hero: px(7045915, 2200),
    poster: px(7045915, 1200),
    images: [
      I(6970051, "Dining — the city as wallpaper"),
      I(7045920, "Lounge — low silhouettes, high ceiling"),
      I(7045918, "Terrace — teak deck, linen walls"),
      I(7214328, "Bath — dark mirror, warm timber", true),
      I(37098141, "Suite — layered dimmable light"),
    ],
    description: [
      "On the sixth floor above Chiado, light arrives horizontally — long amber strokes across the ceiling. The plan was opened so that one may stand at the entrance and see the Tagus reflected three rooms away.",
      "Evening was the brief. Every lighting scene was rehearsed after dark: a warm 2200 K wash for entertaining, a single floor lamp for reading, nothing from above. Wood panelled walls absorb the city's noise and its glare alike.",
    ],
    mood: [
      { name: "Smoked oak", tone: "#8b6a4b" },
      { name: "Charcoal linen", tone: "#4a463f" },
      { name: "Bronze mirror", tone: "#95775b" },
      { name: "Bone plaster", tone: "#f2ece1" },
      { name: "Mist blue wool", tone: "#aeb9c0" },
    ],
    materials: ["Smoked oak", "Bronze mirror", "Charcoal linen", "Matt plaster", "Wool felt"],
    furniture: [
      { piece: "Camaleonda sofa", maker: "B&B Italia", room: "Lounge" },
      { piece: "Arco lamp", maker: "Flos", room: "Reading corner" },
      { piece: "Round D.154.2 armchairs", maker: "Molteni&C", room: "Lounge" },
      { piece: "Extendable dining table", maker: "Carl Hansen", room: "Dining" },
    ],
    video: FILM.tour,
  },
  {
    slug: "maison-sable",
    index: "03",
    title: "Maison Sable",
    tagline: "Parisian bones, Mediterranean skin",
    cats: ["Apartment", "Residential"],
    location: "7ᵉ arrondissement, Paris",
    year: "2024",
    area: "168 m²",
    duration: "9 months",
    scope: ["Full interior", "Heritage restoration", "Furniture curation"],
    hero: px(19050702, 2200),
    poster: px(19050702, 1200),
    images: [
      I(36726773, "Salon — plaster, cane, afternoon sun", true),
      I(29559675, "Dining — Nordic table under boiserie", true),
      I(9979842, "Library — leather and fir shelves", true),
      I(3992001, "Suite — mirror doubling the window", true),
      I(7602594, "Detail — anthurium on linen"),
    ],
    description: [
      "A Haussmann apartment with herringbone floors and three-metre ceilings asked not to be modernised but re-tempered. We stripped decades of gloss, let the mouldings breathe in flat bone paint, and moved the kitchen into the light.",
      "The furniture crosses borders the way the owners do — Danish oak, Italian leather, Portuguese linen. Nothing matches; everything rhymes. The brief was a home that feels assembled over a lifetime, delivered in nine months.",
    ],
    mood: [
      { name: "Bone paint", tone: "#f4eee4" },
      { name: "Aged oak", tone: "#a98d6b" },
      { name: "Cane webbing", tone: "#c9a97c" },
      { name: "Cognac leather", tone: "#9a6b44" },
      { name: "Soft black", tone: "#2b2723" },
    ],
    materials: ["Aged oak", "Cane", "Cognac leather", "Bone plaster", "Belgian linen"],
    furniture: [
      { piece: "CH24 Wishbone, soaped oak", maker: "Carl Hansen", room: "Dining" },
      { piece: "Soriana armchair", maker: "Cassina", room: "Salon" },
      { piece: "Akari 75A lantern", maker: "Vitra", room: "Library" },
      { piece: "Daybed, custom cane", maker: "ModernArt Atelier", room: "Suite" },
    ],
    video: FILM.loop,
  },
  {
    slug: "ochre-house",
    index: "04",
    title: "The Ochre House",
    tagline: "Stone, shade and slow water",
    cats: ["Villa", "Residential"],
    location: "Comporta, Portugal",
    year: "2022",
    area: "385 m²",
    duration: "16 months",
    scope: ["Architecture & interior", "Landscape rooms", "Turnkey delivery"],
    hero: px(16959786, 2200),
    poster: px(16959786, 1200),
    images: [
      I(7031712, "Living — timber walls, low horizon"),
      I(7031591, "Stair — floating oak over limestone"),
      I(6636294, "Kitchen — open to the garden"),
      I(8089171, "Bath — a room for steam"),
      I(6962862, "Guest suite — ochre accents"),
    ],
    description: [
      "Built from the same sand it stands on, the Ochre House is a courtyard machine for summer. Thick stone walls hold the cool of the night; deep overhangs draw shadow lines that move like a sundial across the terrace.",
      "Inside, the palette borrows from the rice fields — oat, flax, weathered wood — interrupted by nothing. The house has no television in the living room, by request. It has a long table, a longer sofa, and doors that disappear into walls.",
    ],
    mood: [
      { name: "Local stone", tone: "#cbb99a" },
      { name: "Ochre wash", tone: "#c69a6b" },
      { name: "Weathered teak", tone: "#8f7a5e" },
      { name: "Raw linen", tone: "#e5dccb" },
      { name: "Basalt", tone: "#3a3733" },
    ],
    materials: ["Local stone", "Teak", "Basalt", "Raw linen", "Microcement"],
    furniture: [
      { piece: "Table, 4 m solid iroko", maker: "ModernArt Atelier", room: "Terrace" },
      { piece: "Ghost sofa", maker: "Gervasoni", room: "Living" },
      { piece: "Potence pivotante", maker: "Nemo", room: "Stair" },
      { piece: "Outdoor daybeds", maker: "Tribù", room: "Pool" },
    ],
    video: FILM.pool,
  },
  {
    slug: "atelier-bruma",
    index: "05",
    title: "Atelier Bruma",
    tagline: "A gallery of arches and air",
    cats: ["Commercial"],
    location: "Brera, Milan",
    year: "2023",
    area: "290 m²",
    duration: "7 months",
    scope: ["Retail concept", "Interior architecture", "Lighting"],
    hero: px(27584206, 2200),
    poster: px(27584206, 1200),
    images: [
      I(32619388, "Curve study — light and geometry"),
      I(18985068, "Arch rhythm — circulation as sequence", true),
      I(7078390, "Textured vault — mineral daylight", true),
      I(36752360, "Detail — carved threshold", true),
      I(5511103, "Reception — quiet brand theatre"),
    ],
    description: [
      "For a fragrance house's first flagship, we designed a sequence rather than a shop. Visitors enter through a low arch, turn, rise, and arrive — the product revealed only at the end of the walk, like the top note of the perfume itself.",
      "Every surface is mineral: lime plaster, clay render, pietra serena thresholds. There is no point of sale, no signage above knee height, no downlight within two metres of the objects. Silence sells.",
    ],
    mood: [
      { name: "Lime plaster", tone: "#efe9dc" },
      { name: "Pietra serena", tone: "#8e8b82" },
      { name: "Clay render", tone: "#d7c9b2" },
      { name: "Oxidised steel", tone: "#6d6257" },
      { name: "Parchment", tone: "#f1ead9" },
    ],
    materials: ["Lime plaster", "Pietra serena", "Clay render", "Oxidised steel"],
    furniture: [
      { piece: "Display plinths, carved stone", maker: "ModernArt Atelier", room: "Gallery" },
      { piece: "Curved bench", maker: "Christophe Delcourt", room: "Fitting salon" },
      { piece: "Plaster wall washers", maker: "Viabizzuno", room: "Throughout" },
      { piece: "Stool 60", maker: "Artek", room: "Consultation" },
    ],
    video: FILM.tour,
  },
  {
    slug: "villa-norte",
    index: "06",
    title: "Villa Norte",
    tagline: "Glass, olive trees, granite soil",
    cats: ["Villa", "Residential"],
    location: "Douro Valley, Portugal",
    year: "2025",
    area: "512 m²",
    duration: "18 months",
    scope: ["Interior architecture", "Furniture", "Site supervision"],
    hero: px(10610733, 2200),
    poster: px(10610733, 1200),
    images: [
      I(20285351, "Living — beige field, black lines"),
      I(18707955, "Kitchen — marble over timber"),
      I(37468266, "Suite — evening protocol"),
      I(7195883, "Bath — marble vessel"),
      I(5502224, "Study — green sofa, long desk"),
    ],
    description: [
      "The vineyard dictated everything. A single glass plane faces the terraces; behind it, rooms are carved from granite-coloured plaster so the landscape stays the artwork. From the road, the house is one line of shadow under the oaks.",
      "Inside, warmth is engineered: radiant stone floors, cork-lined ceilings, wool curtains three metres tall. The technical draw is invisible — no grille, no speaker, no handle that could interrupt the long view.",
    ],
    mood: [
      { name: "Granite plaster", tone: "#9c938a" },
      { name: "Cork", tone: "#b99568" },
      { name: "Ivory wool", tone: "#f0eadd" },
      { name: "Calacatta", tone: "#ddd6c8" },
      { name: "Matt black steel", tone: "#262422" },
    ],
    materials: ["Granite plaster", "Cork", "Calacatta", "Wool", "Black steel"],
    furniture: [
      { piece: "Modular sofa, deep seat", maker: "Living Divani", room: "Living" },
      { piece: "PK22 lounge chair", maker: "Fritz Hansen", room: "Study" },
      { piece: "Taccia table lamp", maker: "Flos", room: "Suite" },
      { piece: "Dining table, granite base", maker: "ModernArt Atelier", room: "Dining" },
    ],
    video: FILM.tour,
  },
  {
    slug: "silk-court",
    index: "07",
    title: "Silk Court",
    tagline: "A kitchen that behaves like a salon",
    cats: ["Apartment", "Kitchen", "Residential"],
    location: "Marylebone, London",
    year: "2024",
    area: "142 m²",
    duration: "8 months",
    scope: ["Apartment renovation", "Kitchen & joinery", "Styling"],
    hero: px(6284237, 2200),
    poster: px(6284237, 1200),
    images: [
      I(6585626, "Open plan — kitchen as furniture"),
      I(6636288, "Cabinetry — oak and warm white"),
      I(22743854, "Dining niche — timber on timber", true),
      I(7303743, "Morning ritual", true),
      I(6934243, "Study corner — bookcase wall"),
    ],
    description: [
      "In Marylebone a Victorian floor plan was edited down to three generous rooms. The kitchen — usually the machine — was asked to behave like a salon: closed oak fronts, marble that bruises beautifully, and not one visible appliance.",
      "Silk Court is proof that renovation is a subtractive art. We removed 40 running metres of partition and returned it as nine metres of joinery — storage, bench, bookshelf, bar. The flat now lives twice its metres.",
    ],
    mood: [
      { name: "Fumed oak", tone: "#7c6248" },
      { name: "Arabescato", tone: "#d8d2c4" },
      { name: "Warm white", tone: "#f4efe6" },
      { name: "Red brass", tone: "#a67c52" },
      { name: "Umber textile", tone: "#5c4632" },
    ],
    materials: ["Fumed oak", "Arabescato marble", "Red brass", "Warm white lacquer"],
    furniture: [
      { piece: "Jeanneret dining chairs", maker: "Cassina", room: "Dining" },
      { piece: "Bar counter, arabescato", maker: "ModernArt Atelier", room: "Kitchen" },
      { piece: "Suspension, opaline globe", maker: "&Tradition", room: "Dining" },
      { piece: "Linen roman blinds", maker: "De Le Cuona", room: "Throughout" },
    ],
    video: FILM.loop,
  },
  {
    slug: "bureau-alba",
    index: "08",
    title: "Bureau Alba",
    tagline: "An office with the manners of a hotel",
    cats: ["Office", "Commercial"],
    location: "Rotterdam, NL",
    year: "2023",
    area: "640 m²",
    duration: "10 months",
    scope: ["Workplace strategy", "Full interior", "Acoustics", "FF&E"],
    hero: px(31771715, 2200),
    poster: px(31771715, 1200),
    images: [
      I(6032411, "Gallery corridor — marble underfoot"),
      I(36486485, "Lift lobby — tailored evening", true),
      I(7167083, "The library — 1,200 titles on work"),
      I(6032418, "Stair hall — dark door, warm treads"),
      I(6186507, "Café — communal table", true),
    ],
    description: [
      "A family investment office asked for a workplace nobody wants to leave by 17:01. We answered with hospitality: a scented timber lobby, a working library instead of a reception, and meeting rooms lined in wool so voices stay low.",
      "Desks exist — but they live at the edges near the windows. The centre belongs to conversation: café, salon, study alcoves. Occupancy rose 34% after delivery; Mondays are now voluntarily attended.",
    ],
    mood: [
      { name: "Walnut panel", tone: "#6a4e36" },
      { name: "Forest carpet", tone: "#4c5648" },
      { name: "Marble grey", tone: "#b9b4a9" },
      { name: "Cream bouclé", tone: "#efe8da" },
      { name: "Bronze detail", tone: "#95775b" },
    ],
    materials: ["Walnut", "Wool carpet", "Grey marble", "Bouclé", "Bronze"],
    furniture: [
      { piece: "Lobby sofa, bespoke 5 m", maker: "ModernArt Atelier", room: "Reception" },
      { piece: "About A Chair", maker: "HAY", room: "Meeting" },
      { piece: "Library ladder, bronze", maker: "ModernArt Atelier", room: "Library" },
      { piece: "AJ floor lamp", maker: "Louis Poulsen", room: "Study alcoves" },
    ],
    video: FILM.tour,
  },
];

export const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Villa",
  "Apartment",
  "Kitchen",
  "Office",
];

/* ————— services ————— */
export type Service = {
  n: string;
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  src: string;
};

export const SERVICES: Service[] = [
  {
    n: "01", slug: "residential", title: "Residential Interiors",
    short: "Homes composed around your rituals",
    body: "Full-scope interior architecture for apartments, penthouses and family homes. We design from the ritual outward — where coffee is drunk, where books pile up, where guests actually sit — then build rooms that hold those moments beautifully.",
    points: ["Space planning & flow", "Lighting design", "Custom joinery", "Furniture & art curation"],
    src: px(7166926, 1400),
  },
  {
    n: "02", slug: "commercial", title: "Commercial & Retail",
    short: "Spaces that behave like the brand",
    body: "Flagships, galleries, restaurants and lobbies where the interior is the brand's quietest, strongest voice. We choreograph arrival, pause and reveal — and engineer the acoustics, light and wear that daily commerce demands.",
    points: ["Concept & narrative", "Circulation choreography", "Durable materiality", "Brand integration"],
    src: px(7045941, 1400),
  },
  {
    n: "03", slug: "villas", title: "Luxury Villas",
    short: "Houses in dialogue with their land",
    body: "From hillside to shoreline, villa commissions begin with orientation, wind and view. We work alongside the architecture from day one — or re-temper existing shells — delivering houses that feel inevitable on their site.",
    points: ["Site & orientation study", "Indoor–outdoor rooms", "Landscape interface", "Turnkey delivery"],
    src: px(7031412, 1400),
  },
  {
    n: "04", slug: "turnkey", title: "Turnkey Projects",
    short: "One contract, one calm delivery",
    body: "A single accountable line from survey to styling day. We manage trades, procurement, freight and installation under one roof — you return to a finished home, beds made, art hung, candles in the drawer.",
    points: ["Budget governance", "Trade management", "Procurement & logistics", "Installation week"],
    src: px(6032422, 1400),
  },
  {
    n: "05", slug: "apartments", title: "Apartment Renovation",
    short: "More metres than you own",
    body: "Renovation as a subtractive art: remove partitions, return joinery, double the light. We specialise in historic shells whose proportions deserve respect — and whose services (wiring, water, air) deserve a full century reset.",
    points: ["Heritage sensitivity", "Structural editing", "Services renewal", "Acoustic upgrades"],
    src: px(28536695, 1400),
  },
  {
    n: "06", slug: "kitchen-bath", title: "Kitchen & Bath",
    short: "The working rooms, perfected",
    body: "The two hardest-working rooms in any house, detailed to the millimetre. Closed cabinetry, honest stone, taps that feel like instruments. Kitchens that behave like salons; baths that behave like spas.",
    points: ["Ergonomic planning", "Stone selection", "Custom cabinetry", "Water & steam rooms"],
    src: px(6636319, 1400),
  },
  {
    n: "07", slug: "furniture", title: "Furniture & Styling",
    short: "The last five percent, which is everything",
    body: "Furniture curation, custom pieces from our atelier, art placement and the final styling pass. Objects are spaced like gallery hangs — few, chosen, and given air. This is where a project becomes a portrait of its owner.",
    points: ["FF&E specification", "Custom pieces", "Art consultancy", "Final styling"],
    src: px(9695827, 1400),
  },
  {
    n: "08", slug: "planning", title: "Space Planning",
    short: "Geometry before decoration",
    body: "Standalone planning studies for clients and architects: circulation, light paths, sightlines and storage mathematics. A plan that works on paper saves a fortune on site — and makes every later decision easier.",
    points: ["Flow analysis", "Furniture footprints", "Storage audits", "Test fits"],
    src: px(4249690, 1400),
  },
];

/* ————— process ————— */
export type Step = {
  n: string; title: string; time: string; body: string;
  deliver: string[]; src: string;
};

export const STEPS: Step[] = [
  {
    n: "01", title: "Consultation", time: "Week 0–1",
    body: "A long conversation before any drawing. We visit, we listen, we photograph how you live now — the worn chair, the good cup, the pile of unread books. Briefs are autobiographies; we read between the lines.",
    deliver: ["Site visit & survey", "Lifestyle questionnaire", "Feasibility note", "Fee proposal"],
    src: px(6580000, 1400),
  },
  {
    n: "02", title: "Concept", time: "Week 2–5",
    body: "Narrative first, floor plan second. Three moods are presented as short cinematic stories — palette, light, texture, sound. You choose a direction the way you'd choose a novel to live inside.",
    deliver: ["Narrative boards", "Reference films", "Palette & mood", "First spatial sketch"],
    src: px(4968696, 1400),
  },
  {
    n: "03", title: "Planning", time: "Week 6–10",
    body: "The concept becomes geometry. Plans, sections, and 3D massing resolve every door swing and sightline. This is where we spend the client's money on paper — the cheapest place to make mistakes.",
    deliver: ["Layout options", "3D visualisation", "Lighting scheme", "Budget framework"],
    src: px(9439227, 1400),
  },
  {
    n: "04", title: "Material Selection", time: "Week 10–12",
    body: "Stones are chosen at the quarry yard, woods at the veneer house, linens by hand. Every surface arrives as a physical sample and is judged at 8 a.m., noon and dusk — materials lie under bad light.",
    deliver: ["Material library", "Sample boards", "Costed FF&E schedule", "Supplier shortlist"],
    src: px(4249589, 1400),
  },
  {
    n: "05", title: "Execution", time: "Month 3–8",
    body: "Site supervision with a weekly photographic record. Our technical director walks every pour and every panel; tolerances are argued in millimetres so the finished room can be silent in centimetres.",
    deliver: ["Weekly site reports", "Shop drawings", "Quality control", "Trade coordination"],
    src: px(5439425, 1400),
  },
  {
    n: "06", title: "Styling", time: "Month 9",
    body: "Installation week is choreography: freight, furniture, art, flowers, scent. The last day is a private reveal — doors opened, lights at dusk setting, house warm. It should feel inevitable, not new.",
    deliver: ["Furniture installation", "Art hanging", "Textiles & objects", "Reveal day"],
    src: px(4050423, 1400),
  },
  {
    n: "07", title: "Delivery", time: "Beyond",
    body: "A bound house manual, a care ritual for every material, and our number for life. We return at the first anniversary to re-level, re-oil and re-style — houses settle, and we settle with them.",
    deliver: ["House manual", "Material care guide", "Snagging programme", "Anniversary visit"],
    src: px(7031595, 1400),
  },
];

/* ————— testimonials ————— */
export const TESTIMONIALS = [
  {
    quote:
      "They removed half the walls and somehow doubled the light. Our penthouse doesn't look designed — it looks inevitable. Guests touch the walls. That says everything.",
    name: "Isabel & Rui Fonseca",
    role: "Penthouse, Chiado",
    src: pxc(38139772, 200, 200),
  },
  {
    quote:
      "Working across three time zones, I expected friction. There was none. Weekly site films, a budget that never moved, and a reveal day I will describe at dinners for years.",
    name: "Adaeze Okonkwo",
    role: "Villa, Comporta",
    src: pxc(7147477, 200, 200),
  },
  {
    quote:
      "Our Milan flagship doubled its dwell time in the first quarter. The studio understood that luxury retail is theatre — and built us a stage that whispers.",
    name: "Elena Marchetti",
    role: "Creative Director, Bruma",
    src: pxc(6580015, 200, 200),
  },
];

/* ————— journal ————— */
export type Post = {
  slug: string; cat: string; title: string; date: string; read: string;
  excerpt: string; src: string; body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "case-for-silence", cat: "Essay", title: "The Case for Silence in Design",
    date: "Jan 2026", read: "6 min",
    excerpt: "The most expensive thing a room can hold is nothing. On restraint as the last true luxury.",
    src: px(12106848, 1400),
    body: [
      "A decade ago, luxury interiors announced themselves: veined marble shouting from every vertical, metallics on every edge. Today the projects we are proudest of are the ones a camera struggles to exoticise — rooms whose richness is acoustic, thermal, tactile. Quiet rooms.",
      "Silence in design is not emptiness. It is the discipline of ten materials refused for every one accepted; a door that closes with weight rather than noise; storage so complete that surfaces stay clear. It costs more to do less — in drawings, in millimetres, in conversations with craftspeople who must be persuaded that the best detail is the invisible one.",
      "When clients ask what our houses 'look like', we show photographs last. First we describe how they sound on a rainy Tuesday, how they smell after the windows are opened, how the light finds the breakfast table in February. Those are the specifications that matter. The look follows.",
    ],
  },
  {
    slug: "materials-that-age", cat: "Materials", title: "Materials That Age Gracefully",
    date: "Dec 2025", read: "8 min",
    excerpt: "Unlacquered brass, open-pore oak, lime plaster — a guide to surfaces that improve with use.",
    src: px(36989931, 1400),
    body: [
      "Every specification begins with a question most samples swatches can't answer: what will this look like touched ten thousand times? Unlacquered brass darkens where hands fall — a map of the household published in metal. Sealed brass stays new forever and says nothing.",
      "Open-pore oak takes oil and sunlight and gradually turns the colour of strong tea. Limewash bruises, and the bruise reads as depth rather than damage. Travertine pits and polishes simultaneously, which is precisely why the Romans kept choosing it. These are materials with futures.",
      "Our rule: never specify a surface whose worst day is ahead of it. Plastic laminates, high-gloss lacquers, chrome — they peak on installation day. Choose instead the materials whose beauty is a collaboration with time.",
    ],
  },
  {
    slug: "lighting-without-downlights", cat: "Guide", title: "How We Light a Room (Barely Using Downlights)",
    date: "Nov 2025", read: "7 min",
    excerpt: "Walls wash, lamps pool, ceilings glow. A three-layer method for rooms that look expensive after dark.",
    src: px(12202390, 1400),
    body: [
      "The ceiling grid of downlights is the fastest way to make a beautiful room look like an airport lounge. Light should come from where life is — at reading height, at table height, grazing walls rather than scalping heads.",
      "Layer one: wash. Indirect coves or discreet wall washers lift the vertical surfaces; rooms feel twice their size when walls glow. Layer two: pools. Table and floor lamps create islands of intimacy — five lamps on low outrank one chandelier on high, every time. Layer three: sparkle. A pendant or two, dimmed to a whisper, gives the eye a resting fire.",
      "Specify 2200–2400 K for living spaces, put absolutely everything on dimmers, and rehearse your scenes at night before the client moves in. Daylight forgives; evening exposes.",
    ],
  },
  {
    slug: "travertine-revisited", cat: "Materials", title: "Travertine, Revisited",
    date: "Oct 2025", read: "5 min",
    excerpt: "The stone of emperors, shopping malls, and — handled properly — the warmest minimal interiors we know.",
    src: px(1094761, 1400),
    body: [
      "Travertine carries baggage: provincial hotel foyers, eighties bathrooms, grout lines that never stayed white. But the stone itself is blameless — a warm, porous sediment of hot springs, used by Rome for the Colosseum and by Mies for Barcelona.",
      "The revival is in the cut and the fill. Unfilled and honed, vein-cut for long pencil lines: travertine reads as quiet and geological, less decorative than marble, warmer than concrete. In Casa Lumen it runs from garden to hearth in a single unbroken field, storing the day's sun.",
      "Seal it matte, detail it thin, and never let it near polished chrome. Travertine wants oil-rubbed bronze, walnut, wool — company from the same century of the earth.",
    ],
  },
  {
    slug: "slow-mornings", cat: "Essay", title: "Designing for Slow Mornings",
    date: "Sep 2025", read: "6 min",
    excerpt: "The breakfast nook, the east window, the kettle's furniture-grade place in the plan.",
    src: px(6580561, 1400),
    body: [
      "Ask clients about their favourite hour at home and rarely do they say the dinner party. They say: coffee at seven, before the phones. Yet most floor plans spend their best square metres on rooms used twice a year and forget the corner where life actually starts.",
      "We now design the morning first. An east-facing seat with a low table, near the kettle and the garden door; a sill deep enough for a cup; a window that frames one tree, not thirty. The cost is trivial — a shifted window, a built-in bench. The return is daily.",
      "Houses are judged in photographs but lived in mornings. Design for the latter and the former tends to take care of itself.",
    ],
  },
  {
    slug: "moodboard-to-move-in", cat: "Process", title: "From Moodboard to Move-In",
    date: "Aug 2025", read: "9 min",
    excerpt: "What actually happens between the Pinterest folder and the keys — an honest timeline.",
    src: px(7123142, 1400),
    body: [
      "Every client arrives with a folder of images. Our first job is translation: not what the rooms in the photographs look like, but why they chose them. Nine times out of ten it is light, calm or warmth — qualities, not objects. The moodboard is evidence; we are the detectives.",
      "Between concept and keys lie roughly forty decision points, and our process exists to order them so no one is choosing grout during structural steel. Narrative, plan, materials, drawings, tender, build, installation, styling: each gate locks the last.",
      "The unglamorous truth of beautiful interiors is administration — schedules, samples, site photographs. The glamour arrives only because the administration was done. Read our seven-step process for the full choreography.",
    ],
  },
];

/* ————— studio ————— */
export const TEAM = [
  { name: "Sofia Amaral", role: "Founder · Creative Director", src: pxc(6583360, 800, 1000) },
  { name: "M. Ilves", role: "Design Principal", src: pxc(38139772, 800, 1000) },
  { name: "A. Kovač", role: "Material Research", src: pxc(7147477, 800, 1000) },
  { name: "D. Rêgo", role: "Technical Director", src: pxc(6580015, 800, 1000) },
];

export const TIMELINE = [
  { y: "2008", t: "A two-desk studio on Rua das Flores", d: "Sofia Amaral founds ModernArt in Lisbon with a single belief: warm rooms age better than impressive ones." },
  { y: "2012", t: "First international commission", d: "A Milanese apartment brings the studio to Salone del Mobile — and onto the pages of its first magazine." },
  { y: "2016", t: "The atelier grows", d: "Material library, joinery workshop and a dedicated styling team open under one roof in Santos." },
  { y: "2020", t: "One hundred projects", d: "A quiet milestone marked by the Ochre House brief — our first ground-up villa in Comporta." },
  { y: "2023", t: "House of the Year", d: "FRAME names Atrio do Vale among its interiors of the year; the team numbers twenty-three." },
  { y: "2026", t: "Quiet Rooms — the monograph", d: "Eighteen years of work collected in a volume by Note Editions, photographed by long-time collaborators." },
];

export const AWARDS = [
  { t: "Architizer A+ Award", s: "Residential Interior", y: "2025" },
  { t: "ELLE Decoration Int'l", s: "Design Award", y: "2024" },
  { t: "FRAME Awards", s: "House of the Year — Winner", y: "2023" },
  { t: "Dezeen Awards", s: "Interiors — Longlist", y: "2023" },
  { t: "iF Design Award", s: "Interior Architecture", y: "2022" },
  { t: "Wallpaper* Design Awards", s: "Nominee", y: "2021" },
];

export const PRESS = ["ELLE DECOR", "ARCHITECTURAL DIGEST", "DEZEEN", "ARCHDAILY", "VOGUE LIVING", "WALLPAPER*", "FRAME"];

export const INSTAGRAM = [
  px(6805421, 900), px(15746152, 900), px(31206787, 900), px(12202390, 900),
  px(4968693, 900), px(6944142, 900), px(4709470, 900), px(4709462, 900),
];

export const FAQS = [
  { q: "What does a full interior project cost?", a: "Most full-scope commissions fall between €1,100 and €2,400 per m² all-in, depending on joinery, stone and furniture ambitions. At concept stage we present a costed framework with three scenarios — quiet, balanced and complete — so the budget is a design decision, not a surprise." },
  { q: "How long does a project take?", a: "A renovation apartment: 8–11 months. A full villa: 14–18. The design phase is three to four months of that; the rest is craft. We take a maximum of six projects per year so every site has senior eyes on it weekly." },
  { q: "Do you work outside Portugal?", a: "Continuously. Current commissions are running in Paris, Milan, London and Dubai. We travel for milestones and work with vetted local site supervisors in between — the weekly photographic record keeps everyone honest." },
  { q: "Can you work with our architect?", a: "We prefer it. The earlier we're at the table — ideally before façades are set — the more of the interior budget stays in the interior. We're equally comfortable re-tempering finished shells." },
  { q: "What is your style, honestly?", a: "Warm minimalism: few materials, honest ones; few objects, chosen ones. Rooms built from light, proportion and texture rather than decoration. If a space photographs loudly but lives quietly, we've failed." },
];

/* ————— office ————— */
export const OFFICE = {
  address: "Rua das Flores 122 · 1200-195 Lisboa, Portugal",
  email: "hello@modernart-interior.com",
  phone: "+351 210 347 882",
  phoneLink: "+351210347882",
  whatsapp: "https://wa.me/919879961031",
  instagram: "https://instagram.com/modernart.interior",
  hours: "Mon–Fri · 9:30 — 18:30 (visits by appointment)",
  mapEmbed:
    "https://maps.google.com/maps?q=Rua%20das%20Flores%20122%20Lisboa&t=&z=16&ie=UTF8&iwloc=&output=embed",
};
