import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted")
  }

  function handleMouseOver() {
    setBackgroundColor("black")
  }

  function handleMouseOut() {
    setBackgroundColor("white")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>

      <input type="text" placeholder="What's your name?" />

      <button
        onClick={handleClick}
        style={{backgroundColor: backgroundColor}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
