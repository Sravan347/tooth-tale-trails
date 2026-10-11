import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic, serviceCategories } from "@/lib/clinic";

const aboutLinks = [
  { to: "/about-us", label: "About Us" },
  { to: "/meet-our-team", label: "Meet the Team" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/new-patients", label: "New Patients" },
];

const moreLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/contact-us", label: "Contact" },
];

function Dropdown({ label, links }: { label: string; links: { to: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {links.map((l) => (
          <Link
            key={l.to + l.label}
            to={l.to}
            className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-forest text-primary-foreground">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-xs">
          <p className="flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-gold" />
            Now welcoming new patients &amp; families — open evenings and weekends
          </p>
          <Link to="/services/$slug" params={{ slug: "emergency-dentistry" }} className="font-semibold text-gold hover:underline">
            Dental emergency? Same-day care →
          </Link>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-site flex items-center justify-between gap-4 py-4">
          <Link to="/" className="leading-tight">
            <span className="font-serif text-xl font-semibold text-primary">YourCompany</span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Dental Studio
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            <Link to="/" className="py-2 text-sm font-medium text-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
              Home
            </Link>
            <Dropdown label="About" links={aboutLinks} />
            <Dropdown
              label="Services"
              links={[
                { to: "/services", label: "All Services" },
                ...serviceCategories.map((c) => ({
                  to: "/services",
                  label: c.title,
                })),
              ]}
            />
            <Dropdown label="More" links={moreLinks} />
          </nav>

          <div className="flex items-center gap-3">
            <a href={clinic.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-primary md:flex">
              <Phone className="size-4" />
              {clinic.phone}
            </a>
            <Link to="/contact-us" className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
              Book an Appointment →
            </Link>
            <button
              className="rounded-lg border border-border p-2 text-foreground lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
            <div className="container-site flex flex-col gap-1 py-4">
              {[
                { to: "/", label: "Home" },
                ...aboutLinks,
                { to: "/services", label: "Services" },
                ...moreLinks,
              ].map((l) => (
                <Link
                  key={l.to + l.label}
                  to={l.to}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <a href={clinic.phoneHref} className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary">
                <Phone className="size-4" /> {clinic.phone}
              </a>
              <Link to="/contact-us" className="btn-primary mt-2">
                Book an Appointment →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
