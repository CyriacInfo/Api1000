import React, { useState, useEffect } from "react";

function Timer({ number }) {
  const [counter, setCounter] = useState(number);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>Temps restant : {counter}</div>
    </div>
  );
}

export default Timer;
