export default function Header(props) {
  const currCounter = props.chartValues.reduce(
    (acc, val) => acc + val.count,
    0
  );
  const fullCounter =
    props.chartValues.reduce((acc, val) => acc + val.fulls, 0) + currCounter;

  return (
    <div className="board-header">
      <div className="current">{currCounter}</div>
      <div className="title">
        <h3>
          COUNTER
          <span>
            Total: <span className="total-users">{fullCounter}</span>
          </span>
        </h3>
      </div>
      <div className="reset">
        <button className="reset-counter">Reset</button>
      </div>
    </div>
  );
}
