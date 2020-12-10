import React , {useEffect, useState}from 'react'
import {Container, ItemsContainer, Last, Buttons, Total} from '../styles/ShoppingCartStyles'
import {Item, IMG, IMGBox, DesBox, PriceBox, NameBox,MiddleBox} from '../styles/ShoppingCartStyles'
import pizza from '../Data/pics/pizza.jpg'




export default function ShoppingCart(props){
 const [total , SetTotal] = useState(0)
    let sum = 0 
    console.log(props.order)

    useEffect(() => {
        getTotal()
    },[])

    const getTotal= () => {
        props.order.map( item => {
            sum = sum + item.price
        })
        SetTotal(sum)
 

        
    }
    const remove = (item) => {
        
        props.remove(item)
    }

    return (
        <div>
            <h1> My Order </h1>
        <Container>
            <ItemsContainer>

            {props.order.map( item => {
                if(item.name === 'specail'){
                    return (
                        
                        <Item>
                        <IMGBox>
                            <IMG src={pizza}/>
                        </IMGBox>
                        <MiddleBox>
                        <NameBox>
                        <h3>{item.size} Pizza</h3>
                        </NameBox>
                        <DesBox>
                        <p>{item.size} pizza , {item.crust} Crust , {item.sauce} sauce,</p>
                        {item.toppings.map(topping => {    
                            return(
                                <div>
                                    <p>{topping}</p>
                                </div>
                            )
                        })}
                        
                        
                        </DesBox>
                        </MiddleBox>
                        <PriceBox>
                            <h4 className='remove'> ${item.price}</h4>
                            <a onClick={() =>{
                                    props.removeSpecail(item)
                                    sum = total - item.price
                                    SetTotal(sum)
                                }}> Remove</a>
                        </PriceBox>
                    </Item>
                    )
                }else{

                    return (
                        <Item>
                            <IMGBox>
                                <IMG src={item.picURL}/>
                            </IMGBox>
                            <MiddleBox>
                            <NameBox>
                            <h3>{item.name}</h3>
                            </NameBox>
                            <DesBox>
                            <p>{item.description}</p>
                            </DesBox>
                            </MiddleBox>
                            <PriceBox>
                                <h4 className='remove'> ${item.price}</h4>
                                <a onClick={() =>{
                                    props.remove(item)
                                    sum = total - item.price
                                    SetTotal(sum)
                                }}> Remove</a>

                            </PriceBox>
                        </Item>
                    )
                }
            })}
             
            </ItemsContainer>
            <Last>
                <Buttons className='btnBox'>
                    <button  className='button'> Add More Food</button>
                    <button  className='button'> Checkout</button>
                </Buttons>
                <Total>

                <h3 > Total</h3>
                <h4>$ {total.toFixed(2)}</h4>
                </Total>
            </Last>
        </Container>
        </div>

    )
}