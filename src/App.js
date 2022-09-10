import "./App.css"
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import PieChart from "./components/PieChart"

function App() {
  return (
    <div className="App">
      <div style={{ width: "800px" }}>
        <BarChart />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "4rem" }}>
        <div style={{ width: "400px" }}>
          <PieChart />
        </div>
        <div style={{ width: "400px" }}>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default App
