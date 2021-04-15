import React, { FC } from 'react';

import {StyledTabNavBar} from '../../assets/utils/styles/tab_navbar'

import {Link} from 'react-router-dom'

interface Props {
    entrance?: boolean,
    exit?: boolean,
}

const TabNavBar: FC<Props> = (props) => {
    return (
        <>
            <StyledTabNavBar>
                <Link to='/entrace' className={props.entrance ? 'active' : ''}>
                    Entrada
                </Link>
                
                <Link to='/exit' className={props.exit ? 'active' : ''}>
                    Saída
                </Link>
            </StyledTabNavBar>
        </>
    )
}

export default TabNavBar
