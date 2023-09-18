import React, {useState} from 'react'
import { MdNotificationsActive } from 'react-icons/md'
import {BiUser, BiLogOut} from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"
import "./UserCard.css"

const UserCard = () => {
    let img = null
    const [open, setOpen] = useState(false);

    return (
        <div className='user-card-container'>
            <div>
                <MdNotificationsActive className='user-card-container__notification'/>
            </div>
            <div className="user-card">
                {img ? (<div className="user-card-photo">
                    <img src="" alt="" onClick={()=>setOpen(!open)}/>
                </div>)
                    : <div className="user-card-icon" onClick={()=>setOpen(!open)}>
                        R
                    </div>} 
            </div>
            {
                open && (
                    <div className='sub-menu-wrap'>
                        <div className='sub-menu'>
                            <div className='user-info'>
                                {img ? (<div className="user-card-photo">
                                    <img src="" alt="" />
                                </div>)
                                    : <div className="user-card-icon">
                                        R
                                    </div>} 
                                <h2 className='name-user'>Rafael Colmenarez</h2>
                            </div>
                            <hr></hr>
                            <a href='/user' className="sub-menu-link" onClick={()=>setOpen(false)}>
                                <BiUser className='icon-link'/>
                                <p>Editar Perfil</p>
                            </a>
                            <a href='/updatePassword' className="sub-menu-link" onClick={()=>setOpen(false)}>
                                <AiOutlineSetting className='icon-link'/>
                                <p>Cambiar contraseña</p>
                            </a>
                            <a href='/login' className="sub-menu-link" onClick={()=>setOpen(false)}>
                                <BiLogOut className='icon-link'/>
                                <p>Cerrar sesion</p>
                            </a>
                        </div>
                     </div>
                )
            }
            
        </div>
    )
}

export default UserCard