import { useState, useEffect } from "react"
import "./App.css"
import BarChart from "./components/BarChart"
import { orderList } from "./data"

function App() {
  const [chart, setChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  })

  useEffect(() => {
    setChart({
      labels: orderList.map((data) => data.date),
      datasets: [
        {
          label: "data penjualan",
          data: orderList.map((data) => data.totalOrder),
        },
      ],
    })
  }, [])

  // console.log(chart)

  return (
    <div className="App">
      <BarChart chart={chart} />
    </div>
  )
}

export default App
