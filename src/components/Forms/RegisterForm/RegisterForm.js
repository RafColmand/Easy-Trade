import React from "react"
import { useFormik } from "formik";
import { useNavigate }    from "react-router-dom"

import RegisterFormFooter from "../../specific/RegisterFormFooter/RegisterFormFooter";
import RegisterFormHeader from "../../specific/RegisterFormHeader/RegisterFormHeader";
// Style
import "./RegisterForm.css"

// const validate = 

const RegisterForm = () => {
    const history = useNavigate();

    const formik = useFormik({
        initialValues: { username:"", user: "", password: "" },
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
            
            if (!values.username) {
                errors.username = "Requerido"
            }

            return errors;
        },
        onSubmit: values => {
            alert("Bienvenido");
            history.push("/")
        },
    });

    return (
        <div className="register-container-form">
            <RegisterFormHeader />
            <form onSubmit={formik.handleSubmit} className="register-form">
                <div className="register-inputs">
                    <div className="input-box">
                        <input
                            id="username"
                            name="username"
                            type="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            required
                            className="register__input" />
                        <label htmlFor="password" className="register__label">Nombre de Usuario</label>
                        <p className="error">
                            {formik.errors.username && formik.touched.username && formik.errors.username}
                        </p>
                    </div>
                    <div className="input-box">
                        <input
                            id="user"
                            name="user"
                            required
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.user}
                            className="register__input" />
                        <label htmlFor="user" className="register__label">Email</label>

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
                            className="register__input" />
                        <label htmlFor="password" className="register__label">Contraseña</label>
                        <p className="error">
                            {formik.errors.password && formik.touched.password && formik.errors.password}
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
                            className="register__input" />
                        <label htmlFor="password" className="register__label">Contraseña</label>
                        <p className="error">
                            {formik.errors.password && formik.touched.password && formik.errors.password}
                        </p>
                    </div>
                        <button type="submit" className="button__register" disabled={formik.isSubmitting}>
                            Registrar
                        </button>
                </div>
            </form>
            <RegisterFormFooter />
        </div>)

}

export default RegisterForm