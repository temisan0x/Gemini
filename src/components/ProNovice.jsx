import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import novice from './../img/tools-0c1109d217e717d74eb146334e8111e4.png'

const ProSection = styled.div `
    background-color: rgb(247, 247, 247);
    position:relative;
    top: 50px;
    padding-left: 70px;
    padding-right:70px;
    padding-top: 70px;
    padding-bottom: 56px;

    

    .pro_flex {
        display:flex;
        width:100%;
    }

    .pro_row1 {
        width:50%;

        h2 {
            font-size: 36px;
            line-height: 39px;
            margin: 0px 0px 20px;
            color: rgb(1, 3, 4);
            font-weight: 600;
            padding-right:80px;
            padding-top:50px;
        }

        p{
            font-size: 18px;
            line-height: 29px;
            font-weight:400;
            padding-right:80px;
        }
    }

    .pro_row2 {
        width:50%;
    }

    .pro_img{
        width:100%;
    }

    .button {
        display: block;
        padding: 0px 24px;
        cursor: pointer;
        min-width: 160px;
        height: 48px;
        border-radius: 16px;
        background-color: initial;
        color: rgb(1, 3, 4);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0.33px;
        text-align: center;
        border: 2px solid rgb(1, 3, 4);
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
        margin-top:20px;
    }

    .a {
        text-decoration:none;
    }

    @media screen and (max-width:768px){

        padding-left: 30px;
        padding-right: 30px;

        .pro_flex {
            flex-direction: column;
            

        h2 {
            font-size: 24px;
            font-family (stack): Inter, Helvetica Neue, Helvetica, Arial, sans-serif;
            color: rgb(1, 3, 4);
            line-height: 32px;
            vertical-align: baseline;
            font-weight: 600;
            padding-right:0px;
            padding-top:0px;
            margin-bottom:10px
        }

        p{
            font-size: 18px;
            line-height: 29px;
            font-weight:400;
            padding-right:0px;
        }

        .pro_row1 {
            width:100%;
        }

        .pro_row2 {
            width:100%;
        }

        .button {
            margin-bottom:50px
        }
    }
`

function ProNovice() {
    return (
        <ProSection>
            <div className="pro_flex">
                <div className="pro_row1">
                    <h2>Tools for beginners and active traders</h2>
                    <p>Whether you're an experienced trader or just getting started, Gemini has all the tools you need to buy, sell, and store your crypto. Maximize your trading strategies with ActiveTrader.</p>
                    <Link to="learnMore" className="a">
                        <button className="button">Learn more</button>
                    </Link>
                </div>
                <div className="pro_row2">
                    <img src={novice} alt="tools" className="pro_img"/>
                </div>
            </div>
        </ProSection>
    )
}

export default ProNovice
