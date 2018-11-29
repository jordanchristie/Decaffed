import { GET_FAVORITES,
         ADD_FAVORITE,
         REMOVE_FAVORITE } from '../constants';

export const FavoritesReducer = (state = [], action ) => {
    switch (action.type) {
        case GET_FAVORITES:
        case ADD_FAVORITE:
        case REMOVE_FAVORITE:
            return action.payload
        default:
            return state
    }
}