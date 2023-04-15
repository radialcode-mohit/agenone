import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import accordianimg from "../assets/images/img/ccordian/Img.png";
export const Services = () => {
  return (
    <section className=" py-5">
      <Container className="py-md-5">
        <div>
          <p className="fw_700 fs_4xl text-center">
            The Services We Offer
            <span className="green_linear_text_bg"> For You</span>
          </p>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item
                eventKey="0"
                className="p-lg-4 bg_lightestgrey border-0 border_radius_20 mt-5"
              >
                <div className="ms_4 0px w-100 ">
                  <Accordion.Header className="d-flex align-items-center">
                    <h2 className=" fw_600 fs_xxl">01</h2>
                    <h2 className="ps-5 fw_600 fs_xxl">UI/UX Design</h2>
                  </Accordion.Header>{" "}
                  <Accordion.Body className="ms-sm-5 ps-sm-5 clr_gray">
                    <p className="max_w_700 fw_400 fs_md">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img
                      src={accordianimg}
                      alt="accordianimg"
                      className="w-100"
                    />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="p-lg-4 bg_lightestgrey border-0 border_radius_20 mt-4"
              >
                <div className="ms_4 0px w-100 ">
                  <Accordion.Header className="d-flex align-items-center">
                    <h2 className="fw_600 fs_xxl">02</h2>
                    <h2 className="ps-5 fw_600 fs_xxl">Digital Marketing</h2>
                  </Accordion.Header>{" "}
                  <Accordion.Body className="ms-sm-5 ps-sm-5 clr_gray">
                    <p className="max_w_700 fw_400 fs_md">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img
                      src={accordianimg}
                      alt="accordianimg"
                      className="w-100"
                    />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="p-lg-4 bg_lightestgrey border-0 border_radius_20 mt-4"
              >
                <div className="ms_ 40px w-100 ">
                  <Accordion.Header className="">
                    <h2 className="fw_600 fs_xxl">03</h2>
                    <h2 className="ps-5 fw_600 fs_xxl">
                      Social Media Management
                    </h2>
                  </Accordion.Header>{" "}
                  <Accordion.Body className="ms-sm-5 ps-sm-5 clr_gray">
                    <p className="max_w_700 fw_400 fs_md">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img
                      src={accordianimg}
                      alt="accordianimg"
                      className="w-100"
                    />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="p-lg-4 bg_lightestgrey border-0 border_radius_20 mt-4"
              >
                <div className="ms _40px w-100 ">
                  <Accordion.Header className="d-flex align-items-center">
                    <h2 className="fw_600 fs_xxl">04</h2>
                    <h2 className="ps-5 fw_600 fs_xxl">Development</h2>
                  </Accordion.Header>
                  <Accordion.Body className="ms-sm-5 ps-sm-5 clr_gray">
                    <p className="max_w_700 fw_400 fs_md">
                      Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi
                      ac eu. Ultricies nisl enim lacus id aliquam montes euismod
                      urna sem.
                    </p>
                    <img
                      src={accordianimg}
                      alt="accordianimg"
                      className="w-100"
                    />
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};
