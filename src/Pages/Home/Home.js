import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Work from '../../Components/Work/Work'
import Certificate from '../../Components/Certificate/Certificate'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import Steps from '../../Components/Steps/Steps'
import Solution from '../../Components/Solution/Solution'
import BannerBtm from '../../Components/BannerBtm/BannerBtm'
import Ranking from '../../Components/Ranking/Ranking'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Clients from '../../Components/Clients/Clients'
import Industry from '../../Components/Industry/Industry'

const Home = () => {
    return (
        <div>
            <Banner/>
            <BannerBtm/>
            <About/>
            <Services/>
            <Work/>
            <Certificate/>
            <ChooseUs/>
            <Steps/>
            <Solution/>
            <Ranking/>
            <Testimonials/>
            <Clients/>
            <Industry/>
        </div>
    )
}

export default Home
