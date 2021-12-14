import React from 'react'
import Logo from '../../img/index.jpg'
import {
    Nav,
    NavBar,
    NavMenu
} from './NavbarELements'

function Navbar() {
    return (
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" width={130}/>
            </div>
            <NavMenu>
                <li><p>Products</p></li><hr />
                <li><p>Prices</p></li><hr />
                <li><p>Security</p></li><hr />
                <li><p>Institutions</p></li><hr />
                <li>Resources</li><hr />
            </NavMenu>
            <NavBar>
                <li>Sign in</li>
                <li>Get Started</li>
            </NavBar>
        </Nav>
    )
}

export default Navbar
