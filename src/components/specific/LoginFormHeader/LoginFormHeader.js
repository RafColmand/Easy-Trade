import React from 'react'
import logo_light_IMG from "../../../assets/images/logo_light_IMG.png"
import "./LoginFormHeader.css"

const LoginFormHeader = () => {
    return (
        <>
            <p className="login-form__description-text--start">Bienvenido</p>
            <p className="login-form__description-text">Ingresa tu usuario y contraseña para entrar a tu perfil</p>
        </>
    )
}

export default LoginFormHeader