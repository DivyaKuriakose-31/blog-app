'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/auth/signin');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <div className="p-10 text-white">Redirecting...</div>;

  return <>{children}</>;
}