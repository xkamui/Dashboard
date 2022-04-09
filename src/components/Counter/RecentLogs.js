import React, { useContext } from "react";
import Logs from "./Logs";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function RecentLogs() {
  const { logValues, setSearchValue } = useContext(CounterChartContext);

  // Complete search field with clicked element
  const handleSelect = (user) => {
    setSearchValue(user);
  };

  return (
    <div className="logs">
      <div className="header">Most recently added: </div>
      <div className="wrapper">
        {logValues?.map((user) => (
          <Logs
            key={user.id}
            user={user}
            onClick={() => handleSelect(user.charname)}
          />
        ))}
      </div>
    </div>
  );
}
