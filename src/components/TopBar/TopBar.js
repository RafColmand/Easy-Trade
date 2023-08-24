import React from 'react'
import "./TopBar.css"
import UserCard from "../specific/UserCard/UserCard"

const TopBar = ({ section }) => {
  return (
    <div className='top-bar'>
      <div className="top-bar___section-name">
        {section}
      </div>
      <div className="">
        <UserCard />
      </div>
    </div>
  )
}

export default TopBar