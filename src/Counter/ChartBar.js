export default function ChartBar({ props }) {
  return (
    <div className="col" key={props.key}>
      <div id="chartCurrentAS" className="cnt">
        {props.count}
      </div>
      <div className="bar">
        <div className={`barre ${props.key.toLowerCase()}`} style={{ height: props.height + "%" }}></div>
      </div>
      <div className="btn">
        <button className="addCounter" data-insert="1">
          {props.key}
        </button>
      </div>
    </div>
  );
}
