import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
export default function SponsoredBy () {
    const sponsoredByLogos = importAll(require.context("../assets/images/sponsoredby", false, /\.(png|jpe?g|svg)$/));
    return (
    <div className="section-bg-1">
        <div style={{marginBlock: "100px"}}>
            <h1>Sponsored By</h1>
        </div>
        <Container>
            <Row className="justify-content-center">
            {Object.keys(sponsoredByLogos).map((image, index) => (
            
                <Col  xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center" key={index}>
                    <img src={sponsoredByLogos[image]}  className="img-fluid" alt={image} style={{ maxWidth: "100%", height: "auto" }} />
                </Col>
            ))}
            
            </Row>
        </Container>
    </div>
)}