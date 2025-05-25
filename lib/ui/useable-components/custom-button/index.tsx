import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function CustomButton({
  title,
  ...props
}: { title: string } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className="w-[25%] my-4 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
    >
      {title}
    </button>
  );
}
