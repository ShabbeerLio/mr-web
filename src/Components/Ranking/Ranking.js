import React from 'react'
import "./Ranking.css"
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RankData from './RankData';

const Ranking = () => {

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
        <div className='Ranking'>
            <div className='Ranking-main'>
                <div className='Ranking-box'>
                    <h4>All Over India</h4>
                    <h2>Rank on the first page of Google</h2>
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={2}
                        autoplay={true}
                        autoplayTimeout={3000}
                        responsive={responsiveOptions}
                    >
                        {RankData.map((item) => (
                            <div className="Ranking-card" key={item.id}>
                                <img src={item.cover} alt="" />
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Ranking
