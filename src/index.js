//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";
var morning = new Date();
const mor = morning.getHours();
const customcolor = { color: "red" };
var Greeting;
if (mor < 12) {
  Greeting = "Good Morning";
  customcolor.color = "red";
} else if (mor < 18) {
  Greeting = "Good Afternoor";
  customcolor.color = "green";
} else {
  Greeting = "Good Evening";
  customcolor.color = "blue";
}

ReactDom.render(
  <h1 style={customcolor}>{Greeting}</h1>,
  document.getElementById("root")
);
