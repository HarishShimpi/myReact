import React, { useState } from "react";
const logic = true;
function UseState() {
  const [f, setF] = useState(logic);

  function setTog() {
    setF(!f);
    console.log(f)
  }
  return (
    <>
      <h2>Harish {f.toString()}</h2>
      <button onClick={setTog}>abzc</button>
    </>
  );
}

export default UseState;
