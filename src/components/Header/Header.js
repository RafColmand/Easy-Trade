import React from "react";
import Search from "../Search/Search";

const Header = ({name}) => {

    return(
        <div className="HeaderContent">
          <h2 className='title_header'>{name}</h2>
          <Search/>  
        </div>
        
    )
}

export default Header