import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic, services } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, Faq, PageHero, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.service.title} — YourCompany Dental Studio` : "Unavailable" },
      { name: "description", content: loaderData?.service.short ?? "Dental care at YourCompany Dental Studio" },
      { property: "og:title", content: loaderData ? `${loaderData.service.title} — YourCompany Dental Studio` : "Unavailable" },
      { property: "og:description", content: loaderData?.service.short ?? "Dental care at YourCompany Dental Studio" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={<>{service.title.split(" ")[0]} {service.title.split(" ").slice(1).join(" ") || ""}</>}
        intro={service.short}
      >
        <Breadcrumbs
          items={[
            { label: "Services", to: "/services" },
            { label: service.title },
          ]}
        />
      </PageHero>

      <section className="container-site grid items-start gap-12 py-16 md:py-24 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Overview" title={`What ${service.title.toLowerCase()} means here`} />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

          <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">Who it's for</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {service.whoBenefits.map((li) => (
              <li key={li} className="flex gap-3">
                <span className="mt-1 text-gold">✦</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">What to expect</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {service.whatToExpect.map((li) => (
              <li key={li} className="flex gap-3">
                <span className="mt-1 text-gold">✦</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">How it works</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-serif text-3xl font-semibold text-gold">{i + 1}</p>
                <h4 className="mt-2 font-serif text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-40">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-semibold text-foreground">Book this treatment</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We'll confirm suitability at a checkup first and quote everything in writing before
              any treatment begins.
            </p>
            <Link to="/contact-us" className="btn-primary mt-5 w-full">Book an Appointment →</Link>
            <a href={clinic.phoneHref} className="btn-outline mt-3 w-full">
              <Phone className="size-4" /> {clinic.phone}
            </a>
            {service.slug === "emergency-dentistry" && (
              <p className="mt-4 rounded-xl bg-ivory p-3 text-center text-sm font-semibold text-primary">
                Same-day slots held every open day — call first thing.
              </p>
            )}
          </div>
        </aside>
      </section>

      <section className="bg-ivory">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <SectionHeading eyebrow="FAQ" title={`${service.title} questions, answered`} />
          <div className="mt-10">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Related care" title="You might also need" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
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

      <CtaSection title={`Ready to talk about ${service.title.toLowerCase()}?`} />
    </>
  );
}
