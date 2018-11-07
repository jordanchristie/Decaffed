import { GET_COORDINATES } from '../constants';

export const fetchCoordinates = (coordinates, history) => {
    history.push('/map')
    return {
        type: GET_COORDINATES,
        payload: coordinates
    }
}

export const fetchCoffeeShops = (dispatch) => {
    
}