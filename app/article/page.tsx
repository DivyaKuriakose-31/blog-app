import Link from 'next/link';

async function getArticles() {
  const res = await fetch('https://6a4763b0abfcbaade11855a6.mockapi.io/posts', { cache: 'no-store' });
  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">All Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <Link key={article.id} href={`/article/${article.id}`} className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold">{article.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}