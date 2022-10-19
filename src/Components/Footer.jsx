import React from 'react';
import facebook from '../assets/img/facebook logo.svg';
import twitter from '../assets/img/twitter logo.svg';
import linkedin from '../assets/img/linkedin logo.svg';
import instagram from '../assets/img/instagram logo.svg';

const Footer = () => {
  return (
    <footer>
        <div className="content">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">How it Work</a></li>
            <li><a href="#">Our Project</a></li>
            <li><a href="#">Service</a></li>
          </ul>
          <span>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.</span>
        </div>
        <div className="bottom">
          <div className="rectangle" />
          <div className="socialmedia">
            <a href="#"><img src={facebook} alt="..." /></a>
            <a href="#"><img src={twitter} alt="..." /></a>
            <a href="#"><img src={linkedin} alt="..." /></a>
            <a href="#"><img src={instagram} alt="..." /></a>
          </div>     
          <div className="rectangle" />
        </div>     
      </footer>
  )
}

export default Footer