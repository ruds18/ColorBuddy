import React from 'react'
import '../gradients/GradientBox.css'

const GradientBox = ({data, close, gBox}) =>{
    return (
        
        <div className="main-container">
            <div className={`container ${gBox? 'toggle' : 'exit-toggle'}`}>
            {data
            ? data.map((d, i) => (
                <div key={`${d.color}-${i}`} onClick={()=>{close()}}  className="row" style={{background: d.color}}>
                    <div className="col-lg-4 "  >{d.color}</div>
                </div>
                ))
                : 'loading'}
            </div>
        </div>
    )
}

export default GradientBox
