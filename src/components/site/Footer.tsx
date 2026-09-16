import { Phone, Mail, Clock, MapPin, ArrowUp, Languages } from "lucide-react";
import logo from "@/assets/logo.png";
import { business } from "@/data/services";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const GOLD = "oklch(0.852 0.080 66)";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "oklch(0.172 0.022 68)", color: "oklch(0.908 0.010 79)" }}>
      <div className="container mx-auto px-5 relative">
        <div className="grid gap-12 md:grid-cols-3 py-16">
          <div className="md:col-span-1">
            <img src={logo} alt={business.name} style={{ height: "56px", width: "auto", maxWidth: "270px", objectFit: "contain", marginBottom: "1.2rem" }} />
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "oklch(0.762 0.010 77)", maxWidth: "22rem" }}>
              Residential and commercial cleaning across {business.area}.
            </p>
          </div>

          <div>
            <h4 className="font-display" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: "1.2rem" }}>Explore</h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline" style={{ fontSize: "14px", color: "oklch(0.842 0.010 78)", textDecoration: "none" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: "1.2rem" }}>Reach Us</h4>
            <ul className="space-y-3" style={{ fontSize: "14px", color: "oklch(0.842 0.010 78)" }}>
              <li><a href={business.phoneHref} className="flex items-center gap-2.5 hover:opacity-80" style={{ textDecoration: "none", color: "inherit" }}><Phone className="h-4 w-4" style={{ color: GOLD }} /> {business.phone} · English</a></li>
              <li><a href={business.phoneEsHref} className="flex items-center gap-2.5 hover:opacity-80" style={{ textDecoration: "none", color: "inherit" }}><Languages className="h-4 w-4" style={{ color: GOLD }} /> {business.phoneEs} · Español / Português</a></li>
              <li><a href={`mailto:${business.email}`} className="flex items-center gap-2.5 hover:opacity-80" style={{ textDecoration: "none", color: "inherit", wordBreak: "break-all" }}><Mail className="h-4 w-4 flex-shrink-0" style={{ color: GOLD }} /> {business.email}</a></li>
              <li className="flex items-start gap-2.5"><Clock className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} /> {business.hours}</li>
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} /> {business.area}</li>
            </ul>
          </div>
        </div>

        <div className="py-7" style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
          <p style={{ fontSize: "12px", lineHeight: 1.8, color: "oklch(0.732 0.010 76)", marginBottom: "1.4rem" }}>
            Serving {business.area}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontSize: "12px", color: "oklch(0.692 0.010 76)" }}>© 2026 {business.name}. All rights reserved.</p>
            <a href="#home" className="flex items-center gap-2" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, textDecoration: "none" }}>
              Back to top
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid oklch(0.852 0.080 66 / 0.4)" }}>
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
