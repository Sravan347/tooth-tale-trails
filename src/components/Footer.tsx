import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic, services } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-semibold">YourCompany</p>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Dental Studio</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            {clinic.tagline} Gentle, modern family dentistry in {clinic.city}, Kerala.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about-us", label: "About Us" },
              { to: "/meet-our-team", label: "Meet the Team" },
              { to: "/why-choose-us", label: "Why Choose Us" },
              { to: "/new-patients", label: "New Patients" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/contact-us", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Treatments</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Visit us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold">
                {clinic.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={clinic.phoneHref} className="hover:text-gold">{clinic.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${clinic.email}`} className="hover:text-gold">{clinic.email}</a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {clinic.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2026 {clinic.name}. All clinic details on this site are fictional demo content.</p>
          <p>Thoughtful dentistry. Naturally confident smiles.</p>
        </div>
      </div>
    </footer>
  );
}
