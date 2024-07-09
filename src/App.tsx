import "./App.css";
import ReducerHook from "./components/Reducer Hook/Reducer-Hook";
import UseEffectHook from "./components/Use_Effect Hook/UseEffectHook";
import UseRef from "./components/UseRef Hook/UseRef";
import UseLayoutHook from "./components/UseLayout Hook/UseLayoutHook";
import ImpertativeHandleHook from "./components/imperative/ImpertativeHandleHook";
import UseContext from "./components/UseContext/UseContext";

const App = () => {
  return (
    <div>
      <div>
        <ReducerHook />
        <UseEffectHook />
        <UseRef />
        <UseLayoutHook />
        <ImpertativeHandleHook />
        <UseContext />
      </div>
    </div>
  );
};

export default App;
