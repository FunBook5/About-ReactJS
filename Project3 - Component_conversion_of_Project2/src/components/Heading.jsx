import React from "react";

function Heading() {
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

  return (
    <div>
      <h1 className="heading" style={CustomStyle}>
        {greeting}
      </h1>
    </div>
  );
}

export default Heading;
