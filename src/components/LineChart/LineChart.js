import React from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const LineChart = ({stockInfo, color}) => {
  return (
    <>
      <Plot
        data={[
          {
            x: stockInfo.financialChartXValues,
            y: stockInfo.financialChartCloseValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: color},
          }
        ]}
        layout={{width: 1000, height: 440, title: stockInfo.symbol}}
        options ={ {displaylogo: 'false'} }
      />
    </>
  );
};

LineChart.propTypes = {
  stockInfo: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
}

export default LineChart;