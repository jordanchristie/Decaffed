import { LocationReducer } from './LocationReducer';
import { CoffeeShopsReducer } from './CoffeeShopsReducer';
import { FavoritesReducer } from './FavoritesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    coordinates: LocationReducer,
    coffeeShops: CoffeeShopsReducer,
    favoritedShops: FavoritesReducer
})

export default rootReducer;

