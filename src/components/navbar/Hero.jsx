import React from 'react'
import styled from 'styled-components'
import video from '../../video/gemini-phone.mp4'

const Container = styled.div`
    display: flex;
    padding-top: 45px;

    .text_container {
        margin-top: 100px;
        line-height:20px;
    }
    .video {
        margin: -40px -100px 0px 0px;
        width: 85%;
    }

    .header_text {
        font-size: 72px;
        line-height: 88px;
        font-weight: 700;

    }
    

`

function Hero() {
    return (
        <>
            <Container>
                <div className="text_container">
                    <h1 className='header_text'>Buy bitcoin and crypto instantly!</h1>
                    <p>Gemini is a simple, elegant and secue platform to build your crypto portfolio</p>
                </div>
                <div className="image_container">
                    <video preload="auto" autoPlay={true} className="video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </Container>
        </>
    )
}

export default Hero
