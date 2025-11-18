import React, { useState } from "react";

const Test = () => {
  let [index, setIndex] = useState(0);
  const tangIndex = () => {
    setIndex(index + 1);
    console.log(index);
  };
  return (
    <div>
      <div>{index}</div>
      <button onClick={tangIndex}>Tăng index</button>
    </div>
  );
};

export default Test;
