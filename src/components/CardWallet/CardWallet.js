import React, {useState} from 'react'

import { useNavigate }    from "react-router-dom"

/**Components */
import Card from "../Card/Card"

/**Styles */
import './CardWallet.css'

const CardWallet = () => {

    const navigate = useNavigate();

    const onClick = () =>{
        navigate('/registerCard');
    }
    
    const [activeCard, setActiveCard] = useState(false);
  return (
    <Card type={0}>
        <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Tarjeta</h3>
            </div>
            {activeCard && (
            <div className="grid-c1-content">
                <p>Balance</p>
                <div className="lg-value">$ 22,000</div>
                <div className="card-wrapper">
                    <span className="card-pin-hidden">**** **** **** </span>
                    <span>1234</span>
                </div>
                <div className="card-logo-wrapper">
                    <div>
                        <p className="text text-silver-v1 expiry-text">Expires: 12/22</p>
                    </div>
                </div>
            </div>)}
            {!activeCard && (
                <button className='button1' onClick={onClick}>Agregar tarjeta</button>)
            }
        </div>
    </Card>
    
    
  )
}

export default CardWallet