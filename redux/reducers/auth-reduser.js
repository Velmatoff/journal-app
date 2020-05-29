import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN';
const UNMARK = 'UNMARK';
const LOGOUT = 'LOGOUT';

let initState = {
    userId: null,
    userAvatar: null,
    subscription: false,
    fullName: '',
    bookmarks: [],
    journals: [],
    email: null,
    isAuth: false,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                isAuth: true
            };
        case LOGOUT :
            return {
                ...state,
                isAuth: false
            };
        case SET_USER_DATA:
            let newState = action.payload;
            return{
                ...newState
            };
        case UNMARK:
            const newBookmarks = state.bookmarks.filter(item => item.id !== action.id);
            return {...state, bookmarks: newBookmarks};

        default:
            return state
    }
};

const login = () => ({type: LOGIN});
const setUserData = (payload) => ({type: SET_USER_DATA, payload});

export const getUserData = () => async dispatch => {
    let response = await authAPI.login();
        dispatch(setUserData(response.data));
        dispatch(login());
};



export const unmark = (id) => ({type: UNMARK, id});


export const logout = () => ({type: LOGOUT});




