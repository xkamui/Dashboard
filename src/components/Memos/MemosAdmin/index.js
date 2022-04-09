import { NavLink, Outlet } from "react-router-dom";

export default function AdminDatas() {
  return (
    <section id="memos-panel">
      <div className="board-header">
        <NavLink to="/memos-admin">‹‹ Memos</NavLink>
        <h3>MEMOS - ADMIN PANEL</h3>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="board-content">
        <Outlet />
      </div>
    </section>
  );
}
