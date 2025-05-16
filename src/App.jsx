import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { picker } from "./Store/Store.jsx";

import ColorChange from "./Components/ColorChange";
const App = () => {
  const [color, setColor] = useState("red");

  const colorVal = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  function ColorChange() {
    dispatch(picker(color));
  }

  console.log("colorVal", colorVal);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Color Changer </h1>
      <ColorChange input={color} />
      <div
        className="InputChange"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeHolder="Choose a color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Random Color Picker</button>
      </div>
    </div>
  );
};

// function ColorChanger(input){
//   dispatch({
//     text:input
//     color:
//   })
// }

export default App;
