import "../assets/styles/Counter.css";
import React from "react";
import axios from "axios";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";

export default function Counter() {
  const urlAPI = "https://www.sir-keichi.com/SK1-api/index.php/count/all";
  const [chartValues, setChartValues] = React.useState([]);

  React.useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setChartValues(res.data);
    });
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
