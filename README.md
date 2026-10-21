# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to Vercel

The project is pre-configured for Vercel (SSR via Nitro, Node.js 22).

1. Push the repository to GitHub (use Git sync in Lovable).
2. In Vercel, import the repository and deploy — `vercel.json` already sets the build command (`npm run build`); no output directory or framework preset is needed.
3. Use Node.js 22 (Vercel's default).
4. No environment variables are required.

To verify the production build locally before deploying:

```sh
NITRO_PRESET=vercel npm run build
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
