import "../../assets/styles/Counter.css";
import React from "react";
import axios from "axios";
import Chart from "./Chart";
import Header from "./Header";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";
import CounterChartContext from "../../contexts/CounterChartContext";
import CounterUsersContext from "../../contexts/CounterUsersContext";
import RecentLogsList from "./RecentLogsList";

export default function Counter() {
  const urlCountAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/all";
  const [chartValues, setChartValues] = React.useState([]);
  const getChartValues = async () => {
    await axios.get(urlCountAllAPI).then((res) => {
      setChartValues(res.data);
    });
  };

  const urlUsersAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/allusers";
  const [listUsers, setListUsers] = React.useState([]);
  const getListUsers = async () => {
    await axios.get(urlUsersAllAPI).then((res) => {
      setListUsers(res.data);
    });
  };

  const urlLogsAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/logs?limit=30";
  const [logValues, setLogValues] = React.useState([]);
  const getLogValues = async () => {
    await axios.get(urlLogsAPI).then((res) => {
      setLogValues(res.data);
    });
  };

  const [searchValue, setSearchValue] = React.useState("");
  const [selectedButton, setSelectedButton] = React.useState([]);

  const urlResetAPI = "https://www.sir-keichi.com/SK1-api/index.php/count/raz";
  const confirmReset = async () => {
    if (window.confirm(`Do you really want to reset current datas?`)) {
      await axios.get(urlResetAPI).then((res) => {
        getChartValues();
      });
    }
  };

  React.useEffect(() => {
    getLogValues();
    getChartValues();
    getListUsers();
  }, []);

  return (
    <CounterChartContext.Provider
      value={{
        chartValues: chartValues,
        setChartValues: setChartValues,
        getChartValues: getChartValues,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
        selectedButton: selectedButton,
        setSelectedButton: setSelectedButton,
        logValues: logValues,
        setLogValues: setLogValues,
        getLogValues: getLogValues,
        confirmReset: confirmReset,
      }}
    >
      <section id="counter">
        <Header />
        <div className="board-content">
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
            <RecentLogsList />
          </CounterUsersContext.Provider>
        </div>
      </section>
    </CounterChartContext.Provider>
  );
}
