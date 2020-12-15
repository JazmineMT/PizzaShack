import React from 'react'
import {IMGBox, ContentBox, AddBox, Container, IMG, H4,H3, H42, OtherBox} from '../styles/LocationStyles'
import store from '../Data/pics/store.jpg'
import StoreIcon from '@material-ui/icons/Store';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';



export default function LocationFinderCard(props){

    return (
            <Container>
                <ContentBox>
                        <H3><StoreIcon/> Ready in 15 mins</H3>
    
                    <AddBox>
                     <H42>{props.places.streetAddress}</H42>
                     <H42>{props.places.stateCity} {props.places.zipCode}</H42>

                    </AddBox>
                    <OtherBox>
                    <H4> <PhoneIcon/> {props.places.phone}</H4>
                     <H4><ScheduleIcon/> {props.places.hours}</H4>
                     </OtherBox>
                </ContentBox>
                <IMGBox>
                    <IMG src={store}/>

                </IMGBox>
                
            </Container>
    )   
}