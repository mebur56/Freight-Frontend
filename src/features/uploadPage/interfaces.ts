import { uploadTypes } from "./types";

export interface UploadState {
    pending: boolean;
    upload: any;
    error: string | null;
}


export interface UploadFailurePayload {
    error: string;
}
export interface UploadSuccessPayload {
    success: string;
}
export interface UploadRequestPayload {
    file: string;
}

export interface UploadRequest {
    type: typeof uploadTypes.UPLOAD_REQUEST;
    payload: UploadRequestPayload
}

export type UploadSuccess = {
    type: typeof uploadTypes.UPLOAD_SUCCESS;
    payload: UploadSuccessPayload;
};

export type UploadFailure = {
    type: typeof uploadTypes.UPLOAD_FAILURE;
    payload: UploadFailurePayload;
};

export type UploadActions =
    | UploadRequest
    | UploadSuccess
    | UploadFailure;