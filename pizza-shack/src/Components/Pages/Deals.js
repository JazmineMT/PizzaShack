import React from 'react'
import {deals} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function Deals(props){
    return(
        <div>
            <h1 className='pageTitle' >Deals</h1>
            <MenuCard item={deals} addToCart={props.addToCart}/>
        </div>
    )
}