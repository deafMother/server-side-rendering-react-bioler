import React from "react";

const Home = () => {
  const handleClick = (event) => {
    console.log("counting");
  };
  return (
    <div>
      <div>This is the home comp, now watching</div>
      <div>
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  );
};

export default Home;
