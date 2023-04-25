import React, { useEffect, useRef, useState, Suspense } from "react";
import {
  Link,
  LoaderFunction,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const Blogpage = () => {
  const { posts } = useLoaderData() as any;

  // const [posts, setPosts] = useState<any[]>([]);
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

      {/* будет показывать компонент, который находится в fallback, до тех пор пока указанные данные не будут загружены */}
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* В компоненте Await генерируем функцию */}
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {console.log(resolvedPosts)}
              {resolvedPosts
                .filter(
                  (post: any) =>
                    post.title.includes(postQuery) && post.id >= startsFrom
                )
                .map((post: any) => (
                  <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                  </Link>
                ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

export const blogLoader: LoaderFunction = async () => {
  //можно было и без defer. Defer нужен чтобы  разделять сущности
  return {
    // возвращает вместо данных промисс, который выполнится, когда выполнится запрос
    posts: getPosts(),
  };
};

export default Blogpage;
