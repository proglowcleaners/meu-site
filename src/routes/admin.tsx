import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Layout } from "@/components/site/Layout";
import { listQuoteRequests, type QuoteRequest } from "@/lib/quotes.functions";
import { Lock, RefreshCw, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin | Pro Glow Cleaners" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const fetchQuotes = useServerFn(listQuoteRequests);
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<QuoteRequest[]>([]);

  async function load(pw: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuotes({ data: { password: pw.trim() } });
      setRows(data);
      setAuthed(true);
    } catch (e: any) {
      const msg = e?.message || "Failed to load.";
      setError(msg);
      toast.error(msg);
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Toaster />
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        {!authed ? (
          <div className="max-w-md mx-auto bg-card border rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white">
                <Lock className="h-5 w-5" />
              </span>
              <h1 className="font-display text-2xl font-extrabold text-brand-green">Admin Access</h1>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                load(password);
              }}
              className="space-y-4"
            >
              <input
                type="password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="w-full rounded-md border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              {error && (
                <div className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-brand-green px-8 py-3 font-bold uppercase tracking-wide text-white shadow-lg hover:bg-brand-green-dark transition-all disabled:opacity-60"
              >
                {loading ? "Checking..." : "Enter"}
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-extrabold text-brand-green">
                  Quote Requests
                </h1>
                <p className="text-muted-foreground mt-1">{rows.length} total submission(s)</p>
              </div>
              <button
                onClick={() => load(password)}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold hover:bg-muted"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>

            {rows.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground border rounded-2xl">
                No submissions yet.
              </div>
            ) : (
              <div className="space-y-4">
                {rows.map((r) => (
                  <article key={r.id} className="bg-card border rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="font-display text-lg font-bold text-brand-blue-dark">
                          {r.name}
                        </h2>
                        {r.service && (
                          <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wide bg-brand-green/10 text-brand-green rounded-full px-3 py-1">
                            {r.service}
                          </span>
                        )}
                      </div>
                      <time className="text-xs text-muted-foreground">
                        {new Date(r.created_at).toLocaleString()}
                      </time>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <a href={`mailto:${r.email}`} className="flex items-center gap-1 hover:text-brand-green">
                        <Mail className="h-4 w-4" /> {r.email}
                      </a>
                      {r.phone && (
                        <a href={`tel:${r.phone}`} className="flex items-center gap-1 hover:text-brand-green">
                          <Phone className="h-4 w-4" /> {r.phone}
                        </a>
                      )}
                    </div>
                    {r.message && (
                      <p className="text-sm text-foreground/80 whitespace-pre-wrap border-t pt-3">
                        {r.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </Layout>
  );
}
