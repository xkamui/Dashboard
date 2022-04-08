import React, { useContext } from "react";
import CounterUsersContext from "../../contexts/CounterUsersContext";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const { listUsers } = useContext(CounterUsersContext);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchActive, setSearchActive] = React.useState(false);

  function handleSearch(str) {
    setSearchValue(str);
    setSearchActive(true);
  }

  function clearSearch() {
    setSearchValue("");
  }

  return (
    <div className="search">
      <label htmlFor="searchUserName">
        Input username: ({listUsers.length} records)
      </label>
      <input
        type="text"
        className="text"
        value={searchValue}
        id="searchUserName"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        tabIndex="-2"
        className={`clearButton ${searchValue !== "" ? "active" : ""}`}
        onClick={() => clearSearch()}
      >
        <span>
          <em>×</em>
        </span>
      </button>
      <button tabIndex="-1" className="fetchButton">
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
              props={{
                user: user,
                searchValue: searchValue,
                setSearchValue: setSearchValue,
                searchActive: searchActive,
                setSearchActive: setSearchActive,
              }}
            />
          ))}
      </div>
    </div>
  );
}
