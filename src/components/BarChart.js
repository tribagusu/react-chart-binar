import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"
import { orderList } from "../data"
import { useState, useEffect } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement)

const BarChart = () => {
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
      labels: orderList.map((data) => data.date),
      datasets: [
        {
          label: "data penjualan",
          data: orderList.map((data) => data.totalOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [])

  return <Bar data={dataChart} />
}

export default BarChart
