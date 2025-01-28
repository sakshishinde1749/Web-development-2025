//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.


import React from "react";
import ReactDOM from "react-dom";

const yourName = "Sakshi";
let currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
    <div>
        <p className="heading" contentEditable="true" spellCheck="false">Created by {yourName}</p>
        <p>Copyright {currentYear}</p>

        <h2>My fav food</h2>
        <ul>
            <li>Biryani</li>
            <img className="img" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"></img>
            <li>Noodles</li>
            <img className="img" src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=800"></img>
            <li>Chocolate cake</li>
            <img className="img" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxPpjEQLeG69e8uBWMQnLI4sofQ4hzU8lD_6dh_Un1Oia2568BX0zU-opECLX4KGte0ehYDoU9ywz3bZ13tXcja-0hRJ1pem5aZslDtn4"></img>
        </ul>
    </div>,
    document.getElementById("root")
);