import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, PageHero } from "@/components/sections";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Dental Blog — YourCompany Dental Studio" },
      { name: "description", content: "Plain-language articles on prevention, whitening, orthodontics, and dental emergencies from the team at YourCompany Dental Studio in Pathanamthitta." },
      { property: "og:title", content: "Dental Blog — YourCompany Dental Studio" },
      { property: "og:description", content: "Plain-language articles on prevention, whitening, orthodontics, and dental emergencies — written by dentists, not marketers." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The blog"
        title={<>Dentistry, explained <em className="text-primary">plainly</em></>}
        intro="Short, honest articles from our clinical team — the same answers we give in the chair, written down."
      >
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </PageHero>

      <section className="container-site py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <p className="eyebrow">{post.category} · {post.date}</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-foreground">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-primary">Read article →</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Have a question the blog didn't answer?"
        text="Ask it in the chair. Book a visit and get answers tailored to your own teeth, not the internet's average."
      />
    </>
  );
}
