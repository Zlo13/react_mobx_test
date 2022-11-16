// import { observer } from "mobx-react-lite";
import counterStore from "./store/counterStore";

export const Counter = () => {
  console.log("render Counter");

  return (
    <div>
      {/* <h2>{counterStore.count}</h2> */}
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
    </div>
  );
};
