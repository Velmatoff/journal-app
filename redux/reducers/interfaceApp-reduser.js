const SET_VIEW_MODE = 'SET_VIEW_MODE';


const initState = {
    viewMode: 'empty'
};
export const interfaceAppReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_VIEW_MODE:
            const viewMode = action.viewMode;
            console.log(viewMode);
            return {...state, viewMode};
        default:
            return state
    }

};

export const setViewMode = (viewMode) => ({type: SET_VIEW_MODE, viewMode});
