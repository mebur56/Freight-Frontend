
import {
    UploadSuccess,
    UploadFailure,
    UploadRequest,
    UploadRequestPayload,
    uploadTypes,

} from './interfaces'



export const UploadRequestAction = (payload: UploadRequestPayload): UploadRequest => (
    {
        type: uploadTypes.UPLOAD_REQUEST,
        payload
    }
)
export const UploadSuccessAction = (): UploadSuccess => (
    {
        type: uploadTypes.UPLOAD_SUCCESS,
    }
)
export const UploadFailureAction = (): UploadFailure => (
    {

        type: uploadTypes.UPLOAD_FAILURE,
    }
)