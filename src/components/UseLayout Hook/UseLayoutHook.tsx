import React, { useLayoutEffect, useRef } from "react";
import "./UseLayoutHook.css";

const UseLayoutHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    // console.log(inputRef.current.value);
    // useLayoutEffect hook is run before the uesEffect.
  }, []);
  return (
    <div>
      <h3>UseLayoutEffect Hook</h3>
      <input
        type="text"
        placeholder="Enter Name"
        value="Aakash Aj"
        ref={inputRef}
        style={{ width: 400, height: 100 }}
      />
    </div>
  );
};

export default UseLayoutHook;
