import React, { useState } from "react";
import useGif from "./useGif";

function Tag() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Tag</h1>
      <img width="500" src={gif} alt="random" />
      <input
        type="text"
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchGif(tag);
        }}
      >
        ANOTHER ONE
      </button>
    </div>
  );
}

export default Tag;
