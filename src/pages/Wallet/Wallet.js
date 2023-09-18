import React from 'react'

/**Components */
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import Profile from "../../components/Profile/Profile"
import CardWallet from '../../components/CardWallet/CardWallet'
import ChartWallet from '../../components/ChartWallet/ChartWallet'
import Overview from '../../components/Overview/Overview'

/**Styles */
import './Wallet.css'

const Wallet = () => {

  const data= new Date();
  console.log(data)

  const dateString = "2023-09-21";
  const dateObject = new Date(dateString);
  console.log(dateObject);

  return (
    <ContainerDashboard section={"Billetera"}>
        <div className='wallet-section'>
          <div className='wallet-s1'>
            <div className='wallet-profile'>
                <Profile/>
            </div>
            <div className='card-wallet'>
                <CardWallet/>
            </div>
          </div>

          <div className='wallet-s2'>
            <div className='detail_active'>
              <div className='wallet-chart'>
                <ChartWallet/>
              </div>
              <div className='detail_act'> 
                <Overview 
                symbol={"APPL"} 
                price= {"200"} 
                change={"0.10"}
                changePercent={"10"}
                currency={"USD"}
              />
              </div>
            </div>
            
            <div className='wallet-assets'>
              Lista de activos
            </div>
          </div>
        </div>
    </ContainerDashboard>
  )
}

export default Wallet