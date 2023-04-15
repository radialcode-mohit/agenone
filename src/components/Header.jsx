import React from "react";
import MyNav from "../components/MyNav";
import col1 from "../assets/images/img/herosection/col1.png";
import col2 from "../assets/images/img/herosection/col2.png";
import col3 from "../assets/images/img/herosection/col3.png";
import col4 from "../assets/images/img/herosection/col4.png";
import bigcrlce from "../assets/images/img/herosection/bigcrcle.png";
import smalcrlce from "../assets/images/img/herosection/smlcrcle.png";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const Header = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <header className="hero_sec_bg">
      <MyNav />
      <Container className="py-5">
        <div className="py-md-5">
          <div className="text-center">
            <span className="bg_grey_rgba border_radius_100 fs_xsm py-2 clr_white px-3  ">
              NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
            </span>
            <h1 className="green_linear_text_bg fw_700 fs_4xl mb-0 mt-4">
              Smart Choices{" "}
            </h1>
            <span className="fw_700 fs_4xl clr_white line_h_100px">
              For Your Business Growth{" "}
            </span>
            <p className="fw_500 fs_lg clr_lightgray mt-4">
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
            <button className="fw_500 fs_md clr_white border-0 rightarrow transition my-4 my-md-5 py-3 pl_32 bg_green_linear border_radius_100">
              Contact Us <span className="me-4 ms-2">&rarr;</span>
            </button>
          </div>
          <div className="curve_shape_bg position-relative z_index_plus_1 mt-5 overflow-hidden">
            <img
              src={smalcrlce}
              alt="smalcrlce"
              className=" position-absolute end-0 bottom-0 z_index_minus_1 d-none d-sm-block"
            />
            <img
              src={bigcrlce}
              alt="bigcrlce"
              className=" position-absolute bigcircleposition z_index_minus_1 d-none d-sm-block"
            />
            <p className="fw_600 fs_xxl clr_white text-center mt-4 py-3 py-md-0">
              Benefit of improving your business
            </p>
            <Slider {...settings} className="py-5">
              <Col lg={3} className="cusur_poi">
                <div className="text-center">
                  <img
                    src={col1}
                    alt="col1"
                    className="mx-auto translate_on_hover transition"
                  />
                  <p className="fw_500 fs_xl clr_white mt-2">
                    Expanding the Market
                  </p>
                </div>
              </Col>
              <Col lg={3} className="cusur_poi">
                <div className="text-center">
                  <img
                    src={col2}
                    alt="col1"
                    className="mx-auto translate_on_hover transition"
                  />
                  <p className="fw_500 fs_xl clr_white mt-2">Cost-Effective</p>
                </div>
              </Col>
              <Col lg={3} className="cusur_poi">
                <div className="text-center">
                  <img
                    src={col3}
                    alt="col1"
                    className="mx-auto translate_on_hover transition"
                  />
                  <p className="fw_500 fs_xl clr_white mt-2">
                    More Professional
                  </p>
                </div>
              </Col>
              <Col lg={3} className="cusur_poi">
                <div className="text-center">
                  <img
                    src={col4}
                    alt="col1"
                    className="mx-auto translate_on_hover transition"
                  />
                  <p className="fw_500 fs_xl clr_white mt-2">Attract Client</p>
                </div>
              </Col>
            </Slider>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
