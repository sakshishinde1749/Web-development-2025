import React from "react";
import ReactDOM from "react-dom";

// inline css styling

// need to provide object in style property
const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};

// can change the styling property
customStyle.color = "green";

ReactDOM.render(
    <h1 style={customStyle}>Hello World!</h1>, 
    document.getElementById("root")
);
