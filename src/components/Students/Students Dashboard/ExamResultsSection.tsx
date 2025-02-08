"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamResultsSection = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const data = {
    labels: ["Mat", "Phy", "Che", "Eng", "Art"],
    datasets: [
      {
        data: [95, 85, 75, 65, 85],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Exam Result</h2>
        <select className="text-sm border rounded px-2 py-1">
          <option>Fall Quarter</option>
        </select>
      </div>
      <div className="h-64">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ExamResultsSection;
