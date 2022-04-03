import ChartBar from "./ChartBar";

export default function Chart(props) {
  return (
    <div className="chart">
      <div className="datas">
        {props.chartValues.map((bar) => (
          <ChartBar props={bar} key={bar.key} />
        ))}
      </div>
    </div>
  );
}
