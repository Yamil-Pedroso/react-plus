import React from "react";
import styled from "styled-components";

const userInput = (props) => {
  const inputStyle = {
    border: "2px solid #ccc",
  };

  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
