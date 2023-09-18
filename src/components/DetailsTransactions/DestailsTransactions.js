import React from "react";
import './DetailsTransactions.css'

const DetailsTransactions = ({monto, tarjeta, concepto, tipo}) => {
    return(
        <div className="DetailTransaction">
            <ul className="Details-Content">
                {/*{Object.keys(data).map((item)=>{
                    return(
                        <li key={item} className="Details-item">
                            <span className="itemD">{data[item]}</span>
                            <span className="itemDT">{data2[item]}</span>
                        </li>
                    );
                })}*/}

                <li className="Details-item">
                    <span className="itemD">Monto</span>
                    <span className="itemDT">${monto}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">Número de tarjeta</span>
                    <span className="itemDT">{tarjeta}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">Concepto</span>
                    <span className="itemDT">{concepto}</span>
                </li>
                <li className="Details-item">
                    <span className="itemD">Tipo de transaccion</span>
                    <span className="itemDT">{tipo}</span>
                </li>
            </ul> 
        </div> 

    );
}

export default DetailsTransactions