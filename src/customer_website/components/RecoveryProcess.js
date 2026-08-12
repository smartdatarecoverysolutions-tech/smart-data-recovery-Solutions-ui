import React from "react";

import {
  FaLaptopMedical,
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/recoveryProcess.css";

function RecoveryProcess() {
  const process = [
    {
      icon: <FaLaptopMedical />,
      title: "Submit Device",
      description:
        "Bring your HDD, SSD, Mobile, RAID, DVR or any storage device to our recovery center.",
    },

    {
      icon: <FaSearch />,
      title: "Free Diagnosis",
      description:
        "Our experts inspect your device and determine the recovery possibilities at no cost.",
    },

    {
      icon: <FaTools />,
      title: "Data Recovery",
      description:
        "We use advanced recovery tools and professional techniques to recover your valuable data.",
    },

    {
      icon: <FaCheckCircle />,
      title: "Data Verification",
      description:
        "Recovered files are carefully verified to ensure they are complete and accessible.",
    },

    {
      icon: <FaTruck />,
      title: "Safe Delivery",
      description:
        "Your recovered data is securely transferred to a new storage device and delivered to you.",
    },
  ];

  return (
    <section className="process">

      <div className="process-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="process-heading">

          <span>RECOVERY PROCESS</span>

          <h2>
            How Our Recovery{" "}
            <strong>Process Works</strong>
          </h2>

          <p>
            We follow a secure and professional recovery process
            to ensure your valuable data is recovered safely,
            efficiently and confidentially.
          </p>

        </div>


        {/* =========================================
            PROCESS GRID
        ========================================= */}

        <div className="process-grid">

          {process.map((step, index) => (
            <div
              className="process-card"
              key={index}
            >

              {/* Step Number */}

              <div className="step-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Icon */}

              <div className="process-icon">
                {step.icon}
              </div>


              {/* Title */}

              <h3>
                {step.title}
              </h3>


              {/* Description */}

              <p>
                {step.description}
              </p>


              {/* Bottom Step Indicator */}

              <div className="step-line">
                <span></span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default RecoveryProcess;