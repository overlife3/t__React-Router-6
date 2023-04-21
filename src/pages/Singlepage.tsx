import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to="edit">Редактировать</Link>
        </>
      )}
    </div>
  );
};

export default Singlepage;
