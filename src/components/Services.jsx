import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../custom.scss';
import { useTheme } from '../context/ThemeContext';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Services = () => {
    const { theme } = useTheme();

    return (
        <>
            <Container fluid>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4 d-flex flex-row">
                        <Card className="services">
                            <Card.Header variant="top">
                                <img src="../assets/images/asset22.png" alt="car and wrench icon" />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    blah blah blah
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Row>
            </Container>
            <Row xs={1} md={2} lg={3} xl={4} className={`g-4 ${theme === 'light' ? 'body-bg-light' : 'body-bg-dark'}`}>
                <Col>
                    <Card
                        className="services"
                        border="primary"
                        style={{ width: '18rem'}}
                    >
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                blah blah blah
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Services;