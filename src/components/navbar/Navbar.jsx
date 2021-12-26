import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/gemini.jpg'
import Burger from './Burger'
import {
    Nav,
} from './NavbarELements'

function Navbar() {
    return (
        <>
        <Nav>
            <div className="logo" id="#">
                <Link to="/">
                    <img src={Logo} alt="logo" className='logo_header'/>
                </Link>
            </div>
            <Burger/>
        </Nav>
        </>
    )
}

export default Navbar
