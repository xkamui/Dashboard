export default function Flag(props) {
  function handleEdit(flag) {
    props.onEdit(flag);
  }

  function handleDelete(flag) {
    props.onDelete(flag);
  }

  return (
    <div className={`item ${props.flag.good_bad}`}>
      <div className="item-name" onClick={() => handleEdit(props.flag)}>
        <span className="item-dots"></span> {props.flag.term}
      </div>
      <div className="actions">
        <ul>
          <li>
            <button
              className="edtButton"
              onClick={() => handleEdit(props.flag)}
            >
              edit
            </button>
          </li>
          <li>
            <button
              className="delButton"
              onClick={() => handleDelete(props.flag)}
            >
              delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
