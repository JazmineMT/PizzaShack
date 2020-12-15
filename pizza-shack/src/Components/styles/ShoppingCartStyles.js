import styled from 'styled-components'


export const Container = styled.div `
width: 80%;
margin: 8%;

box-sizing: border-box;


`

export const ItemsContainer = styled.div `
width: 90%;
margin: 5%;
`

export const Last = styled.div `
display: flex;
justify-content:space-between;
`

export const Total = styled.div `
display: flex;
justify-content: space-around;
width: 100%;


`


export const Buttons = styled.div `
width: 100%;
margin-left: 10%;
margin-top: -3%;


`

export const Item = styled.div `
width: 100%;
height: 30vh;
display: flex;
justify-content: space-between ;
background-color: #F5F5F5;
box-shadow: 5px 5px 15px rgba(#0F222D, .5);
color: #4E4E4E;
border-radius: 10px;
margin: 3%;

`
export const IMG = styled.img `
width : 100%;
height: 100%;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;


`
export const IMGBox = styled.div `
width: 50%;
height: 100%;
display:flex;
flex-direction:column;
align-self: flex-end;
`

export const DesBox = styled.div `
padding-top: 3%;
`

export const PriceBox = styled.div `
margin-right: 2%;
display: flex;
flex-direction: column;
justify-content: center;


`
export const NameBox = styled.div `
font-size: 2rem;

`
export const MiddleBox = styled.div `
width: 50%;
margin: 3%;
margin-left:1%; 



`

export const Title = styled.h3`
color: #2A3C47;
font-size: 1.7rem;
text-transform: uppercase;
`

export const Price = styled.h4`
color: #2A3C47;
font-size: 1.5rem;
padding-top: 4%;

`

export const Para = styled.p`

font-weight: bold;
`

export const Remove = styled.div `
cursor: pointer;

`