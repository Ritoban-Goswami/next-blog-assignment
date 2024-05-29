import Blogs from "@/components/Blogs";

interface SearchParams {
  query?: string;
}

interface HomeProps {
  searchParams?: SearchParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const query = searchParams?.query || "";
  return <Blogs query={query} />;
}
