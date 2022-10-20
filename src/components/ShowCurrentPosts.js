import React from "react";
import { Link } from "react-router-dom";

const ShowCurrentPosts = (props) => {
  return (
    <div className="current-post flex items-center justify-center">
      <div className="bg-gray-300 w-full">
        <h5>Good morning Developers!</h5>{" "}
        {props.allPost.map((item, i) => {
          return (
            <div className="m-4 text-left    " key={i}>
              <Link to={`/showcurrentposts/${item.date}`}>
                <p className="bg-white text-blue-800 text-[2rem]  p-2">
                  {item.title} : read full article{" "}
                </p>
              </Link>
              <p className="text-[1.5rem] p-2">
                {item.username} wrote at: {item.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCurrentPosts;
