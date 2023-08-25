import React, {useState} from "react"
import "./ListTutorials.css"

// Data
import {HelpData} from "../../../data/help"

const ListTutorials= ({ url }) =>  {
    
    const [activeHelp] = useState(null)
    let tutorials = HelpData.filter((datas) => datas.type===2);
    
    return (
        <div>
            <div className="title"><h2>Tutoriales de Trading</h2></div>
            <div className="tutorials">
            {tutorials.map((data) => (
                            <div key={`${data.id}-help`} className={`tutorial${data.id === activeHelp
                                ? "active-activity"
                                : ""}`}
                            > 
                            <a href={url + data.id}>
                                <div className="image-tutorial">
                                <img className="img-tut" src={data.url} alt="image1"/>
                                </div>
                                
                                <div className="subtitle"><h2>{data.title}</h2></div>
                            </a>  
                            </div>
                        ))} 
            </div>
        </div>
    );

}

export default ListTutorials