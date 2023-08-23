import React, {useState} from "react"
import './Initiation.css';



const ReadMore= ({children}) => {

  const text = children;
  const [isReadMore, setIsReadMore] =useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text1">
      {isReadMore ? text.slice(0,170) : text}
      <span onClick={toggleReadMore} className="read-pr-hide"> 
      {isReadMore ? "... Leer más" : "... Mostrar menos"}      
      </span>
    </p>
  );
};


function Initiation() {

    
  return (
    <div className='Content'>
      <div className="Section-1">

        <div className="text-section1">
          <div className="title"><h2>Rentabilidad en Aumento</h2></div>
          <div className="text"><h2>La plataforma de trading que apoya tus objetivos financieros.</h2></div>
          <a href="#" className="button1" target="_blank" rel="noreferrer">Registrate Ahora</a>
        </div>

        <div>
          <img className="image-section1" src={require('../../assets/S1.png')} alt="image1"/>
        </div>

      </div>

      <div className="Section-2">
        
        <div>
          <img className="image-section2" src={require('../../assets/S2.png')} alt="image1"/>
        </div>
        
        <div className="text-section2">
          <div className="title"><h2> Conviértase en un Inversor Profesional </h2></div>

          <div className="read_more">
            <div className="subtitle"><h2>UNA PLATAFORMA COMERCIAL CONFIABLE ES LA BASE DEL ÉXITO</h2></div>
            <div className="text_readMore">
              <h2>
                <ReadMore> Todos los comerciantes quieren obtener ganancias en las mejores condiciones 
                  y no quieren temer por la seguridad de sus fondos personales. La primera cosa obvia 
                  que hace un comerciante novato es estudiar diferentes sitios de comercio en línea.
                  
                  Los criterios principales para el éxito de una plataforma de negociación en Internet 
                  son la reputación internacional, la fiabilidad inquebrantable, el apoyo constante en 
                  todas las etapas y las características únicas y útiles de negociación. Estas 
                  cualidades se combinan en el corredor de Olymp Trade y en la plataforma de negociación 
                  electrónica galardonada.
                </ReadMore>
              </h2>
            </div>
          </div>

          <div className="read_more">
            <div className="subtitle"><h2>ES HORA DE ACTUAR CON EL BRÓKER COMERCIAL INTERNACIONAL DE EASY TRADE</h2></div>
            <div className="text_readMore">
              <h2>
                <ReadMore> El comercio le traerá ganancias con el apoyo adecuado, educación constante 
                  y un enfoque razonable. Easy Trade es una plataforma de corredores que ha creado todas 
                  las condiciones para ayudarlo a mejorar su vida comercial de todas las formas posibles.
                  
                  Desde herramientas educativas para corredores, cuentas de demostración y soporte las 24 
                  horas, los 7 días de la semana hasta su éxito financiero, Easy Trade trabaja 
                  incansablemente para mantenerse a la vanguardia en el comercio en línea. ¡Únete ahora! 
                  Aproveche al máximo este líder comercial en línea y ábrase paso en el mundo del comercio 
                  profesional.
                </ReadMore>
              </h2>
            </div>
          </div>

        </div>

      </div>

      <div className="Section-3">
        <div className="title"><h2>Encuéntrese en Easy Trade</h2></div>

        <div className="Container1-2">
          <div className="Section3_1">
            <div className="subtitle"><h2>SI EL TRADING NUNCA FUE UNA OPCIÓN PARA USTED ANTES</h2></div>
            
            <div className="items">
              <li className="text1">Ponemos a su disposición Una gran cantidad de teoría de trading y consejos 
                prácticos proporcionados aquí para usted.</li>

              <li className="text1">Nuestro equipo de soporte está preparado para responder cualquier pregunta 
                y ayudarle 24/7.</li>
            </div>
              
          </div>
          
          <div className="Section3_2">
            
            
            <div className="Container3_2">

              <div className="text_section3_2">
                <div className="subtitle"><h2>SI BUSCA UNA PLATAFORMA DE TRADING CONFIABLE Y ESTABLE</h2></div>
                
                <div className="items">
                  <li className="text1">Soportamos sus sistemas de pago y su divisa local</li>

                  <li className="text1">Utilice cualquier dispositivo de su conveniencia. Nuestra 
                  plataforma de trading está optimizada para adaptarse  incluso a cualquier dispositivo, 
                  sea de escritorio o mòvil.</li>

                </div>

              </div>
              
              <div>
                <img className="image-section3_2" src={require('../../assets/S3.1.png')} alt="image1"/>
              </div>

            </div>
            

          </div>
        </div>

        <div className="Section3_3">
          
          <div>
            <img className="image-section3_3" src={require('../../assets/S3.2.png')} alt="image1"/>
          </div>

          <div className="Container3_3">
            <div className="subtitle"><h2>SI EL TRADING ES ALGO MÁS QUE UN PASATIEMPO PARA USTED</h2></div>
              
            <div className="items">
                <li className="text1">Utilice las señales de trading la cual te proporcionan 
                información valiosa sobre el momento adecuado para comprar o vender activos
                financieros. Estas señales Son como faros en la oscuridad del mercado, 
                ayudándote a identificar oportunidades y minimizar riesgos.</li>

                <li className="text1">Personalice la interfaz y los gráficos para adaptarlos a sus 
                necesidades</li>

                <li className="text1">Todas las mejores funciones de trading como el análisis técnico 
                y fundamental de los productos y derivados financieros, la realización de transacciones 
                de compra y venta, la actualización y balance de carteras y la investigación de 
                mercados con el objetivo de encontrar nuevas oportunidades.</li>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Initiation;