import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, CtaSection, PageHero, SectionHeading } from "@/components/sections";
import clinicImg from "@/assets/clinic.jpg";
import dentistImg from "@/assets/dentist-working.jpg";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — YourCompany Dental Studio" },
      { name: "description", content: "Same-day emergencies, gentle care, transparent estimates, and evening and weekend appointments — seven reasons families choose YourCompany Dental Studio." },
      { property: "og:title", content: "Why Choose Us — YourCompany Dental Studio" },
      { property: "og:description", content: "Seven reasons families in Pathanamthitta choose us — and stay for decades." },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  { title: "Same-day emergency support", text: "We reserve emergency time every open day, weekends included. Toothache at breakfast often means a chair by afternoon." },
  { title: "Genuinely gentle care", text: "Verified numbing, a light touch, and a hand signal that pauses everything. Nervous patients are our specialty, not an inconvenience." },
  { title: "Transparent written estimates", text: "Every treatment plan is itemised and agreed in writing before we begin. The number you approve is the number you pay." },
  { title: "Whole-family dentistry", text: "From a toddler's first visit to grandparents' dentures — one team, one roof, one relationship your family keeps." },
  { title: "Modern technology, used judiciously", text: "Digital scans, low-dose imaging, and 3D smile previews — where they genuinely improve care, never as decoration." },
  { title: "Convenient appointments", text: "Evening and weekend hours mean dental care without burning leave days. Online booking takes under a minute." },
  { title: "Patient education, not lectures", text: "We explain what we see and why it matters, in plain language — then let you decide. No guilt trips, ever." },
];

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title={<>Seven reasons families <em className="text-primary">stay for decades</em></>}
        intro="Choosing a dentist is really choosing a relationship. Here's what we promise every patient, every visit — in writing, not just in spirit."
      >
        <Breadcrumbs items={[{ label: "Why Choose Us" }]} />
      </PageHero>

      <section className="container-site py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex gap-5 rounded-2xl border border-border bg-card p-7">
              <p className="font-serif text-4xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Technology & comfort" title="Modern tools, calm rooms" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Digital scanners replace messy impressions. Low-dose imaging keeps radiation minimal.
              3D planning lets you preview aligner and implant results before committing. Every tool
              earns its place by making care more accurate, more comfortable, or more honest.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              And the rooms themselves are part of the treatment: warm light, natural materials,
              and a pace that never makes you feel like the next appointment is waiting.
            </p>
          </div>
          <img
            src={clinicImg}
            alt="A calm, modern treatment room"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <img
          src={dentistImg}
          alt="Gentle dental treatment in progress"
          width={1280}
          height={960}
          loading="lazy"
          className="order-2 aspect-[4/3] w-full rounded-3xl object-cover lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Switching is easy" title="Thinking of changing dentists?" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Moving to a new clinic takes one phone call. We'll request your records from your
            previous practice, review your history before you arrive, and pick up your care
            exactly where it left off — no repeated X-rays unless they're genuinely needed.
          </p>
          <Link to="/new-patients" className="btn-primary mt-7">See how your first visit works →</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
