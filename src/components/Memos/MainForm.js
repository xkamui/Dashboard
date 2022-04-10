import { NavLink } from "react-router-dom";

export default function MainForm() {
  return (
    <div className="board-header">
      {/* HEADER COMPONENT */}
      <div className="board-header">
        <div className="current">321</div>
        <div className="title">
          <h3>
            MEMOS
            <span>
              Total: <span className="total-users">1234</span>
            </span>
          </h3>
        </div>
        <div className="reset">
          <NavLink to="/">admin</NavLink>
        </div>
      </div>

      <div className="wrapper">
        {/* CARD COMPONENT */}
        <div className="card">
          <figure>
            <img
              src="https://i.imgur.com/wMr4wIq.png"
              alt="David Goodenough"
              title="David Goodenough"
            />
            <figcaption>David Goodenough</figcaption>
          </figure>
        </div>

        {/* LOGS COMPONENT */}
        <div className="logs">
          <div className="header">Most recently added: </div>
          <div className="wrapper">
            {/* LOG COMPONENT */}
            <button className="log">
              <span className="timestamp">2022-04-09 15:16:17</span>
              <span className="charname">David Goodenough</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
