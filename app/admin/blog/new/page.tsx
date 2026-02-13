import { createPost } from "@/app/actions/blog"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-muted/30 p-8 pt-32">
      <div className="mx-auto max-w-3xl">
        
        <Link href="/admin/blog" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <h1 className="mb-6 font-heading text-2xl font-bold">Write New Article</h1>
          
          <form action={createPost} className="space-y-6">
            
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium">Title</label>
              <input 
                name="title" 
                required 
                placeholder="e.g. The Future of Livestock in Nigeria"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium">Category</label>
                <select name="category" className="w-full rounded-lg border border-input bg-background px-4 py-2.5">
                  <option>Research</option>
                  <option>Advocacy</option>
                  <option>Community</option>
                  <option>Education</option>
                </select>
              </div>
              
              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-medium">Author</label>
                <input 
                  name="author" 
                  defaultValue="Farhan Rhidor Akorede"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="mb-2 block text-sm font-medium">Short Excerpt (SEO)</label>
              <textarea 
                name="excerpt" 
                rows={2}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
              />
            </div>

            {/* Content (Simple Text Area for now) */}
            <div>
              <label className="mb-2 block text-sm font-medium">Main Content</label>
              <textarea 
                name="content" 
                rows={12}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium">Featured Image URL</label>
              <input 
                name="image" 
                placeholder="/images/wp/..."
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:border-primary focus:outline-none" 
              />
              <p className="mt-1 text-xs text-muted-foreground">Enter a direct link to an image.</p>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Save className="h-4 w-4" />
                Publish Article
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}