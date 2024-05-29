import Link from "next/link";
import BlogThumbnail from "./BlogThumbnail";
import { BlogPost } from "./BlogsList";

interface Blog {
  blog: BlogPost;
}

const Blog = ({ blog }: Blog) => {
  return (
    <Link href="#">
      <article className="group mb-5 sm:mb-8 py-3 sm:py-6 border-b-2 border-[#E0E0E0] dark:border-[#484848]">
        <BlogThumbnail thumbnail={blog.thumbnail} />
        <div className="relative w-max mb-4">
          <h2 className="text-xl sm:text-2xl font-medium">{blog.title}</h2>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 rounded bg-active group-hover:w-full"></span>
        </div>
        <p className="mb-4 w-max divide-x-2 text-sm sm:text-base">
          <span className="pr-2 sm:pr-5">{blog.date}</span>
          <span className="pl-2 sm:pl-5 text-light">{blog.author}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mb-4">
          {blog.description}
        </p>
      </article>
    </Link>
  );
};

export default Blog;
