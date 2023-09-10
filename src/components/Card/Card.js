import React from "react";
import './Card.css'

const Card = ({children, type}) => {
    return (
        <div className={`cardContent ${
            type > 0 ? "chart" : "card"
          }`}>{children}</div>
    );
}

export default Card;