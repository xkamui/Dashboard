import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import Counter from "./Counter";
import Notes from "./Notes";
import Logs from "./Logs";
import Helper from "./Helper";

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
