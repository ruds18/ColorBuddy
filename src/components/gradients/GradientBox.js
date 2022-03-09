import React from 'react'
import '../gradients/GradientBox.css'

function GradientBox({gBox}) {
    return (
        <div className={gBox? 'toggle main-container': 'exit-toggle main-container' }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">Color</div>
                    <div className="col-lg-4">Color</div>
                    <div className="col-lg-4">color</div>
                </div>
            </div>
        </div>
    )
}

export default GradientBox
