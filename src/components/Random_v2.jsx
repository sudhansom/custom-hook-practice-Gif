import React from "react";
import useGif from "./useGif";

function Random() {
  const { gif, fetchGif } = useGif();

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Tag</h1>
      <img width="500" src={gif} alt="random" />
      <button onClick={handleClick}>ANOTHER ONE</button>
    </div>
  );
}

export default Random;
