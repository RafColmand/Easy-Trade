import React, {useState} from "react";

import { useNavigate }    from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const [ isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const onClick = ()=>{
        navigate('/login');
    }
    return(
        <div className="navbar">
            <div className="nav_logo">
                <img className="logo--dropdown logo title" src={require('../../assets/logo.png')} alt="logo"/>
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/"> Inicio </a>  
                <a href="/philosophy"> Sobre Nosotros </a>   
                <a href="/help"> Centro de Ayuda </a> 
                <a onClick={onClick} className="button-login" target="_blank" rel="noreferrer">Iniciar sesion</a>
            </div>
            
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () =>
                setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}

export default Navbar