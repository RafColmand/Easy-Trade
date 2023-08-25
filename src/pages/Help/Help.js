import React from "react"
import "./Help.css"

import ContainerInit from "../../components/ContainerComponent/ContainerInit/ContainerInit"
import ListGuides from "../../components/List/ListGuides/ListGuides"
import ListTutorials from "../../components/List/ListTutorials/ListTutorials"

function Help() {

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
        <ListGuides url={"/Details/"}/>
      </div>
      
      <div className="Help_section3">
        <ListTutorials url={"/Details/"}/>
      </div>


    </div>
   </ContainerInit>
  );
}

export default Help;