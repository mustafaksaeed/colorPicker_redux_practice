import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { picker } from "./Store/Slice.jsx";

import ColorChange from "./Components/ColorChange";
const App = () => {
  const colorVal = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  console.log("colorVal", colorVal);

  function randomCol() {
    let colArray = [
      "#a349a4",
      "red",
      "#00ced1",
      "forestgreen",
      "#ff69b4",
      "orange",
      "#8fbc8f",
      "yellow",
      "#4682b4",
      "magenta",
    ];
    let randomIndex = Math.floor(Math.random() * colArray.length);
    let a = colArray[randomIndex];
    dispatch(picker(a));
  }
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
      <ColorChange input={colorVal.length === 0 ? "red" : colorVal} />
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
          onChange={(e) => dispatch(picker(e.target.value))}
        />
        <button onClick={() => randomCol()}>Random Color Picker</button>
      </div>
    </div>
  );
};

export default App;
