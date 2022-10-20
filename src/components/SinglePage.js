import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = (props) => {
  const { singlepage } = useParams();
  console.log(singlepage);

  const post = props.allPost.filter((item) => item.date === singlepage)[0];
  console.log("post", post);

  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="bg-blue-200 w-[35rem] h-[40rem] p-5 flex flex-col  gap-3  ">
        <h1 className="text-center text-[3rem]">Blog Post</h1>
        <p> Post By:</p>
        <p className="border-2 border-black p-1">{post && post.username}</p>
        <p>Title:</p>
        <p className="border-2 border-black p-1  "> {post && post.title}</p>
        <p>Blog</p>
        <p className="border-2 border-black p-1 w-[100%] overflow-hidden">
          {post && post.textarea}
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
