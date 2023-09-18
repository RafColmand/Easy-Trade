import React, {useState} from "react"
import { useFormik} from "formik";
import './BuyForm.css'

const BuyForm = ({onActualizarDatos}) => {

    const [simbolo, setSimbolo] = useState("");
    const [monto, setMonto] = useState("");
    const [cantidad, setCantidad] = useState("");

    const [montoA, setMontoA] = useState("200");

    const [activeLabel, setActiveLabel] = useState(false);

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
            className="buy-form">
                <div className="buy-inputs">
    
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
                                ?"buy__input-error"
                                :"buy__input"}/>
                        <label htmlFor="simbolo" className="buy__label">Simbolo</label>
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
                                ?"buy__input-error"
                                :"buy__input"}/>
                        <label htmlFor="cantidad" className="buy__label">Ingrese la cantidad</label>
                        {formik.errors.cantidad && formik.touched.cantidad &&
                            <p className="error">
                                {formik.errors.cantidad}
                            </p>
                        }
                    </div>

                    <div className='input-box'>
                        <b className="buy__check">Monto de compra</b>
                        <div className="item-row">
                            <div className="radios_buy">
                                <div className="radios">
                                    <label className="radio">
                                        <input 
                                            id="amount"
                                            name="amount"
                                            type="radio"
                                            onChange={ev => {
                                                setMonto(montoA)
                                                setActiveLabel(false)}}
                                            onBlur={formik.handleBlur}
                                            value={monto}
                                            required/>
                                        Monto Referencial
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
                                        Ingresar monto
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
                                            ?"buy__input-error"
                                            :"buy__input"}/>
                                    <label htmlFor="amount" className="buy__label">Monto del deposito</label>
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
                                            setMonto(montoA)
                                            actualizarInfo()}}
                                        onBlur={formik.handleBlur}
                                        value={monto}
                                        className={formik.errors.amount && formik.touched.amount
                                            ?"buy__input-error"
                                            :"buy__input"}/>
                                    <label htmlFor="amount" className="buy__label">Monto del deposito</label>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default BuyForm