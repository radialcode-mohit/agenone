import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import clara from "../assets/images/img/comments/clara.png";
import JohnDoe from "../assets/images/img/comments/doe.png";
import nas from "../assets/images/img/comments/lilnas.png";
import alan from "../assets/images/img/comments/alan.png";
const Comment = () => {
  return (
    <section>
      <Container>
        <Row className="overflow-hidden">
          <Col xs={12} lg={6} className="overfow_y_scroll scroll max_h_700">
            <Row>
              <Col xs={12} className="p-4">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-lg-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={clara} alt="clara" />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        Clara Insomnia
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Occupation
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="mt-3 mt-lg-5 p-4 pt-0 ">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-lg-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={JohnDoe} alt="John Doe" />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        John Doe
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Earth Founder
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="mt-3 mt-lg-5 p-4 pt-0">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-lg-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={JohnDoe} alt="John Doe" />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        John Doe
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Earth Founder
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="overfow_y_scroll scroll max_h_700 d-none d-lg-block"
          >
            <Row>
              <Col xs={12} className=" p-4 pt-0">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={nas} alt="nas" />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        Lil Nas
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Moon Founder
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="mt-5 p-4 pt-0">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={alan} alt="alan " />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        Alan Runner
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Sun Founder
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="mt-5 p-4 pt-0">
                <div className="bg_lightestgrey p-4 bg_green_on_hover  border_radius_12">
                  <p className="fw_400 fs_lg clr_normalgray pe-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aliquam diam sagittis sagittis ullamcorper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. aliquam.
                  </p>
                  <div className="d-flex align-items-start mt-4">
                    <img src={JohnDoe} alt="John Doe" />
                    <div className="ps-3 ">
                      <p className="fw_600 fs_lg clr_lightblue mb-0 mb-1 color_white_on_hover">
                        John Doe
                      </p>
                      <p className="fw_400 fs_sm clr_normalgray color_white_on_hover">
                        Earth Founder
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comment;
