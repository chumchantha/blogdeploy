import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Form from "../components/Form";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

const CreatePost = async () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-posts");
  // }

  return (
    <main className="text-center pt-32 px-5">
      <h2 className="text-4xl md:text-5xl md font-bold mb-8">Create Post</h2>

      <Form />

      <LogoutLink className="text-bold bg-blue-700 text-white px-4 rounded-md py-2 shadow-md">
        Logout
      </LogoutLink>
    </main>
  );
};

export default CreatePost;
