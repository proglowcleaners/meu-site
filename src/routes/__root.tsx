import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pro Glow Cleaners | Residential & Commercial Cleaning in Tampa Bay, FL" },
      { name: "description", content: "Pro Glow Cleaners: residential and commercial cleaning across the Tampa Bay area: Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Lutz, Dunedin, Largo and Pinellas. Standard and deep cleaning, recurring visits, Airbnb turnovers, move in / move out and post-construction. English, Spanish and Portuguese. Call (407) 269-9575." },
      { property: "og:title", content: "Pro Glow Cleaners | Residential & Commercial Cleaning in Tampa Bay, FL" },
      { property: "og:description", content: "Pro Glow Cleaners: residential and commercial cleaning across the Tampa Bay area: Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Lutz, Dunedin, Largo and Pinellas. Standard and deep cleaning, recurring visits, Airbnb turnovers, move in / move out and post-construction. English, Spanish and Portuguese. Call (407) 269-9575." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Pro Glow Cleaners | Residential & Commercial Cleaning in Tampa Bay, FL" },
      { name: "twitter:description", content: "Pro Glow Cleaners: residential and commercial cleaning across the Tampa Bay area: Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Lutz, Dunedin, Largo and Pinellas. Standard and deep cleaning, recurring visits, Airbnb turnovers, move in / move out and post-construction. English, Spanish and Portuguese. Call (407) 269-9575." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
