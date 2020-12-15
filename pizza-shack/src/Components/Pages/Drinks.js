import React from 'react'
import {drinks} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function Drinks(props){
    return(
        <div>
            <h1 className='pageTitle'>Drinks</h1>
            <MenuCard item={drinks} addToCart={props.addToCart}/>
        </div>
    )
}