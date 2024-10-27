import Image from "next/image";
import profileImg from "@/public/Mr._Fresh.webp";
import { LinkedInIcon, TwitterIcon, GithubIcon } from "@/src/components/Icons";

export default function About() {
  let name = "Spaly";
  let occupation = "gaming";
  let company = "lethal";
  
  return (
    <>
      <div className="w-full mt-8 px-32 flex flex-col divide-y divide-black dark:divide-gray">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 class="w-full text-5xl font-bold leading-9 dark:text-light  underline-offset-8">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {profileImg && (
              <Image
                src={profileImg}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight dark:text-light">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-light">{occupation}</div>
            <div className="text-gray-500 dark:text-light">{company}</div>

            <div className="flex space-x-3 pt-6">
              <a
                href="https://example.com"
                className="inline-block w-6 h-6 mr-4"
              >
                <LinkedInIcon className="hover:scale-125 transition-all ease-linear duration-200" />
              </a>
              <a
                href="https://example.com"
                className="inline-block w-6 h-6 mr-4"
              >
                <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
              </a>
              <a
                href="https://example.com"
                className="inline-block w-6 h-6 mr-4"
              >
                <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
              </a>
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 ml-2.5 mr-2.5">
            Lorem ipsum qweiornweiont
          </div>
        </div>
      </div>
    </>
  );
}
