import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic, serviceCategories, services } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, PageHero } from "@/components/sections";
import dentistImg from "@/assets/dentist-working.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services — YourCompany Dental Studio" },
      { name: "description", content: "Complete dental care under one roof in Pathanamthitta: general dentistry, cosmetic treatments, clear aligners, implants, children's dentistry, and same-day emergency care." },
      { property: "og:title", content: "Dental Services — YourCompany Dental Studio" },
      { property: "og:description", content: "General, cosmetic, orthodontic, restorative, and emergency dentistry — complete care for the whole family under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Complete care, <em className="text-primary">one roof</em></>}
        intro="From six-month checkups to same-day emergencies, every treatment your family needs is planned, quoted, and delivered by one team that knows your history."
      >
        <Breadcrumbs items={[{ label: "Services" }]} />
      </PageHero>

      {/* Quick links to the eight detail pages */}
      <section className="container-site py-14 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <p className="eyebrow">{s.category}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <p className="mt-4 text-sm font-semibold text-primary">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories overview */}

      <section className="bg-ivory">
        <div className="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <img
              src={dentistImg}
              alt="A dentist at work in a calm, modern treatment room"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">How we're organised</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Seven areas of care, one relationship
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every treatment sits inside one of our seven care areas — so whether you come in for a
              cleaning, aligners, or an emergency, the plan always connects back to the same
              whole-mouth picture.
            </p>
            <ul className="mt-6 space-y-3">
              {serviceCategories.map((c) => (
                <li key={c.title} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which treatment you need?"
        text="That's exactly what a first visit is for. Book a checkup and we'll map out a plan — or call us and we'll point you in the right direction."
      />
    </>
  );
}

function Marquee-less-spacer() {
  return null;
}
