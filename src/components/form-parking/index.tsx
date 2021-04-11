import React, {FC, useState } from 'react';

interface Props {
    entrace?: boolean,
    payment?: boolean,
    exit?: boolean,
    history?: boolean    
}

const ParkingForm: FC<Props> = (props) =>{
    const [Plaque, setPlaque] = useState('AAA-000')
    return (
        <>
            <form>
                <label>Número da placa:</label>
                <input type='text' value={Plaque} onChange={(prevState) => { setPlaque(prevState.target.value) }} />

                {props.entrace ?  <button>Confirmar Entrada</button> : ''}
                {props.payment ? <button>Pagamento</button> : ''}
                {props.exit ? <button>Saída</button>  : ''}
                {props.history ? <a>Ver Histórico</a> : ''}
            </form>
        </>
    )
}

export default ParkingForm
