import prisma from "@/lib/db";
import Link from "next/link";

const PostsLists = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const posts = await prisma.post.findMany();

  return (
    <ul className="flex flex-col gap-4 text-lg">
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsLists;
