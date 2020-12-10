import React , {useState}from 'react'
import {Item, IMG} from '../styles/ShoppingCartStyles'
import pizza from '../Data/pics/pizza.jpg'
import { ToppingBox } from '../styles/PizzaStyles'




export default function ShoppingCartItem(props) {

    return(
            <>
            {props.items.map( item => {
                if(item.name === 'specail'){
                    return (
                        <Item>
                        <div>
                            <IMG src={pizza}/>
                        </div>
                        <div>
                        <h3>{item.size} Pizza</h3>
                        <p>{item.crust} Crust </p>
                        <p>{item.sauce} Sauce</p>
                        {item.toppings.map(topping => {    
                            return(
                                <div>
                                    <p>{topping}</p>
                                </div>
                            )
                        })}
                        
                        
                        </div>
                        <div>
                            <h4>{item.price}</h4>
                            <button> Remove</button>
                        </div>
                    </Item>
                    )
                }else{
                    return (
                        <Item>
                            <div>
                                <IMG src={item.picURL}/>
                            </div>
                            <div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            </div>
                            <div>
                                <h4>{item.price}</h4>
                                <button> Remove</button>
                            </div>
                        </Item>
                    )
                }
            })}
            </>
    )
}