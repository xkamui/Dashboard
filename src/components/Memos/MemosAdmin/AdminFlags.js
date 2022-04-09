import { NavLink } from 'react-router-dom';

export default function AdminFlags() {
    return (
      <div className="board-header">
          Admin flags
          <NavLink to="/">home</NavLink>
      </div>
    );
  }