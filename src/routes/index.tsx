import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { GallerySection } from "@/components/site/GallerySection";
import { Reveal } from "@/components/site/Reveal";
import { services, business, cities } from "@/data/services";
import {
  Home, Sparkles, CalendarCheck, BedDouble, Truck, HardHat, CalendarClock, MessageSquare, Heart, Languages,
  Phone, Mail, Clock, MapPin, ArrowUpRight, Check,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Pro Glow Cleaners | Residential & Commercial Cleaning in Tampa Bay, FL";
const DESCRIPTION =
  "Pro Glow Cleaners: residential and commercial cleaning across the Tampa Bay area: Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Lutz, Dunedin, Largo and Pinellas. Standard and deep cleaning, recurring visits, Airbnb turnovers, move in / move out and post-construction. English, Spanish and Portuguese. Call (407) 269-9575.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HomePage,
});

/* tokens */
const CHAR = "oklch(0.214 0.026 68)";
const CHAR2 = "oklch(0.280 0.030 71)";
const GOLD = "oklch(0.839 0.083 66)";
const GOLD_INK = "oklch(0.500 0.082 64)";
const CREAM = "oklch(0.984 0.004 80)";
const INK = "oklch(0.254 0.026 70)";
const MUTED = "oklch(0.470 0.019 75)";

const serviceIcons = [Home, Sparkles, CalendarCheck, BedDouble, Truck, HardHat];

const steps = [
  { n: "01", title: "Tell Us", text: "Call or send the form with the size of your home and the kind of clean you need." },
  { n: "02", title: "We Clean", text: "We arrive at the agreed time and work through the house room by room." },
  { n: "03", title: "You Relax", text: "You come home to a house that is genuinely done." },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span style={{ display: "inline-block", width: "34px", height: "1.5px", background: light ? GOLD : "oklch(0.611 0.088 65)" }} />
      <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: light ? "oklch(0.876 0.078 66)" : GOLD_INK }}>
        {children}
      </span>
    </div>
  );
}

