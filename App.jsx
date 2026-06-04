import Hello from "./Hello";
import Bye from "./Bye";
import reactlogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>App component</h1>
      <Hello />
      <img src={reactlogo} width="200px" />
      <Bye />
    </>
  );
}

export default App;