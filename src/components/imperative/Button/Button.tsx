import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
