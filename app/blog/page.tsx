import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | AFANA Animal Futures",
  description:
    "Insights, research updates, and stories from the field on animal welfare and One Health in Africa.",
}


const posts = [
  {
    id: 1,
    title: "Bridging the Gap: One Health in Rural Nigeria",
    excerpt:
      "exploring how integrated health interventions are reducing disease transmission between livestock and farming families in Kwara State.",
    category: "Research",
    author: "Farhan Rhidor Akorede",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "/images/wp/blog-one-health.webp", // Replace with your actual image paths
    slug: "bridging-the-gap-one-health",
  },
  {
    id: 2,
    title: "The Economic Case for Animal Welfare",
    excerpt:
      "Why better treatment of farmed animals isn't just ethical—it's profitable. An analysis of yield improvements in humane poultry systems.",
    category: "Advocacy",
    author: "Kaosarah Lawal",
    date: "Sep 28, 2025",
    readTime: "4 min read",
    image: "/images/wp/blog-economics.webp",
    slug: "economic-case-animal-welfare",
  },
  {
    id: 3,
    title: "Community Spotlight: The Women Transforming Dairy",
    excerpt:
      "Meet the cooperative of women farmers who are adopting sustainable grazing practices and revolutionizing local milk production.",
    category: "Community",
    author: "AFANA Team",
    date: "Sep 15, 2025",
    readTime: "3 min read",
    image: "/images/wp/blog-community.webp",
    slug: "women-transforming-dairy",
  },
  {
    id: 4,
    title: "Understanding Antimicrobial Resistance (AMR)",
    excerpt:
      "A deep dive into our latest findings on antibiotic usage patterns in peri-urban livestock centers and the implications for public health.",
    category: "Education",
    author: "Farhan Rhidor Akorede",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: "/images/wp/blog-amr.webp",
    slug: "understanding-amr",
  },
  {
    id: 5,
    title: "5 Simple Steps for Better Goat Health",
    excerpt:
      "Practical, low-cost strategies for smallholder farmers to improve the immunity and longevity of their herds.",
    category: "Capacity Building",
    author: "Kaosarah Lawal",
    date: "Aug 10, 2025",
    readTime: "6 min read",
    image: "/images/wp/blog-goats.webp",
    slug: "better-goat-health",
  },
  {
    id: 6,
    title: "2025 Annual Symposium Recap",
    excerpt:
      "Key takeaways from our gathering of veterinarians, policymakers, and farmers discussing the future of African agriculture.",
    category: "Events",
    author: "AFANA Team",
    date: "Jul 22, 2025",
    readTime: "3 min read",
    image: "/images/wp/blog-event.webp",
    slug: "symposium-recap",
  },
]

export default function BlogPage() {
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1)

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
            Our Blog
          </p>
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Insights & Updates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Exploring the intersection of animal welfare, public health, and
            sustainable development through research and stories from the field.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Featured Article
            </h2>
          </div>
          
          <div className="group grid overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                   • {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{featuredPost.author}</p>
                    <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
                The Archive
              </p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Recent Articles
              </h2>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-md bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
                    {post.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <div>{post.readTime}</div>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                  </h3>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 border-t border-border pt-4">
                     {/* Simplified author for grid view */}
                    <span className="text-sm font-medium text-accent">
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

           {/* Pagination / Load More */}
           <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Stay Informed
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Join our community to receive the latest research updates, success stories, and opportunities to get involved.
          </p>
          
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex h-12 w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
                type="submit"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-accent px-8 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
                Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}