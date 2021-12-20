import React from 'react';
import styled from 'styled-components';
import nifty from './../img/nifty-icon.png';
import background from './../img/homepage-nifty-background-6f8651712581a611379f1700cd8aaf92.png'

const Content = styled.div`
    background:url(${background});
    position:relative;
    bottom:280px;
    height:50vh;
`
function Nifty() {
    return (
        <Content>
            <div className="nifty_text">
                <h3>Buy and sell NFTs on Nifty Gateway</h3>
                <p>A non-fungible token (NFT) is digital art on the blockchain—the latest trend in crypto. Nifty Gateway is owned by Gemini, so you can expect the same industry-leading crypto security for your NFTs</p>
            </div>  
            <div className="nifty_img">
                <img src={nifty} alt="nifty-logo" />
            </div>
        </Content>
    )
}

export default Nifty
