import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import {deals} from '../Data/data'


export default function LandingPage(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/locationfinder");
  }


    return (
        <>
        <div className="mainPic">
        <div className="Mainbtn" ><button className="button">Order Now </button></div>
      </div >
      <div className="locationMain">
        <div className="nearYou">
        <h3> Find A Location Near You</h3>
        <LocationOnIcon className="location_icon"/>
        </div>
        <div> <button onClick={handleClick} className="button"> Find My Pizza Home</button></div>
      </div>
      <div>   <h3> Deals </h3> <p> View All</p> </div>
        <div className="dealsLanding">
            {deals.slice(0,3).map( deal => (
                <div className="box">
                    <div className="IMGBox"> <img className="dealBox"  src={deal.picURL}/> </div>
                    <div className="dealsdescription"> 
                        <div>
                         <h1>{deal.name}</h1>
                            <p>{deal.description}</p>
                        </div>
                         <div> ${deal.price}</div>
                    </div>
                    <button onClick={() => props.addToCart(deal)} className="button"> Add to Cart </button>

                </div>
            ) )}
        </div>

      <h3 className="landingMenu"> Menu</h3>
      <div className='Menu'>
     
              <div  className="pizzaLink"> <a onClick={() => history.push("/pizza")} >Pizza</a> </div>
              <div className="wingsLink"> <a onClick={() => history.push("/wings")}>Wings</a> </div>
              <div className="sidesLink"> <a onClick={() => history.push("/sides")}>Sides</a> </div>
              <div className="pastaLink"> <a onClick={() => history.push("/pasta")}>Pasta</a> </div>
              <div className="dessertLink"> <a onClick={() => history.push("/dessert")}>Dessert</a> </div>
              <div className="drinksLink"> <a onClick={() => history.push("/drinks")}>Drinks</a> </div>
      </div>
        </>
    )
}