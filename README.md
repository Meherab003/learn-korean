# 한글·첫걸음 — Korean for Bangla speakers

A React + Tailwind CSS rewrite of the original single-file HTML page.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a static
`dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc).

## Where to edit things

Almost everything you'd want to change lives in **`src/data/`** as plain
arrays/objects — no component code needed:

| File | What it holds |
|---|---|
| `src/data/hangul.js` | Vowels, diphthongs, consonants, tense consonants |
| `src/data/numbers.js` | Number word generation + syllable-builder jamo |
| `src/data/grammar.js` | Grammar pattern cards |
| `src/data/vocab.js` | Vocabulary words + category labels (`CATS`) |
| `src/data/dialogues.js` | Dialogue scenarios and their lines |

To add a vocab word, copy an existing line in `vocab.js` and edit the
`cat`, `kr`, `rom`, `bn`, `en` fields. Same idea for grammar points and
dialogue lines. To add a whole new vocab category, add a key to `CATS` in
`vocab.js` and start tagging words with it.

## Where the design lives

- `src/index.css` — the color palette, fonts, and paper texture live in
  the `@theme` block at the top. Change `--color-red`, `--color-paper`,
  etc. to re-theme the whole app.
- `src/components/UI.jsx` — small reusable pieces (buttons, cards, badges).
- `src/components/Icons.jsx` — inline SVG icons (speaker button, dialogue
  scene icons, decorative illustration).
- `src/sections/*.jsx` — one file per page/tab (Home, Hangul, Builder,
  Numbers, Grammar, Vocab, Dialogue, Quiz). Each is a normal React
  component that reads from `src/data/`.
- `src/App.jsx` — the `SECTIONS` object at the top wires section keys to
  components; that's also what the menu (`MenuOverlay.jsx`) reads from.

## Notes

- Text-to-speech uses the browser's built-in Web Speech API
  (`src/utils/speak.js`), same as the original — works best in Chrome/Edge
  with a Korean voice installed.
- Tailwind CSS v4 is wired in via the `@tailwindcss/vite` plugin (see
  `vite.config.js`), so there's no separate `tailwind.config.js` — theme
  customization happens in `src/index.css`.
