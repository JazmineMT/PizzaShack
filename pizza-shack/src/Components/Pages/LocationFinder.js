import React from 'react'
import {useState, useEffect} from 'react'
import {FinderBox, SearchBox, MapBox} from '../styles/LocationStyles'
import {TextField , Button, FormControl} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

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



export default function LocationFinder(props) {
const [search  , setSearch] = useState('')
const [location  , setLocation] = useState(initailLocation)
const classes = useStyles();

    const getLoc = async (e) => {
        e.preventDefault()
        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo&components=postal_code:${search}`
        try{
         const res = await fetch(url)
         const data = await res.json()
         const results = data.results 
         results.map(item => {
             setLocation({

                lat: item.geometry.location.Lat,
                lng: item.geometry.location.Lng
              
           })
         })
         



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
                        placeholder="Zip Code"
                        fullWidth = {true}
             />
             <button onClick={getLoc} className='button' > Search </button>
                    
   

            </SearchBox>
            <MapBox>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAa6KpgYLtTzRPT8KHEjTMyi3qXaZ-eDJo' }}
                defaultCenter={location}
                defaultZoom={15}

                
        >
        </GoogleMapReact>

            </MapBox>
        </FinderBox>
    )
}