function HomePage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      service: String(fd.get("service") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
    };
    const { error } = await supabase.from("quote_requests").insert(payload);
    setSubmitting(false);
    if (error) { toast.error("Something went wrong. Please try again, or give us a call."); return; }
    toast.success("Thank you, we will get back to you soon.");
    form.reset();
  }

  const field: React.CSSProperties = {
    width: "100%", background: "oklch(0.242 0.027 69)", border: "1px solid oklch(0.765 0.085 66 / 0.25)",
    borderRadius: "0.7rem", padding: "0.85rem 1rem", fontSize: "14px", color: "oklch(0.946 0.009 80)",
    outline: "none", transition: "border-color .25s ease",
  };
  const label: React.CSSProperties = {
    display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em",
    textTransform: "uppercase", color: "oklch(0.772 0.012 77)", marginBottom: "0.5rem",
  };

  return (
    <Layout>
      <Toaster />
      <Hero />

      {/* ── MARQUEE ── */}
      <div className="marquee-mask" style={{ background: CHAR2, padding: "1.05rem 0", borderTop: "1px solid oklch(0.765 0.085 66 / 0.22)", borderBottom: "1px solid oklch(0.765 0.085 66 / 0.22)" }}>
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {cities.map((t: string) => (
                <span key={t} className="flex items-center">
                  <span className="font-display" style={{ fontSize: "clamp(0.95rem, 1.7vw, 1.25rem)", fontWeight: 600, letterSpacing: "0.02em", color: "oklch(0.908 0.010 79)", padding: "0 1.3rem" }}>{t}</span>
                  <span style={{ color: GOLD, fontSize: "0.7rem" }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="scroll-mt-24" style={{ background: CREAM, padding: "7rem 0" }}>
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", color: INK }}>
                Homes and offices,<br />done <span className="steel-text-dark">properly</span>.
              </h2>
              <p className="mt-6" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: MUTED }}>
                {business.name} is {business.owner}'s company, cleaning homes across {business.area}.
              </p>
              <p className="mt-4" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: MUTED }}>
                From the routine visit to the deep clean, the turnover between guests and the clean
                after the builders leave. Tell us the size of the home and what you need, and you get
                a clear price up front — in English, Spanish or Portuguese, whichever you prefer.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {["Homes, not offices", "Clear, honest pricing", "English · Español · Português", business.area].map((t) => (
                  <div key={t} className="flex items-center gap-2" style={{ fontSize: "14px", color: INK, fontWeight: 500 }}>
                    <Check className="h-4 w-4 flex-shrink-0" style={{ color: GOLD_INK }} /> {t}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Home, title: "Residential & Commercial", text: "Homes, apartments, offices and commercial spaces." },
                  { icon: MessageSquare, title: "Talk to Us Directly", text: "You speak with the people doing the work." },
                  { icon: CalendarClock, title: "Your Schedule", text: "One-off, weekly, biweekly or monthly." },
                  { icon: Heart, title: "Treated Like Ours", text: "Your home is handled with care, room by room." },
                ].map(({ icon: Icon, title, text }, i) => (
                  <div key={title} className="card-lift" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.918 0.007 79)", borderRadius: "1.25rem", padding: "1.6rem", boxShadow: "0 6px 30px oklch(0.254 0.026 70 / 0.07)", marginTop: i % 2 ? "1.5rem" : 0 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 44px oklch(0.254 0.026 70 / 0.16)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px oklch(0.254 0.026 70 / 0.07)"; }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "50%", background: "oklch(0.765 0.085 66 / 0.16)", marginBottom: "1rem" }}>
                      <Icon className="h-5 w-5" style={{ color: GOLD_INK }} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: "1.02rem", fontWeight: 600, color: INK, marginBottom: "0.4rem" }}>{title}</h3>
                    <p style={{ fontSize: "13px", lineHeight: 1.65, color: MUTED }}>{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT A CLEAN COVERS ── */}
      <section id="services" className="scroll-mt-24" style={{ background: "oklch(0.964 0.006 80)", padding: "7rem 0" }}>
        <div className="container mx-auto px-5">
          <Reveal className="max-w-2xl mb-16">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4.2vw, 3.3rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", color: INK }}>
              Six ways we can<br />clean your home.
            </h2>
            <p className="mt-6" style={{ fontSize: "1.02rem", lineHeight: 1.8, color: MUTED, maxWidth: "34rem" }}>
              If there is something specific you want handled — or left alone — just tell us when you call.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="card-lift group h-full" style={{ background: "oklch(1 0 0)", borderRadius: "1.4rem", overflow: "hidden", border: "1px solid oklch(0.928 0.006 79)", boxShadow: "0 8px 30px oklch(0.254 0.026 70 / 0.07)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 50px oklch(0.254 0.026 70 / 0.17)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.765 0.085 66 / 0.5)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px oklch(0.254 0.026 70 / 0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.928 0.006 79)"; }}
                  >
                    <div className="media-zoom" style={{ overflow: "hidden", height: "200px", position: "relative" }}>
                      <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, oklch(0.214 0.026 68 / 0.38), transparent 60%)" }} />
                      <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "12px", background: "oklch(0.214 0.026 68 / 0.85)", backdropFilter: "blur(6px)", border: "1px solid oklch(0.765 0.085 66 / 0.4)" }}>
                        <Icon className="h-5 w-5" style={{ color: "oklch(0.898 0.072 67)" }} />
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem 1.6rem 1.8rem" }}>
                      <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 600, color: INK, marginBottom: "0.6rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: MUTED }}>{s.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="scroll-mt-24" style={{ background: CREAM, padding: "7rem 0" }}>
        <div className="container mx-auto px-5">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center"><Eyebrow>How We Work</Eyebrow></div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", color: INK }}>
              Three steps, no fuss.
            </h2>
          </Reveal>
          <div className="relative grid md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
            <div className="hidden md:block" style={{ position: "absolute", top: "34px", left: "16%", right: "16%", height: "1px", background: "linear-gradient(to right, transparent, oklch(0.765 0.085 66 / 0.6), transparent)" }} />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12} className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: CHAR, border: "1px solid oklch(0.765 0.085 66 / 0.45)", boxShadow: "0 14px 34px -16px oklch(0.254 0.026 70 / 0.5)" }}>
                    <span className="font-display metallic" style={{ fontSize: "1.4rem", fontWeight: 700 }}>{s.n}</span>
                  </div>
                </div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 600, color: INK, marginBottom: "0.7rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: MUTED, maxWidth: "18rem", margin: "0 auto" }}>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-24 relative overflow-hidden grid-dots" style={{ background: CHAR, padding: "7rem 0" }}>
        <div style={{ position: "absolute", bottom: "-15%", right: "-8%", width: "560px", height: "560px", background: "radial-gradient(ellipse, oklch(0.765 0.085 66 / 0.12) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div className="container mx-auto px-5 relative">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-6xl mx-auto">
            <Reveal>
              <Eyebrow light>Get In Touch</Eyebrow>
              <h2 className="font-display metallic" style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: "1.3rem" }}>
                Get a quote.
              </h2>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "oklch(0.842 0.011 78)", marginBottom: "2.6rem", maxWidth: "28rem" }}>
                Tell us about your home and how often you would like us to come, and we will get back to you with a price.
              </p>
              <div className="flex flex-col" style={{ gap: "1rem" }}>
                {[
                  { icon: Phone, note: "Call or text · English", value: business.phone, href: business.phoneHref },
                  { icon: Languages, note: "Español · Português", value: business.phoneEs, href: business.phoneEsHref },
                  { icon: Mail, note: "Email", value: business.email, href: `mailto:${business.email}` },
                  { icon: Clock, note: "Hours", value: business.hours },
                  { icon: MapPin, note: "Areas served", value: business.area },
                ].map(({ icon: Icon, note, value, href }) => {
                  const inner = (
                    <div className="flex items-center gap-4" style={{ padding: "1rem 1.2rem", borderRadius: "1rem", background: CHAR2, border: "1px solid oklch(0.765 0.085 66 / 0.22)", transition: "border-color .3s, transform .3s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.765 0.085 66 / 0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.765 0.085 66 / 0.22)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                    >
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: GOLD, flexShrink: 0 }}>
                        <Icon className="h-5 w-5" style={{ color: CHAR }} />
                      </span>
                      <span>
                        <span style={{ display: "block", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "oklch(0.772 0.012 77)" }}>{note}</span>
                        <span style={{ fontSize: "14.5px", fontWeight: 600, color: "oklch(0.946 0.009 80)", wordBreak: "break-word" }}>{value}</span>
                      </span>
                    </div>
                  );
                  return href ? <a key={note} href={href} style={{ textDecoration: "none" }}>{inner}</a> : <div key={note}>{inner}</div>;
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} style={{ background: "oklch(0.242 0.027 69)", borderRadius: "1.6rem", padding: "clamp(1.8rem, 4vw, 2.6rem)", border: "1px solid oklch(0.765 0.085 66 / 0.25)", boxShadow: "0 40px 80px -40px oklch(0.088 0.013 66 / 0.8)" }}>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={label}>Name *</label>
                    <input name="name" required style={field} onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.765 0.085 66 / 0.25)")} />
                  </div>
                  <div>
                    <label style={label}>Email *</label>
                    <input name="email" required type="email" style={field} onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.765 0.085 66 / 0.25)")} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={label}>Phone</label>
                    <input name="phone" type="tel" style={field} onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.765 0.085 66 / 0.25)")} />
                  </div>
                  <div>
                    <label style={label}>Service</label>
                    <select name="service" style={{ ...field, cursor: "pointer" }} onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.765 0.085 66 / 0.25)")}>
                      {services.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-7">
                  <label style={label}>Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your home — size, rooms, how often…" style={{ ...field, resize: "none" }} onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.765 0.085 66 / 0.25)")} />
                </div>
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2.5"
                  style={{ padding: "1.1rem", borderRadius: "9999px", background: GOLD, color: CHAR, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", border: "none", cursor: "pointer", opacity: submitting ? 0.65 : 1, transition: "background .3s, transform .3s" }}
                  onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.background = "oklch(0.895 0.074 67)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = ""; }}
                >
                  {submitting ? "Sending…" : <>Send Request <ArrowUpRight className="h-4 w-4" /></>}
                </button>
                <p style={{ textAlign: "center", fontSize: "11px", color: "oklch(0.732 0.012 76)", marginTop: "1.1rem" }}>
                  No obligation
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
