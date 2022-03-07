import React, { useState } from 'react'
import GradientBox from '../gradients/GradientBox';


function Header2() {
  const [gBox, setGBox] = useState(false);

 
    return (
        <div>
            <div className="header-2">
        <div className="header-2_container container">
          <div className="options">
            <i
              className="fa-solid fa-bars"
              onClick={()=>setGBox(!gBox)}
            ></i>
            Show all gradients
          </div>

          <div className="color">
            <div className="color-box"></div>
            <p>#161853</p>
          </div>
          <div className="buttons">
            <i className="fa-solid fa-rotate-right"></i>
            <div className="divider"></div>
            <i className="fa-solid fa-circle-plus"></i>
            <div className="divider"></div>
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </div>
        </div>
      </div>

       <div className={gBox? 'toggle' : ''}>
       { gBox ? <GradientBox /> : '' }
       </div>
        </div>
    )
}

export default Header2
