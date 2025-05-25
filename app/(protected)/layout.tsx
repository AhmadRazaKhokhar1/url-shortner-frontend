"use client";

// Lib
import { ApolloClientProvider, AuthGuard, AuthProvider } from "@/lib";

// Core
import { ReactNode } from "react";

// Toast
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <Toaster />
      <ApolloClientProvider>
        <AuthProvider>{children}</AuthProvider>
      </ApolloClientProvider>
    </AuthGuard>
  );
}
