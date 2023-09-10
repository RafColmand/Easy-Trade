import React, {useEffect, useState, useContext} from 'react'
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import Header from '../../components/Header/Header'
import DetailsDashboard from '../../components/DetailsDashboard/DetailsDashboard'
import Overview from '../../components/Overview/Overview'
import Chart from '../../components/Chart/Chart'
import StockContext from "../../Context/StockContext"
import { fetchStockDetails, fetchQuote } from '../../Utils/api/stock-api'

import './Home.css'

const Home = () => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <ContainerDashboard section={"Dashboard"}>
      <div className='DashboardContent'>
        <div className='header_dash'>
          <Header name={stockDetails.name}/>
        </div>
        <div className='chart_dash'>
          <Chart/>
        </div>
        <div className='overview_dash'>
          <Overview 
            symbol={stockSymbol} 
            price= {quote.pc} 
            change={quote.d}
            changePercent={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className='details_dash'>
          <DetailsDashboard details={stockDetails}/>
        </div>
      </div>
    </ContainerDashboard>
  )
}

export default Home