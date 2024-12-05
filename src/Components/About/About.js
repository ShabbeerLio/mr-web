import React, { useEffect } from "react";
import "./About.css";
import Aboutimg from "../../Assets/About/about.jpg";
import Aboutim2 from "../../Assets/About/about2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

// import ScrollReveal from 'scrollreveal'

const About = () => {
  // useEffect(() => {
  //     const sr = ScrollReveal({
  //         origin: 'right',
  //         distance: '80px',
  //         duration: 2000,
  //         reset: true,
  //     });

  //     sr.reveal('.about-right', {})

  //     return () => sr.destroy();
  // }, []);
  // useEffect(() => {
  //     const sr = ScrollReveal({
  //         origin: 'left',
  //         distance: '80px',
  //         duration: 2000,
  //         reset: true,
  //     });

  //     sr.reveal('.about-left', {})

  //     return () => sr.destroy();
  // }, []);

  return (
    <div className="aboutUs">
      <div className="about-main">
        <div className="about-items">
          <div className="about-left">
            <h4>Welcome to Mr Web Technologies</h4>
            <h2>Why We're The Best Match For Your Business!!</h2>
            <h4>The professional approach to development.</h4>
            <p>
              We work hand-in-hand with our clients to develop digital solutions
              driven by the knowledge of their business and our interactive
              expertise. Our recommendations are always backed by data-driven
              insights and developed for a long-term growth strategy With a
              strong research.
            </p>
            <div className="about-btn">
                <p>About Us <FaArrowRightLong/></p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-image1">
              <img src={Aboutimg} alt="" />
            </div>
            <div className="about-right-image2">
              <img src={Aboutim2} alt="" />
            </div>
            <div className="exprence">
              <p>
                {" "}
                <span>13+</span>
                <br /> years <br /> Experence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
