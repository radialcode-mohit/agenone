import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import twolines from "../assets/images/img/passinate/twolines.png";
import greencrcle from "../assets/images/img/passinate/lightgreench=rcle.png";
const Passinate = () => {
  return (
    <section className="bg_lightgreen_linear  py-5 position-relative overflow-hidden">
      <Container className="py-lg-5">
        <div className="px-3 px-lg-0">
          <p className="fw_500 fs_xxxl">
            We are passionate about helping businesses grow and succeed in the
            digital age. We take pride in our work and strive to exceed your
            expectations every time.
          </p>
          <Row className="bg_green_linear border_radius_20 p-4 mt-4 mt-lg-5">
            <Col xs={12} sm={6} lg={3}>
              <div className="text-center">
                <span className="fw_700 fs_4xl clr_white">10+</span>
                <p className="fw_500 fs_xl clr_white">Years of Experiences</p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <div className="text-center">
                <span className="fw_700 fs_4xl clr_white">666+</span>
                <p className="fw_500 fs_xl clr_white">Project Completed</p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <div className="text-center">
                <span className="fw_700 fs_4xl clr_white">555+</span>
                <p className="fw_500 fs_xl clr_white">Satisfied Client</p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <div className="text-center">
                <span className="fw_700 fs_4xl clr_white">10+</span>
                <p className="fw_500 fs_xl clr_white">Awards Achieved</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <img
        src={twolines}
        alt="twolines"
        className="position-absolute two_line_img_position z_index_minus_1 d-none d-lg-block "
      />
      <img
        src={greencrcle}
        alt="greencrcle"
        className="position-absolute greencrcle_position z_index_minus_1 d-none d-lg-block "
      />
    </section>
  );
};

export default Passinate;
