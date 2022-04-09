import { NavLink, Outlet } from 'react-router-dom';

export default function AdminDatas() {
    return (
      <div className="board-header">
          Admin panel
          <NavLink to="/">home</NavLink>
          <Outlet />
      </div>
    );
  }