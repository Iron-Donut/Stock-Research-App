import React, { useEffect, useState } from "react";
import LineChart from "../LineChart/LineChart";
import { useDispatch, useSelector } from "react-redux";
import CandleStickChart from "../CandleStickChart/CandleStickChart";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { getChartInfo } from "../../store/actions/alphavantgeActions";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import "./ChartContainerStyles.css";

const ChartContainer = ({ stockTicker }) => {
  const chartInfo = useSelector(state => state.stockInfo.chartInfo);
  const dispatch = useDispatch();
  const [typeOfChart, setTypeOfChart] = useState("line");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getChartInfo(stockTicker)(dispatch)
    setIsLoading(false);
  }, [stockTicker, dispatch]);

  const handleChartChange = (e) => {
    setTypeOfChart(e.target.value);
  };

  const displayChart = () => {
    return typeOfChart === "candlestick" ? (
      <CandleStickChart stockInfo={chartInfo} />
    ) : (
      <LineChart stockInfo={chartInfo} color="green" />
    );
  };

  return (
    <div className="chart-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>{chartInfo ? displayChart() : null}</div>
          <div>
            {chartInfo ? (
              <div className="form-control">
                <InputLabel shrink id="type-of-chart-select-label">
                  Chart Type
                </InputLabel>
                <Select
                  labelId="type-of-chart-select-label"
                  id="type-of-chart-select"
                  value={typeOfChart}
                  onChange={handleChartChange}
                  displayEmpty
                >
                  <MenuItem value={"line"}>Line</MenuItem>
                  <MenuItem value={"candlestick"}>CandleStick</MenuItem>
                </Select>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

ChartContainer.propTypes = {
  stockTicker: PropTypes.string.isRequired,
};

export default ChartContainer;
