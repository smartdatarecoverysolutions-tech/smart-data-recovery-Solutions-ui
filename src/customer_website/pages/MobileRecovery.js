import React from "react";
import {
  FaMobileAlt,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/MobileRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function MobileRecovery() {
  return (
    <>
    <Navbar/>
    <section className="mobile-recovery-page">

      {/* =========================================
          MOBILE RECOVERY HEADER
      ========================================= */}

      <div className="mobile-recovery-header">

        <div className="mobile-recovery-icon">
          <FaMobileAlt />
        </div>

        <span className="mobile-recovery-label">
          MOBILE DATA RECOVERY
        </span>

        <h1>
          Mobile Data <strong>Recovery</strong>
        </h1>

        <p>
          We provide professional mobile data recovery services for Android
          and iPhone devices. Recover deleted photos, videos, contacts,
          messages, documents, and other important data from damaged,
          formatted, or inaccessible smartphones.
        </p>

      </div>


      {/* =========================================
          MOBILE RECOVERY CONTENT
      ========================================= */}

      <div className="mobile-recovery-content">


        {/* WHAT WE RECOVER */}

        <div className="mobile-recovery-box">

          <div className="mobile-recovery-box-line"></div>

          <h2>
            What We Recover
          </h2>

          <ul>

            <li>
              <FaCheckCircle />
              <span>Deleted Photos & Videos</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Contacts & Call History</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>SMS & WhatsApp Data</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Documents & PDFs</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Internal Storage Data</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Accidentally Deleted Files</span>
            </li>

          </ul>

        </div>


        {/* SUPPORTED DEVICES */}

        <div className="mobile-recovery-box">

          <div className="mobile-recovery-box-line"></div>

          <h2>
            Supported Devices
          </h2>

          <p>
            Android Smartphones, iPhones, Tablets, and other mobile devices
            with internal or external storage.
          </p>

          <h3>
            Supported Brands
          </h3>

          <p>
            Apple, Samsung, OnePlus, Xiaomi, Vivo, Oppo,
            Realme, Motorola, Nokia, Google Pixel, Huawei,
            and all major smartphone brands.
          </p>

        </div>


        {/* WHY CHOOSE US */}

        <div className="mobile-recovery-box">

          <div className="mobile-recovery-box-line"></div>

          <h2>
            Why Choose Our Service?
          </h2>

          <ul>

            <li>
              <FaTools />
              <span>Advanced Mobile Recovery Tools</span>
            </li>

            <li>
              <FaShieldAlt />
              <span>100% Secure & Confidential</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Experienced Recovery Experts</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Fast Diagnosis & Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>High Success Recovery Rate</span>
            </li>

          </ul>

        </div>

      </div>

    </section>
<Footer/>

    </>
  );
}

export default MobileRecovery;