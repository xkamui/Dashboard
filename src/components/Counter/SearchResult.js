export default function SearchResult({ props }) {

    function handleSelect(user){
        console.log('prout', user);
        props.setSearchValue = user;
        props.setSearchActive = false;
    }

    return (
    <div className="userButton">
      <button onClick={() => handleSelect(props.user.charname)}>
        {props.user.charname} (
        {props.user.last_status === "" ? "n/a" : props.user.last_status})
      </button>
    </div>
  );
}
