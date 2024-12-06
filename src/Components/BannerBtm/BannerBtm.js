import React, { useRef } from 'react';
import './BannerBtm.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbBrandApplePodcast } from "react-icons/tb";
import { IoArrowUndoSharp } from "react-icons/io5";

const BannerBtm = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const countUpOptions = {
        start: 0,
        duration: 5,
        useEasing: true,
        separator: ',',
    };

    return (
        <div className="Map" ref={ref}>
            <div className="map-main">
                <div className="map-right">
                    <div className="mapright-counter">
                        <div className="counter-box">
                            <h1><TbBrandApplePodcast />{inView ? <CountUp end={8600} {...countUpOptions} /> : 0}</h1>
                            <h5>Projects Completed</h5>
                        </div>
                        <div className="counter-box">
                            <h1><FaHandshakeSimple />{inView ? <CountUp end={860} {...countUpOptions} /> : 0}</h1>
                            <h5>Active Clients</h5>
                        </div>
                        <div className="counter-box">
                            <h1><IoIosPeople />{inView ? <CountUp end={102} {...countUpOptions} /> : 0}</h1>
                            <h5>Expert Peoples</h5>
                        </div>
                        <div className="counter-box">
                            <h1><RiEmotionHappyLine />{inView ? <CountUp end={7430} {...countUpOptions} /> : 0}</h1>
                            <h5>Happy Clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBtm;