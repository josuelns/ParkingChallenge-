import React, {FC } from 'react';

import {StyledCard} from '../../assets/utils/styles/card'

import {Link} from 'react-router-dom'

const Card: FC = () =>{
    return (
        <>
            <Link to='/history/aaa-1234/1'>
                <StyledCard >
                    <aside>
                        <p className='title'>Tempo Atual</p>
                        <p className='subtitle'>1h20 min</p>
                    </aside>
                    <aside>
                        <p className='title'>Pagamento</p>
                        <p className='subtitle'>-</p>
                    </aside>
                </StyledCard>
            </Link>
        </>
    )
}

export default Card
