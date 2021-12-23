import React from 'react';
import styled from 'styled-components';

const Layout = styled.div `
    background-color: rgb(26, 28, 29);
    padding-left: 70px;
    padding-right:70px;
    padding-top: 70px;
    padding-bottom: 56px;
`


function LayoutContainer() {
    return (
        <Layout>
            <div className="layout_flex">
                <h2>A simple, secure way to buy and sell cryptocurrency</h2>
                <p></p>
            </div>
        </Layout>
    )
}

export default LayoutContainer
