import React from "react";

import {
  FaServer,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/RAIDRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function RAIDRecovery() {
  return (
    <>
    <Navbar/>
    <section className="raid-recovery-page">

      {/* =========================================
          RAID HERO / HEADER
      ========================================= */}

      <div className="raid-recovery-header">

        <div className="raid-recovery-icon">
          <FaServer />
        </div>

        <span className="raid-recovery-label">
          RAID DATA RECOVERY
        </span>

        <h1>
          RAID Data <strong>Recovery</strong>
        </h1>

        <p>
          We provide professional RAID data recovery services for businesses,
          enterprises, and data centers. Our specialists recover data from
          failed RAID arrays, NAS devices, and servers using advanced recovery
          technology while ensuring maximum data integrity.
        </p>

      </div>


      {/* =========================================
          RAID CONTENT
      ========================================= */}

      <div className="raid-recovery-content">


        {/* WHAT WE RECOVER */}

        <div className="raid-recovery-box">

          <div className="raid-recovery-box-number">
            01
          </div>

          <div className="raid-recovery-box-icon">
            <FaCheckCircle />
          </div>

          <h2>
            What We Recover
          </h2>

          <ul>

            <li>
              <FaCheckCircle />
              <span>RAID 0 Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>RAID 1 Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>RAID 5 Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>RAID 6 Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>RAID 10 Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>NAS &amp; Server Data Recovery</span>
            </li>

          </ul>

        </div>


        {/* SUPPORTED SYSTEMS */}

        <div className="raid-recovery-box">

          <div className="raid-recovery-box-number">
            02
          </div>

          <div className="raid-recovery-box-icon">
            <FaServer />
          </div>

          <h2>
            Supported Systems
          </h2>

          <p>
            Hardware RAID, Software RAID, NAS Storage, SAN Storage,
            Enterprise Servers, Windows Server, Linux Server, VMware,
            Synology, QNAP, Dell EMC, HP, IBM, Lenovo, and more.
          </p>

          <h3>
            Common RAID Failures
          </h3>

          <p>
            Multiple Drive Failure, RAID Controller Failure,
            Accidental RAID Rebuild, Corrupted RAID Configuration,
            Power Failure, File System Corruption, and Deleted Volumes.
          </p>

        </div>


        {/* WHY CHOOSE US */}

        <div className="raid-recovery-box">

          <div className="raid-recovery-box-number">
            03
          </div>

          <div className="raid-recovery-box-icon">
            <FaShieldAlt />
          </div>

          <h2>
            Why Choose Our RAID Recovery?
          </h2>

          <ul>

            <li>
              <FaTools />
              <span>Advanced RAID Reconstruction</span>
            </li>

            <li>
              <FaShieldAlt />
              <span>Secure &amp; Confidential Recovery</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Certified Recovery Engineers</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>Fast Emergency Services</span>
            </li>

            <li>
              <FaCheckCircle />
              <span>High Recovery Success Rate</span>
            </li>

          </ul>

        </div>

      </div>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <div className="raid-recovery-cta">

        <div>

          <span>
            NEED RAID RECOVERY?
          </span>

          <h2>
            Your Critical Data Deserves
            <strong> Expert Recovery</strong>
          </h2>

          <p>
            Contact Smart Data Recovery Solutions for a professional
            RAID diagnosis and secure recovery consultation.
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

export default RAIDRecovery;