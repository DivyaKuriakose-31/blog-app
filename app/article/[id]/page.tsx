import AuthGuard from '../../../components/AuthGuard';
import { getPostById } from '../../../lib/api';
import Link from 'next/link';

// Updated signature to correctly handle params as a Promise
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  let post;
  try {
    post = await getPostById(id);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  // Fallback if post is not found or fetch failed
  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Article not found.</h1>
        <Link href="/" className="text-blue-400 hover:underline">Return Home</Link>
      </main>
    );
  }

  return (
    <AuthGuard>
      <main className="min-h-screen bg-[#0a0a0a] text-white py-12 px-6">
        <article className="max-w-4xl mx-auto">
          <Link href="/" className="text-gray-400 hover:text-white mb-8 block transition">
            ← Back to Home
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">
              Article
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.createdAt * 1000).toLocaleDateString()}</span>
            </div>
          </div>

          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-3xl mb-10 shadow-2xl border border-gray-800" 
          />

          <div className="text-xl text-gray-300 leading-relaxed prose prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
    </AuthGuard>
  );
}