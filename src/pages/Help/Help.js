import React,  {useState} from "react"
import "./Help.css"

// Data
import {HelpData} from "../../data/help.js"

import ContainerInit from "../../components/ContainerComponent/ContainerInit/ContainerInit"

function Help() {
  const [activeHelp] = useState(null)

  let guides = HelpData.filter((datas) => datas.type===1);

  let tutorials = HelpData.filter((datas) => datas.type===2);

  return (
   <ContainerInit>
    <div className='Content'>

      <div className="Help_section1">

          <div className="Help_text">

            <div className="title"><h2>¿En que podemos ayudarte?</h2></div>

            <div className="text"><h2>Elija la forma más conveniente de ponerse en contacto con 
              nuestro equipo de soporte. Haga su pregunta por correo electrónico o chat en Whatsapp. 
              Profesionales experimentados responderán a cualquiera de sus preguntas sobre la 
              plataforma.</h2></div>

          </div>

          <div className="image-help">
            <img className="img-help" src={require('../../assets/help.png')} alt="image1"/>
          </div>

      </div>

      <div className="Help_section2">

        <div className="title"><h2>Guía de Usuario</h2></div>

        <div className="guides">
          {guides.map((data) => (
            
                        <div  key={`${data.id}-help`} className={`guide${data.id === activeHelp
                            ? "active-activity"
                            : ""}`}
                        > 
                          <a href={"/Details/" + data.id}>
                            <div className="image-guide">
                              <img className="img-gui" src={data.url} alt="image1"/>
                            </div>
                            
                           <div className="subtitle"><h2>{data.title}</h2></div>
                          </a> 
                        </div>
                   ))} 
        </div>
      </div>
      
      <div className="Help_section3">

        <div className="title"><h2>Tutoriales de Trading</h2></div>

        <div className="tutorials">
          {tutorials.map((data) => (
                        <div key={`${data.id}-help`} className={`tutorial${data.id === activeHelp
                            ? "active-activity"
                            : ""}`}
                        > 
                          <a href={"/Details/" + data.id}>
                            <div className="image-tutorial">
                              <img className="img-tut" src={data.url} alt="image1"/>
                            </div>
                            
                            <div className="subtitle"><h2>{data.title}</h2></div>
                          </a>  
                        </div>
                    ))} 
        </div>
      </div>
    </div>
   </ContainerInit>
  );
}

export default Help;