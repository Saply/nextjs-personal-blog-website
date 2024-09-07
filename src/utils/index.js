import { compareDesc, parseISO } from "date-fns";

// get all values of class functions, filter by boolean to reject falsy values (null, empty string, undefined)
export const cx = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};

// Sort by age
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
