import React, { useContext } from "react";
import axios from "axios";
import CounterUsersContext from "../../contexts/CounterUsersContext";
import CounterChartContext from "../../contexts/CounterChartContext";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const { listUsers, setListUsers } = useContext(CounterUsersContext);
  const { setSelectedButton, getLogValues, searchValue, setSearchValue } =
    useContext(CounterChartContext);
  const [searchActive, setSearchActive] = React.useState(false);

  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/fetch?user=";
  const fetchUserInfos = async () => {
    await axios.get(urlAPI + searchValue).then((res) => {
      setSearchValue(`${searchValue} ${res.data.char.datas.str}`);
      setListUsers(res.data.allchars);
      setSelectedButton(res.data.char.datas);
      getLogValues();
    });
  };

  // Update elements while searching
  const handleSearch = (str) => {
    setSearchValue(str);
    setSearchActive(true);
  };

  // Complete search field with clicked element
  const handleSelect = (user) => {
    setSearchValue(user);
  };

  return (
    <div className="search">
      <label htmlFor="searchUserName">
        Input username: ({listUsers.length} records)
      </label>
      <input
        type="search"
        className="text"
        value={searchValue}
        id="searchUserName"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        tabIndex="-1"
        className="fetchButton"
        onClick={() => fetchUserInfos()}
      >
        Fetch
      </button>
      <div
        id="autocompleteUserNames"
        className={`autocomplete ${
          searchValue !== "" && searchActive ? "active" : ""
        }`}
      >
        {listUsers
          ?.filter((user) =>
            user.charname
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((user) => (
            <SearchResult
              key={user.id}
              user={user}
              onClick={() => handleSelect(user.charname)}
            />
          ))}
      </div>
    </div>
  );
}
