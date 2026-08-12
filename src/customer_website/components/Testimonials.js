import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "../../assets/css/customer_webiste/testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Raksha",
      location: "Khammam",
      review:
        "My hard disk crashed unexpectedly. Smart Data Recovery recovered all my important office files within two days. Highly recommended!",
    },

    {
      name: "Venu",
      location: "Khammam",
      review:
        "Excellent customer service and professional engineers. They recovered my family photos from a damaged memory card.",
    },

    {
      name: "Naresh",
      location: "Kodad",
      review:
        "I lost my CCTV footage due to DVR corruption. Their team successfully recovered all the recordings. Great service!",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="testimonials-heading">

          <span>TESTIMONIALS</span>

          <h2>
            What Our{" "}
            <strong>Clients Say</strong>
          </h2>

          <p>
            Thousands of customers trust Smart Data Recovery
            for safe, secure, and professional data recovery services.
          </p>

        </div>


        {/* =========================================
            TESTIMONIAL GRID
        ========================================= */}

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              {/* Quote Icon */}

              <div className="quote-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>


              {/* Review */}

              <p className="review">
                {item.review}
              </p>


              {/* Stars */}

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>


              {/* Customer */}

              <h3>
                {item.name}
              </h3>


              {/* Location */}

              <span>
                {item.location}
              </span>


              {/* Card Number */}

              <div className="testimonial-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;