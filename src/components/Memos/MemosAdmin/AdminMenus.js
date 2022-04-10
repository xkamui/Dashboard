import { NavLink } from "react-router-dom";

export default function AdminMenus() {
  return (
    <div className="board-header">
      <ul>
        <li>
          <NavLink to="/admin-accounts">Accounts</NavLink>
        </li>
        <li>
          <NavLink to="/admin-characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/admin-flags">Flags</NavLink>
        </li>
        <li>
          <NavLink to="/admin-reasons">Reasons</NavLink>
        </li>
      </ul>
    </div>
  );
}
