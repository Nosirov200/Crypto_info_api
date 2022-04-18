import React from 'react'
import Binance from "../images/binance-logo.png"
import { Container, Row, Col } from 'reactstrap';

const Logo = () => {
    
    return (
        <>
            <Container>
                <Row>
                    <Col  className="text-center w-48">
                        <img src={Binance} alt="Binance" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Logo;
