import React from 'react';
import styled from 'styled-components';
import nifty from './../img/nifty-icon.png';
import background from './../img/homepage-nifty-background-6f8651712581a611379f1700cd8aaf92.png'

const Content = styled.div`
    background:url(${background});
    position:relative;
    bottom:280px;
    height:50vh;
    padding-left: 60px;
    padding-right:60px;
    
    
    .nifty {
        display:flex;
        width:100%;
    }

    .nifty_text {
        line-height:24px;
        padding-top: 81px;
        display:flex;
        flex-direction: column;
        width:75%;
        padding-right: 50px;

        h2 {
            font-weight: 600;
            color:#fff;
            font-size: 36px;
            line-height: 44px;
        }

        p {
            font-size: 18px;
            line-height: 30px;
            color:#fff;
        }
    }

    .nifty_img {
        width:20%; 
        margin-top: 81px;
    }

    .nImg {
        width:211px;
    }

    @media screen and (max-width:768px){
        .nifty {
            flex-direction: column;
            width:100%;
        }

        
    }
`
function Nifty() {
    return (
        <Content>
            <div className="nifty">
                <div className="nifty_text">
                    <h2>Buy and sell NFTs on Nifty Gateway</h2>
                    <p>A non-fungible token (NFT) is digital art on the blockchain—the latest trend in crypto. Nifty Gateway is owned by Gemini, so you can expect the same industry-leading crypto security for your NFTs</p>
                </div>  
                <div className="nifty_img">
                    <img src={nifty} alt="nifty-logo" className='nImg'/>
                </div>
            </div>
        </Content>
    )
}

export default Nifty
