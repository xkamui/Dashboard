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

  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/user/logs?limit=30";
  const [logValues, setLogValues] = React.useState([]);
  const getLogValues = async () => {
    await axios.get(urlAPI).then((res) => {
      setLogValues(res.data);
    });
  };

  const [searchValue, setSearchValue] = React.useState("");
  const [selectedButton, setSelectedButton] = React.useState([]);

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
