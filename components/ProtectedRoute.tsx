"use client";

import { useAuth } from "@/context/Authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/"); 
    }
  }, [user, router]);

  if (!user) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;
