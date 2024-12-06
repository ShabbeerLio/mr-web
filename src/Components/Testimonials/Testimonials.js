import React from 'react'
import "./Testimonials.css"
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimoData from './TestimoData';

const Testimonials = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };


    return (
        <div className='Testimonials'>
            <div className='Ranking-main'>
                <div className='Ranking-box'>
                    <h4>our testimonials</h4>
                    <h2>What Our Client Say</h2>
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={2}
                        autoplay={true}
                        autoplayTimeout={3000}
                        responsive={responsiveOptions}
                    >
                        {TestimoData.map((item) => (
                            <div className="HomeReview-boxes">
                            <p>{item.desc}</p>
                            <div className="HomeReview-info">
                                <div className="author-img">
                                    <img src="https://duruthemes.com/demo/html/cappa/demo3-dark/img/team/5.jpg" alt="" />
                                </div>
                                <div className="HomeReview-cont">
                                    <h6>{item.name}</h6>
                                    <span>Guest review</span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
