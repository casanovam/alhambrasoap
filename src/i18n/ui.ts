export type Lang = 'es' | 'en';

export const langs: Record<Lang, string> = { es: 'Español', en: 'English' };

const es = {
  meta: {
    title: 'Alhambra Soap · Jabones artesanales de inspiración nazarí',
    description:
      'Jabones hechos a mano en Granada, inspirados en los alicatados de la Alhambra. Talleres, regalos para profes y piezas únicas. Pedidos por Instagram.',
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
    eyebrow: 'Hecho a mano en Granada',
    title: ['Jabones que', 'cuentan la', 'Alhambra'],
    lead:
      'Cada pastilla nace de un molde tallado a mano y de las geometrías de los alicatados nazaríes. Aceites puros, colores minerales y la calma de un patio andalusí.',
    cta: 'Ver la colección',
    ctaSecondary: 'Pedir por Instagram',
    badge: ['Pequeñas', 'tiradas', '100% artesanal'],
  },
  marquee: ['Hecho a mano en Granada', 'Inspiración nazarí', 'Talleres', 'Regalos para profes', 'Aceites vegetales'],
  story: {
    eyebrow: 'Nuestra historia',
    title: 'Del Patio de los Leones a tu lavabo',
    p1: 'Alhambra Soap nace en Granada, a la sombra de la colina roja. Nos enamoramos de los alicatados, esas estrellas de ocho puntas que se repiten hasta el infinito, y quisimos llevarlas a un objeto cotidiano y honesto: el jabón.',
    p2: 'Trabajamos en pequeñas tiradas con saponificación en frío. Aceite de oliva, coco y karité, pigmentos minerales y un curado de seis semanas. Sin prisas, como se hacen las cosas que duran.',
    facts: [
      { n: '6', label: 'semanas de curado' },
      { n: '8', label: 'puntas por estrella' },
      { n: '100%', label: 'hecho a mano' },
    ],
    quote: '“Lo pequeño hecho con cuidado es lo que más se recuerda.”',
  },
  collection: {
    eyebrow: 'La colección',
    title: 'Piezas de baño con alma de azulejo',
    intro: 'Cada jabón reproduce un motivo real de la Alhambra. Se venden sueltos o en cajas regalo con lazo dorado.',
    items: [
      {
        name: 'Estrella de Comares',
        desc: 'Estrella de ocho puntas en cobalto y marfil. Aroma de azahar.',
        note: 'Naranja amarga · 90 g',
      },
      {
        name: 'Lazo de los Leones',
        desc: 'Entrelazado verde y ocre sobre fondo blanco. Aroma de jazmín.',
        note: 'Jazmín · 90 g',
      },
      {
        name: 'Sebka del Generalife',
        desc: 'Retícula romboidal en negro y azul. Aroma de lavanda y romero.',
        note: 'Lavanda · 90 g',
      },
      {
        name: 'Jabonera de la Alcazaba',
        desc: 'Jabonera redonda de cerámica blanca con el sello de la casa.',
        note: 'Cerámica · Ø 9 cm',
      },
    ],
    giftBox: {
      tag: 'Caja regalo',
      name: 'Ritual Alhambra',
      desc: 'Tres jabones a elegir, jabonera y lazo dorado en caja con motivos de alicatado. El regalo que huele a Granada.',
      cta: 'Pedir la caja',
    },
    priceNote: 'Precios y disponibilidad por mensaje directo en Instagram.',
    cta: 'Pedir por DM',
  },
  workshops: {
    eyebrow: 'Talleres',
    title: 'Haz tu propio azulejo de jabón',
    intro:
      'Talleres de dos horas en Granada para grupos, cumpleaños, despedidas y equipos. Te llevas tus jabones, tu molde y un poquito de la Alhambra.',
    steps: [
      { t: 'Diseña', d: 'Elige tu motivo nazarí y combina colores minerales.' },
      { t: 'Vierte', d: 'Mezcla aceites y lejía en frío con nuestra guía.' },
      { t: 'Desmolda', d: 'A las 24 h retiras tu pieza y la dejas curar en casa.' },
    ],
    detail: ['Grupos de 4 a 12 personas', 'Materiales incluidos', 'Español e inglés'],
    cta: 'Reservar un taller',
  },
  gifts: {
    eyebrow: 'Regalos para profes',
    title: '¿Aún no has encontrado ese detalle para la profe?',
    text: 'El Ritual Profe: un jabón azulejo, jabonera y tarjeta personalizada en caja con lazo. Escríbenos “RITUAL PROFE” por DM y lo preparamos.',
    cta: 'Escribir “RITUAL PROFE”',
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen quienes ya los tienen',
    items: [
      { q: 'Regalé la caja a mi tutora y se emocionó. Huele a azahar de verdad y el azulejo es precioso.', a: 'Marta, Granada' },
      { q: 'El taller fue el plan perfecto para la despedida. Nos llevamos jabones y unas fotos increíbles.', a: 'Lucía, Sevilla' },
      { q: 'Compré uno de recuerdo del viaje y ahora lo tengo en la mesita. Da pena usarlo.', a: 'Anna, Londres' },
    ],
  },
  press: {
    eyebrow: 'Prensa',
    title: 'Han hablado de nosotros',
    items: ['Ideal Granada', 'Granada Hoy', 'Canal Sur', 'Onda Cero'],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Pedidos por mensaje directo',
    text: 'Escríbenos por Instagram con lo que te apetece y te contestamos en el día. También preparamos envíos a toda España.',
    igCta: 'Abrir Instagram',
    location: 'Granada, Andalucía',
    hours: 'Respondemos de lunes a sábado',
  },
  footer: {
    tagline: 'Jabones artesanales de inspiración nazarí. Hecho a mano en Granada.',
    made: 'Hecho con cariño en Granada',
    rights: 'Alhambra Soap. Todos los derechos reservados.',
    lang: 'Idioma',
  },
};

