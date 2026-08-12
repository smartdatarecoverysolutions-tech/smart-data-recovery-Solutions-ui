import React from "react";

import "../../assets/css/customer_webiste/contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";


import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="contact-page">

      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow"></div>

        <div className="contact-hero-content">

          <span className="contact-label">
            SMART DATA RECOVERY
          </span>

          <h1>
            Contact <strong>Us</strong>
          </h1>

          <p>
            We're here to recover your valuable data quickly,
            securely and professionally.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-info-section">

        <div className="contact-info">

          {/* Phone */}

          <a
            href="tel:+919866816611"
            className="info-card"
          >

            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <span className="info-label">
              CALL US
            </span>

            <h3>
              +91 9866816611
            </h3>

            <p>
              Speak directly with our recovery team.
            </p>

          </a>


          {/* Email */}

          <a
            href="mailto:smartdatarecoverysolutions@gmail.com"
            className="info-card"
          >

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <span className="info-label">
              EMAIL US
            </span>

            <h3 className="email-text">
              smartdatarecoverysolutions@gmail.com
            </h3>

            <p>
              Send us your recovery requirements.
            </p>

          </a>


          {/* Location */}

          <div className="info-card">

            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <span className="info-label">
              LOCATION
            </span>

            <h3>
              Khammam
            </h3>

            <p>
              Telangana, India
            </p>

          </div>


          {/* Working Hours */}

          <div className="info-card">

            <div className="info-icon">
              <FaClock />
            </div>

            <span className="info-label">
              WORKING HOURS
            </span>

            <h3>
              Mon - Sat
            </h3>

            <p>
              9:00 AM - 9:00 PM
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="contact-main">

        <div className="contact-main-container">


          {/* LEFT SIDE */}

          <div className="contact-details">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's Recover Your
              <strong> Valuable Data.</strong>
            </h2>

            <p className="contact-description">
              Lost important files, photos, business documents or
              CCTV recordings? Our recovery professionals can
              inspect your storage device and guide you through
              the safest recovery process.
            </p>


            <div className="contact-points">

              <div className="contact-point">

                <span className="point-icon">
                  ✓
                </span>

                <div>
                  <h4>
                    Free Device Inspection
                  </h4>

                  <p>
                    Get your device professionally diagnosed.
                  </p>
                </div>

              </div>


              <div className="contact-point">

                <span className="point-icon">
                  ✓
                </span>

                <div>
                  <h4>
                    Confidential Recovery
                  </h4>

                  <p>
                    Your personal and business data remains private.
                  </p>
                </div>

              </div>


              <div className="contact-point">

                <span className="point-icon">
                  ✓
                </span>

                <div>
                  <h4>
                    Professional Engineers
                  </h4>

                  <p>
                    Advanced recovery methods for different devices.
                  </p>
                </div>

              </div>


              <div className="contact-point">

                <span className="point-icon">
                  ✓
                </span>

                <div>
                  <h4>
                    Quick Response
                  </h4>

                  <p>
                    Contact our team and receive quick assistance.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="contact-action-card">

            <div className="action-card-glow"></div>

            <span>
              NEED HELP?
            </span>

            <h3>
              Talk to Our
              <strong> Recovery Experts</strong>
            </h3>

            <p>
              Tell us about your storage device and recovery
              requirement. Our team will guide you with the next
              steps.
            </p>


            <div className="action-buttons">

              <a
                href="tel:+919866816611"
                className="action-btn call-btn"
              >
                <FaPhoneAlt />
                Call Now
              </a>


              <a
                href="https://wa.me/919866816611?text=Hello%20Smart%20Data%20Recovery,%20I%20need%20help%20with%20data%20recovery."
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn whatsapp-btn"
              >
                <FaWhatsapp />
                WhatsApp
              </a>


              <a
                href="mailto:smartdatarecoverysolutions@gmail.com"
                className="action-btn email-btn"
              >
                <FaEnvelope />
                Email Us
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="contact-map-section">

        <div className="map-container">

          <div className="map-heading">

            <span>
              OUR LOCATION
            </span>

            <h2>
              Visit <strong>Smart Data Recovery</strong>
            </h2>

            <p>
              Khammam, Telangana, India
            </p>

          </div>


          <div className="map-box">

            <iframe
              title="Smart Data Recovery Location"
              src="https://www.google.com/maps?q=Khammam,Telangana,India&output=embed"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="cta-glow"></div>

        <div className="contact-cta-content">

          <span>
            DATA RECOVERY SUPPORT
          </span>

          <h2>
            Lost Your <strong>Important Data?</strong>
          </h2>

          <p>
            Contact our recovery experts today and get professional
            guidance for your HDD, SSD, RAID, USB, Memory Card,
            Mobile or CCTV recovery requirement.
          </p>


          <a
            href="https://wa.me/919866816611?text=Hello%20Smart%20Data%20Recovery,%20I%20need%20help%20with%20data%20recovery."
            target="_blank"
            rel="noopener noreferrer"
            className="recover-btn"
          >

            <FaWhatsapp />

            WhatsApp Our Experts

            <span>
              →
            </span>

          </a>

        </div>

      </section>

    </div>

    <Footer/>
    </>
  );
}

export default Contact;