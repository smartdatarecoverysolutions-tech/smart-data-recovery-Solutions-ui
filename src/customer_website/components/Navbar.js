import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const whatsappNumber = "919866816611";

  const whatsappMessage =
    "Hello Smart Data Recovery, I need help with data recovery";

  const whatsappUrl =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  const toggleServices = () => {
    setServiceOpen((prev) => !prev);
  };

  return (
    <header className="navbar">

      <div className="container nav-container">

        {/* =================================
            LOGO
        ================================= */}

        <NavLink
          to="/home"
          className="logo"
          onClick={closeMenu}
        >

          <div className="logo-circle">
            SDRS
          </div>

          <div className="logo-text">

            <h2>Smart Data</h2>

            <span>
              Recovery Solutions
            </span>

          </div>

        </NavLink>


        {/* =================================
            NAVIGATION
        ================================= */}

        <ul
          className={
            menuOpen
              ? "nav-menu active"
              : "nav-menu"
          }
        >

          {/* HOME */}

          <li>

            <NavLink
              to="/home"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              Home
            </NavLink>

          </li>


          {/* ABOUT */}

          <li>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              About
            </NavLink>

          </li>


          {/* =================================
              SERVICES
          ================================= */}

          <li
            className={`dropdown ${
              serviceOpen ? "service-active" : ""
            }`}
            onMouseEnter={() => {
              if (window.innerWidth > 850) {
                setServiceOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 850) {
                setServiceOpen(false);
              }
            }}
          >

            <button
              type="button"
              className="dropdown-btn"
              onClick={toggleServices}
            >

              <span>
                Services
              </span>

              <FaChevronDown
                className={
                  serviceOpen
                    ? "chevron rotate"
                    : "chevron"
                }
              />

            </button>


            {/* =================================
                SERVICE DROPDOWN
            ================================= */}

            <ul
              className={
                serviceOpen
                  ? "dropdown-menu show"
                  : "dropdown-menu"
              }
            >

              <li>
                <NavLink
                  to="/hdd-recovery"
                  onClick={closeMenu}
                >
                  HDD Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/ssd-recovery"
                  onClick={closeMenu}
                >
                  SSD Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pen-drive-recovery"
                  onClick={closeMenu}
                >
                  Pen Drive Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/memory-card-recovery"
                  onClick={closeMenu}
                >
                  Memory Card Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/mobile-recovery"
                  onClick={closeMenu}
                >
                  Mobile Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/raid-recovery"
                  onClick={closeMenu}
                >
                  RAID Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dvr-cctv-recovery"
                  onClick={closeMenu}
                >
                  DVR / CCTV Recovery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/device-diagnosis"
                  onClick={closeMenu}
                >
                  Device Diagnosis
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cctv-recovery"
                  onClick={closeMenu}
                >
                  CCTV Recovery
                </NavLink>
              </li>

            </ul>

          </li>


          {/* CONTACT */}

          <li>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              Contact
            </NavLink>

          </li>

        </ul>


        {/* =================================
            WHATSAPP
        ================================= */}

        <div className="nav-right">

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >

            <FaWhatsapp />

            <span>
              WhatsApp
            </span>

          </a>

        </div>


        {/* =================================
            MOBILE MENU
        ================================= */}

        <button
          type="button"
          className="menu-icon"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setServiceOpen(false);
          }}
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </div>

    </header>
  );
};

export default Navbar;