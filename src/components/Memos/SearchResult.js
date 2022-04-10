export default function SearchResult(props) {
    function handleSelect(usr) {
      props.onClick(usr);
    }
  
    return (
      <button onClick={() => handleSelect(props.user.charname)}>
        {props.user.charname} (
        {props.user.last_status === "" ? (
          <span className="smallText">n/a</span>
        ) : (
          props.user.last_status
        )}
        )
      </button>
    );
  }
  