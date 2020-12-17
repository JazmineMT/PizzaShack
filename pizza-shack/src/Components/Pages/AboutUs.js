import React from 'react'
import working from '../Data/pics/working.jpg'
import tomato from '../Data/pics/tomato.jpg'
import oven from '../Data/pics/oven.jpg'
import {ContentBox, IMG, Container, IMGBox,  PBox} from '../styles/AboutUsStyles'

export default function AboutUs(props){
    return (
        <>
        <h1 className='pageTitle'> Here's Our Story</h1>
        <Container>
            <ContentBox>
                <IMGBox>
                <IMG src={working} alt='working'/>
                </IMGBox>
                <PBox>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in vulputate justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor gravida tempus. Suspendisse nec bibendum lacus. Aenean feugiat enim dui, quis laoreet libero congue vitae. Maecenas ultrices aliquet mi sed fermentum. Praesent aliquam nec leo et ultrices. Maecenas dictum mollis nibh id scelerisque. Quisque quis justo eros </p>
                </PBox>
            </ContentBox>
            <ContentBox>
                <PBox>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in vulputate justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor gravida tempus. Suspendisse nec bibendum lacus. Aenean feugiat enim dui, quis laoreet libero congue vitae. Maecenas ultrices aliquet mi sed fermentum. Praesent aliquam nec leo et ultrices. Maecenas dictum mollis nibh id scelerisque. Quisque quis justo eros </p>
                </PBox>
                <IMGBox classname='imgBox' >
                <IMG   src={tomato} alt='tomato'/>
                </IMGBox>
            </ContentBox>
            <ContentBox>
                <IMGBox>
                <IMG src={oven} alt='oven'/>
                </IMGBox>
                <PBox>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in vulputate justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque auctor gravida tempus. Suspendisse nec bibendum lacus. Aenean feugiat enim dui, quis laoreet libero congue vitae. Maecenas ultrices aliquet mi sed fermentum. Praesent aliquam nec leo et ultrices. Maecenas dictum mollis nibh id scelerisque. Quisque quis justo eros </p>
                </PBox>
            </ContentBox>
        </Container>
        </>
    )
}