"use client";

import { useRouter } from "next/navigation";
import { JSX, ReactNode, useEffect, useState } from "react";
import { AppBarSkeleton } from "../ui";

export default function AuthGuard({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <AppBarSkeleton />;

  return <>{children}</>;
}
