import { ADD_NOTE, 
         EDIT_NOTE,
         REMOVE_NOTE,
         GET_NOTES } from '../constants';

export const NoteReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NOTE:
        case EDIT_NOTE:
        case REMOVE_NOTE:
        case GET_NOTES:
            return action.payload;
        default:
            return state;
    }
}