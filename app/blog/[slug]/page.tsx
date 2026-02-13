import { getPostBySlug } from "@/app/actions/blog"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import type { Metadata, ResolvingMetadata } from "next"

// Dynamic Metadata for SEO based on the post
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | AFANA Animal Futures`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Format the date nicely
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <article className="min-h-screen bg-background pb-20 pt-32 md:pb-28">
      {/* Article Header */}
      <header className="mx-auto max-w-[800px] px-6 text-center">
        <Link 
          href="/blog" 
          className="mb-8 inline-flex items-center text-sm font-medium text-accent hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
        </Link>
        
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl text-balance leading-tight">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <time>{formattedDate}</time>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="mx-auto mt-12 max-w-[1000px] px-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="mx-auto mt-12 max-w-[800px] px-6">
        <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
          {/* whitespace-pre-wrap ensures that line breaks from your textarea are respected */}
          <div className="whitespace-pre-wrap leading-relaxed text-base md:text-lg text-foreground/90">
            {post.content}
          </div>
        </div>

        {/* Footer / Share (Optional UI addition) */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm font-medium text-foreground">
            Thanks for reading.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors">
            <Share2 className="h-4 w-4" />
            Share Article
          </button>
        </div>
      </div>
    </article>
  )
}