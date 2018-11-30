import { ADD_NOTE } from '../constants';

export const NoteReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return action.payload;
        default:
            return state;
    }
}