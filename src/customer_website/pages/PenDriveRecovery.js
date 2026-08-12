import React from "react";
import {
  FaUsb,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/PenDriveRecovery.css";
import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function PenDriveRecovery() {
  return (
    <>
    <Navbar/>
    <section className="pendrive-recovery-page">

      {/* =========================
          HEADER
      ========================== */}

      <div className="pendrive-recovery-header">

        <div className="pendrive-recovery-icon-wrapper">
          <FaUsb className="pendrive-recovery-icon" />
        </div>

        <span className="pendrive-recovery-label">
          USB DATA RECOVERY
        </span>

        <h1>
          Pen Drive Data Recovery
        </h1>

        <p>
          We provide professional USB flash drive data recovery services
          for deleted, formatted, corrupted, and physically damaged
          pen drives. Our experts use advanced recovery tools to retrieve
          your valuable files safely and securely.
        </p>

      </div>


      {/* =========================
          CONTENT
      ========================== */}

      <div className="pendrive-recovery-content">

        {/* CARD 01 */}

        <div className="pendrive-recovery-box">

          <span className="pendrive-recovery-number">
            01
          </span>

          <h2>
            What We Recover
          </h2>

          <ul>

            <li>
              <FaCheckCircle />
              Deleted Files & Folders
            </li>

            <li>
              <FaCheckCircle />
              Formatted Pen Drives
            </li>

            <li>
              <FaCheckCircle />
              Corrupted USB Flash Drives
            </li>

            <li>
              <FaCheckCircle />
              RAW USB Drives
            </li>

            <li>
              <FaCheckCircle />
              Virus Affected Files
            </li>

            <li>
              <FaCheckCircle />
              Lost Documents, Photos & Videos
            </li>

          </ul>

        </div>


        {/* CARD 02 */}

        <div className="pendrive-recovery-box">

          <span className="pendrive-recovery-number">
            02
          </span>

          <h2>
            Supported USB Devices
          </h2>

          <p>
            USB 2.0, USB 3.0, USB Type-C Flash Drives,
            OTG Pen Drives, Encrypted USB Drives, and
            High-Speed Flash Storage Devices.
          </p>

          <h3>
            Supported Brands
          </h3>

          <p>
            SanDisk, Kingston, HP, Sony, Transcend, Samsung,
            Toshiba, ADATA, Lexar, PNY and all major USB
            drive brands.
          </p>

        </div>


        {/* CARD 03 */}

        <div className="pendrive-recovery-box">

          <span className="pendrive-recovery-number">
            03
          </span>

          <h2>
            Why Choose Our Service?
          </h2>

          <ul>

            <li>
              <FaTools />
              Professional Recovery Equipment
            </li>

            <li>
              <FaShieldAlt />
              100% Secure & Confidential
            </li>

            <li>
              <FaCheckCircle />
              Quick Device Diagnosis
            </li>

            <li>
              <FaCheckCircle />
              High Success Recovery Rate
            </li>

            <li>
              <FaCheckCircle />
              No Data - No Charge*
            </li>

          </ul>

        </div>

      </div>

    </section>

    <Footer/>
    </>
  );
}

export default PenDriveRecovery;