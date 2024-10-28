"use client";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from "../Icons";
import Logo from "./Logo";
import siteMetadata from "@/project files/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";

// Add to layout.js to use same header across all routes/pages
const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300 mr-8">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      
      <nav className="w-max py-3 px-6 sm:px-8 border-2 border-solid border-accent dark:border-accentDark rounded-full font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
      style={{
        top: click
        ? "1rem"
        : "-5rem",
      }}
      >
        <Link href="/projects" className="mr-2">
          Projects
        </Link>
        <Link href="/categories/all" className="mx-2.5">
          Blogs
        </Link>
        <Link href="/about" className="mx-2.5">
          About
        </Link>
        <button
          className="ml-2"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          <SunIcon />
        </button>
      </nav>

      <nav className="w-max py-3 px-8 border-2 border-solid border-accent dark:border-accentDark rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/projects" className="mr-2">
          Projects
        </Link>
        <Link href="/categories/all" className="mx-2.5">
          Blogs
        </Link>
        <Link href="/about" className="mx-2.5">
          About
        </Link>
        <button
          className="ml-2"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          <SunIcon />
        </button>
      </nav>

      <div className="hidden sm:flex items-center">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedInIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://example.com"
          className="inline-block w-6 h-6 mr-4 dark:fill-light"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};
// use <a> instead of <Link> as external website
export default Header;
