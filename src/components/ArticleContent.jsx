import React from 'react';
import styled from 'styled-components';

const  Content = styled.div ` 
    position:relative;
    top:-180px;
    padding-left: 70px;
    padding-right:70px;

    h2 {
        font-size:36px;
        font-weight:600;
        line-height: 44px
    }

    .crypto_flex {
        display: flex;
        line-height:44px;
        width: 100%;
        padding-left:5px;
        padding-right:5px;
        justify-content:space-between;
    }


    .crypto_row {
        width:50%;
        flex-grow:0;
    }

    .crypto_row2 {
        width:50%;
        flex-grow:0;
    }

    @media screen and (max-width:768px) {
        .crypto_flex {
            flex-direction: column;
            padding-left:0px;
            padding-right:0px;
            width: 100%;
        }
        .crypto_row {
            width:100%;
        }
    
        .crypto_row2 {
            width:100%;
        }
    
    }

    .bold {
        font-weight: 900;
        margin-top:10px;
    }

    .normal {
        font-weight: 500;
        font-size: 16px;
    }

`

function ArticleContent() {
    return (
        <Content>
            <h2>Industry-leading security from day one</h2>
            <div className="crypto_flex">
                <div className="crypto_row">
                    <p className="bold">Safety, security and compliance</p>
                    <p className="normal">Gemini is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.</p>
                </div>
                <div className="crypto_row2">
                    <p className="bold">SOC Certifications</p>
                    <div className="normal">Gemini is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.</div>
                </div>
            </div>
            <div className="crypto_flex">
                <div className="crypto_row">
                    <p className="bold">Safety, security and compliance</p>
                    <p className="normal">Gemini is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.</p>
                </div>
                <div className="crypto_row2">
                    <p className="bold">SOC Certifications</p>
                    <div className="normal">Gemini is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.</div>
                </div>
            </div>
        </Content>
    )
}

export default ArticleContent