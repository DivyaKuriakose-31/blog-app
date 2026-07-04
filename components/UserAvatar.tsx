'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function UserAvatar() {
  const [initial, setInitial] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    const nameToUse = storedUser.name || storedUser.email || 'U';
    setInitial(nameToUse.charAt(0).toUpperCase());

    // Close menu if clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/auth/signin');
  };

  if (!initial) return null;

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg hover:ring-2 hover:ring-blue-400 transition-all outline-none"
      >
        {initial}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-[#111] border border-gray-800 rounded-xl shadow-xl p-2 z-50 animate-in fade-in zoom-in duration-200">
          <button 
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}