import Link from 'next/link';
import UserAvatar from '../components/UserAvatar';


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800 bg-[#0a0a0a] text-white">
      <Link href="/" className="text-2xl font-extrabold tracking-tighter">
        NEXUS
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/" className="hover:text-black">Home</Link>
        <Link href="/article" className="hover:text-black">Articles</Link>
        <Link href="/auth/signin" className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
          Sign In
        </Link>
        <UserAvatar />
        
      </div>
    </nav>
  );
}