import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone, Plus, Star } from "lucide-react";
import { useState, type ReactNode } from "react";
import { clinic, marqueeItems } from "@/lib/clinic";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      <Link to="/" className="hover:text-primary">Home</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="size-3" />
          {item.to ? (
            <Link to={item.to} className="hover:text-primary">{item.label}</Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-ivory">
      <div className="container-site max-w-3xl py-14 md:py-20">
        {children}
        <p className="eyebrow mt-4">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-border bg-ivory py-3" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-primary">
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span className="font-medium text-foreground">{item.q}</span>
              <Plus className={`size-5 shrink-0 text-gold transition-transform ${open ? "rotate-45" : ""}`} />
            </button>
            {open && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

export function CtaSection({
  title = "Ready for a smile you love showing off?",
  text = "Booking takes less than a minute. New patients, families, and nervous smiles are all warmly welcome — evenings and weekends included.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-forest">
      <div className="container-site max-w-3xl py-16 text-center md:py-24">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact-us" className="btn-light">Book an Appointment →</Link>
          <a href={clinic.phoneHref} className="btn-outline !border-ivory !text-ivory hover:!bg-ivory hover:!text-forest">
            <Phone className="size-4" /> Call {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
