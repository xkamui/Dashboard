export default function Char(props) {
  function handleEdit(char) {
    props.onEdit(char);
  }

  function handleDelete(char) {
    props.onDelete(char);
  }

  return (
    <div className="char">
      <div className="charName" onClick={() => handleEdit(props.char)}>
        <figure>
          <img
            src={`https://static.f-list.net/images/avatar/${props.char.charname.toLowerCase()}.png`}
            alt={props.char.charname}
            title={props.char.charname}
            className={props.char.active === 1 ? "active" : "inactive"}
          />
          <figcaption>
            {props.char.charname}
            <span>{props.char.account_name}</span>
          </figcaption>
        </figure>
      </div>
      <div className="actions">
        <ul>
          <li>
            <button
              className="edtButton"
              onClick={() => handleEdit(props.char)}
            >
              edit
            </button>
          </li>
          <li>
            <button
              className="delButton"
              onClick={() => handleDelete(props.char)}
            >
              delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
