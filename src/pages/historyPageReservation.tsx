import React, { FC } from 'react'

import Header from '../components/header'
import Cards from '../components/cards'

import { Link, useParams } from 'react-router-dom'

import {StyledBodyPage, StyledHeaderPage, StyledListPage} from '../assets/utils/styles//page-history'

import Arrow from '../assets/static/arrow_l.svg'

type VehicleParking = {
    time: string,
    pay: boolean
}

type MyParamms = {
    id: string
    plate: string
}

/*

    <div class="sc-gKckTs jMplId" style="
    padding: 0px 17px 17px 17px;
"><aside style="
    margin-bottom: 22px;
"><p style="
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #9B9B9B;
">Placa</p><p style="
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 52px;
/* identical to box height */
// color: #00BCD4;
// ">aaa-1234</p></aside><aside style="
//     margin-bottom: 25px;
// "><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 16px;
//     text-transform: uppercase;
//     color: #9B9B9B;
// ">Status</p><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 24px;
//     line-height: 33px;
// /* identical to box height */
//     color: #0A261D;
// ">Estacionado</p></aside><aside style="
//     margin-bottom: 41px;
// "><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 16px;
//     text-transform: uppercase;
//     color: #9B9B9B;
// ">Tempo Atual</p><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 24px;
//     line-height: 33px;
// /* identical to box height */
//     color: #0A261D;
// ">1h20 min</p></aside><aside><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 12px;
//     line-height: 16px;
//     text-transform: uppercase;
//     color: #9B9B9B;
// ">Pagamento</p><p style="
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 24px;
//     line-height: 33px;
// /* identical to box height */
//     color: #0A261D;
// ">-</p></aside></div>


const ExitPage: FC = () => {
    const Params: MyParamms = useParams()

    return (
        <>
            <Header />
            <section>
                <StyledBodyPage>
                    <StyledHeaderPage>
                        <Link to={`/history/${Params.plate}`}><img src={Arrow} /></Link>
                    </StyledHeaderPage>
                    <StyledListPage>
                        <aside className='plate'>
                            <p className='title'>Placa</p>
                            <p className='plate'>{Params.plate}</p>
                        </aside>
                        <aside className='status'>
                            <p className='title'>Status</p>
                            <p className='subtitle'>Estacionado</p>
                        </aside>
                        <aside className='time'>
                            <p className='title'>Tempo Atual</p>
                            <p className='subtitle'>1h20 min</p>
                        </aside>
                        <aside className='pay'>
                            <p className='title'>Pagamento</p>
                            <p className='subtitle'>-</p>
                        </aside>
                    </StyledListPage>
                </StyledBodyPage>
            </section>
        </>
    )
}

export default ExitPage