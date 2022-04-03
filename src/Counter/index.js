import "../assets/styles/Counter.css";

export default function Counter() {
  return (
    <div id="count" className="board">
      <div className="board-header">
        <div className="current">323</div>
        <div className="title">
          <h3>
            COUNTER
            <span>
              Total: <span className="total-users">3071</span>
            </span>
          </h3>
        </div>
        <div className="reset">
          <button className="reset-counter">Reset</button>
        </div>
      </div>
      <div className="wrapper">Counter</div>
    </div>
  );
}
