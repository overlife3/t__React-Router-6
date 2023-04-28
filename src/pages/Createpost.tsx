import React from "react";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
import NewPost from "../components/NewPost";
import { useAuth } from "../hook/useAuth";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();
  return (
    <div>
      <h1>Create post</h1>
      <NewPost submitting={navigation.state === "submitting"} />
      <button onClick={() => signout(() => navigate("/"))}>Log out</button>
    </div>
  );
};

const createPost = async ({ title, body, userId }: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId }),
  });
  const newPost = await res.json();
  return newPost;
};

export const createPostAction = async ({ request }: any) => {
  const formData = await request.formData();
  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  };
  const post = await createPost(newPost);
  console.log(post);

  return redirect("/posts/" + post.id);
};

export default Createpost;
