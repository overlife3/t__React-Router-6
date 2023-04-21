import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Blogpage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(useLocation());

  return (
    <div>
      <h1>Blog page</h1>
      <Link to="new">Add new post</Link>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Blogpage;
