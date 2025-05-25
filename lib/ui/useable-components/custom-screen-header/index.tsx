import { ICustomScreenHeaderProps } from "@/utils";

export default function ScreenHeader({ title }: ICustomScreenHeaderProps) {
  return (
    <h1 className="font-black text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer m-2 p-4">
      {title}
    </h1>
  );
}