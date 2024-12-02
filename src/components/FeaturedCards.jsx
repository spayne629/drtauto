import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';

const FeaturedCards = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img  src="src/assets/images/Asset 22.png" alt="car and wrench icon"/>
        <Card.ImgOverlay>
          <Card.Title>15+ Years Experience</Card.Title>
          <Card.Text>
            Dr. T has been delivering top-notch automotive service with a commitment to excellence for over 15 years. Whether it's routine maintenance or complex repairs, you can count on Dr. T's expertise and dedication to keep your vehicle running smoothly. Trust your car with the best in the business!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="bg-dark text-secondary">
        <Card.Img  src="src/assets/images/Asset 15.png" alt="check engine light icon"/>
        <Card.ImgOverlay>
          <Card.Title>Thorough Diagnostics</Card.Title>
          <Card.Text>
            We pride ourselves on providing thorough diagnostic services to pinpoint any issues with your vehicle. Our state-of-the-art equipment and experienced technicians ensure that no problem goes undetected, giving you peace of mind and a smooth ride every time.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="bg-dark text-secondary">
        <Card.Img  src="src/assets/images/Asset 21.png" alt="automotive suspension spring icon"/>
        <Card.ImgOverlay>
          <Card.Title>Suspension Repairs</Card.Title>
          <Card.Text>
            When it comes to suspension repairs, Dr. T's has you covered. Our skilled technicians use the latest tools and techniques to ensure your vehicle's suspension system is in top condition, providing you with a smoother, safer ride.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </CardGroup>
  );
};

export default FeaturedCards;