import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="navUl">
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="createapost">
          {" "}
          <li>Create A Post</li>
        </Link>
        <Link to="showcurrentposts">
          {" "}
          <li>Show Current Posts</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
