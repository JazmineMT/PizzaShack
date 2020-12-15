import React from 'react'
import {IMG, ItemBox, Menu, IMGBox, DescriptionBox, ButtonBox, Title, Price} from '../styles/MenuCardStyles'



export default function MenuCard(props){
    console.log(props)


    return(
        <Menu>
           {props.item.map( item => (
               <ItemBox>
                    <IMGBox>
                    <IMG  src={item.picURL}/>
                </IMGBox>
               <DescriptionBox>
                   <div>  <Title>{item.name}</Title></div>
                   <div> 
                   <p>{item.description}</p>
                   <Price>${item.price}</Price>
             
                   </div>
                   <ButtonBox>  <button  onClick={() => props.addToCart(item)}className="button"> Add to Cart </button>
                   </ButtonBox>
                </DescriptionBox>

                </ItemBox>

           ))}
        </Menu>
    )
}