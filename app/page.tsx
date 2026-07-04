import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import BlogImage from '../components/BlogImage';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';

// SEO Metadata
export const metadata = {
  title: 'Nexus | Engineering Insights',
  description: 'Curated technical articles and deep dives into system architecture.',
};

async function getArticles() {
  const res = await fetch('https://6a4763b0abfcbaade11855a6.mockapi.io/posts', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['articles'], queryFn: getArticles });
  const articles = await getArticles();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="relative w-full min-h-screen bg-[#0a0a0a] text-white px-6 py-12 overflow-x-hidden">
        {/* Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full translate-x-[-20%] translate-y-[-20%]"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full translate-x-[20%] translate-y-[20%]"></div>
        </div>

        <div className="relative z-10">
          <section className="max-w-5xl mx-auto mb-16 text-center">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Engineering Insights.
            </h1>
            <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10">
              Curated technical articles, deep dives into system architecture, and the latest in software development.
            </p>
            <SearchBar articles={articles} />
          </section>
          
          <section className="max-w-6xl mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-300">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <div key={article.id} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition flex flex-col">
                  <BlogImage src={article.image} alt={article.title} />
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.content}</p>
                    <Link href={`/article/${article.id}`} className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </HydrationBoundary>
  );
}