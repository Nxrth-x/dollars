import { Line as LineChart } from "react-chartjs-2";

export const IndexChart = ({ periodData }) => {
  const data = {
    labels: periodData.map((item) => item.date),
    datasets: [
      {
        label: "Valor de compra",
        backgroundColor: "#6ad9a8",
        borderColor: "#6ad9a8",
        lineTension: 0.25,
        data: periodData.map((item) => item.buyValue),
      },
      {
        label: "Valor de venda",
        backgroundColor: "#e2f991",
        borderColor: "#e2f991",
        lineTension: 0.25,
        data: periodData.map((item) => item.sellValue),
      },
    ],
  };

  return <LineChart data={data} />;
};
