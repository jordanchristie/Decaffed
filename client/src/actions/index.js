import { GET_COORDINATES,
         GET_COFFEE_SHOPS,
         ADD_FAVORITE,
         REMOVE_FAVORITE,
         GET_FAVORITES,
         ADD_NOTE,
         EDIT_NOTE,
         GET_NOTES,
         REMOVE_NOTE
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
        axios.delete(`/api/favorites/${id}`)
            .then(data => dispatch({type: REMOVE_FAVORITE, payload: data}))
    } 
}

// NOTES

export const fetchNotes = () => {
    return dispatch => {
        axios.get('api/notes')
            .then(data => dispatch({type: GET_NOTES, payload: data}))
    }
}

export const addNote = (note) => {
    return dispatch => {
        console.log(note)
        axios.post('/api/notes', note)
            .then(data => dispatch({type: ADD_NOTE, payload: data}))
    }
}

export const editNote = (note, id) => {
    return dispatch => {
        console.log(note)
        axios.put(`/api/notes/${id}`, note)
            .then(data => dispatch({type: EDIT_NOTE, payload: data}))
    }
}

export const removeNote = (id) => {
    return dispatch => {
        axios.delete(`/api/notes/${id}`)
            .then(data => dispatch({type: REMOVE_NOTE, payload: data}))
    }
}