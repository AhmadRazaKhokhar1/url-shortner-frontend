"use client"

import { AuthGuard } from "@/lib/guards";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
