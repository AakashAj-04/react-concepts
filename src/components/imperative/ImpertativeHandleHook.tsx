import React, { useRef } from "react";
import Button from "./Button/Button";

const ImpertativeHandleHook = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current?.alterToggle();
    }
  };

  return (
    <div>
      <h3>Imperative Handle </h3>
      <button onClick={handleClick}>Button From Parent</button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImpertativeHandleHook;
