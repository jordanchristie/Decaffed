import { GET_COORDINATES } from '../constants';

export const LocationReducer = (state={}, action) => {
    switch(action.type) {
        case GET_COORDINATES: 
            return action.coordinates;
        default:
            return state;
    }    
}