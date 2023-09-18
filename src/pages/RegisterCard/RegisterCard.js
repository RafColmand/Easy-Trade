import React from 'react'

/**Components */
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import Card from '../../components/Card/Card'
import CardForm from '../../components/Forms/CardForm/CardForm'

/**Styles */
import './RegisterCard.css'

const RegisterCard = () => {
  
  return (
    <ContainerDashboard section={"Registrar Tarjeta"}>
        <div className="children-RegisterCard">
            <Card type={1}>
              <div className='register-card'>
                <CardForm/>
              </div>
            </Card>
        </div>
    </ContainerDashboard>
  )
}

export default RegisterCard