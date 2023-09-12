import React from "react"
import { useFormik } from "formik";
import { useNavigate }    from "react-router-dom"

import RegisterFormFooter from "../../specific/RegisterFormFooter/RegisterFormFooter";
import RegisterFormHeader from "../../specific/RegisterFormHeader/RegisterFormHeader";
// Style
import "./RegisterForm.css"

// const validate = 

const RegisterForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { username:"", email: "", password: "", confirmPassword: "" },
        validate: values => {
            const errors = {};
            if (!values.username) {
                errors.username = "Requerido"
            } else if (values.username.length < 3) {
                errors.username = 'Nombre de usuario invalido';
            }

            if (!values.email) {
                errors.email = 'Requerido';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Dirección de correo invalida';
            }

            if (!values.password) {
                errors.password = "Requerido"
            } else if (values.password.length < 8){
                errors.password = "La contraseña debe tener al menos 8 caracteres"
            }
            
            if (!values.confirmPassword) {
                errors.confirmPassword = "Requerido"
            } else if (values.confirmPassword!==values.password){
                errors.confirmPassword = "Las contraseñas no coinciden"
            }

            return errors;
        },
        onSubmit: values => {
            alert("Bienvenido");
            navigate('/user');
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
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            required
                            className={formik.errors.username && formik.touched.username
                                ?"register__input-error"
                                :"register__input"}/>
                        <label htmlFor="password" className="register__label">Nombre de Usuario</label>
                        {formik.errors.username && formik.touched.username &&
                            <p className="error">
                                {formik.errors.username}
                            </p>
                        }
                    </div>
                    <div className="input-box">
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.user}
                            className={formik.errors.email && formik.touched.email
                                ?"register__input-error"
                                :"register__input"}/>
                        <label htmlFor="email" className="register__label">Email</label>
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
                                ?"register__input-error"
                                :"register__input"}/>
                        <label htmlFor="password" className="register__label">Contraseña</label>
                        {formik.errors.password && formik.touched.password &&
                            <p className="error">
                                {formik.errors.password}
                            </p>
                        }
                    </div>
                    <div className="input-box">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            required
                            className={formik.errors.confirmPassword && formik.touched.confirmPassword
                                ?"register__input-error"
                                :"register__input"}/>
                        <label htmlFor="confirmPassword" className="register__label">Confirmar Contraseña</label>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                            <p className="error">
                                {formik.errors.confirmPassword}
                            </p>
                        }
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