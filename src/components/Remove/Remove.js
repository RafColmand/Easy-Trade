import React, {useState} from 'react'

/**Components*/
import Card from "../Card/Card"
import RemoveForm from "../Forms/RemoveForm/RemoveForm"
import FrameTransactions from '../FrameTransactions/FrameTransactions'
import DetailsTransactions from '../DetailsTransactions/DestailsTransactions'

/**Styles*/
import './Remove.css'

const Remove = () => {

    const [monto, setMonto] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [concepto, setConcepto] = useState("");

    const actualizarMonto = (valor1, valor2, valor3) => {
        setMonto(valor1);
        setTarjeta(valor2);
        setConcepto(valor3)
      };

    const [openR, setOpenR] = useState(true);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openComp, setOpenComp] = useState(false);

    const Sig = () => {
        setOpenR(false);
        setOpenConfirm(true);
        setOpenComp (false);
    }

    const Confirm = () => {
        setOpenR(false);
        setOpenConfirm(false);
        setOpenComp (true);
    }

    const Cont = () => {
        setOpenR(true);
        setOpenConfirm(false);
        setOpenComp (false);
    }

  return (
    <Card type={0}>
      <div className="Remove-form">
        {openR && (
            <FrameTransactions name="Retirar">
                <div className='Warning-remove'>
                    <img src={require('../../assets/advertencia.png')} />
                    <p>Para realizar retiros, debes registrar tarjetas bancarias de tu 
                        titularidad. El retiro de fondos puede tardar dependiendo del 
                        volumen de operaciones que se esten ejecutando.</p>
                </div>
                <div className='content-form-remove'>
                    <RemoveForm onActualizarMonto={actualizarMonto}/>
                </div>
                <div className='removeBtn'>
                    <button className='button1' onClick={Sig}>Siguiente</button>
                </div>
            </FrameTransactions>
        )}
        {openConfirm && (
            <FrameTransactions name="Confirmar">
                <div className='content-form'>
                    <DetailsTransactions monto = {monto} tarjeta = {tarjeta} concepto = {concepto} tipo={"Retiro"}/>
                </div>
                <div className='removeBtn'>
                    <button className='button1' onClick={Confirm}>Confirmar</button>
                </div>
            </FrameTransactions>
        ) 
        }
        {openComp && (
           <FrameTransactions name="Comprobante">
                <div className='Voucher-img'>
                    <img src={require('../../assets/comprobado.png')} />
                    <p>Transacción realizada con éxito!</p>
                </div>
                <div className='content-form-comp'>
                    <DetailsTransactions monto = {monto} tarjeta = {tarjeta} concepto = {concepto} tipo={"Retiro"}/>
                </div>
                <div className='removeBtn'>
                    <button className='button1' onClick={Cont}>Continuar</button>
                </div>
            </FrameTransactions>
        )
        }
      </div>   
    </Card>
  )
}

export default Remove