import { GET_COORDINATES,
         GET_COFFEE_SHOPS,
         ADD_FAVORITE,
         //REMOVE_FAVORITE,
         GET_FAVORITES
          } from '../constants';
import keys from '../keys.json';
import axios from 'axios';


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

// FAVORITES

export const fetchFavorites = () => {
    return dispatch => {
        axios.get('/api/favorites')
            .then(res => res.data)
            .then(data => dispatch({type: GET_FAVORITES, payload: data}))
    }
}

export const addFavorite = (shop) => {
    return dispatch => {
        console.log(shop)
        axios.post('/api/favorites', shop)
            .then(favorite => dispatch({type: ADD_FAVORITE, payload: favorite}))
    } 
}

export const removeFavorite = (id) => {
    return dispatch => {
        console.log(id)
        //axios.remove('/favorites', id)
            //.then(data => dispatch({type: REMOVE_FAVORITE, payload: data}))
    } 
}