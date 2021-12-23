import React from 'react';
import styled from 'styled-components';

const Subscribe = styled.div`
    position:relative;
    bottom:50px;
    padding-top: 45px;
    padding-left: 70px;
    padding-right:70px;

    .subscribe_flex {
        display:flex;
        justify-content:space-around;
    }
`

function SubscribeText() {
    return (
        <Subscribe>
            <div className="subscribe_flex">
                <p>Stay up to date</p>
                <input type="email" name="email" id="email" label="email"/>
            </div>
        </Subscribe>
    )
}

export default SubscribeText
