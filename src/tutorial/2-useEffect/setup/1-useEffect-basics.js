import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) {
      document.title = `New message(${value})`;
    }
  }, [value]); // adding array called a list of dependency

  useEffect(() => {
    console.log("Hello");
  }, []);

  console.log("Render Component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
