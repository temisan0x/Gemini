import React from 'react';
import styled from 'styled-components';
import Trio from './../img/gemini-earn-iphone-09abc761e43f816f9934cce907ce8298.png'

const Section = styled.div `
    display: flex;
    flex-direction: row;
    width:100%;
    
    
`

function GeminiEarn() {
    return (
        <Section>
            <div className="earnText">

            </div>
            <div className="earnText_image">
                <img className="eImg" src={Trio} alt="" />
            </div>
        </Section>
    )
}

export default GeminiEarn
