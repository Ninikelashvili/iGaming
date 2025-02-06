import Link from "next/link";

const Post = ({ post }) => {
  return (
    <li className="border rounded-xl mt-5 px-5 pb-8 flex flex-col justify-between items-center border-burntSienna/20 md:border-burntSienna md:rounded-t-none md:border-t-0 md:pb-8 md:rounded-b-xl md:border-x md:border-b">
      <div className="w-full">
        {post._embedded?.author?.[0] && (
          <div className="flex flex-col items-center mt-8 mb-3 md:mb-0 md:mt-0 md:transform md:-translate-y-10">
            <img
              src={post._embedded.author[0].avatar_urls[48]}
              alt={post._embedded.author[0].name}
              className="w-12 h-12 rounded-full mb-3"
            />
            <div className="flex flex-col text-center">
              <Link
                href={post._embedded.author[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-burntSienna hover:underline"
              >
                {post._embedded.author[0].name}
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-px">
              {new Date(post.date).toLocaleDateString("ka-GE")}
            </p>
          </div>
        )}
        <h2 className="text-base font-semibold mb-6 line-clamp-3 text-center w-full md:text-xl">
          {post.title.rendered}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-center">
          {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>
      <Link
        href={post.link}
        className="text-xs flex justify-center items-center mt-8 py-2.5 px-8 rounded-full text-burntSienna transition-all duration-300 hover:shadow-down md:text-sm md:py-4 md:px-8"
        target="_blanck"
      >
        Read More →
      </Link>
    </li>
  );
};

export default Post;
