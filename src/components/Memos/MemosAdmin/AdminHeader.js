import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div className="board-header memos-header">
      <div className="back">
        <NavLink to="/memos-admin">‹‹ Memos</NavLink>
      </div>
      <h3>MEMOS - ADMIN PANEL</h3>
      <div className="home">
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}
