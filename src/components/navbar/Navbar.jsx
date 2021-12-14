import React from 'react'
import Logo from '../../img/index.jpg'
import Burger from './Burger'
import {
    Nav,
} from './NavbarELements'

function Navbar() {
    return (
        <>
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" width={130}/>
            </div>
            <Burger/>
        </Nav>
        </>
    )
}

export default Navbar
