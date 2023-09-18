import React, {useState} from "react"
import { useFormik} from "formik";

/*Styles*/
import "./RemoveForm.css"

const RemoveForm = ({ onActualizarMonto }) => {

    const [activeLabel, setActiveLabel] = useState(false);
    const [montoD, setMontoD] = useState("2000");

    const [monto, setMonto] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [concepto, setConcepto] = useState("");

    const actualizarInfo = () => {
        onActualizarMonto(monto, tarjeta, concepto);
      };

    const formik = useFormik({
        initialValues: { 
            amount:"", 
            tarjet:"", 
            concept:"",
        },
        validate: values => {
            const errors = {};
            if (!monto) {
                errors.amount = "Requerido"
            } else if (monto < 0)
            {
                errors.amount = "Monto invalido"
            }

            if (!tarjeta) {
                errors.tarjet = "Requerido"
            }

            return errors;
        },
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit} className="remove-form">
                <div className="remove-inputs">
    
                    <div className='input-box'>
                        <b className="remove__check">Monto del retiro </b>
                        <div className="item-row">
                            <div className="radios_remove">
                                <div className="radios">
                                    <label className="radio">
                                        <input 
                                            id="amount"
                                            name="amount"
                                            type="radio"
                                            onChange={ev => {
                                                setMonto(montoD)
                                                setActiveLabel(false)}}
                                            onBlur={formik.handleBlur}
                                            value={monto}
                                            required/>
                                        Monto Disponible
                                    </label>
                                </div>
                                <div className="radios">
                                    <label className="radio">
                                        <input 
                                            id="amount"
                                            name="amount"
                                            type="radio"
                                            onChange={ev=> {
                                                setActiveLabel(true)
                                                setMonto("")}}
                                            onBlur={formik.handleBlur}
                                            value={monto}
                                            required/>
                                        Ingrese monto
                                    </label>
                                </div>
                             
                            </div>   
                            {activeLabel && (
                                <div className="input-box-sub">
                                    <input
                                        id="amount"
                                        name="amount"
                                        required
                                        type="number"
                                        onChange={ev=>{
                                            setMonto(ev.target.value)
                                            actualizarInfo()}}
                                        onBlur={formik.handleBlur}
                                        value={monto}
                                        className={formik.errors.amount && formik.touched.amount
                                            ?"remove__input-error"
                                            :"remove__input"}/>
                                    <label htmlFor="amount" className="remove__label">Monto del deposito</label>
                                    {formik.errors.amount && formik.touched.amount &&
                                        <p className="error">
                                            {formik.errors.amount}
                                        </p>
                                    }
                                </div>
                            )}
                            {!activeLabel && (
                                <div className="input-box-sub">
                                    <input
                                        id="amount"
                                        name="amount"
                                        required
                                        type="number"
                                        onChange={ev => {
                                            setMonto(monto)
                                            actualizarInfo()}}
                                        onBlur={formik.handleBlur}
                                        value={monto}
                                        className={formik.errors.amount && formik.touched.amount
                                            ?"remove__input-error"
                                            :"remove__input"}/>
                                    <label htmlFor="amount" className="remove__label">Monto del deposito</label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="input-box">
                        <select 
                            id="tarjet" 
                            name="tarjet"
                            onChange={ev=>{
                                setTarjeta(ev.target.value)
                                actualizarInfo()}}
                            onBlur={formik.handleBlur}
                            value={tarjeta}
                            required
                            className={formik.errors.tarjet && formik.touched.tarjet
                                ?"remove__input-error"
                                :"remove__input"}>
                            <option value="">- Seleccione tarjeta-</option>
                            <option value="123456abc">Nro 123456abc</option>
                            <option value="123abc789">Nro 123abc789</option>
                        </select>
                        <label htmlFor="tarjet" className="remove__label">Nro de Tarjeta</label>
                        {formik.errors.tarjet && formik.touched.tarjet &&
                            <p className="error">
                                {formik.errors.tarjet}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <input
                            id="concep"
                            name="concep"
                            type="text"
                            onChange={ev=>{
                                setConcepto(ev.target.value)
                                actualizarInfo()}}
                            onBlur={formik.handleBlur}
                            value={concepto}
                            required
                            className={formik.errors.concep && formik.touched.concep
                                ?"remove__input-error"
                                :"remove__input"}/>
                        <label htmlFor="concep" className="remove__label">Concepto</label>
                        {formik.errors.concep && formik.touched.concep&&
                            <p className="error">
                                {formik.errors.concep}
                            </p>
                        }
                    </div>

                </div>
            </form>
        </div>
    );
}

export default RemoveForm