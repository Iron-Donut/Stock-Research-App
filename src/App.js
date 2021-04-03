import React, { useState } from "react";
import ChartContainer from "./components/ChartContainer/ChartContainer";

function App() {
  const [stockTicker, setStockTicker] = useState('AAPL');

  return (
    <div className="App">
      <ChartContainer stockTicker={stockTicker} />
    </div>
  );
}

export default App;
