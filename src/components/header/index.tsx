import React, { FC, useState } from 'react';

import { StyledHeader } from '../../assets/utils/styles/header'

import Logo from '../../assets/static/logo_parking.svg'
import LogoMobile from '../../assets/static/avatar_white.svg'
import MenuBar from '../../assets/static/menu.svg'
import MenuClose from '../../assets/static/close.svg'

import {Link} from 'react-router-dom'

const Header: FC = () => {
    const [MenuList, setMenuList] = useState(false)

    return (
        <>
            <StyledHeader>
                <div id='logo'>
                    <img src={LogoMobile} />
                </div>
                <div id='navIcon'>
                    {!MenuList ? <img src={MenuBar} onClick={() => { setMenuList(true) }} /> : ''}
                    {MenuList ? <img src={MenuClose} onClick={() => { setMenuList(false) }} /> : ''}
                </div>
                <div id='navList'>
                    {MenuList ? (
                        <ul className={MenuList ? 'active' : ''}>
                            <li>
                                <Link to='/entrace' onClick={() => { setMenuList(false) }}>Entrada</Link>
                            </li>
                            <li>
                                <Link to='/exit' onClick={() => { setMenuList(false) }}>Saída</Link>
                            </li>
                        </ul>
                    ) : ''}
                </div>
            </StyledHeader>
        </>
    )
}

export default Header;
