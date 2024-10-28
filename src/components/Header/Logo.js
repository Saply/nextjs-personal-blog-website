import Link from "next/link";
import Image from "next/image";
// must be in public folder
import profileImg from "@/public/Mr._Fresh.webp"
const Logo = () => {
  return <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md:mr-4">
          <Image src={profileImg} alt="cool-logo" className="w-full h-auto rounded-full"/>
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl tracking-tight">Cool Blog</span>
    </Link>;
};

export default Logo;
