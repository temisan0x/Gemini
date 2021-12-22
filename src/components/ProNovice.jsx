import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import novice from './../img/tools-0c1109d217e717d74eb146334e8111e4.png'

const ProSection = styled.div `
    background-color: rgb(247, 247, 247);
    position:relative;
    top:-80px;
    padding-left: 70px;
    padding-right:70px;
    padding-top: 100px;
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
`

function ProNovice() {
    return (
        <ProSection>
            <div className="pro_flex">
                <div className="pro_row1">
                    <h2>Tools for beginners and active traders</h2>
                    <p>Whether you're an experienced trader or just getting started, Gemini has all the tools you need to buy, sell, and store your crypto. Maximize your trading strategies with ActiveTrader.</p>
                    <Link>
                        <button>Learn more</button>
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
