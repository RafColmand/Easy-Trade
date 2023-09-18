import React from "react"
import { useFormik} from "formik";
import { useNavigate }    from "react-router-dom"


/**Styles*/
import './CardForm.css'

const CardForm = () => {
  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { number: "", cvv: "", nameCard: "", dateExp: "" },
        validate: values => {
            const errors = {};
            
            if (!values.number) {
                errors.number = "Requerido"
            } 

            if (!values.cvv) {
              errors.cvv = "Requerido"
            } 

            if (!values.nameCard) {
              errors.nameCard = "Requerido"
            } 
            
            if (!values.dateExp) {
                errors.dateExp = "Requerido"
            } 

            return errors;
        },
        onSubmit: values => {
            alert("Tarjeta registrada con exito");
            navigate('/home');
        },
    });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="card-form">
        <div className="card-inputs">

          <h2>Registrar Tarjeta</h2>
                    
          <div className="input-box">
            <input
              id="number"
              name="number"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
              required
              className={formik.errors.number && formik.touched.number
                 ?"card__input-error"
                :"card__input"}/>
            <label htmlFor="number" className="card__label">Numero de Tarjeta</label>
            {formik.errors.number && formik.touched.number &&
              <p className="error">
                {formik.errors.password}
              </p>
            }
          </div>

          <div className="input-box">
            <input
              id="cvv"
              name="cvv"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cvv}
              required
              className={formik.errors.cvv && formik.touched.cvv
                 ?"card__input-error"
                :"card__input"}/>
            <label htmlFor="cvv" className="card__label">CVV</label>
            {formik.errors.cvv && formik.touched.cvv &&
              <p className="error">
                {formik.errors.password}
              </p>
            }
          </div>

          <div className="input-box">
            <input
              id="nameCard"
              name="nameCard"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nameCard}
              required
              className={formik.errors.nameCard && formik.touched.nameCard
                 ?"card__input-error"
                :"card__input"}/>
            <label htmlFor="nameCard" className="card__label">Nombre titular</label>
            {formik.errors.nameCard && formik.touched.nameCard &&
              <p className="error">
                {formik.errors.password}
              </p>
            }
          </div>

          <div className="input-box">
            <input
              id="dateExp"
              name="dateExp"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateExp}
              required
              className={formik.errors.dateExp && formik.touched.dateExp
                 ?"card__input-error"
                :"card__input"}/>
            <label htmlFor="dateExp" className="card__label">Fecha Exp</label>
            {formik.errors.dateExp && formik.touched.dateExp &&
              <p className="error">
                {formik.errors.password}
              </p>
            }
          </div>
                   
          <button type="submit" className="button__card" disabled={formik.isSubmitting}>
            Guardar Cambios
          </button>

        </div>
      </form>
    </div>
  )
}

export default CardForm