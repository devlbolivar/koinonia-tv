import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      User: <h3>{id}</h3>
    </div>
  );
};

export default User;
