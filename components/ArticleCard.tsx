export default function ArticleCard({ post }: { post: any }) {
  return (
    <div className="p-0 border border-gray-800 rounded-2xl bg-[#111] hover:border-blue-500 transition-colors duration-300 overflow-hidden">
      
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover rounded-t-2xl" 
      />
      
      {/* The rest of your card content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
        <p className="text-gray-400 text-sm mb-4">{post.content}</p>
        <a href={`/article/${post.id}`} className="text-blue-400 font-medium hover:underline">
          Read Article →
        </a>
      </div>
    </div>
  );
}