import { combineReducers } from "redux";
import { UiReducer } from "./ui.reducer";

export const reducer = combineReducers({
    ui: UiReducer,
});
