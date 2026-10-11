import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, HeartHandshake, Phone, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { clinic, homeFaqs, services, testimonials } from "@/lib/clinic";
import { CtaSection, Faq, Marquee, SectionHeading, Stars } from "@/components/sections";
import heroSmile from "@/assets/hero-smile.jpg";
import clinicImg from "@/assets/clinic.jpg";
import familyImg from "@/assets/family.jpg";
import consultImg from "@/assets/consult.jpg";
import kidImg from "@/assets/kid.jpg";
import alignerImg from "@/assets/aligner.jpg";
import implantImg from "@/assets/implant.jpg";
import dentistImg from "@/assets/dentist-working.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YourCompany Dental Studio — Gentle Family Dentistry in Pathanamthitta" },
      {
        name: "description",
        content:
          "Dentistry that makes you want to smile. Gentle, modern care for the whole family in Pathanamthitta — evenings, weekends, and same-day emergencies.",
      },
      { property: "og:title", content: "YourCompany Dental Studio — Dentistry that makes you want to smile" },
      {
        property: "og:description",
        content: "Gentle, modern care for the whole family — evenings, weekends, same-day emergencies, and a team that treats you like a guest.",
      },
    ],
  }),
  component: HomePage,
});

const promises = [
  { icon: ShieldCheck, title: "Transparent estimates, zero hassle", text: "Every plan comes with a written, itemised estimate before treatment — so costs are predictable and paperwork isn't your job." },
  { icon: CalendarCheck, title: "Same-day emergencies", text: "Toothache at breakfast, chair by afternoon. We reserve emergency time every open day — weekends included." },
  { icon: HeartHandshake, title: "Genuinely gentle", text: "Verified numbing, a famously light touch, and extra time for nervous smiles. Comfort is a system here, not a slogan." },
  { icon: Sparkles, title: "Evenings & weekends", text: "Late weekday hours plus Saturday and Sunday appointments mean dental care without burning leave days." },
  { icon: Users, title: "Whole-family care", text: "Toddlers' first visits to grandparents' dentures — one team, one roof, one relationship your family keeps." },
];

const serviceCards = [
  { slug: "general-dentistry", img: dentistImg, title: "General Dentistry", text: "Checkups, cleanings, fillings, and screenings — the quiet visits that keep dentistry easy." },
  { slug: "emergency-dentistry", img: consultImg, title: "Emergency Care", text: "Same-day relief for toothaches, breaks, and knocked-out teeth. Call first thing; be seen today." },
  { slug: "clear-aligners", img: alignerImg, title: "Clear Aligners", text: "Nearly invisible aligners with a 3D preview of your finished smile — consultation free." },
  { slug: "dental-implants", img: implantImg, title: "Dental Implants", text: "Permanent, natural-feeling replacement for missing teeth — from one tooth to a full arch." },
  { slug: "cosmetic-dentistry", img: heroSmile, title: "Cosmetic Dentistry", text: "Whitening, veneers, and bonding designed around your face — natural-first, always." },
  { slug: "childrens-dentistry", img: kidImg, title: "Children's Dentistry", text: "Playful, pressure-free visits that build kids who actually like the dentist." },
];

const stats = [
  { value: "4.9 ★", label: "Average patient rating (demo)" },
  { value: "7 /wk", label: "Days with appointments available" },
  { value: "15 +", label: "Years of combined clinical experience" },
  { value: "100 %", label: "Judgment-free, guaranteed" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Now welcoming new patients in {clinic.city}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Dentistry that makes you <em className="text-primary">want</em> to smile
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Gentle, modern care for the whole family — with evenings, weekends, same-day
              emergencies, and a team that treats you like a guest, not a chart number.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact-us" className="btn-primary">Book an Appointment →</Link>
              <a href={clinic.phoneHref} className="btn-outline">
                <Phone className="size-4" /> {clinic.phone}
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-primary">
              <li>✓ Transparent estimates</li>
              <li>✓ Open weekends</li>
              <li>✓ Gentle, judgment-free care</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroSmile}
              alt="A bright, confident smile"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
              <Star className="size-8 fill-gold text-gold" />
              <div>
                <p className="text-lg font-bold text-foreground">4.9 ★</p>
                <p className="text-xs text-muted-foreground">Patient rating (demo)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-forest text-primary-foreground">
        <div className="container-site grid gap-8 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-semibold text-gold">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* Promises */}
      <section className="container-site py-16 md:py-24">
        <SectionHeading
          eyebrow="The YourCompany difference"
          title="Care built around your life"
          intro="Five promises we design every appointment around."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md">
              <p.icon className="size-7 text-gold" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome / editorial split */}
      <section className="bg-ivory">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={`Welcome to ${clinic.name}`}
              title="A different kind of dental visit"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {clinic.name} was built on a simple observation: nobody should leave a dental office
              feeling processed. So we run on time, explain everything in plain language, quote
              prices before treatment, and never sell you dentistry you don't need.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The result is a practice where anxious patients settle in, kids ask when they can come
              back, and families stay for decades. Come meet us — the first visit is the easiest one to book.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-foreground">
              {["On-time appointments, unhurried care", "Plain-language explanations", "Prices quoted before treatment", "A team that remembers your name"].map((li) => (
                <li key={li} className="flex items-center gap-2">
                  <span className="text-gold">✦</span> {li}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={clinicImg}
              alt="Modern, calm treatment room at the clinic"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <p className="mt-3 text-xs text-muted-foreground">Modern clinic · {clinic.city}, Kerala</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="What we do" title="Complete care, one roof" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <img
                src={s.img}
                alt={s.title}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <p className="mt-3 text-sm font-semibold text-primary">Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-outline">Explore all services →</Link>
        </div>
      </section>

      {/* Affordability */}
      <section className="bg-ivory">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={familyImg}
              alt="Family smiling together"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-5 right-6 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold text-primary shadow-lg">
              Written estimates, always
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Honest, affordable care"
              title="Clear pricing, handled for you"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Good dentistry shouldn't come with financial surprises. We quote every treatment in
              writing before we begin, accept UPI, cards, and cash, and can stage larger treatment
              plans across visits so care fits your budget.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Not sure what something should cost? Ask us — we'll walk you through the estimate
              line by line, in plain language, before you decide anything.
            </p>
            <Link to="/new-patients" className="btn-primary mt-7">How your first visit works →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-site py-16 md:py-24">
        <SectionHeading
          eyebrow="Kind words"
          title="What patients tell their friends"
          intro="Fictional demonstration testimonials — replace with verified patient feedback."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-forest font-serif text-sm font-semibold text-primary-foreground">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.tag}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <SectionHeading eyebrow="FAQ" title="Before you even have to ask" />
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
