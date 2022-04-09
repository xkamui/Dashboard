import React, { useContext } from "react";
import Logs from "./Logs";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function RecentLogs() {
  const { logValues } = useContext(CounterChartContext);

  return (
    <div className="logs">
      <div className="header">Most recently added: </div>
      <div className="wrapper">
        {logValues?.map((user) => (
          <Logs key={user.id} props={user} />
        ))}
      </div>
    </div>
  );
}
