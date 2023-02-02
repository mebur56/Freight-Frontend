import { all, AxiosResponse } from "axios"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import * as api from "../../app/api"
import { UploadFailureAction, UploadSuccessAction } from "./action"
import { uploadTypes } from "./types"

function* uploadFileSaga() {
    try {
        console.log("sagas")
        const response: AxiosResponse = yield call(api.uploadFile, "TODO")
        console.log(response);
        yield put(UploadSuccessAction({
            success: "success"
        }))
    }
    catch (e) {
        yield put(
            UploadFailureAction({
                error: "Unknow Error"
            })
        )
    }
}

function* uploadSaga() {
    yield takeLatest(uploadTypes.UPLOAD_REQUEST, uploadFileSaga)
}

export default uploadSaga