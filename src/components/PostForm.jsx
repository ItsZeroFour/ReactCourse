import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        // value={post.title}
        onchange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Title text"
      />
      {/* неупровляемый/Неконтролируемый компонент */}
      <MyInput
        // value={post.body}
        onchange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Description text"
      />
      <MyButton onClick={addNewPost}>Push</MyButton>
    </form>
  );
};

export default PostForm;
