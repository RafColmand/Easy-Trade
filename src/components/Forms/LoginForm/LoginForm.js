import React from "react"
import { useFormik } from "formik";
import { useNavigate }    from "react-router-dom"

import LoginFormFooter from "../../specific/LoginFormFooter/LoginFormFooter"
import LoginFormHeader from "../../specific/LoginFormHeader/LoginFormHeader"
// Style
import "./LoginForm.css"

// const validate = 

const LoginForm = () => {
    const history = useNavigate();

    
    let navigate = useNavigate()
    const handleClick = () => {
        navigate('/Home')
    }

    const formik = useFormik({
        initialValues: { user: "", password: "" },
        validate: values => {
            const errors = {};
            if (!values.user) {
                errors.user = "Requerido"
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user)
            ) {
                errors.user = "Email invalido"
            }
            if (!values.password) {
                errors.password = "Requerido"
            }

            return errors;
        },
        onSubmit: values => {
            alert("Bienvenido");
            history.push("/")
        },
    });

    return (
        <div className="login-container-form">
            <LoginFormHeader />
            <form onSubmit={formik.handleSubmit} className="login-form">
                <div className="login-inputs">
                    <div className="input-box">
                        <input
                            id="user"
                            name="user"
                            required
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.user}
                            className="login__input" />
                        <label htmlFor="user" className="login__label">Usuario</label>

                        <p className="error">
                            {formik.errors.user && formik.touched.user && formik.errors.user}
                        </p>
                    </div>
                    <div className="input-box">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required
                            className="login__input" />
                        <label htmlFor="password" className="login__label">Contraseña</label>
                        <p className="error">
                            {formik.errors.password && formik.touched.password && formik.errors.password}
                        </p>
                    </div>
                        <button onClick={handleClick} type="submit" className="button__login" disabled={formik.isSubmitting}>
                            Ingresar
                        </button>
                </div>
            </form>
            <LoginFormFooter />
        </div>)

}

export default LoginForm