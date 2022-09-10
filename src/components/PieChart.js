import { useState, useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { orderPieList } from "../data"

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
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
      labels: orderPieList.map((data) => data.date),
      datasets: [
        {
          label: "data penjualan",
          data: orderPieList.map((data) => data.totalOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [])
  return <Pie data={dataChart} />
}

export default PieChart
