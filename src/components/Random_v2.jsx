import React from "react";
import useGif from "./useGif";

function Random() {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Tag</h1>
      <img width="500" src={gif} alt="random" />
      <button
        onClick={() => {
          fetchGif();
        }}
      >
        ANOTHER ONE
      </button>
    </div>
  );
}

export default Random;
