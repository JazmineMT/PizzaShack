import React from 'react'
import {pizzas} from '../Data/data'
import MenuCard from '../Cards/MenuCard'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import PopularPizza from './PopularPizza'
import CreateYourOwnPizza from './CreateYourOwnPizza'
import {NavBox, Line} from '../styles/PizzaStyles'

export default function Pizza(props){
    return(
        <div>
            <h1>Pizza</h1>
            <Router>
                <NavBox>
            <NavLink className='pizzalink' exact to='/popularpizza'>Popular Pizza's </NavLink>
            <Line></Line>
            <NavLink className='pizzalink' exact to='/createpizza'> Create Your Own </NavLink>
            </NavBox>
            <Switch>
            <Route exact path ='/popularpizza'>
                     <PopularPizza/>
            </Route>
            <Route exact path ='/createpizza'>
                <CreateYourOwnPizza/>
            </Route>
        </Switch>
        </Router>
        </div>
    )
}