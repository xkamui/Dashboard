import ChartBar from "./ChartBar";
import RecentLogs from "./RecentLogs";
import SearchBar from "./SearchBar";

export default function Chart() {
  return (
    <div className="chart">
      <div className="datas">
        <ChartBar props={{ count: 33, key: "AS", height: 10.216718266254 }} />
        <ChartBar props={{ count: 61, key: "US", height: 18.885448916409 }} />
        <ChartBar props={{ count: 60, key: "SW", height: 18.575851393189 }} />
        <ChartBar props={{ count: 24, key: "UD", height: 7.4303405572755 }} />
        <ChartBar props={{ count: 145, key: "AD", height: 44.891640866873 }} />
      </div>
      <SearchBar />
      <RecentLogs />
    </div>
  );
}
