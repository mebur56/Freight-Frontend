import { Action } from "@remix-run/router"
import { UploadState, UploadActions } from "./interfaces"
import { uploadTypes } from "./types"

const initialState: UploadState = {
    pending: false,
    upload: "",
    error: ""
}

export default (state = initialState, action: UploadActions) => {
    console.log("reducer", action.type)
    switch (action.type) {
        case uploadTypes.UPLOAD_REQUEST:
            return {
                ...state,
                pending: true
            }
        case uploadTypes.UPLOAD_SUCCESS:
            return {
                ...state,
                upload: "",
                pending: false
            }
        case uploadTypes.UPLOAD_FAILURE:
            return {
                ...state,
                upload: "",
                pending: false,
                error: action.payload.error
            }

        default:
            return {
                ...state
            }

    }
}