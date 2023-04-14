import React from 'react'
import "./Contact.css"
import styled from "styled-components"


function Contact() {
  return (
    <>
    <div className='myWrapper parent-class'>
    <div className='myContainer'>
<h1 style={{textAlign:"center"}}>Reservation</h1>
<p style={{textAlign:"center"}}>Book online or give us a call on +92 3498756733</p>
<p style={{textAlign:"center"}}>Between 9:30 Am - 10:00 PM</p>

<form>
<label>Name</label>
<input type='text' className='inp'/><br/><br/>

<label>E-Mail</label>
<input type='email' className='inp'/><br/><br/>

<label>People Number</label>
<input type='number' className='inp'/><br/><br/>

<label>Date & Time</label>
<input type='date' className='inp'/><br/><br/>
<input style={{marginTop:"40px",padding:"8px",marginLeft:"130px",width:"150px" ,color:"white"}} type="button" value="Send mail" className='explore mybtn' />
</form>

    </div>
    </div>
    </>
  )
}

export default Contact