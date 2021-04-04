import React, { useEffect, useState } from "react";
import { useDispatch,  } from "react-redux";
import Header from './components/Header/Header';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import ChartContainer from "./components/ChartContainer/ChartContainer";
import { getCompanyOverview } from "./store/actions/alphavantgeActions";
import './App.css';

function App() {
  const [stockTicker, setStockTicker] = useState('AAPL');

  const dispatch = useDispatch();

  useEffect(() => {
    getCompanyOverview(stockTicker)(dispatch);
  },[stockTicker, dispatch]);

  return (
    <div className="app-container">
      <Header />
      <div className="performance-metric-container">
        <CompanyProfile  />
        <ChartContainer stockTicker={stockTicker} />
      </div>
    </div>
  );
}

export default App;
