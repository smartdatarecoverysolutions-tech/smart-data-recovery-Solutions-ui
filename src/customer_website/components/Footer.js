import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,  
  FaInstagram,  
  FaYoutube,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../../assets/css/customer_webiste/footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =================================================
          FOOTER MAIN
      ================================================= */}

      <div className="footer-container">


        {/* =================================================
            COMPANY
        ================================================= */}

        <div className="footer-col footer-company">

          <div className="footer-logo">

            <div className="logo-circle">
              SDRS
            </div>

            <div className="logo-text">

              <h2>
                Smart Data Recovery
              </h2>

              <span>
                Solutions
              </span>

            </div>

          </div>


          <p className="footer-description">
            Smart Data Recovery Solutions provides professional,
            secure and confidential data recovery services for
            Hard Drives, SSDs, RAID Servers, Mobile Phones,
            USB Drives, Memory Cards and CCTV DVRs.
          </p>


          {/* Social Media */}

          <div className="social-icons">

               <a
                          href="https://wa.me/919866816611?text=Hello%20Smart%20Data%20Recovery%2C%20I%20need%20help%20with%20data%20recovery."
                         
                            aria-label="Instagram"
                        >
                          <FaWhatsapp />
                          
                        </a>

         <a
  href="https://www.instagram.com/smartdatarecoverysolutions/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <FaInstagram />
</a>

    <a
  href="https://www.youtube.com/@smartdatarecoverysolutions"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
>
  <FaYoutube />
</a>

            

           

          </div>

        </div>


        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <div className="footer-col">

          <h3>
            Quick Links
          </h3>

          <div className="footer-title-line"></div>

          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/services">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="footer-col">

          <h3>
            Services
          </h3>

          <div className="footer-title-line"></div>

          <ul>

          <li>
  <Link
    to="/hdd-recovery"
    onClick={() => window.scrollTo(0, 0)}
  >
    Hard Disk Recovery
  </Link>
</li>

            <li>
              <Link to="/ssd-recovery"
               onClick={() => window.scrollTo(0, 0)}
               >
                SSD Recovery
              </Link>
            </li>

            <li>
              <Link to="/raid-recovery"
              onClick={() => window.scrollTo(0, 0)}
               >
                RAID Recovery
              </Link>
            </li>

            <li>
              <Link to="/pen-drive-recovery"
              onClick={() => window.scrollTo(0, 0)}
               >
                USB Recovery
              </Link>
            </li>

            <li>
              <Link to="/mobile-recovery"
              onClick={() => window.scrollTo(0, 0)}
               >
                Mobile Recovery
              </Link>
            </li>

            <li>
              <Link to="/cctv-recovery"
              onClick={() => window.scrollTo(0, 0)}
               >
                CCTV Recovery
              </Link>
            </li>

          </ul>

        </div>


        {/* =================================================
            CONTACT
        ================================================= */}

        <div className="footer-col">

          <h3>
            Contact Us
          </h3>

          <div className="footer-title-line"></div>

          <div className="footer-contact">

            {/* Phone */}

            <a
              href="tel:+919866816611"
              className="footer-contact-item"
            >
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <span>
                +91 9866816611
              </span>
            </a>


            {/* Email */}

            <a
              href="mailto:smartdatarecoverysolutions@gmail.com"
              className="footer-contact-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <span>
                smartdatarecoverysolutions@gmail.com
              </span>
            </a>


            {/* Location */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <span>
                Khammam, Telangana, India
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          FOOTER BOTTOM
      ================================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()}{" "}
            <strong>
              Smart Data Recovery Solutions
            </strong>
            . All Rights Reserved.
          </p>

          <p className="footer-tagline">
            Professional • Secure • Confidential
          </p>

        </div>

      </div>


      {/* =================================================
          SCROLL TO TOP
      ================================================= */}

      <button
        className="scroll-top"
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;
