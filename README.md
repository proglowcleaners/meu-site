# Pro Glow Cleaners

Website for Pro Glow Cleaners, residential and commercial cleaning in the Tampa Bay area, FL.

## Stack

- React with TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Supabase for the quote request form and the admin page

## Running it locally

You need Node.js and npm.

```sh
npm install
npm run dev
```

The site runs at the address printed in the terminal.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build into `.output/` |
| `npm run preview` | Serves the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Where things are

| Path | What lives there |
| --- | --- |
| `src/data/services.ts` | Business details, services, cities, FAQ. Most text edits start here. |
| `src/components/site/` | Header, Hero, Gallery, Footer and the page sections |
| `src/routes/index.tsx` | The home page |
| `src/routes/admin.tsx` | Quote requests received through the form |
| `src/assets/` | Logo and photos |
| `src/styles.css` | Colors and fonts |

## Environment

`.env` holds the Supabase project URL and its publishable key. The admin page
also needs an `ADMIN_PASSWORD` secret, which is set on the hosting platform
rather than in this file.
