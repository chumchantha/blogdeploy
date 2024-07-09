import Post from "@/app/components/Post";
import { Suspense } from "react";

async function DynamicPage({ params }: { params: { id: string } }) {
  return (
    <main className="text-center pt-32 px-5">
      <Suspense fallback="loading...">
        <Post params={params} />
      </Suspense>
    </main>
  );
}

export default DynamicPage;
