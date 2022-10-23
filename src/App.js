import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateAPost from "./components/CreateAPost";
import ShowCurrentPosts from "./components/ShowCurrentPosts";
import { useState } from "react";
import SinglePage from "./components/SinglePage";

const App = () => {
  const [allPost, setAllPosts] = useState([]);

  return (
    <>
      {" "}
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/createapost"
            element={
              <CreateAPost allPost={allPost} setAllPosts={setAllPosts} />
            }
          />
          <Route
            path="/showcurrentposts"
            element={<ShowCurrentPosts allPost={allPost} />}
          />
          <Route
            path="/showcurrentposts/:singlepage"
            element={<SinglePage allPost={allPost} />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
