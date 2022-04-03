import "../assets/styles/Counter.css";
import Chart from "./Chart";
import Header from "./Header";

export default function Counter() {
  return (
    <div id="count" className="board">
      <Header />
      <div className="wrapper">
          <Chart />
      </div>
    </div>
  );
}
