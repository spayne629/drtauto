import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../custom.scss';
import { useTheme } from '../context/ThemeContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Services = () => {
    const { theme } = useTheme();

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    blah blah blah
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Services;