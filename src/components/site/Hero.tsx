import { ArrowUpRight, MapPin, Clock, Home } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
import { business } from "@/data/services";

const CHAR = "oklch(0.214 0.026 68)";
const CHAR2 = "oklch(0.280 0.030 71)";
const GOLD = "oklch(0.839 0.083 66)";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden grid-dots"
      style={{ background: "linear-gradient(165deg, oklch(0.172 0.022 68) 0%, oklch(0.214 0.026 68) 42%, oklch(0.318 0.034 73) 100%)", paddingTop: "3.5rem" }}
    >
      <div style={{ position: "absolute", top: "-10%", right: "-6%", width: "560px", height: "560px", background: "radial-gradient(ellipse, oklch(0.765 0.085 66 / 0.14) 0%, transparent 68%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "620px", height: "620px", background: "radial-gradient(ellipse, oklch(0.802 0.006 78 / 0.09) 0%, transparent 68%)", pointerEvents: "none" }} />

      <div className="container mx-auto px-5 relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-12 gap-12 items-center pb-24 pt-12">

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span style={{ display: "inline-block", width: "44px", height: "1.5px", background: GOLD }} />
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.30em", textTransform: "uppercase", color: "oklch(0.876 0.078 66)" }}>
                Residential &amp; Commercial Cleaning · {business.area}
              </span>
            </div>

            <h1
              className="font-display"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.02em" }}
            >
              <span className="metallic">A home you can</span><br />
              <span className="steel-text">come back to.</span>
            </h1>

            <p className="mt-8 max-w-xl" style={{ fontSize: "1.08rem", lineHeight: 1.75, color: "oklch(0.842 0.011 78)" }}>
              {business.shortName} cleans homes across {business.area}. Standard and deep cleans,
              recurring visits, Airbnb turnovers, move in and move out, and post-construction —
              booked around your schedule, in English, Spanish or Portuguese.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5"
                style={{ padding: "1.05rem 2.1rem", borderRadius: "9999px", background: GOLD, color: CHAR, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", transition: "transform .4s cubic-bezier(.22,1,.36,1), background .4s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "oklch(0.895 0.074 67)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = GOLD; }}
              >
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2.5"
                style={{ padding: "1.05rem 2.1rem", borderRadius: "9999px", border: `1px solid ${GOLD}`, color: "oklch(0.946 0.009 80)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", transition: "background .35s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "oklch(0.765 0.085 66 / 0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                {business.phone}
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { icon: Home, label: "Residential & commercial" },
                { icon: Clock, label: business.hours },
                { icon: MapPin, label: business.area },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" style={{ color: GOLD }} />
                  <span style={{ fontSize: "13px", color: "oklch(0.862 0.011 78)", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="media-zoom relative"
              style={{ borderRadius: "1.6rem", overflow: "hidden", border: "1px solid oklch(0.765 0.085 66 / 0.32)", boxShadow: "0 40px 90px -30px oklch(0.088 0.013 66 / 0.8)" }}
            >
              <img src={heroImg} alt="A freshly cleaned kitchen in a Tampa Bay home" className="w-full object-cover" style={{ height: "min(66vh, 540px)" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${CHAR2}, transparent 55%)`, opacity: 0.6 }} />
            </div>

            <div
              style={{
                position: "absolute", left: "-7%", bottom: "8%",
                background: "oklch(0.270 0.014 70 / 0.92)", backdropFilter: "blur(12px)",
                border: "1px solid oklch(0.765 0.085 66 / 0.35)", borderRadius: "1.1rem",
                padding: "1rem 1.35rem", boxShadow: "0 20px 50px -20px oklch(0.088 0.013 66 / 0.8)",
              }}
            >
              <p className="font-display metallic" style={{ fontSize: "1.9rem", fontWeight: 700, lineHeight: 1 }}>6</p>
              <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.832 0.012 78)", marginTop: "5px" }}>Cleaning Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
