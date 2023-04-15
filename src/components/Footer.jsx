import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import rihgtcrcle from "../assets/images/img/foterrightcrcle.png";
import leftcrcle from "../assets/images/img/footer,eftcrcle.png";
const Footer = () => {
  return (
    <footer className="bg_footer overflow-hidden position-relative z_index_plus_1">
      <img
        src={rihgtcrcle}
        alt="rihgtcrcle"
        className=" position-absolute rightcrcle_footer_pos"
      />
      <img
        src={leftcrcle}
        alt="leftcrcle"
        className=" position-absolute leftcrcle_footer_pos"
      />
      <Container>
        {/* upper div */}
        <Row className=" justify-content-evenly py_40 border_btm align-items-center">
          <Col xs={9} md={6} className=" text-center text-md-start">
            <p className="fw_600 fs_xxxl clr_white">
              Let’s discuss and bring your vision to life.
            </p>
          </Col>
          <Col
            xs={9}
            md={4}
            className=" text-md-end text-center border_btm_small_screen"
          >
            {" "}
            <button className="fw_500 fs_md clr_white border-0 rightarrow transition my-4 my-md-5 py-3 pl_32 bg_green_linear border_radius_100">
              Let’s Talk<span className="me-4 ms-2">&rarr;</span>
            </button>
          </Col>
        </Row>
        {/* footer  */}
        <Row className=" justify-content-between py-5 mt-md-5 border_btm">
          <Col md={4}>
            <div>
              <div className="d-flex">
                <img src={pagelogo} alt="pagelogo" />
                <span className="fw_700 fs_xl fontstyle_italic clr_white">
                  Agenone
                </span>
              </div>
              <p className="fw_400 fs_md clr_lightgray mt-4">
                We're a team of experienced designers, developers, and
                marketers, passionate about delivering exceptional digital
                solutions.
              </p>
              <p className="mt-3 mt-lg-5">
                <a
                  href="#"
                  className="fw_500 fs_md clr_lightgray hover_clr_white"
                >
                  {" "}
                  hello@agenone.com
                </a>
              </p>
            </div>
          </Col>
          <Col md={7} lg={6}>
            <Row>
              <Col xs={6} className="mt-5 mt-md-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className="fw_700 fs_md clr_white">Menu</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-4 hover_clr_white">
                      Home
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Services
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      About Us
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Project
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Contact
                    </li>
                  </a>
                </ul>
              </Col>
              <Col xs={6} className="mt-5 mt-md-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className="fw_700 fs_md clr_white">Support</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-4 hover_clr_white">
                      FAQ
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Privacy Policy
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Terms of Service
                    </li>
                  </a>
                </ul>
              </Col>
              <Col xs={6} className="mt-5 mt-md-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className="fw_700 fs_md clr_white">Social Media</li>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-4 hover_clr_white">
                      Linked In
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Twitter
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Instagram
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Dribbble
                    </li>
                  </a>
                  <a href="#">
                    {" "}
                    <li className="fw_400 fs_md  clr_lightgray mt-3 hover_clr_white">
                      Behance
                    </li>
                  </a>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <p className=" text-md-center fw_400 fs_md clr_lightgray mb-0 py_40 ">
          Copyright © 2023 by Agenone. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
