import React from "react"
import './Philosophy.css';

import ContainerInit from "../../components/ContainerComponent/ContainerInit/ContainerInit";

function Philosophy() {

  return (
   <ContainerInit>
    <div className='Content'>

      <div className="Phil_section1">

        <div className="Container_phil1">

          <div className="Phil_text">

            <div className="title"><h2>Plataforma de Trading en Línea</h2></div>
            <div className="text"><h2>La plataforma Easy Trade es una plataforma de trading en línea 
              que permite a los usuarios operar en una variedad de instrumentos financieros.</h2></div>
            <a href="/Register" className="button1" target="_blank" rel="noreferrer">Registrate Ahora</a>

          </div>

          <div className="image-phil1">
            <img className="img-p1" src={require('../../assets/philosophy_1.png')} alt="image1"/>
          </div>

        </div>

      </div>

      <div className="Phil_section2">

        <div className="Container_phil2_1"> 
          <div className="image-phil2" >
            <img className="img-ph2" src={require('../../assets/philosophy_2.png')} alt="image1"/>
          </div>

          <div className="phil_text2">
            <div className="title"><h2>Nuestra Misión</h2></div>

            <div className="text"><h2> La plataforma Easy Trade proporciona a los usuarios las 
              herramientas y el acceso necesarios para participar en los mercados financieros de 
              manera segura y eficiente. Esto implica ofrecer una plataforma tecnológica confiable y 
              fácil de usar.</h2></div>
          </div>
        </div>

        <div className="Container_phil2_2"> 
          
          <div className="phil_text3">
            <div className="title"><h2>Enfocados en convertirnos en Líderes</h2></div>

            <div className="text"><h2>Nos enfocamos en ser líderes en nuestro campo y en ser 
              reconocidos como una opción confiable y de confianza para los traders e inversores en 
              todo el mundo. ofrecemos una amplia gama de productos financieros y nos adaptamos 
              continuamente a las necesidades cambiantes de los usuarios.</h2></div>
          </div>
          
          <div>
            <img className="image-phil3" src={require('../../assets/philosophy_3.png')} alt="image1"/>
          </div>
        </div>

      </div>

      <div className="Phil_section3">

        <div className="phil_text4">
          <div className="title"><h2>Nuestros Valores</h2></div>
          <div className="text"><h2>Nuestra plataforma Easy Trade cuenta con valores fundamentales, 
            que guían nuestro comportamiento y nuestras decisiones comerciales, lo que nos lleva a 
            reforzar nuestro compromiso con los usuarios y la calidad de los servicios que brindamos.</h2></div>
        </div>

        <div className="Values_section">

          <div className="Values">

            <div className="image-val">
              <img className="img-val" src={require('../../assets/Iconos/val1.png')} alt="image1"/>
            </div>

           <div className="val_text">
            
            <div className="subtitle"><h2>INTEGRIDAD</h2></div>

            <p className="text1">En Easy Trade actuamos de manera ética y transparente, 
              protegiendo los intereses de los usuarios.</p>

           </div> 

          </div>

          <div className="Values">
            <div className="image-val">
              <img className="img-val" src={require('../../assets/Iconos/val2.png')} alt="image1"/>
            </div>

            <div className="val_text">
            
              <div className="subtitle"><h2>EXCELENCIA EN ATENCIÓN</h2></div>

              <p className="text1">En Easy Trade brindar un excelente servicio al cliente es 
              esencial.</p>

            </div> 
          </div>

          <div className="Values">
            <div className="image-val">
              <img className="img-val" src={require('../../assets/Iconos/val3.png')} alt="image1"/>
            </div>

            <div className="val_text">
            
              <div className="subtitle"><h2>INNOVACIÓN</h2></div>

              <p className="text1">Nuestra plataforma busca constantemente mejorar y adaptarse a las 
              necesidades cambiantes de los usuarios y los mercados.</p>

            </div> 
          </div>
          
          <div className="Values">
            <div className="image-val">
              <img className="img-val" src={require('../../assets/Iconos/val4.png')} alt="image1"/>
            </div>

            <div className="val_text">
            
              <div className="subtitle"><h2>TRANSPARENCIA</h2></div>

              <p className="text1">La transparencia es fundamental para nosotros, es por eso que Easy 
              Trade proporciona información clara y completa a los usuarios.</p>

            </div> 
          </div>

        </div>

      </div>

    </div>
   </ContainerInit>
  );
}

export default Philosophy;