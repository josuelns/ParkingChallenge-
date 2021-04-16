import React, { FC } from 'react'

import Header from '../components/header'
import Cards from '../components/cards'

import { Link, useParams } from 'react-router-dom'

import {StyledBodyPage, StyledHeaderPage} from '../assets/utils/styles//page-history'

import Arrow from '../assets/static/arrow_l.svg'

type VehicleParking = {
    time: string,
    pay: boolean
}

type MyParamms = {
    plate: string
    id: string
}


const ExitPage: FC = () => {
    const Params: MyParamms = useParams()

    return (
        <>
            <Header />
            <section>
                <StyledBodyPage>
                    <StyledHeaderPage>
                        <Link to='/exit'><img src={Arrow} /></Link>
                        <p>Placa {Params.id.toUpperCase()}</p>
                    </StyledHeaderPage>
                    <Cards id={Params.id} />
                </StyledBodyPage>
            </section>
        </>
    )
}

export default ExitPage