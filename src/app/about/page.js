import Image from "next/image";
import profileImg from "@/public/banner.jpg";
import { LinkedInIcon, TwitterIcon, GithubIcon } from "@/src/components/Icons";

export default function About() {
  return (
    <>
      <div className="w-full mt-2 sm:mt-6 md:mt-10 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col divide-y divide-black dark:divide-gray">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 class="w-full text-2xl md:text-4xl font-bold tracking-tight text-dark dark:text-light">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight dark:text-light">
              Spaly
            </h3>
            <div className="text-gray-500 dark:text-light">broke college student</div>
            <div className="text-gray-500 dark:text-light">woefully unemployed</div>

            <div className="flex space-x-3 pt-6">
              <a href="https://example.com" className="inline-block w-6 h-6">
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
                className="inline-block w-6 h-6 mr-4 dark:fill-light"
              >
                <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
              </a>
            </div>
          </div>
          <div className="prose max-w-none pb-4 pt-8 dark:prose-invert xl:col-span-2 text-justify text-dark dark:text-white">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Semper curae
              bibendum sit velit ut iaculis facilisi elit. Mi penatibus inceptos
              fringilla egestas varius morbi nunc vel. Maximus blandit dapibus
              magnis; placerat inceptos in. Sodales mi aliquet urna; auctor
              sollicitudin tortor. Erat semper non elit consectetur nisl
              ridiculus sagittis. Posuere a arcu magnis vel ridiculus ex conubia
              vel mattis.
            </p>

            <p>
              Vel curae porta maximus, semper hendrerit tempor. Mollis quam est
              tristique viverra bibendum. Commodo hendrerit donec aliquam
              curabitur porttitor. Leo fames odio porttitor at mauris habitasse
              taciti inceptos. Lorem amet quam pharetra curabitur ac aliquet! Id
              eleifend risus ultrices nulla mi semper. Eleifend vestibulum nec
              elit quam lobortis. Dictumst vestibulum imperdiet consequat tempus
              phasellus sem. Lacinia interdum maecenas tortor maecenas nisi;
              pharetra potenti.
            </p>

            <p>
              Lobortis consectetur dolor rutrum luctus montes. Semper interdum
              magna ad vestibulum natoque commodo lacinia risus consectetur.
              Quis tempus parturient vivamus; netus ridiculus id. Scelerisque
              nulla sodales ad eget nostra purus ullamcorper quam velit. Quis
              nostra dictumst maecenas tempor feugiat lacinia suspendisse proin.
              Purus bibendum per nulla molestie ipsum mattis in eleifend.
              Nascetur torquent adipiscing orci taciti diam aliquam? Mattis
              habitasse vitae, blandit morbi scelerisque nulla ac primis.
              Posuere eu cubilia tempus adipiscing suspendisse purus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
