import React, {useState} from "react"
import './ContainerInit.css';

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function ContainerInit({children}) {
    return(
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    );
}

export default ContainerInit;
