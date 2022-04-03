import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/students">Students</Link>
      <Link to="/teachers">Teachers</Link>
    </div>
  )
}

