import { useReducer } from "react";
import "./Reducer-Hook.css";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>Reducer Hook</h3>
      <h4>{state.count}</h4>
      <button
        className="primary-btn"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default ReducerHook;
