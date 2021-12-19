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


        p {
            line-height:20px;
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
            </div>
            <div className="earn_image">
                <img className="eImg" src={Trio} alt="earn_image" />
            </div>
        </Section>
    )
}

export default GeminiEarn
