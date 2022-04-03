export default function SearchBar() {
  return (
    <div className="search">
      <label htmlFor="searchUserName">Input username: </label>
      <input type="text" className="text" id="searchUserName" />
      <button>Search</button>
      <div id="autocompleteUserNames" className="autocomplete"></div>
    </div>
  );
}
