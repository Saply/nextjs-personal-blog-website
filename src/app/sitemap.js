import { allBlogs } from "@/.contentlayer/generated";
import siteMetadata from "../utils/siteMetadata";

export default function sitemap() {
  // General links
  const routes = ["", "projects", "about"].map((route) => ({
    url: `${siteMetadata.siteUrl}/${route}`,
    lastModified: new Date(),
    priority: 1.0,
    changefreq: "weekly",
  }));

  // Blog links
  const blogRoutes = allBlogs.map((blog) => ({
    url: `${siteMetadata.siteUrl}/blogs/${blog._raw.flattenedPath}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    changefreq: "daily",
    priority: 0.7,
  }));

  // Categories
  const categories = [];
  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let tagNoSpace = tag.replace(" ", "-");
        if (!categories.includes(tagNoSpace)) {
          categories.push(tagNoSpace);
        }
      });
    }
  });

  const categoryRoutes = categories.map((category) => ({
    url: `${siteMetadata.siteUrl}/categories/${category}`, // Replace with your homepage
    lastModified: new Date(),
    changefreq: "daily",
    priority: 0.7,
  }));

  // Icons
  const icons = ["apple-icon.png", "icon.ico", "manifest.webmanifest"].map(
    (icon) => ({
      url: `${siteMetadata.siteUrl}/${icon}`,
      lastModified: new Date(),
      priority: 0.7,
      changefreq: "never"
    })
  );

  return [...routes, ...categoryRoutes, ...icons, ...blogRoutes];
}
