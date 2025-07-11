"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Images from "next/image";

const listmenu = [
  {
    name: "Profile",
    href: "#profile",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight - 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 animate-fade-in ${
        scrolled ? "bg-white shadow-sm py-4" : "py-8"
      }`}
    >
      <nav
        className={`container mx-auto px-12 lg:px-8 flex justify-between items-center`}
      >
        <div className="flex gap-4 items-center">
          <Images
            src="/images/profile-cropped.png"
            alt="Hero Image"
            width={36}
            height={36}
            className="rounded-full bg-slate-400"
          ></Images>
          <span className="font-bold text-main font-jakarta">
            Rifki Bayu Ariyanto
          </span>
        </div>
        <ul className="md:flex flex-row gap-8 font-jakarta hidden">
          {listmenu.map((menu) => {
            const isActive = pathname === menu.href;

            return (
              <li key={menu.name}>
                <a
                  href={menu.href}
                  className={`text-main text-lg ${isActive ? "font-bold" : ""}`}
                >
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <a
            href="#contacts"
            className="px-4 font-bold text-white py-2 bg-main rounded-lg hidden md:block cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
