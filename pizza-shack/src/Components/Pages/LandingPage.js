import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import {deals} from '../Data/data'


export default function LandingPage(props) {

    console.log(deals)
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
        <div> <button className="button"> Find My Pizza Home</button></div>
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
                         <div> {deal.price}</div>
                    </div>
                    <button className="button"> Add to Cart </button>

                </div>
            ) )}
        </div>

      <h3 className="landingMenu"> Menu</h3>
      <div className='Menu'>
     
              <div className="pizzaLink"> <a href="/pizza">Pizza</a> </div>
              <div className="wingsLink"> <a href="/wings">Wings</a> </div>
              <div className="sidesLink"> <a href="/sides">Sides</a> </div>
              <div className="pastaLink"> <a href="/pasta">Pasta</a> </div>
              <div className="dessertLink"> <a href="/dessert">Dessert</a> </div>
              <div className="drinksLink"> <a href="/drinks">Drinks</a> </div>
      </div>
        </>
    )
}