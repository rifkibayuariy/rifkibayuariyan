"use client";

import { useState, useEffect } from "react";
import Images from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const listmenu = [
  {
    name: "Profile",
    href: "#profile",
  },
  {
    name: "Experience",
    href: "#experience",
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
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
        className={`w-full px-8 md:px-32 xl:px-16 2xl:px-32 flex justify-between items-center`}
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
        <ul className="xl:flex flex-row gap-8 font-jakarta hidden">
          {listmenu.map((menu) => {
            return (
              <li key={menu.name}>
                <a href={menu.href} className={`text-main text-lg`}>
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <a
            href="#contacts"
            className="px-4 font-bold text-white py-2 bg-main rounded-xl hidden md:block cursor-pointer"
          >
            Let&apos;s Talk
          </a>
          <div className="md:hidden relative">
            <button className="text-main cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="xl" />
            </button>
            {menuOpen && (
              <div className="absolute mt-4 right-0 px-8 py-4 rounded-lg bg-white/30 backdrop-filter backdrop-blur-lg border border-white/30">
                <ul className="flex flex-col gap-3 font-jakarta md:hidden">
                  {listmenu.map((menu) => {
                    return (
                      <li key={menu.name}>
                        <a
                          href={menu.href}
                          className={`text-main text-md`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {menu.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
