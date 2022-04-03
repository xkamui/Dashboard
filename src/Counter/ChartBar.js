export default function ChartBar({ props }) {
  return (
    <div className="col">
      <div id="chartCurrentAS" className="cnt">
        {props.count}
      </div>
      <div className="bar">
        <div className="barre as" style={{ height: props.height + "%" }}></div>
      </div>
      <div className="btn">
        <button className="addCounter" data-insert="1">
          {props.key}
        </button>
      </div>
    </div>
  );
}
