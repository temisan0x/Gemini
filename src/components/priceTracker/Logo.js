import React from 'react'
import styled from 'styled-components';
import logo from '../../img/gemini.jpg'

const Crypto = styled.div `

    .crypto_flex {
        display:flex !important;

        
    }

    .logo {
        width:200px;
    }
`

function Logo() {
    return (
        <Crypto>
                <div className="crypto_flex">
                    <div className="text-center mt-5 mb-3" md="12">
                        <img src={logo} alt="logo" className="logo"/>
                    </div>
                </div>
        </Crypto>
    )
}

export default Logo;
