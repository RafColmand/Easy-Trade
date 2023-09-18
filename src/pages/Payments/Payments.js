import React, {useState} from 'react'

/*Components*/
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import Transactions from "../../components/Transactions/Transactions"
import Deposit from '../../components/Deposit/Deposit'
import Remove from '../../components/Remove/Remove'

/*Data*/
import {transactionsPayment} from "../../data/mock"

/*Styles*/
import './Payments.css'

const Payments = () => {
  const [openT, setOpenT] = useState(true);
  const [openD, setOpenD] = useState(false);
  const [openR, setOpenR] = useState(false);
  const [data] = useState(transactionsPayment);

  console.log(data)

  const openTransactions = () => {
    setOpenD(false);
    setOpenR(false);
    setOpenT(true);
  };

  const openOtro1 = () => {
    setOpenT(false);
    setOpenD(true);
    setOpenR(false)
  };

  const openOtro2 = () => {
    setOpenT(false);
    setOpenD(false);
    setOpenR(true);
  };

  return (
    <ContainerDashboard section={"Pagos"}>
      <div className="options">
        <nav className="Nav">
          <a
          onClick={openTransactions}
          className={openT ? "active" : ""}>Historial</a>

          <a 
          onClick={openOtro1}
          className={openD ? "active" : ""}>Depositar</a>

          <a 
          onClick={openOtro2}
          className={openR ? "active" : ""}>Retirar</a>
        </nav>
      </div>

      <div className="section">

        {openT && (
        <div className="Transactions">
          <Transactions data={data}/>
        </div>
        )
        }

        {openD && (
        <div className="Deposit" >
          <Deposit/>
        </div>
        )
        }

        {openR && (
        <div className="Remove">
          <Remove/>
        </div>
        )
        }
       
      </div>
    </ContainerDashboard>
  )
}

export default Payments