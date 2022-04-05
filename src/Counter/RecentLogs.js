import React from "react";
import axios from "axios";
import Logs from "./Logs";

export default function RecentLogs() {
  const urlAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/user/logs?limit=30";
  const [logValues, setLogValues] = React.useState([]);

  React.useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setLogValues(res.data);
    });
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
