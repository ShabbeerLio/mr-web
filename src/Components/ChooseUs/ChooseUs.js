import React from "react";
import "./ChooseUs.css";
import ChooseData from "./ChooseData";
import Aboutimg from "../../Assets/Choose/choose1.png";
import Aboutim2 from "../../Assets/Choose/choose2.jpg";

const ChooseUs = () => {
  return (
    <div className="ChooseUs">
      <div className="ChooseUs-main">
        <div className="ChooseUs-box">
        <div className="ChooseUs-right">
            <div className="about-right-image1">
              <img src={Aboutimg} alt="" />
            </div>
            <div className="about-right-image2">
              <img src={Aboutim2} alt="" />
            </div>
          </div>
          <div className="ChooseUs-left">
            <h4>our benefits</h4>
            <h2>Why You ShouldChoose us.</h2>
            <p>
              Mr web technologies is a web development company in delhi with the
              solution of generating the maximum Return with powerfull digital
              marketing solutions and with experience of developing, designing
              and marketing businesses in different industries & online
              marketing services in delhi/NCR. We also offer SEO services in
              Delhi which helps suitable traffic to your website.
            </p>
            <div className="choose-card-box">
              {ChooseData.map((item) => (
                <div
                  className="choose-right-card"
                  style={{ backgroundColor: `${item.background}` }}
                >
                  <p>{item.icon}</p>
                  <h5>{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
