import React from 'react'
import myPizzza from "./pizzaCoupen2.png"
import "./Coupen.css"
function Coupen() {
  return (
    <div className='container'>
    <div className='row'>

<div className='col-lg-6 col-md-6 col-sm-12 coupen1'>
<h1><span></span>Of The Month</h1>
      <h1>The Big <span>BIRD</span></h1>
    <img src={myPizzza} alt="Logo" />

</div>

    <div className='col-lg-6 col-md-6 col-sm-12 coupen2'>
      <ul>
       <li>Meat Pizza</li>
       <li>Margrita Pizza</li>
       <li>Hawaiian Pizza</li>
       <li>Pepproni Pizza</li>
       <li>Veggie Pizza</li>
       <li>Cheese Pizza</li>


      </ul>
    </div>

        

    </div>
    </div>
  )
}

export default Coupen