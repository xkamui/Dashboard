import "../assets/styles/Counter.css";
import React from "react";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";

export default function Counter() {
  const urlAPI = "https://www.sir-keichi.com/SK1-api/index.php/count/all";
  const [chartValues, setChartValues] = React.useState([]);

  const controller = new AbortController();
  const signal = controller.signal;

  React.useEffect(() => {
    fetch(urlAPI, { signal })
      .then((response) => response.json())
      .then((data) => {
        setChartValues(data);
      });
    return () => controller.abort();
  }, []);

  return (
    <div id="count" className="board">
      <Header chartValues={chartValues} />
      <div className="wrapper">
        <Chart chartValues={chartValues} />
        <SearchBar />
        <RecentLogs />
      </div>
    </div>
  );
}
