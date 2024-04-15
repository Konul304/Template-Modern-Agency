'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
//= Scripts
import { handleDropdown, handleMobileDropdown } from '@/common/navbar';
import { usePathname } from 'next/navigation';
//= Static Data
import { getLogo } from '@/app/(api)/api';
import { useQuery } from 'react-query';

const Navbar = ({ lr, theme }) => {
  const navbar = useRef();
  const pathname = usePathname();

  const { data, isLoading, isError } = useQuery(
    ['Logo'],
    async () => await getLogo(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.[0]?.logoLink;

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar?.current?.classList?.add('nav-scroll');
    } else {
      navbar?.current?.classList?.remove('nav-scroll');
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === 'light' ? 'light' : ''
      }`}
      style={{
        background:
          (pathname === '/about/about-dark' ||
            pathname === '/contact/contact-dark' ||
            pathname === '/services/services_dark' ||
            pathname?.includes('/cases/cases-dark')) &&
          '#FFCC2A',
      }}
    >
      <div className="container">
        <Link className="logo" href="/">
          <img src={data ? `${img_url}` : ''} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
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
              <a
                href={`/`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/homepage/home1-dark`}>
                  Main Home
                </a>
                <a className="dropdown-item" href={`/homepage/home2-dark`}>
                  Creative Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home5-dark`}>
                  Digital Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home4-dark`}>
                  Business One Page
                </a>
                <a className="dropdown-item" href={`/homepage/home3-dark`}>
                  Corporate Business
                </a>
                <a className="dropdown-item" href={`/homepage/home6-dark`}>
                  Modern Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home7-dark`}>
                  Freelancer
                </a>
                <a className="dropdown-item" href={`/homepage/home8-dark`}>
                  Architecture
                </a>
              </div> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/about/about-dark`}>
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href={`/works2/portfolio`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/showcase/showcase-dark`}>
                  Showcase Parallax
                </a>
                <a className="dropdown-item" href={`/showcase4/showcase4-dark`}>
                  Showcase Carousel
                </a>
                <a className="dropdown-item" href={`/showcase3/showcase3-dark`}>
                  Showcase Circle
                </a>
                <a className="dropdown-item" href={`/works/works-dark`}>
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href={`/works2/works2-dark`}>
                  Portfolio Filtering
                </a>
                <a className="dropdown-item" href={`/works3/works3-dark`}>
                  Portfolio Gallery
                </a>
              </div> */}
            </li>
            <li className="nav-item dropdown">
              <a
                href={`/services/services_dark`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href={`/blog/blog-dark`}>
                  Blog Standerd
                </a>
                <a className="dropdown-item" href={`/blog-list/blog-list-dark`}>
                  Blog List
                </a>
                <a className="dropdown-item" href={`/blog-grid/blog-grid-dark`}>
                  Blog Grid
                </a>
                <a className="dropdown-item" href={`/blog-details/blog-details-dark`}>
                  Blog Details
                </a>
              </div> */}
            </li>
            <li className="nav-item dropdown">
              <a
                href={`/cases/cases-dark`}
                className="nav-link "
                // className="nav-link dropdown-toggle"
                // data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cases
              </a>
            </li>
            <li className="nav-item">
              <a href={`/contact/contact-dark`} className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href={`/contact/contact-dark`} className="nav-link">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
