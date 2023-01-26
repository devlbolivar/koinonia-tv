import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/about"> To about</Link>
    </div>
  );
};

export default Home;
