import { GET_COORDINATES } from '../constants';

export const fetchCoordinates = (coordinates, history) => {
    console.log(history)
    return {
        type: GET_COORDINATES,
        payload: coordinates
    }
}