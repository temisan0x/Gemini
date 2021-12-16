import React from 'react';
import styled from 'styled-components';
import video2 from '../video/reveal-trio.mp4'

const Content = styled.div `
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(207, 205, 210);
    overflow: hidden;

    .waitList {
        height:50vh;
        line-height:20px;
        display: flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
    }

    .waitList_text {
        line-height: 32px;
        width:60%
    }

    .waitList_text  h2 {
        margin: 0px 0px 16px;
        color: rgb(1, 3, 4);
        font-weight: 600;font-size: 32px;
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
        width:40%;
        background-color:
    }

    .video {
        margin: -40px -100px 0px 0px;
        width: 100%;
    }

    .waitList_btn {
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
`

function ContentContainer() {
    return (
        <Content>
            <div className="waitList">
                <div className="waitList_text">
                    <h2>Introducing the Gemini Credit Card™</h2>
                    <ul>
                        <li className="list"><p>√ Up to 3% back on purchases</p></li>
                        <li className="list"><p>√ Earn rewards in bitcoin or any crypto on Gemini</p></li>
                        <li className="list"><p>√ No annual fee1</p></li>
                    </ul>
                    <span>
                        Subject to cardholder and rewards terms which will be available at application.
                    </span>
                    <button className="waitList_btn">
                        Join the waitlist
                    </button>
                </div>
                <div className="waitList_video">
                    <video preload="auto" autoPlay={true} className="video">
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
            </div>
        </Content>
    )
}

export default ContentContainer
