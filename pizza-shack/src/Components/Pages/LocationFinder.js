import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {useState,  useRef , useEffect} from 'react'
import {FinderBox, SearchBox, MapBox} from '../styles/LocationStyles'
import {TextField , Button, FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {places} from '../Data/data'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import { red } from '@material-ui/core/colors'

 

const useStyles = makeStyles((theme) => ({
    textBox: {
      width: '30%',
      margin: '3%',

    },
    button: {
        width: '30%',
    }
  }));

const initailLocation = {

     lat: 47.620422,
     lng: -122.349358
   
}

mapboxgl.accessToken = 'pk.eyJ1IjoiamF6bWluZW10IiwiYSI6ImNraWpwcHdlZDAyOGsyeXA3bnM5anM2Ym8ifQ.C09jSGF7t0vwqHnQWjoqMA';

export default function LocationFinder(props) {
const [search  , setSearch] = useState('')
const [location  , setLocation] = useState({latitude: 39.8283, longitude: -98.5556,})
const classes = useStyles();
const mapContainerRef = useRef(null);

        useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.longitude, location.latitude],
      zoom: 3,
	});
		map.on('load', async () => {
			// iterate through the feature collection and append marker to the map for each feature
			places.map(result => {
			console.log(result)

			var marker = new mapboxgl.Marker({
				color: 'red',
				draggable: false
				}).setLngLat([result.long,result.lat])
				.addTo(map);
			})
		})
        // add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // clean up on unmount
		return () => map.remove();
		
		
      }, []);


    const getLoc = async (e) => {
		e.preventDefault()
        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo&address=${search}`
        try{
         const res = await fetch(url)
         const data = await res.json()
		 const results = data.results 
         results.map(item => {
			const map = new mapboxgl.Map({
				container: mapContainerRef.current,
				// See style options here: https://docs.mapbox.com/api/maps/#styles
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [item.geometry.location.lng, item.geometry.location.lat],
				zoom: 10,
			  });
			  map.on('load', async () => {
				// iterate through the feature collection and append marker to the map for each feature
				places.map(result => {
				console.log(result)
	
				var marker = new mapboxgl.Marker({
					color: 'red',
					draggable: false
					}).setLngLat([result.long,result.lat])
					.addTo(map);
				})
			})
				  // add navigation control (the +/- zoom buttons)
				  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
		  
				  // clean up on unmount
				  return () => map.remove();
		 })
		 setSearch('')


        }catch(err){
            console.log(err)
        }

    }


    const handleChange = (evt) => {
        const {name , value} = evt.target

        setSearch(value);
      };
 


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
            <MapBox >
            <div className="mapContainer" ref={mapContainerRef}>

			</div>
            </MapBox>
        </FinderBox>
    )
}