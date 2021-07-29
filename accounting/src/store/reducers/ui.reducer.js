import { UiTypes as ActionTypes } from "../actionTypes/ui.types";

const initialState = {
    showSidebar: false,
    menuItems: [
        { name: "Account", slug: "/" },
        { name: "History", slug: "/history" },
        { name: "Planning", slug: "/planning" },
        { name: "New entry", slug: "/new-entry" },
        { name: "Categories", slug: "/categories" },
    ],
};

export const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        default:
            return state;
    }
};
