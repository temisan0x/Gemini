import React from 'react';
import styled from 'styled-components';
import Trio from './../img/gemini-earn-iphone-09abc761e43f816f9934cce907ce8298.png'
import photo from './../img/dot.svg'
import { Link } from 'react-router-dom';

const Section = styled.div `
    display: flex;
    width:100%;
    padding-top: 45px;
    padding-left: 60px;
    padding-right:60px;
    justify-content: space-between;
    position:relative;
    
    
    .earnText {
        width:50%;
        padding-top: 85px;

        h2 {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: 0px;
            margin-top:25px;
            font-weight:600;
        }

        p {
            font-size: 16px;
            line-height: 34px;
            margin-bottom: 20px;
        }
    }

    .earn_image {
        width:50%;
        margin-left:100px;
    }

    .eImg {
        width:300px;
    }

    a {
        text-decoration:none;
    }

    .earn_more {
        display: block;
        visibility: visible;
        outline: currentcolor none 0px;
        padding: 0px 24px;
        margin: 0px;
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
    }

    @media screen and (max-width:768px){
        
    }
`

function GeminiEarn() {
    return (
        <Section>
            <div className="earnText">
                <picture>
                    <img src={photo} alt="logo" />
                </picture>
                <h2>Earn Up to 8.05% APY</h2>
                <p>More than 100x the average national interest rate</p>
                <Link to="/more_information" className="information">
                <button className="earn_more">
                    Learn More
                </button>
                </Link>
            </div>
            <div className="earn_image">
                <img className="eImg" src={Trio} alt="earn_image" />
            </div>
        </Section>
    )
}

export default GeminiEarn