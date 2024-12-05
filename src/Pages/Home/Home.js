import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Work from '../../Components/Work/Work'

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Work/>
        </div>
    )
}

export default Home
