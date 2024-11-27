import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["2018", "2019", "2020", "2021", "2022"],
  datasets: [
    {
      label: "Inventory Turnover Rate",
      data: [7200, 7800, 8048, 8200, 8500],
      backgroundColor: "rgba(33, 150, 243, 0.5)",
      borderColor: "rgba(33, 150, 243, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function ChartSection() {
  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <h3>Inventory Turnover Rate</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartSection;
