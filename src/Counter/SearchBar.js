export default function SearchBar() {
  return (
    <div className="search">
      <label forHtml="searchCockSucker">Input username: </label>
      <input type="text" className="text" id="searchCockSucker" />
      <button>Search</button>
      <div id="autocompleteCockSuckers" className="autocomplete"></div>
    </div>
  );
}
