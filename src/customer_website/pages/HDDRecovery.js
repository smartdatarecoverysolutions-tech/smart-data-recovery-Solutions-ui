import React from "react";
import {
  FaHdd,
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/HDDRecovery.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function HDDRecovery() {
  return (
    <>
    <Navbar/>
    <section className="hdd-recovery-page">

      <div className="hdd-recovery-container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="hdd-recovery-header">

          <div className="hdd-recovery-icon">
            <FaHdd />
          </div>

          <h1>
            HDD Data Recovery
          </h1>

          <p>
            We recover lost, deleted, formatted, corrupted and
            physically damaged hard disk data using professional
            recovery techniques.
          </p>

        </div>


        {/* =========================
            CONTENT
        ========================== */}

        <div className="hdd-recovery-content">

          {/* WHAT WE RECOVER */}

          <div className="hdd-recovery-box">

            <h2>
              What We Recover
            </h2>

            <ul>

              <li>
                <FaCheckCircle />
                Deleted Files
              </li>

              <li>
                <FaCheckCircle />
                Formatted Hard Drives
              </li>

              <li>
                <FaCheckCircle />
                Corrupted Partitions
              </li>

              <li>
                <FaCheckCircle />
                RAW Drives
              </li>

              <li>
                <FaCheckCircle />
                Windows Not Booting
              </li>

              <li>
                <FaCheckCircle />
                External Hard Disk Recovery
              </li>

            </ul>

          </div>


          {/* SUPPORTED BRANDS */}

          <div className="hdd-recovery-box">

            <h2>
              Supported Brands
            </h2>

            <p>
              Seagate, Western Digital, Toshiba, Hitachi,
              Samsung, HGST, Dell, Lenovo, HP and all major
              HDD brands.
            </p>

          </div>


          {/* WHY CHOOSE US */}

          <div className="hdd-recovery-box">

            <h2>
              Why Choose Us?
            </h2>

            <ul>

              <li>
                <FaTools />
                Advanced Recovery Equipment
              </li>

              <li>
                <FaShieldAlt />
                100% Secure Data Privacy
              </li>

              <li>
                <FaCheckCircle />
                No Data - No Charge*
              </li>

              <li>
                <FaCheckCircle />
                Fast Diagnosis
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
    <Footer/>
    </>
  );
}

export default HDDRecovery;