import React from 'react'
import { Link } from 'gatsby'
import '@fontsource/montserrat/500.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <style>
          {`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            .navbar {
              font-family: 'Montserrat', sans-serif;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.5rem 1rem;
              background: 'transparent';
              text-align: center;
              margin: auto;
            }

            .navbar-components ul {
              list-style: none;
              display: inline-block;
              padding: 0px 20px;
              text-decoration: none;
              text-transform: uppercase;
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
          `}
        </style>

        <div className="navbar-components">
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/" >Home</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/about" >About</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/students" >Students</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/teachers" >Teachers</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/memories" >Memories</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="/activities" >Activities</Link></ul>
          <ul style={{ textDecoration: 'none', color: 'coral', }}><Link to="https://github.com/mys31f/newapp" >Source Code</Link></ul>
        </div>
    </div>
  )
}

