import React from 'react'
import {pizzas} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function PopularPizza(props){
    return(
        <div>
            <MenuCard  item={pizzas} addToCart={props.addToCart}/>
        </div>
    )
}