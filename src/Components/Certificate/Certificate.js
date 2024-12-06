import React from "react";
import "./Certificate.css";
import img1 from "../../Assets/Certificate/ad1.jpg";
import img2 from "../../Assets/Certificate/ad2.jpg";
import img3 from "../../Assets/Certificate/ad3.jpg";

const Certificate = () => {
  return (
    <div className="Certificate">
      <div className="Certificate-main">
        <h4>Certificat</h4>
        <h2>Our Certifications</h2>
        <div className="Certificate-box">
          <div className="Certificate-card">
            <img src={img1} alt="" />
          </div>
          <div className="Certificate-card">
            <img src={img2} alt="" />
          </div>
          <div className="Certificate-card">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
