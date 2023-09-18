import React, {useState} from 'react'

/**Components*/
import Card from "../Card/Card"
import DepositForm from "../Forms/DepositForm/DepositForm"
import FrameTransactions from '../FrameTransactions/FrameTransactions'
import DetailsTransactions from '../DetailsTransactions/DestailsTransactions'

/**Styles*/
import './Deposit.css'

const Deposit = () => {

    const [monto, setMonto] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [concepto, setConcepto] = useState("");

    const [openD, setOpenD] = useState(true);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openComp, setOpenComp] = useState(false);

    const actualizarMonto = (valor1, valor2, valor3) => {
        setMonto(valor1);
        setTarjeta(valor2);
        setConcepto(valor3)
      };

    const Sig = () => {
        setOpenD(false);
        setOpenConfirm(true);
        setOpenComp (false);
    }

    const Confirm = () => {
        setOpenD(false);
        setOpenConfirm(false);
        setOpenComp (true);
    }

    const Cont = () => {
        setOpenD(true);
        setOpenConfirm(false);
        setOpenComp (false);
    }

  return (
    <Card type={0}>
      <div className="Deposit-form"> 
        {openD && (
            <FrameTransactions name="Depositar">
                <div className='Warning'>
                    <img src={require('../../assets/advertencia.png')} />
                    <p>Para realizar depositos, debes registrar tarjetas bancarias de tu 
                        titularidad.</p>
                </div>
                <div className='content-form-dep'>
                    <DepositForm onActualizarMonto={actualizarMonto}/>
                </div>
                <div className='btn-deposit'>
                    <button className='button1' onClick={Sig}>Siguiente</button>
                </div>
            </FrameTransactions>
        )}
        {openConfirm && (
            <FrameTransactions name="Confirmar">
                <div className='content-form'>
                    <DetailsTransactions monto = {monto} tarjeta = {tarjeta} concepto = {concepto} tipo={"Deposito"}/>
                </div>
                <div className='btn-deposit'>
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
                    <DetailsTransactions monto = {monto} tarjeta = {tarjeta} concepto = {concepto} tipo={"Deposito"}/>
                </div>
                <div className='btn-deposit'>
                    <button className='button1' onClick={Cont}>Continuar</button>
                </div>
            </FrameTransactions>
        )
        }
      </div>   
    </Card>
  )
}

export default Deposit