import React from 'react'
import {wings} from '../Data/data'
import MenuCard from '../Cards/MenuCard'



export default function Wings(props) {


    return(
        <>
        <h1 className='pageTitle'>Wings</h1>
        <MenuCard item={wings} addToCart={props.addToCart}/>
        </>
    )
}