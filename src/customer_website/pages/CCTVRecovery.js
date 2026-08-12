import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
  FaSearch,
  FaHdd,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/CCTVRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

const CCTVRecovery = () => {
  return (
    <>
    <Navbar/>
    <div className="cctv-recovery-page">

      {/* =====================================================
          CCTV HERO
      ===================================================== */}

      <section className="cctv-recovery-hero">

        <div className="cctv-hero-glow"></div>

        <div className="cctv-hero-content">

          <div className="cctv-hero-icon">
            <FaVideo />
          </div>

          <span className="cctv-label">
            PROFESSIONAL CCTV DATA RECOVERY
          </span>

          <h1>
            CCTV Video <strong>Recovery Services</strong>
          </h1>

          <p>
            We specialize in recovering deleted, corrupted, formatted,
            or inaccessible CCTV footage from DVRs, NVRs, surveillance
            hard drives, SD cards, and security camera storage devices.
          </p>

        </div>

      </section>


      {/* =====================================================
          RECOVERY INFORMATION
      ===================================================== */}

      <section className="cctv-recovery-content">

        <div className="cctv-recovery-grid">

          {/* =================================================
              COMMON PROBLEMS
          ================================================= */}

          <div className="cctv-recovery-card">

            <div className="cctv-card-icon">
              <FaSearch />
            </div>

            <h2>Common CCTV Data Loss Problems</h2>

            <ul>

              <li>
                <FaCheckCircle />
                Deleted CCTV Footage
              </li>

              <li>
                <FaCheckCircle />
                Formatted DVR Hard Drive
              </li>

              <li>
                <FaCheckCircle />
                Hard Disk Failure
              </li>

              <li>
                <FaCheckCircle />
                DVR Not Detecting HDD
              </li>

              <li>
                <FaCheckCircle />
                Corrupted Video Files
              </li>

              <li>
                <FaCheckCircle />
                Power Failure
              </li>

              <li>
                <FaCheckCircle />
                Accidental Formatting
              </li>

              <li>
                <FaCheckCircle />
                Virus Attack
              </li>

            </ul>

          </div>


          {/* =================================================
              SUPPORTED DEVICES
          ================================================= */}

          <div className="cctv-recovery-card">

            <div className="cctv-card-icon">
              <FaHdd />
            </div>

            <h2>Supported Devices</h2>

            <ul>

              <li>
                <FaCheckCircle />
                DVR Systems
              </li>

              <li>
                <FaCheckCircle />
                NVR Systems
              </li>

              <li>
                <FaCheckCircle />
                CCTV Hard Drives
              </li>

              <li>
                <FaCheckCircle />
                Security Cameras
              </li>

              <li>
                <FaCheckCircle />
                Surveillance Servers
              </li>

              <li>
                <FaCheckCircle />
                SD Cards
              </li>

            </ul>

          </div>


          {/* =================================================
              RECOVERY PROCESS
          ================================================= */}

          <div className="cctv-recovery-card">

            <div className="cctv-card-icon">
              <FaTools />
            </div>

            <h2>Our Recovery Process</h2>

            <ol>

              <li>
                <span>01</span>
                Device Inspection
              </li>

              <li>
                <span>02</span>
                Media Analysis
              </li>

              <li>
                <span>03</span>
                Video Recovery
              </li>

              <li>
                <span>04</span>
                Footage Verification
              </li>

              <li>
                <span>05</span>
                Secure Delivery
              </li>

            </ol>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="cctv-recovery-security">

        <div className="cctv-security-container">

          <div className="cctv-security-icon">
            <FaShieldAlt />
          </div>

          <div className="cctv-security-content">

            <span>SECURE & CONFIDENTIAL</span>

            <h2>
              Professional CCTV Footage Recovery
            </h2>

            <p>
              We recover surveillance footage safely and confidentially
              using professional recovery techniques while protecting
              the integrity of your important video data.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cctv-recovery-cta">

        <div className="cctv-cta-content">

          <span>NEED CCTV DATA RECOVERY?</span>

          <h2>
            Recover Your Important
            <strong> CCTV Footage</strong>
          </h2>

          <p>
            Don't lose important surveillance recordings.
            Contact our recovery specialists for a professional
            device assessment.
          </p>

          <Link
            to="/contact"
            className="cctv-recovery-btn"
          >
            Request Recovery
            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
   <Footer/>
    </>
  );
};

export default CCTVRecovery;