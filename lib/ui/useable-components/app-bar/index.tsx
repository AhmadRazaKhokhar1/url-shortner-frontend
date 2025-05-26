"use client";
import Link from "next/link";
// Hooks

// Icons
import { DiGithub } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";

export default function AppBar() {
  return (
    <nav
      className={` top-0 left-0 right-0 z-50 transition-all duration-500 shadow-md shadow-slate-400`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 b">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Tiny URL
            </span>
          </Link>

          {/* Profile and Social Links */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/AhmadRazaKhokhar1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <DiGithub size={32} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-raza-khokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <FiLinkedin size={32} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="relative group">
              <img
                src="https://avatars.githubusercontent.com/u/137413638?v=4"
                alt="Ahmad Raza Khokhar"
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition-all duration-300"></div>

              <div className="absolute top-12 right-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-max border border-white/20">
                <p className="text-sm font-semibold text-gray-800">
                  Ahmad Raza Khokhar
                </p>
                <p className="text-xs text-gray-600">
                  Software Engineer | MERN | React Native
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
    </nav>
  );
}
