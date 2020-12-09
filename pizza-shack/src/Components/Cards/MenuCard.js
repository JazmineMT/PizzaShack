import React from 'react'
import {IMG, ItemBox, Menu, IMGBox, DescriptionBox, ButtonBox} from '../styles/MenuCardStyles'



export default function MenuCard(props){
    console.log(props.props)

    return(
        <Menu>
           {props.props.map( item => (
               <ItemBox>
               <DescriptionBox>
                   <div>  <h3>{item.name}</h3></div>
                   <div> 
                   <p>{item.description}</p>
                    <h4>{item.price}</h4>
                   </div>
                   <ButtonBox>  <button className="button"> Add to Cart </button>
                   </ButtonBox>
                </DescriptionBox>
                <IMGBox>
                    <IMG  src={item.picURL}/>
                </IMGBox>
                </ItemBox>

           ))}
        </Menu>
    )
}