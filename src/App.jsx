import { Counter } from "./Counter";
import "./styles.css";
import counterStore from "./store/counterStore";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  console.log("render App");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{counterStore.count}</h2>
      <Counter />
    </div>
  );
});
