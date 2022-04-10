import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import Counter from "./components/Counter";
import Memos from "./components/Memos";
import Logs from "./components/Logs";
import Helper from "./components/Helper";

function App() {
  return (
    <div id="container" className="App">
      <Counter />
      <Memos />
      <Logs />
      <Helper />
    </div>
  );
}

export default App;
