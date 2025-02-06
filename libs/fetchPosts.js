// export async function fetchPosts(limit = 4) {
//   try {
//     const res = await fetch(
//       `https://wordpress.org/news/wp-json/wp/v2/posts?per_page=${limit}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch posts");
//     }

//     const data = await res.json();
//     return { posts: data, error: null };
//   } catch (error) {
//     return { posts: [], error: error.message };
//   }
// }

export async function fetchPosts(limit = 4) {
  try {
    const res = await fetch(
      `https://wordpress.org/news/wp-json/wp/v2/posts?per_page=${limit}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return { posts: data, error: null };
  } catch (error) {
    return { posts: [], error: error.message };
  }
}
