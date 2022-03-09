import React from 'react'
import '../header/Header.css'
function Header1() {
  
    return (

    <div className=" header-1 ">
      <div className=" header-1_container self-container">
        <div className="logo">
          <h1>
            <span style={{color: "#d82148"}}>Color</span>
            <span style={{color: "#6ebf8b"}}>Buddy</span>
          </h1>
        </div>
        <div className="button">
          <i className="fa-brands fa-github"/>
          <p>contribute on Github</p>
        </div>
    </div>
 </div>

    )
}

export default Header1
