import React from 'react'
import imgOne from '../assets/img/ehmitrich-j4whez6CEL0-unsplash 1.png';
import imgTwo from '../assets/img/american-public-power-association-dR3Fb6dBEc0-unsplash 1.png';
import imgThree from '../assets/img/steve-johnson-hokONTrHIAQ-unsplash 1.png';
import vector4 from '../assets/img/Vector4.png';

const SectionFour = () => {
  return (
    <div id='four' className="section-four">
        <div className="row blocks">
          <div className="block  col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={imgOne} alt="..." /></div>
            <div className="block-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <button>
                <span>Learn More</span>
                <img src={vector4} alt="" />
              </button>
            </div>
          </div>
          <div className="block  col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={imgTwo} alt="..." /></div>
            <div className="block-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <button>
                <span>Learn More</span>
                <img src={vector4} alt="" />
              </button>
            </div>
          </div>
          <div className="block  col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={imgThree} alt="..." /></div>
            <div className="block-body">
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

export default SectionFour