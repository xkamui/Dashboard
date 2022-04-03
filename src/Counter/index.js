import "../assets/styles/Counter.css";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";

export default function Counter() {
  return (
    <div id="count" className="board">
      <Header />
      <div className="wrapper">
        <Chart />
        <SearchBar />
        <RecentLogs />
      </div>
    </div>
  );
}
