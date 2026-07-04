'use client';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear the authentication flag
    localStorage.removeItem('isLoggedIn');
    // Redirect to sign in page
    router.push('/auth/signin');
  };

  return (
    <button 
      onClick={handleSignOut}
      className="text-gray-400 hover:text-white transition px-4 py-2 text-sm border border-gray-800 rounded-full hover:border-red-500 hover:bg-red-900/10"
    >
      Sign Out
    </button>
  );
}