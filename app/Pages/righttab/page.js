'use client';

import { useRouter } from 'next/navigation';
import { Home, User, DollarSign } from 'lucide-react';

const BottomTabNav = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between bg-black p-4 rounded-2xl w-[90%] max-w-md shadow-lg">
      <button 
        className="flex flex-col items-center text-white"
        onClick={() => router.push('./comingsoon')}
      >
        <DollarSign size={28} />
      </button>
      <button 
        className="flex flex-col items-center text-white"
        onClick={() => window.location.reload()}
      >
        <Home size={28} />
      </button>
      <button 
        className="flex flex-col items-center text-white"
        onClick={() => router.push('./profile')}
      >
        <User size={28} />
      </button>
    </div>
  );
};

export default BottomTabNav;
