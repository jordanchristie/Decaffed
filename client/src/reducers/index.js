import { LocationReducer } from './LocationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    coordinates: LocationReducer
})

export default rootReducer;

