import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic, homeFaqs } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, Faq, PageHero, SectionHeading } from "@/components/sections";
import clinicImg from "@/assets/clinic.jpg";
import consultImg from "@/assets/consult.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — YourCompany Dental Studio" },
      { name: "description", content: "A different kind of dental visit in Pathanamthitta: unhurried appointments, conservative treatment planning, and transparent pricing." },
      { property: "og:title", content: "About Us — YourCompany Dental Studio" },
      { property: "og:description", content: "Meet the clinic built around one idea: nobody should leave a dental office feeling processed." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { title: "Unhurried appointments", text: "We book enough time to do things properly and answer every question. You'll never feel rushed out of the chair." },
  { title: "Conservative treatment planning", text: "We recommend the least invasive option that solves the problem — and tell you honestly when watching and waiting is the right call." },
  { title: "Transparent pricing", text: "Every plan arrives as a written, itemised estimate before treatment begins. The number you approve is the number you pay." },
  { title: "Continuity of care", text: "You see the same faces visit after visit. We remember your name, your history, and how you take your tea." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A clinic built around <em className="text-primary">one simple idea</em></>}
        intro="Nobody should leave a dental office feeling processed. Everything at YourCompany Dental Studio — the scheduling, the explanations, the pricing — is designed around that."
      >
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </PageHero>

      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Our story" title="Purpose-built for calmer dentistry" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {clinic.name} opened in {clinic.city} with a deliberate choice: fewer patients per day,
            more time per patient. We designed the clinic to feel closer to a quiet studio than a
            hospital corridor — warm light, natural materials, and treatment rooms that don't feel
            clinical in the cold sense of the word.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The philosophy is simple. Run on time. Explain everything in plain language. Quote
            prices before treatment. And never, ever sell dentistry that isn't needed. The rest —
            loyal families, relaxed kids, nervous patients who finally settle in — follows from that.
          </p>
        </div>
        <img
          src={clinicImg}
          alt="Calm, modern treatment room"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <SectionHeading eyebrow="How we practise" title="Four commitments, every visit" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
                <p className="font-serif text-3xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <img
          src={consultImg}
          alt="Dentist explaining a treatment plan to a relaxed patient"
          width={1280}
          height={960}
          loading="lazy"
          className="order-2 aspect-[4/3] w-full rounded-3xl object-cover lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="The environment" title="Designed to lower your shoulders" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Dental anxiety is real, and the environment either feeds it or calms it. Ours was
            planned for the second: soft daylight, warm wood, no clinical smell, and a team
            trained to check in before, during, and after every procedure.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tell us you're nervous when you book and we'll schedule extra time, move at your pace,
            and agree on a hand signal that pauses everything instantly. You stay in control.
          </p>
          <Link to="/meet-our-team" className="btn-outline mt-7">Meet the people behind it →</Link>
        </div>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className="container-site grid gap-8 py-14 text-center sm:grid-cols-3">
          <div>
            <p className="font-serif text-4xl font-semibold text-gold">On time</p>
            <p className="mt-1 text-sm text-primary-foreground/75">Appointments that start when promised</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold text-gold">Plain language</p>
            <p className="mt-1 text-sm text-primary-foreground/75">No jargon, no pressure, no lectures</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold text-gold">Written estimates</p>
            <p className="mt-1 text-sm text-primary-foreground/75">Costs agreed before treatment begins</p>
          </div>
        </div>
      </section>

      <section className="container-site max-w-3xl py-16 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions we hear often" />
        <div className="mt-10">
          <Faq items={homeFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
