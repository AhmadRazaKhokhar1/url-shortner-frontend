import { ReactNode } from "react";

export default function ScreenContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      {children}
    </div>
  );
}
