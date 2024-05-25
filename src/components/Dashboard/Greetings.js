import React from "react";

const Greetings = ({ user }) => {
  return (
    <div>
      <h2>{`Hello, ${user.LastName} ${user.FirstName}`}</h2>
    </div>
  );
};

export default Greetings;
