import React, { useState } from 'react'
import GradientBox from '../gradients/GradientBox';
import '../gradients/GradientBox.css';
import ReactCSSTransitionGroup from 'react-transition-group';


function Header2() {
  const [gBox, setGBox] = useState(false);


  return (
    <div>
      <div className="header-2">
        <div className="header-2_container self-container">
          <div className="options">
            <i
              className="fa-solid fa-bars"
              onClick={() => setGBox(!gBox)}
            ></i>
            Show all gradients
          </div>

          <div className="color">
            <div className="color-box"></div>
            <p>#161853</p>
          </div>
          <div className="buttons">
           <button  aria-label="Rotate Gradient" data-microtip-position="bottom" role="tooltip">
           <i class="fa-solid fa-arrow-rotate-right"></i>
           </button>
            <div className="divider"></div>
            <button aria-label="Add gradient" data-microtip-position="bottom" role="tooltip" >
            <i className="fa-solid fa-circle-plus"></i>
            </button>
            <div className="divider"></div>
            <button aria-label="Get css" data-microtip-position="bottom" role="tooltip" >
            <i className="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>


       {gBox ? <GradientBox  /> : " "}

     
    </div>

  )
}

export default Header2
