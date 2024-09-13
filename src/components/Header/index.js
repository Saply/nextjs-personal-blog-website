import Link from "next/link";
import { GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from "../Icons";
import Logo from "./Logo";

// Add to layout.js to use same header across all routes/pages
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/projects" className="mx-2">
          Projects
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>

      <div>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedInIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};
// use <a> instead of <Link> as external website
export default Header;
