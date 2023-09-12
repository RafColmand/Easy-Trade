import React from "react";
import Card from "../../components/Card/Card";
import "./Profile.css"

const Profile = () => {
    let img = null
    return (
        <Card type={0}>
            <div className='info-user'>
                {img ? (<div className="photo">
                        <img src="" alt="" />
                        </div>)
                    : <div className="user-icon">
                        R
                    </div>} 
                <h2 className='name-user-profile' >Rafael Colmenarez</h2>
                <h3 className="id-user">ID: 123ABC45D</h3>
            </div>
        </Card>
    );
};

export default Profile;