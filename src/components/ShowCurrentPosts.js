import React from "react";

const ShowCurrentPosts = (props) => {
  return (
    <div>
      ShowCurrentPosts{" "}
      {props.allPost.map((item, i) => {
        return <p key={i}>{item.username}</p>;
      })}
    </div>
  );
};

export default ShowCurrentPosts;
