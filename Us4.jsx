import React, { useState } from "react";

function Us4() {
  const [name, setHide] = useState("React JS Hooks");
  const [buttonText, setButtonText] = useState("Hide");

  function showhide() {
    if (buttonText === "Hide") {
      setButtonText("Show");
      setHide("");
    } else {
      setButtonText("Hide");
      setHide("React JS Hooks");
    }
  }

  return (
    <>
      <button onClick={showhide}>{buttonText}</button>
      <h2>{name}</h2>
    </>
  );
}

export default Us4;
