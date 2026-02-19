import "./App.css";
import { useReducer } from "react";

function App() {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)

  // const countReducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state <= 0 ? 0 : state - 1;
  //     case "RESET":
  //       return 0;
  //     default:
  //       return state;
  //   }

  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count <= 0 ? 0 : state.count - 1 };
      case "RESET":
        return 0;
      default:
        return { count: state.count };
    }
  };

  // const [state, dispatch] = useReducer(countReducer, 0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <h1>Reducer Counter</h1>
      <p> {state.count} </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
