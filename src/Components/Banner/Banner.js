import React, { useState } from 'react'
import bnimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"
import BannerBtm from '../BannerBtm/BannerBtm'

const Banners = (props) => {

    return (
        <>
            <div className='Banners'>
                <div className='Banners-main'>
                    <div className="banner-image">
                        <img src={bnimg} alt="" />
                    </div>
                    <div className="Banners-detail">
                        <div className="banner-title">
                            <h4>DIGITAL MARKETING AGENCY</h4>
                        </div>
                        <div className="banner-desc">
                            <h1>RESULTS SPEAKS</h1>
                        </div>
                        <div className="banner-button">
                            <p>GET MY FREE PROPOSAL </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banners