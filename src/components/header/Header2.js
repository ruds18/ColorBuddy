import React from 'react'

function Header2() {
    return (
        <div>
            <div className="header-2">
        <div className="header-2_container container">
          <div className="options">
            <i
              className="fa-solid fa-bars"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
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
        </div>
    )
}

export default Header2
