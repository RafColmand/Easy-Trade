import React from 'react'
import { MdNotificationsActive } from 'react-icons/md'
import "./UserCard.css"

const UserCard = () => {
    let img = null

    return (
        <div className='user-card-container'>
            <div>
                <MdNotificationsActive className='user-card-container__notification'/>
            </div>
            <div className="user-card">
                {img ? (<div className="user-card-photo">
                    <img src="" alt="" />
                </div>)
                    : <div className="user-card-icon">
                        R
                    </div>}
                <p className="name-user">Rafael Colmenarez</p>
            </div>
        </div>
    )
}

export default UserCard