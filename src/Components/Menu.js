import React from 'react'
import "./Menu.css"
import pizza4 from "./pizza4.png"
import styled from 'styled-components'
const products = [
  {
    h1:"Pizza By The Slice",
    Pizza_Style1: "$1.2",
    Pizza_Style2: "$2.2",
    Pizza_Style3: "$3.2",
    Pizza_Style4: "$4.2",
  },
  {
    h1:"Pizza By The Slice",
    Pizza_Style1: "$5.2",
    Pizza_Style2: "$6.2",
    Pizza_Style3: "$7.2",
    Pizza_Style4: "$8.2",
  }
]
const product2 = [
  {
    h1:"Classic Pizza",
    p1:"pizza comes with all tapping that",
    p2:"you describe in this secion",
    price:"$19"
  },
  {
    h1:"Classic Pizza",
    p1:"pizza comes with all tapping that",
    p2:"you describe in this secion",
    price:"$19"
  },
  {
    h1:"Classic Pizza",
    p1:"pizza comes with all tapping that",
    p2:"you describe in this secion",
    price:"$19"
  }
 
]
function Menu() {

  return (
    <>
     <Wrapper>
     <h1 style={{ fontFamily: "'Zeyada', cursive", textAlign: 'center', fontSize: "70px" }}>Menu</h1>
      <div className='container-fluid'>
        <div className='row'>

          <div className='col-lg-3 col-md-3 col-sm-12 myrow1'>
            <div className='data1'>
              <img src={pizza4} alt="Logo" />

            </div>
          </div>

          

          <div className='col col-lg-5 col-md-5 col-sm-12 myrow3'>
            {
                products.map((product) => (
                  <>
                  <p className='myh1'>{product.h1}</p>
                  <p>Pizza_Style ........................................  {product.Pizza_Style1}</p>
                  <p>Pizza_Style ........................................  {product.Pizza_Style2}</p>
                  <p>Pizza_Style ........................................  {product.Pizza_Style3}</p>
                  <p>Pizza_Style ........................................  {product.Pizza_Style4}</p>
                 
                   
                  </>
                ))
              }
            </div>



            <div className='col col-lg-4 col-md-4 col-sm-12 myrow2 mb-5'>


            <p style={{textAlign:"center" , color: "#94431b" , fontSize:"29px" , fontWeight:"bold"}}>Gourmet Pizza</p>
           

              {
                product2.map((product) => (
                  <>
                  <div className='price'>
                  <span className='myh1' style={{color: "#94431b"}}>{product.h1}</span><span style={{marginTop:"10px",marginLeft:"20px",color:"#94431b"}}>{product.price}</span>
                  </div>
                  <p>{product.p1}</p>
                  <p>{product.p2}</p>
                 
                   
                  </>
                ))
              }
           <input type="button" value="Explore more" className='explore' style={{backgroundColor:"#f58d42",color:"white"}}/>
            

            

             

           

          </div>

        </div>





    
      </div>


     </Wrapper>
    </>
  )
}

export default Menu

const Wrapper = styled.section`
.myWrapper {
  background-image: url('https://media.istockphoto.com/id/1345445201/photo/kitchen-table-with-vegetables-and-cutting-board-for-preparing-salad.jpg?s=612x612&w=0&k=20&c=v6LjM8PqJTvIOXGvw4R3V6yb5C0YW9ATBkGcoAvHF48=');
  background-size: cover;
  background-position: center;
}

.myContainer {
  display: inline-block;
  float: right;
  margin-right: 10%;
  padding: 50px;
  margin-top: 50px;
  background-color: #f2f9fa;
  border-radius: 30px;
}

form {
  margin-top: 20%;
}

.inp {
  font-size: 20px;
  border-bottom: 2px dotted black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-left: 40px;
  background-color:#f2f9fa ;
}

label {
  font-size: 18px;
}

.mybtn {
  margin-top: 20px;
  color: wheat;
}

/* Responsive styling */
@media screen and (max-width: 768px) {
  .myContainer {
    float: none;
    margin: 0 auto;
  }
  form {
    margin-top: 10%;
  }
  .explore {
    margin-left: 0;
  }
}

@media screen and (max-width: 480px) {
  .inp {
    font-size: 16px;
  }
  label {
    font-size: 16px;
  }
}


`