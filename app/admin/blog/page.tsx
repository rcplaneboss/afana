import { getPosts, deletePost } from "@/app/actions/blog"
import Link from "next/link"
import Image from "next/image"
import { Plus, Trash2, Edit, FileText } from "lucide-react"
import prisma from "@/prisma"

export const dynamic = 'force-dynamic'

export default async function AdminBlogPage() {
  // We fetch all posts (even drafts if you modify the query later)
 
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="min-h-screen bg-muted/30 p-8 pt-32">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Blog Management</h1>
            <p className="text-muted-foreground">Create and manage your team's articles.</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-sm border border-border/50 transition-all hover:shadow-md"
            >
              {/* Image Thumbnail */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                ) : (
                  <FileText className="h-8 w-8 text-muted-foreground m-auto mt-4" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg font-semibold truncate">{post.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>• {new Date(post.createdAt).toLocaleDateString()}</span>
                  <span>• {post.author}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link 
                  href={`/blog/${post.slug}`} // View Live
                  className="p-2 text-muted-foreground hover:text-primary"
                  title="View Live"
                >
                  <FileText className="h-4 w-4" />
                </Link>
                {/* Delete Button Form */}
                <form action={async () => {
                  'use server'
                  await deletePost(post.id)
                }}>
                  <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No posts found. Create your first one!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}