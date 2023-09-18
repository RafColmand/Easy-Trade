import React from 'react'

/**Components*/
import Card from "../Card/Card"

/** */
import { balance } from '../../data/mock'

/**Styles*/
import './Transactions.css'

const Transactions = ({data}) => {
  return (
    <Card type={0}>
      <div>
        <div className='balance'>
          <div className='balanceT'>
            <h2>Balance Total</h2>
            <span>${balance.balanceT}</span>
          </div>
          <div className='balanceC'>
            <h2>Balance Comprometido</h2>
            <span>${balance.balanceC}</span>
          </div>
          <div className='balanceD'>
            <h2>Balance Disponible</h2>
            <span>${balance.balanceD}</span>
          </div>
        </div>
            
        <div className='detailTransactions'> 
          <table class="table"> 
            <thead> <tr> 
              <th>Fecha y hora</th> 
              <th>Tipo de transaccion</th> 
              <th>Metodo de pago</th> 
              <th>Monto</th> 
            </tr> </thead> 
            
            <tbody>
              {data.map((data) => (
                <tr> 
                  <td>{data.date} {data.hour}</td> 
                  <td>{data.type}</td> 
                  <td>{data.paymentMethod}</td> 
                  <td>$ {data.amount}</td>
                </tr> 
              ))}
            </tbody> 
          </table>
        </div>

        
      </div>
      
    </Card>
  )
}

export default Transactions