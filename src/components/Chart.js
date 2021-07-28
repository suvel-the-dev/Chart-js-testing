import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { default as pieChart } from "../pie_chart";
import { default as lineChart } from "../line_chart";

function Chart(props) {
  return (
    <div className="chart">
      <Bar data={pieChart.data} options={pieChart.options} />
      <Line data={lineChart.data} options={lineChart.options} />
      {/* <Pie
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: '#000'
            }
          }
        }}
      /> */}
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom"
};

export default Chart;
