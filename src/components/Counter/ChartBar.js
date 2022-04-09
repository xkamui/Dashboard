import React, { useContext } from "react";
import axios from "axios";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function ChartBar({ props }) {
  const { setChartValues, selectedButton, setSelectedButton, setSearchValue } =
    useContext(CounterChartContext);

  const urlAPI = "https://www.sir-keichi.com/SK1-api/index.php/count/inc";
  const incrementChartValues = async (inc, key) => {
    await axios.get(urlAPI, { params: { inc: inc, key: key } }).then((res) => {
      setChartValues(res.data);
      setSelectedButton(null);
      setSearchValue("");
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
          className={`addCounter ${
            selectedButton?.key === props.key ? "clickMe" : ""
          }`}
          onClick={() =>
            incrementChartValues(selectedButton?.inc ?? 1, props.key)
          }
        >
          {props.key}
        </button>
      </div>
    </div>
  );
}
