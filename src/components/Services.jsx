import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../custom.scss';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Services = () => {

    return (
        <>
            <Container className="row1" fluid>
                <Row xs={1} md={2} lg={3} xl={4} className="w-100 d-flex flex-row">
                    <Card className="services" id="fifteen">
                        <Card.Header variant="top">
                            <img src="src/assets/images/Asset 22.png" alt="car and wrench icon" width="75" className="d-inline-flex justify-content-center card-pic"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 d-flex justify-content-end">15 <span>+</span> Years Experience</Card.Title>
                            <Card.Text>
                                Dr. T has been delivering top-notch automotive service with a commitment to excellence for over 15 years. Whether it's routine maintenance or complex repairs, you can count on Dr. T's expertise and dedication to keep your vehicle running smoothly. Trust your car with the best in the business!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="diagservices">
                        <Card.Header variant="top">
                            <img src="src/assets/images/Asset 15.png" alt="check engine light icon" width="75" height="60"                      className="d-inline-flex justify-content-center card-pic"
                            id="cel" />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 d-flex justify-content-end">Thorough Diagnostics</Card.Title>
                            <Card.Text>
                                We pride ourselves on providing thorough diagnostic services to pinpoint any issues with your vehicle. Our state-of-the-art equipment and experienced technicians ensure that no problem goes undetected, giving you peace of mind and a smooth ride every time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="services">
                        <Card.Header variant="top">
                            <img src="src/assets/images/Asset 21.png" alt="car and wrench icon" width="75" height="75" className="d-inline-flex justify-content-center card-pic"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4 pt-2 pb-1">Suspension Repairs</Card.Title>
                            <Card.Text>
                                <br />
                                When it comes to suspension repairs, Dr. T's has you covered. Our skilled technicians use the latest tools and techniques to ensure your vehicle's suspension system is in top condition, providing you with a smoother, safer ride.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container className="row2" fluid>
                <Row xs={1} md={2} lg={3} xl={4} className="w-100 d-flex flex-row">
                    <Card className="services" id="quality">
                        <Card.Header variant="top">
                            <img src="src/assets/images/Asset 23.png" alt="car on a lift icon" width="75" className="d-inline-flex justify-content-center pb-2"/>
                        </Card.Header>                    
                        <Card.Body id="too-big">
                            <Card.Title className="fs-4 py-2 d-flex justify-content-end">High-Quality, Affordable Auto Repairs</Card.Title>
                            <Card.Text>
                            When you need high-quality auto repairs that won't break the bank, Dr. T is your go-to guy. With a reputation for excellence and affordability, you can trust Dr. T to get the job done right without stretching your budget.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="multiservice" id="multi">
                        <Card.Header variant="top">
                            <img src="src/assets/images/1Asset 20.png" alt="auto repair icons" width="150" height="75" className="d-inline-flex justify-content-center pt-1 card-pic"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 d-flex justify-content-end">No Job Too Big or Too Small</Card.Title>
                            <Card.Text>
                            Whether it's a minor fix or a major overhaul, Dr. T and his team tackle every task with the same level of dedication and expertise, ensuring your vehicle gets the care it deserves.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="services pb-4">
                        <Card.Header variant="top" className="mb-4 pb-4">
                            <img src="src/assets/images/Asset 14.png" alt="car leaving garage icon" width="75"className="d-inline-flex justify-content-center card-pic"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4 py-2 d-flex justify-content-end">Getting Your Car Back in Tip-Top Shape</Card.Title>
                            <Card.Text>Dr. T is committed to getting your car back in tip-top shape every time. With meticulous attention to detail and a passion for perfection, you can count on Dr. T to have your vehicle running smoothly and safely.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default Services;