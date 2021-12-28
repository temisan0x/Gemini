import React from 'react';
import styled from 'styled-components';

const Subscribe = styled.div`
    position:relative;
    top: 50px;
    padding-left: 70px;
    padding-right:70px;
    padding-top: 70px;
    padding-bottom: 56px;

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
        margin: 0 auto;
    }

    p {
        font-weight:600;
        font-size: 16px;
        margin-left: 100px;
        
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

        padding-left: 30px;
        padding-right: 30px;

        .subscribe_flex {
            flex-direction: column;
            align-items: center;
            width:100%;
            display: -webkit-flex;
            margin: 0 auto;
        }

        .input_flex {
            flex-direction: column;
            width: 100%;
            overflow: visible;
            border: none;
        }

        p {
            margin-bottom:40px;
            font-size: 16px;
            color:rgb(1,3,4);
            display: flex;
            justify-content:center;
            margin-left:0;
        }

        #email, .sub_btn {
            width: 100%;
            border: none;
            padding-top: 20px; 
            padding-bottom:20px;
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
            cursor:pointer;
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
                    <button className="sub_btn" style={{cursor: "pointer"}}>
                        Subscribe
                    </button>
                </div>
            </div> 
        </Subscribe>
    )
}

export default SubscribeText
