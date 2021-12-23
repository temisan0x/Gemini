import React from 'react';
import styled from 'styled-components';

const Subscribe = styled.div`
    position:relative;
    bottom: 80px;
    padding-top: 45px;
    padding-left: 70px;
    padding-right:70px;

    .subscribe_flex {
        display:flex;
        justify-content:space-around;
        width: 100%;        
        align-items:center;
    }

    .input_flex {
        display:flex;
        justify-content:space-between;
        width: 50%;
        background-color:white;
        border-radius: 20px;
        border-radius: 20px;
        border: 1px solid black;
        overflow: hidden;
        margin-right:30px;
    }

    p {
        font-weight:600;
        font-size: 1.4rem;
        padding-left: 1rem;
        margin-left:50px;
    }

    #email {
        width: 100%;
        border: none;
        padding: 20px 20px; 
        outline: none;
        color: rgb(1, 3, 4);        
        background: transparent;
    }


    .sub_btn {
        font-weight: 400;
        font-size: 16px;
        padding: 5px 25px;
        border: 1px solid black;
        background: black;
        color: white;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    

    @media screen and (max-width:768px) {

        .subscribe_flex {
            flex-direction: column;
            align-items: start;
        }

        .input_flex {
            flex-direction: column;
            width: 70%;
            overflow: visible;
            border: none;
        }

        p {
            margin-bottom:20px;
        }

        #email, .sub_btn {
            width: 100%;
            border: none;
            padding: 20px 20px; 
            outline: none;
            color: rgb(1, 3, 4);        
            background: transparent;
            border-radius: 20px;
            border: 1px solid black;
            margin-bottom: 18px;
        }
        
        
        .sub_btn {
            background: black;
            color: white;
            margin-bottom: 50px;
            border-radius: 20px;
        }

    }

`

function SubscribeText() {
    return (
        <Subscribe>
            <div className="subscribe_flex">
                <p>Stay up to date</p>
                <div className="input_flex">
                    <input type="email" name="email" id="email" label="email" placeholder='Email address' className="email"/>
                    <button className="sub_btn">
                        Subscribe
                    </button>
                </div>
            </div>
        </Subscribe>
    )
}

export default SubscribeText
