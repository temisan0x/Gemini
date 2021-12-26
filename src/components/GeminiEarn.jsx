import React from 'react';
import styled from 'styled-components';
import Trio from './../img/gemini-earn-iphone-09abc761e43f816f9934cce907ce8298.png'
import photo from './../img/dot.svg'
import { Link } from 'react-router-dom';

const Section = styled.div `    
    .containers {
        line-height:20px;
        display: flex;
        width:100%;
        justify-content:space-between;
        padding-top: 45px;
        padding-left:35px;
        padding-right:35px;
    
        .earnText {
            width:50%; 
            margin-bottom: 300px;   
            margin-top: 80px;
        }

        .picture {
            text-align:start;
        }

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

        .earn_image {
            width:100%;
            margin-top:50px;
            display:flex;
            justify-content: end;
        }

        .eImg {
            width:250px;
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

        @media screen and (max-width: 768px) {
            .containers {
                line-height:20px;
                display: flex;
                width:100%;
                justify-content:space-between;
                align-items:center; 
                padding-top: 45px;
        }

            flex-direction:column;

            .earnText {
                width:100%;
                margin-bottom: 0px;
                align-items: center;
                text-align: center;
                margin-top: 20px;
            }

            .earn_image {
                width:100%;
                margin-top:50px;
                display:flex;
                justify-content: center;
            }
        }


    // @media (max-width:768px){
    //     .containers {
    //         line-height:20px;
    //         display: flex;
    //         width:100%;
    //         justify-content:space-between;
    //         align-items:center; 
    //         padding-top: 45px;
    //     }
            
    //         flex-direction: column;
    //         width:100%;
    //         align-items:center;
    //         justify-content:center;
    //     }

        .earn_more {
            margin:0px auto;
        }

    //     .earnText {
    //         width:100%;
    //         margin-bottom: 0px;
    //         align-items: center;
    //         text-align: center;
    //     }
            
    
    //         h2 {
    //             font-size: 32px;
    //             line-height: 36px;
    //             letter-spacing: 0px;
    //             margin-top:25px;
    //             font-weight:600;
    //         }
    
    //         p {
    //             font-size: 16px;
    //             line-height: 34px;
    //             margin-bottom: 20px;
    //         }

    //         .earn_image {
    //             width:100%;
    //             margin-top:50px;
    //             display:flex;
    //             justify-content: center;
    //         }
    //     }
    //     .eImg {
    //         width:300px;
    //     }
    
`



function GeminiEarn() {
    return (
        <Section>
            <div className="containers">
                <div className="earnText">
                    <picture className="picture">
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
            </div>
        </Section>
    )
}

export default GeminiEarn
