import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {useState,  useRef , useEffect} from 'react'
import {FinderBox, SearchBox, MapBox, PlacesBox, Marker,InfoWindow, InfoContent} from '../styles/LocationStyles'
import {TextField , Button, FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {places} from '../Data/data'
import LocationFinderCard from '../Cards/LocationFinderCard'
import { red } from '@material-ui/core/colors'
import GoogleMapReact from "google-map-react";

import LocalPizzaIcon from '@material-ui/icons/LocalPizza';



 

const useStyles = makeStyles((theme) => ({
    textBox: {
      width: '30%',
	  margin: '3%',
	  background: '#EBE7D9',
	  borderRadius: '10px',

    },
    button: {
        width: '30%',
    }
  }));



export default function LocationFinder(props) {
const [search  , setSearch] = useState('')
const [showinfoWindow, setShowinfoWindow] = useState(false)
const [ filter , SetFilter] = useState(places)
const [location , setLocation] = useState(null)
const [prev  ,setPrev] = useState(null)
const classes = useStyles();
const mapContainerRef = useRef(null);

let isVisible = true; 

    const getLoc = async (e) => {
		e.preventDefault()
        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo&address=${search}`
        try{
         const res = await fetch(url)
         const data = await res.json()
		 const results = data.results 
		 console.log(results)
		 
			setPrev(location)
         results.map(item => {
			setLocation({latitude: item. geometry.location.lat, longitude: item.geometry.location.lng})
		 })

		if(search.length === 5){
			const filteredZip = places.filter((place) => place.zipCode == search )
			SetFilter(filteredZip)
		}else {
			const filteredStateCity = places.filter((place) => place.stateCity == search )
			SetFilter(filteredStateCity)
		}

		 setSearch('')
		 
		

        }catch(err){
            console.log(err)
        }

	}

	const onClick = (evt) => {
		setShowinfoWindow(isVisible)
		isVisible = !isVisible
	}


    const handleChange = (evt) => {
        const {name , value} = evt.target

        setSearch(value);
      };
	  
	  console.log(showinfoWindow)


    return (
        <FinderBox>
            <h1 className='title'> Find a Pizza Shack Near You</h1>
            <SearchBox className='search'>
            <TextField
                        className={classes.textBox}
                        type='email'
                        name='search'
                        value={search}
                        onChange={handleChange}
                        variant='outlined'
                        placeholder="Enter City,State or Zip Code"
                        fullWidth = {true}
             />
             <button onClick={getLoc} className='button' > Search </button>
                    
   

            </SearchBox>
            <MapBox>
				{ location === null && (

						<GoogleMapReact
						bootstrapURLKeys={{
						key: "AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo",
						language: "en",
						region: "US"
						}}
						defaultCenter={{ lat: 39.8283, lng: -98.5556 }}
						defaultZoom={4}
						>
						{places.map(point => (
						<Marker
						lat={point.lat}
						lng={point.long}
						color='red'
						name='Pizza Shack'
						text='Hello'
						onClick={onClick}
						isdraggable={true}

						>
						
						{
							showinfoWindow ? 
							<InfoWindow>
							<InfoContent>
								<h1>Pizza Shack</h1>
								<h2>{point.fullAdd}</h2>
								<h2>{point.phone}</h2>
								<h2>{point.hours}</h2>
							</InfoContent> 
								</InfoWindow>
								 : null
						}
					
						<LocalPizzaIcon style={{ color: red[500] ,  fontSize: 40}} />
						</Marker>
					))}
						
						</GoogleMapReact>


				)}
				{ location != prev && (

					<GoogleMapReact
					bootstrapURLKeys={{
					key: "AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo",
					language: "en",
					region: "US"
					}}
					defaultCenter={{ lat: location.latitude, lng: location.longitude }}
					defaultZoom={12}
				
					>

					{places.map(point => (
						<Marker
						lat={point.lat}
						lng={point.long}
						onClick={onClick}
						isdraggable={true}

						>			
					
						{
							showinfoWindow ? 
							<InfoWindow>
							<InfoContent>
								<div>
								<h1 className='infoBox'>Pizza Shack</h1>
								<h2 className='infoBox' >{point.fullAdd}</h2>
								<h2 className='infoBox' >{point.phone}</h2>
								<h2 className='infoBox' >{point.hours}</h2>
								</div>
							</InfoContent>
							</InfoWindow>  : null
						}
						
						<LocalPizzaIcon style={{ color: red[500] ,  fontSize: 40, paddingRight:'5%'}} />
						</Marker>
					))}
					</GoogleMapReact>
					

				)}
			</MapBox>

            
			<PlacesBox>
					<PlacesBox>
				{filter.map(shack => (
					<LocationFinderCard places={shack}/>
				))}
				</PlacesBox>
	
				
			</PlacesBox>
        </FinderBox>
    )
}