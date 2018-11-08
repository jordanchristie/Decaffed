import { GET_COORDINATES, GET_COFFEE_SHOPS } from '../constants';


export const fetchCoordinates = (coordinates, history) => {
    history.push('/map')
    return {
        type: GET_COORDINATES,
        payload: coordinates
    }
}

export const fetchCoffeeShops = (coordinates, google) => {
    // Places API setup
    return dispatch => {
        const service = new google.maps.places.PlacesService(document.getElementById('map'));
        const request = {
            location: coordinates,
            radius: 50000,
            type: ['cafe']
        };
    const callback = (places, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            dispatch({type: GET_COFFEE_SHOPS, payload: places}); 
        }
    }
    service.nearbySearch(request, callback);
    }
    
}