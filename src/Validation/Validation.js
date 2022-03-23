import React from "react";

const validation = (props) => {
  let validationMessage = "Text long enough";

  if (props.inputLength <= 5) {
    validationMessage = "Text too short";
  }

  //También funciona dentro del div del return, aunque de la otra forma arriba
  //es mas conveniente es más legible y podemos mantenerlo con mayor eficiencia
  //{props.inputLength > 5 ? <p>Text long enough</p> : <p>Text too short!</p>}

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
