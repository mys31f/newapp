import React from 'react'
import Seo from '../components/seo'
import '@fontsource/montserrat/500.css'
import Navbar from '../components/navbar'
import bgImage from '../images/homepageBG.jpg'

export default function Index() {
  return (
    <>
    <div className="seo-title">
      <Seo title="12 Cambridge" /> 
    </div>

    <div className="navbar">
      <Navbar />
    </div>

    <div className="background">
      <div className="background-image">
        <style>
          {
            `.background-image {
              background-image: url(${bgImage});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
            }`
          }
        </style>
      </div>
    </div>
    
    <div className="main-text">
      <h1 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '1.5',
        color: 'coral',
        margin: '0',
        padding: '0',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textShadow: '-2px -2px 5px #000',
      }}>
        12 Cambridge</h1>
    </div>
    </>
  )
}

