import { NavLink } from 'react-router-dom';

export default function AdminChars() {
    return (
      <div className="board-header">
          Admin chars
          <NavLink to="/">home</NavLink>
      </div>
    );
  }