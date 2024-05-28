import { promises as fs } from "fs";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default async function Blogs() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/blogPosts.json",
    "utf8"
  );
  const posts: BlogPost[] = JSON.parse(file);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <section className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded p-3 mb-8 border-b border-[#E0E0E0] hover:shadow-lg"
          >
            <Image
              src={post.thumbnail}
              className="rounded mb-5"
              width={600}
              height={300}
              alt="blog image"
            />
            <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
            <p className="mb-4">
              {post.date} | <span className="text-light">{post.author}</span>
            </p>
            <p className="text-sm text-gray-700 mb-4">{post.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
