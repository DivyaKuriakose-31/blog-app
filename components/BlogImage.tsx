'use client'; // This tells Next.js this is a Client Component

export default function BlogImage({ src, alt }: { src: string, alt: string }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-48 object-cover"
      onError={(e) => { 
        e.currentTarget.src = "https://via.placeholder.com/400x200?text=Image+Unavailable"; 
      }}
    />
  );
}