import { all, AxiosResponse } from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as api from "../../app/api"
import { UploadFailureAction, UploadSuccessAction } from "./action"
import { UploadRequest, uploadTypes } from "./interfaces"


function* uploadFileSaga(action: UploadRequest) {
    try {
        const response: AxiosResponse = yield call(api.uploadFile, action.payload.fileForm)
        yield put(UploadSuccessAction())
    }
    catch (e) {
        yield put(
            UploadFailureAction()
        )
    }
}

function* uploadSaga() {
    yield takeLatest(uploadTypes.UPLOAD_REQUEST, uploadFileSaga)
}

export default uploadSaga