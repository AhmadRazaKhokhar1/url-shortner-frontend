"use client"

// Providers
import { AuthProvider } from "@/lib/providers";

// Core
import { ReactNode } from "react";

// Toast
import { Toaster } from "react-hot-toast";

export default function UnProtectedLayout({children}:{children:ReactNode}) {
  return<AuthProvider> <Toaster />{children}</AuthProvider>
};