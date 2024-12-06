import React from 'react'
import "./Industry.css"
import IndustryData from './IndustryData'

const Industry = () => {
    return (
        <div className='Industry'>
            <div className='Industry-main'>
            <h4>Industries</h4>
            <h2>Industries We Serve</h2>
                <div className='Industry-box'>
                    {IndustryData.map((item) => (
                        <div
                            className="Industry-card"
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
    )
}

export default Industry
