import React from 'react';
import styled from 'styled-components';
import Trio from './../img/gemini-earn-iphone-09abc761e43f816f9934cce907ce8298.png'
import photo from './../img/dot.svg'

const Section = styled.div `
    display: flex;
    width:100%;
    padding-top: 45px;
    padding-left: 60px;
    padding-right:60px;
    justify-content: space-between;
    
    
    .earnText {
        width:50%;


        h2 {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: 0px;
        }
    }

    .earn_image {
        width:50%;
    }

    .eImg {
        width:40%;

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
            </div>
            <div className="earn_image">
                <img className="eImg" src={Trio} alt="earn_image" />
            </div>
        </Section>
    )
}

export default GeminiEarn
