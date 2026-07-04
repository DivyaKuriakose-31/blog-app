'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const storedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    setTimeout(() => {
      if (storedUser.email === email && storedUser.password === password) {
        // Set cookie for middleware protection
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        router.push('/');
      } else {
        alert("Invalid email or password!");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <div className="w-full max-w-md bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back.</h1>
        <form onSubmit={handleSignIn} className="space-y-6 mt-8">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input name="email" type="email" className="w-full p-3 bg-[#111] border border-gray-800 rounded-xl text-white" required />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input name="password" type="password" className="w-full p-3 bg-[#111] border border-gray-800 rounded-xl text-white" required />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 rounded-xl text-white font-semibold">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <Link href="/auth/signup" className="text-blue-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}