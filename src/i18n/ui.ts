export type Lang = 'es' | 'en';

export const langs: Record<Lang, string> = { es: 'Español', en: 'English' };

/*
 * Content sourced from the public Instagram profile @alhambrasoap
 * (bio, post captions and public comments, June 2026). Story highlights
 * (Testimonios, Prensa, Regalo Profes, Made in Granada) require a login
 * and are linked rather than copied.
 */

const es = {
  meta: {
    title: 'Alhambra Soap · Jabones artesanales inspirados en la Alhambra',
    description:
      'Desde los muros de la Alhambra hasta tu piel. Jabones artesanales inspirados en los azulejos nazaríes, hechos a mano por Belén en Granada con aceites esenciales de Sierra Nevada. Talleres, rituales regalo y pedidos por DM.',
  },
  nav: {
    story: 'Historia',
    collection: 'Colección',
    workshops: 'Talleres',
    gifts: 'Regalos',
    contact: 'Contacto',
    order: 'Pedir por DM',
  },
  hero: {
    eyebrow: 'Hecho a mano por Belén · Granada',
    title: ['Desde los muros', 'de la Alhambra', 'hasta tu piel'],
    lead:
      'Una colección de jabones artesanales inspirados en los icónicos azulejos nazaríes, donde cada pieza es una obra de arte. Los hago yo, uno a uno, en Granada, con aceites esenciales de Sierra Nevada y pigmentos minerales.',
    cta: 'Ver la colección',
    ctaSecondary: 'Pedir por Instagram',
    badge: ['Made in', 'Granada', 'Hand made'],
  },
  story: {
    eyebrow: 'Quién hay detrás',
    title: 'Soy Belén y hago jabones que cuentan la Alhambra',
    p1: 'No vendo jabones, sino experiencias sensoriales que llegan al alma a través de los sentidos. Cada pieza reproduce un azulejo nazarí de la Alhambra: el equilibrio perfecto entre tradición y modernidad, moldeado a mano en mi taller de Granada.',
    p2: 'Para mí el acabado final importa tanto como cada detalle del proceso: respeto los tiempos de secado, aromatizo a la temperatura justa y cuido que cada tonalidad sea exacta. La vista, el olfato y el tacto están milimétricamente estudiados para que la experiencia sea cien por cien sensorial.',
    facts: [
      { n: '5', label: 'sentidos' },
      { n: '100%', label: 'hecho a mano' },
      { n: 'S. Nevada', label: 'aceites esenciales' },
    ],
    quote: '“Una experiencia sensorial que transforma tu rutina en un ritual.”',
    signature: 'Belén',
    role: 'Jabonera artesana · Granada',
    portraitAlt: 'Belén, creadora de Alhambra Soap, en su taller de Granada',
  },
  collection: {
    eyebrow: 'La colección',
    title: 'Azulejos nazaríes que puedes tener entre las manos',
    intro:
      'Cada jabón captura un patrón real de la Alhambra y un aroma pensado para él. Los vendo sueltos, con jabonera a juego o en el Ritual de cuatro piezas.',
    items: [
      {
        name: 'Estrella de los Reyes',
        desc: 'Jabón octogonal, la pieza principal de la colección. Inspirada en la majestuosidad de la Sala de los Reyes, su diseño geométrico simboliza el equilibrio perfecto entre tradición y modernidad. Notas que envuelven tus sentidos.',
        note: 'Azahar · Naranja · Ámbar',
      },
      {
        name: 'Pajaritas',
        desc: 'Jabón hexagonal con las pajaritas nazaríes del Patio de los Arrayanes: una pieza que captura la ligereza y el dinamismo de sus patrones. Su diseño dibuja un movimiento continuo, como un susurro de agua recorriendo los jardines del Generalife. Arte y naturaleza en perfecta armonía; frescura luminosa y serenidad en cada uso.',
        note: 'Lavanda · Limón',
      },
      {
        name: 'Jabonera a juego',
        desc: 'Jabonera artesanal con mi sello, diseñada para acompañar cada jabón y completar el ritual.',
        note: 'Hecha a mano · Granada',
      },
    ],
    giftBox: {
      tag: 'El Ritual',
      name: 'Ritual Alhambra Soap',
      desc: 'El arte de regalar está en los detalles. Mi caja de cuatro jabones artesanales y una jabonera a juego llega a tus manos lista para emocionar: un ritual de belleza inspirado en la luz y los aromas de los jardines de la Alhambra.',
      cta: 'Reservar el Ritual',
    },
    priceNote: 'Precios, disponibilidad y envío inmediato reservando por mensaje directo en Instagram. Unidades limitadas.',
    cta: 'Pedir por DM',
  },
  workshops: {
    eyebrow: 'Talleres',
    title: 'Una experiencia 360° que envuelve los cinco sentidos',
    intro:
      'Un ritual de casi tres horas en mi taller de Granada donde creas tu propio Jabón de la Alhambra con una jabonera a juego, elaborado con aceites esenciales de Sierra Nevada y pigmentos minerales. Y para terminar, un brunch marroquí casero.',
    steps: [
      { t: 'Elige tu azulejo', d: 'Descubre los patrones nazaríes y escoge el motivo y los colores de tu pieza.' },
      { t: 'Crea tu jabón', d: 'Aceites esenciales de Sierra Nevada, pigmentos minerales y tu jabonera a juego, con mi ayuda paso a paso.' },
      { t: 'Brunch marroquí', d: 'Cerramos el ritual compartiendo un brunch marroquí casero.' },
    ],
    detail: ['Casi 3 horas', 'Jabonera a juego incluida', 'Brunch marroquí casero'],
    cta: 'Reservar un taller',
  },
  gifts: {
    eyebrow: 'Regalos',
    title: 'Un detalle que sorprenderá a quien lo reciba',
    text: 'Regala Alhambra Soap: un ritual de belleza inspirado en la Alhambra, moldeado a mano y envuelto con mimo, listo para emocionar. Cuéntame la ocasión por DM y lo preparo.',
    cta: 'Pedir un regalo por DM',
    more: [
      { t: 'Bodas y eventos', d: '¿Te casas o tienes un evento importante? Regala Alhambra Soap: un detalle que sorprenderá a quien lo reciba.' },
      { t: 'Hoteles y clientes VIP', d: '¿Eres un hotel y quieres un regalo muy especial para tus huéspedes? Cuéntamelo por DM y lo preparo.' },
      { t: 'Día de la Madre', d: 'Pack especial con cuatro jabones y jabonera a juego: la esencia de la Alhambra para mamá.' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen quienes ya lo han recibido',
    items: [
      {
        q: 'Mi hijo me lo acaba de regalar y me parece un regalo tan especial. Es precioso todo: la idea, los aromas, que esté todo inspirado en la Alhambra. Has conseguido emocionarme.',
        a: '@carmona241',
      },
      {
        q: 'Una pasada. Un olor que tienen estos jabones… Se nota que están realizados con materia prima de alta calidad.',
        a: '@anavillegas836',
      },
      { q: '¡Impresionantes! Menudo trabajo.', a: '@inesilla1981' },
    ],
    source: 'Comentarios públicos en Instagram',
    more: 'Ver más testimonios en Instagram',
  },
  press: {
    eyebrow: 'Prensa y colaboraciones',
    title: 'Han contado con nosotros',
    items: ['Encuentro Educación'],
    more: 'Ver el destacado Prensa en Instagram',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Pedidos por mensaje directo',
    text: 'Escríbeme por Instagram con lo que te apetece: un jabón, el Ritual, un taller o un regalo especial. Reserva por DM y te lo envío.',
    igCta: 'Abrir Instagram',
    location: 'Granada, Andalucía',
    hours: 'Made in Granada',
  },
  photos: {
    hero: 'Caja Ritual Alhambra Soap abierta: cuatro jabones azulejo y una jabonera sobre terciopelo azul, con flores de jazmín',
    story: 'Jabón octogonal Estrella de los Reyes sobre mármol, estrella azul cobalto con centro ocre',
    box: 'Caja Ritual Alhambra Soap cerrada con lazo dorado y flores de jazmín',
    qr: 'Código QR del perfil de Instagram @alhambrasoap',
    qrCaption: 'Escanea para abrir mi Instagram',
  },
  gallery: {
    eyebrow: 'Más piezas',
    title: 'Otros azulejos de la colección',
    items: [
      { img: 'trilobulado.jpg', caption: 'Pieza trilobulada con pajaritas y estrellas' },
      { img: 'cuadrados.jpg', caption: 'Alicatado de cuadrados en verde, azul, negro y ocre' },
      { img: 'estrella-ocho-puntas.jpg', caption: 'Estrella de ocho puntas' },
    ],
  },
  footer: {
    tagline: 'Desde los muros de la Alhambra hasta tu piel. Jabones artesanales hechos a mano por Belén en Granada.',
    made: 'Hecho con cariño en Granada',
    rights: 'Alhambra Soap. Todos los derechos reservados.',
    lang: 'Idioma',
  },
};

const en: typeof es = {
  meta: {
    title: 'Alhambra Soap · Handmade soaps inspired by the Alhambra',
    description:
      'From the walls of the Alhambra to your skin. Handmade soaps inspired by Nasrid tilework, made by hand by Belén in Granada with Sierra Nevada essential oils. Workshops, gift rituals and orders via DM.',
  },
  nav: {
    story: 'Story',
    collection: 'Collection',
    workshops: 'Workshops',
    gifts: 'Gifts',
    contact: 'Contact',
    order: 'Order via DM',
  },
  hero: {
    eyebrow: 'Handmade by Belén · Granada',
    title: ['From the walls', 'of the Alhambra', 'to your skin'],
    lead:
      'A collection of handmade soaps inspired by the iconic Nasrid tiles, where every piece is a work of art. I make them myself, one by one, in Granada, with Sierra Nevada essential oils and mineral pigments.',
    cta: 'See the collection',
    ctaSecondary: 'Order on Instagram',
    badge: ['Made in', 'Granada', 'Hand made'],
  },
  story: {
    eyebrow: 'Who is behind it',
    title: 'I am Belén and I make soaps that tell the story of the Alhambra',
    p1: 'I do not sell soaps. I sell sensory experiences that reach the soul through the senses. Each piece reproduces a Nasrid tile from the Alhambra, the perfect balance between tradition and modernity, moulded by hand in my Granada workshop.',
    p2: 'To me the final finish matters as much as every detail of the process: I respect the drying times, add fragrance at just the right temperature and make sure every tone is exact. Sight, smell and touch are studied to the millimetre so the experience is one hundred percent sensory.',
    facts: [
      { n: '5', label: 'senses' },
      { n: '100%', label: 'handmade' },
      { n: 'S. Nevada', label: 'essential oils' },
    ],
    quote: '“A sensory experience that turns your routine into a ritual.”',
    signature: 'Belén',
    role: 'Artisan soap maker · Granada',
    portraitAlt: 'Belén, founder of Alhambra Soap, in her Granada workshop',
  },
  collection: {
    eyebrow: 'The collection',
    title: 'Nasrid tiles you can hold in your hands',
    intro:
      'Each soap captures a real Alhambra pattern and a scent composed for it. I sell them individually, with a matching soap dish, or as the four-piece Ritual.',
    items: [
      {
        name: 'Estrella de los Reyes',
        desc: 'Octagonal soap, the signature piece of the collection. Inspired by the majesty of the Hall of the Kings, its geometric design symbolises the perfect balance between tradition and modernity. Notes that wrap around your senses.',
        note: 'Orange blossom · Orange · Amber',
      },
      {
        name: 'Pajaritas',
        desc: 'Hexagonal soap with the Nasrid "pajaritas", the little-bird tessellation of the Court of the Myrtles: a piece that captures the lightness and movement of its patterns. Its design draws a continuous motion, like a whisper of water running through the Generalife gardens. Art and nature in perfect harmony; luminous freshness and serenity with every use.',
        note: 'Lavender · Lemon',
      },
      {
        name: 'Matching soap dish',
        desc: 'A handmade soap dish stamped with my seal, designed to accompany each soap and complete the ritual.',
        note: 'Handmade · Granada',
      },
    ],
    giftBox: {
      tag: 'The Ritual',
      name: 'Alhambra Soap Ritual',
      desc: 'The art of giving is in the details. My box of four handmade soaps and a matching soap dish arrives ready to move someone: a beauty ritual inspired by the light and scents of the Alhambra gardens.',
      cta: 'Reserve the Ritual',
    },
    priceNote: 'Prices, availability and immediate shipping when you reserve by direct message on Instagram. Limited units.',
    cta: 'Order via DM',
  },
  workshops: {
    eyebrow: 'Workshops',
    title: 'A 360° experience for all five senses',
    intro:
      'A ritual of almost three hours in my Granada workshop where you create your own Alhambra Soap with a matching soap dish, made with Sierra Nevada essential oils and mineral pigments. To finish, a homemade Moroccan brunch.',
    steps: [
      { t: 'Choose your tile', d: 'Discover the Nasrid patterns and pick the motif and colours for your piece.' },
      { t: 'Make your soap', d: 'Sierra Nevada essential oils, mineral pigments and your matching soap dish, with my help step by step.' },
      { t: 'Moroccan brunch', d: 'We close the ritual sharing a homemade Moroccan brunch.' },
    ],
    detail: ['Almost 3 hours', 'Matching soap dish included', 'Homemade Moroccan brunch'],
    cta: 'Book a workshop',
  },
  gifts: {
    eyebrow: 'Gifts',
    title: 'A gift that will surprise whoever receives it',
    text: 'Give Alhambra Soap: a beauty ritual inspired by the Alhambra, hand-moulded and wrapped with care, ready to move someone. Tell me the occasion by DM and I will prepare it.',
    cta: 'Order a gift via DM',
    more: [
      { t: 'Weddings and events', d: 'Getting married or hosting an important event? Give Alhambra Soap: a gift that will surprise whoever receives it.' },
      { t: 'Hotels and VIP guests', d: 'Are you a hotel looking for a very special gift for your guests? Tell me by DM and I will prepare it.' },
      { t: "Mother's Day", d: 'Special pack with four soaps and a matching soap dish: the essence of the Alhambra for mum.' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What people who received it say',
    items: [
      {
        q: 'My son just gave it to me and it feels like such a special gift. Everything is beautiful: the idea, the scents, the fact that it is all inspired by the Alhambra. You managed to move me.',
        a: '@carmona241',
      },
      {
        q: 'Amazing. The scent these soaps have… You can tell they are made with top-quality raw materials.',
        a: '@anavillegas836',
      },
      { q: 'Stunning! What a piece of work.', a: '@inesilla1981' },
    ],
    source: 'Public Instagram comments, translated from Spanish',
    more: 'See more testimonials on Instagram',
  },
  press: {
    eyebrow: 'Press and collaborations',
    title: 'They have counted on us',
    items: ['Encuentro Educación'],
    more: 'See the Press highlight on Instagram',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Orders by direct message',
    text: 'Message me on Instagram with what you would like: a soap, the Ritual, a workshop or a special gift. Reserve by DM and I will ship it to you.',
    igCta: 'Open Instagram',
    location: 'Granada, Andalusia',
    hours: 'Made in Granada',
  },
  photos: {
    hero: 'Open Alhambra Soap Ritual box: four tile soaps and a soap dish on blue velvet, with jasmine flowers',
    story: 'Octagonal Estrella de los Reyes soap on marble, cobalt blue star with ochre centre',
    box: 'Closed Alhambra Soap Ritual box with a gold ribbon and jasmine flowers',
    qr: 'QR code for the @alhambrasoap Instagram profile',
    qrCaption: 'Scan to open my Instagram',
  },
  gallery: {
    eyebrow: 'More pieces',
    title: 'Other tiles in the collection',
    items: [
      { img: 'trilobulado.jpg', caption: 'Three-lobed piece with pajaritas and stars' },
      { img: 'cuadrados.jpg', caption: 'Square tilework in green, blue, black and ochre' },
      { img: 'estrella-ocho-puntas.jpg', caption: 'Eight-pointed star' },
    ],
  },
  footer: {
    tagline: 'From the walls of the Alhambra to your skin. Handmade soaps made by Belén in Granada.',
    made: 'Made with love in Granada',
    rights: 'Alhambra Soap. All rights reserved.',
    lang: 'Language',
  },
};

export const ui: Record<Lang, typeof es> = { es, en };

export const INSTAGRAM_URL = 'https://www.instagram.com/alhambrasoap';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/alhambrasoap';
export const INSTAGRAM_HIGHLIGHTS = {
  regaloProfes: 'https://www.instagram.com/stories/highlights/18103296467080835/',
  testimonios: 'https://www.instagram.com/stories/highlights/18057225488542116/',
  madeInGranada: 'https://www.instagram.com/stories/highlights/17952636245982246/',
  prensa: 'https://www.instagram.com/stories/highlights/18130527805589689/',
};

export function t(lang: Lang) {
  return ui[lang];
}

/** Prefix a site-relative path with the configured base (for GitHub Pages sub-paths). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localePath(lang: Lang, hash = '') {
  return withBase(lang === 'es' ? `/${hash}` : `/en/${hash}`);
}
