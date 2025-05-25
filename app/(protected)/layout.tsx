"use client";

// Lib
import { ApolloClientProvider, AuthGuard, AuthProvider, MainLayout } from "@/lib";


// Core
import { ReactNode } from "react";

// Toast
import { Toaster } from "react-hot-toast";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <Toaster />
      <ApolloClientProvider>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </ApolloClientProvider>
    </AuthGuard>
  );
}
