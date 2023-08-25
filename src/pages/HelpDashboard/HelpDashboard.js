import React from 'react'

//css
import './HelpDashboard.css'

//components
import ContainerDashboard from "../../components/ContainerComponent/ContainerDashboard/ContainerDashboard"
import ListGuides from "../../components/List/ListGuides/ListGuides"
import ListTutorials from "../../components/List/ListTutorials/ListTutorials"

const HelpDashboard = () => {
  return (
    <ContainerDashboard section={"Ajustes"}>
      <div className="children">
        <div>
          <ListGuides url={"/DetailsDashboard/"}/>
        </div>
        <div className='tut'>
          <ListTutorials url={"/DetailsDashboard/"}/>
        </div>
      </div>
    </ContainerDashboard>
  )
}

export default HelpDashboard