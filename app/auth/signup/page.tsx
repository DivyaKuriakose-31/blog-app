'use client';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    // Save name, email, and password
    localStorage.setItem('registeredUser', JSON.stringify({ name, email, password }));
    
    router.push('/auth/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-6">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Create an account.</h2>
        <p className="text-gray-400 mb-8">Join the community to start reading and writing.</p>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input name="name" type="text" className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-lg" placeholder="John Doe" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-lg" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input name="password" type="password" className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-lg" placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition font-bold py-3 rounded-lg mt-4">
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account? <a href="/auth/signin" className="text-blue-400 hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
}