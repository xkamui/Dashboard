import React, { useContext } from "react";
import CounterChartContext from "../../contexts/CounterChartContext";
import ChartBar from "./ChartBar";

export default function Chart() {
  const { chartValues } = useContext(CounterChartContext);

  return (
    <div className="chart">
      <div className="datas">
        {chartValues.map((bar) => (
          <ChartBar props={bar} key={bar.key} />
        ))}
      </div>
    </div>
  );
}
