'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/'); // Redirect to home page
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
