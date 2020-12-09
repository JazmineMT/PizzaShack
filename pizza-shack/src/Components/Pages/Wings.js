import React from 'react'
import {wings} from '../Data/data'
import MenuCard from '../Cards/MenuCard'



export default function Wings(props) {


    return(
        <>
        <h1>Wings</h1>
        <MenuCard props={wings}/>
        </>
    )
}