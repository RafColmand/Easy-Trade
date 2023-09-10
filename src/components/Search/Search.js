import React, {useState} from "react";
import { GrClose } from "react-icons/gr"
import {IoIosSearch} from "react-icons/io"
import SearchResult from "../SearchResult/SearchResult";
import {searchSymbol} from "../../Utils/api/stock-api"
import './Search.css'

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState();

    /**const updateBestMatches = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/search?q=${input}&token=${process.env.REACT_APP_API_KEY}`);
      const res = await response.json();
      setBestMatches(res.results);
      console.log(bestMatches)
    }*/

    const updateBestMatches = async () => {
      try {
        if (input) {
          const searchResults = await searchSymbol(input);
          const result = searchResults.result;
          setBestMatches(result);
        }
      } catch (error) {
        setBestMatches([]);
        console.log(error);
      }
    };

    
    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    return(
        <div className="SearchContent">
            <input 
              type='text' 
              value={input} 
              className="inputSearch"
              placeholder="Search stock..."
              onChange={(event) => setInput(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                    updateBestMatches();
                }
              }}
            />

            {input && <button onClick={clear} className="XIcon">
              <GrClose />
            </button>}
              
            <button onClick={updateBestMatches} className="SearchIcon">
                <IoIosSearch className="SIcon"/>
            </button>

            {input && bestMatches?.length > 0 ? (
              <SearchResult results={bestMatches} />
            ) : null}
        </div>
        

    );
}

export default Search