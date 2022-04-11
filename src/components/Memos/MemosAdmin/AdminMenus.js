import { NavLink } from "react-router-dom";

export default function AdminMenus() {
  return (
    <div className="board-content">
      <div className="board-zone scroll memos-admin-menu">
        <ul>
          <li>
            <NavLink to="/admin-accounts">
              <button>Accounts</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-characters">
              <button>Characters</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-flags">
              <button>Flags</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-reasons">
              <button>Reasons</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
