import React from 'react'
import vector3 from '../assets/img/Vector3.png';

const SectionTwo = () => {
  return (
    <div id='two' className="section-two">
        <h1>How It Work</h1>
        <div className="blocks row">
          <div className="block-card col-sm-12 mb-5">
            <div className="icon-1" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button><img src={vector3} alt="..." /></button>
          </div>
          <div className="block-card col-sm-12 mb-5">
            <div className="icon-2" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button><img src={vector3} alt="..." /></button>
          </div>
          <div className="block-card col-sm-12 mb-5">
            <div className="icon-3" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button><img src={vector3} alt="..." /></button>
          </div>
        </div>
      </div>
  )
}

export default SectionTwo