import Link from "next/link";
import Post from "./Post";

export const Posts = ({ posts, error }) => {
  if (error) return <p className="text-red-500">Error: {error}</p>;
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
          //   <li
          //     className="border rounded-xl px-5 py-8 flex flex-col justify-between items-center border-burntSienna/20 md:border-burntSienna md:pb-8 md:rounded-b-xl md:border-x md:border-b"
          //     key={post.id}
          //   >
          //     <div className="w-full">
          //       <h2 className="text-base font-semibold mb-6 line-clamp-3 text-center w-full md:text-xl">
          //         {post.title.rendered}
          //       </h2>
          //       <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          //         {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
          //       </p>
          //       <p className="text-xs text-gray-500">
          //         📅 {new Date(post.date).toLocaleDateString()}
          //       </p>

          //       {post._embedded?.author?.[0] && (
          //         <div className="flex items-center gap-3 mt-4">
          //           <img
          //             src={post._embedded.author[0].avatar_urls[48]}
          //             alt={post._embedded.author[0].name}
          //             className="w-12 h-12 rounded-full"
          //           />
          //           <div className="flex flex-col text-center">
          //             <a
          //               href={post._embedded.author[0].link}
          //               target="_blank"
          //               rel="noopener noreferrer"
          //               className="text-sm font-medium text-burntSienna hover:underline"
          //             >
          //               {post._embedded.author[0].name}
          //             </a>
          //           </div>
          //         </div>
          //       )}
          //     </div>
          //     <Link
          //       href={post.link}
          //       className="text-xs flex justify-center items-center mt-8 py-2.5 px-8 rounded-full text-burntSienna transition-all duration-300 hover:shadow-down md:text-sm md:py-4 md:px-8"
          //       target="_blanck"
          //     >
          //       Read More →
          //     </Link>
          //   </li>
          <Post post={post} />
        ))}
      </ul>
    </div>
  );
};
