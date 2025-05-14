import React from "react";
import ColorChange from "./Components/ColorChange";
const App = () => {
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
      <ColorChange input="red" />
      <div
        className="InputChange"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <input type="text" placeHolder="Choose a color" />
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
