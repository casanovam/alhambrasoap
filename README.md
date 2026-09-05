# Alhambra Soap — sitio web

Sitio estático bilingüe (español / inglés) para [@alhambrasoap](https://www.instagram.com/alhambrasoap):
jabones artesanales de inspiración nazarí hechos a mano en Granada.

Construido con [Astro](https://astro.build). Sin base de datos, sin backend: HTML, CSS y un poco de JS.

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install        # una sola vez
npm run dev        # servidor de desarrollo con recarga en caliente → http://localhost:4321
```

Rutas:

- `http://localhost:4321/` → español
- `http://localhost:4321/en/` → inglés

## Compilar la versión final

```bash
npm run build      # genera el sitio estático en ./dist
npm run preview    # sirve ./dist tal cual se publicará → http://localhost:4321
```

## Estructura

```
src/
  i18n/ui.ts            ← TODOS los textos (es / en). Edita aquí para cambiar contenido.
  components/Home.astro ← secciones de la página (hero, historia, colección, talleres, regalos, testimonios, prensa, contacto)
  components/Tile.astro ← jabones "azulejo" dibujados en SVG (star, knot, sebka, dish)
  components/Logo.astro ← logotipo
  layouts/Layout.astro  ← cabecera, menú, pie, SEO, fuentes
  styles/global.css     ← paleta, tipografía, utilidades
  pages/index.astro     ← /      (es)
  pages/en/index.astro  ← /en/   (en)
src/assets/images/      ← fotos (Astro genera AVIF/WebP y srcset al compilar)
public/                 ← favicon e imagen Open Graph
```

### Fotos

- `photos/` guarda los originales tal cual llegaron (WhatsApp). No se publican.
- `src/assets/images/` contiene los recortes que usa la web. Astro genera automáticamente AVIF, WebP y varios tamaños
  (`srcset`) en cada build, así que basta con dejar ahí un JPEG de buena resolución (1000 a 1600 px de ancho).
  Nombres actuales: `ritual-caja-abierta.jpg` (hero), `estrella-de-los-reyes.jpg`, `pajaritas.jpg`, `jabonera.jpg`,
  `ritual-caja-cerrada.jpg`, `trilobulado.jpg`, `cuadrados.jpg`, `estrella-ocho-puntas.jpg`, `instagram-qr.jpg`.
- **Retrato de Belén:** guarda una foto cuadrada como `src/assets/images/belen.jpg` (retrato o manos en el molde)
  y aparecerá sola junto a la firma en la sección "Quién hay detrás". Si el archivo no existe, la firma se muestra sin foto.
- **Pendiente de refotografiar** sobre el mismo mármol y con la misma luz: la jabonera (ahora es un recorte de la foto de
  la caja abierta, sale blanda en pantallas retina) y las granadas de jabón (retiradas de la galería por no encajar con el
  resto de fotos; el original sigue en `photos/`).
- Para cambiar una foto: sustituye el archivo con el mismo nombre, o edita la referencia en `Home.astro`
  (`productPhotos`, `gallery`) y el texto alternativo en `ui.ts` (`photos`, `gallery`).
- `public/og.jpg` es la imagen para redes sociales (1200×630) y se sirve tal cual.

### Cambiar textos, productos o testimonios

Todo está en `src/i18n/ui.ts`. Cada clave existe en `es` y en `en`; TypeScript avisa si falta alguna.

Los textos actuales provienen del perfil público de Instagram (bio, pies de foto y comentarios públicos, junio 2026):
nombres de producto (Estrella de los Reyes, Pajaritas, jabonera a juego, Ritual de 4 jabones), talleres (casi 3 h, aceites
esenciales de Sierra Nevada, brunch marroquí), Ritual Profe, bodas/eventos, hoteles, y tres comentarios reales como testimonios.
Los destacados de Instagram (Testimonios, Prensa, Regalo Profes, Made in Granada) requieren inicio de sesión, así que se enlazan
desde la web en lugar de copiarse (`INSTAGRAM_HIGHLIGHTS` en `ui.ts`).

## Publicar en GitHub Pages

El flujo `.github/workflows/deploy.yml` compila y publica automáticamente en cada `push` a `main`.
Activa Pages en el repositorio: **Settings → Pages → Source: GitHub Actions**.

El sitio se sirve bajo `https://<usuario>.github.io/alhambrasoap/`; el workflow ya pasa `BASE_PATH=/alhambrasoap`.
Si usas un dominio propio, define `SITE_URL` y deja `BASE_PATH` vacío.

## Publicar en Cloudflare (Workers Builds)

`wrangler.jsonc` sirve `./dist` como assets estáticos. En el panel de Cloudflare: **Workers & Pages → Create → Import a repository**,
elige este repo y usa:

| Campo | Valor |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variables de build | `NODE_VERSION=22`, `SITE_URL=https://alhambrasoap.<tu-subdominio>.workers.dev` |

No definas `BASE_PATH` (el sitio se sirve en la raíz). Cada push a `main` lanza build y deploy.
Deploy manual desde tu máquina: `npx wrangler login` una vez y luego `npm run deploy`.

## Enlaces del negocio

Definidos en `src/i18n/ui.ts`:

- `INSTAGRAM_URL` — perfil
- `INSTAGRAM_DM_URL` — enlace directo a mensajes (`ig.me/m/alhambrasoap`)
