import React from "react";

const ColorChange = ({ input }) => {
  return (
    <div
      style={{
        backgroundColor: `${input}`,
        display: "flex",
        width: "50vh",
        height: "50vh",
      }}
    ></div>
  );
};

export default ColorChange;
