import {journalAPI} from "../../api/api";

const SET_CATEGORIES = 'SET_CATEGORIES';


const initState = [];

export const journalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            const newState = action.payload;
            return [...newState]
    }
    return state;
};

const categories = (payload) => ({type: SET_CATEGORIES, payload});

export const getCategories = () => async dispatch => {
    let response = await journalAPI.get();
    dispatch(categories(response.data));
};
