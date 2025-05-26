"use client";

import { useRouter } from "next/navigation";
import { JSX, ReactNode, useEffect, useState } from "react";
import { AppBarSkeleton, HomeSkeleton } from "../ui";

export default function AuthGuard({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null {

  // States
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);


  // UseEffects
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

if (!authorized)
    return (
      <div className="flex flex-col justify-between items-center">
        <AppBarSkeleton />
        <HomeSkeleton />
      </div>
    );

  return <>{children}</>;
}
