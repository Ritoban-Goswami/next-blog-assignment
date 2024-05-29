import { promises as fs } from "fs";
import Search from "./Search";
import Blog from "./Blog";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default async function Blogs({ query }: { query: string }) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/blogPosts.json",
    "utf8"
  );
  const posts: BlogPost[] = JSON.parse(file);

  // Filter posts based on the query
  const filteredPosts = posts.filter(
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
