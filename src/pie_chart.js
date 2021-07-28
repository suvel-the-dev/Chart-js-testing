const chartData = {
  data: {
    labels: ["CP", "RR"],
    datasets: [
      {
        data: [65, 92],
        backgroundColor: ["#3794ff", "#ffff00"]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Zone Utilization",
      fontSize: 25
    }
    // legend: {
    //   display: false
    // }
  }
};

export default chartData;
