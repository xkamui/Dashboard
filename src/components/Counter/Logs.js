export default function Logs(props) {
  function handleSelect(usr) {
    props.onClick(usr);
  }

  return (
    <button className="log" onClick={() => handleSelect(props.user.charname)}>
      <span className="timestamp">{props.user.last_stamp}</span>
      <span className="charname">
        {props.user.charname} ({props.user.counter} -{" "}
        {props.user.last_status === "" ? (
          <span className="smallText">n/a</span>
        ) : (
          props.user.last_status
        )}
        )
      </span>
    </button>
  );
}
