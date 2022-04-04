import React from 'react'
import '../components/seo'
import Navbar from '../components/navbar'
import '@fontsource/montserrat/500.css'

export default function About() {
  return (
    <>
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
        About Us</h1>
    </div>

    <div className="about-text">
      <p style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
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
        About us
      </p>
    </div>

    <div className="main-text">
      <div className="about-part-1">
        <style>
          {`
            .about-part-1 {
              font-family: 'Montserrat, sans-serif';
              font-size: '16px';
              font-weight: '500';
              line-height: '1.5';
              color: #000;
              margin: 0;
              padding: 0;
            }

            .about-part-1 p {
              float: left;
              padding: 10px;
            }

            .about-part-1 img {
              float: right;
              padding: 10px;
            }
          `}
        </style>
        <img src='../images/about-us/about-us-1.jpg' alt='about-us-1' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam eros, eget tincidunt nisl nunc euismod
          nisi.
        </p>
      </div>

      <div className="about-part-2">
        <style>
          {`
            .about-part-2 {
              font-family: 'Montserrat, sans-serif';
              font-size: '16px';
              font-weight: '500';
              line-height: '1.5';
              color: #000;
              margin: 0;
              padding: 0;
            }

            .about-part-2 p {
              float: left;
              padding: 10px;
            }

            .about-part-2 img {
              float: right;
              padding: 10px;
            }
          `}
        </style>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam eros, eget tincidunt nisl nunc euismod
          nisi.
        </p>
        <img src='../images/about-us/about-us-2.jpg' alt='about-us-2' />
      </div>          
    </div>
    </>
  )
}
