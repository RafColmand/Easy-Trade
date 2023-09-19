import React,  {useState} from "react"
import { useParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp} from 'react-icons/fa'

import "./Details.css"

// Data
import {HelpData} from "../../data/help.js"



function Details() {

   const param = useParams();
   let id= param.id;

   let data = HelpData.filter((datas) => datas.id===id);

   const [clicked, setClicked] = useState(false);

   const toggle = index => {
      if (clicked === index) {
         //if clicked question is already active, then close it
         return setClicked(null);
      }

      setClicked(index);
   };

  return (
    <div className='Content'>   
      <div className="IconContext_Provider" >
         <div className="AccordionSection">
         <div className="Container">
            {data.map(inf => (
               <div className="Container_wrap">
                  <div className="title"><h2>{inf.title}</h2></div>
                  <div className="text"><h2>{inf.desc}</h2></div>
               {inf.inf_help.map((info, index)=>
               <>
                  <div className="Wrap" onClick={() => toggle(index)} key={index}>
                     <h1>{info.inf_title}</h1>
                     <span>{clicked === index ? <FaAngleUp/> : <FaAngleDown />}</span>
                  </div>
                  {clicked === index ? (
                     <div className="Dropdown">
                        <p className="text1">{info.description}</p>
                     </div>
                  ) : null}
               </>
               
            )}
            </div>
            ))}
         </div>
         </div>
      </div>
    </div>
  );
}

export default Details;