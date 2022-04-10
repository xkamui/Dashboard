import React, { useContext } from "react";
// import axios from "axios";
import MemosUsersContext from "../../contexts/MemosUsersContext";
// import CounterChartContext from "../../contexts/CounterChartContext";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  // const { setSelectedButton, getLogValues, searchValue, setSearchValue } =
  const { searchValue, setSearchValue, listUsers } =
    useContext(MemosUsersContext);
  const [setSearchActive] = React.useState(false);
  /*

  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/fetch?user=";
  const fetchUserInfos = async () => {
    await axios.get(urlAPI + searchValue).then((res) => {
      setSearchValue(`${res.data.char.charDatas.name} ${res.data.char.datas.str}`);
      setListUsers(res.data.allchars);
      setSelectedButton(res.data.char.datas);
      getLogValues();
    });
  };

  
  // Complete search field with clicked element
  const handleSelect = (user) => {
      setSearchValue(user);
    };
    */

  // Update elements while searching
  const handleSearch = (str) => {
    setSearchValue(str);
    setSearchActive(true);
  };

  return (
    <div className="search">
      <label htmlFor="searchUserName">
        Input username: ({/*listUsers.length*/} records)
      </label>
      <input
        type="search"
        className="text"
        value={searchValue}
        id="searchUserName"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button tabIndex="-1" className="fetchButton">
        Fetch
      </button>
      <div id="autocompleteUserNames">
        {listUsers
          ?.filter((user) =>
            user.charname
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((user) => (
            <SearchResult key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
}
