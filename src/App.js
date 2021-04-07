import React, { useEffect, useState } from "react";
import { useDispatch,  } from "react-redux";
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import ChartContainer from "./components/ChartContainer/ChartContainer";
import { getCompanyOverview } from "./store/actions/alphavantgeActions";
import './App.css';

function App() {
  const [stockTicker, setStockTicker] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getCompanyOverview(stockTicker)(dispatch);
  },[stockTicker, dispatch]);

  return (
    <div className="app-container">
      <SearchBar setStockTicker={setStockTicker}/>
      {stockTicker
      ?(
        <div>
          <Header />
          <div className="performance-metric-container">
            <CompanyProfile />
            <ChartContainer stockTicker={stockTicker} />
          </div>
        </div>)
      : <div> please enter a stock symobl</div>
      }
    </div>
  );
}

export default App;
