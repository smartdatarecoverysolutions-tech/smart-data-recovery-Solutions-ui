import React from "react";
import {
  FaTools,
  FaCheckCircle,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/deviceDiagnosis.css";

import Navbar from "../../customer_website/components/Navbar";
import Footer from "../../customer_website/components/Footer";

function DeviceDiagnosis() {
  return (
    <>
    <Navbar/>
    <div className="device-diagnosis-page">

      {/* ==============================
          DEVICE DIAGNOSIS HERO
      =============================== */}

      <section className="device-diagnosis-hero">

        <div className="device-diagnosis-hero-content">

          <div className="device-diagnosis-icon">
            <FaTools />
          </div>

          <h1>Device Diagnosis</h1>

          <p>
            Before starting any recovery process, we perform a complete
            diagnosis of your storage device to identify the cause of data
            loss and determine the safest and most effective recovery method.
          </p>

        </div>

      </section>


      {/* ==============================
          DEVICE DIAGNOSIS CONTENT
      =============================== */}

      <section className="device-diagnosis-content">

        <div className="device-diagnosis-grid">

          {/* CARD 1 */}

          <div className="device-diagnosis-box">

            <div className="device-diagnosis-box-icon">
              <FaCheckCircle />
            </div>

            <h2>Our Diagnosis Includes</h2>

            <ul>
              <li>
                <FaCheckCircle />
                Physical Health Check
              </li>

              <li>
                <FaCheckCircle />
                Logical Error Analysis
              </li>

              <li>
                <FaCheckCircle />
                File System Examination
              </li>

              <li>
                <FaCheckCircle />
                Bad Sector Detection
              </li>

              <li>
                <FaCheckCircle />
                Firmware Assessment
              </li>

              <li>
                <FaCheckCircle />
                Recovery Possibility Report
              </li>
            </ul>

          </div>


          {/* CARD 2 */}

          <div className="device-diagnosis-box">

            <div className="device-diagnosis-box-icon">
              <FaSearch />
            </div>

            <h2>Supported Devices</h2>

            <p>
              Hard Disk Drives (HDD), Solid State Drives (SSD),
              External Hard Drives, USB Flash Drives, Memory Cards,
              Mobile Phones, RAID Arrays, NAS Storage, DVR/NVR Systems,
              CCTV Storage Devices, and Laptops.
            </p>

            <h3>Diagnosis Process</h3>

            <p>
              Our engineers inspect the device using professional diagnostic
              tools, evaluate its condition, estimate the recovery success
              rate, and provide a transparent recovery plan before any work
              begins.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="device-diagnosis-box">

            <div className="device-diagnosis-box-icon">
              <FaShieldAlt />
            </div>

            <h2>Why Choose Our Diagnosis Service?</h2>

            <ul>

              <li>
                <FaSearch />
                Advanced Diagnostic Equipment
              </li>

              <li>
                <FaShieldAlt />
                Safe & Non-Destructive Testing
              </li>

              <li>
                <FaCheckCircle />
                Experienced Recovery Engineers
              </li>

              <li>
                <FaCheckCircle />
                Honest Recovery Assessment
              </li>

              <li>
                <FaCheckCircle />
                Fast Turnaround Time
              </li>

            </ul>

          </div>

        </div>

      </section>

    </div>
<Footer/>

    </>
  );
}

export default DeviceDiagnosis;