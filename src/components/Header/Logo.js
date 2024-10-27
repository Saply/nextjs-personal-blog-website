import Link from "next/link";
import Image from "next/image";
// must be in public folder
import profileImg from "@/public/Mr._Fresh.webp"
const Logo = () => {
  return <Link href="/about" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
          <Image src={profileImg} alt="cool-logo" className="w-full h-auto rounded-full"/>
      </div>
      <span className="font-bold text-xl">Cool Blog</span>
    </Link>;
};

export default Logo;
