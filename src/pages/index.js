import React from 'react'
import Seo from '../components/seo'
import '@fontsource/montserrat/500.css'
import Navbar from '../components/navbar'

export default function Index() {
  return (
    <>
    <div className="seo-title">
      <Seo title="12 Cambridge" /> 
    </div>

    <div className="navbar">
      <Navbar />
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

