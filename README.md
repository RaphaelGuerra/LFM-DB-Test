# LFM DB Test

A small Next.js 10 article-list demo by Raphael Guerra. The home page statically fetches six posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and renders their titles, while the About page provides a short project note.

This repository is a learning project for experimenting with Next.js pages, components, CSS modules, and static data fetching. It does not connect to a database despite the repository name.

## Features

- Static home page generated with \`getStaticProps\`
- Six sample article titles loaded from JSONPlaceholder
- Reusable \`ArticleList\`, \`Header\`, \`Nav\`, and \`Layout\` components
- About page at \`/about\`
- CSS Modules for component-scoped styles

## Requirements

- Node.js compatible with Next.js 10
- npm or Yarn
- Network access during the build, because \`pages/index.js\` fetches JSONPlaceholder data

## Run locally

```bash
git clone https://github.com/RaphaelGuerra/LFM-DB-Test.git
cd LFM-DB-Test
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- \`npm run dev\` — start the development server
- \`npm run build\` — create a production build
- \`npm run start\` — serve the production build

## Project structure

- \`pages/index.js\` — home page and static article fetch
- \`pages/about.js\` — About page
- \`pages/api/hello.js\` — example API route
- \`components/\` — shared React components
- \`styles/\` — global styles and CSS Modules

## Notes

The article data is provided by JSONPlaceholder and is fetched at build time. If that service is unavailable, the home page build cannot retrieve the sample posts.
