import React from "react";
import { useFormik} from "formik";
import { useNavigate }    from "react-router-dom"

/*Components*/
import Card from "../../Card/Card";

/*Data*/
import {country} from "../../../data/mock"
import {city} from "../../../data/mock"
import {gender} from "../../../data/mock"

/*Styles*/
import "./EditProfile.css"

const EditProfile = () => {

    const formik = useFormik({
        initialValues: { 
            firstName:"", 
            lastName:"", 
            address:"", 
            country:"",
            city:"",
            zipCode: "",
            dateBirthday:"",
            phone: "",
            gender: ""
        },
        validate: values => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = "Requerido"
            } else if (values.firstName.length<3)
            {
                errors.firstName = "Nombre invalido"
            }

            if (!values.address) {
                errors.address = "Requerido"
            }

            if (!values.country) {
                errors.country = "Requerido"
            }

            if (!values.dateBirthday){
                errors.dateBirthday = "Requerido"
            }

            if (!values.gender){
                errors.gender = "Requerido"
            } else if (values.gender==="Femenino" && values.gender==="Masculino"){
                errors.gender = "Elija solo un genero"
            }

            if (!values.lastName) {
                errors.lastName = "Requerido"
            } else if (values.lastName.length<3)
            {
                errors.lastName = "Nombre invalido"
            }

            if (!values.city) {
                errors.city = "Requerido"
            }
            
            if (!values.zipCode) {
                errors.zipCode = "Requerido"
            }

            if (!values.phone) {
                errors.phone = "Requerido"
            } else if (values.phone < 11) {
                errors.phone = "Número de telefono invalido"
            }

            return errors;
        },
        onSubmit: values => {
            alert("Cambios guardados");
        },
    });
  return (
    <Card type={0}>
        <h2 className="title-editProfile">Editar Perfil</h2>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="profile-form">
            <div className="editProfile">
                <div className="editProfile-inputs">

                    <div className="input-box">
                        <input
                            id="firstName"
                            name="firstName"
                            required
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className={formik.errors.firstName && formik.touched.firstName
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="firstName" className="profile__label">Nombre</label>
                        {formik.errors.firstName && formik.touched.firstName &&
                            <p className="error">
                                {formik.errors.firstName}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <select 
                            id="country" 
                            name="country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            className={formik.errors.country && formik.touched.country
                                ?"profile__input-error"
                                :"profile__input"}>
                            <option value="">- Seleccione País -</option>
                            {country.map((data) => (
                                <option value={data.name}>{data.name}</option>
                            ))}
                        </select>
                        <label htmlFor="country" className="profile__label">País Nacimiento</label>
                        {formik.errors.country && formik.touched.country &&
                            <p className="error">
                                {formik.errors.country}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <input
                            id="address"
                            name="address"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            required
                            className={formik.errors.address && formik.touched.address
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="address" className="profile__label">Dirección</label>
                        {formik.errors.address && formik.touched.address&&
                            <p className="error">
                                {formik.errors.address}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <input
                            id="dateBirthday"
                            name="dateBirthday"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dateBirthday}
                            required
                            className={formik.errors.dateBirthday && formik.touched.dateBirthday
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="dateBirthday" className="profile__label">Fecha de Nacimiento</label>
                        {formik.errors.dateBirthday && formik.touched.dateBirthday &&
                            <p className="error">
                            {formik.errors.dateBirthday}
                            </p>
                        }
                    </div>

                    <div className='input-box'>
                        <b className="profile__check">Genero: </b>
                        <div className="radios">
                            {gender.map((data)=>(
                                <label className="radio">
                                    <input 
                                        id="gender"
                                        name="gender"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={data.name}
                                        required/>
                                    {data.name}
                                </label>

                            ))}
                        </div>
                    </div>

                </div>

                <div className="editProfile-inputs">

                    <div className="input-box">
                        <input
                            id="lastName"
                            name="lastName"
                            required
                            type="text"
                            onChange={formik.handleChange}          
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className={formik.errors.lastName&& formik.touched.lastName
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="lastName" className="profile__label">Apellido</label>
                        {formik.errors.lastName && formik.touched.lastName &&
                            <p className="error">
                            {formik.errors.lastName}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <select 
                            id="city" 
                            name="city"
                            onChange={formik.handleChange}          
                            onBlur={formik.handleBlur}
                            required
                            className={formik.errors.city && formik.touched.city
                                ?"profile__input-error"
                                :"profile__input"}>
                            <option value="">- Seleccione ciudad -</option>
                            {city.map((data) => (
                                <option value={data.name}>{data.name}</option>
                            ))}
                        </select>
                        <label htmlFor="city" className="profile__label">Ciudad de residencia</label>
                        {formik.errors.city && formik.touched.city &&
                            <p className="error">
                            {formik.errors.city}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <input
                            id="zipCode"
                            name="zipCode"
                            required
                            type="text"
                            onChange={formik.handleChange}          
                            onBlur={formik.handleBlur}
                            value={formik.values.zipCode}
                            className={formik.errors.zipCode && formik.touched.zipCode
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="password" className="profile__label">Codigo Postal</label>
                        {formik.errors.zipCode && formik.touched.zipCode &&
                            <p className="error">
                            {formik.errors.zipCode}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <input
                            id="phone"
                            name="phone"
                            required
                            type="number"
                            onChange={formik.handleChange}          
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className={formik.errors.phone && formik.touched.phone
                                ?"profile__input-error"
                                :"profile__input"}/>
                        <label htmlFor="phone" className="profile__label">Número Teléfonico</label>
                        {formik.errors.phone && formik.touched.phone &&
                            <p className="error">
                            {formik.errors.phone}
                            </p>
                        }
                    </div>

                </div>
            </div>
            
            <div className='buttons_editProfile'> 
                <button className="button1" type='submit'>Guardar Cambios</button>

                <button className="button1" type='reset'>Limpiar</button>
            </div>
        </form>

    </Card>
  );
};

export default EditProfile;