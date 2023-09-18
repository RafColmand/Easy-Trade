import React from "react";
import './Voucher.css'

const Voucher = () => {
   
    const data = {
        amount: "Monto:",
        tarjet: "Nro Tarjeta:",
        concept: "Concepto:",
        type:"Tipo de transaccion:"
    };

    const data2 = {
        amount: "$200",
        tarjet: "Nro 123abc456",
        concept: "Deposito",
        type:"deposito"
    }

    return(
        <div className="DetailTransaction">
            <ul className="Details-Content">
                {Object.keys(data).map((item)=>{
                    return(
                        <li key={item} className="Details-item">
                            <span className="itemD">{data[item]}</span>
                            <span className="itemDT">{data2[item]}</span>
                        </li>
                    );
                })}
            </ul> 
        </div> 

    );
}

export default Voucher