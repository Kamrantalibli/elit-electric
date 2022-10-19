import React from 'react'
import vector4 from '../assets/img/Vector4.png';

const SectionFive = () => {
  return (
    <div className="section-five">
        <div className="left" />
        <div className="right">
          <div className="right-content">
            <div className="inside">
              <h1>Trends</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <button>
                <span>Learn More</span>
                <img src={vector4} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionFive