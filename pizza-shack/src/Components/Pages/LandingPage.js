import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import {deals} from '../Data/data'
import shack from '../Data/pics/shack.jpg'
import Carousel2 from './Carousel'
import Carousel from 'react-bootstrap/Carousel'  
import location from '../Data/pics/location.jpg'


export default function LandingPage(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/locationfinder");
  }


    return (
        <div className='landing'>
        <div className="mainPic"> 
          <Carousel2/>
        </div>  
        <div className='boxedMenu'>
        <div className='Menu'>
        
        <Carousel>  
            <Carousel.Item  >  
            <div onClick={() => history.push("/pizza")}  className="pizzaLink">  </div>
            <Carousel.Caption>
              <h3  className ='menuLink'onClick={() => history.push("/pizza")} >Pizza</h3>
              
               </Carousel.Caption>
              </Carousel.Item  >  
                <Carousel.Item >  
                <div onClick={() => history.push("/wings")} className="wingsLink"> </div>
                <Carousel.Caption>
                <h3 className ='menuLink' onClick={() => history.push("/wings")}>Wings</h3>
                </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item >  
                <div onClick={() => history.push("/sides")} className="sidesLink"> </div> 
                <Carousel.Caption>
                <h3  className ='menuLink' onClick={() => history.push("/sides")}>Sides</h3> 
                </Carousel.Caption>
                 </Carousel.Item>  
                 <Carousel.Item >  
                 <div onClick={() => history.push("/pasta")} className="pastaLink"> </div> 
                 <Carousel.Caption>
                 <h3  className ='menuLink' onClick={() => history.push("/pasta")}>Pasta</h3>
                 </Carousel.Caption>
  
                 </Carousel.Item>  
                 <Carousel.Item >  
                <div onClick={() => history.push("/sides")} className="sidesLink"> </div> 
                <Carousel.Caption>
                <h3  className ='menuLink' onClick={() => history.push("/sides")}>Sides</h3>
                </Carousel.Caption>
                 </Carousel.Item>  
                 <Carousel.Item >  
                 <div onClick={() => history.push("/dessert")} className="dessertLink">  </div>
                 <Carousel.Caption>
                 <h3  className ='menuLink' onClick={() => history.push("/dessert")}>Dessert</h3>
                 </Carousel.Caption>
                 </Carousel.Item>  
                 <Carousel.Item >  
                 <div   onClick={() => history.push("/drinks")} className="drinksLink"> </div>
                 <Carousel.Caption>
                 <h3  className ='menuLink' onClick={() => history.push("/drinks")}>Drinks</h3> 
                 </Carousel.Caption>
                 </Carousel.Item>  
                  </Carousel> 
   
          </div>
          <div className="dealsLanding">
            {deals.slice(0,1).map( deal => (
                <div className="box">
                    <div className="IMGBox"> 
                    <img className="dealBox"  src={deal.picURL}/> 
                    <div className="dealsdescription"> 
                       
                       <h1 className='menuLink'>{deal.name}</h1>
                       <div className='desc'>
                          <p className='para'>{deal.description}</p>
                          <p className='para'> ${deal.price}</p>
                        </div>
                          <button onClick={() => props.addToCart(deal)} className="button"> Add to Cart </button>
                     
                  
                  </div>
                 
                    </div>

                </div>
            ) )}
        </div>
        </div>
  
      <div className="locationMain">
        <img  className='locationImage' src={location}/>
        <div className="nearYou">
          <div className="loc">
        <h3 className="locName"> Find A Location Near You</h3>
        <LocationOnIcon className="location_icon"/>
        </div>
         <button onClick={handleClick} className="button"> Find Pizza Shack Near Me</button></div>
    
        </div>
        </div>
    )
}