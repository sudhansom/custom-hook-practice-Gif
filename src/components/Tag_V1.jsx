import axios from "axios";
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function Tag_V1() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    console.log(data.data.images.downsized_large.url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = (tag) => {
    fetchGif(tag);
  };

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
      <button onClick={handleClick}>ANOTHER ONE</button>
    </div>
  );
}

export default Tag_V1;
