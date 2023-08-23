import React from 'react'
import Message from '../texts/Message/Message'
import InternalLinks from '../links/InternalLinks/InternalLinks'
import "./LoginFormFooter.css"

const LoginFormFooter = () => {
  return (
    <div className="footer-form">
                <Message type="l-gray" >¿Olvidaste tu contraseña? {<InternalLinks to="/" type="light" >Ingresa aquí</InternalLinks>} </Message>
                <div className="line"></div>
                <Message type="l-gray" >¿No tienes cuenta? {<InternalLinks to="/Register" type="light" >Regístrate aquí</InternalLinks>} </Message>
            </div>
  )
}

export default LoginFormFooter