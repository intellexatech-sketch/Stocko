<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Technical decisions

- The Stocko landing page lives in `src/routes/index.tsx`; its styles are ported from the user's original HTML into `src/styles.css` using `sw-`-prefixed classes and `--sw-*` oklch tokens. Keep new page styles there, not in the component.
- Brand media (logo, 11 brand logos) are lovable-assets pointers under `src/assets/*.asset.json`; reference `asset.url`. Do not copy binary images into `public/` (favicon.png is the exception).
- Nav links and hero buttons scroll to in-page sections (`scrollToSection`); the original was a single-page site, so no extra routes exist.
