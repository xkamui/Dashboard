import React, { useContext } from "react";
import axios from "axios";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function ChartBar({ props }) {
  const { setChartValues } = useContext(CounterChartContext);

  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/count/inc?inc=1&key=";
  const incrementChartValues = (key) => {
    axios.get(urlAPI + key).then((res) => {
      setChartValues(res.data);
    });
  };

  return (
    <div className="col" key={props.key}>
      <div id="chartCurrentAS" className="cnt">
        {props.count}
      </div>
      <div className="bar">
        <div
          className={`barre ${props.key.toLowerCase()}`}
          style={{ height: props.height + "%" }}
        ></div>
      </div>
      <div className="btn">
        <button
          className="addCounter"
          onClick={() => incrementChartValues(props.key)}
          data-insert="1"
        >
          {props.key}
        </button>
      </div>
    </div>
  );
}
