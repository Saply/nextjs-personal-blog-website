import { format, parseISO, formatDistanceToNow } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      <time className="m-3">
        <b>Published on:</b> {format(parseISO(blog.publishedAt), "EEEE, LLLL d, yyyy")}
      </time>
      <time className="m-3">
        <b>Last updated:</b> {format(parseISO(blog.updatedAt), "EEEE, LLLL d, yyyy")}
      </time>
      <div className="m-3">{blog.readingTime.text}</div>
    </div>
  );
};

export default BlogDetails;
