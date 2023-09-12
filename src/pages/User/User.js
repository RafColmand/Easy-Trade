import React from 'react'
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import Profile from '../../components/Profile/Profile'
import EditProfile from '../../components/Forms/EditProfile/EditProfile'
import './User.css'

const User = () => {
  return (
    <ContainerDashboard section={"Ajuste Perfil"}>
        <div className="children">
            <div className='edit-profile'>
                <EditProfile/>
            </div>
            <div className='img-profile'>
              <div className='profile'>
                <Profile/>
              </div>
              <div className='buttons'>
                <button className="button1">Cambiar imagen</button>
                <button className="button1">Quitar imagen</button>
              </div>
            </div>
        </div>
    </ContainerDashboard>
  )
}

export default User