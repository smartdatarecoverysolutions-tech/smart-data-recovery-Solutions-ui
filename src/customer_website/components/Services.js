import React from "react";

import {
  FaHdd,
  FaDatabase,
  FaUsb,
  FaMemory,
  FaMobileAlt,
  FaServer,
  FaVideo,
  FaTools,
  FaCamera,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/services.css";

function Services() {
  const services = [
    {
      icon: <FaHdd />,
      title: "HDD Recovery",
      description:
        "Recover deleted, formatted and damaged hard disk data.",
      link: "/hdd-recovery",
    },

    {
      icon: <FaDatabase />,
      title: "SSD Recovery",
      description:
        "Professional SATA & NVMe SSD recovery solutions.",
      link: "/ssd-recovery",
    },

    {
      icon: <FaUsb />,
      title: "Pen Drive Recovery",
      description:
        "Recover deleted files from USB flash drives.",
      link: "/pen-drive-recovery",
    },

    {
      icon: <FaMemory />,
      title: "Memory Card Recovery",
      description:
        "Recover photos, videos and documents from SD cards.",
      link: "/memory-card-recovery",
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile Recovery",
      description:
        "Recover data from Android & iPhone devices.",
      link: "/mobile-recovery",
    },

    {
      icon: <FaServer />,
      title: "RAID Recovery",
      description:
        "Enterprise RAID server data recovery services.",
      link: "/raid-recovery",
    },

    {
      icon: <FaVideo />,
      title: "DVR Recovery",
      description:
        "Recover surveillance footage from DVR & NVR systems.",
      link: "/dvr-cctv-recovery",
    },

    {
      icon: <FaTools />,
      title: "Device Diagnosis",
      description:
        "Complete diagnosis before starting recovery.",
      link: "/device-diagnosis",
    },

    {
      icon: <FaCamera />,
      title: "CCTV Recovery",
      description:
        "Recover deleted CCTV video recordings securely.",
      link: "/cctv-recovery",
    },
  ];

  return (
    <section className="services">

      <div className="services-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="services-heading">

          <span>OUR SERVICES</span>

          <h2>
            Professional Data Recovery{" "}
            <strong>Solutions</strong>
          </h2>

          <p>
            We provide advanced recovery services for hard drives,
            SSDs, mobile devices, RAID systems and other storage
            devices using professional recovery methods.
          </p>

        </div>


        {/* =========================================
            SERVICES GRID
        ========================================= */}

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
            >

              {/* Number */}

              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Icon */}

              <div className="service-icon">
                {service.icon}
              </div>


              {/* Title */}

              <h3>
                {service.title}
              </h3>


              {/* Description */}

              <p>
                {service.description}
              </p>


              {/* Learn More */}

              <a
                href={service.link}
                className="service-link"
              >
                Learn More

                <span>→</span>
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;