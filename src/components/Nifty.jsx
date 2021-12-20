import React from 'react';
import styled from 'styled-components';
import nifty from './../img/Nifty_gateway.jpg';
import background from './../img/homepage-nifty-background-6f8651712581a611379f1700cd8aaf92.png'

const Content = styled.div`
    background:url(${background});
    position:relative;
    bottom:280px;
`
function Nifty() {
    return (
        <Content>
            <img src={nifty} alt="" />
        </Content>
    )
}

export default Nifty
