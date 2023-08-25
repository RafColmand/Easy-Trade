import React, {useState} from "react"
import "./ListGuides.css"

// Data
import {HelpData} from "../../../data/help"

const ListGuides= ({ url }) => {
    
    const [activeHelp] = useState(null)
    let guides = HelpData.filter((datas) => datas.type===1);
    
    return (
        <div>
            <div className="title"><h2>Guía de Usuario</h2></div>
            <div className="guides">
            {guides.map((data) => (
                            <div  key={`${data.id}-help`} className={`guide${data.id === activeHelp
                                ? "active-activity"
                                : ""}`}
                            > 
                            <a href={url + data.id}>
                                <div className="image-guide">
                                <img className="img-gui" src={data.url} alt="image1"/>
                                </div>
                                
                            <div className="subtitle"><h2>{data.title}</h2></div>
                            </a> 
                            </div>
                    ))} 
            </div>
        </div>
    );

}

export default ListGuides