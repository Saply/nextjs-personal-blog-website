"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Pre from "pliny/ui/Pre";
import ZoomableImage from "../Elements/ZoomableImage";

// import in mdxComponents if want to use any React components inside the blog
const mdxComponents = {
  Image,
  pre: Pre,
  ZoomableImage
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max 
    prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg
    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
