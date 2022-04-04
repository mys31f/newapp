import React from 'react'
import Seo from '../components/seo'
import Navbar from '../components/navbar'

// import images
import bgImage from '../images/background.jpg'
import img1 from '../images/teachers/1.png'
import img2 from '../images/teachers/2.png'
import img3 from '../images/teachers/3.png'
import img4 from '../images/teachers/4.png'
import img5 from '../images/teachers/5.png'
import img6 from '../images/teachers/6.png'
import img7 from '../images/teachers/7.png'
import img8 from '../images/teachers/8.png'
import img9 from '../images/teachers/9.png'
import img10 from '../images/teachers/10.png'

export default function Teachers() {
  return (
    <>
    <div className="seo-title">
        <Seo title="Teachers" />
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
              background-attachment: scroll;
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
        Teachers
      </h1>
    </div>

    <div className="image-grid">
      <div className="image-grid-item">
        <img src={ img1 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img2 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img3 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img4 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img5 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img6 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img7 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img8 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img9 } alt="teacher" />
      </div>
      <div className="image-grid-item">
        <img src={ img10 } alt="teacher" />
      </div>
    </div>
    </>
  )
}