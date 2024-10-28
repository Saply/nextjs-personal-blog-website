import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const titles = params.slug.replaceAll("-", " ").split(" ");
  for (let i = 0; i < titles.length; i++) {
    titles[i] = titles[i][0].toUpperCase() + titles[i].substr(1);
  }
  let modifiedTitles = titles.join(" ");

  return {
    title: `${modifiedTitles} Blogs`,
    description: `Check out more blogs about ${
      params.slug === "all" ? "random stuff" : params.slug
    }`,
  };
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });
  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();
  // Step 2: Filter blogs based on the current category (params.slug)
  const blogs = allBlogs.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-dark border">
      <div className="px-32 flex flex-col border border-purple">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">Check out my other posts</span>
      </div>
      <Categories
        categories={allCategories}
        currentSlug={params.slug}
        className="w-full divide-y divide-gray"
      />

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
