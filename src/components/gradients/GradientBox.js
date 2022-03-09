import React from 'react'
import '../gradients/GradientBox.css'

const GradientBox = (props) =>{
    return (
        
        <div className="main-container">
            <div className="container">
            {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.color}-${i}`} className="row" style={{background: d.color}}>
                    <div className="col-lg-4">{d.color}</div>
                </div>
                ))
                : 'loading'}
            </div>
        </div>
    )
}

export default GradientBox
