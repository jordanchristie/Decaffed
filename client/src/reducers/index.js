import { LocationReducer } from './LocationReducer';
import { CoffeeShopsReducer } from './CoffeeShopsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    coordinates: LocationReducer,
    coffeeShops: CoffeeShopsReducer
})

export default rootReducer;

