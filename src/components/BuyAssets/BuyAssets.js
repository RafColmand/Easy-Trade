import React, {useState} from 'react'

/**Components*/
import Card from "../Card/Card"
import BuyForm from '../Forms/BuyForm/BuyForm'
import FrameTransactions from '../FrameTransactions/FrameTransactions'
import DetailOrder from '../DetailOrder/DetailOrder'

/**Styles*/
import './BuyAssets.css'

const BuyAssets = () => {

    const [monto, setMonto] = useState("");
    const [symbol, setSymbol] = useState("");
    const [cant, setCant] = useState("");

    const [openD, setOpenD] = useState(true);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openComp, setOpenComp] = useState(false);

    const actualizarDatos = (valor1, valor2, valor3, valor4) => {
        setSymbol(valor1);
        setMonto(valor2);
        setCant(valor3);
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
                    <p>Para generar ordenes de compras, debes contar con saldo 
                        positivo.</p>
                </div>
                <div className='content-form-dep'>
                    <BuyForm onActualizarDatos={actualizarDatos}/>
                </div>
                <div className='btn-deposit'>
                    <button className='button1' onClick={Sig}>Siguiente</button>
                </div>
            </FrameTransactions>
        )}
        {openConfirm && (
            <FrameTransactions name="Confirmar">
                <div className='content-form'>
                    <DetailOrder simbolo={symbol} monto={monto} cantidad={cant} tipo={"Orden de compra"}/>
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
                    <p>Se ha generado la orden de compra con éxito!</p>
                </div>
                <div className='content-form'>
                    <DetailOrder simbolo={symbol} monto={monto} cantidad={cant} tipo={"Orden de venta"}/>
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

export default BuyAssets