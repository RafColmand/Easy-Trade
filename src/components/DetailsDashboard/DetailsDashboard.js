import React from "react";
import Card from '../Card/Card'
import './DetailsDashboard.css'

const DetailsDashboard = ({details}) => {
    const detailsList = {
        name: "Nombre:",
        country: "País:",
        currency: "Moneda:",
        exchange: "Intercambio Moneda:",
        ipo: "Fecha salida a la bolsa:",
        marketCapitalization: "Capitalización del mercado:",
        finnhubIndustry: "Clasificación de la industria:",
    };

    const convertMillionToBillion = (number) => {
        return (number / 1000).toFixed(2);
    };

    return(
        <Card type={0}>
            <ul className="DetailsContent">
                {Object.keys(detailsList).map((item)=>{
                    return(
                        <li key={item} className="itemDetails">
                            <span className="item">{detailsList[item]}</span>
                            <span className="item2">
                                {item === "marketCapitalization" 
                                ? `${convertMillionToBillion(details[item])}B` 
                                : details[item]}</span>
                        </li>
                    );
                })}
            </ul>
        </Card>
        

    );
}

export default DetailsDashboard