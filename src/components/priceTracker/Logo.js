import React from 'react'
import styled from 'styled-components';
import logo from '../../img/gemini.jpg';

const Crypto = styled.div `

    position:relative;
    top:70px;
    margin-bottom:50px;

    .image {
        align-items: center;
        display: flex;
        justify-content: center;
        margin:30px;
    }

    .logo {
        width:200px;
    }

`

function Logo() {
    return (
        <Crypto>
            <div className="image">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </Crypto>
    )
}

export default Logo;
