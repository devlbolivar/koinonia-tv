import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      Dashboard <button onClick={handleClick}>Logout</button>
      <Link to="welcome">Say welcome</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
