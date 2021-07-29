import { UiTypes as ActionTypes } from "../actionTypes/ui.types";

const initialState = {
    showSidebar: false,
};

export const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        default:
            return state;
    }
};
