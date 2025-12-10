"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { id: number; title: string }[] = [
    { id: 1, title: "About" },
    { id: 2, title: "Read more" },
    { id: 3, title: "blah blah" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/40 dark:bg-black/30 backdrop-blur-lg shadow-lg py-5 mt-5 mx-5 rounded-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div
        className="
          flex items-center justify-between
          px-6 md:px-10
        "
      >
        {/* LOGO */}
        <div className="logo font-bold text-3xl bg-gray-400/50 p-2 px-5">
          LOGO
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-12 text-blue-500 font-semibold">
          {navLinks.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-white px-8 py-2 font-semibold text-lg rounded-lg shadow-xl">
            Sign in
          </button>

          {/* MOBILE MENU*/}
          <button className="md:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
