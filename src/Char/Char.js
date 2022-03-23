import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    backgroundColor: "#ccc",
    padding: "16px",
    margin: "16px",
    borderRadius: "3px",
    textAlign: "center",
  };
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default char;
