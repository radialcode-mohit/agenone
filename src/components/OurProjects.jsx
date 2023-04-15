import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import phoneimg from "../assets/images/img/ourworks/phoneimg.png";
import circle from "../assets/images/img/ourworks/circle.png";
import blogimg from "../assets/images/img/ourworks/blogimg.png";
const OurProjects = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className=" bg_ourprojectsec py-5">
      <Container className="py-md-5">
        <div className="mx-auto max_w_1000 text-center ">
          <p className="fw_700 fs_4xl clr_white ">
            Our Project Have Been
            <span className="green_linear_text_bg"> Done</span>
          </p>
          <p className="fw_500 fs_lg clr_lightgray ">
            Take a look at some of our recent projects and see how we've helped
            other businesses elevate their brand and drive business growth.
          </p>
        </div>
        <div className="max_W_850 bg_white2 border_radius_100 mx-auto p-2 my-5">
          <Row className=" align-items-center d-none d-lg-flex">
            <Col
              onClick={() => {
                setfirst(0);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 0
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-3 px-4"
                    : "text-center fw_500 fs_sm clr_normalgray  "
                }
              >
                UI/UX Design
              </div>
            </Col>
            <Col
              onClick={() => {
                setfirst(1);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 1
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-3 px-4"
                    : "text-center fw_500 fs_sm clr_normalgray "
                }
              >
                Digital Marketing
              </div>
            </Col>
            <Col
              onClick={() => {
                setfirst(2);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 2
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-3 px-4 white_space_no_w"
                    : "text-center fw_500 fs_sm clr_normalgray  py-3 px-4 white_space_no_w"
                }
              >
                Sosmed Management
              </div>
            </Col>
            <Col
              onClick={() => {
                setfirst(3);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 3
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-3 px-4"
                    : "text-center fw_500 fs_sm clr_normalgray"
                }
              >
                Development
              </div>
            </Col>
          </Row>
          <Row className=" align-items-center d-lg-none">
            <Col
              xs={3}
              onClick={() => {
                setfirst(0);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 0
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-2 px- 3"
                    : "text-center fw_500 fs_sm clr_normalgray  "
                }
              >
                UI/UX
              </div>
            </Col>
            <Col
              xs={3}
              onClick={() => {
                setfirst(1);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 1
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-2 px- 3"
                    : "text-center fw_500 fs_sm clr_normalgray "
                }
              >
                Digital
              </div>
            </Col>
            <Col
              xs={3}
              onClick={() => {
                setfirst(2);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 2
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-2 px- 3 white_space_no_w"
                    : "text-center fw_500 fs_sm clr_normalgray  py- 3 px -4 white_space_no_w"
                }
              >
                SMM
              </div>
            </Col>
            <Col
              xs={3}
              onClick={() => {
                setfirst(3);
              }}
              className="cusur_poi"
            >
              <div
                className={
                  first === 3
                    ? "text-center fw_500 fs_sm clr_white bg_green_linear border_radius_100 py-2 px- 3"
                    : "text-center fw_500 fs_sm clr_normalgray"
                }
              >
                Dev
              </div>
            </Col>
          </Row>
        </div>
        <Row className="py-md-5 ">
          <Col md={6}>
            <div className="bg_darkestgrey border_radius_32 p-3">
              <div className=" position-relative img_hover_crcle_block">
                <img
                  src={phoneimg}
                  alt="phoneimg"
                  className="opacity_05 border_radius_32 w-100 cusur_poi"
                />
                <img
                  src={circle}
                  className=" position-absolute start-50 top-50  translate-middle d-none crcle cusur_poi w-50 max_h_w_218"
                  alt="circle"
                />
              </div>
              <p className="fw_700 fs_xxl clr_white mt-4">Title</p>
              <p className="fw_400 fs_lg clr_lightgray">
                We are designed to help your business thrive in the online
                world.
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-3 mt-md-0">
            <div className="bg_darkestgrey border_radius_32 p-3">
              <div className=" position-relative img_hover_crcle_block">
                <img
                  src={blogimg}
                  alt="blogimg"
                  className="opacity_05 border_radius_32 w-100 cusur_poi "
                />
                <img
                  src={circle}
                  className=" position-absolute start-50 top-50  translate-middle d-none crcle cusur_poi w-50 max_h_w_218"
                  alt="circle"
                />
              </div>
              <p className="fw_700 fs_xxl clr_white mt-4">Title</p>
              <p className="fw_400 fs_lg clr_lightgray">
                We are designed to help your business thrive in the online
                world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurProjects;
