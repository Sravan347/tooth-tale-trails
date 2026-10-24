import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, PageHero } from "@/components/sections";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — YourCompany Dental Studio" },
      { name: "description", content: "Book an appointment at YourCompany Dental Studio in Pathanamthitta. Evenings and weekends available, same-day emergency slots held every open day." },
      { property: "og:title", content: "Contact & Booking — YourCompany Dental Studio" },
      { property: "og:description", content: "Book an appointment in under a minute — evenings, weekends, and same-day emergency care in Pathanamthitta, Kerala." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title={<>Let's get you <em className="text-primary">booked in</em></>}
        intro="Booking takes less than a minute. Tell us what you need and we'll confirm your appointment — usually the same day."
      >
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </PageHero>

      <section className="container-site grid items-start gap-12 py-16 md:py-24 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle2 className="mx-auto size-12 text-gold" />
              <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                Thanks{name ? `, ${name.split(" ")[0]}` : ""} — request received
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                This is a demo form, so nothing was actually sent. In the live clinic you'd get a
                confirmation call shortly — or reach us right now at{" "}
                <a href={clinic.phoneHref} className="font-semibold text-primary hover:underline">{clinic.phone}</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Request an appointment</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Full name
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Phone number
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Preferred time
                  <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30">
                    <option>Weekday morning</option>
                    <option>Weekday afternoon</option>
                    <option>Weekday evening</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-foreground sm:col-span-2">
                  What can we help with?
                  <textarea
                    rows={4}
                    placeholder="A checkup, a toothache, straightening, whitening…"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
              </div>
              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                Request Appointment →
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                In dental pain right now? Don't wait on a form — call{" "}
                <a href={clinic.phoneHref} className="font-semibold text-primary">{clinic.phone}</a> for same-day care.
              </p>
            </form>
          )}
        </div>

        {/* Details */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-forest p-8 text-primary-foreground">
            <h2 className="font-serif text-2xl font-semibold">Visit us</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold">
                  {clinic.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={clinic.phoneHref} className="hover:text-gold">{clinic.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${clinic.email}`} className="hover:text-gold">{clinic.email}</a>
              </li>
              <li className="flex gap-3">
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
            <div className="mt-8 rounded-xl bg-forest-deep p-5">
              <p className="text-sm font-semibold text-gold">Emergency?</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Call as early as you can — same-day slots are held every open day, weekends included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection title="Prefer to just talk?" text={`Call ${clinic.phone} — a real person answers during opening hours, and we'd rather reassure you than have you wait.`} />
    </>
  );
}
