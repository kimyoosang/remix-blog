type Post = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Array<Post>> {
  return [
    {
      slug: "mmy-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
}
