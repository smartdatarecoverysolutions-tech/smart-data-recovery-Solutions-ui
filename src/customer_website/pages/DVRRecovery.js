import React from "react";

import {
  FaVideo,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/DVRRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function DVRRecovery() {
  return (
    <>
    <Navbar/>
    <section className="dvr-recovery-page">

      {/* =========================================
          DVR / NVR HERO
      ========================================= */}

      <div className="dvr-recovery-header">

        <div className="dvr-recovery-icon">
          <FaVideo />
        </div>

        <span className="dvr-recovery-label">
          CCTV • DVR • NVR DATA RECOVERY
        </span>

        <h1>
          DVR &amp; NVR <strong>Data Recovery</strong>
        </h1>

        <p>
          We specialize in recovering surveillance footage from DVR and NVR
          systems. Whether your recordings were accidentally deleted,
          formatted, corrupted, or lost due to hardware failure, our experts
          use advanced recovery techniques to restore valuable CCTV footage.
        </p>

      </div>


      {/* =========================================
          RECOVERY CONTENT
      ========================================= */}

      <div className="dvr-recovery-content">


        {/* WHAT WE RECOVER */}

        <div className="dvr-recovery-box">

          <div className="dvr-recovery-box-number">
            01
          </div>

          <div className="dvr-recovery-box-icon">
            <FaCheckCircle />
          </div>

          <h2>
            What We Recover
          </h2>

          <ul>

            <li>
              <FaCheckCircle />
              <span>Deleted CCTV Recordings</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Formatted DVR Hard Drives</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Corrupted Video Files</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Accidentally Overwritten Data*</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Damaged DVR / NVR Storage</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Surveillance Backup Files</span>
            </li>

          </ul>

          <small>
            *Recovery depends on the extent of overwritten data.
          </small>

        </div>


        {/* SUPPORTED SYSTEMS */}

        <div className="dvr-recovery-box">

          <div className="dvr-recovery-box-number">
            02
          </div>

          <div className="dvr-recovery-box-icon">
            <FaVideo />
          </div>

          <h2>
            Supported DVR &amp; NVR Brands
          </h2>

          <p>
            Hikvision, CP Plus, Dahua, Honeywell, Bosch,
            Panasonic, Samsung, Uniview, TVT, Secureye,
            and all major DVR/NVR manufacturers.
          </p>

          <h3>
            Supported Storage
          </h3>

          <p>
            Internal Hard Drives, SSDs, External Storage,
            NAS Devices, USB Backup Drives, and SD Cards.
          </p>

        </div>


        {/* WHY CHOOSE US */}

        <div className="dvr-recovery-box">

          <div className="dvr-recovery-box-number">
            03
          </div>

          <div className="dvr-recovery-box-icon">
            <FaShieldAlt />
          </div>

          <h2>
            Why Choose Our DVR Recovery?
          </h2>

          <ul>

            <li>
              <FaTools />
              <span>Advanced Video Recovery Tools</span>
            </li>

            <li>
              <FaShieldAlt />
              <span>Confidential Evidence Handling</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>High Recovery Success Rate</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Fast Diagnosis &amp; Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Professional Technical Support</span>
            </li>

          </ul>

        </div>

      </div>


      {/* =========================================
          CTA
      ========================================= */}

      <div className="dvr-recovery-cta">

        <div>

          <span>
            CCTV FOOTAGE RECOVERY
          </span>

          <h2>
            Lost Important CCTV Footage?
            <strong> We Can Help.</strong>
          </h2>

          <p>
            Contact Smart Data Recovery Solutions for professional
            DVR and NVR diagnosis and secure CCTV footage recovery.
          </p>

        </div>

        <a href="/contact">
          Get Professional Help
          <span>→</span>
        </a>

      </div>

    </section>
  <Footer/>

    </>
  );
}

export default DVRRecovery;