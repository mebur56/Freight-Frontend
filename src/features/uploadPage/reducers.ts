import { UploadActions, UploadState, uploadTypes } from "./interfaces"


const initialState: UploadState = {
    success: false,
    finished: false,
    pending: false,
}

export default (state = initialState, action: UploadActions) => {
    switch (action.type) {
        case uploadTypes.UPLOAD_REQUEST:
            return {
                ...state,
                pending: true,
                finished: false
            }
        case uploadTypes.UPLOAD_SUCCESS:
            return {
                ...state,
                success: true,
                finished: true,
                pending: false
            }
        case uploadTypes.UPLOAD_FAILURE:
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