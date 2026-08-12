import React from "react";

import {
  FaDatabase,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/SSDRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function SSDRecovery() {
  return (
    <>
    <Navbar/>
    <section className="ssd-recovery-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="ssd-recovery-header">

        <div className="ssd-recovery-icon">
          <FaDatabase />
        </div>

        <span className="ssd-recovery-label">
          PROFESSIONAL DATA RECOVERY
        </span>

        <h1 className="ssd-recovery-title">
          SSD Data <span>Recovery</span>
        </h1>

        <p className="ssd-recovery-description">
          Professional SSD data recovery services for SATA, NVMe,
          and M.2 solid-state drives. We recover deleted, formatted,
          corrupted, and inaccessible SSD data using advanced
          recovery technology.
        </p>

        <div className="ssd-recovery-divider"></div>

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="ssd-recovery-content">

        {/* =================================================
            WHAT WE RECOVER
        ================================================= */}

        <div className="ssd-recovery-box">

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
              Formatted SSD Drives
            </li>

            <li>
              <FaCheckCircle />
              Corrupted File Systems
            </li>

            <li>
              <FaCheckCircle />
              RAW SSD Partitions
            </li>

            <li>
              <FaCheckCircle />
              Unrecognized SSD Drives
            </li>

            <li>
              <FaCheckCircle />
              Accidentally Deleted Partitions
            </li>

          </ul>

        </div>


        {/* =================================================
            SUPPORTED SSD TYPES
        ================================================= */}

        <div className="ssd-recovery-box">

          <h2>
            Supported SSD Types
          </h2>

          <p className="ssd-recovery-brands">
            SATA SSD, NVMe SSD, M.2 SSD, PCIe SSD, mSATA SSD,
            and External Solid State Drives.
          </p>


          <h3>
            Supported Brands
          </h3>

          <p className="ssd-recovery-brands">
            Samsung, Crucial, Kingston, WD, Seagate, SanDisk,
            Intel, ADATA, Corsair, Transcend and all major
            SSD brands.
          </p>

        </div>


        {/* =================================================
            WHY CHOOSE US
        ================================================= */}

        <div className="ssd-recovery-box">

          <h2>
            Why Choose Our SSD Recovery?
          </h2>

          <ul>

            <li>
              <FaTools />
              Advanced SSD Recovery Tools
            </li>

            <li>
              <FaShieldAlt />
              Secure & Confidential Recovery
            </li>

            <li>
              <FaCheckCircle />
              Expert Recovery Engineers
            </li>

            <li>
              <FaCheckCircle />
              Fast Diagnosis & Evaluation
            </li>

            <li>
              <FaCheckCircle />
              High Success Recovery Rate
            </li>

          </ul>

        </div>

      </div>

    </section>
    <Footer/>
    
    </>
  );
}

export default SSDRecovery;