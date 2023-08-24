import React,  {useState} from "react"
import { useParams } from "react-router-dom";
import "./Details.css"
import { FiPlus, FiMinus } from 'react-icons/fi';

// Data
import {HelpData} from "../../data/help.js"

import ContainerInit from "../../components/ContainerComponent/ContainerInit/ContainerInit";


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
   <ContainerInit>
    <div className='Content'>   
      <div className="IconContext_Provider" >
         <div className="AccordionSection">
         <div className="Container">
            {data.map(inf => (
               <div className="Container_wrap">
                  <div className="title"><h2>{inf.title}</h2></div>
                  <div className="text"><h2>Aqui va la descripcion de la guia o del tutorial
                     </h2></div>
               {inf.inf_help.map((info, index)=>
               <>
                  <div className="Wrap" onClick={() => toggle(index)} key={index}>
                     <h1>{info.inf_title}</h1>
                     <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
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
   </ContainerInit>
  );
}

export default Details;