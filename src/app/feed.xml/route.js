import { allBlogs } from "@/.contentlayer/generated";
import { sortBlogs } from "@/src/utils";
import siteMetadata from "@/src/utils/siteMetadata";
//     <media:thumbnail width="240" height="135" url="${siteMetadata.siteUrl}${blog.coverImage.filePath.replace("../public", "")}"/>
const generateRssItem = (blog) => `
  <item>
    <guid>${siteMetadata.siteUrl}/blogs/${blog._raw.flattenedPath}</guid>
    <title>${blog.title}</title>
    <link>${siteMetadata.siteUrl}/blogs/${blog._raw.flattenedPath}</link>
    ${blog.description && `<description>${blog.description}</description>`}
    <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>

    <media:content height="648" medium="image" type="image/jpeg" url="${siteMetadata.siteUrl}${blog.coverImage.filePath.replace("../public", "")}" width="1152"></media:content>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${blog.tags && blog.tags.map((t) => `<category>${t}</category>`).join("")}

  </item>
`;
//  xmlns:media="http://search.yahoo.com/mrss/
export async function GET() {
  const sortedBlogs = sortBlogs(allBlogs);

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
      <channel>
        <title>${siteMetadata.title}</title>
        <link>${siteMetadata.siteUrl}/categories/all</link>
        <description>${siteMetadata.description}</description>
        <language>${siteMetadata.language}</language>
        <lastBuildDate>${new Date(sortedBlogs[0].publishedAt).toUTCString()}</lastBuildDate>
        <atom:link rel="self" href="${siteMetadata.siteUrl}/feed.xml" type="application/rss+xml"/>
          ${sortedBlogs.map((blog) => generateRssItem(blog)).join("")}
      </channel>
    </rss>
    `;

  return new Response(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
