import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container } from 'reactstrap';

 
function Logo() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center" md="12">
                        <img src='' alt="logo"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Logo;
