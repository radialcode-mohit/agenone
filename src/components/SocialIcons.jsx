import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import slackimg from "../assets/images/img/socialicons/slack.png";
import googleimg from "../assets/images/img/socialicons/goggle.png";
import netfliximg from "../assets/images/img/socialicons//netflix.png";
import airbnbimg from "../assets/images/img/socialicons/airbnb.png";
import adobeimg from "../assets/images/img/socialicons/adobe.png";
import microsoftimg from "../assets/images/img/socialicons/microsoft.png";
const SocialIcons = () => {
  return (
    <section className="bg_lightblue py-5">
      <Container>
        <Row className=" justify-content-between align-items-center">
          <Col xs={6} lg={1} md={4}>
            <img
              src={slackimg}
              alt="slackimg"
              className="w_100 w_122 cusur_poi"
            />
          </Col>
          <Col xs={6} lg={1} md={4}>
            <img
              src={googleimg}
              alt="googleimg"
              className="w_100 w_122 cusur_poi"
            />
          </Col>
          <Col className="mt-4 mt-md-0" xs={6} md={4} lg={1}>
            <img
              src={netfliximg}
              alt="netfliximg"
              className="w_100 w_122 cusur_poi"
            />
          </Col>
          <Col className="mt-4 mt-lg-0" xs={6} md={4} lg={1}>
            <img
              src={airbnbimg}
              alt="airbnbimg"
              className="w_100 w_122 cusur_poi"
            />
          </Col>
          <Col className="mt-4 mt-lg-0" xs={6} md={4} lg={1}>
            <img
              src={adobeimg}
              alt="adobeimg"
              className="w_100 w_122 cusur_poi"
            />
          </Col>
          <Col className="mt-4 mt-lg-0" xs={6} md={4} lg={1}>
            <img src={microsoftimg} alt="microsoftimg" className="w_100 " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialIcons;
