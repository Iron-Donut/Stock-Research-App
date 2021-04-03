import { GET_CHART_INFO } from "../types";

export const getFinancialInfo = (stockTicker) => async dispatch => {
  const API_KEY = '09SWB5UVOIWR7MJA';

  let financialChartXValuesFunction = [];
  let financialChartCloseValuesFunction = [];
  let financialChartOpenValuesFunction = [];
  let financialChartHighValuesFunction = [];
  let financialChartLowValuesFunction = [];

  return await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockTicker}&outputsize=compact&apikey=${API_KEY}`
    )
      .then((response) => {
        if(!response.ok) {
          console.log(response.status);
        }
        return response.json();
      })
      .then((data)=> {
        for (let key in data['Time Series (Daily)']) {
            financialChartXValuesFunction.push(key);
            financialChartCloseValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
            financialChartOpenValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            financialChartHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            financialChartLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
        }

    const chartInfo = {
        symbol: stockTicker,
        financialChartXValues: financialChartXValuesFunction,
        financialChartCloseValues: financialChartCloseValuesFunction,
        financialChartOpenValues: financialChartOpenValuesFunction,
        financialChartHighValues: financialChartHighValuesFunction,
        financialChartLowValues: financialChartLowValuesFunction,
    };

    dispatch({
      type: GET_CHART_INFO,
      payload: chartInfo
    })
  })
}