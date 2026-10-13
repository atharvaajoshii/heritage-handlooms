# Heritage Handlooms

An editorial storefront concept celebrating Indian handloom sarees, textiles, regional weaving traditions, and the artisans who sustain them. The current project is a frontend experience built with React and Vite; product and collection content is static presentation data.

## Run locally

```bash
npm install
npm run dev
```

Build the production bundle with `npm run build`, or serve it locally with `npm run preview`.

## Design direction

The visual language pairs quiet, gallery-like layouts with details drawn from Indian textile borders and zari work. It should feel warm, tactile, and considered: deep charcoal surfaces, fine rules, rich textile photography, restrained rose-burgundy accents, and short motion that supports the craft story.

### Design tokens

| Role | Value |
| --- | --- |
| Charcoal page background | `#171512` |
| Warm ivory text | `#f1e9dc` |
| Muted copy | `#b8ad9c` |
| Heritage rose | `#d17667` |
| Burgundy | `#913b49` |
| Collection accent | `#d18477` |
| Fine divider | `#494038` |
| Zari gold | `#d3b47a` |
| Collection shuttle gold | `#c7a76e` |

The site uses **Playfair Display** for editorial headings and **DM Sans** for navigation, labels, descriptions, and utility text. Both are loaded from Google Fonts in `index.html`.

## Page structure

1. **Announcement and navigation** — a narrow burgundy announcement strip, a compact wordmark, section links, and a shop link.
2. **Hero** — a full-bleed weaving video with a subtle scrim, centered typewriter headline, short supporting copy, primary collection CTA, craft link, and scroll cue. The headline reads “Every thread holds a story.”
3. **Values strip** — a slim divider band highlighting handcraft, regional roots, and heirloom quality.
4. **Shop Collections** — a charcoal section titled “Woven for Every Story.” Three photographic cards introduce Sarees, Handloom Fabrics, and New Arrivals. Each has a description and an understated link to the product area.
5. **From Thread to Saree** — a split editorial layout with a scroll-revealed textile visual and four concise craft steps.
6. **Meet the Weavers** — artisan portrait cards with place, specialty, and a link to the story area.
7. **Featured Products** — a three-column product presentation with textile photography, product names, sample prices, colour swatches, and detail links.
8. **Our Heritage** — a two-column story panel pairing a large weaving image with the brand’s purpose and a link to the weavers.
9. **Footer** — brand statement, email, exploration links, help links, social links, policies, and a back-to-top link.

## Shop Collections: “The Shuttle’s Journey”

This section is the primary collection discovery moment. It uses a charcoal background, centered eyebrow and heading, thin gold rules, and a balanced three-card grid. The cards have inset textile-inspired borders, large cover images, numbered image labels, serif titles, concise descriptions, and rose-burgundy CTAs. Hovering gently lifts a card and zooms its image; keyboard focus has a visible outline.

The wooden shuttle image is a transparent PNG at `public/images/handloom-shuttle.png`. It is mirrored so its red yarn trails toward the revealed cards. When the section enters the viewport, the shuttle travels across the full viewport from left to right in about 2.65 seconds, then fades out. The cards slide in from the left in sequence as the shuttle reaches them. The animation plays once; it is not tied to scroll position. On narrow screens the shuttle is hidden and the cards use a compact, stacked layout with a short stagger. Reduced-motion preferences remove the shuttle and card movement.

## Motion and accessibility

- Motion effects use the installed `motion` package (`motion/react`); no 3D renderer is used.
- The hero video is muted, loops, uses `playsInline`, and includes a still-image poster. The typewriter headline displays immediately when reduced motion is requested.
- The intro loader, hero entrance, selected section reveals, product and artisan cards, craft visual, and heritage image use short, one-time transitions.
- `MotionConfig` respects the user’s reduced-motion preference. CSS also reduces transitions and animation under `prefers-reduced-motion`.
- Navigation uses semantic landmarks and anchors. Collection links remain keyboard-focusable, have visible focus styles, and the decorative shuttle is hidden from assistive technology and ignores pointer input.
- Images have descriptive alt text where they convey content; background photography is labelled through its containing element when needed.

## Responsive behavior

Global page layouts adapt at `960px`, `760px`, and `540px`. Shop Collections has additional layout rules at `760px`, `560px`, and `370px`:

- **Desktop:** three equal collection cards; the shuttle crosses the full viewport over the card row.
- **Tablet:** narrower gaps, proportional type and image heights, and a shorter shuttle size.
- **Mobile (560px and below):** the shuttle journey is disabled; collection cards stack in a compact image-and-copy layout with comfortable tap targets. The layout avoids horizontal scrolling.
- Very narrow screens receive smaller card typography and tighter copy padding.

## Source map and media

- `src/App.jsx` — page composition, shared header/footer, static section data, and page-level motion.
- `src/components/Hero.jsx` — video hero, typewriter headline, calls to action, and scroll cue.
- `src/ShopCollections.jsx` — collection data, card markup, and one-time shuttle/card animation.
- `src/styles.css` — global theme, hero, page sections, and responsive layouts.
- `src/ShopCollections.css` — isolated Shop Collections styles and breakpoints.
- `public/videos/hero-weaving.mp4` — local hero background video.
- `public/images/handloom-shuttle.png` — transparent shuttle artwork used in Shop Collections.

Collection and product copy, images, artisan profiles, and prices currently live in frontend source as demonstration content. There is no backend, cart, inventory, or checkout integration.
