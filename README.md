# Portfolio — "Pitch & Paper"

CV digital de una sola página para un desarrollador full-stack junior. Editorial minimal
con un motif de fútbol abstracto. **Next.js 16 (App Router) · TypeScript · Tailwind v4 ·
next-intl (ES/EN) · next-themes (claro/oscuro)**, listo para Vercel.

## Desarrollo

```bash
npm run dev      # http://localhost:3000  (ES en /, EN en /en)
npm run build    # build de producción (SSG)
npm run start    # sirve el build
npm run lint
```

## Dónde editar las cosas

| Quiero cambiar… | Archivo |
|---|---|
| **Textos** (copys, bullets, títulos) en ES | `messages/es.json` |
| **Textos** en EN | `messages/en.json` |
| Nombre, email, redes, CV, dorsal, stats, atributos, tags | `src/content/site.ts` |
| Tecnologías de la **alineación** (4-3-3) y la lista | `src/content/skills.ts` |
| Stack de cada **experiencia** | `src/content/experience.ts` |
| **Proyectos** (links, stack, imágenes) | `src/content/projects.ts` |
| **Color del club** de fútbol | `src/content/personal.ts` (`clubColor`) |
| Secciones del menú | `src/content/nav.ts` |
| **Colores, tipografías, espaciados** (tokens) | `src/styles/pitch.css` (`:root` / `[data-theme="dark"]`) |

> Los textos usan un marcado mínimo: `**negrita**` y `` `código` ``. Lo renderiza
> `src/components/Rich.tsx` de forma segura (sin HTML crudo).

## Pendiente de rellenar (busca `[corchetes]` y `// TODO`)

- [ ] Nombre y apellidos, titular, one-liner, ciudad/país
- [ ] **Foto** → `public/` y referénciala en `ImageSlot` (About)
- [ ] Email, GitHub, LinkedIn, dorsal → `src/content/site.ts`
- [ ] **CV en PDF** → `public/cv/CV-[Nombre].pdf`
- [ ] Experiencia real (empresas, roles, logros con métricas) → `messages/*.json` (`exp.*`)
- [ ] Proyecto estrella + 2 cards (problema, solución, resultado, links, imágenes) →
      `messages/*.json` (`proj.*`) y `src/content/projects.ts`
- [ ] Fútbol (equipo, estadio, frase) → `beyond.fb.*` y `clubColor`; cine, deporte, "now"
- [ ] Dominio real → `metadataBase` en `src/app/layout.tsx`

## Estructura

```
src/
  app/
    layout.tsx              # shell raíz (pasa children)
    [locale]/layout.tsx     # <html>, fuentes, providers, nav/footer, SEO, JSON-LD
    [locale]/page.tsx       # one-page: ensambla las secciones
    globals.css             # Tailwind + import de pitch.css + overrides
  components/                # Hero, Stats, About, Stack, Experience, Projects, Beyond, Contact, Footer + Nav/toggles/utilidades
  content/                  # datos tipados (estructura)
  i18n/                     # routing + request config de next-intl
  styles/pitch.css          # sistema de diseño "Pitch & Paper"
  proxy.ts                  # routing i18n (convención Next 16)
messages/                   # catálogos ES / EN
docs/design-reference/      # prototipo HTML original de Claude Design (referencia)
```

## Deploy en Vercel

```bash
npx vercel        # preview
npx vercel --prod # producción
```

## Notas de implementación

- El diseño es un port fiel del prototipo de Claude Design (`docs/design-reference/`),
  reusando su CSS probado y reconstruyendo el DOM como componentes React.
- Animaciones de entrada con un `IntersectionObserver` ligero (`RevealController`), no
  Framer Motion, para minimizar JS. Se respeta `prefers-reduced-motion`.
- La alineación tiene **fallback de lista** accesible (botón Campo/Lista).
- El color literal del club aparece **solo** en la tile de fútbol; el resto del motif
  (cal, dorsales, verde césped) es abstracto.
