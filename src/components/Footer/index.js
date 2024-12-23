"use client";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetadata";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-footer m-5 sm:m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-semibold text-center text-2xl sm:text-3xl lg:text-4xl px-4">
        Get notified for new blogs
      </h3>
      <Link className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base underline underline-offset-8 decoration-accent dark:decoration-accentDark" href="/feed.xml">
        Subscribe to the RSS feed
      </Link>

      <div className="flex items-center mt-8">
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4 fill-light">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <Link href="/sitemap.xml" className="text-center underline underline-offset-2 my-3 md:my-0 text-white">
          sitemap.xml
        </Link>
        <a className="text-center underline underline-offset-2 text-white" href="https://github.com/Saply/nextjs-personal-blog-website" target="_blank">
          Website Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
