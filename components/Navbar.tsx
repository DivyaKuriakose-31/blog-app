'use client';
import { useState } from 'react';
import Link from 'next/link';
import UserAvatar from './UserAvatar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0a0a] text-white p-6 border-b border-gray-800">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter">
          NEXUS
        </Link>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/article" className="hover:text-gray-400">Articles</Link>
          <Link href="/auth/signin" className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-300">Sign In</Link>
          <UserAvatar />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-900 p-4 rounded-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/article" onClick={() => setIsOpen(false)}>Articles</Link>
          <Link href="/auth/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
        </div>
      )}
    </nav>
  );
}