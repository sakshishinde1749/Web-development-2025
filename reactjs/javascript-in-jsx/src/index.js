import React from "react";
import ReactDOM from "react-dom";

const fname = "Sakshi";
const lname = "Shinde";
const randomImg = "https://picsum.photos/200/300";
const num = 1;

ReactDOM.render(
    <div>
        {/* we can only add javascript expressions into this html code, can't add statements */}
        <h1>Hello {fname + " " + lname}.</h1> 
        <h3>Your lucky number is {num}</h3>
        <img src={randomImg}/>
    </div>,
    document.getElementById("root")
);
