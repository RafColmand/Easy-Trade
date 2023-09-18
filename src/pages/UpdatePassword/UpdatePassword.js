import React from 'react'

/**Components */
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import ChangePassword from '../../components/Forms/ChangePassword/ChangePassword'
import Card from '../../components/Card/Card'

/**Styles */
import './UpdatePassword.css'

const UpdatePassword = () => {
  
  return (
    <ContainerDashboard section={"Cambiar contraseña"}>
        <div className="children-newPassword">
            <Card type={1}>
              <div className='edit-password'>
                <ChangePassword/>
              </div>
            </Card>
        </div>
    </ContainerDashboard>
  )
}

export default UpdatePassword