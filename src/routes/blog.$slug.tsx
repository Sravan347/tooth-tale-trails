import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/clinic";
import { Breadcrumbs, CtaSection, PageHero } from "@/components/sections";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.post.title} — YourCompany Dental Studio` : "Unavailable" },
      { name: "description", content: loaderData?.post.excerpt ?? "An article from YourCompany Dental Studio" },
      { property: "og:title", content: loaderData ? loaderData.post.title : "Unavailable" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "An article from YourCompany Dental Studio" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${post.category} · ${post.date}`}
        title={post.title}
        intro={post.excerpt}
      >
        <Breadcrumbs
          items={[
            { label: "Blog", to: "/blog" },
            { label: post.title },
          ]}
        />
      </PageHero>

      <article className="container-site max-w-3xl py-16 md:py-24">
        {post.body.map((block, i) => (
          <div key={i} className="mt-8 first:mt-0">
            {block.heading && (
              <h2 className="font-serif text-2xl font-semibold text-foreground">{block.heading}</h2>
            )}
            <p className={`leading-relaxed text-muted-foreground ${block.heading ? "mt-3" : ""}`}>
              {block.text}
            </p>
            {block.list && (
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {block.list.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span className="mt-1 text-gold">✦</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-border bg-card p-7 text-center">
          <p className="font-serif text-xl font-semibold text-foreground">
            Questions about your own teeth?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            General advice is helpful — personal advice is better. Book a visit and we'll look.
          </p>
          <Link to="/contact-us" className="btn-primary mt-5">Book an Appointment →</Link>
        </div>
      </article>

      <section className="bg-ivory">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-primary">Read article →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
