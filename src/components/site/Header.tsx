import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { business } from "@/data/services";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const CHAR = "oklch(0.214 0.026 68)";
const GOLD = "oklch(0.839 0.083 66)";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? "oklch(0.214 0.026 68 / 0.88)" : CHAR,
        backdropFilter: scrolled ? "blur(16px) saturate(1.3)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.3)" : "none",
        borderBottom: "1px solid oklch(0.765 0.085 66 / 0.22)",
        boxShadow: scrolled ? "0 10px 40px oklch(0.098 0.014 66 / 0.55)" : "none",
        transition: "background .4s ease, box-shadow .4s ease",
      }}
    >
      <div
        className="container mx-auto flex items-center justify-between px-5"
        style={{ paddingTop: scrolled ? "0.6rem" : "0.9rem", paddingBottom: scrolled ? "0.6rem" : "0.9rem", transition: "padding .4s ease" }}
      >
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt={business.name}
            style={{ height: scrolled ? "34px" : "44px", width: "auto", maxWidth: "260px", objectFit: "contain", transition: "height .4s ease" }}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline"
              style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.908 0.010 79)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2"
          style={{
            padding: "0.72rem 1.4rem", borderRadius: "9999px",
            background: GOLD, color: CHAR,
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            textDecoration: "none",
            transition: "transform .35s cubic-bezier(.22,1,.36,1), background .35s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "oklch(0.895 0.074 67)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = GOLD; }}
        >
          Get a Quote <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "oklch(0.928 0.010 79)", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="lg:hidden px-6 pb-7 pt-2 flex flex-col"
          style={{ background: "oklch(0.214 0.026 68 / 0.98)", backdropFilter: "blur(16px)", borderTop: "1px solid oklch(0.765 0.085 66 / 0.18)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ padding: "0.9rem 0", fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, color: "oklch(0.928 0.010 79)", textDecoration: "none", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 mt-5"
            style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: GOLD, textDecoration: "none" }}
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
