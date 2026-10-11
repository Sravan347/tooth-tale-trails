import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, Faq, PageHero, SectionHeading } from "@/components/sections";
import consultImg from "@/assets/consult.jpg";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New Patients — YourCompany Dental Studio" },
      { name: "description", content: "Your first visit to YourCompany Dental Studio: what to bring, what happens, and how long it takes — about 60 relaxed minutes." },
      { property: "og:title", content: "New Patients — YourCompany Dental Studio" },
      { property: "og:description", content: "Everything about your first visit: what to bring, the step-by-step journey, and honest answers about costs." },
    ],
  }),
  component: NewPatientsPage,
});

const steps = [
  { title: "A proper welcome", text: "We sit down first — no chair, no instruments — and talk through your history, your concerns, and what you want from a dentist." },
  { title: "A thorough examination", text: "Teeth, gums, bite, and soft tissue, with digital X-rays only where they add real information. Unhurried and gentle." },
  { title: "Plain-language findings", text: "We show you what we see, explain what matters and what doesn't, and answer every question honestly." },
  { title: "A written plan and estimate", text: "If treatment is needed, you leave with a prioritised plan and an itemised written estimate. No pressure to decide on the spot." },
];

const faqs = [
  { q: "How long is the first visit?", a: "About 60 minutes. We book extra time so nothing feels rushed — the conversation before the examination is often the most valuable part." },
  { q: "What should I bring?", a: "Just yourself and any previous dental records or X-rays if you have them. If you're coming from another clinic, we can request records on your behalf." },
  { q: "How much will it cost?", a: "You'll know before anything happens. The examination fee is quoted when you book, and any treatment is estimated in writing before it begins." },
  { q: "I'm genuinely anxious. Is that a problem?", a: "Not here. Tell us when you book and we'll schedule extra time, move at your pace, and agree on a signal that pauses everything instantly. Many of our most loyal patients arrived terrified." },
  { q: "Do you see children as new patients?", a: "Happily. First visits for little ones are short and playful — a ride in the chair, a look around, and no pressure. We recommend a first visit around age one." },
];

function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={<>Your first visit, <em className="text-primary">step by step</em></>}
        intro="The hardest appointment is the first one — so we've made it the easiest. Here's exactly what happens, what to bring, and what it costs."
      >
        <Breadcrumbs items={[{ label: "New Patients" }]} />
      </PageHero>

      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-2 text-sm font-semibold text-primary">
            <Clock className="size-4 text-gold" /> First visits run about 60 minutes
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            What to bring
          </h2>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {[
              "Yourself — that's the essential part",
              "Any previous dental records or X-rays, if you have them",
              "A list of medications and health conditions we should know about",
              "Your questions — write them down, we genuinely want them",
            ].map((li) => (
              <li key={li} className="flex gap-3">
                <span className="mt-1 text-gold">✦</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Coming from another clinic? Call us and we'll handle the records transfer for you.
          </p>
        </div>
        <img
          src={consultImg}
          alt="A relaxed first consultation"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <SectionHeading eyebrow="The journey" title="Four steps, zero surprises" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
                <p className="font-serif text-4xl font-semibold text-gold">{i + 1}</p>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site max-w-3xl py-16 md:py-24">
        <SectionHeading eyebrow="Costs & payment" title="Honest numbers, in writing" />
        <p className="mt-5 leading-relaxed text-muted-foreground">
          The examination fee is quoted when you book. If treatment is needed, you receive an
          itemised written estimate before anything begins — and larger plans can be staged across
          visits to fit your budget. We accept UPI, cards, and cash.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Questions about cost are never awkward here. Ask us anything — we'd rather explain a
          number than surprise you with one.
        </p>
      </section>

      <section className="bg-ivory">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <SectionHeading eyebrow="New-patient FAQ" title="Everything else you're wondering" />
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still curious? Call us at{" "}
            <a href={clinic.phoneHref} className="font-semibold text-primary hover:underline">{clinic.phone}</a>{" "}
            — or <Link to="/contact-us" className="font-semibold text-primary hover:underline">book your first visit</Link>.
          </p>
        </div>
      </section>

      <CtaSection title="The first visit is the easiest one to book" />
    </>
  );
}
