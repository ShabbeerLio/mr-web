import React from "react";
import "./Work.css";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import WorkData from "./WorkData";

const Work = () => {
  const responsiveOptions = {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 8,
    },
  };

  return (
    <div className="work">
      <div className="work-main">
        <h4>Techstack</h4>
        <h2>Technologies We Work With</h2>
        <ReactOwlCarousel
          loop={Infinity}
          items={2}
          autoplay={true}
          autoplayTimeout={3000}
          responsive={responsiveOptions}
        >
          {WorkData.map((item) => (
            <div className="work-card" key={item.id}>
              <img src={item.cover} alt="" />
            </div>
          ))}
        </ReactOwlCarousel>
      </div>
    </div>
  );
};

export default Work;
