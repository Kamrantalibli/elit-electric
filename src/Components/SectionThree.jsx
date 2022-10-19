import React from 'react'
import vector4 from '../assets/img/Vector4.png';

const SectionThree = () => {
  return (
    <div id='three' className="section-three">
        <div className="left">
          <div className="left-content">
            <div className="inside">
              <h1>What We Do ?</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <button>
                <span>Learn More</span>
                <img src={vector4} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="right" />
      </div>
  )
}

export default SectionThree