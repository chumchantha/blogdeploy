import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { id: number } }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post) {
    notFound();
  }
  return (
    <>
      <h2 className="text-4xl md:text-5xl md font-bold mb-5">{post.title}</h2>
      <p className="max-w-[640px] mx-auto leading-8 text-lg">{post.body}</p>
    </>
  );
};

export default Post;
