import { Hero } from "@/components/Hero";
import { Posts } from "@/components/Posts";
import { fetchPosts } from "@/libs/fetchPosts";

export default async function Home() {
  const { posts, error } = await fetchPosts(3);
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Hero />
      <Posts posts={posts} error={error} />
    </>
  );
}
