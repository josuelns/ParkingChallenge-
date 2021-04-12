import React, {FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore'
import { entraceNewVehicleRequest} from '../../store/modules/entrace-new-vehicle/actions'

import InputMask from 'react-input-mask'

interface Props {
    entrace?: boolean,
    payment?: boolean,
    exit?: boolean,
    history?: boolean    
}

const ParkingForm: FC<Props> = (props) =>{
    const dispatch = useDispatch();
    const [Plaque, setPlaque] = useState('AAA-0000')

    const {isLoading, error } = useSelector((state: StoreState) => state.entraceNewVehicle);
  

    function confirmEntrace(){
        console.log('entrace')
        dispatch(
            entraceNewVehicleRequest({
                plaque: Plaque
            })
        )
    }

    function confirmPayment(){
        console.log('payment')
        // dispatch(Plaque)
    }
    

    function setExit(){
        console.log('exit')
        // dispatch(Plaque)
    }

    function showHistory(){
        console.log('history')
        // dispatch(Plaque)
    }

    return (
        <>
            {isLoading ? 'carregando...' : ''}
            <form id='formParking' onSubmit={(event) => {event.preventDefault()}}>
                <label>Número da placa:</label>
                <InputMask type='text' value={Plaque} onChange={(prevState) => { setPlaque(prevState.target.value) }} mask='aaa-9999' />

                {props.entrace ?  <button onClick={() => confirmEntrace()}>Confirmar Entrada</button> : ''}
                {props.payment ? <button onClick={() => confirmPayment()}>Pagamento</button> : ''}
                {props.exit ? <button onClick={() => setExit()}>Saída</button>  : ''}
                {props.history ? <a onClick={() => showHistory()}>Ver Histórico</a> : ''}
            </form>
        </>
    )
}

export default ParkingForm
