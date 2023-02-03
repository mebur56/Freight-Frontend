
import {
    FreightsSuccess,
    FreightsFailure,
    FreightsRequest,
    FreightsSuccessPayload,
    freightsTypes,

} from './interfaces'



export const FreightsRequestAction = (): FreightsRequest => (
    {
        type: freightsTypes.FREIGHTS_REQUEST,
    }
)
export const FreightsSuccessAction = (payload: FreightsSuccessPayload): FreightsSuccess => (
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