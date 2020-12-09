import React from 'react'
import {sides} from '../Data/data'
import MenuCard from '../Cards/MenuCard'

export default function Sides(props){
    return(
        <div>
            <h1>Sides</h1>
            <MenuCard props={sides}/>
        </div>
    )
}