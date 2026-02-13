'use server'

import prisma from '@/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'



// Fetch all posts
export async function getPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })
}

// Fetch a single post by Slug (for public reading)
// app/actions/blog.ts

export async function getPostBySlug(slug: string) {
  return await prisma.post.findFirst({
    where: { slug },
  })
}

// Fetch a single post by ID (for editing)
export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
  })
}

// Create Post (Auto-generates excerpt)
export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  
  // Auto-generate excerpt from the first 120 characters of content
  const autoExcerpt = content.substring(0, 120).trim() + '...'

  await prisma.post.create({
    data: {
      title,
      slug,
      excerpt: autoExcerpt,
      content,
      category: formData.get('category') as string,
      author: formData.get('author') as string,
      image: formData.get('image') as string,
      published: true,
    },
  })

  revalidatePath('/blog')
  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}

// Update Post
export async function updatePost(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  
  // We don't update the slug on edit to avoid breaking existing links
  const autoExcerpt = content.substring(0, 120).trim() + '...'

  await prisma.post.update({
    where: { id },
    data: {
      title,
      excerpt: autoExcerpt,
      content,
      category: formData.get('category') as string,
      author: formData.get('author') as string,
      image: formData.get('image') as string,
    },
  })

  revalidatePath('/blog')
  revalidatePath(`/blog/${title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`) // Revalidate the specific post
  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}

// Delete Post
export async function deletePost(id: string) {
  await prisma.post.delete({ where: { id } })
  revalidatePath('/blog')
  revalidatePath('/admin/blog')
}