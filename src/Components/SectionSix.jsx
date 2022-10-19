import React from 'react'
import vector5 from '../assets/img/Vector5.png';

const SectionSix = () => {
  return (
    <div id='six' className="section-six">
        <div className="left">
          <div className="left-content">
            <div className="inside">
              <h1>Have any project ?</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <button>
                <img src={vector5} alt="..." />
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h1>Contact Us</h1>
            <form>
              <div className="input-name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="input-email">
                <label htmlFor="email">Mail</label>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="input-message">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={10} cols={40} placeholder="Type your message here" defaultValue={""} />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SectionSix