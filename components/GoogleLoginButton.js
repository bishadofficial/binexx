// components/GoogleLoginButton.js
"use client"; // Needed for client-side rendering in Next.js 15

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, logout } from "@/lib/firebase";

export default function GoogleLoginButton() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/Pages/hometab"); // Redirect to mainpage if logged in
    }
  }, [user, router]);

  return (
    <button
  onClick={user ? logout : signInWithGoogle}
  className="flex items-center px-4 py-2 bg-white text-black rounded"
>
  <img
    src="/glogo.png"
    alt="Google logo"
    className="w-6 h-6 mr-2 shadow-lg" // Adjust size and spacing as needed
  />
  {user ? "Logout" : "Sign in with Google"}
</button>

  );
}
