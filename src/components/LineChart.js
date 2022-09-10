import { useState, useEffect } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { orderLineList } from "../data"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

const LineChart = () => {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "",
      },
    ],
  })

  useEffect(() => {
    setDataChart({
      labels: orderLineList.map((data) => data.date),
      datasets: [
        {
          label: "data penjualan",
          data: orderLineList.map((data) => data.totalOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [])

  return <Line data={dataChart} />
}

export default LineChart
