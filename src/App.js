import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import Counter from "./components/Counter";
import Notes from "./components/Notes";
import Logs from "./components/Logs";
import Helper from "./components/Helper";

function App() {
  return (
    <div id="container" className="App">
      <Counter />
      <Notes />
      <Logs />
      <Helper />
    </div>
  );
}

export default App;
