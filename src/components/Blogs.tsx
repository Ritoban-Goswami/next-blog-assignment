import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

interface BlogPost {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <section className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <Search placeholder="Search blogs..." />
        {filteredPosts.map(
          ({ id, title, date, author, description, thumbnail }) => (
            <Link key={id} href="#">
              <article className="group rounded mb-8 border-b border-[#E0E0E0] duration-150">
                <Image
                  src={thumbnail}
                  className="rounded-t mb-5 transition-all group-hover:opacity-90"
                  width={600}
                  height={300}
                  alt="blog image"
                />
                <div className="p-3">
                  <div className="relative w-max mb-2">
                    <h2 className="text-2xl font-medium">{title}</h2>
                    <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-active group-hover:w-full"></span>
                  </div>
                  <p className="mb-4">
                    {date} | <span className="text-light">{author}</span>
                  </p>
                  <p className="text-sm text-gray-700 mb-4">{description}</p>
                </div>
              </article>
            </Link>
          )
        )}
      </section>
    </main>
  );
}
