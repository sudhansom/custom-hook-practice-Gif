import axios from "axios";
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function Random_V1() {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    console.log(data.data.images.downsized_large.url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random</h1>
      <img width="500" src={gif} alt="random" />
      <button onClick={handleClick}>ANOTHER ONE</button>
    </div>
  );
}

export default Random_V1;
