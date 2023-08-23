import React from 'react'
import NavbarDashboard from '../../Navbar/NavbarDashboard/NavbarDashboard'
import TopBar from '../../TopBar/TopBar'
import "./ContainerDashboard.css"
// Data
import data from "../../../data/Navbar.json"

const ContainerDashboard = ({ section, children }) => {
    return (
        <div className="container-dashboard">
            <div className="container-dashboard-left">
                <NavbarDashboard data={data} />
            </div>
            <div className="container-dashboard-right">
                <TopBar section={section} />
                <div className="content-section">
                    {children}
                </div>
            </div>
        </div>)
}

export default ContainerDashboard