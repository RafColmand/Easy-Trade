import React, {useContext} from "react";
import StockContext from "../../Context/StockContext";
import './SearchResult.css'

const SearchResult = ({results}) => {
    const { setStockSymbol } = useContext(StockContext);
    
    return(
        <ul className="SResultContent">
            {results.map((item) => {
                return(
                    <li 
                    key={item.symbol} 
                    className="li_Result"
                    onClick={() => {
                        setStockSymbol(item.symbol);
                    }}>
                        <span className="itemSym">{item.symbol}</span>
                        <span className="itemDesc">{item.description}</span>
                    </li>
                );
            }
            )}
        </ul>
        

    );
}

export default SearchResult