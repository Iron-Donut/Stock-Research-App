import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const CandleStickChart = ({ stockInfo }) => {
  return (
    <Fragment>
      <Plot
        data={[
          {
            x: stockInfo.financialChartXValues,
            close: stockInfo.financialChartCloseValues,
            decreasing: { line: { color: "red" } },
            high: stockInfo.financialChartHighValues,
            increasing: { line: { color: "green" } },
            line: { color: "rgba(31,119,180,1)" },
            low: stockInfo.financialChartLowValues,
            open: stockInfo.financialChartOpenValues,
            type: "candlestick",
          },
        ]}
        layout={{
          width: 1000,
          height: 440,
          title: stockInfo.symbol,
          dragmode: "zoom",
          showlegend: false,
          xaxis: {
            rangeslider: {
              visible: false,
            },
          },
          yaxis: {
            autorange: true,
          },
        }}
        options={{ displaylogo: "false" }}
      />
    </Fragment>
  );
};

CandleStickChart.propTypes = {
  stockInfo: PropTypes.object.isRequired,
};

export default CandleStickChart;
