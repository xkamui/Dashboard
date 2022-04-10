export default function Account(props) {
  function handleEdit(account) {
    props.onEdit(account);
  }

  function handleDelete(account) {
    props.onDelete(account);
  }

  return (
    <div className="account">
      <div className="accountName" onClick={() => handleEdit(props.account)}>
        {props.account.account}
        <span> ({props.account.chars} chars)</span>
      </div>
      <div className="actions">
        <ul>
          <li>
            <button
              className="edtButton"
              onClick={() => handleEdit(props.account)}
            >
              edit
            </button>
          </li>
          <li>
            <button
              className="delButton"
              disabled={props.account.chars > 0 ? "disabled" : ""}
              onClick={() => handleDelete(props.account)}
              title={
                props.account.chars > 0
                  ? "This account still has characters"
                  : ""
              }
            >
              delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
