import React, {useState} from 'react'

/**Components */
import ContainerDashboard from '../../components/ContainerComponent/ContainerDashboard/ContainerDashboard';
import Transactions from '../../components/Transactions/Transactions'
import BuyAssets from '../../components/BuyAssets/BuyAssets'
import SellAssets from '../../components/SellAssets/SellAssets';

/*Data*/
import {transactionsPayment} from "../../data/mock"

/**Styles */
import './Orders.css'

const Orders = () => {
    const [openT, setOpenT] = useState(true);
    const [openC, setOpenC] = useState(false);
    const [openV, setOpenV] = useState(false);
    
    const [data] = useState(transactionsPayment);
  
    const openTransactions = () => {
      setOpenC(false);
      setOpenV(false);
      setOpenT(true);
    };
  
    const openOtro1 = () => {
      setOpenT(false);
      setOpenC(true);
      setOpenV(false)
    };
  
    const openOtro2 = () => {
      setOpenT(false);
      setOpenC(false);
      setOpenV(true);
    };
  
    return (
      <ContainerDashboard section={"Ordenes"}>
        <div className="options">
          <nav className="Nav">
            <a 
            onClick={openTransactions}
            className={openT ? "active" : ""}>Historial</a>
  
            <a 
            onClick={openOtro1}
            className={openC ? "active" : ""}>Comprar</a>
  
            <a 
            onClick={openOtro2}
            className={openV ? "active" : ""}>Vender</a>
          </nav>
        </div>
  
        <div className="section">
  
          {openT && (
          <div className="Transactions">
            <Transactions data={data}/>
          </div>
          )
          }
  
          {openC && (
          <div className="Transactions">
            <BuyAssets/>
          </div>
          )
          }
  
          {openV && (
          <div className="Transactions">
            <SellAssets/>
          </div>
          )
          }
         
        </div>
      </ContainerDashboard>
    )
}

export default Orders