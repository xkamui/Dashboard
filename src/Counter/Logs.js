export default function Logs({props}) {
  return (
    <div className="log">
      <span className="timestamp">{props.last_stamp}</span>
      <span className="charname">{props.charname} ({props.counter} - {props.last_status})</span>
    </div>
  );
}
