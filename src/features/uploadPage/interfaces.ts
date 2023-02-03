export enum uploadTypes {
    UPLOAD_REQUEST = "UPLOAD_REQUEST",
    UPLOAD_SUCCESS = "UPLOAD_SUCCESS",
    UPLOAD_FAILURE = "UPLOAD_FAILURE"
}

export interface UploadState {
    success: boolean;
    finished: boolean;
    pending: boolean;
}


export interface UploadRequestPayload {
    fileForm: FormData;
}

export interface UploadRequest {
    type: typeof uploadTypes.UPLOAD_REQUEST;
    payload: UploadRequestPayload
}

export interface UploadSuccess {
    type: typeof uploadTypes.UPLOAD_SUCCESS;
};

export interface UploadFailure {
    type: typeof uploadTypes.UPLOAD_FAILURE;
};

export type UploadActions =
    | UploadRequest
    | UploadSuccess
    | UploadFailure;




