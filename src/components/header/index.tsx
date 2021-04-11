import React, {FC } from 'react';

const Header: FC = () =>{
    return (
        <>
            <header>
                <div id='logo'>
                    <img src='' />
                </div>
                <div id='navbar'>
                    <ul>
                        <li>
                            <a>Entrada</a>
                        </li>
                        <li>
                            <a>Saída</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;
