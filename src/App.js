import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import Counter from "./Counter";
import Helper from "./Helper";
import Notes from "./Notes";
import Logs from "./Logs";

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
