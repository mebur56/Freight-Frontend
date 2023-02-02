
import {
    UploadSuccess,
    UploadFailure,
    UploadRequest,
    UploadFailurePayload,
    UploadSuccessPayload,
    UploadRequestPayload,

} from './interfaces'

import { uploadTypes } from './types'


export const UploadRequestAction = (payload: UploadRequestPayload): UploadRequest => (
    {
        type: uploadTypes.UPLOAD_REQUEST,
        payload
    }
)
export const UploadSuccessAction = (payload: UploadSuccessPayload): UploadSuccess => (
    {
        type: uploadTypes.UPLOAD_SUCCESS,
        payload
    }
)
export const UploadFailureAction = (payload: UploadFailurePayload): UploadFailure => (
    {

        type: uploadTypes.UPLOAD_FAILURE,
        payload
    }
)