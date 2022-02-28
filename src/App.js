import React from "react";

import "./App.css";
// import Random_V1 from "./components/Random_V1";
// import Tag_V1 from "./components/Tag_V1";
import Random from "./components/Random_v2";
import Tag from "./components/Tag_v2";

const App = () => (
  <div>
    <h1>A Simple Gif App</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
