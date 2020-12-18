import React , {useEffect, useState}from 'react'
import {Container, ItemsContainer, Last, Buttons, Total, Remove} from '../styles/ShoppingCartStyles'
import {Item, IMG, IMGBox, DesBox, PriceBox, NameBox,MiddleBox, Title, Price, Para} from '../styles/ShoppingCartStyles'
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

    function refreshPage() {
        window.location.reload(false);
      }

    const remove = (item) => {
        
        props.remove(item)
    }

    return (
        <div>
            <h1 className='pageTitle'> My Order </h1>
        <Container>
        {props.order.length === 0 && (
                <h1 className='empty'> There's nothing in your cart! </h1>
            ) }
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
                        <Title>{item.size} Pizza</Title>
                        </NameBox>
                        <DesBox>
                        <Para>{item.size} {item.crust} crust Pizza with {item.sauce} sauce </Para>
                        {item.toppings.map(topping => {    
                            return(
                                <div>
                                    <Para>{topping}</Para>
                                </div>
                            )
                        })}
                        
                        
                        </DesBox>
                        </MiddleBox>
                        <PriceBox>
                            <Price > ${item.price.toFixed(2)}</Price>
                            <Remove onClick={() =>{
                                    props.removeSpecail(item)
                                    sum = total - item.price
                                    SetTotal(sum)
                                }}> Remove</Remove>
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
                            <Title>{item.name}</Title>
                            </NameBox>
                            <DesBox>
                            <Para>{item.description}</Para>
                            </DesBox>
                            </MiddleBox>
                            <PriceBox>
                                <Price > ${item.price.toFixed(2)}</Price>
                                <Remove onClick={() =>{
                                    props.remove(item)
                                    sum = total - item.price
                                    SetTotal(sum)
                                }}> Remove</Remove>

                            </PriceBox>
                        </Item>
                    )
                }
            })}
             
            </ItemsContainer>
                {props.order.length > 0 && (
                
                <Last>
                    
                <Buttons className='btnBox'>
                    <button onClick={refreshPage} className='button'> Checkout</button>
                </Buttons>
                <Total>

                <h3 > Total</h3>
                <h4>$ {total.toFixed(2)}</h4>
                </Total>
            </Last>)}
        </Container>
        </div>

    )
}