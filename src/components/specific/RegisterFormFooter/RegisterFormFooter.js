import React from 'react'
import Message from '../texts/Message/Message'
import InternalLinks from '../links/InternalLinks/InternalLinks'
import "./RegisterFormFooter.css"

const RegisterFormFooter = () => {
  return (
    <div className="footer-form">
                <Message type="l-gray" >¿Ya tienes una cuenta? {<InternalLinks to="/login" type="light" >Ingresa aquí</InternalLinks>} </Message>
            </div>
  )
}

export default RegisterFormFooter