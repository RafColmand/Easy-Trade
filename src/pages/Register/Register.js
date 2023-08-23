import React from "react"
import login_IMG from '../../assets/images/login_IMG.png'
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm"
import './Register.css'

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-page-left">
          <img src={login_IMG} alt="" className="register-page__front" />
        </div>
        <div className="register-page-right">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register