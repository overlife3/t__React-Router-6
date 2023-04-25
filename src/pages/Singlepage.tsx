import { Suspense } from "react";
import {
  useParams,
  Link,
  useNavigate,
  LoaderFunction,
  useLoaderData,
  Await,
  useAsyncValue,
  defer,
} from "react-router-dom";

const Post = () => {
  const post = useAsyncValue() as any;
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue() as any;

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment: any) => (
        <>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>

          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
};

const Singlepage = () => {
  const { id, post, comments } = useLoaderData() as any;
  const navigate = useNavigate();

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
          <Suspense fallback={<h2>Post is loading...</h2>}>
            <Await resolve={post} children={<Post />} />
          </Suspense>
          <Suspense fallback={<h2>Comments is loading...</h2>}>
            <Await resolve={comments} children={<Comments />} />
          </Suspense>
          <Link to="edit">Редактировать</Link>
        </>
      )}
    </div>
  );
};

async function getPostById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

export const postLoader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  return defer({ id, post: getPostById(id), comments: getCommentsByPost(id) });
};

export default Singlepage;
