import React from 'react';
import styled from 'styled-components';
import video2 from '../video/reveal-trio.mp4'

const Content = styled.div `
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: rgb(207, 205, 210);
    overflow: hidden;
    padding-left:60px;
    padding-right:60px;

    .container {
        flex-direction: row;
        line-height:20px;
        display: flex;
        width:100%;
        justify-content:space-between;
        align-items:center;

    }

    .waitList_text {
        line-height: 32px;
        width:70%
    }

    .waitList_text  h2 {
        margin: 0px 0px 16px;
        color: rgb(1, 3, 4);
        font-weight: 600;
        font-size: 40px;
        
    }

    .waitList_text ul li p {
        letter-spacing: 1px;
        font-size:16px;

    }

    .waitList_text ul li {
        list-style-type:none;
        line-height:28px;
        padding-bottom: 10px
    }

    .waitList_video {
        width:30%;
        overflow: hidden;
        margin:0 auto;
    }

    .wvideo {
        width: 300px;
    }



    @media screen and (max-width:768px){
        .container {
            flex-direction: column;
            width:100%
        }

        .waitList_video {
            width: 100%;
        }

        .waitList_text {
            width:100%;
        }
    }

    .span {
        margin: 0px 0px 24px;
        color: rgb(103, 104, 104);
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0px;
    }

    @media screen and (max-width:768px){
        .span {
            margin-right:370px;
            padding-left: 1.3px;
            padding-top:15px;
            padding-bottom: 15px;
            padding-right:0px;
        }
    }

    .waitList_btn {
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

`

const Sup = styled.sup `
    font-size: 55%;
    top: -0.6em;
`

function ContentContainer() {
    return (
        <Content>
            <div  className="container">
                <div className="waitList_text">
                    <div className="text">
                        <h2>Introducing the Gemini Credit Card<Sup>™</Sup></h2>
                    </div>
                    <ul>
                        <li className="list"><p>√ Up to 3% back on purchases</p></li>
                        <li className="list"><p>√ Earn rewards in bitcoin or any crypto on Gemini</p></li>
                        <li className="list"><p>√ No annual fee<Sup>1</Sup></p></li>
                    </ul>
                    <div className="span">
                        <span>
                        <Sup>1</Sup>Subject to cardholder and rewards terms which will be available at application.
                        </span>
                    </div>
                    <button className="waitList_btn">
                        Join the waitlist
                    </button>
                </div>
                <div className="waitList_video">
                    <video preload="auto" autoPlay={true} className="wvideo">
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
            

                </div>
        </Content>
    )
}

export default ContentContainer
