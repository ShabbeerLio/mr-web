import React from "react";
import "./Solution.css";
import { FaArrowRightLong } from "react-icons/fa6";
import bnimg from "../../Assets/Experience/value.jpg";

const Solution = () => {
  return (
    <div className="Solution">
      <div className="Solution-main">
        <h4>Experience us</h4>
        <h2>Tailored Solutions, Proven Results,and Exceptional Service</h2>
        <div className="Solution-box">
          <div className="Solution-left">
            <div className="solution-left-card">
              <div className="solution-card-image">
                <img src={bnimg} alt="" />
              </div>
              <div className="solution-card-left-details">
                <h5>Our Value</h5>
                <h3>
                  Explore Our Unique Value Proposition & How We Drive Business
                  Growth
                </h3>
                <p>
                  We pride ourselves on delivering a value proposition that goes
                  beyond expectations. Our approach is centered on understanding
                  your business inside
                </p>
                <div className="solution-left-btn">
                  <p>
                    Learn More <FaArrowRightLong />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Solution-right">
            <div className="solution-right-card">
              <div className="solution-card-right-details">
                <div className="solution-right-btn">
                  <h5>Our Misson</h5>
                  <p>
                    <FaArrowRightLong />
                  </p>
                </div>
                <h3>
                  We strive to be more than just a service provider; we aim to
                  be trusted SEOC
                </h3>
                <p>
                  We pride ourselves on delivering a value proposition that goes
                  beyond expectations. Our approach is centered on understanding
                  your business inside
                </p>
              </div>
            </div>
            <div className="solution-right-card">
              <div className="solution-card-right-details">
                <div className="solution-right-btn">
                  <h5>Our Vision</h5>
                  <p>
                    <FaArrowRightLong />
                  </p>
                </div>
                <h3>
                  We strive to be more than just a service provider; we aim to
                  be trusted SEOC
                </h3>
                <p>
                  We pride ourselves on delivering a value proposition that goes
                  beyond expectations. Our approach is centered on understanding
                  your business inside
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
