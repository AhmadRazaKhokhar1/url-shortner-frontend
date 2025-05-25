"use client";

// Guards
import { AuthGuard } from "@/lib/guards";

// Providers
import { AuthProvider } from "@/lib/providers";

// Core
import { ReactNode } from "react";

// Toast
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <Toaster />
      <AuthProvider>{children}</AuthProvider>
    </AuthGuard>
  );
}
