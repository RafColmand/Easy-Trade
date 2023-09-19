import React, {useState}from "react"
import { useFormik } from "formik";
import { useNavigate }    from "react-router-dom"

import LoginFormFooter from "../../specific/LoginFormFooter/LoginFormFooter"
import LoginFormHeader from "../../specific/LoginFormHeader/LoginFormHeader"
import {users} from "../../../data/mock"

import { login } from "../../../Utils/api/easyTrade";
// Style
import "./LoginForm.css"

// const validate = 

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState({});

    const createToken = async () => {
        try {

            const result = await login(email, password);
            setToken(result);
          
        } catch (error) {
          setToken([]);
          console.log(error);
        }
      };

    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validate: values => {
            const errors = {};
            if (!password) {
                errors.password = 'Requerido';
              } /*comparo contraseña*/else if(email=="123abc"){
                errors.password = 'Contraseña incorrecta';
              }
            
            if (!email) {
                errors.email = 'Requerido';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                errors.email = 'Dirección de correo invalida';
              }
            return errors;
        },
        onSubmit: values => {
            alert("Bienvenido");
            navigate('/home');
        },
    });
            console.log(email)
            console.log(password)

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
                            onChange={ev => setEmail(ev.target.value)}
                            onBlur={formik.handleBlur}
                            value={email}
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
                            onChange={ev => setPassword(ev.target.value)}
                            onBlur={formik.handleBlur}
                            value={password}
                            required
                            className={formik.errors.password && formik.touched.password
                                ?"login__input-error"
                                :"login__input"}/>
                        <label htmlFor="password" className="login__label">Contraseña</label>
                        <p className="error">
                            {formik.errors.password && formik.touched.password && formik.errors.password}
                        </p>
                    </div>
                        <button onClick={createToken} type="submit" className="button__login" disabled={formik.isSubmitting}>
                            Ingresar
                        </button>
                </div>
            </form>
            <LoginFormFooter />
        </div>)

}

export default LoginForm