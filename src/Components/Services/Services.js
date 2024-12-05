import React from "react";
import "./Services.css";
import ServiceData from "./ServiceData";

const Services = () => {
  return (
    <div className="Amenities">
      <div className="Amenities-main">
        <h4>Services</h4>
        <h2>We Shape the Perfect Solutions</h2>
        <p></p>
        <div className="Amenities-box">
          {ServiceData.map((item, index) => (
            <div
              className="Amenities-card"
              style={{ backgroundColor: `${item.color}` }}
            >
              <p>{item.cover}</p>
              <h5>{item.title}</h5>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
