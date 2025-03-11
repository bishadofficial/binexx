"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Apkhome from "./Intro/apkhome/page";
import { app } from "@/lib/firebase"; // Make sure this points to your Firebase config

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth]);

  useEffect(() => {
    if (user) {
      router.push("/Pages/hometab"); // Redirect if logged in
    }
  }, [user, router]);

  return <Apkhome />;
}
