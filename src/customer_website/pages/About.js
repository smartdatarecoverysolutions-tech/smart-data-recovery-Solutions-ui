import React from "react";
import { Link } from "react-router-dom";

import {
  FaAward,
  FaUserShield,
  FaClock,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/about.css";
import aboutImage from "../../assets/images/about-banner.jpeg";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function About() {
  return (
     <>
    <Navbar/>
    <div className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-banner">

        <div className="about-banner-glow"></div>
        <div className="about-banner-glow second"></div>

        <div className="about-banner-content">

          {/* LEFT CONTENT */}

          <div className="about-banner-text">

            <span className="about-label">
              SMART DATA RECOVERY
            </span>

            <h1>
              About Smart Data{" "}
              <strong>Recovery</strong>
            </h1>

            <p>
              Trusted professionals providing secure, reliable and
              advanced data recovery solutions for businesses and
              individuals.
            </p>

            <div className="about-buttons">

              <Link
                to="/contact"
                className="about-btn"
              >
                Contact Us
                <FaArrowRight />
              </Link>

              <Link
                to="/services"
                className="about-btn secondary-btn"
              >
                Our Services
              </Link>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="about-banner-image">

            <div className="image-glow"></div>

            <div className="image-frame">

              <img
                src={aboutImage}
                alt="About Smart Data Recovery"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-company">

        <div className="about-container">

          <div className="about-section-title">

            <span>WHO WE ARE</span>

            <h2>
              Professional Data Recovery{" "}
              <strong>Experts</strong>
            </h2>

            <p>
              Advanced technology. Professional expertise.
              Complete data security.
            </p>

          </div>


          <div className="about-company-box">

            <div className="about-company-line"></div>

            <p>
              Smart Data Recovery specializes in recovering lost,
              deleted, formatted and corrupted data from Hard Drives,
              SSDs, RAID Servers, Mobile Phones, Memory Cards,
              Pen Drives and CCTV DVRs.
            </p>

            <p>
              Our experienced engineers use advanced recovery
              technology and professional recovery techniques to
              maximize the possibility of successful data recovery.
              Throughout the entire process, your data remains
              completely secure, confidential and protected.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY US / FEATURES
      ===================================================== */}

      <section className="about-features">

        <div className="about-container">

          <div className="about-section-title">

            <span>OUR STRENGTH</span>

            <h2>
              Why Choose <strong>Smart Data Recovery?</strong>
            </h2>

            <p>
              Professional recovery services built around security,
              technology and customer trust.
            </p>

          </div>


          <div className="about-feature-grid">


            {/* CARD 01 */}

            <div className="about-feature-card">

              <div className="feature-number">
                01
              </div>

              <div className="feature-icon">
                <FaAward />
              </div>

              <h3>
                1+ Years Experience
              </h3>

              <p>
                Experienced professionals with expertise in
                handling different types of data recovery cases.
              </p>

            </div>


            {/* CARD 02 */}

            <div className="about-feature-card">

              <div className="feature-number">
                02
              </div>

              <div className="feature-icon">
                <FaDatabase />
              </div>

              <h3>
                30+ Recoveries
              </h3>

              <p>
                Successfully recovered data from a wide range
                of storage devices and digital systems.
              </p>

            </div>


            {/* CARD 03 */}

            <div className="about-feature-card">

              <div className="feature-number">
                03
              </div>

              <div className="feature-icon">
                <FaUserShield />
              </div>

              <h3>
                100% Secure
              </h3>

              <p>
                Your personal, business and confidential data
                is handled with complete privacy and security.
              </p>

            </div>


            {/* CARD 04 */}

            <div className="about-feature-card">

              <div className="feature-number">
                04
              </div>

              <div className="feature-icon">
                <FaClock />
              </div>

              <h3>
                24/7 Support
              </h3>

              <p>
                Quick assistance and continuous support whenever
                you need professional recovery guidance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="mission">

        <div className="mission-glow"></div>

        <div className="about-container">

          <div className="mission-box">

            <span>OUR MISSION</span>

            <h2>
              Recover Your Data.
              <strong> Restore Your Peace.</strong>
            </h2>

            <p>
              Our mission is to provide professional, secure,
              affordable and reliable data recovery solutions
              while maintaining complete customer satisfaction.
            </p>

          <Link
  to="/contact"
  className="mission-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  Get Professional Help
  <FaArrowRight />
</Link>

          </div>

        </div>

      </section>

    </div>
    <Footer/>
    </>
  );
}
 
export default About;