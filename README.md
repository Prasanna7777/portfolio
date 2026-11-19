# Portfolio (React + TypeScript + Vite)

All the text is in `src/data.ts`. Components are in `src/components`.

## Before you publish
Replace the placeholders in `src/data.ts`:
- `YOUR-USERNAME`, `YOUR-CLAIM-REPO`, `YOUR-CHURN-REPO` (the project links go to your GitHub repos, where the demos are)

## Run locally
```
npm install
npm run dev      # development server
npm test         # unit tests
npm run build    # production build into dist/
```

## Deploy on GitHub Pages
1. Create a repo (for example `<your-username>.github.io`) and push this folder to the `main` branch. Include `package-lock.json`.
2. In the repo, open Settings > Pages and set Source to "GitHub Actions".
3. Each push to `main` runs the tests, builds the site and deploys it. The workflow is in `.github/workflows/deploy.yml`.

The build uses relative paths, so it works at `<user>.github.io` and at `<user>.github.io/<repo>/`.

## Add the Target review form video
1. Put the recording in `public/media/` (for example `review-form.mp4`, under about 10 MB) and a poster image next to it.
2. In `src/data.ts`, replace `video: undefined` in `reviewForm` with:
```
video: { src: "media/review-form.mp4", poster: "media/review-form-poster.jpg", caption: "One sentence saying what the video shows." },
```

## Content rules
Do not add screenshots of internal company tools, internal documents or private messages. Ask the people quoted in "Recognition" before keeping their words on the page, or delete that section.
