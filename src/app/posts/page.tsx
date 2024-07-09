import Link from "next/link";
import PostsLists from "../components/PostsLists";
import { Suspense } from "react";
import Form from "../components/Form";

const Posts = async () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl md font-bold mb-5">All Posts</h1>

      <Suspense fallback="loading...">
        <PostsLists />
      </Suspense>
    </main>
  );
};

export default Posts;
