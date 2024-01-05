'use client';
import React from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

const NavbarMobileApp = ({ lr, nr, theme }) => {
  return (
    <nav ref={nr} className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`}>
      <div className="container">
        <Link href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/homepage/home1-dark">
                  Main Home
                </Link>
                <Link className="dropdown-item" href="/homepage/home2-dark">
                  Creative Agency
                </Link>
                <Link className="dropdown-item" href="/homepage/home5-dark">
                  Digital Agency
                </Link>
                <Link className="dropdown-item" href="/homepage/home4-dark">
                  Business One Page
                </Link>
                <Link className="dropdown-item" href="/homepage/home3-dark">
                  Corporate Business
                </Link>
                <Link className="dropdown-item" href="/homepage/home6-dark">
                  Modern Agency
                </Link>
                <Link className="dropdown-item" href="/homepage/home7-dark">
                  Freelancer
                </Link>
                <Link className="dropdown-item" href="/homepage/home8-dark">
                  Architecture
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/mobile-app/services-dark">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/mobile-app/pricing-plan-dark">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/mobile-app/portfolio-dark">

                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/mobile-app/shop-dark">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact/contact-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
