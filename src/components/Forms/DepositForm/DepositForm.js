import React, {useState} from "react"
import { useFormik} from "formik";

/*Styles*/
import "./DepositForm.css"

const DepositForm = ({ onActualizarMonto }) => {

    const [monto, setMonto] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [concepto, setConcepto] = useState("");

    const actualizarInfo = () => {
        onActualizarMonto(monto, tarjeta, concepto);
      };

    const formik = useFormik({
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
        <form 
        onSubmit={ev => {
            ev.preventDefault()
            }} 
        className="deposit-form">
            <div className="deposit-inputs">

                    <div className="input-box">
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
                                ?"deposit__input-error"
                                :"deposit__input"}/>
                        <label htmlFor="amount" className="deposit__label">Monto del deposito</label>
                        {formik.errors.amount && formik.touched.amount &&
                            <p className="error">
                                {formik.errors.amount}
                            </p>
                        }
                    </div>

                    <div className="input-box">
                        <select 
                            id="tarjet" 
                            name="tarjet"
                            onChange={ev=> {
                                setTarjeta(ev.target.value)
                                actualizarInfo()}}
                            onBlur={formik.handleBlur}
                            value={tarjeta}
                            required
                            className={formik.errors.tarjet && formik.touched.tarjet
                                ?"deposit__input-error"
                                :"deposit__input"}>
                            <option value="">- Seleccione tarjeta -</option>
                            <option value="123456abc">Nro 123456abc</option>
                            <option value="123abc456">Nro 123abc456</option>
                        </select>
                        <label htmlFor="tarjet" className="deposit__label">Nro de Tarjeta</label>
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
                                ?"deposit__input-error"
                                :"deposit__input"}/>
                        <label htmlFor="concep" className="deposit__label">Concepto</label>
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

export default DepositForm