import ChartBar from "./ChartBar";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";

export default function Chart() {

    const chartValues = [
        { count: 33, key: "AS", height: 10.216718266254 },
        { count: 61, key: "US", height: 18.885448916409 },
        { count: 60, key: "SW", height: 18.575851393189 },
        { count: 24, key: "UD", height: 7.4303405572755 },
        { count: 145, key: "AD", height: 44.891640866873 }
    ]

    return (
    <div className="chart">
      <div className="datas">
        {chartValues.map((bar) => <ChartBar props={bar} key={bar.key} />)}
      </div>
      <SearchBar />
      <RecentLogs />
    </div>
  );
}
