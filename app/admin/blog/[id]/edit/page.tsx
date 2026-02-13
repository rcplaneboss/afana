import { getPostById, updatePost } from "@/app/actions/blog"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-muted/30 p-8 pt-32">
      <div className="mx-auto max-w-3xl">
        
        <Link href="/admin/blog" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <h1 className="mb-6 font-heading text-2xl font-bold">Edit Article</h1>
          
          <form action={updatePost} className="space-y-6">
            {/* Hidden ID field for the update action */}
            <input type="hidden" name="id" value={post.id} />

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium">Title</label>
              <input 
                name="title" 
                defaultValue={post.title}
                required 
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium">Category</label>
                <select name="category" defaultValue={post.category} className="w-full rounded-lg border border-input bg-background px-4 py-2.5">
                  <option value="Research">Research</option>
                  <option value="Advocacy">Advocacy</option>
                  <option value="Community">Community</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              
              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-medium">Author</label>
                <input 
                  name="author" 
                  defaultValue={post.author}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
                />
              </div>
            </div>

            {/* Content (Excerpt removed as requested) */}
            <div>
              <label className="mb-2 block text-sm font-medium">Main Content</label>
              <textarea 
                name="content" 
                defaultValue={post.content}
                rows={15}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium">Featured Image URL</label>
              <input 
                name="image" 
                defaultValue={post.image || ""}
                placeholder="/images/wp/..."
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Save className="h-4 w-4" />
                Update Article
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
