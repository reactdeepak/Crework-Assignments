import React from "react";
import { useLocation } from "react-router-dom";
const Landing = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Welcome User {state.key}</h1>
    </div>
  );
};

export default Landing;
