import Search from "./Search";
import Blog from "./Blog";
import blogPosts from "../data/blogPosts.json";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default async function Blogs({ query }: { query: string }) {
  // Filter posts based on the query
  const filteredPosts = blogPosts.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(query.toLowerCase()) ||
      description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <section className="sm:max-w-xl sm:mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <Search placeholder="Search blogs..." />
        {filteredPosts.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}
