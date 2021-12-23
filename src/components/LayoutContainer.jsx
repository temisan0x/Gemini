import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Layout = styled.div `
    background-color: rgb(26, 28, 29);
    padding-left: 70px;
    padding-right:70px;
    padding-top: 70px;
    padding-bottom: 56px;

    .layout_flex {
        display: flex;
        flex-direction: column;
        line-height:5;
        align-items:center;
        justify-content:center;
    }

    p {
        color:#ffffff;
        font-weight:400px;
    }

    h2 {
        color:#ffffff;
        font-size: 36px;
        line-height: 44px;
        font-weight: 600;
    }

    .layout_btn {

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
