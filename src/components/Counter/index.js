import "../../assets/styles/Counter.css";
import React from "react";
import axios from "axios";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";
import CounterChartContext from "../../contexts/CounterChartContext";
import CounterUsersContext from "../../contexts/CounterUsersContext";

export default function Counter() {
  const urlCountAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/all";
  const [chartValues, setChartValues] = React.useState([]);

  const urlUsersAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/allusers";
  const [listUsers, setListUsers] = React.useState([]);

  function getChartValues() {
    axios.get(urlCountAllAPI).then((res) => {
      setChartValues(res.data);
    });
  }

  function getListUsers() {
    axios.get(urlUsersAllAPI).then((res) => {
      setListUsers(res.data);
    });
  }

  React.useEffect(() => {
    getChartValues();
    getListUsers();
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
          <CounterUsersContext.Provider
            value={{
              listUsers: listUsers,
              setListUsers: setListUsers,
              getListUsers: getListUsers,
            }}
          >
            <SearchBar />
            <RecentLogs />
          </CounterUsersContext.Provider>
        </div>
      </div>
    </CounterChartContext.Provider>
  );
}
