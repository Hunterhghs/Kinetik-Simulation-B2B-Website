# LinkedIn carousel exporter (Playwright)

This folder renders the HTML templates under `../templates` into PNGs.

## Install Playwright browsers

```bash
npx playwright install --with-deps
```

## Export images

From the repo root:

```bash
npm run linkedin:export
```

Outputs go to:

- `linkedin/export/out/*.png`

> Tip: These templates are meant to be edited (copy, numbers, quotes). Keep them “operator-first” and defensible.
