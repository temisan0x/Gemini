import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to="/">
                    <img src={Logo} alt="logo" width={130}/>
                </Link>
            </div>
            <Burger/>
        </Nav>
        </>
    )
}

export default Navbar
