import React , {useEffect, useRef}from 'react'
import { useHistory} from "react-router-dom";
import {pizzas} from '../Data/data'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import PopularPizza from './PopularPizza'
import CreateYourOwnPizza from './CreateYourOwnPizza'
import {NavBox, Line} from '../styles/PizzaStyles'
import { Container } from '../styles/RegisterStyles';

export default function Pizza(props){
    const ContainerRef = useRef(null);

    useEffect(() => {
        ContainerRef.current.click()
    }, [])
      
    
    return(
        <div>
            <h1 className='pageTitle'>Pizza</h1>
            <Router>
                <NavBox>
            <NavLink ref ={ContainerRef} className='pizzalink' exact to='/popularpizza'>Popular Pizza's </NavLink>
            <Line></Line>
            <NavLink className='pizzalink' exact to='/createpizza'> Create Your Own </NavLink>
            </NavBox>
            <Switch>
            <Route exact path ='/popularpizza'>
                     <PopularPizza addToCart={props.addToCart}/>
            </Route>
            <Route exact path ='/createpizza'>
                <CreateYourOwnPizza addToCart={props.addToCart}/>
            </Route>
        </Switch>
        </Router>
        </div>
    )
}