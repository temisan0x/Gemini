import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const  Content = styled.div ` 
    position:relative;
    top:-180px;
    padding-left: 70px;
    padding-right:70px;

    h2 {
        font-size:36px;
        font-weight:600;
        line-height: 44px;
        margin-top:20px;
        margin-bottom:15px
    }

    .crypto_flex {
        display: flex;
        line-height:30px;
        width: 100%;
        padding-left:5px;
        padding-right:5px;
        justify-content:space-between;
        flex-direction:1.6;
    }


    .crypto_row {
        width:50%;
        flex-grow:0;
    }

    .crypto_row2 {
        width:50%;
        flex-grow:0;
    }


    .bold {
        font-weight: 900;
        margin-top:10px;
    }

    .normal {
        font-weight: 500;
        font-size: 16px;
        padding-right:20px;
    }

    a {
        color:inherit;
    }

    @media screen and (max-width:768px) {

        .crypto_flex {
            display:flex;
            flex-direction: column;
            padding-left:0px;
            padding-right:0px;
        
        }
        .crypto_row {
            display:flex;
            width:100%;
            flex-direction:column;
            padding-right:20px;
        }
    
        .crypto_row2 {
            width:100%;
            display:flex;
            flex-direction:column;
            width:100%;
        }

        .normal {
            padding-right:0px;
        }
    }

`

function ArticleContent() {
    return (
        <Content>
            <h2>Industry-leading security from day one</h2>
            <br />
            <div className="crypto_flex">
                <div className="crypto_row">
                    <p className="bold">Safety, security and compliance</p>
                    <p className="normal">Gemini is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. 
                    <Link to="/learn-more"> Learn more </Link>about our commitment to security.</p>
                </div>
                <div className="crypto_row2">
                    <p className="bold">SOC Certifications</p>
                    <div className="normal">Gemini is <Link to="/SOC1">SOC 1 Type 2</Link> and <Link to="/SOC2">SOC 2 Type 2</Link> compliant. We are the world's first cryptocurrency exchange and custodian to complete these exams.</div>
                </div>
            </div>
            <div className="crypto_flex">
                <div className="crypto_row">
                    <p className="bold">Hardware security keys</p>
                    <p className="normal">With Gemini you can secure your account with a <Link to="/hardware">hardware security key</Link> via WebAuthn.</p>
                </div>
                <div className="crypto_row2">
                    <p className="bold">Insurance coverage</p>
                    <div className="normal">All crypto held online in our exchange wallet is insured and we use best-in-industry <Link to="/storage">cold storage coverage</Link> with leading insurance providers.</div>
                </div>
            </div>
        </Content>
    )
}

export default ArticleContent