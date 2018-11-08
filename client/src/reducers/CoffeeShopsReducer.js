import { GET_COFFEE_SHOPS } from '../constants';

export const CoffeeShopsReducer = (state=[], action) => {
    switch(action.type) {
        case GET_COFFEE_SHOPS: 
        console.log(action.payload)
            return action.payload;
        default:
            return state;
    }    
}