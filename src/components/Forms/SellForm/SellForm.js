import React, {useState} from "react"
import { useFormik} from "formik";
import './SellForm.css'

const SellForm = ({onActualizarDatos}) => {

    
    const [simbolo, setSimbolo] = useState("");
    const [monto, setMonto] = useState("2000");
    const [cantidad, setCantidad] = useState("");


    const actualizarInfo = () => {
        onActualizarDatos(simbolo, monto, cantidad);
      };

    const formik = useFormik({
        validate: values => {
            const errors = {};
            if (!simbolo) {
                errors.simbolo = "Requerido"
            } 
            
            if(!cantidad){
                errors.cantidad = "Requerido"
            } else if (cantidad < 0)
            {
                errors.cantidad = "Cantidad invalida"
            }


    },
    });

    return(
        <div>
        <form onSubmit={ev => {
        ev.preventDefault()}} 
        className="sell-form">
            <div className="sell-inputs">

                <div className="input-box">
                    <input
                        id="simbolo"
                        name="simbolo"
                        type="text"
                        onChange={ev=>{
                            setSimbolo(ev.target.value)
                            actualizarInfo()}}
                        onBlur={formik.handleBlur}
                        value={simbolo}
                        required
                        className={formik.errors.simbolo && formik.touched.simbolo
                            ?"sell__input-error"
                            :"sell__input"}/>
                    <label htmlFor="simbolo" className="sell__label">Simbolo</label>
                    {formik.errors.simbolo && formik.touched.simbolo &&
                        <p className="error">
                            {formik.errors.simbolo}
                        </p>
                    }
                </div>

                <div className="input-box">
                    <input
                        id="cantidad"
                        name="cantidad"
                        type="number"
                        onChange={ev=>{
                            setCantidad(ev.target.value)
                            actualizarInfo()}}
                        onBlur={formik.handleBlur}
                        value={cantidad}
                        required
                        className={formik.errors.cantida && formik.touched.cantida
                            ?"sell__input-error"
                            :"sell__input"}/>
                    <label htmlFor="cantidad" className="sell__label">Ingrese la cantidad</label>
                    {formik.errors.cantidad && formik.touched.cantidad &&
                        <p className="error">
                            {formik.errors.cantidad}
                        </p>
                    }
                </div>

                <p>El monto por venta es: {monto}</p>

            </div>
        </form>
    </div>

    );
}

export default SellForm