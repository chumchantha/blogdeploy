import { createPost } from "@/action/actions";
import React from "react";

const Form = () => {
  return (
    <form
      action={createPost}
      className="max-w-[600px] mx-auto flex flex-col justify-center gap-4 mb-8"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        className="h-full shadow-lg rounded-md px-8 py-2"
      />
      <textarea
        name="body"
        placeholder="Body for new post"
        rows={6}
        required
        className="h-64 shadow-lg rounded-md px-8 py-2"
      />
      <button className="text-bold bg-blue-700 text-white px-4 rounded-md py-2 shadow-md">
        Submit
      </button>
    </form>
  );
};

export default Form;
