import { all, AxiosResponse } from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as api from "../../app/api"
import { UploadFailureAction, UploadSuccessAction } from "./action"
import { UploadRequest, uploadTypes } from "./interfaces"


export function* uploadFileSaga(action: UploadRequest) {
    try {
        const response: AxiosResponse = yield call(api.uploadFile, action.payload.fileForm)
        switch (response.status) {
            case 201:
                yield put(UploadSuccessAction())
                break;
            default:
                UploadFailureAction()
                break;

        }
        return;
    }
    catch (e) {
        yield put(
            UploadFailureAction()
        )
        return;
    }
}

function* uploadSaga() {
    yield takeLatest(uploadTypes.UPLOAD_REQUEST, uploadFileSaga)
}

export default uploadSaga