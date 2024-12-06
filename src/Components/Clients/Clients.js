import React from 'react'
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Clients.css"
import ClientsData from './ClientsData';

const Clients = () => {

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
        <div className="Clients">
            <div className="work-main">
                <h4>Clients</h4>
                <h2>Clients We Work With</h2>
                <div className="work-box">
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={2}
                        autoplay={true}
                        autoplayTimeout={3000}
                        responsive={responsiveOptions}
                    >
                        {ClientsData.map((item) => (
                            <div className="work-card" key={item.id}>
                                <img src={item.cover} alt="" />
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Clients
