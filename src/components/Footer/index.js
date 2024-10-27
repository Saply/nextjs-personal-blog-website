"use client";
import { useForm } from "react-hook-form";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/project files/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-footer dark:bg-accentDark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center text-4xl px4">
        Subscribe for more no quality content
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        or follow using a RSS feed reader if you want
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 minw-[384px] flex items-stretch bg-light p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input type="submit" className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"/>
      </form>
      <div className="flex items-center mt-8">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedInIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4 fill-light">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <Link href="/sitemap.xml" className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with NextJS and TailwindCSS with Contentlayer2
        </div>
      </div>
    </footer>
  );
};

export default Footer;
