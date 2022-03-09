import React from 'react'
import '../gradients/GradientBox.css'

const GradientBox = ({data, close}) =>{
    return (
        
        <div className="main-container toggle">
            <div className=" container toggle">
            {data
            ? data.map((d, i) => (
                <div key={`${d.color}-${i}`} onClick={close}  className="row" style={{background: d.color}}>
                    <div className="col-lg-4 " >{d.color}</div>
                </div>
                ))
                : 'loading'}
            </div>
        </div>
    )
}

export default GradientBox
