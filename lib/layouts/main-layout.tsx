"use client";
// Core
import { ReactNode } from "react";

// Components
import { AppBar } from "../ui";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <AppBar />
      <div>{children}</div>
    </div>
  );
}
