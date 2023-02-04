import { Freight, FreightsActions, FreightsState, freightsTypes } from "./interfaces"


const initialState: FreightsState = {
    success: false,
    finished: false,
    freights: [] as Freight[],
    pending: false,
}

export default (state = initialState, action: FreightsActions) => {
    switch (action.type) {
        case freightsTypes.FREIGHTS_REQUEST:
            return {
                ...state,
                pending: true,
                finished: false
            }
            case freightsTypes.FREIGHTS_SUCCESS:
                return {
                    ...state,
                    success: true,
                finished: true,
                pending: false,
                freights: action.payload
            }
        case freightsTypes.FREIGHTS_FAILURE:
            return {
                ...state,
                success: false,
                finished: true,
                pending: false,
            }

        default:
            return {
                ...state
            }

    }
}