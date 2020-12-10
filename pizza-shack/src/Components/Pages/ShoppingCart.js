import React from 'react'
import {Container, ItemsContainer, Last, Buttons, Total} from '../styles/ShoppingCartStyles'
import ShoppingCartItem from '../Cards/ShoppingCartItem'



export default function ShoppingCart(props){
    console.log(props.order)

    return (
        <Container>
            <ItemsContainer>
             
            </ItemsContainer>
            <Last>
                <Total>

                </Total>
                <Buttons>
                    <button  className='button'> Add More Food</button>
                    <button  className='button'> Checkout</button>
                </Buttons>
            </Last>
        </Container>

    )
}