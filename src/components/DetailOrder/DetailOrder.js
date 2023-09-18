import React from "react";
import './DetailOrder.css'

const DetailOrder = ({simbolo, monto, cantidad, tipo}) => {
    return(
        <div className="DetailOrder">
            <ul className="Details-Content">
                <li className="Details-item">
                    <span className="itemD">Simbolo</span>
                    <span className="itemDT">{simbolo}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">Monto</span>
                    <span className="itemDT">{monto}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">cantidad</span>
                    <span className="itemDT">{cantidad}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">Tipo de orden</span>
                    <span className="itemDT">{tipo}</span>
                </li>
            </ul> 
        </div> 

    );
}

export default DetailOrder