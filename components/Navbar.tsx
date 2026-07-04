import Link from 'next/link';
import UserAvatar from '../components/UserAvatar';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800 bg-[#0a0a0a] text-white">
      <Link href="/" className="text-2xl font-extrabold tracking-tighter">
        NEXUS
      </Link>
      
      {/* Container hidden on mobile, flex on desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/article" className="hover:text-gray-400 transition">Articles</Link>
        <Link href="/auth/signin" className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-300 transition">
          Sign In
        </Link>
        <UserAvatar />
      </div>
    </nav>
  );
}