//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let text = "Good morning";

const currentDate = new Date();
const currentTime = currentDate.getHours();

const customStyle = {
    color: "Pink",
}

if (currentTime >= 0 && currentTime < 12) {
    text = "Good morning";
    customStyle.color = "pink";
} else if (currentTime >= 12 && currentTime < 18) {
    text = "Good afternoon";
    customStyle.color = "green";
} else {
    text = "Good night";
    customStyle.color = "blue";
}

ReactDOM.render(
    <h1 className="heading" style={customStyle}>{text}</h1>,
    document.getElementById("root")
);