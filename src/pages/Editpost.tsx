import React from "react";
import { useParams } from "react-router-dom";

const Editpost = () => {
  const { id } = useParams();
  return <h1>Edit post {id}</h1>;
};

export default Editpost;
