import "../../assets/styles/Counter.css";
import React from "react";
import axios from "axios";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function Counter() {
  const urlAPI = "https://www.sir-keichi.com/SK1-api/index.php/count/all";
  const [chartValues, setChartValues] = React.useState([]);

  function getChartValues() {
    axios.get(urlAPI).then((res) => {
      setChartValues(res.data);
    });
  }

  React.useEffect(() => {
    getChartValues();
  }, []);

  return (
    <CounterChartContext.Provider
      value={{
        chartValues: chartValues,
        setChartValues: setChartValues,
        getChartValues: getChartValues,
      }}
    >
      <div id="count" className="board">
        <Header />
        <div className="wrapper">
          <Chart />
          <SearchBar />
          <RecentLogs />
        </div>
      </div>
    </CounterChartContext.Provider>
  );
}
