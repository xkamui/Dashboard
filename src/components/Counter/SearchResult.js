export default function SearchResult({ props }) {
  return (
    <div className="userButton">
      <button onClick={() => props.setSearchValue(props.user.charname)}>
        {props.user.charname} (
        {props.user.last_status === "" ? "n/a" : props.user.last_status})
      </button>
    </div>
  );
}
