import React from 'react'
import styled from 'styled-components'
import video from '../../video/gemini-phone.mp4'

const Container = styled.div`
    display: flex;
    padding-top: 45px;
    justify-content: space-between;

    .text_container {
        margin-top: 100px;
        line-height:20px;
        width: 50%;
    }
    .video {
        margin: -40px -100px 0px 0px;
        width: 100%;
    }

    .image_container{
        width: 30%;
    }

    .header_text {
        font-size: 72px;
        line-height: 88px;
        font-weight: 700;

    }

    @media (max-width: 900px) {
        flex-direction: column;

        .text_container {
            width: 90%;
            margin: 0 auto;
            text-align: center;
            font-size: 40px
        }

        .header_text {
            margin: 0px 0px 16px;
            color: rgb(1, 3, 4);
            font-weight: 700;
            font-size: 2rem;
            line-height: 44px;
        }

        .text_text {
            color: rgb(1, 3, 4);
            font-weight: 400;
            font-size: 20px;
            line-height: 2px;
            margin-top: 30px
        }

        .image_container {
            width: 100%;
            margin: 0 auto;
        }

        .br {
            margin-top:50px
        }

    }
    

`

function Hero() {
    return (
        <>
            <Container>
                <div className="text_container">
                    <h1 className='header_text'>Buy bitcoin and crypto instantly!</h1>
                    <p className="text_text">Gemini is a simple, elegant and secure</p>
                    <p className="text_text">platform to build your crypto portfolio</p>
                    <button className="">
                        Get started
                    </button>
                    <br className="br"/>
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
