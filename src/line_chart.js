const chartData = {
  data: {
    labels: ["ACTUAL_PALLET", "MAX_PALLET"],
    datasets: [
      {
        data: [461, 545],
        backgroundColor: "#ffff00"
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    title: {
      display: true,
      text: "Warehouse Utilization",
      fontSize: 25
    },
    legend: {
      display: false
    }
  }
};

export default chartData;
