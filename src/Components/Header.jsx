import React from 'react'
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header>
        <div className="head">
          <a href="#"><img className="logo" src={logo} alt="..." /></a>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="#two">How it Work</a></li>
            <li><a href="#three">Our Project</a></li>
            <li><a href="#four">Service</a></li>
          </ul>
          <button className="contact">Contact Us</button>
          <button className="menu-bar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="fa-solid fa-bars" /></button>
        </div>
        <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div className="offcanvas-header">
            <a href="#"><img className="logo-canvas" src={logo} alt="..." /></a>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="menu-canvas">
            <li><a href="/">Home</a></li>
            <li><a href="#two">How it Work</a></li>
            <li><a href="#three">Our Project</a></li>
            <li><a href="#four">Service</a></li>
            </ul>
            <button className="contact-canvas">Contact Us</button>
          </div>
        </div>
      </header>
  )
}

export default Header