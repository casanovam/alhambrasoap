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
public/                 ← favicon, imagen Open Graph, fotos
```

### Fotos

- `photos/` guarda los originales tal cual llegaron (WhatsApp). No se publican.
- `public/images/` contiene las versiones optimizadas y recortadas que usa la web (máx. 1000 px, JPEG ~80 %).
  Nombres: `ritual-caja-abierta.jpg` (hero y Open Graph), `estrella-de-los-reyes.jpg`, `pajaritas.jpg`, `jabonera.jpg`
  (recorte de la caja abierta), `ritual-caja-cerrada.jpg`, `trilobulado.jpg`, `cuadrados.jpg`, `estrella-ocho-puntas.jpg`,
  `granadas.jpg`, `instagram-qr.jpg`.
- Para cambiar una foto: sustituye el archivo en `public/images/` con el mismo nombre, o edita la referencia en `Home.astro`
  (`productPhotos`, `gallery`) y el texto alternativo en `ui.ts` (`photos`, `gallery`).
- Optimizar en macOS sin instalar nada: `sips -Z 1000 -s format jpeg -s formatOptions 80 origen.jpg --out public/images/nombre.jpg`.

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

## Enlaces del negocio

Definidos en `src/i18n/ui.ts`:

- `INSTAGRAM_URL` — perfil
- `INSTAGRAM_DM_URL` — enlace directo a mensajes (`ig.me/m/alhambrasoap`)
