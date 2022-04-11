import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import Counter from "./components/Counter";
import Memos from "./components/Memos";
// import Logs from "./components/Logs";
// import Helper from "./components/Helper";

function App() {
  return (
    <div id="dashboard" className="App">
      <div className="boards">
        <div className="board">
          <Counter />
        </div>
        <div className="board">
          <Memos />
        </div>
        <div className="board">
          {/*<Logs />*/}
          <section id="logs">
            <div className="board-header">Board 3 - logs - header</div>
            <div className="board-content">Board 3 - logs</div>
          </section>
        </div>
      </div>
      <div className="boards">
        <div className="board fullboard">
          {/*<Helper />*/}
          <section id="helper">
            <div className="board-header">Board 4 - helper - header</div>
            <div className="board-content">Board 4 - helper</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
