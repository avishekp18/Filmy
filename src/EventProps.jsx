import React from "react";

export const EventProps = () => {
  const handleClick = (user) => {
    alert(`hey ${user}`);
  };
  const handleMouse = () => {
    console.log("Mouse entered the div");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => {
          handleClick("binod");
        }}
        onEnterMouse={handleMouse}
      />
    </>
  );
};

const WelcomeUser = ({ onClick, onEnterMouse }) => {
  return (
    <div>
      <h1>Welcome User</h1>
      <button onClick={onClick}>Click Me</button>
      <div onMouseEnter={onEnterMouse}>Hover over me</div>
    </div>
  );
};

// Log to console
