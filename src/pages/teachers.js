import React from 'react'
import Seo from '../components/seo'

export default function Teachers() {
  return (
    <>
    <div className="seo-title">
        <Seo title="Teachers" />
    </div>

    <div className="navbar">
      <Navbar />
    </div>

    <div className="header-text">
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
        Teachers</h1>
    </div>

    <div className="image-grid">
      <div className="image-grid-item">
        <img src={} alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={} alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={} alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={} alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={} alt="teacher" />
      </div>

    </div>
    </>
  )
}
