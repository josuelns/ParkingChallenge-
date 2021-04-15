import React, { FC } from 'react'

import Header from '../components/header'
import Cards from '../components/cards'

import {Link} from 'react-router-dom'
  
type VehicleParking = {
    time: string,
    pay: boolean
}

interface Props {
    plate: string
    data: VehicleParking[]
}

const ExitPage: FC<Props> = (props) => {
    return (
        <>
            <Header />
            <section>
                <div>
                    <Link to='/exit'><img src='' /></Link>
                    <p>Placa {props.plate}</p>
                </div>
            </section>
            <section>
                <Cards data={props.data}/>
            </section>
        </>
    )
}

export default ExitPage