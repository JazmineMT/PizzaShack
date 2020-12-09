import React from 'react'
import {pastas} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function Pasta(props){
    return(
        <div>
            <h1>Pasta</h1>
            <MenuCard item={pastas} addToCart={props.addToCart}/>
        </div>
    )
}