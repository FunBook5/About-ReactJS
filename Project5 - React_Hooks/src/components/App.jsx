import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    let now2 = new Date().toLocaleTimeString();
    setTime(now2);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get-time</button>
    </div>
  );
}

export default App;
