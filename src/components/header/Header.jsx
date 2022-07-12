import React from 'react'
import { Link } from "react-router-dom";
import './style/header.css'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="link link--io">
						<span>HOME</span>
				</Link>
        <Link to="/introduction" className="link link--io">
						<span>INTRODUCTION</span>
				</Link>
        <Link to="/climate" className="link link--io">
						<span>CLIMATE</span>
				</Link>
        <Link to="/cateogry" className="link link--io">
						<span>CATEOGRY</span>
				</Link>
        <Link to="/awarnass" className="link link--io">
						<span>AWARNASS</span>
				</Link>
        <Link to="/agreements" className="link link--io">
						<span>AGREEMENTS</span>
				</Link>
        <Link to="/about" className="link link--io">
						<span>ABOUT US</span>
				</Link>
      </nav>
    </header>
  )
}

export default Header