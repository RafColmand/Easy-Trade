import React from "react"
import { useFormik} from "formik";
import { useNavigate }    from "react-router-dom"

/**Components */
import Card from '../../Card/Card'

/**Styles */
import './ChangePassword.css'

const ChangePassword= () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { password: "", newPassword: "", confirmPassword: "" },
        validate: values => {
            const errors = {};
            
            if (!values.password) {
                errors.password = "Requerido"
            } 

            if (!values.newPassword) {
              errors.newPassword = "Requerido"
            } else if (values.newPassword.length < 8){
                errors.newPassword = "La contraseña debe tener al menos 8 caracteres"
            } else if (values.newPassword===values.password){
                errors.newPassword = "La contraseña debe ser diferente a la antigua contraseña"
            }
            
            if (!values.confirmPassword) {
                errors.confirmPassword = "Requerido"
            } else if (values.confirmPassword!==values.newPassword){
                errors.confirmPassword = "Las contraseñas no coinciden"
            }

            return errors;
        },
        onSubmit: values => {
            alert("Contraseña guardada con exito");
            navigate('/home');
        },
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit} className="changePassword-form">
                <div className="changePassword-inputs">

                    <h2>Cambiar Contraseña</h2>
                    
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
                                ?"changePassword__input-error"
                                :"changePassword__input"}/>
                        <label htmlFor="password" className="changePassword__label">Antigua contraseña</label>
                        {formik.errors.password && formik.touched.password &&
                            <p className="error">
                                {formik.errors.password}
                            </p>
                        }
                    </div>
                    
                    <div className="input-box">
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.newPassword}
                            required
                            className={formik.errors.newPassword && formik.touched.newPassword
                                ?"changePassword__input-error"
                                :"changePassword__input"}/>
                        <label htmlFor="newPassword" className="changePassword__label">Nueva contraseña</label>
                        {formik.errors.newPassword && formik.touched.newPassword &&
                            <p className="error">
                                {formik.errors.newPassword}
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
                                ?"changePassword__input-error"
                                :"changePassword__input"}/>
                        <label htmlFor="confirmPassword" className="changePassword__label">Confirmar Contraseña</label>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                            <p className="error">
                                {formik.errors.confirmPassword}
                            </p>
                        }
                    </div>

                    <button type="submit" className="button__changePassword" disabled={formik.isSubmitting}>
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword