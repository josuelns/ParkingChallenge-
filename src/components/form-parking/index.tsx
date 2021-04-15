import React, {FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'

import { entraceNewVehicleRequest} from '../../store/modules/entrace-new-vehicle/actions'
import { paymentVehicleRequest } from '../../store/modules/payment-vehicle/actions'
import { exitVehicleRequest } from '../../store/modules/exit-vehicle/actions'
import { historyVehicleRequest } from '../../store/modules/history-vehicle/actions'

import InputMask from 'react-input-mask'

import {StyledForm} from '../../assets/utils//styles/form'

interface Props {
    entrace?: boolean,
    payment?: boolean,
    exit?: boolean,
    history?: boolean    
}

const ParkingForm: FC<Props> = (props) =>{
    const dispatch = useDispatch();
    const [Plate, setPlaque] = useState('AAA-0000')

    const {isLoading, error } = useSelector((state: StoreState) => state.entraceNewVehicle);
  

    function confirmEntrace(){
        console.log('entrace')
        dispatch(
            entraceNewVehicleRequest({
                plate: Plate
            })
        )
    }

    function confirmPayment(){
        console.log('payment')
        dispatch(
            paymentVehicleRequest({
                plate: Plate
            })
        )
    }
    

    function setExit(){
        console.log('exit')
        dispatch(
            exitVehicleRequest({
                plate: Plate
            })
        )
    }

    function showHistory(){
        console.log('history')
        dispatch(
            historyVehicleRequest({
                plate: Plate
            })
        )
    }

    return (
        <>
            {isLoading ? 'carregando...' : ''}
            <StyledForm id='formParking' onSubmit={(event) => {event.preventDefault()}}>
                <label>Número da placa:</label>
                <InputMask type='text' value={Plate} onChange={(prevState) => { setPlaque(prevState.target.value) }} mask='aaa-9999' />

                {props.entrace ?  <button onClick={() => confirmEntrace()}>Confirmar Entrada</button> : ''}
                {props.payment ? <button className='bg_gray' onClick={() => confirmPayment()}>Pagamento</button> : ''}
                {props.exit ? <button className='bg_white' onClick={() => setExit()}>Saída</button>  : ''}
                {props.history ? <a onClick={() => showHistory()}>Ver Histórico</a> : ''}
            </StyledForm>
        </>
    )
}

export default ParkingForm
