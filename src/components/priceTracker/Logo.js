import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'reactstrap';
import logo from '../../img/gemini.jpg'

const Crypto = styled.div `
    .logo {
        width:200px;
    }
`

function Logo() {
    return (
        <Crypto>
            <Container>
                <Row>
                    <Col className="text-center" md="12">
                        <img src={logo} alt="logo" className="logo"/>
                    </Col>
                </Row>
            </Container>
        </Crypto>
    )
}

export default Logo;
