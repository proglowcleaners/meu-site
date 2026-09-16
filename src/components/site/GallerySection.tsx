import g1 from "@/assets/gallery-01.jpeg";
import g2 from "@/assets/gallery-02.jpeg";
import g3 from "@/assets/gallery-03.jpeg";
import { Reveal } from "./Reveal";

const shots = [
  { src: g1, cls: "lg:col-span-7 lg:row-span-2", h: "clamp(280px, 46vh, 520px)" },
  { src: g2, cls: "lg:col-span-5", h: "clamp(220px, 30vh, 250px)" },
  { src: g3, cls: "lg:col-span-5", h: "clamp(220px, 30vh, 250px)" },
];

export function GallerySection() {
  return (
    <section id="work" className="scroll-mt-24" style={{ background: "oklch(0.964 0.006 80)", padding: "7rem 0" }}>
      <div className="container mx-auto px-5">
        <Reveal className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span style={{ display: "inline-block", width: "34px", height: "1.5px", background: "oklch(0.611 0.088 65)" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "oklch(0.500 0.082 64)" }}>Our Work</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4.2vw, 3.3rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", color: "oklch(0.254 0.026 70)" }}>
            Homes we leave <span className="steel-text-dark">spotless</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:auto-rows-min">
          {shots.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className={s.cls}>
              <div className="media-zoom h-full" style={{ overflow: "hidden", borderRadius: "1.4rem", border: "1px solid oklch(0.902 0.005 78)", boxShadow: "0 20px 46px -28px oklch(0.254 0.026 70 / 0.4)" }}>
                <img src={s.src} alt="A home cleaned by Pro Glow Cleaners" loading="lazy" className="w-full object-cover" style={{ height: s.h, display: "block" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
