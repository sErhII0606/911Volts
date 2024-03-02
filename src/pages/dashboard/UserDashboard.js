import React from "react";

import { useSelector } from "react-redux";
const UserDashboard = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      <h2>{`Hello, ${user.userName}`}</h2>
    </div>
  );
};

export default UserDashboard;
