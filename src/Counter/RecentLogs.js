import React from "react";
import Logs from "./Logs";

export default function RecentLogs() {
  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/user/logs?limit=30";
  const [logValues, setLogValues] = React.useState([]);

  const controller = new AbortController();
  const signal = controller.signal;

  React.useEffect(() => {
    fetch(urlAPI, { signal })
      .then((response) => response.json())
      .then((data) => {
        setLogValues(data);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="logs">
      <div className="header">Most recently added: </div>
      <div className="wrapper">
        {logValues.map((user) => (
          <Logs key={user.id} props={user} />
        ))}
      </div>
    </div>
  );
}
