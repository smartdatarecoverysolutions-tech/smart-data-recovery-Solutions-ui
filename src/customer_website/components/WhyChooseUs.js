import React from "react";

import {
  FaUserShield,
  FaLock,
  FaClock,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserShield />,
      title: "1+ Years Experience",
      description:
        "Experienced professionals with expertise in recovering data from all types of storage devices.",
    },

    {
      icon: <FaAward />,
      title: "98% Success Rate",
      description:
        "Advanced recovery techniques help us achieve the highest possible recovery results.",
    },

    {
      icon: <FaLock />,
      title: "100% Secure Recovery",
      description:
        "Your personal and business data remains confidential throughout the entire recovery process.",
    },

    {
      icon: <FaClock />,
      title: "Fast Turnaround",
      description:
        "Quick diagnosis and efficient recovery solutions designed to minimize your downtime.",
    },

    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Our support team is available to assist you with your data recovery requirements.",
    },
  ];

  return (
    <section className="why-choose">

      <div className="why-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="why-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Why Smart Data{" "}
            <strong>Recovery?</strong>
          </h2>

          <p>
            We combine advanced technology, experienced engineers,
            and secure recovery processes to recover your valuable data
            with reliability and professionalism.
          </p>

        </div>


        {/* =========================================
            FEATURES GRID
        ========================================= */}

        <div className="why-grid">

          {features.map((feature, index) => (
            <div
              className="why-card"
              key={index}
            >

              {/* Card Number */}

              <div className="why-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Icon */}

              <div className="why-icon">
                {feature.icon}
              </div>


              {/* Title */}

              <h3>
                {feature.title}
              </h3>


              {/* Description */}

              <p>
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;