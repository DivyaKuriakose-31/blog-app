'use client'; // This is required for interactivity

import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar({ articles }: { articles: any[] }) {
  const [query, setQuery] = useState('');

  // Filter articles based on title or content
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search architecture, algorithms, or frameworks..."
        className="w-full p-4 pl-6 bg-[#111] border border-gray-800 rounded-full focus:outline-none focus:border-blue-500 transition shadow-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {/* Show results dropdown while typing */}
      {query && (
        <div className="absolute top-full mt-2 w-full bg-[#111] border border-gray-800 rounded-xl p-4 shadow-2xl z-50">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.id}`} className="block p-2 hover:bg-[#222] rounded text-white">
                {article.title}
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No articles found.</p>
          )}
        </div>
      )}
    </div>
  );
}