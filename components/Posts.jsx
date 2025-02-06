import Post from "./Post";
import { BadReq } from "./BadReq";

export const Posts = ({ posts, error }) => {
  if (error) return <BadReq message={error} />;

  return (
    <div className="container mx-auto pt-10 pb-40 px-4">
      <div className="flex flex-col items-center text-center md:py-10">
        <span className="uppercase space-x-2 tracking-tight text-burntSienna">
          recent
        </span>
        <h2 className="uppercase font-bold text-xl">blog posts</h2>
      </div>
      <ul className="grid gap-10 grid-cols-1 md:mt-10 md:grid-cols-3 md:gap-6">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </div>
  );
};
