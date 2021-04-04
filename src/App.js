import React, { useEffect, useState } from "react";
import { useDispatch,  } from "react-redux";
import Header from './components/Header/Header';
import ChartContainer from "./components/ChartContainer/ChartContainer";
import { getCompanyOverview } from "./store/actions/alphavantgeActions";

function App() {
  const [stockTicker, setStockTicker] = useState('AAPL');

  const dispatch = useDispatch();

  useEffect(() => {
    getCompanyOverview(stockTicker)(dispatch);
  },[stockTicker, dispatch]);

  return (
    <div className="app-container">
      <Header />
      <ChartContainer stockTicker={stockTicker} />
    </div>
  );
}

export default App;
