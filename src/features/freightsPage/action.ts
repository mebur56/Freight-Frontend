
import {
    FreightsSuccess,
    FreightsFailure,
    FreightsRequest,
    freightsTypes,
    Freight,
    RequestFilterPayload,

} from './interfaces'



export const FreightsRequestAction = (payload?: RequestFilterPayload): FreightsRequest => (
    {
        type: freightsTypes.FREIGHTS_REQUEST,
        payload
    }
)
export const FreightsSuccessAction = (payload: Freight[]): FreightsSuccess => (
    {
        type: freightsTypes.FREIGHTS_SUCCESS,
        payload

    }
)
export const FreightsFailureAction = (): FreightsFailure => (
    {

        type: freightsTypes.FREIGHTS_FAILURE,
    }
)