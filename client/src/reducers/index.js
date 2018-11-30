import { LocationReducer } from './LocationReducer';
import { CoffeeShopsReducer } from './CoffeeShopsReducer';
import { FavoritesReducer } from './FavoritesReducer';
import { NoteReducer } from './NoteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    coordinates: LocationReducer,
    coffeeShops: CoffeeShopsReducer,
    favoritedShops: FavoritesReducer,
    notes: NoteReducer
})

export default rootReducer;

