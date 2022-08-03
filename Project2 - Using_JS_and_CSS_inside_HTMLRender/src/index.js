//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

//Creating custom style for each greeting
const CustomStyle = {
  color: ""
};

const date1 = new Date();
const hour = date1.getHours();
//console.log(hour);

var greeting;

if (hour >= 16) {
  greeting = "Good Evening";
  CustomStyle.color = "Red";
} else if (hour >= 12 && hour < 16) {
  greeting = "Good Afternoon";
  CustomStyle.color = "Green";
} else {
  greeting = "Good Morning";
  CustomStyle.color = "Blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={CustomStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
