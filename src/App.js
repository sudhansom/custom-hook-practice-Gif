import React from "react";

import "./App.css";
import Random_V1 from "./components/Random_V1";
import Tag_V1 from "./components/Tag_V1";

const App = () => (
  <div>
    <h1>A Simple Gif App</h1>
    <div className="main-content">
      <Random_V1 />
      <Tag_V1 />
    </div>
  </div>
);

export default App;
