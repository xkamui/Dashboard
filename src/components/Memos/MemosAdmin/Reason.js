export default function Reason(props) {
  function handleEdit(reason) {
    props.onEdit(reason);
  }

  function handleDelete(reason) {
    props.onDelete(reason);
  }

  return (
    <div className="item">
      <div className="item-name" onClick={() => handleEdit(props.reason)}>
        {props.reason.term}
      </div>
      <div className="actions">
        <ul>
          <li>
            <button
              className="edtButton"
              onClick={() => handleEdit(props.reason)}
            >
              edit
            </button>
          </li>
          <li>
            <button
              className="delButton"
              onClick={() => handleDelete(props.reason)}
            >
              delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
