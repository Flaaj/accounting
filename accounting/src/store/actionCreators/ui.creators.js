import { UiTypes as ActionTypes } from "../actionTypes/ui.types"

export const UiCreators = {
    toggleSidebar: () => ({
        type: ActionTypes.TOGGLE_SIDEBAR,
    }),
}
