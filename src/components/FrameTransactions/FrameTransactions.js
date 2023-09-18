import React from "react";
import './FrameTransactions.css'

const FrameTransactions = ({children, name}) => {
    return (
        <div className="Transactions-form">
            <div className='titleTransactions'>
                    <h2>{name}</h2>
            </div>
            {children}
        </div>
    );
}

export default FrameTransactions;