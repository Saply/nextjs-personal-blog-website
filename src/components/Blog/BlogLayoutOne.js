import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl h-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/100 rounded-2xl z-10" />
      <Image
        src={blog.coverImage.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.coverImage.blurhashDataUrl}
        alt={blog.title}
        height={blog.coverImage.height}
        width={blog.coverImage.width}
        className="w-full h-full object-center object-cover rounded-xl -z-10 group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />
        <Link href={blog.url} className="mt-6">
          <h1 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50  group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
