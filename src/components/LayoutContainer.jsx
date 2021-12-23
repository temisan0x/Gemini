import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Layout = styled.div `
    background-color: rgb(26, 28, 29);
    padding-left: 70px;
    padding-right:70px;
    padding-top: 70px;
    padding-bottom: 56px;
    position: relative;
    top: -80px;


    .layout_flex {
        display: flex;
        flex-direction: column;
        line-height:4;
        align-items:center;
        justify-content:center;
    }

    p {
        color:#ffffff;
        font-weight:400px;
        font-size: 18px;
        line-height:1.5;
        text-align:center;
        margin-bottom:20px;
    }

    h2 {
        color:#ffffff;
        font-size: 36px;
        line-height: 30px;
        font-weight: 600;
        text-align:center;
        margin-bottom:10px;
    }

    @media screen and (max-width:768px) {
        h2 {
            font-size: 24px;
        }

        p {
            font-size: 18px;
        }
    }

    .layout_btn {
        visibility: visible;
        padding: 0px 24px;
        cursor: pointer;
        min-width: 160px;
        height: 48px;
        border-radius: 16px;
        background-color: rgb(38, 221, 249);
        color: rgb(1, 3, 4);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0.33px;
        text-align: center;
        border: 2px solid rgb(38, 221, 249);
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
        text-align: center;
        margin-bottom: 20px;
    }

    .layout_btn:hover{
        border-color: rgb(124, 234, 251);
        background-color: rgb(124, 234, 251);
        color: rgb(1, 3, 4);
    }


`


function LayoutContainer() {
    return (
        <Layout>
            <div className="layout_flex">
                <h2>A simple, secure way to buy and sell cryptocurrency</h2>
                <p>Trade bitcoin and other cryptos in 3 minutes.</p>
                <Link>
                    <button className="layout_btn">
                        Get started
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export default LayoutContainer
