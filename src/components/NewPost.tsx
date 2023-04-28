import { useRef } from "react";
import { Form } from "react-router-dom";

interface Props {
  submitting: any;
}

const NewPost = ({ submitting }: Props) => {
  return (
    <Form action="/posts/new" method="POST">
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Body:
        <input type="text" name="title" />
      </label>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" name="Add post" disabled={submitting} />
    </Form>
  );
};

export default NewPost;
