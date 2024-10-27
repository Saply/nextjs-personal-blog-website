import { format, parseISO, formatDistanceToNow } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        <b>Published on:</b> {format(parseISO(blog.publishedAt), "EEEE, LLLL d, yyyy")}
      </time>
      <time className="m-3">
        <b>Last updated:</b> {format(parseISO(blog.updatedAt), "EEEE, LLLL d, yyyy")}
      </time>
      <div className="m-3">{blog.readingTime.text}</div>
      {/* <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link> */}
    </div>
  );
};

export default BlogDetails;
