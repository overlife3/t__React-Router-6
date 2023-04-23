import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const Blogpage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || ""; // берем из параметров параметр "post"
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  return (
    <div>
      <h1>Blog page</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="new">Add new post</Link>

      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};

export default Blogpage;
