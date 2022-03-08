import React from 'react'
import '../preloader/Preloader.css'
import SyncLoader from "react-spinners/SyncLoader";
function Preloader({loading}) {
    return (
        <div className="main-container">
         <div className='l'>
         <h1>
            <span style={{color: "#d82148"}}>Color</span>
            <span style={{color: "#6ebf8b"}}>Buddy</span>
          </h1>
          <p>The imagination is a palette of bright colors. ...</p>
         </div>
   
         <SyncLoader color={"#d82148"} loading={loading}  size={30} margin={5} />

        </div>
    )
}

export default Preloader
