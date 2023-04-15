import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import cross from "../assets/images/img/cross.png";
import close from "../assets/images/img/close.png";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={pagelogo} alt="pagelogo" />
            <span className="fw_700 fs_xl fontstyle_italic clr_white">
              Agenone
            </span>
          </div>
          <ul
            className={
              first
                ? "d-flex gap-5 ps-0 mb-0 align-items-center mobile_view_max_md left_minus_100 transition z_index_plus_500"
                : "d-flex gap-5 ps-0 mb-0 align-items-center mobile_view_max_md left_0 transition z_index_plus_500"
            }
          >
            <li
              className=""
              onClick={() => {
                setfirst(true);
              }}
            >
              <a href="#" className="fw_500 fs_md clr_white hoverunderline">
                {" "}
                Home
              </a>
            </li>
            <li
              className=""
              onClick={() => {
                setfirst(true);
              }}
            >
              <a href="#" className="fw_500 fs_md clr_white hoverunderline">
                {" "}
                Services
              </a>
            </li>
            <li
              className=""
              onClick={() => {
                setfirst(true);
              }}
            >
              <a href="#" className="fw_500 fs_md clr_white hoverunderline">
                {" "}
                Project
              </a>
            </li>
            <li
              className=""
              onClick={() => {
                setfirst(true);
              }}
            >
              <a href="#" className="fw_500 fs_md clr_white hoverunderline">
                {" "}
                About Us
              </a>
            </li>
            <img
              src={close}
              alt="cross"
              className="position-absolute cross_icon_position animation_close d-md-none max_w_64"
              onClick={() => {
                setfirst(true);
              }}
            />
          </ul>
          <button className="d-none d-md-block border-0 fw_500 fs_sm rightarrow clr_white py-3 px-4 bg_green_linear border_radius_100">
            Contact Us
          </button>
          <a
            href="#"
            className="navicon_container d-flex flex-column justify-content-center d-md-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navicon w-100"></span>
            <span className="navicon w-100 mt-2"></span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
