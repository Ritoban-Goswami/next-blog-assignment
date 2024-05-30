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
      <section className="md:max-w-xl md:min-w-[36rem] sm:mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <Search placeholder="&#128269;&nbsp;&nbsp;&nbsp;&nbsp;Search blogs..." />
        {filteredPosts.length > 0 ? (
          filteredPosts.map((blog) => <Blog key={blog.id} blog={blog} />)
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">No Results Found</h2>
            <p className="mb-2 text-light text-sm">
              We could not find any blogs matching your search term
              <strong>&quot;{query}&quot;</strong>.
              <br />
              Try searching with different keywords.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
