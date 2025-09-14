"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { LuDrama } from "react-icons/lu";
import { FaAngleDown, FaVideo, FaFolder } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsCardImage } from "react-icons/bs";
import { ImMagicWand } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { PiCompassToolBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

import { IconType } from "react-icons";

type Link = [IconType, string, string];

const Header = () => {
  return (
    <header className="flex items-start justify-between p-2">
      <div className="flex items-center gap-4">
        <LuDrama className="size-7" aria-hidden="true" />

        <div className="flex items-center gap-1.5">
          <div className="size-7 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
          <button className="flex cursor-pointer items-center gap-1.5">
            <span>benevolentrim</span>
            <FaAngleDown aria-hidden="true" />
          </button>
        </div>
      </div>
      <PrimaryNavigation />
      <div className="flex items-start gap-4 dark:text-black">
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#f6f6f6] px-2.5 py-1.5">
          <BsCardImage className="size-5" aria-hidden="true" />
          <span>Gallery</span>
        </button>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#f6f6f6] px-2.5 py-1.5">
          <BiSupport className="size-5" aria-hidden="true" />
          <span>Support</span>
        </button>
        <button
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#f6f6f6] px-2.5 py-1.5"
          aria-label="Notifications"
        >
          <IoIosNotifications className="size-5" aria-hidden="true" />
        </button>
        <ThemeToggle />
        <div className="size-7 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
      </div>
    </header>
  );
};

export default Header;

function PrimaryNavigation() {
  const [activeLink, setActiveLink] = useState(0);

  const navLinks: Link[] = [
    // [Icon, label, link]
    [GoHomeFill, "Home page", "#"],
    [BsCardImage, "Gallery", "#"],
    [FaVideo, "RecordVideo", "#"],
    [ImMagicWand, "Create magic", "#"],
    [IoPencil, "Draw", "#"],
    [PiCompassToolBold, "Map", "#"],
    [FaFolder, "Projects", "#"],
  ];
  return (
    <nav className="rounded-2xl bg-[#f6f6f6] p-1.5">
      <ul className="flex items-center gap-1.5">
        {
          // [Icon, Label][]
          navLinks.map(([Icon, label, link], idx) => (
            <li key={idx} className="flex items-center">
              <a
                href={link}
                aria-label={label}
                className={cn(
                  "block rounded-xl px-3 py-2",
                  activeLink === idx
                    ? "bg-white shadow-[1px_1px_2px_1px_#e0e0e0]"
                    : null,
                )}
                onClick={() => setActiveLink(idx)}
              >
                <Icon className="size-5 dark:text-black" aria-hidden="true" />
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#f6f6f6] px-2.5 py-1.5"
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={`Toggle ${isDarkMode ? "light" : "dark"} theme`}
    >
      {!isDarkMode ? (
        <IoMdSunny className="size-5" aria-hidden="true" />
      ) : (
        <MdDarkMode className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}
