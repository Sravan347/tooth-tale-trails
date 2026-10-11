import { createFileRoute } from "@tanstack/react-router";
import { teamMembers } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, PageHero, SectionHeading } from "@/components/sections";
import consultImg from "@/assets/consult.jpg";
import dentistImg from "@/assets/dentist-working.jpg";

export const Route = createFileRoute("/meet-our-team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — YourCompany Dental Studio" },
      { name: "description", content: "Meet the dentists, hygienists, and front-desk team behind YourCompany Dental Studio in Pathanamthitta." },
      { property: "og:title", content: "Meet Our Team — YourCompany Dental Studio" },
      { property: "og:description", content: "A small, steady team that remembers your name — dentists, hygienists, assistants, and front desk." },
    ],
  }),
  component: TeamPage,
});

const groups = [
  { label: "Dentists", roles: ["Lead Dentist", "Associate Dentist", "Orthodontic Provider"] },
  { label: "Hygiene & clinical support", roles: ["Dental Hygienist", "Dental Assistant"] },
  { label: "Front desk", roles: ["Front Desk Coordinator"] },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title={<>The people who <em className="text-primary">remember your name</em></>}
        intro="A small, steady team on purpose — so you see the same faces, visit after visit. All profiles below are fictional demo content until replaced with verified information."
      >
        <Breadcrumbs items={[{ label: "Meet the Team" }]} />
      </PageHero>

      <section className="container-site py-16 md:py-24">
        <img
          src={consultImg}
          alt="A team member in consultation with a patient"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[21/9] w-full rounded-3xl object-cover"
        />
        <p className="mt-6 mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          We hire for warmth first and train for everything else. Every team member — from the
          front desk to the chair — shares the same brief: unhurried, honest, gentle care.
        </p>
      </section>

      {groups.map((group, gi) => (
        <section key={group.label} className={gi % 2 === 0 ? "bg-ivory" : "bg-background"}>
          <div className="container-site py-14 md:py-20">
            <SectionHeading eyebrow={group.label} title={group.label} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers
                .filter((m) => group.roles.includes(m.role))
                .map((m) => (
                  <article key={m.name} className="rounded-2xl border border-border bg-card p-7">
                    <div className="flex size-16 items-center justify-center rounded-full bg-forest font-serif text-2xl font-semibold text-primary-foreground">
                      {m.name.replace("Dr. ", "")[0]}
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{m.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Always learning" title="Quietly obsessive about getting better" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The team trains together every month — new techniques, new materials, and the soft
            skills that matter just as much: explaining clearly, listening properly, and keeping
            anxious patients comfortable.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            It's not the kind of thing that shows up on a certificate wall. It shows up in how
            your appointment feels.
          </p>
        </div>
        <img
          src={dentistImg}
          alt="A dentist providing gentle care"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </section>

      <CtaSection title="Come say hello" text="The easiest way to meet the team is a first visit — a checkup, a chat, and zero pressure." />
    </>
  );
}
