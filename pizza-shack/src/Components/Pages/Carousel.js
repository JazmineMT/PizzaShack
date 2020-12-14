import React from 'react'
import Carousel from 'react-bootstrap/Carousel'  
import pic from '../Data/pics/shack.jpg'
import cooking from '../Data/pics/cooking.jpg'
import pizzaOven from '../Data/pics/pizzaOven.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Carousel2() {

    return (
        <div>  
        <Carousel>  
          <Carousel.Item  >  
            <img  className="mainPic"  src={pic}  />  
            </Carousel.Item  >  
              <Carousel.Item >  
                <img  className="mainPic"    src={cooking}    />  
              </Carousel.Item>  
              <Carousel.Item >  
              <img   className="mainPic"  src={pizzaOven}   />  
               </Carousel.Item>  
                </Carousel>  
                  </div>  

    )
}