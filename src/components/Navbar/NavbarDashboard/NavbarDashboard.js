import React, {useState} from 'react'
import { Link } from "react-router-dom"

import logo from '../../../assets/logo.png'
import isotipo from '../../../assets/isotipo.png'

import IconsComponentDashboard from '../../IconsComponent/IconsComponentDashboard/IconsComponentDashboard'

import './NavbarDashboard.css'

const NavbarDashboard = ({ data }) => {

    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div className='navegation' onClick={(e) => { 
            setActiveMenu(!e.currentTarget.classList.contains('active'))
            e.currentTarget.classList.toggle('active') 
            }}>
            <ul>
                <li>
                    <img src={activeMenu ? logo : isotipo} alt="eden-logo" />
                </li>
                {data.elements && data.elements.map((section, index) => {
                    return (section.type === "Link" ?
                        <li key={"nav-li-" + index} >
                            <Link to={section.href}>
                                <IconsComponentDashboard icon={section.icon} className="icon"/>
                                <span className="titlee">{section.name}</span>
                            </Link>
                        </li> :
                        <li key={"nav-li-" + index}>
                            <a href={section.href}>
                                <IconsComponentDashboard icon={section.icon} className="icon"/>
                                <span className="titlee">{section.name}</span>                            </a>
                        </li>)
                })}
            </ul>
            <div className="toggle" ></div>
        </div>
    )
}
export default NavbarDashboard