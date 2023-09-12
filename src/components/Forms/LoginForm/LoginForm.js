import React from "react"
import { useFormik } from "formik";
import { useNavigate }    from "react-router-dom"

import LoginFormFooter from "../../specific/LoginFormFooter/LoginFormFooter"
import LoginFormHeader from "../../specific/LoginFormHeader/LoginFormHeader"
import {users} from "../../../data/mock"
// Style
import "./LoginForm.css"

// const validate = 

const LoginForm = () => {

    let navigate = useNavigate()
    /* user filtra usuario por correo*/ 
    let user = users.filter((data)=> data.email==="marihecmiranda160498@gmail.com");
    
    console.log(user);

    const formik = useFormik({
        initialValues: { user: "", password: "" },
        validate: values => {
            const errors = {};
            if (!values.password) {
                errors.password = 'Requerido';
              } /*comparo contraseña*/else if(values.password!=="123abc"){
                errors.password = 'Contraseña incorrecta';
              }
            
            if (!values.email) {
                errors.email = 'Requerido';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Dirección de correo invalida';
              }
            return errors;
        },
        onSubmit: values => {
            alert("Bienvenido");
            navigate('/home');
        },
    });

    return (
        <div className="login-container-form">
            <LoginFormHeader />
            <form onSubmit={formik.handleSubmit} className="login-form">
                <div className="login-inputs">
                    <div className="input-box">
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={formik.errors.email && formik.touched.email
                            ?"login__input-error"
                            :"login__input"}/>
                        <label htmlFor="email" className="login__label">Email</label>
                        {formik.errors.email && formik.touched.email &&
                        <p className="error">
                            {formik.errors.email}
                        </p>
                        }
                        
                    </div>
                    <div className="input-box">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            required
                            className={formik.errors.password && formik.touched.password
                                ?"login__input-error"
                                :"login__input"}/>
                        <label htmlFor="password" className="login__label">Contraseña</label>
                        <p className="error">
                            {formik.errors.password && formik.touched.password && formik.errors.password}
                        </p>
                    </div>
                        <button type="submit" className="button__login" disabled={formik.isSubmitting}>
                            Ingresar
                        </button>
                </div>
            </form>
            <LoginFormFooter />
        </div>)

}

export default LoginForm