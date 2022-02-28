import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const { data } = await axios.get(tag ? `url&tag${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(
    (tag) => {
      fetchGif(tag);
    },
    [tag]
  );

  return { gif, useGif };
}

export default useGif;
