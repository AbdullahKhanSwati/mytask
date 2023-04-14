import React from 'react'
import "./Home.css"
import pizza from "./myPizza.png"
function Home() {
  return (
    <div className='mainContainer'>


<div className='myflex1'>

<h1>Pizza faimily</h1>
<p className='mypara'>People dissapoint, But pizza never does</p>
<div>
<input  type='text'  className='inp1'/>
<input type="button" value="Search Location"  className='inp2'/>
</div>
<input type="button" value="Try Now"  className='inp3'/>
</div>



<div className='myflex2'>

<img src={pizza} alt="Logo" />
</div>


    </div>
  )
}

export default Home