import React, { useContext } from "react";
import Logs from "./Logs";
import CounterChartContext from "../../contexts/CounterChartContext";

export default function RecentLogsList() {
  const { logValues, setSearchValue } = useContext(CounterChartContext);

  // Complete search field with clicked element
  const handleSelect = (user) => {
    setSearchValue(user);
  };

  return (
    <div className="board-zone scroll counter-logslist">
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
