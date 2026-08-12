import React from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

import "../../assets/css/customer_webiste/cta.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Decorative Number */}

        <div className="cta-number">
          01
        </div>


        {/* Main Content */}

        <div className="cta-content">

          {/* Small Heading */}

          <span className="cta-label">
            GET PROFESSIONAL HELP
          </span>


          {/* Main Heading */}

          <h2>
            Lost Your{" "}
            <strong>Important Data?</strong>
          </h2>


          {/* Description */}

          <p>
            Our certified recovery engineers are ready to recover
            data from Hard Drives, SSDs, RAID Servers, USB Drives,
            Memory Cards, Mobile Phones and CCTV DVRs.
          </p>


          {/* Buttons */}

          <div className="cta-buttons">

            {/* Consultation */}

            <a
              href="/contact"
              className="cta-btn primary"
            >
              <FaArrowRight />
              <span>Free Consultation</span>
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/919866816611?text=Hello%20Smart%20Data%20Recovery%2C%20I%20need%20help%20with%20data%20recovery."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>


            {/* Email */}

            <a
              href="mailto:smartdatarecoverysolutions@gmail.com"
              className="cta-btn outline"
            >
              <FaEnvelope />
              <span>Email Us</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;