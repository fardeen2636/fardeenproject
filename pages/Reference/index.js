import React, { useState, useEffect } from "react";

function useRef() {
  const [myData, setMyData] = useState("");
  const [Count, setCount] = useState(0);
  console.log("===CheckData===");

  useEffect(() => {
    myData;
  });

  const handleChange = (e) => {
    setMyData(e.target.value);

    console.log("=======data====", e.target.value);
  };
  // const handleClick =()=>

  return (
    <>
      <center>
        <input type="text" onchange={handleChange} />
        <p>The number of times render</p>

        <button type="button" onClick={handleChange}>
          Submit
        </button>
      </center>
    </>
  );
}
export default useRef;
