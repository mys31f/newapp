import React from 'react'
import { Link } from 'gatsby'
import '@fontsource/montserrat/500.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <style>
          {`
            .navbar {
              font-family: 'Montserrat, sans-serif';
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.5rem 1rem;
              background: 'transparent';
              text-align: center;
              margin: auto;
            }
            .navbar-components {
              font-size: 1.2rem;
              font-weight: 500;
              color: #000000;
              text-decoration: none;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              text-shadow: -2px -2px 5px #000;
            }
            .navbar-link:hover {
              background-color: #000;
              color: #fff;
            }
          `}
        </style>

        <div className="navbar-components">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/students">Students</Link>
          <Link to="/teachers">Teachers</Link>
        </div>
    </div>
  )
}

