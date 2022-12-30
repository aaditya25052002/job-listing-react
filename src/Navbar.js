import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
const Navbar = () => {
  const history = useNavigate();
  // const [scrolled, seScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       seScrolled(true);
  //     } else {
  //       seScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    <nav class="navbar fixed-top navbar-expand-lg animate__animated animate__backInDown ">
      {/* <div className={scrolled ? "scrolled" : ""}> */}
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          JobListingApp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-4 mb-lg-0 px-4 py-1">
            <li
              class="nav-item"
              onClick={() => {
                history("/");
              }}
            >
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                history("/account");
              }}
            >
              <a class="nav-link" href="#">
                Account
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                history("/dashboard");
              }}
            >
              <a class="nav-link" href="#">
                Dashboard/Panel
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
