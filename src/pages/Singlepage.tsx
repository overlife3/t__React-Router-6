import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Singlepage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<any>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const goBack = () => navigate(-1); // можно устанавливать положительные числа, тогда перемещение по истории будет происходить вперед
  const goHome = () => navigate("/", { replace: true }); // если нужна переадресация, т.е. не нужно записывать в историю преход, то replace: true.
  //так же в опциях етсь state, в который можно положить какие-то данные, эти данные можно использовать там, куда перешли
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {/* Bad approach */}
      <button onClick={goHome}>Go home</button>

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
