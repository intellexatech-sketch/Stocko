# Technical decisions

- The Stocko landing page lives in `src/routes/index.tsx`; its styles are ported from the user's original HTML into `src/styles.css` using `sw-`-prefixed classes and `--sw-*` oklch tokens. Keep new page styles there, not in the component.
- Brand media (logo, 11 brand logos) are stored under `src/assets/`.
- Nav links and hero buttons scroll to in-page sections (`scrollToSection`); the original was a single-page site, so no extra routes exist.
