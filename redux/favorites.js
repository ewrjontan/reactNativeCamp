import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type){
        case ActionTypes.ADD_FAVORITE:
            //storing id's of favorite campsites in an array, if user tries to add a new favorite, id of campsite is payload
            if (state.includes(action.payload)){//check if campsite id already exists in array
                return state;
            }
            return state.concat(action.payload);
        
        default:
            return state;    
    }
};