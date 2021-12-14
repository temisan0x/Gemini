import React from 'react';
import {
    NavBar,
    NavMenu,
} from './NavbarELements'

export const RightNav = ({open}) => {
    return (
            <NavMenu open={open}>
                <li><p>Products</p></li>
                <li><p>Prices</p></li>
                <li><p>Security</p></li>
                <li><p>Institutions</p></li>
                <li>Resources</li>
                <li><p>Sign in</p></li>
                <li><p className="get-started">Get Started</p></li>
            </NavMenu>
    )
}
