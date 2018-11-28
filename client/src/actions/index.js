import { GET_COORDINATES, GET_COFFEE_SHOPS } from '../constants';
import keys from '../keys.json';


// MAP ACTIONS
export const fetchCoordinates = (coordinates, history) => {
    history.push('/map')
    return {
        type: GET_COORDINATES,
        coordinates
    }
}

export const fetchCoffeeShops = (coordinates) => {
    // Places API setup
    return dispatch => {
        fetch(`https://cors-anywhere.herokuapp.com/${keys.YelpSearchURL}&latitude=${coordinates.lat}&longitude=${coordinates.lng}`, {headers: {Authorization: `Bearer ${keys.YelpAPIKey}`}})
            .then(res => res.json())
            .then(data => dispatch({type: GET_COFFEE_SHOPS, places: data.businesses}))
    }  
}

// BACKEND ACTIONS
export const addFavorite = () => {
    console.log('favorited!')
}

export const removeFavorite = () => {
    console.log('unfavorited!')
}