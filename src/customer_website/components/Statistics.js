import React from "react";

import {
  FaUserShield,
  FaHdd,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/statistics.css";

function Statistics() {
  const stats = [
    {
      icon: <FaUserShield />,
      number: "1+",
      title: "Years Experience",
    },
    {
      icon: <FaHdd />,
      number: "100+",
      title: "Devices Recovered",
    },
    {
      icon: <FaCheckCircle />,
      number: "98%",
      title: "Success Rate",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="statistics">

      <div className="statistics-container">

        {/* Section Heading */}
        <div className="statistics-heading">

          <span>OUR EXPERIENCE</span>

          <h2>
            Trusted Data Recovery{" "}
            <strong>Experts</strong>
          </h2>

          <p>
            Professional data recovery solutions backed by
            experience, advanced technology and secure recovery
            processes.
          </p>

        </div>

        {/* Statistics Grid */}
        <div className="statistics-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              {/* Small Number */}
              <div className="stat-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="stat-icon">
                {item.icon}
              </div>

              {/* Value */}
              <h3>{item.number}</h3>

              {/* Title */}
              <p>{item.title}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;