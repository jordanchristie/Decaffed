import { GET_COORDINATES, GET_COFFEE_SHOPS } from '../constants';
import keys from '../keys.json';

export const fetchCoordinates = (coordinates, history) => {
    history.push('/map')
    return {
        type: GET_COORDINATES,
        coordinates
    }
}

export const fetchCoffeeShops = (coordinates) => {
    console.log(coordinates)
    // Places API setup
    return dispatch => {
        fetch(`https://cors-anywhere.herokuapp.com/${keys.YelpSearchURL}&latitude=${coordinates.lat}&longitude=${coordinates.lng}`, {headers: {Authorization: `Bearer ${keys.YelpAPIKey}`}})
            .then(res => res.json())
            .then(data => dispatch({type: GET_COFFEE_SHOPS, places: data.businesses}))
    }
    
}