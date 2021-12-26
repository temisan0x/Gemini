import React from 'react';
import styled from 'styled-components';
import nifty from './../img/nifty-icon.png';
import background from './../img/homepage-nifty-background-6f8651712581a611379f1700cd8aaf92.png'
import { Link } from 'react-router-dom'

const Content = styled.div`
    background:url(${background});
    padding-top: 45px;
    padding-left: 70px;
    padding-right:70px;
    
    
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


    .nifty_button {
        min-width: 180px;
        height: 56px;
        padding: 0px 32px;
        font-size: 18px;
        border-radius: 20px;
        visibility: visible;
        outline: currentcolor none 0px;
        padding: 0px 24px;
        margin: 0px;
        cursor: pointer;
        min-width: 160px;
        height: 48px;
        border-radius: 16px;
        background-color: initial;
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0.33px;
        text-align: center;
        border: 2px solid rgb(255, 255, 255);
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
    }

    .a_link {
        padding-top:30px;
        margin-bottom:50px;
    }

    @media screen and (max-width:768px){
        .nifty {
            flex-direction: column-reverse;
            width:100%;
        }

        .nifty_img {
            margin:0 auto;
            margin-top:50px;
            display: flex;
            justify-content: center;
        }

        .nImg {
            width:92px;
        }

        .nifty_text {
            line-height:24px;
            padding-top: 81px;
            display:flex;
            flex-direction: column;
            width:100%;
            text-align:center;
            padding-right:0%;
            position:relative;
            top:-40px;
    }
`
function Nifty() {
    return (
        <Content>
            <div className="nifty">
                <div className="nifty_text">
                    <h2>Buy and sell NFTs on Nifty Gateway</h2>
                    <p>A non-fungible token (NFT) is digital art on the blockchain—the latest trend in crypto. Nifty Gateway is owned by Gemini, so you can expect the same industry-leading crypto security for your NFTs</p>
                    <Link className="a_link">
                        <button className="nifty_button">
                            Get Nifty
                        </button>
                    </Link>
                </div>  
                <div className="nifty_img">
                    <img src={nifty} alt="nifty-logo" className='nImg'/>
                </div>
            </div>
        </Content>
    )
}

export default Nifty
