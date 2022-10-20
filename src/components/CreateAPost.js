import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAPost = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    title: "",
    textarea: "",
    date: undefined,
  });

  const submitHandle = (e) => {
    e.preventDefault();
    navigate("/showcurrentposts");

    console.log(data);

    props.setAllPosts([...props.allPost, data]);
  };

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      date: new Date().toISOString(),
    });
  };

  // console.log(data);
  return (
    <div className="createPost">
      <form onSubmit={submitHandle} className="form-post">
        <label htmlFor="">
          Username:
          <input
            value={data.username}
            onChange={inputHandler}
            type="text"
            name="username"
          />
        </label>
        <label htmlFor="">
          Title:
          <input
            value={data.title}
            onChange={inputHandler}
            name="title"
            type="text"
          />
        </label>
        <label htmlFor="">
          {" "}
          Content:
          <textarea
            onChange={inputHandler}
            name="textarea"
            id=""
            cols="30"
            rows="10"
            value={data.textarea}
          ></textarea>
        </label>
        <button type="submit">Create a post</button>
      </form>
    </div>
  );
};

export default CreateAPost;
