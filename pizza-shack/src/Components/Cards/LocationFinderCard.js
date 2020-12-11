import React from 'react'
import {IMGBox, ContentBox, AddBox, Container, IMG} from '../styles/LocationStyles'
import store from '../Data/pics/store.jpg'
import StoreIcon from '@material-ui/icons/Store';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';



export default function LocationFinderCard(props){

    return (
            <Container>
                <ContentBox>
                        <h3><StoreIcon/> Ready in 15 mins</h3>
    
                    <AddBox>
                     <h4>{props.places.streetAddress}</h4>
                     <h4>{props.places.stateCity} {props.places.zipCode}</h4>

                    </AddBox>
                    <h4> <PhoneIcon/> {props.places.phone}</h4>
                     <h4><ScheduleIcon/> {props.places.hours}</h4>
                </ContentBox>
                <IMGBox>
                    <IMG src={store}/>

                </IMGBox>
                
            </Container>
    )   
}