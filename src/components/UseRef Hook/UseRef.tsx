import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickBtn = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <h3>Use Ref</h3>
      <input type="text" placeholder="Name" ref={inputRef} />
      <button onClick={clickBtn}>Change Name</button>
    </div>
  );
};

export default UseRef;
