import React from 'react'
import {dessrts} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function Dessert(props){
    return(
        <div>
            <h1>Desserts</h1>
            <MenuCard props={dessrts}/>
        </div>
    )
}