const en: typeof es = {
  meta: {
    title: 'Alhambra Soap · Handmade soaps inspired by the Alhambra',
    description:
      'Handmade soaps from Granada inspired by the Nasrid tilework of the Alhambra. Workshops, teacher gifts and one-of-a-kind pieces. Order via Instagram.',
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
    eyebrow: 'Handmade in Granada',
    title: ['Soaps that', 'tell the story', 'of the Alhambra'],
    lead:
      'Every bar is born from a hand-carved mould and the geometry of Nasrid tilework. Pure oils, mineral colours and the calm of an Andalusian courtyard.',
    cta: 'See the collection',
    ctaSecondary: 'Order on Instagram',
    badge: ['Small', 'batches', '100% handmade'],
  },
  marquee: ['Handmade in Granada', 'Nasrid inspiration', 'Workshops', 'Teacher gifts', 'Plant-based oils'],
  story: {
    eyebrow: 'Our story',
    title: 'From the Court of the Lions to your sink',
    p1: 'Alhambra Soap was born in Granada, in the shadow of the red hill. We fell in love with the tilework, those eight-pointed stars repeating into infinity, and wanted to bring them to an honest, everyday object: soap.',
    p2: 'We work in small batches using cold-process saponification. Olive, coconut and shea oils, mineral pigments and a six-week cure. No hurry, the way lasting things are made.',
    facts: [
      { n: '6', label: 'weeks of curing' },
      { n: '8', label: 'points per star' },
      { n: '100%', label: 'handmade' },
    ],
    quote: '“Small things made with care are the ones we remember.”',
  },
  collection: {
    eyebrow: 'The collection',
    title: 'Bathroom pieces with the soul of a tile',
    intro: 'Each soap reproduces a real motif from the Alhambra. Sold individually or in gift boxes with a gold ribbon.',
    items: [
      {
        name: 'Comares Star',
        desc: 'Eight-pointed star in cobalt and ivory. Orange-blossom scent.',
        note: 'Bitter orange · 90 g',
      },
      {
        name: 'Lions Knot',
        desc: 'Green and ochre interlace on a white ground. Jasmine scent.',
        note: 'Jasmine · 90 g',
      },
      {
        name: 'Generalife Sebka',
        desc: 'Rhomboid lattice in black and blue. Lavender and rosemary.',
        note: 'Lavender · 90 g',
      },
      {
        name: 'Alcazaba Soap Dish',
        desc: 'Round white ceramic dish stamped with the house seal.',
        note: 'Ceramic · Ø 9 cm',
      },
    ],
    giftBox: {
      tag: 'Gift box',
      name: 'Alhambra Ritual',
      desc: 'Three soaps of your choice, a soap dish and a gold ribbon in a box printed with tile motifs. The gift that smells of Granada.',
      cta: 'Order the box',
    },
    priceNote: 'Prices and availability by direct message on Instagram.',
    cta: 'Order via DM',
  },
  workshops: {
    eyebrow: 'Workshops',
    title: 'Make your own soap tile',
    intro:
      'Two-hour workshops in Granada for groups, birthdays, hen parties and teams. Take home your soaps, your mould and a little piece of the Alhambra.',
    steps: [
      { t: 'Design', d: 'Choose your Nasrid motif and combine mineral colours.' },
      { t: 'Pour', d: 'Blend oils and lye cold, with our guidance.' },
      { t: 'Unmould', d: 'After 24 h, release your piece and let it cure at home.' },
    ],
    detail: ['Groups of 4 to 12', 'Materials included', 'Spanish and English'],
    cta: 'Book a workshop',
  },
  gifts: {
    eyebrow: 'Teacher gifts',
    title: 'Still looking for that little something for the teacher?',
    text: 'The Teacher Ritual: a tile soap, soap dish and personalised card in a ribboned box. DM us “RITUAL PROFE” and we will get it ready.',
    cta: 'Message “RITUAL PROFE”',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What people say',
    items: [
      { q: 'I gave the box to my tutor and she was moved. It truly smells of orange blossom and the tile is gorgeous.', a: 'Marta, Granada' },
      { q: 'The workshop was the perfect plan for the hen party. We left with soaps and incredible photos.', a: 'Lucía, Seville' },
      { q: 'Bought one as a souvenir of the trip and now it sits on my bedside table. Too pretty to use.', a: 'Anna, London' },
    ],
  },
  press: {
    eyebrow: 'Press',
    title: 'As featured in',
    items: ['Ideal Granada', 'Granada Hoy', 'Canal Sur', 'Onda Cero'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Orders by direct message',
    text: 'Send us a message on Instagram with what you would like and we reply the same day. We also ship across Spain.',
    igCta: 'Open Instagram',
    location: 'Granada, Andalusia',
    hours: 'We reply Monday to Saturday',
  },
  footer: {
    tagline: 'Handmade soaps inspired by Nasrid tilework. Made by hand in Granada.',
    made: 'Made with love in Granada',
    rights: 'Alhambra Soap. All rights reserved.',
    lang: 'Language',
  },
};

export const ui: Record<Lang, typeof es> = { es, en };

export const INSTAGRAM_URL = 'https://www.instagram.com/alhambrasoap';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/alhambrasoap';

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
