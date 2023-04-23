import React, { useState } from "react";
type Props = {
  postQuery: string;
  latest: boolean;
  setSearchParams: any;
};

interface IFormState {
  search: string;
  latest: boolean;
}

const BlogFilter = ({ postQuery, latest, setSearchParams }: Props) => {
  const [formState, setFormState] = useState<IFormState>({
    search: postQuery,
    latest: latest,
  });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const params: { post: string; latest?: "false" | "true" } = {
      post: "",
    };
    if (formState.search.length) params.post = formState.search;
    if (formState.latest) params.latest = `${formState.latest}`;
    setSearchParams(params);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={formState.search}
        onChange={(e) => {
          setFormState((formState) => ({
            ...formState,
            search: e.target.value,
          }));
        }}
      />
      <label style={{ padding: "0 1rem" }}>
        <input
          type="checkbox"
          name="latest"
          checked={formState.latest}
          onChange={(e) => {
            setFormState((formState) => ({
              ...formState,
              latest: e.target.checked,
            }));
          }}
        />{" "}
        New only
      </label>
      <input type="submit" value="search" />
    </form>
  );
};

export default BlogFilter;
