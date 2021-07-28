import React from "react";
import ReactDOM from "react-dom";
import Chart from "./components/Chart";

import "./styles.css";

class App extends React.Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "CP250A",
          "CP250B",
          "CP250C",
          "CP250D",
          "CP251A",
          "CP251B",
          "CP251C",
          "RR241A",
          "RR241B",
          "RR241C",
          "RR241D"
        ],
        datasets: [
          {
            data: [59.55, 50, 60, 50, 80, 100, 54.54, 91.18, 100, 100, 96],
            //backgroundColor:'green',
            backgroundColor: [
              "#3794ff",
              "#3794ff",
              "#3794ff",
              "#3794ff",
              "#3794ff",
              "#3794ff",
              "#3794ff",
              "#ffff00",
              "#ffff00",
              "#ffff00",
              "#ffff00"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React &amp; Chart.js</h1>
        <Chart chartData={this.state.chartData} displayLegend={true} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
