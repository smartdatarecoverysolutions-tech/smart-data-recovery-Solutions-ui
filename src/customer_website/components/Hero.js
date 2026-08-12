import React from "react";
import "../../assets/css/customer_webiste/hero.css";

import {
  FaHdd,
  FaServer,
  FaMobileAlt,
  FaShieldAlt
} from "react-icons/fa";

import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <h1>
            Recover Lost Data
            <br />
            Safely & Professionally
          </h1>

          <p>
            We recover deleted, formatted and damaged data from Hard Drives,
            SSDs, RAID Servers, Mobile Phones, CCTV DVRs and USB devices
            with industry-leading recovery technology.
          </p>

          <div className="hero-services">

            <div className="hero-service">
              <FaHdd />
              <span>HDD Recovery</span>
            </div>

            <div className="hero-service">
              <FaServer />
              <span>RAID Recovery</span>
            </div>

            <div className="hero-service">
              <FaMobileAlt />
              <span>Mobile Recovery</span>
            </div>

            <div className="hero-service">
              <FaShieldAlt />
              <span>Secure Recovery</span>
            </div>

          </div>

          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">
              Free Diagnosis
            </a>

            <a href="tel:+919866816611" className="btn-secondary">
              Call Now
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src={heroImage} alt="Data Recovery" />
        </div>

      </div>
    </section>
  );
}

export default Hero;