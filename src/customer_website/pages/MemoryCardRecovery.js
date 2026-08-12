import React from "react";
import {
  FaMemory,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/MemoryCardRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function MemoryCardRecovery() {
  return (
    <>
    <Navbar/>
    <section className="memorycard-recovery-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="memorycard-recovery-header">

        <div className="memorycard-recovery-icon">
          <FaMemory />
        </div>

        <span className="memorycard-recovery-label">
          MEMORY CARD DATA RECOVERY
        </span>

        <h1 className="memorycard-recovery-title">
          Memory Card Data <span>Recovery</span>
        </h1>

        <p className="memorycard-recovery-description">
          We provide professional memory card recovery services for deleted,
          formatted, corrupted, and damaged SD, microSD, CF, and other memory
          cards. Recover your valuable photos, videos, documents, and files
          safely with our advanced recovery solutions.
        </p>

      </div>


      {/* =====================================================
          CONTENT CARDS
      ===================================================== */}

      <div className="memorycard-recovery-content">


        {/* WHAT WE RECOVER */}

        <div className="memorycard-recovery-box">

          <h2>
            What We Recover
          </h2>

          <ul>

            <li>
              <FaCheckCircle />
              Deleted Photos & Videos
            </li>

            <li>
              <FaCheckCircle />
              Formatted Memory Cards
            </li>

            <li>
              <FaCheckCircle />
              Corrupted File Systems
            </li>

            <li>
              <FaCheckCircle />
              RAW Memory Cards
            </li>

            <li>
              <FaCheckCircle />
              Camera & Mobile Card Data
            </li>

            <li>
              <FaCheckCircle />
              Lost Documents & Audio Files
            </li>

          </ul>

        </div>


        {/* SUPPORTED CARDS */}

        <div className="memorycard-recovery-box">

          <h2>
            Supported Memory Cards
          </h2>

          <p>
            SD Card, microSD Card, SDHC, SDXC, CompactFlash (CF),
            CFast, Memory Stick, xD Card, and MMC Cards.
          </p>

          <h3>
            Supported Brands
          </h3>

          <p>
            SanDisk, Samsung, Kingston, Sony, Lexar, Transcend,
            Toshiba, ADATA, PNY, and all major memory card brands.
          </p>

        </div>


        {/* WHY CHOOSE US */}

        <div className="memorycard-recovery-box">

          <h2>
            Why Choose Our Service?
          </h2>

          <ul>

            <li>
              <FaTools />
              Advanced Recovery Technology
            </li>

            <li>
              <FaShieldAlt />
              Safe & Confidential Recovery
            </li>

            <li>
              <FaCheckCircle />
              Fast Device Analysis
            </li>

            <li>
              <FaCheckCircle />
              High Recovery Success Rate
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

export default MemoryCardRecovery;